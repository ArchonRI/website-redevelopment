import type { Metadata } from 'next'
import Image from 'next/image'
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
  Target,
  Quote,
} from 'lucide-react'
import { NeuralBackground } from '@/components/neural-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { siteConfig } from '@/lib/site-config'

// Unlisted page — reachable by link, kept out of search indexes.
export const metadata: Metadata = {
  title: 'XAU EXECUTER by RI — The Archon Edge for Traders',
  description:
    'A precision broker environment, a live XAUUSD signal desk, and member-only benefits for serious traders.',
  robots: { index: false, follow: false },
}

const stats = [
  { value: 'XAUUSD', label: 'Primary focus market' },
  { value: '24/5', label: 'Live desk coverage' },
  { value: 'Real-time', label: 'Entries, stops & targets' },
  { value: '1-to-1', label: 'Onboarding support' },
]

const benefits = [
  {
    icon: Target,
    title: 'XAU EXECUTER Signals',
    body: 'Clear, executable XAUUSD calls with exact entries, stops, and targets — the output of an institutional research process, not guesswork.',
  },
  {
    icon: ShieldCheck,
    title: 'Institutional-Grade Broker',
    body: `Trade through ${siteConfig.brokerName} — deep liquidity, tight spreads, and the same execution standards we engineer for institutions.`,
  },
  {
    icon: Send,
    title: 'Live Signal Desk',
    body: 'Market structure reads, session briefings, and real-time trade management delivered inside our private Telegram channel.',
  },
  {
    icon: BadgePercent,
    title: 'Member-Only Offers',
    body: 'Onboarding bonuses, reduced cost structures, and priority access to new tools — reserved for traders who join through Archon.',
  },
  {
    icon: Gauge,
    title: 'Low-Latency Execution',
    body: 'FIX-routed order flow and liquidity aggregation built for speed, stability, and consistency when it matters most.',
  },
  {
    icon: Headphones,
    title: 'Hands-On Onboarding',
    body: 'Guidance from account creation to your first managed trade. You are set up properly — never left to figure it out alone.',
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
    title: 'Join XAU EXECUTER',
    body: 'Enter the private Telegram desk for live signals, market commentary, and trade management.',
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

            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
              <div>
                <div className="flex w-fit items-center rounded-full border border-primary/30 bg-card/50 px-4 py-1.5 text-[11px] font-medium tracking-[0.24em] text-primary backdrop-blur-sm">
                  PRIVATE TRADER PROGRAM
                </div>

                <h1 className="mt-6 max-w-2xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
                  Trade gold with an{' '}
                  <span className="text-primary">institutional desk</span> in your
                  corner
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">XAU EXECUTER</span>{' '}
                  turns the same research we build for institutions into clear,
                  executable XAUUSD trades — paired with a precision broker setup and
                  member-only onboarding. The edge, without the guesswork.
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
                    <Send className="h-4 w-4" /> Join the Signal Desk
                  </a>
                </div>
              </div>

              {/* Brand emblem */}
              <div className="relative">
                <div
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background:
                      'radial-gradient(50% 50% at 50% 50%, rgba(227,186,96,0.16) 0%, rgba(227,186,96,0) 70%)',
                  }}
                />
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/40 p-8 backdrop-blur-sm">
                  <Image
                    src="/xau-executer-logo.png"
                    alt="XAU EXECUTER by RI"
                    width={945}
                    height={595}
                    priority
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>

            {/* Stats band */}
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-card/60 p-6 backdrop-blur-sm">
                  <div className="text-2xl font-semibold tracking-tight text-primary">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
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
              An institutional edge, made executable
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Most traders lose to noise, slippage, and emotion. XAU EXECUTER removes
              all three — a disciplined process, a fast broker, and a desk that tells
              you exactly what to do and when.
            </p>

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

        {/* Quote / positioning */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-5">
            <figure className="rounded-2xl border border-primary/20 bg-card/50 p-8 backdrop-blur-sm md:p-10">
              <Quote className="h-7 w-7 text-primary" />
              <blockquote className="mt-5 text-balance text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
                &ldquo;We don&apos;t sell hype. We share the exact trades our research
                process produces — entries, stops, targets, and the reasoning behind
                them. You execute with conviction, not hope.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">
                — The Archon Research Desk
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Setup steps */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs font-medium tracking-[0.28em] text-primary">
              BROKER &amp; SETUP DETAILS
            </p>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight">
              Get started in four steps
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Setup with {siteConfig.brokerName} takes only a few minutes. Joining
              through the Archon partner link is what unlocks your member benefits and
              XAU EXECUTER access.
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
                  Open your {siteConfig.brokerName} account through the Archon partner
                  link to activate member benefits and onboarding support.
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
                <h3 className="mt-5 text-xl font-semibold">
                  Join XAU EXECUTER
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Get live gold signals, market structure reads, and trade management
                  in our private Telegram desk.
                </p>
                <a
                  href={siteConfig.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Send className="h-4 w-4" /> Join the Signal Desk
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
