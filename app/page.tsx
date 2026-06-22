import { NeuralBackground } from '@/components/neural-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingPill } from '@/components/floating-pill'
import { TraderPromo } from '@/components/trader-promo'
import {
  Hero,
  Pillars,
  WhatWeDo,
  Institutions,
  CaseStudy,
  FinalCta,
} from '@/components/home-sections'

export default function Page() {
  return (
    <>
      <NeuralBackground />
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <Pillars />
        <WhatWeDo />
        <TraderPromo />
        <Institutions />
        <CaseStudy />
        <FinalCta />
      </main>
      <SiteFooter />
      <FloatingPill />
    </>
  )
}
