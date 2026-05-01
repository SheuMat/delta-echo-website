import type { Metadata } from 'next'
import { User, Home, Brain, RefreshCw } from 'lucide-react'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Personal Care at Home | Nottinghamshire',
  description:
    'DeltaEcho Care provides dignified personal care at home in Nottinghamshire. Support with washing, dressing, continence care, and daily routines — tailored to you.',
  keywords: ['personal care at home Nottinghamshire', 'personal care Nottingham', 'help with washing dressing Nottingham', 'domiciliary personal care Nottinghamshire'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/personal-care`,
  },
}

export default function PersonalCarePage() {
  return (
    <ServicePageLayout
      title="Personal Care at Home"
      subtitle="Dignified, respectful support with daily personal routines — helping you start every day feeling clean, comfortable, and cared for."
      badge="Personal Care"
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: 'Personal Care', href: '/services/personal-care' },
      ]}
      imageSrc="/images/daily-care-support.png"
      imageAlt="A caregiver respectfully supporting an older person with a daily routine at home"
      intro="Personal care is at the heart of what we do. Our carers provide sensitive, respectful support with all aspects of personal hygiene and daily routines — always working at your pace and on your terms. We understand that accepting help with personal care can feel daunting. Our carers are chosen not just for their skills, but for their warmth and understanding."
      whoIsItFor={{
        items: [
          'Older people who need support maintaining their daily hygiene routines',
          'Adults recovering from illness, surgery, or hospital discharge',
          'People living with physical disabilities who need additional support',
          'Those living with dementia who benefit from a consistent daily routine',
          'Anyone who finds daily personal tasks more difficult than they used to',
          'People whose family carers need additional support or a break',
        ],
      }}
      whatWeProvide={{
        items: [
          'Washing, bathing, and showering — including bed baths where needed',
          'Hair washing, drying, and styling',
          'Oral hygiene and denture care',
          'Dressing and undressing',
          'Skin care and moisturising',
          'Continence support and catheter care',
          'Stoma care (where trained carers are required)',
          'Shaving and grooming',
          'Getting up and going to bed (morning and evening calls)',
          'Support with assistive devices and mobility aids',
        ],
      }}
      benefits={{
        title: 'The Benefits of Personal Care at Home',
        items: [
          {
            title: 'Dignity Preserved',
            description: 'Personal care at home is delivered privately and sensitively. There is no ward, no communal bathroom — just one-to-one support in your own space, on your own terms.',
          },
          {
            title: 'Familiar Surroundings',
            description: 'Remaining in your own home — with your own bathroom, your own products, your own routine — can make a significant difference to wellbeing and sense of self.',
          },
          {
            title: 'Consistency of Carer',
            description: 'We prioritise sending the same carer for personal care visits. Trust and familiarity matter enormously when accepting intimate support.',
          },
          {
            title: 'Flexible Timing',
            description: 'We work around your routine — whether you prefer to get up early or have a leisurely morning. Your schedule, your pace.',
          },
          {
            title: 'Family Reassurance',
            description: 'Families have peace of mind knowing their loved one is starting each day with professional, compassionate support.',
          },
          {
            title: 'Independence Maintained',
            description: 'Our carers support you to do as much as you can for yourself. We assist — we never take over. Your independence is our priority.',
          },
        ],
      }}
      whyDeltaEcho={[
        'All our carers are trained in personal care best practice and infection control.',
        'We carry out thorough assessments before care begins to understand your preferences and needs.',
        'We are CQC registered, providing the reassurance of regulatory oversight.',
        'We match carers carefully — taking into account personality and communication style, not just skills.',
        'We will always respect your right to refuse or modify care.',
        'Our carers receive ongoing supervision and training.',
      ]}
      faqs={[
        {
          q: 'Will I always have the same carer for personal care?',
          a: 'We do everything we can to ensure continuity. Where possible, you will have a small, consistent team — often just one or two carers — for your personal care visits. We understand how important trust is when accepting intimate support.',
        },
        {
          q: 'What if I am embarrassed or uncomfortable with personal care?',
          a: "This is very common and completely understandable. Our carers are trained to put people at ease, work at your pace, and always maintain your dignity. You can also specify whether you'd prefer a male or female carer.",
        },
        {
          q: 'Can I specify male or female carers?',
          a: 'Yes. We will always do our best to accommodate your preference for a male or female carer, particularly for personal care tasks.',
        },
        {
          q: 'Can personal care visits happen at any time of day?',
          a: 'Yes. We offer morning, afternoon, and evening calls. If you need support with getting up in the morning and going to bed at night, we can provide both.',
        },
      ]}
      relatedServices={[
        { name: 'Live-in Care', href: '/services/live-in-care', icon: Home },
        { name: 'Dementia Care', href: '/services/dementia-care', icon: Brain },
        { name: 'Respite Care', href: '/services/respite-care', icon: RefreshCw },
        { name: 'Companionship Support', href: '/services/companionship-domestic-support', icon: User },
      ]}
    />
  )
}
