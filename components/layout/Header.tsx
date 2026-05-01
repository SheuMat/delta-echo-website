'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE_CONFIG, NAV_SERVICES } from '@/lib/constants'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Areas We Cover', href: '/areas-we-cover' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 shadow-xl shadow-navy-950/5 backdrop-blur-xl ring-1 ring-navy-900/5'
          : 'bg-navy-950/55 backdrop-blur-md'
      )}
      role="banner"
    >
      <div className="container-wide">
        <div className="flex h-18 items-center justify-between py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center rounded-xl p-1 transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
            aria-label="DeltaEcho Care - Home"
          >
            <Image
              src="/delta-echo-logo.png"
              alt="DeltaEcho Care"
              width={220}
              height={80}
              priority
              className="h-10 w-auto object-contain md:h-[52px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-1',
                  isScrolled
                    ? 'text-gray-700 hover:bg-navy-50 hover:text-navy-700'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setServicesOpen(!servicesOpen)
                  }
                }}
                className={cn(
                  'flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-1',
                  isScrolled
                    ? 'text-gray-700 hover:bg-navy-50 hover:text-navy-700'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                )}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={cn('h-4 w-4 transition-transform duration-200', servicesOpen && 'rotate-180')}
                />
              </button>

              {servicesOpen && (
                <div
                  className="absolute left-0 top-full mt-3 w-80 rounded-2xl bg-white/95 p-2 shadow-2xl shadow-navy-950/15 ring-1 ring-navy-900/10 backdrop-blur-xl animate-slide-up"
                  role="menu"
                >
                  {NAV_SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex flex-col rounded-xl px-4 py-3 transition-all duration-200 hover:translate-x-0.5 hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      role="menuitem"
                    >
                      <span className="text-sm font-semibold text-navy-800">{service.name}</span>
                      <span className="mt-0.5 text-xs text-gray-500">{service.description}</span>
                    </Link>
                  ))}
                  <div className="mt-1 border-t border-gray-100 pt-1">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 font-semibold text-teal-600 transition-colors hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      role="menuitem"
                    >
                      View All Services
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-1',
                  isScrolled
                    ? 'text-gray-700 hover:bg-navy-50 hover:text-navy-700'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
              className="btn-phone text-xs"
              aria-label={`Call us on ${SITE_CONFIG.phone1}`}
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE_CONFIG.phone1}
            </a>
            <Link href="/contact" className="btn-primary text-xs">
              Request Assessment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'lg:hidden rounded-lg p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500',
              isScrolled ? 'text-navy-700 hover:bg-navy-50' : 'text-white hover:bg-white/10'
            )}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          'lg:hidden fixed inset-0 top-[72px] z-40 bg-navy-950/98 backdrop-blur-xl transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-3'
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <nav className="flex-1 px-4 py-6 space-y-1" aria-label="Mobile navigation">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              About
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown
                  className={cn('h-5 w-5 transition-transform duration-200', mobileServicesOpen && 'rotate-180')}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-teal-500/30 pl-4">
                  {NAV_SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-gold-500"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center rounded-lg px-3 py-2.5 text-sm font-semibold text-teal-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    View All Services →
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/areas-we-cover"
              onClick={() => setMobileOpen(false)}
              className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              Areas We Cover
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-500"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile CTAs */}
          <div className="border-t border-white/10 p-4 space-y-3">
            <a
              href={`tel:${SITE_CONFIG.phone1.replace(/\s/g, '')}`}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-teal-500 px-6 py-3.5 text-base font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="h-5 w-5" />
              Call {SITE_CONFIG.phone1}
            </a>
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 text-base font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Request a Care Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
