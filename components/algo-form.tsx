'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import {
  submitAlgoRequest,
  type AlgoRequestState,
} from '@/app/actions/submit-algo-request'

const initialState: AlgoRequestState = { ok: false, message: '' }

const fieldBase =
  'w-full rounded-md border border-border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60 focus:ring-1 focus:ring-primary/40'

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-xs font-medium tracking-wide text-foreground/80"
    >
      {children}
      {required && <span className="ml-0.5 text-primary">*</span>}
    </label>
  )
}

export function AlgoForm() {
  const [state, formAction, pending] = useActionState(
    submitAlgoRequest,
    initialState,
  )

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-card/60 p-8 text-center backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">You&apos;re all set</h3>
        <p className="mx-auto mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label htmlFor="name" required>
            Full name
          </Label>
          <input id="name" name="name" type="text" className={fieldBase} placeholder="Jane Trader" />
          {state.fieldErrors?.name && (
            <p className="mt-1 text-xs text-destructive">{state.fieldErrors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" required>
            Email address
          </Label>
          <input id="email" name="email" type="email" className={fieldBase} placeholder="you@email.com" />
          {state.fieldErrors?.email && (
            <p className="mt-1 text-xs text-destructive">{state.fieldErrors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" required>
            Phone number
          </Label>
          <input id="phone" name="phone" type="tel" className={fieldBase} placeholder="+1 555 000 0000" />
          {state.fieldErrors?.phone && (
            <p className="mt-1 text-xs text-destructive">{state.fieldErrors.phone}</p>
          )}
        </div>

        <div>
          <Label htmlFor="experience">Experience in trading</Label>
          <select id="experience" name="experience" className={fieldBase} defaultValue="">
            <option value="" disabled>
              Select experience
            </option>
            <option>Less than 1 year</option>
            <option>1–3 years</option>
            <option>3–5 years</option>
            <option>5+ years</option>
          </select>
        </div>

        <div>
          <Label htmlFor="ibTenure">How long have you been an IB?</Label>
          <select id="ibTenure" name="ibTenure" className={fieldBase} defaultValue="">
            <option value="" disabled>
              Select tenure
            </option>
            <option>Not an IB yet</option>
            <option>Less than 6 months</option>
            <option>6–12 months</option>
            <option>1–3 years</option>
            <option>3+ years</option>
          </select>
        </div>

        <div>
          <Label htmlFor="activeBook">Do you have an active book of clients?</Label>
          <select id="activeBook" name="activeBook" className={fieldBase} defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option>Yes — active clients</option>
            <option>Some — building it</option>
            <option>No — just starting</option>
          </select>
        </div>

        <div>
          <Label htmlFor="eaExperience">Experience with EA &amp; algo usage?</Label>
          <select id="eaExperience" name="eaExperience" className={fieldBase} defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option>Experienced</option>
            <option>Some experience</option>
            <option>No experience</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="needAssistance">Do you need setup assistance?</Label>
          <select id="needAssistance" name="needAssistance" className={fieldBase} defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option>Yes — please guide me through setup</option>
            <option>No — I can set it up myself</option>
          </select>
        </div>
      </div>

      {!state.ok && state.message && (
        <p className="mt-4 text-sm text-destructive">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {pending && <Loader2 className="h-4 w-4 animate-spin" />}
        {pending ? 'Sending…' : 'Send me the files'}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Your details go straight to our desk at{' '}
        <span className="text-foreground/80">operations@archonri.com</span>. Files and
        setup instructions are delivered within 1 hour. We never share your information.
      </p>
    </form>
  )
}
