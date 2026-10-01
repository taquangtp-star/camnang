import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  /**
   * Mautic Form 20 Proxy Endpoint
   * Forwards lead data directly to https://crm.nambds.vn/form/submit?formId=20
   */
  app.post('/api/mautic/submit', async (req, res) => {
    try {
      const { firstname, email, formId = 20 } = req.body;
      const mauticUrl = `https://crm.nambds.vn/form/submit?formId=${formId}`;

      const params = new URLSearchParams();
      params.append('mauticform[formId]', formId.toString());
      params.append('mauticform[firstname]', firstname || '');
      params.append('mauticform[email]', email || '');
      params.append('mauticform[return]', req.headers.referer || 'https://nambds.vn');
      
      // Flat fallbacks
      params.append('firstname', firstname || '');
      params.append('email', email || '');

      const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || '';

      const mauticResponse = await fetch(mauticUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Forwarded-For': clientIp,
          'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0 (compatible; LandingPage/1.0)',
        },
        body: params.toString(),
      });

      console.log(`[Mautic] Forwarded lead (${email}) to Form ${formId}. Status: ${mauticResponse.status}`);
      return res.json({ 
        success: true, 
        status: mauticResponse.status 
      });
    } catch (err: any) {
      console.error('[Mautic] Error forwarding to CRM:', err);
      // Return success false but 200 status so client can handle gracefully
      return res.status(200).json({ 
        success: false, 
        error: err.message 
      });
    }
  });

  // Mount Vite middleware in development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
