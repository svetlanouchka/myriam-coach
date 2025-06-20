import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp from '@mailchimp/mailchimp_marketing';

interface ResponseData {
  success?: boolean;
  error?: string;
  message?: string;
}

interface MailchimpError {
  response?: {
    text?: string;
    body?: {
      title?: string;
      detail?: string;
      status?: number;
    };
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

  // Validate environment variables
  if (
    !process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY ||
    !process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID ||
    !process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX
  ) {
    console.error('Missing Mailchimp environment variables:', {
      apiKey: !!process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
      audienceId: !!process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID,
      serverPrefix: !!process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_PREFIX,
    });
    return res.status(500).json({ error: 'Server configuration error' });
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
    return res.status(200).json({ success: true, message: 'Inscription réussie' });
  } catch (error: unknown) {
    let errorMessage = 'Failed to subscribe. Please try again.';
    console.error('Raw Mailchimp error:', JSON.stringify(error, null, 2));

    // Handle Error instance
    if (error instanceof Error) {
      console.error('Mailchimp error (Error instance):', error.message, error);
      if (
        error.message.toLowerCase().includes('bad request') &&
        (error as MailchimpError).response?.text
      ) {
        try {
          const parsedBody = JSON.parse((error as MailchimpError).response!.text!);
          console.error('Parsed response body:', parsedBody);
          if (
            parsedBody?.title?.toLowerCase().includes('member exists') ||
            parsedBody?.detail?.toLowerCase().includes('already a list member')
          ) {
            console.log('Email already subscribed:', email);
            return res.status(200).json({ success: true, message: 'Vous êtes déjà inscrit avec ce mail' });
          }
          errorMessage = parsedBody?.detail || parsedBody?.title || error.message;
        } catch (parseError) {
          console.error('Failed to parse response.text:', parseError);
        }
      } else if (error.message.toLowerCase().includes('member exists')) {
        console.log('Email already subscribed:', email);
        return res.status(200).json({ success: true, message: 'Vous êtes déjà inscrit avec ce mail' });
      }
      errorMessage = error.message;
    } 
    // Handle MailchimpError with response object
    else if (typeof error === 'object' && error !== null && 'response' in error) {
      const mailchimpError = error as MailchimpError;
      let parsedBody: { title?: string; detail?: string; status?: number } | undefined = mailchimpError.response?.body;

      // Try parsing response.text as JSON if body is not set
      if (!parsedBody && mailchimpError.response?.text) {
        try {
          parsedBody = JSON.parse(mailchimpError.response.text);
        } catch (parseError) {
          console.error('Failed to parse response.text:', parseError);
        }
      }

      console.error('Mailchimp error (full response):', {
        text: mailchimpError.response?.text,
        body: parsedBody,
        status: parsedBody?.status ?? mailchimpError.response?.body?.status,
      });

      if (
        (parsedBody?.title && parsedBody.title.toLowerCase().includes('member exists')) ||
        (parsedBody?.detail && parsedBody.detail.toLowerCase().includes('already a list member')) ||
        (mailchimpError.response?.text && mailchimpError.response.text.toLowerCase().includes('member exists'))
      ) {
        console.log('Email already subscribed:', email);
        return res.status(200).json({ success: true, message: 'Vous êtes déjà inscrit avec ce mail' });
      }

      errorMessage = parsedBody?.detail || parsedBody?.title || 'Mailchimp error occurred';
    } else {
      console.error('Mailchimp unknown error:', error);
    }

    return res.status(500).json({ error: errorMessage });
  }
}