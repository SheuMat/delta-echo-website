import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Phone,
  ClipboardCheck,
  User,
  Home,
  Brain,
  RefreshCw,
  HeartPulse,
  Ambulance,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  Sparkles,
} from 'lucide-react'
import TrustBadges from '@/components/ui/TrustBadges'
import ServiceCard from '@/components/ui/ServiceCard'
import WhyChooseUs from '@/components/ui/WhyChooseUs'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TestimonialSection from '@/components/ui/TestimonialSection'
import CTASection from '@/components/ui/CTASection'
import AreaCoverageSection from '@/components/ui/AreaCoverageSection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Compassionate Home Care in Nottinghamshire | DeltaEcho Care Ltd',
  description:
    'DeltaEcho Care Ltd — CQC-registered home care in Nottinghamshire. Personal care, live-in care, dementia support, respite, and more. Call 07883 024345 today.',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

const services = [
  {
    title: 'Personal Care',
    description:
      'Dignified, respectful support with washing, dressing, continence care, and daily personal routines — tailored to your preferences.',
    href: '/services/personal-care',
    icon: User,
    features: ['Washing & dressing', 'Continence support', 'Skin & hair care'],
  },
  {
    title: 'Live-in Care',
    description:
      'A dedicated carer lives with you in your own home, providing round-the-clock companionship and support without the need for a care home.',
    href: '/services/live-in-care',
    icon: Home,
    features: ['24-hour presence', 'Full daily support', 'Home comforts preserved'],
  },
  {
    title: 'Dementia Care',
    description:
      'Specialist support for people living with dementia, delivered by trained carers who understand the unique challenges families face.',
    href: '/services/dementia-care',
    icon: Brain,
    features: ['Specialist training', 'Routine & familiarity', 'Family communication'],
  },
  {
    title: 'Respite Care',
    description:
      'A planned break for family carers, with professional care stepped in so you can rest, recharge, and know your loved one is safe.',
    href: '/services/respite-care',
    icon: RefreshCw,
    features: ['Flexible scheduling', 'Short or long-term', 'Peace of mind'],
  },
  {
    title: 'End-of-Life Care',
    description:
      'Compassionate, gentle support during life\'s final chapter — enabling people to remain at home, surrounded by those they love.',
    href: '/services/end-of-life-care',
    icon: HeartPulse,
    features: ['Comfort-focused care', 'Emotional support', 'Family guidance'],
  },
  {
    title: 'Hospital Discharge Support',
    description:
      'Safe, well-supported return home after hospital — with care in place from day one to aid recovery and prevent readmission.',
    href: '/services/hospital-discharge-support',
    icon: Ambulance,
    features: ['Fast setup', 'Recovery support', 'Medication management'],
  },
]

const whoWeSupport = [
  { label: 'Older People', icon: User },
  { label: 'Adults with Physical Disabilities', icon: Shield },
  { label: 'People Living with Dementia', icon: Brain },
  { label: 'Those Recovering from Hospital', icon: Ambulance },
  { label: 'Families Needing Respite', icon: RefreshCw },
  { label: 'People Needing End-of-Life Support', icon: HeartPulse },
]

