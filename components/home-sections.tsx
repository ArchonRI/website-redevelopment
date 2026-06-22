import Link from 'next/link'
import {
  ArrowRight,
  Code2,
  LineChart,
  Network,
  LayoutDashboard,
  ShieldCheck,
  Cpu,
  Gauge,
  Activity,
} from 'lucide-react'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-[0.28em] text-primary">{children}</p>
  )
}

export function Hero() {
  return (
    <section id="about" className="relative pt-36 pb-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="inline-flex items-center rounded-full border border-border bg-card/50 px-4 py-1.5 text-[11px] font-medium tracking-[0.24em] text-muted-foreground backdrop-blur-sm">
          FINTECH RESEARCH &amp; ENGINEERING INSTITUTE
        </div>

        <h1 className="mt-7 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          ARCHON <span className="text-primary">Research</span> Institute
        </h1>
        <p className="mt-5 text-xl font-medium text-foreground/90">
          Engineering the Future of Financial Technology
        </p>

        <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Archon RI is a fintech research and engineering institute dedicated to
          building the next generation of trading systems, risk engines, and
          institutional-grade market technology. We combine quantitative science,
          algorithmic engineering, and deep market-structure expertise to create
          systems that perform under real-world volatility, liquidity constraints,
          and execution pressure.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-card"
          >
            Explore Services
          </Link>
        </div>

        <p className="mt-10 max-w-xl border-l-2 border-primary/40 pl-4 text-sm italic leading-relaxed text-muted-foreground">
          Our mission is clear: transform financial technology into a discipline of
          precision, intelligence, and control.
        </p>
      </div>
    </section>
  )
}

const pillars = [
  {
    icon: Code2,
    title: 'Fintech Development',
    body: 'We architect and build high-performance fintech systems — from algorithmic trading engines to execution pipelines, dashboards, and institutional applications.',
  },
  {
    icon: LineChart,
    title: 'Quant Research',
    body: 'We study volatility, liquidity, market microstructure, and strategy design — converting raw market data into structured intelligence.',
  },
  {
    icon: Network,
    title: 'Brokerage Technology',
    body: 'We deploy modern ECN infrastructure, liquidity integrations, FIX connectivity, and automated risk controls.',
  },
  {
    icon: LayoutDashboard,
    title: 'Institutional Tools',
    body: 'We build analytics suites, monitoring dashboards, and risk engines for institutional clarity and control.',
  },
]

export function Pillars() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>WHAT WE DELIVER</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Four pillars of institutional fintech
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Every engagement draws on a disciplined foundation of engineering,
          research, infrastructure, and tooling.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background/60 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const capabilities = [
  'Algorithmic trading systems',
  'Multi-layer risk engines',
  'Execution optimization',
  'Brokerage infrastructure',
  'Quantitative modeling',
  'Data engineering',
  'Institutional dashboards',
]

const archLayers = [
  'Market Data Feeds',
  'Quant Models · Signal Engine',
  'Risk Engine · Position Logic',
  'Execution · FIX Routing',
  'Liquidity Providers',
]

export function WhatWeDo() {
  return (
    <section id="research" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>WHAT WE DO</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Operating at the intersection of math, engineering, and market
              structure
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Archon RI builds systems that understand markets, adapt to
              volatility, and execute with precision. Every solution is delivered
              with a commitment to transparency, discipline, and long-term
              reliability.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm">
            <p className="text-xs font-medium tracking-[0.28em] text-primary">
              SYSTEM ARCHITECTURE
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {archLayers.map((layer, i) => (
                <div key={layer} className="flex flex-col items-center">
                  <div className="w-full rounded-lg border border-border bg-background/60 px-4 py-3.5 text-center text-sm font-medium text-foreground/90">
                    {layer}
                  </div>
                  {i < archLayers.length - 1 && (
                    <div className="h-5 w-px bg-gradient-to-b from-primary/60 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: ShieldCheck,
    title: 'Multi-Layer Risk Engines',
    body: 'Volatility modeling, structural logic, and dynamic rule-sets that protect capital and stabilize performance — even in extreme market conditions.',
  },
  {
    icon: Cpu,
    title: 'Algorithmic Trading Systems',
    body: 'Engines built on mathematical logic, multi-timeframe structure, and execution intelligence — designed to adapt, react, and perform.',
  },
  {
    icon: Gauge,
    title: 'Execution Infrastructure',
    body: 'Liquidity aggregation, FIX routing, and low-latency pipelines engineered for speed, stability, and consistency.',
  },
  {
    icon: Activity,
    title: 'Institutional Dashboards',
    body: 'Real-time analytics that provide clarity, oversight, and operational control for confident decision-making.',
  },
]

export function Institutions() {
  return (
    <section id="products" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Eyebrow>ENGINEERED FOR INSTITUTIONS</Eyebrow>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Systems built to perform under pressure
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Precision-mode engineering for the workloads where reliability is
          non-negotiable.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="flex gap-5 rounded-xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-background/60 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const outcomes = [
  'Faster execution',
  'Reduced slippage',
  'Improved risk visibility',
  'Higher client retention',
  'Stronger operational stability',
]

export function CaseStudy() {
  return (
    <section id="partnerships" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm">
          <div className="grid gap-10 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <Eyebrow>CASE STUDY</Eyebrow>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                Building a modern ECN infrastructure
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-primary">
                    PROBLEM
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A brokerage needed a scalable ECN environment capable of
                    handling institutional flow, automated risk controls, and
                    multi-LP execution.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-primary">
                    SOLUTION
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Archon RI engineered a multi-layer execution stack with
                    liquidity aggregation, FIX routing, and real-time risk
                    monitoring — built for speed, transparency, and resilience.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-background/50 p-7">
              <p className="text-sm font-semibold">Outcome</p>
              <ul className="mt-5 flex flex-col gap-3">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-3 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Work With Archon RI
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
          Build the technology foundation your institution deserves.
        </p>
        <Link
          href="mailto:operations@archonri.com"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Schedule a Strategy Call <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
