import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'mautic-dev-api',
        configureServer(server) {
          server.middlewares.use('/api/mautic/submit', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}');
                const { firstname = '', email = '', formId = 20 } = data;
                const params = new URLSearchParams();
                params.append('mauticform[formId]', formId.toString());
                params.append('mauticform[firstname]', firstname);
                params.append('mauticform[email]', email);
                params.append('firstname', firstname);
                params.append('email', email);

                const response = await fetch(`https://crm.nambds.vn/form/submit?formId=${formId}`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-Requested-With': 'XMLHttpRequest',
                  },
                  body: params.toString(),
                });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, status: response.status }));
              } catch (e: any) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: e.message }));
              }
            });
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2022',
      chunkSizeWarningLimit: 1200,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'vendor-icons';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
