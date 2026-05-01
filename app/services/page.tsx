import type { Metadata } from 'next'
import Link from 'next/link'
import {
  User, Home, Brain, RefreshCw, HeartPulse, Ambulance, Smile,
  Pill, Moon, Clock, Users, Activity, CheckCircle, Phone,
} from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import CTASection from '@/components/ui/CTASection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Home Care Services',
  description:
    'Explore all home care services offered by DeltaEcho Care Ltd in Nottinghamshire — personal care, live-in care, dementia care, respite, end-of-life care, and more.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
}

const mainServices = [
  {
    title: 'Personal Care',
    description:
      'Dignified support with washing, dressing, continence care, skin and hair care, and all aspects of daily personal hygiene. Carried out with care, sensitivity, and total respect for your privacy.',
    href: '/services/personal-care',
    icon: User,
    highlights: ['Washing & bathing', 'Dressing & grooming', 'Continence care', 'Oral hygiene'],
  },
  {
    title: 'Live-in Care',
    description:
      'A professional carer lives with you in your own home, providing companionship, practical support, and peace of mind — 24 hours a day, 7 days a week. The alternative to a care home.',
    href: '/services/live-in-care',
    icon: Home,
    highlights: ['24/7 support', 'Domestic assistance', 'Social companionship', 'Night-time support'],
  },
  {
    title: 'Dementia Care',
    description:
      'Specialist support for people living with Alzheimer\'s disease and other forms of dementia. Our trained carers provide consistent, reassuring care designed around the individual\'s needs and stage of dementia.',
    href: '/services/dementia-care',
    icon: Brain,
    highlights: ['Cognitive stimulation', 'Routine maintenance', 'Family communication', 'Specialist training'],
  },
  {
    title: 'Respite Care',
    description:
      'A planned break for family carers — with DeltaEcho Care stepping in so you can rest, recuperate, and recharge, confident your loved one is receiving expert care in your absence.',
    href: '/services/respite-care',
    icon: RefreshCw,
    highlights: ['Flexible scheduling', 'Short-notice available', 'Overnight & longer stays', 'Seamless handover'],
  },
  {
    title: 'End-of-Life Care',
    description:
      'Gentle, compassionate support during life\'s final chapter — helping people remain at home, comfortable and surrounded by family. We work alongside palliative care teams and hospice services.',
    href: '/services/end-of-life-care',
    icon: HeartPulse,
    highlights: ['Comfort & dignity', 'Emotional support', 'Family guidance', 'Palliative coordination'],
  },
  {
    title: 'Hospital Discharge Support',
    description:
      'Safe, well-supported return home after a hospital stay. We can have care in place very quickly — preventing readmission, aiding recovery, and helping you settle back into your own home.',
    href: '/services/hospital-discharge-support',
    icon: Ambulance,
    highlights: ['Rapid care setup', 'Recovery support', 'Medication management', 'Hospital liaison'],
  },
  {
    title: 'Companionship & Domestic Support',
    description:
      'Friendly visits for conversation, social engagement, and help around the home. Essential support for reducing isolation, maintaining independence, and keeping the home comfortable.',
    href: '/services/companionship-domestic-support',
    icon: Smile,
    highlights: ['Social visits', 'Light housework', 'Shopping & errands', 'Community outings'],
  },
]

const additionalServices = [
  { name: 'Medication support & administration', icon: Pill },
  { name: 'Overnight care', icon: Moon },
  { name: '24-hour care', icon: Clock },
  { name: 'Physical disability support', icon: Activity },
  { name: 'Community access & outings', icon: Users },
  { name: 'Meal preparation & dietary support', icon: User },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Home Care Services"
        subtitle="From daily personal care to full-time live-in support — we provide a full range of services designed around the individual, not the other way around."
        breadcrumbs={[{ name: 'Services', href: '/services' }]}
        badge="CQC Registered"
      />

      {/* Intro */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
              At DeltaEcho Care, we offer a comprehensive range of home care services to support
              older people, adults with disabilities, and anyone who needs help living safely and
              independently. Every service is tailored to the individual — because no two people
              have exactly the same needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white" aria-labelledby="main-services-heading">
        <div className="container-wide">
          <h2 id="main-services-heading" className="section-title text-center mb-12">
            Our Core Services
          </h2>

          <div className="space-y-6">
            {mainServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.href}
                  className={`card flex flex-col gap-6 lg:flex-row lg:items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-teal-50">
                    <Icon className="h-8 w-8 text-teal-600" aria-hidden="true" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold text-navy-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-1.5 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-teal-500" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="btn-secondary text-sm"
                    >
                      Learn More About {service.title}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-cream" aria-labelledby="additional-services-heading">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 id="additional-services-heading" className="section-title">
              Additional Support We Provide
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Our services extend beyond our main packages. Here are some of the additional ways we
              can support you or your loved one.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.name}
                  className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold-50">
                    <Icon className="h-5 w-5 text-gold-600" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-navy-700">{service.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Can't Find CTA */}
      <section className="section-padding bg-teal-50 border-t border-teal-100">
        <div className="container-wide text-center">
          <h2 className="section-title mb-4">Can&apos;t Find What You Need?</h2>
          <p className="section-subtitle max-w-2xl mx-auto mb-8">
            If you have a specific care need that isn&apos;t listed here, please get in touch. We will
            always tell you honestly whether we can help — and if we can&apos;t, we&apos;ll do our best
            to point you in the right direction.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
              className="btn-secondary"
              aria-label={`Call us on ${SITE_CONFIG.phone1}`}
            >
              <Phone className="h-4 w-4" />
              Call {SITE_CONFIG.phone1}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
