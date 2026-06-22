import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  Send,
  ShieldCheck,
  Gauge,
  Layers,
  Headphones,
  BadgePercent,
  TrendingUp,
  UserPlus,
  Wallet,
  LineChart,
} from 'lucide-react'
import { NeuralBackground } from '@/components/neural-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig } from '@/lib/site-config'

// Unlisted page — reachable by link, kept out of search indexes.
export const metadata: Metadata = {
  title: 'The Archon Edge — Private Trader Program',
  description:
    'A precision broker environment, a live signal desk, and member-only benefits for serious traders.',
  robots: { index: false, follow: false },
}

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Institutional-Grade Broker',
    body: `Trade through ${siteConfig.brokerName} — deep liquidity, tight spreads, and the same execution standards we engineer for institutions.`,
  },
  {
    icon: Send,
    title: 'Live Signal Desk',
    body: 'Real-time setups, market structure reads, and trade management delivered directly inside our private Telegram channel.',
  },
  {
    icon: BadgePercent,
    title: 'Member-Only Offers',
    body: 'Onboarding bonuses, reduced cost structures, and priority access to new tools — reserved for traders who join through Archon.',
  },
  {
    icon: Gauge,
    title: 'Low-Latency Execution',
    body: 'FIX-routed order flow and liquidity aggregation built for speed, stability, and consistency under pressure.',
  },
  {
    icon: Layers,
    title: 'Multi-Asset Coverage',
    body: 'XAUUSD, BTCUSD, FX majors, and indices — one account, engineered for the instruments traders actually use.',
  },
  {
    icon: Headphones,
    title: 'Onboarding Support',
    body: 'Hands-on guidance from account creation to your first funded trade. You are never set up alone.',
  },
]

const steps = [
  {
    icon: UserPlus,
    title: 'Open your account',
    body: `Register with ${siteConfig.brokerName} through the Archon partner link below. It tags your account to our desk so you unlock member benefits.`,
  },
  {
    icon: Wallet,
    title: 'Fund & verify',
    body: 'Complete KYC and fund your account. Our team confirms your setup and activates your onboarding offers.',
  },
  {
    icon: Send,
    title: 'Join the signal desk',
    body: 'Enter the private Telegram channel for live signals, market commentary, and trade management.',
  },
  {
    icon: TrendingUp,
    title: 'Trade with the edge',
    body: 'Follow the desk, manage risk with our framework, and scale with institutional-grade infrastructure behind you.',
  },
]

export default function EdgePage() {
  return (
    <>
      <NeuralBackground />
      <SiteHeader />

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-36 pb-16">
          <div className="mx-auto max-w-6xl px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Archon RI
            </Link>

            <div className="mt-8 flex w-fit items-center rounded-full border border-primary/30 bg-card/50 px-4 py-1.5 text-[11px] font-medium tracking-[0.24em] text-primary backdrop-blur-sm">
              PRIVATE TRADER PROGRAM
            </div>

            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              The Archon <span className="text-primary">Edge</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              The same precision we build for institutions, opened to a select
              group of independent traders. A serious broker environment, a live
              signal desk, and benefits you only get by joining through Archon.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.ibLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Open Broker Account <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-card"
              >
                <Send className="h-4 w-4" /> Join Signal Channel
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-medium tracking-[0.28em] text-primary">
              WHY TRADE WITH ARCHON
            </p>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight">
              Benefits engineered for serious traders
            </h2>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <article
                  key={b.title}
                  className="rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background/60 text-primary">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {b.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Setup steps */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-medium tracking-[0.28em] text-primary">
              BROKER &amp; SETUP DETAILS
            </p>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight">
              Four steps to get started
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Setup with {siteConfig.brokerName} takes only a few minutes. Joining
              through the Archon partner link is what unlocks your member benefits
              and signal desk access.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <article
                  key={s.title}
                  className="relative rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm"
                >
                  <span className="text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background/60 text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dual CTA */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-primary/25 bg-card/50 p-8 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background/60 text-primary">
                  <LineChart className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">
                  Start with the broker
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Open your {siteConfig.brokerName} account through the Archon
                  partner link to activate member benefits and onboarding support.
                </p>
                <a
                  href={siteConfig.ibLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Open Broker Account <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-2xl border border-primary/25 bg-card/50 p-8 backdrop-blur-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background/60 text-primary">
                  <Send className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Join the signal desk</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Get live signals, market structure reads, and trade management in
                  our private Telegram channel.
                </p>
                <a
                  href={siteConfig.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Send className="h-4 w-4" /> Join Signal Channel
                </a>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
              Questions about onboarding? Reach the desk at{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
              . Trading involves substantial risk. Signals and tools are for
              informational purposes and are not financial advice.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
