import type { Metadata } from 'next'
import { User, Home, Brain, HeartPulse } from 'lucide-react'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Respite Care in Nottinghamshire',
  description:
    'Respite care from DeltaEcho Care in Nottinghamshire — giving family carers a planned break while their loved one receives expert, compassionate care at home.',
  keywords: ['respite care Nottingham', 'respite care Nottinghamshire', 'carer break Nottingham', 'short-term care Nottinghamshire'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/respite-care`,
  },
}

export default function RespiteCarePage() {
  return (
    <ServicePageLayout
      title="Respite Care in Nottinghamshire"
      subtitle="A well-earned break for family carers — with expert, compassionate care stepped in so you can rest, recharge, and return refreshed."
      badge="Respite Care"
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: 'Respite Care', href: '/services/respite-care' },
      ]}
      imageSrc="/images/family-peace-of-mind.png"
      imageAlt="A family member feeling reassured while a caregiver supports their loved one"
      intro="If you care for a loved one, you will know how demanding — and rewarding — that role can be. But every carer needs a break. Respite care from DeltaEcho Care allows you to step back, knowing that the person you care for is in safe, professional hands. Whether you need a few hours each week, an occasional weekend off, or support while you recover from illness, we can help."
      whoIsItFor={{
        title: 'Who Respite Care Is For',
        items: [
          'Family members and friends who are providing regular, unpaid care',
          'Primary carers who are experiencing burnout, exhaustion, or stress',
          'Carers who need time to attend medical appointments or work commitments',
          'Families who need cover while the primary carer is away or unwell',
          'Those who want a planned, regular break each week',
          'Anyone considering whether a higher level of care might be needed in the future',
        ],
      }}
      whatWeProvide={{
        title: 'Respite Support Can Include',
        items: [
          'All personal care tasks — washing, dressing, continence support',
          'Medication prompts and administration',
          'Meal preparation and supervision',
          'Companionship and social engagement',
          'Accompanying to activities and appointments',
          'Overnight stays to allow family carers to sleep',
          'Domestic support — light housework, laundry, tidying',
          'Live-in respite for extended breaks or holidays',
          'Consistent, familiar support delivered with warmth and professionalism',
        ],
      }}
      benefits={{
        title: 'Why Respite Care Matters',
        items: [
          {
            title: 'You Cannot Pour From an Empty Cup',
            description: 'Family carers who do not rest are at significantly higher risk of burnout, physical illness, and mental health challenges. Taking a break is not selfish — it is essential.',
          },
          {
            title: 'Better Care for Longer',
            description: 'Carers who take regular breaks are better equipped to provide high-quality care over the long term. Respite protects the sustainability of family caring.',
          },
          {
            title: 'Your Loved One Benefits Too',
            description: 'Professional respite care introduces new faces, fresh conversation, and different activities — which can be stimulating and positive for the person receiving care.',
          },
          {
            title: 'Flexible to Your Life',
            description: 'Respite care can be arranged for a few hours, a day, a weekend, or longer. We work around your schedule, not ours.',
          },
          {
            title: 'No Disruption to Routine',
            description: 'Care takes place at home, in familiar surroundings — maintaining the routine and environment your loved one is comfortable with.',
          },
          {
            title: 'Peace of Mind',
            description: 'You can relax knowing that a trained, DBS-checked carer is providing professional, compassionate support in your absence.',
          },
        ],
      }}
      whyDeltaEcho={[
        'We understand the emotional difficulty of handing over care — and we make the transition as smooth as possible.',
        'We introduce the respite carer before your break, so your loved one knows who will be visiting.',
        'Our carers follow your care plan carefully, maintaining routines and preferences.',
        'We communicate with you clearly and keep you updated throughout.',
        'We are CQC registered, providing the assurance that care standards are independently monitored.',
        'We offer both planned and short-notice respite, including for urgent situations.',
      ]}
      faqs={[
        {
          q: 'How much notice do I need to give for respite care?',
          a: "Ideally a few days' notice allows us to prepare properly and introduce the carer beforehand. However, we understand that situations arise unexpectedly and we will do our best to accommodate short-notice requests.",
        },
        {
          q: 'Can respite care be provided overnight?',
          a: 'Yes. We can arrange overnight respite care so family carers can have an uninterrupted night\'s sleep. We can also arrange live-in respite for longer breaks.',
        },
        {
          q: 'Will my loved one meet the carer before I leave?',
          a: 'Where at all possible, yes. We prefer to introduce the respite carer in advance — ideally while you are still present — so your loved one can meet them in a comfortable, relaxed setting.',
        },
        {
          q: 'Can I arrange regular weekly respite?',
          a: 'Absolutely. Many families arrange a set number of respite hours each week — for example, a few hours on a Saturday morning — and we can build this into a regular schedule.',
        },
      ]}
      relatedServices={[
        { name: 'Personal Care', href: '/services/personal-care', icon: User },
        { name: 'Live-in Care', href: '/services/live-in-care', icon: Home },
        { name: 'Dementia Care', href: '/services/dementia-care', icon: Brain },
        { name: 'End-of-Life Care', href: '/services/end-of-life-care', icon: HeartPulse },
      ]}
    />
  )
}
