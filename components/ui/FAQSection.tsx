'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQ {
  q: string
  a: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  subtitle?: string
}

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about arranging home care with DeltaEcho Care.',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="section-title">{title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-gray-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const itemId = `faq-item-${index}`
            const panelId = `faq-panel-${index}`

            return (
              <div key={index} className="py-5">
                <h3>
                  <button
                    id={itemId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="text-base font-semibold text-navy-800">{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        'mt-0.5 h-5 w-5 flex-shrink-0 text-teal-500 transition-transform duration-200',
                        isOpen && 'rotate-180'
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={itemId}
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <p className="pt-4 text-base leading-relaxed text-gray-600">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
