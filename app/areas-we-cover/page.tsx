import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import AreaCoverageSection from '@/components/ui/AreaCoverageSection'
import CTASection from '@/components/ui/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Areas We Cover | Home Care Nottinghamshire',
  description:
    'DeltaEcho Care Ltd provides home care across Nottinghamshire including Nottingham, Beeston, Stapleford, Long Eaton, West Bridgford, Hucknall, and surrounding areas.',
  keywords: [
    'home care Nottinghamshire',
    'home care Nottingham',
    'home care Beeston',
    'home care Stapleford',
    'home care West Bridgford',
    'home care Long Eaton',
    'care at home Nottingham',
    'domiciliary care Nottinghamshire',
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/areas-we-cover`,
  },
}

export default function AreasCoveredPage() {
  return (
    <>
      <PageHero
        title="Areas We Cover"
        subtitle="We provide home care services across a wide area of Nottinghamshire, from our base in Stapleford. If you're not sure whether we cover your area, please ask — we're always happy to help."
        breadcrumbs={[{ name: 'Areas We Cover', href: '/areas-we-cover' }]}
      />

      {/* Intro */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-title mb-6 text-center">
              Serving Nottinghamshire Families
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-center">
              <p>
                DeltaEcho Care Ltd is based in Stapleford, Nottingham (NG9), and provides home care
                services to a wide area across Nottinghamshire. We cover much of the Greater
                Nottingham area and surrounding towns and villages.
              </p>
              <p>
                Our local knowledge means we understand the communities we serve — and our proximity
                means we can respond quickly, including in urgent situations such as hospital
                discharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AreaCoverageSection showTitle={false} />

      {/* Why Local Matters */}
      <section className="section-padding bg-navy-950">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl mb-6">
              Why Choosing a Local Provider Matters
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                As a locally-based provider, we are genuinely embedded in the Nottinghamshire
                community. Our carers live and work in the same areas as the people they support —
                which means faster response times, better continuity, and a team that truly
                understands local services and resources.
              </p>
              <p>
                Unlike large national franchises, we are not managing hundreds of care packages across
                the country. We focus on our local area, which means we can invest more time and
                attention in every person we support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
