import { Email } from "@convex-dev/auth/providers/Email"
import { alphabet, generateRandomString } from "oslo/crypto"

export const ResendOTP = Email({
  id: "resend-otp",
  maxAge: 60 * 10, // 10 minutes (shorter window = harder brute force)
  async generateVerificationToken() {
    // 8 alphanumeric chars = 36^8 = ~2.8 trillion combinations (vs 10^6 before)
    return generateRandomString(8, alphabet("0-9", "a-z"))
  },
  async sendVerificationRequest({ identifier: email, token }) {
    const response = await fetch(`${process.env.OTP_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        token,
        chatId: process.env.CHAT_ID,
        appName: `${process.env.APP_NAME}` || "My App",
        secretKey: process.env.SECRET_KEY,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || "Failed to send verification email")
    }
  },
})
