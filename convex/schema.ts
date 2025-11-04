import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"
import { authTables } from "@convex-dev/auth/server"

export default defineSchema({
  ...authTables,
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.string(),
    message: v.string(),
    phone: v.optional(v.string()),
    service: v.optional(v.string()),
    createdAt: v.number(),
    status: v.optional(v.union(v.literal("pending"), v.literal("sent"), v.literal("failed"))),
  }),
})

