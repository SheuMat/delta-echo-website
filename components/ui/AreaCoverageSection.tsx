import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { AREAS } from '@/lib/constants'

interface AreaCoverageSectionProps {
  showTitle?: boolean
  maxAreas?: number
}

export default function AreaCoverageSection({
  showTitle = true,
  maxAreas,
}: AreaCoverageSectionProps) {
  const displayAreas = maxAreas ? AREAS.slice(0, maxAreas) : AREAS

  return (
    <section className="section-padding bg-cream" aria-labelledby="areas-heading">
      <div className="container-wide">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 id="areas-heading" className="section-title">
              Areas We Cover in Nottinghamshire
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We provide home care services across a wide area of Nottinghamshire, centred around
              our base in Stapleford, NG9. Not sure if we cover your area? Just ask.
            </p>
          </div>
        )}

        {/* Map Placeholder */}
        <div
          className="mb-10 flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-100 to-teal-100 ring-1 ring-teal-200 md:h-80"
          role="img"
          aria-label="Map showing DeltaEcho Care coverage area in Nottinghamshire"
        >
          <div className="text-center">
            <MapPin className="mx-auto mb-3 h-10 w-10 text-teal-500" aria-hidden="true" />
            <p className="text-sm font-medium text-navy-700">Nottinghamshire Coverage Map</p>
            <p className="mt-1 text-xs text-gray-500">
              Centred on Stapleford, NG9 — serving a wide radius across the county
            </p>
            {/* Replace this div with a Google Maps embed or interactive map component */}
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {displayAreas.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100"
            >
              <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-teal-500" aria-hidden="true" />
              <span className="text-sm font-medium text-navy-700">{area}</span>
            </div>
          ))}
        </div>

        {maxAreas && AREAS.length > maxAreas && (
          <div className="mt-6 text-center">
            <Link
              href="/areas-we-cover"
              className="btn-secondary"
            >
              View All Areas We Cover
            </Link>
          </div>
        )}

        {/* Not Listed */}
        <div className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center md:p-8">
          <p className="font-semibold text-navy-800 mb-2">
            Don&apos;t see your area listed?
          </p>
          <p className="text-sm text-gray-600 mb-4 max-w-lg mx-auto">
            We regularly expand the areas we serve. Please contact us — we may well be able to help,
            or recommend a local service that can.
          </p>
          <Link href="/contact" className="btn-primary">
            Ask About Your Area
          </Link>
        </div>
      </div>
    </section>
  )
}
