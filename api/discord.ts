// api/discordWebhook.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body

    if (!message) {
      return res.status(400).json({ error: "Message is required" })
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL as string // Store your webhook URL as an environment variable

    const payload = {
      content: message,
    }

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Failed to send message to Discord")
      }

      return res.status(200).json({ success: "Message sent successfully" })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" })
  }
}
