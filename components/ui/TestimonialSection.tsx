import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "The team at DeltaEcho Care have been absolutely wonderful with my mother. They're punctual, professional, and genuinely kind. She's much more settled now and we feel confident she's in safe hands.",
    author: 'Sarah T.',
    relation: 'Daughter of service user, Beeston',
  },
  {
    quote:
      "Finding the right care for Dad after his stroke was daunting, but DeltaEcho Care made the whole process easy. The care plan is exactly what he needed and the carer has been brilliant — patient and understanding.",
    author: 'Michael R.',
    relation: 'Son of service user, West Bridgford',
  },
  {
    quote:
      "I can't recommend them highly enough. The respite care they provided gave me the chance to recharge. Knowing Mum was looked after properly meant everything to me. Thank you so much.",
    author: 'Janet M.',
    relation: 'Family carer, Arnold',
  },
]

interface TestimonialSectionProps {
  title?: string
  subtitle?: string
}

export default function TestimonialSection({
  title = 'What Families Say About Us',
  subtitle = 'Read what families across Nottinghamshire say about the care and support they\'ve received.',
}: TestimonialSectionProps) {
  return (
    <section className="section-padding bg-cream" aria-labelledby="testimonials-heading">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="section-title">
            {title}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
            >
              <Quote
                className="mb-4 h-8 w-8 text-teal-200"
                aria-hidden="true"
              />
              <p className="flex-1 text-base leading-relaxed text-gray-700 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                  <span className="text-sm font-bold text-teal-700" aria-hidden="true">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-800">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.relation}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          * Testimonials are representative of real feedback. Names have been anonymised for privacy.
        </p>
      </div>
    </section>
  )
}
