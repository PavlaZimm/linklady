import { mutation, query, action, internalMutation, internalQuery, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";

// --- Input validation constants ---
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254; // RFC 5321
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_PHONE_LENGTH = 20;
const MAX_SERVICE_LENGTH = 100;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_SUBMISSIONS_PER_WINDOW = 5;

// Strip HTML tags to prevent stored XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

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
    // --- Input length validation ---
    if (args.name.length > MAX_NAME_LENGTH) throw new Error("Jméno je příliš dlouhé.");
    if (args.email.length > MAX_EMAIL_LENGTH) throw new Error("E-mail je příliš dlouhý.");
    if (args.subject.length > MAX_SUBJECT_LENGTH) throw new Error("Předmět je příliš dlouhý.");
    if (args.message.length > MAX_MESSAGE_LENGTH) throw new Error("Zpráva je příliš dlouhá (max 5000 znaků).");
    if (args.phone && args.phone.length > MAX_PHONE_LENGTH) throw new Error("Telefon je příliš dlouhý.");
    if (args.service && args.service.length > MAX_SERVICE_LENGTH) throw new Error("Služba je příliš dlouhá.");

    // --- Email format validation ---
    if (!EMAIL_REGEX.test(args.email)) throw new Error("Neplatný formát e-mailu.");

    // --- Required fields cannot be empty ---
    if (!args.name.trim()) throw new Error("Jméno je povinné.");
    if (!args.subject.trim()) throw new Error("Předmět je povinný.");
    if (!args.message.trim()) throw new Error("Zpráva je povinná.");

    // --- Rate limiting: max N submissions per email per hour ---
    const windowStart = Date.now() - RATE_LIMIT_WINDOW_MS;
    const recentByEmail = await ctx.db
      .query("contacts")
      .filter((q) =>
        q.and(
          q.eq(q.field("email"), args.email),
          q.gte(q.field("createdAt"), windowStart)
        )
      )
      .collect();

    if (recentByEmail.length >= MAX_SUBMISSIONS_PER_WINDOW) {
      throw new Error("Příliš mnoho zpráv. Zkuste to znovu za hodinu.");
    }

    // --- Sanitize inputs ---
    const sanitizedName = sanitizeInput(args.name);
    const sanitizedSubject = sanitizeInput(args.subject);
    const sanitizedMessage = sanitizeInput(args.message);
    const sanitizedPhone = args.phone ? sanitizeInput(args.phone) : undefined;
    const sanitizedService = args.service ? sanitizeInput(args.service) : undefined;

    const contactId = await ctx.db.insert("contacts", {
      name: sanitizedName,
      email: args.email.trim().toLowerCase(),
      subject: sanitizedSubject,
      message: sanitizedMessage,
      phone: sanitizedPhone,
      service: sanitizedService,
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