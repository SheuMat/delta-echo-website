import {
  UserCheck,
  Shield,
  Heart,
  RefreshCw,
  Pill,
  MessageCircle,
  Calendar,
  Star,
} from 'lucide-react'

const reasons = [
  {
    icon: UserCheck,
    title: 'Person-Centred Care',
    description:
      'Your care plan is built entirely around you — your preferences, your routine, and your goals. We listen before we act.',
  },
  {
    icon: Shield,
    title: 'Safe, Trusted Carers',
    description:
      'Every carer is DBS-checked, thoroughly vetted, and trained to our high standards before they ever enter your home.',
  },
  {
    icon: Heart,
    title: 'Dignity & Respect, Always',
    description:
      'We uphold your dignity in every interaction. Your privacy, choices, and independence are always respected.',
  },
  {
    icon: RefreshCw,
    title: 'Continuity of Care',
    description:
      'Wherever possible, you see the same carer, so you can build real trust and confidence over time.',
  },
  {
    icon: Pill,
    title: 'Safe Medication Support',
    description:
      'Our trained carers can support with medication prompts and administration, following strict safety protocols.',
  },
  {
    icon: MessageCircle,
    title: 'Open Family Communication',
    description:
      'We keep families informed and involved every step of the way — you\'re never left wondering how your loved one is doing.',
  },
  {
    icon: Calendar,
    title: 'Flexible Care Packages',
    description:
      'From a single daily visit to 24-hour live-in care, we adapt to your needs — and we adapt as those needs change.',
  },
  {
    icon: Star,
    title: 'CQC Registered Quality',
    description:
      'We are registered with and regulated by the Care Quality Commission, meeting national standards for quality and safety.',
  },
]

interface WhyChooseUsProps {
  title?: string
  subtitle?: string
}

export default function WhyChooseUs({
  title = 'Why Families Choose DeltaEcho Care',
  subtitle = 'Choosing a care provider is one of the most important decisions you\'ll ever make. Here\'s why families across Nottinghamshire trust us.',
}: WhyChooseUsProps) {
  return (
    <section className="section-padding bg-white" aria-labelledby="why-heading">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="why-heading" className="section-title">{title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="group flex flex-col rounded-2xl border border-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:bg-teal-50 hover:shadow-xl hover:shadow-navy-950/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 transition-colors group-hover:bg-teal-100">
                  <Icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-base font-bold text-navy-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
