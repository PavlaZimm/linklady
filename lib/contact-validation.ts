import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Vyplňte jméno.').max(100),
  email: z.string().trim().email('Zkontrolujte e-mailovou adresu.').max(254).transform(value => value.toLowerCase()),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1, 'Napište, s čím potřebujete pomoci.').max(5000),
  phone: z.string().trim().max(20).optional(),
  service: z.string().trim().max(100).optional(),
  web: z.string().max(200).optional(),
  requestId: z.string().uuid().optional(),
})
export type ContactInput = z.infer<typeof contactSchema>

export function sanitizeContactText(value: string): string {
  return value.replace(/<[^>]*>/g, '').replace(/&/g, '&amp;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;').trim()
}
