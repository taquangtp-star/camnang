import type { IncomingMessage, ServerResponse } from 'http';

interface VercelRequest extends IncomingMessage {
  body: any;
  query: { [key: string]: string | string[] };
  cookies: { [key: string]: string };
}

interface VercelResponse extends ServerResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
  send: (data: any) => void;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers for security and flexibility
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).send('OK');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    // In Vercel serverless, req.body may be parsed JSON or raw string
    let bodyData = req.body;
    if (typeof bodyData === 'string') {
      try {
        bodyData = JSON.parse(bodyData);
      } catch (e) {
        bodyData = {};
      }
    }

    const { firstname = '', email = '', formId = 20 } = bodyData || {};
    const mauticUrl = `https://crm.nambds.vn/form/submit?formId=${formId}`;

    const params = new URLSearchParams();
    params.append('mauticform[formId]', formId.toString());
    params.append('mauticform[firstname]', firstname);
    params.append('mauticform[email]', email);
    params.append('mauticform[return]', (req.headers['referer'] as string) || 'https://nambds.vn');
    
    // Flat fallbacks
    params.append('firstname', firstname);
    params.append('email', email);

    const clientIp = ((req.headers['x-forwarded-for'] as string) || '').split(',')[0].trim();

    const mauticResponse = await fetch(mauticUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest',
        'X-Forwarded-For': clientIp,
        'User-Agent': (req.headers['user-agent'] as string) || 'Mozilla/5.0 (compatible; LandingPage/1.0)',
      },
      body: params.toString(),
    });

    console.log(`[Vercel Serverless] Forwarded lead to Mautic: ${email}. Status: ${mauticResponse.status}`);

    res.status(200).json({
      success: true,
      status: mauticResponse.status,
    });
  } catch (error: any) {
    console.error('[Vercel Serverless] Error forwarding to Mautic:', error);
    res.status(200).json({
      success: false,
      error: error.message,
    });
  }
}
