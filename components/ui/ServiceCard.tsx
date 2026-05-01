import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: LucideIcon
  features?: string[]
  variant?: 'default' | 'compact' | 'featured'
  className?: string
}

export default function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
  features,
  variant = 'default',
  className,
}: ServiceCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className={cn(
          'group flex items-start gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-navy-950/5 ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-500',
          className
        )}
      >
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 transition-colors group-hover:bg-teal-100">
          <Icon className="h-6 w-6 text-teal-600" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading text-base font-semibold text-navy-800 group-hover:text-teal-700 transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-600 line-clamp-2">
            {description}
          </p>
        </div>
        <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-teal-500" aria-hidden="true" />
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <div className={cn('group rounded-2xl bg-navy-600 p-8 text-white shadow-xl shadow-navy-950/15 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl', className)}>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-6">
          <Icon className="h-7 w-7 text-teal-300" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-xl font-bold mb-3">{title}</h3>
        <p className="text-white/80 leading-relaxed mb-6">{description}</p>
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 flex-shrink-0" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:text-teal-200 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-lg"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    )
  }

  // Default variant
  return (
    <div className={cn('group card flex flex-col overflow-hidden', className)}>
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 mb-5 transition-colors group-hover:bg-teal-100">
        <Icon className="h-7 w-7 text-teal-600" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4 flex-1">{description}</p>
      {features && (
        <ul className="space-y-2 mb-5">
          {features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500 flex-shrink-0" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors mt-auto focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg group"
        aria-label={`Learn more about ${title}`}
      >
        Find out more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </div>
  )
}
