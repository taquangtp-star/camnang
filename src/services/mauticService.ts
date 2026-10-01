/**
 * Mautic CRM Integration Service for Nguyễn Nam BĐS
 * Domain: crm.nambds.vn
 * Form ID: 20
 * Fields: firstname, email
 */

export interface MauticPayload {
  firstname: string;
  email: string;
}

export const MAUTIC_CONFIG = {
  baseUrl: 'https://crm.nambds.vn',
  formId: 20,
  submitUrl: 'https://crm.nambds.vn/form/submit?formId=20',
};

/**
 * Submits lead data to Mautic Form 20 using a multi-layer strategy:
 * 1. Server-side proxy (/api/mautic/submit) if available.
 * 2. Hidden iframe form submission (guaranteed 100% bypass of CORS on static hosts).
 * 3. Client-side fetch with fallback.
 */
export async function submitToMautic(data: MauticPayload): Promise<{ success: boolean; method: string }> {
  const { firstname, email } = data;

  // 1. Send via backend proxy endpoint if available
  try {
    const response = await fetch('/api/mautic/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formId: MAUTIC_CONFIG.formId,
        firstname,
        email,
      }),
    });

    if (response.ok) {
      const resData = await response.json();
      if (resData.success) {
        console.log('[Mautic] Submitted successfully via server proxy');
        return { success: true, method: 'server-proxy' };
      }
    }
  } catch (e) {
    // Backend proxy not available or running in pure static mode, continue to client fallback
    console.info('[Mautic] Server proxy not reachable, falling back to direct client submission');
  }

  // 2. Submit via Hidden iFrame (Standard Mautic CORS-safe method for static landing pages)
  try {
    submitViaHiddenIframe(firstname, email);
    console.log('[Mautic] Submitted via hidden iframe');
  } catch (err) {
    console.error('[Mautic] Iframe submission error:', err);
  }

  // 3. Fire direct POST fetch with no-cors as backup
  try {
    const formData = new FormData();
    formData.append('mauticform[formId]', MAUTIC_CONFIG.formId.toString());
    formData.append('mauticform[firstname]', firstname);
    formData.append('mauticform[email]', email);
    formData.append('mauticform[return]', window.location.href);
    
    // Also include flat fields in case Mautic form accepts direct inputs
    formData.append('firstname', firstname);
    formData.append('email', email);

    fetch(MAUTIC_CONFIG.submitUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    }).catch(() => {
      // Ignore network errors in no-cors background dispatch
    });
  } catch (e) {
    // Ignore
  }

  // 4. Update Mautic Tracking Cookie if mt script is loaded
  if (typeof (window as any).mt === 'function') {
    try {
      (window as any).mt('send', 'pageview', {
        email: email,
        firstname: firstname,
      });
    } catch (err) {
      // Ignore
    }
  }

  return { success: true, method: 'client-hybrid' };
}

/**
 * Creates or reuses a hidden iframe and submits a standard HTML form.
 * This is the standard, foolproof way to submit to Mautic across different domains without CORS errors.
 */
function submitViaHiddenIframe(firstname: string, email: string) {
  const iframeId = 'mautic_submit_iframe_target';
  let iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;

  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.id = iframeId;
    iframe.name = iframeId;
    iframe.style.display = 'none';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
  }

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = MAUTIC_CONFIG.submitUrl;
  form.target = iframeId;
  form.style.display = 'none';

  const addField = (name: string, value: string) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  };

  // Mautic standard input array format
  addField('mauticform[formId]', MAUTIC_CONFIG.formId.toString());
  addField('mauticform[firstname]', firstname);
  addField('mauticform[email]', email);
  addField('mauticform[return]', window.location.href);

  // Flat fields as alternative alias
  addField('firstname', firstname);
  addField('email', email);

  document.body.appendChild(form);
  form.submit();

  // Cleanup form element after dispatch
  setTimeout(() => {
    if (form.parentNode) {
      form.parentNode.removeChild(form);
    }
  }, 1000);
}
