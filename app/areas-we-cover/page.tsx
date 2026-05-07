import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import AreaCoverageSection from '@/components/ui/AreaCoverageSection'
import CTASection from '@/components/ui/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Areas We Cover | Home Care Nottinghamshire & Derbyshire',
  description:
    'DeltaEcho Care Ltd provides home care across Derby city, Ilkeston, Belper, Ripley, Alfreton, Kirkby in Ashfield, Sutton in Ashfield, Long Eaton, Heanor, Borrowash, Draycott, Nottingham, Hucknall, Beeston, West Bridgford, Clifton, Gedling, Arnold, Wollaton, Broxtowe, Rushcliffe, Kimberley, Eastwood, and surrounding areas.',
  keywords: [
    'home care Derby city',
    'home care Ilkeston',
    'home care Belper',
    'home care Ripley',
    'home care Alfreton',
    'home care Kirkby in Ashfield',
    'home care Sutton in Ashfield',
    'home care Long Eaton',
    'home care Heanor',
    'domiciliary care Derbyshire',
    'home care Nottingham',
    'home care Hucknall',
    'home care Beeston',
    'home care West Bridgford',
    'home care Clifton',
    'home care Gedling',
    'home care Arnold',
    'home care Wollaton',
    'home care Broxtowe',
    'home care Rushcliffe',
    'home care Kimberley',
    'home care Eastwood',
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
        subtitle="We provide home care services across Derby city, Ilkeston, Belper, Ripley, Alfreton, Kirkby in Ashfield, Sutton in Ashfield, Long Eaton, Heanor, Borrowash, Draycott, Nottingham, Hucknall, Beeston, West Bridgford, Clifton, Gedling, Arnold, Wollaton, Broxtowe, Rushcliffe, Kimberley, Eastwood, and nearby communities from our base in Stapleford. If you're not sure whether we cover your area, please ask — we're always happy to help."
        breadcrumbs={[{ name: 'Areas We Cover', href: '/areas-we-cover' }]}
      />

      {/* Intro */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-title mb-6 text-center">
              Serving Local Families Across Our Coverage Area
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-center">
              <p>
                DeltaEcho Care Ltd is based in Stapleford, Nottingham (NG9), and provides home care
                services across Derby city, Ilkeston, Belper, Ripley, Alfreton, Kirkby in Ashfield, Sutton in Ashfield, Long Eaton, Heanor, Borrowash, Draycott, Nottingham, Hucknall, Beeston, West Bridgford, Clifton, Gedling, Arnold, Wollaton, Broxtowe, Rushcliffe, Kimberley, Eastwood, and surrounding communities.
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
                As a locally-based provider, we are genuinely embedded in the local community. Our carers live and work in the same areas as the people they support —
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
