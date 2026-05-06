import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import ContactForm from '@/components/ui/ContactForm'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us | Request a Care Assessment',
  description:
    'Get in touch with DeltaEcho Care Ltd across Nottinghamshire and Derbyshire. Call 07883 024345 or complete our online form to request a free, no-obligation care assessment.',
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="We'd love to hear from you. Whether you're ready to arrange care or just want to ask some questions, our team is here to help — no pressure, no obligation."
        breadcrumbs={[{ name: 'Contact', href: '/contact' }]}
        showCTA={false}
      />

      <section className="section-padding bg-cream" aria-labelledby="contact-main-heading">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 md:p-10">
                <h2 id="contact-main-heading" className="font-heading text-2xl font-bold text-navy-800 mb-2">
                  Send Us an Enquiry
                </h2>
                <p className="text-gray-600 mb-8">
                  Complete the form below and a member of our team will get back to you promptly. We
                  aim to respond within one working hour during office hours.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="rounded-2xl bg-navy-600 p-6 text-white">
                <h3 className="font-heading text-xl font-bold mb-5">Speak to Our Team</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 group"
                    aria-label={`Call main number ${SITE_CONFIG.phone1}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Phone className="h-5 w-5 text-teal-300" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Main number</p>
                      <p className="font-semibold text-lg group-hover:text-teal-300 transition-colors">
                        {SITE_CONFIG.phone1}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone2.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 group"
                    aria-label={`Call secondary number ${SITE_CONFIG.phone2}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Phone className="h-5 w-5 text-teal-300" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Alternative number</p>
                      <p className="font-semibold text-lg group-hover:text-teal-300 transition-colors">
                        {SITE_CONFIG.phone2}
                      </p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Mail className="h-5 w-5 text-teal-300" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Email us</p>
                      <p className="font-semibold group-hover:text-teal-300 transition-colors break-all">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <h3 className="font-heading text-lg font-bold text-navy-800 mb-4">Our Address</h3>
                <address className="not-italic">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500" aria-hidden="true" />
                    <p className="text-gray-700 leading-relaxed">
                      {SITE_CONFIG.address.street}<br />
                      {SITE_CONFIG.address.area}<br />
                      {SITE_CONFIG.address.city}<br />
                      {SITE_CONFIG.address.postcode}
                    </p>
                  </div>
                </address>

                {/* Map Placeholder */}
                <div
                  className="mt-4 flex h-40 items-center justify-center rounded-xl bg-gray-100 ring-1 ring-gray-200"
                  role="img"
                  aria-label="Map of DeltaEcho Care office location in Stapleford, Nottingham"
                >
                  <div className="text-center text-sm text-gray-500">
                    <MapPin className="mx-auto mb-2 h-6 w-6 text-teal-500" aria-hidden="true" />
                    <p className="font-medium">Stapleford, Nottingham</p>
                    <p className="text-xs">NG9 8JP</p>
                    {/* Replace with Google Maps embed */}
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <h3 className="font-heading text-lg font-bold text-navy-800 mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-teal-500" aria-hidden="true" />
                  Office Hours
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Mon – Fri</dt>
                    <dd className="font-medium text-navy-700">8:00am – 6:00pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Saturday</dt>
                    <dd className="font-medium text-navy-700">9:00am – 5:00pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Sunday</dt>
                    <dd className="font-medium text-navy-700">On-call support</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-gray-500">
                  Care visits are available 7 days a week, including bank holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Care Strip */}
      <section className="bg-red-50 border-t border-red-100 py-8">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" aria-hidden="true" />
              <div>
                <p className="font-semibold text-red-800">Need urgent care or just been discharged from hospital?</p>
                <p className="text-sm text-red-700 mt-0.5">
                  Please call us directly — we will do everything we can to help quickly.
                </p>
              </div>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
              className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 whitespace-nowrap"
              aria-label={`Call urgently on ${SITE_CONFIG.phone1}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {SITE_CONFIG.phone1}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
