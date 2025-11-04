import { mutation, query, action, internalMutation, internalQuery, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

// Mutation to create a new contact submission and schedule email notification
export const submitContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    phone: v.optional(v.string()),
    service: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      subject: args.subject,
      message: args.message,
      phone: args.phone,
      service: args.service,
      createdAt: Date.now(),
      status: "pending",
    });

    console.log("New contact submission created:", contactId);

    // Schedule the email notification action to run immediately after this transaction
    await ctx.scheduler.runAfter(0, internal.contacts.sendNotificationEmail, {
      contactFormId: contactId,
    });

    return contactId;
  },
});

// Internal action to send email notification
export const sendNotificationEmail = internalAction({
  args: {
    contactFormId: v.id("contacts"),
  },
  handler: async (ctx, args) => {
    "use node";

    // Get the contact form details
    const contactForm = await ctx.runQuery(internal.contacts.getContactFormDetails, {
      contactFormId: args.contactFormId,
    });

    if (!contactForm) {
      console.error("Contact form not found:", args.contactFormId);
      return;
    }

    try {
      const response = await fetch(process.env.EMAIL_NOTIFICATION_ENDPOINT!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          toEmail: process.env.RECIPIENT_EMAIL!,
          subject: `Nová zpráva z kontaktního formuláře: ${contactForm.subject}`,
          message: `Nová zpráva z kontaktního formuláře od ${contactForm.name} (${contactForm.email}):

Předmět: ${contactForm.subject}

${contactForm.phone ? `Telefon: ${contactForm.phone}` : ''}
${contactForm.service ? `Služba: ${contactForm.service}` : ''}

Zpráva:
${contactForm.message}`,
          chatId: process.env.CHAT_ID!,
          appName: process.env.APP_NAME!,
          secretKey: process.env.SECRET_KEY!,
        }),
      });

      if (response.ok) {
        console.log("Email notification sent successfully");
        await ctx.runMutation(internal.contacts.updateContactFormStatus, {
          contactFormId: args.contactFormId,
          status: "sent",
        });
      } else {
        console.error("Failed to send email notification:", response.status, response.statusText);
        await ctx.runMutation(internal.contacts.updateContactFormStatus, {
          contactFormId: args.contactFormId,
          status: "failed",
        });
      }
    } catch (error) {
      console.error("Error sending email notification:", error);
      await ctx.runMutation(internal.contacts.updateContactFormStatus, {
        contactFormId: args.contactFormId,
        status: "failed",
      });
    }
  },
});

// Internal query to get contact form details
export const getContactFormDetails = internalQuery({
  args: {
    contactFormId: v.id("contacts"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.contactFormId);
  },
});

// Internal mutation to update contact form status
export const updateContactFormStatus = internalMutation({
  args: {
    contactFormId: v.id("contacts"),
    status: v.union(v.literal("pending"), v.literal("sent"), v.literal("failed")),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.contactFormId, {
      status: args.status,
    });
  },
});

// Query to get all contact submissions (for admin purposes)
export const getAllContacts = query({
  handler: async (ctx) => {
    return await ctx.db.query("contacts").order("desc").collect();
  },
});