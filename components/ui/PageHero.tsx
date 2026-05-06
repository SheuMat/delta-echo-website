import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, ChevronRight, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'

interface Breadcrumb {
  name: string
  href: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  showCTA?: boolean
  ctaText?: string
  ctaHref?: string
  badge?: string
  imageSrc?: string
  imageAlt?: string
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  showCTA = true,
  ctaText = 'Request a Care Assessment',
  ctaHref = '/contact',
  badge,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pt-24 pb-16 md:pt-32 md:pb-20">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="container-wide relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-slide-up">
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  {breadcrumbs.map((crumb, i) => (
                    <li key={crumb.href} className="flex items-center gap-1.5">
                      <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                      {i === breadcrumbs.length - 1 ? (
                        <span className="text-white/90" aria-current="page">
                          {crumb.name}
                        </span>
                      ) : (
                        <Link href={crumb.href} className="hover:text-white transition-colors">
                          {crumb.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Badge */}
            {badge && (
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full border border-teal-400/30 bg-teal-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-300 shadow-lg shadow-teal-950/20 backdrop-blur-sm">
                  {badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance max-w-4xl">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                {subtitle}
              </p>
            )}

            {/* CTAs */}
            {showCTA && (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href={ctaHref} className="btn-primary">
                  {ctaText}
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
                  className="btn-outline-white"
                  aria-label={`Call us on ${SITE_CONFIG.phone1}`}
                >
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.phone1}
                </a>
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/70">
              {['CQC Registered', 'Local Care Team', 'No-obligation Advice'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-teal-300" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {imageSrc && (
            <div className="relative animate-fade-in lg:justify-self-end">
              <div className="group relative h-[320px] overflow-hidden rounded-[2rem] bg-white/10 shadow-2xl shadow-navy-950/40 ring-1 ring-white/15 sm:h-[420px] lg:h-[460px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
