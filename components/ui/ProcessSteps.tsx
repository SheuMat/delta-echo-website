import Image from 'next/image'
import { PROCESS_STEPS } from '@/lib/constants'

interface ProcessStepsProps {
  title?: string
  subtitle?: string
}

export default function ProcessSteps({
  title = 'How We Get Started',
  subtitle = 'Getting the right care in place should be simple and stress-free. Here\'s exactly what happens when you contact us.',
}: ProcessStepsProps) {
  return (
    <section className="section-padding bg-navy-950" aria-labelledby="process-heading">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="process-heading" className="font-heading text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="group hidden overflow-hidden rounded-[1.75rem] shadow-2xl shadow-navy-950/30 ring-1 ring-white/10 lg:block">
          <Image
            src="/images/care-team.png"
            alt="A professional care team planning a home care visit"
            width={900}
            height={675}
            sizes="38vw"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="relative">
          {/* Connector line - desktop */}
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full border-2 border-teal-500/40 bg-navy-900 mb-5">
                  <span className="font-heading text-2xl font-bold text-teal-400">
                    {step.number}
                  </span>
                </div>

                {/* Connector line - mobile */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div
                    className="absolute left-1/2 top-[72px] h-8 w-px bg-teal-500/20 lg:hidden"
                    aria-hidden="true"
                  />
                )}

                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6 text-sm">
            Ready to take the first step? We&apos;re here to help — no pressure, just a friendly conversation.
          </p>
          <a
            href="/contact"
            className="btn-primary"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
