import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Shield, Facebook, Linkedin, Instagram } from 'lucide-react'
import { SITE_CONFIG, NAV_SERVICES } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'All Services', href: '/services' },
    { name: 'Areas We Cover', href: '/areas-we-cover' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ]

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white" role="contentinfo">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute left-1/4 bottom-0 h-56 w-56 rounded-full bg-gold-500/10 blur-3xl" />
      </div>
      {/* Main Footer */}
      <div className="container-wide relative py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 inline-flex rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500">
              <Image
                src="/delta-echo-logo.png"
                alt="DeltaEcho Care"
                width={220}
                height={80}
                className="h-[52px] w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              CQC-registered home care provider delivering compassionate, person-centred support
              across Nottinghamshire and Derbyshire. Helping people live safely and independently at home.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/40 bg-teal-500/10 px-4 py-2 shadow-lg shadow-teal-950/20">
              <Shield className="h-4 w-4 text-teal-400" />
              <span className="text-xs font-medium text-teal-300">CQC Registered Service</span>
            </div>
            <div className="mt-6 flex items-center gap-3" aria-label="Social media links">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <span
                  key={index}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-400/40 hover:bg-teal-500/10 hover:text-teal-300"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {NAV_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 transition-colors hover:text-teal-400 focus:outline-none focus:text-teal-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-teal-400 focus:outline-none focus:text-teal-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
                  className="flex items-start gap-3 text-sm text-gray-300 transition-colors hover:text-teal-400 focus:outline-none focus:text-teal-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
                  <div>
                    <p className="font-medium">{SITE_CONFIG.phone1}</p>
                    <p className="text-xs text-gray-500">{SITE_CONFIG.phone2}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-teal-400 focus:outline-none focus:text-teal-400"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-teal-400" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <address className="flex items-start gap-3 not-italic">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
                  <p className="text-sm leading-relaxed text-gray-300">
                    {SITE_CONFIG.address.street},<br />
                    {SITE_CONFIG.address.area},<br />
                    {SITE_CONFIG.address.city},<br />
                    {SITE_CONFIG.address.postcode}
                  </p>
                </address>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
                  <div className="text-sm text-gray-400">
                    <p>{SITE_CONFIG.openingHours.weekdays}</p>
                    <p>{SITE_CONFIG.openingHours.saturday}</p>
                    <p>{SITE_CONFIG.openingHours.sunday}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-gray-500">
              &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
              Registered in England and Wales.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-teal-400 focus:outline-none focus:text-teal-400"
              >
                Privacy Policy
              </Link>
              <span aria-hidden="true">·</span>
              <span>CQC Registered</span>
              <span aria-hidden="true">·</span>
              <span>Registered Manager: {SITE_CONFIG.manager}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
