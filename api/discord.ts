import type { VercelRequest, VercelResponse } from '@vercel/node';

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK_URL;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const response = await fetch(DISCORD_WEBHOOK!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [{
          title: 'New Contact Form Submission',
          fields: [
            { name: 'Name', value: name },
            { name: 'Email', value: email },
            { name: 'Message', value: message }
          ],
          timestamp: new Date().toISOString(),
        }],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Discord');
    }

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message to Discord:', error);
    return res.status(500).json({ message: 'Failed to send message' });
  }
}
