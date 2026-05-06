import { Shield, ClipboardList, MapPin, Clock, Heart } from 'lucide-react'

const badges = [
  {
    icon: Shield,
    label: 'CQC Registered',
    sub: 'Care Quality Commission',
  },
  {
    icon: ClipboardList,
    label: 'Personalised Care Plans',
    sub: 'Tailored to every individual',
  },
  {
    icon: MapPin,
    label: 'Local Care Team',
    sub: 'Based in Stapleford, NG9',
  },
  {
    icon: Clock,
    label: 'Flexible Visiting & Live-in',
    sub: '7 days a week, including bank holidays',
  },
  {
    icon: Heart,
    label: 'Adults 18+ & Older People',
    sub: 'Inclusive, person-centred care',
  },
]

export default function TrustBadges() {
  return (
    <section className="border-y border-gray-100 bg-white/95 py-8 shadow-sm shadow-navy-950/5 md:py-10" aria-label="Our credentials">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.label}
                className="group flex flex-col items-center gap-2 rounded-2xl p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-teal-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
                  <Icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800">{badge.label}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{badge.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
