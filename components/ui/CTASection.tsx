import Link from 'next/link'
import Image from 'next/image'
import { Phone, ClipboardCheck } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryText?: string
  primaryHref?: string
  variant?: 'default' | 'navy' | 'teal' | 'cream'
}

export default function CTASection({
  title = 'Need Care for Yourself or a Loved One?',
  subtitle = "We know that choosing care is one of the most important decisions a family can make. We're here to make it easier. Call us today for a friendly, no-obligation conversation.",
  primaryText = 'Request a Care Assessment',
  primaryHref = '/contact',
  variant = 'navy',
}: CTASectionProps) {
  const bgClass = {
    default: 'bg-gradient-to-br from-navy-900 to-navy-800',
    navy: 'bg-gradient-to-br from-navy-900 via-navy-800 to-teal-800',
    teal: 'bg-gradient-to-br from-teal-700 to-teal-600',
    cream: 'bg-cream-100',
  }[variant]

  const textClass = variant === 'cream' ? 'text-navy-900' : 'text-white'
  const subClass = variant === 'cream' ? 'text-gray-600' : 'text-white/80'

  return (
    <section className={`section-padding ${bgClass} relative overflow-hidden`} aria-labelledby="cta-heading">
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="container-wide relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <h2
            id="cta-heading"
            className={`font-heading text-3xl font-bold md:text-4xl lg:text-5xl ${textClass} text-balance`}
          >
            {title}
          </h2>
          <p className={`mt-6 text-lg leading-relaxed ${subClass}`}>
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link href={primaryHref} className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
              <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
              {primaryText}
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
              className="btn-outline-white text-base px-8 py-4 w-full sm:w-auto"
              aria-label={`Call us on ${SITE_CONFIG.phone1}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {SITE_CONFIG.phone1}
            </a>
          </div>

          <p className={`mt-6 text-sm ${subClass} opacity-75`}>
            Free initial consultation · No obligation · We&apos;ll call you back within the hour
          </p>
        </div>
        <div className="group relative hidden overflow-hidden rounded-[1.75rem] shadow-2xl shadow-navy-950/30 ring-1 ring-white/15 lg:block">
          <Image
            src="/images/family-peace-of-mind.png"
            alt="An older person spending relaxed time with a care worker and reassured family member"
            width={900}
            height={506}
            sizes="36vw"
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
        </div>
        </div>
      </div>
    </section>
  )
}
