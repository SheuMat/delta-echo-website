import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Phone, LucideIcon } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import CTASection from '@/components/ui/CTASection'
import FAQSection from '@/components/ui/FAQSection'
import { SITE_CONFIG } from '@/lib/constants'

interface FAQ {
  q: string
  a: string
}

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  badge?: string
  breadcrumbs: Array<{ name: string; href: string }>
  intro: string
  whoIsItFor: {
    title?: string
    items: string[]
  }
  whatWeProvide: {
    title?: string
    items: string[]
  }
  benefits: {
    title?: string
    items: Array<{ title: string; description: string }>
  }
  whyDeltaEcho?: string[]
  faqs?: FAQ[]
  relatedServices?: Array<{ name: string; href: string; icon: LucideIcon }>
  imageSrc?: string
  imageAlt?: string
}

export default function ServicePageLayout({
  title,
  subtitle,
  badge,
  breadcrumbs,
  intro,
  whoIsItFor,
  whatWeProvide,
  benefits,
  whyDeltaEcho,
  faqs,
  relatedServices,
  imageSrc = '/images/daily-care-support.png',
  imageAlt,
}: ServicePageLayoutProps) {
  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        breadcrumbs={breadcrumbs}
        badge={badge}
        imageSrc={imageSrc}
        imageAlt={imageAlt || `${title} from DeltaEcho Care`}
      />

      {/* Intro */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="group overflow-hidden rounded-[1.75rem] shadow-xl shadow-navy-950/10 ring-1 ring-gray-100">
              <Image
                src={imageSrc}
                alt={imageAlt || `${title} care support at home`}
                width={900}
                height={675}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="rounded-2xl bg-white p-7 shadow-lg shadow-navy-950/5 ring-1 ring-gray-100">
              <p className="text-lg leading-relaxed text-gray-700 md:text-xl">{intro}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium text-teal-700">
                {['CQC Registered', 'Care plan before support starts', 'Family communication'].map((item) => (
                  <span key={item} className="rounded-full bg-teal-50 px-3 py-1.5 ring-1 ring-teal-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For + What We Provide */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Who */}
            <div>
              <h2 className="section-title mb-6">
                {whoIsItFor.title || 'Who This Service Is For'}
              </h2>
              <ul className="space-y-3" aria-label="Who this service supports">
                {whoIsItFor.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" aria-hidden="true" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Provide */}
            <div>
              <h2 className="section-title mb-6">
                {whatWeProvide.title || 'What Support Can Include'}
              </h2>
              <ul className="space-y-3" aria-label="What support we provide">
                {whatWeProvide.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" aria-hidden="true" />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-cream">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">
            {benefits.title || 'The Benefits'}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.items.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-white p-6 shadow-lg shadow-navy-950/5 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-teal-100"
              >
                <h3 className="font-heading text-lg font-bold text-navy-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DeltaEcho */}
      {whyDeltaEcho && whyDeltaEcho.length > 0 && (
        <section className="section-padding bg-navy-950">
          <div className="container-wide">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-3xl font-bold text-white mb-8 text-center md:text-4xl">
                Why Choose DeltaEcho Care?
              </h2>
              <ul className="space-y-4">
                {whyDeltaEcho.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-400" aria-hidden="true" />
                    <span className="text-gray-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqs && faqs.length > 0 && (
        <FAQSection faqs={faqs} />
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <h2 className="section-title text-center mb-10">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-2.5 rounded-full border border-teal-200 bg-teal-50 px-5 py-2.5 text-sm font-medium text-teal-700 transition-colors hover:bg-teal-100 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {service.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Inline Call Strip */}
      <section className="bg-teal-50 py-8 border-t border-teal-100">
        <div className="container-wide flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="font-semibold text-navy-800">Ready to talk to our team?</p>
            <p className="text-sm text-gray-600">We&apos;re available Monday–Saturday and happy to answer any questions.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
              className="btn-phone"
              aria-label={`Call us on ${SITE_CONFIG.phone1}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE_CONFIG.phone1}
            </a>
            <Link href="/contact" className="btn-primary">
              Request Assessment
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
