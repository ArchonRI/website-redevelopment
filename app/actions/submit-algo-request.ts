'use server'

import { Resend } from 'resend'
import { siteConfig } from '@/lib/site-config'

export type AlgoRequestState = {
  ok: boolean
  message: string
  fieldErrors?: Record<string, string>
}

const REQUIRED_FIELDS = ['name', 'email', 'phone'] as const

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function submitAlgoRequest(
  _prev: AlgoRequestState,
  formData: FormData,
): Promise<AlgoRequestState> {
  const data = {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    phone: String(formData.get('phone') ?? '').trim(),
    experience: String(formData.get('experience') ?? '').trim(),
    ibTenure: String(formData.get('ibTenure') ?? '').trim(),
    activeBook: String(formData.get('activeBook') ?? '').trim(),
    eaExperience: String(formData.get('eaExperience') ?? '').trim(),
    needAssistance: String(formData.get('needAssistance') ?? '').trim(),
  }

  // Basic validation
  const fieldErrors: Record<string, string> = {}
  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) fieldErrors[field] = 'This field is required.'
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    fieldErrors.email = 'Please enter a valid email address.'
  }
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: 'Please correct the highlighted fields.',
      fieldErrors,
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[v0] RESEND_API_KEY missing — cannot send algo request email')
    return {
      ok: false,
      message:
        'Submissions are not configured yet. Please add a RESEND_API_KEY to enable delivery.',
    }
  }

  const rows: Array<[string, string]> = [
    ['Full name', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Trading experience', data.experience || '—'],
    ['Time as an IB', data.ibTenure || '—'],
    ['Active book of clients', data.activeBook || '—'],
    ['EA / algo experience', data.eaExperience || '—'],
    ['Needs onboarding assistance', data.needAssistance || '—'],
  ]

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#0b1220;">
      <h2 style="margin:0 0 4px;">New Free EA + ML Algo request</h2>
      <p style="margin:0 0 16px;color:#5b6472;">Submitted via archonri.com</p>
      <table style="border-collapse:collapse;width:100%;max-width:560px;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f8fafc;font-weight:600;white-space:nowrap;">${escapeHtml(k)}</td>
                 <td style="padding:8px 12px;border:1px solid #e5e7eb;">${escapeHtml(v)}</td>
               </tr>`,
          )
          .join('')}
      </table>
      <p style="margin:16px 0 0;color:#5b6472;font-size:13px;">
        Deliver the EA + algo files and setup instructions within 1 hour.
      </p>
    </div>
  `

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from: 'Archon RI <onboarding@resend.dev>',
      to: [siteConfig.email],
      replyTo: data.email,
      subject: `Free EA + ML Algo request — ${data.name}`,
      html,
    })

    if (error) {
      console.log('[v0] Resend error:', error)
      return {
        ok: false,
        message:
          'We could not submit your request right now. Please try again shortly.',
      }
    }

    return {
      ok: true,
      message:
        'Request received. Check your inbox — your EA and algo files with setup instructions arrive within 1 hour.',
    }
  } catch (err) {
    console.log('[v0] submitAlgoRequest exception:', err)
    return {
      ok: false,
      message: 'Something went wrong. Please try again shortly.',
    }
  }
}