const dailyCareItems = [
  'Washing, bathing & personal hygiene',
  'Dressing & grooming',
  'Continence support',
  'Meal preparation & dietary support',
  'Medication prompts & administration',
  'Shopping & errands',
  'GP & hospital appointments',
  'Companionship & conversation',
  'Light housework & laundry',
  'Community activities & outings',
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-hero-gradient pt-28 pb-20 md:pt-40 md:pb-28"
        aria-labelledby="hero-heading"
      >
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/3 translate-y-1/3 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
        </div>

        <div className="container-wide relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl animate-slide-up">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-500/20 px-4 py-2 backdrop-blur-sm">
              <Shield className="h-4 w-4 text-teal-300" aria-hidden="true" />
              <span className="text-sm font-semibold text-teal-200 uppercase tracking-wide">
                CQC Registered · Nottinghamshire
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="font-heading text-4xl font-bold text-white leading-tight md:text-5xl lg:text-6xl xl:text-7xl text-balance"
            >
              Compassionate Home Care in Nottinghamshire,{' '}
              <span className="text-teal-300">Built Around You</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              DeltaEcho Care Ltd provides reliable, person-centred support to help you or your loved
              one remain safe, independent, and comfortable at home.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
                Request a Care Assessment
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
                className="btn-outline-white text-base px-8 py-4"
                aria-label={`Call us on ${SITE_CONFIG.phone1}`}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {SITE_CONFIG.phone1}
              </a>
            </div>

            {/* Sub-trust */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
              {['CQC Registered', 'Person-Centred Care', 'Local Trusted Team', 'Flexible Support'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-teal-400" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="group relative h-[360px] overflow-hidden rounded-[2rem] bg-white/10 shadow-2xl shadow-navy-950/40 ring-1 ring-white/15 sm:h-[460px] lg:h-[560px]">
              <Image
                src="/images/home-care-hero.png"
                alt="A smiling care worker supporting an older person at home"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-2xl shadow-navy-950/25 backdrop-blur md:left-auto md:right-8 md:w-72">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50">
                  <Shield className="h-5 w-5 text-teal-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900">Trusted local care</p>
                  <p className="text-xs text-gray-600">Assessment, matching, and ongoing support.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── Trust Badges ─────────────────────────────────────── */}
      <TrustBadges />

      {/* ── How We Help ──────────────────────────────────────── */}
      <section className="section-padding bg-cream" aria-labelledby="services-heading">
        <div className="container-wide">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-teal-600">
              Our Services
            </span>
            <h2 id="services-heading" className="section-title">
              How We Help
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Whether you need a few hours of support each week or full-time live-in care, we have a
              service to suit your situation — and we&apos;ll help you find the right fit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-secondary">
              View All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Families Choose Us ───────────────────────────── */}
      <WhyChooseUs />

      {/* ── Daily Care Section ───────────────────────────────── */}
      <section className="section-padding bg-navy-600 relative overflow-hidden" aria-labelledby="daily-care-heading">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-gold-400/10 blur-3xl" />
        </div>
        <div className="container-wide relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-teal-300">
                What We Cover
              </span>
              <h2 id="daily-care-heading" className="font-heading text-3xl font-bold text-white md:text-4xl text-balance">
                Care Designed Around Your Daily Life
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Home care looks different for every person. We work with you to create a care plan that
                fits naturally into your routine — supporting your independence rather than disrupting it.
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                Your carer can support with a wide range of daily tasks — from morning personal care to
                evening medication, from weekly shopping to a regular afternoon out. Every task is carried
                out with patience, kindness, and complete respect for your dignity.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Talk to Our Team
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="group mb-5 overflow-hidden rounded-[1.75rem] shadow-2xl shadow-navy-950/30 ring-1 ring-white/10">
                <Image
                  src="/images/daily-care-support.png"
                  alt="A care worker supporting an older person with daily routines at home"
                  width={900}
                  height={675}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {dailyCareItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-3"
                >
                  <Sparkles className="h-4 w-4 flex-shrink-0 text-teal-300" aria-hidden="true" />
                  <span className="text-sm text-white/90">{item}</span>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Process ──────────────────────────────────────── */}
      <ProcessSteps />

      {/* ── Who We Support ───────────────────────────────────── */}
      <section className="section-padding bg-cream" aria-labelledby="who-we-support-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 id="who-we-support-heading" className="section-title">
              Who We Support
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              We provide care for a wide range of people and needs — if you&apos;re not sure whether we
              can help, please call us. We&apos;ll always be honest about what we can offer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {whoWeSupport.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-gray-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50">
                  <Icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-navy-800 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <TestimonialSection />

      {/* ── Area Coverage ────────────────────────────────────── */}
      <AreaCoverageSection showTitle={false} maxAreas={12} />

      {/* ── Final CTA ────────────────────────────────────────── */}
      <CTASection
        title="Need Care for Yourself or a Loved One?"
        subtitle="We understand how daunting it can feel to reach out. Our friendly team is here to listen, answer your questions, and help you find the right care — with no pressure and no obligation."
      />
    </>
  )
}
