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
        await ctx.runMutation(internal.contacts.updateContactFormStatus, {
          contactFormId: args.contactFormId,
          status: "sent",
        });
      } else {
        await ctx.runMutation(internal.contacts.updateContactFormStatus, {
          contactFormId: args.contactFormId,
          status: "failed",
        });
      }
    } catch (error) {
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

// Internal query to get all contact submissions (for admin purposes only)
// Changed from public query to internalQuery for security
export const getAllContacts = internalQuery({
  handler: async (ctx) => {
    return await ctx.db.query("contacts").order("desc").collect();
  },
});