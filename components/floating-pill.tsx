'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Sparkles, X } from 'lucide-react'

const DISMISS_KEY = 'archon-edge-pill-dismissed'

/**
 * Subtle, dismissible corner pill that fades in after a few seconds.
 * Once dismissed, it stays hidden for the session. Links to /edge.
 */
export function FloatingPill() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem(DISMISS_KEY) === '1') return
    const t = window.setTimeout(() => setVisible(true), 4500)
    return () => window.clearTimeout(t)
  }, [])

  function dismiss() {
    setVisible(false)
    try {
      sessionStorage.setItem(DISMISS_KEY, '1')
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 max-w-[19rem] transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      role="complementary"
      aria-hidden={!visible}
    >
      <div className="relative rounded-xl border border-primary/30 bg-card/90 p-4 pr-9 shadow-2xl backdrop-blur-md">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute right-2.5 top-2.5 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <Link href="/edge" className="block" onClick={dismiss}>
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            THE ARCHON EDGE
          </div>
          <p className="mt-2 text-sm font-medium leading-snug text-foreground">
            XAU EXECUTER — our private gold signal desk is open to new traders.
          </p>
          <p className="mt-1.5 text-xs text-primary underline-offset-4 hover:underline">
            Claim your access →
          </p>
        </Link>
      </div>
    </div>
  )
}
