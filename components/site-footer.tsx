import Link from 'next/link'

const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Research', href: '/#research' },
      { label: 'Partnerships', href: '/#partnerships' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Fintech Development', href: '/#services' },
      { label: 'Brokerage Technology', href: '/#services' },
      { label: 'Quant Research', href: '/#services' },
      { label: 'Institutional Tools', href: '/#services' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'XAUUSD Scalper', href: '/#products' },
      { label: 'BTCUSD Predator', href: '/#products' },
      { label: 'Multi-Asset Engine', href: '/#products' },
      { label: 'Cognitive Signal Engine', href: '/#products' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <svg
                className="h-6 w-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3 21 19H3L12 3Z" />
                <path d="M12 9 16 17H8L12 9Z" />
              </svg>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-[0.18em]">ARCHON</span>
                <span className="text-[10px] tracking-[0.32em] text-muted-foreground">
                  RESEARCH INSTITUTE
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A fintech research and engineering institute building
              institutional-grade trading systems, risk engines, and market
              technology.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 ARCHON Research Institute. All rights reserved.</p>
          <p className="tracking-[0.28em]">PRECISION · INTELLIGENCE · CONTROL</p>
        </div>
      </div>
    </footer>
  )
}
