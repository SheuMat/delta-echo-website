import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle, Shield, Heart, Star, Users } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import CTASection from '@/components/ui/CTASection'
import WhyChooseUs from '@/components/ui/WhyChooseUs'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about DeltaEcho Care Ltd — a CQC-registered home care provider across Nottinghamshire and Derbyshire. Meet our team, understand our values, and learn why families trust us.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: 'About DeltaEcho Care Ltd | Home Care Nottinghamshire & Derbyshire',
    description: 'Learn about our story, our registered manager, and our person-centred approach to home care across Nottinghamshire and Derbyshire.',
  },
}

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description:
      'We genuinely care about the people we support. Kindness and empathy are at the heart of everything we do.',
  },
  {
    icon: Shield,
    title: 'Dignity',
    description:
      'Every person we support is treated with the utmost dignity and respect — in every task, every conversation, every visit.',
  },
  {
    icon: Star,
    title: 'Quality',
    description:
      'We are committed to high-quality care that meets regulatory standards and, more importantly, the real expectations of families.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      'We work in partnership with the people we support, their families, and other healthcare professionals to achieve the best outcomes.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About DeltaEcho Care Ltd"
        subtitle="We are a local, independent home care provider committed to delivering compassionate, high-quality support to people across Nottinghamshire and Derbyshire."
        breadcrumbs={[{ name: 'About Us', href: '/about' }]}
        badge="CQC Registered"
        imageSrc="/images/care-team.png"
        imageAlt="The DeltaEcho Care team preparing for home care visits"
      />

      {/* Who We Are */}
      <section className="section-padding bg-cream" aria-labelledby="who-we-are-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-widest text-teal-600">
                Who We Are
              </span>
              <h2 id="who-we-are-heading" className="section-title mb-6">
                A Local Care Provider You Can Trust
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  DeltaEcho Care Ltd is a CQC-registered domiciliary care provider based in Stapleford,
                  Nottingham. We were founded with one clear purpose: to provide genuinely excellent,
                  person-centred home care to people across Nottinghamshire and Derbyshire.
                </p>
                <p>
                  We believe that people should be able to live safely, comfortably, and independently in
                  their own homes for as long as they choose — and that the right care can make this
                  possible. Whether someone needs a brief daily visit or full-time live-in support, we
                  design every care package around the individual, not a one-size-fits-all template.
                </p>
                <p>
                  As a local, independent provider, we are genuinely invested in our community. We are not
                  a national franchise — we are a local care team, caring for families across our coverage area.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div>
            <div className="group mb-6 overflow-hidden rounded-[1.75rem] shadow-xl shadow-navy-950/10 ring-1 ring-gray-100">
              <Image
                src="/images/care-team.png"
                alt="Professional home care workers from DeltaEcho Care"
                width={900}
                height={675}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'CQC Registered', sub: 'Meeting national quality standards', value: 'CQC' },
                { label: 'Local Team', sub: 'Based in Stapleford, NG9', value: 'NG9' },
                { label: 'Services Offered', sub: 'From personal care to live-in', value: '14+' },
                { label: 'Areas Covered', sub: 'Across listed local areas', value: '11' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 text-center"
                >
                  <p className="text-3xl font-bold text-teal-600 mb-2">{stat.value}</p>
                  <p className="font-semibold text-navy-800 text-sm">{stat.label}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-white" aria-labelledby="approach-heading">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 id="approach-heading" className="section-title">Our Approach to Care</h2>
            <p className="section-subtitle">
              Person-centred care is not a buzzword for us — it is the foundation of how we operate.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            {[
              {
                title: 'We Listen First',
                body: 'Before any care begins, we take the time to understand the person — their history, their preferences, their daily routine, what matters to them. A care plan created without this understanding is not truly person-centred.',
              },
              {
                title: 'We Match Carefully',
                body: 'We take time to match each person with a carer who is right for them — not just in terms of skills, but also in character and personality. Building a genuine relationship between carer and service user is fundamental to great care.',
              },
              {
                title: 'We Stay Involved',
                body: 'Care needs change. We review care plans regularly, maintain open communication with families, and adapt support as circumstances evolve. You will never feel like a number to us.',
              },
              {
                title: 'We Uphold Dignity',
                body: "Every person we support is treated as an individual with their own history, preferences, and rights. We support — we never take over. Independence is preserved wherever possible, and dignity is non-negotiable.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-teal-500" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-navy-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-cream" aria-labelledby="values-heading">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 id="values-heading" className="section-title">Our Values</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              These four values guide every decision we make — from how we recruit carers to how we
              design care plans.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="card text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50">
                    <Icon className="h-7 w-7 text-teal-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Registered Manager */}
      <section className="section-padding bg-navy-950" aria-labelledby="manager-heading">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-teal-500/20 bg-navy-900 p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-teal-500/20">
                  <Users className="h-8 w-8 text-teal-400" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">
                    Registered Manager
                  </span>
                  <h2 id="manager-heading" className="mt-1 font-heading text-2xl font-bold text-white md:text-3xl">
                    {SITE_CONFIG.manager}
                  </h2>
                  <div className="mt-4 space-y-3 text-gray-400 leading-relaxed">
                    <p>
                      {SITE_CONFIG.manager} leads the DeltaEcho Care team as our Registered Manager,
                      overseeing all care delivery and ensuring we meet the high standards required by
                      the Care Quality Commission.
                    </p>
                    <p>
                      With a commitment to person-centred practice and a genuine passion for improving the
                      lives of people in our community, our Registered Manager ensures that every care plan
                      is designed thoughtfully and every carer is properly supported, trained, and supervised.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CQC */}
      <section className="section-padding bg-teal-50" aria-labelledby="cqc-heading">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 mb-6">
              <Shield className="h-8 w-8 text-teal-600" aria-hidden="true" />
            </div>
            <h2 id="cqc-heading" className="section-title mb-4">
              CQC Registered Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              DeltaEcho Care Ltd is registered with the{' '}
              <strong>Care Quality Commission (CQC)</strong> — the independent regulator of health
              and social care in England. Registration means we have met the fundamental standards
              required to operate as a home care provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The CQC inspects and monitors care services to ensure they are safe, effective, caring,
              responsive, and well-led. Our registration demonstrates our commitment to maintaining
              these standards — for every person we support.
            </p>
          </div>
        </div>
      </section>

      <WhyChooseUs
        title="Our Commitment to You"
        subtitle="Here is what you can expect from DeltaEcho Care — always."
      />

      <CTASection />
    </>
  )
}
