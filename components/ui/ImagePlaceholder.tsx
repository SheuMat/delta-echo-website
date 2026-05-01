import { cn } from '@/lib/utils'
import { Home, Users, Heart, Smile } from 'lucide-react'

type PlaceholderVariant = 'hero' | 'care' | 'family' | 'home' | 'team'
type AspectRatio = 'square' | 'landscape' | 'portrait' | 'wide' | 'video'

interface ImagePlaceholderProps {
  label?: string
  className?: string
  aspectRatio?: AspectRatio
  variant?: PlaceholderVariant
  priority?: boolean
}

const variantConfig: Record<PlaceholderVariant, { gradient: string; Icon: React.FC<{ className?: string }>; color: string }> = {
  hero: {
    gradient: 'from-navy-800 via-navy-700 to-teal-700',
    Icon: Home,
    color: 'text-teal-300',
  },
  care: {
    gradient: 'from-teal-700 via-teal-600 to-navy-700',
    Icon: Heart,
    color: 'text-cream-50',
  },
  family: {
    gradient: 'from-gold-700 via-gold-600 to-teal-700',
    Icon: Users,
    color: 'text-cream-50',
  },
  home: {
    gradient: 'from-navy-600 via-teal-600 to-teal-500',
    Icon: Home,
    color: 'text-white',
  },
  team: {
    gradient: 'from-navy-700 via-navy-600 to-teal-600',
    Icon: Smile,
    color: 'text-teal-200',
  },
}

const aspectRatioClasses: Record<AspectRatio, string> = {
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/9]',
  video: 'aspect-video',
}

export default function ImagePlaceholder({
  label = 'Image',
  className,
  aspectRatio = 'landscape',
  variant = 'care',
}: ImagePlaceholderProps) {
  const { gradient, Icon, color } = variantConfig[variant]

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-gradient-to-br',
        gradient,
        aspectRatioClasses[aspectRatio],
        className
      )}
      role="img"
      aria-label={label}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <Icon className={cn('h-12 w-12 opacity-60 mb-3', color)} />
        <p className={cn('text-xs font-medium text-center opacity-50', color)}>
          {label}
        </p>
      </div>
    </div>
  )
}
