import type { Metadata } from 'next'
import { User, Brain, RefreshCw, HeartPulse } from 'lucide-react'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Live-in Care across Nottinghamshire and Derbyshire',
  description:
    'DeltaEcho Care provides professional live-in care across Nottinghamshire and Derbyshire. A dedicated carer lives with you at home, providing 24-hour support — a genuine alternative to a care home.',
  keywords: ['live-in care Nottinghamshire', 'live in carer Nottingham', '24 hour care at home Nottinghamshire', 'live-in care Nottingham'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/live-in-care`,
  },
}

export default function LiveInCarePage() {
  return (
    <ServicePageLayout
      title="Live-in Care across Nottinghamshire and Derbyshire"
      subtitle="A dedicated, professional carer lives with you in your own home — providing 24-hour support, companionship, and the freedom to stay where you belong."
      badge="Live-in Care"
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: 'Live-in Care', href: '/services/live-in-care' },
      ]}
      imageSrc="/images/home-care-hero.png"
      imageAlt="A professional carer supporting an older person in a comfortable home environment"
      intro="Live-in care offers the reassurance of round-the-clock support without having to leave your home. A trained carer lives with you, providing practical assistance, companionship, and care — fitted around your life and your routines. For many people and families, live-in care offers everything a care home provides, but with the profound benefit of familiar surroundings, personal freedom, and one-to-one attention."
      whoIsItFor={{
        title: 'Who Benefits from Live-in Care?',
        items: [
          'People who need continuous support but wish to remain at home',
          'Those living with complex or multiple care needs',
          'People living with dementia who need consistent, reassuring presence',
          'Anyone who would otherwise be considering a residential care home',
          'Couples where one or both partners need care',
          'People who live alone and whose family have concerns about safety',
          'Those recovering from a significant illness or major surgery',
        ],
      }}
      whatWeProvide={{
        title: 'What a Live-in Carer Provides',
        items: [
          'Full personal care — washing, dressing, continence support',
          'Meal planning, preparation, and dietary management',
          'Medication support and administration',
          'Mobility and transfer assistance',
          'Household tasks — laundry, cleaning, tidying',
          'Shopping, errands, and accompaniment to appointments',
          'Companionship and social engagement',
          'Night-time support and safety monitoring',
          'Support with hobbies and community activities',
          'Coordination with family members and healthcare professionals',
        ],
      }}
      benefits={{
        title: 'Live-in Care vs. a Care Home',
        items: [
          {
            title: 'Stay in Your Own Home',
            description: 'You remain surrounded by your own belongings, your memories, your garden, and your neighbourhood — which matters enormously to wellbeing.',
          },
          {
            title: 'One-to-One Attention',
            description: 'Unlike a care home, where a single member of staff may look after many residents, your live-in carer is dedicated entirely to you.',
          },
          {
            title: 'Your Routine, Your Rules',
            description: 'Get up when you like, eat what you choose, have visitors whenever you want. A care home cannot offer this level of personal freedom.',
          },
          {
            title: 'Couples Can Stay Together',
            description: 'Moving into a care home can mean separation. With live-in care, couples can remain together in their home — with the support they both need.',
          },
          {
            title: 'Pets Welcome',
            description: 'Your beloved pet can stay with you — a small but deeply meaningful thing for many people.',
          },
          {
            title: 'Family Peace of Mind',
            description: 'Knowing a professional carer is present at all times, day and night, gives families genuine reassurance.',
          },
        ],
      }}
      whyDeltaEcho={[
        'All live-in carers are carefully vetted, DBS-checked, and fully trained before placement.',
        'We conduct a thorough matching process to ensure your carer is right for you as a person.',
        'We have a dedicated coordinator overseeing every live-in placement.',
        'We handle all aspects of the arrangement, including regular care plan reviews.',
        'We are CQC registered — a quality assurance you cannot overlook.',
        'We provide a clear, transparent pricing structure with no hidden fees.',
      ]}
      faqs={[
        {
          q: 'Where does the live-in carer sleep?',
          a: 'Your carer will need their own bedroom and some time off during the day (typically 2 hours). In return, they provide constant presence and are on hand for any needs — including at night.',
        },
        {
          q: 'How is a live-in carer different from an agency carer?',
          a: 'We are a regulated provider. All our carers are employed by us, trained by us, and supervised by our management team. This gives you far stronger quality assurance than using an unregulated introduction agency.',
        },
        {
          q: 'Can live-in care be arranged quickly?',
          a: 'Yes. We understand that need for care can arise suddenly — particularly after a hospital discharge. We will do everything we can to arrange a placement promptly.',
        },
        {
          q: 'What if the carer needs time off?',
          a: 'We arrange cover carers for holidays and days off, ensuring there is no gap in your support. We introduce any cover carer in advance wherever possible.',
        },
      ]}
      relatedServices={[
        { name: 'Personal Care', href: '/services/personal-care', icon: User },
        { name: 'Dementia Care', href: '/services/dementia-care', icon: Brain },
        { name: 'Respite Care', href: '/services/respite-care', icon: RefreshCw },
        { name: 'End-of-Life Care', href: '/services/end-of-life-care', icon: HeartPulse },
      ]}
    />
  )
}
