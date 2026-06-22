import Link from 'next/link'
import { ArrowUpRight, Sparkles, Zap, Target, ShieldCheck } from 'lucide-react'

const proofPoints = [
  { icon: Target, label: 'Precision XAUUSD signals' },
  { icon: Zap, label: 'Low-latency broker execution' },
  { icon: ShieldCheck, label: 'Risk-first trade management' },
]

/**
 * Inline, editorial-style promo woven into the homepage. It markets the
 * XAU EXECUTER program indirectly — curiosity-driven, not salesy — and links
 * into the dedicated (unlisted) details page at /edge.
 */
export function TraderPromo() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-5">
        <Link
          href="/edge"
          className="group relative block overflow-hidden rounded-2xl border border-primary/25 bg-card/50 backdrop-blur-sm transition-colors hover:border-primary/50"
        >
          {/* soft accent wash, kept subtle for the dark theme */}
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(60% 120% at 100% 0%, rgba(227,186,96,0.14) 0%, rgba(227,186,96,0) 60%)',
            }}
          />
          <div className="relative grid items-center gap-8 p-8 md:grid-cols-[1.6fr_1fr] md:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/50 px-3 py-1 text-[11px] font-medium tracking-[0.24em] text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                THE ARCHON EDGE
              </div>

              <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                The desk built gold. Now it trades it for you.
              </h2>
              <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Meet <span className="font-medium text-foreground">XAU EXECUTER</span>{' '}
                — the private signal desk that turns our institutional research into
                clear, executable XAUUSD trades. Paired with a precision broker setup
                and member-only onboarding, it&apos;s the same edge we engineer for
                funds, opened to a select group of traders.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {proofPoints.map((p) => (
                  <li
                    key={p.label}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <p.icon className="h-4 w-4 text-primary" />
                    {p.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex md:justify-end">
              <span className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-3 text-sm font-medium text-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                See how it works
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
