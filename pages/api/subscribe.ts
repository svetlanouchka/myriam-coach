import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

interface ResponseData {
  success?: boolean;
  error?: string;
}

interface MailchimpError {
  response?: {
    text?: string;
  };
  message?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX,
  });

  try {
    await mailchimp.lists.addListMember(process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID as string, {
      email_address: email,
      status: 'subscribed',
    });
    return res.status(200).json({ success: true });
  } catch (error: unknown) {
    let errorMessage = 'Failed to subscribe. Please try again.';
    if (error instanceof Error) {
      console.error('Mailchimp error:', error.message);
      errorMessage = error.message;
    } else if (typeof error === 'object' && error !== null && 'response' in error) {
      const mailchimpError = error as MailchimpError;
      if (mailchimpError.response?.text) {
        console.error('Mailchimp error:', mailchimpError.response.text);
        errorMessage = 'Mailchimp error occurred';
      }
    } else {
      console.error('Mailchimp error:', error);
    }
    return res.status(500).json({ error: errorMessage });
  }
}