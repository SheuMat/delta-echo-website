import type { Metadata } from 'next'
import { User, Home, Brain, RefreshCw } from 'lucide-react'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'End-of-Life Care at Home | Nottinghamshire & Derbyshire',
  description:
    'Compassionate end-of-life care at home across Nottinghamshire and Derbyshire from DeltaEcho Care. Supporting people and families during life\'s final chapter with dignity, respect, and gentle care.',
  keywords: ['end of life care Nottingham', 'palliative care at home Nottinghamshire', 'end of life care Nottinghamshire', 'terminal care at home Nottingham'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/end-of-life-care`,
  },
}

export default function EndOfLifeCarePage() {
  return (
    <ServicePageLayout
      title="End-of-Life Care at Home"
      subtitle="Gentle, compassionate support during life's final chapter — allowing your loved one to remain at home, comfortable, and surrounded by those they love."
      badge="End-of-Life Care"
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: 'End-of-Life Care', href: '/services/end-of-life-care' },
      ]}
      imageSrc="/images/family-peace-of-mind.png"
      imageAlt="A calm and compassionate home care support moment with family nearby"
      intro="Many people, when asked, say they would choose to spend their final days at home — in familiar surroundings, with the people they love close by. At DeltaEcho Care, we provide compassionate, respectful end-of-life support that makes this wish possible. We work alongside palliative care teams, hospice nurses, and GPs to ensure the person we support receives holistic, co-ordinated care that prioritises comfort, dignity, and peace."
      whoIsItFor={{
        title: 'Who End-of-Life Care Supports',
        items: [
          'People approaching the end of life due to terminal illness or organ failure',
          'Those who have made the decision to receive palliative care at home rather than in hospital',
          'Families who need professional support to enable their loved one to die at home',
          'People being discharged from hospital for end-of-life care at home',
          'Those who need nursing support that the family cannot provide alone',
          'Families who are exhausted and need additional support at a very difficult time',
        ],
      }}
      whatWeProvide={{
        title: 'End-of-Life Support Can Include',
        items: [
          'Personal care — washing, dressing, repositioning, pressure area care',
          'Comfort-focused care — positioning, pain monitoring, symptom observation',
          'Medication support — prompts, administration, and liaison with clinical teams',
          'Mouth care and hydration support',
          'Emotional support and compassionate presence',
          'Practical domestic support — meals, household tasks, laundry',
          'Night-time and overnight care to ensure 24-hour cover',
          'Liason with community nurses, GPs, and hospice teams',
          'Support and practical guidance for family members',
          'Bereavement support signposting for families after the person passes',
        ],
      }}
      benefits={{
        title: 'Why Choosing Home Matters',
        items: [
          {
            title: 'Dignity in Familiar Surroundings',
            description: 'Being at home — with personal belongings, familiar faces, and a comfortable environment — can bring profound peace and comfort in the final weeks and days of life.',
          },
          {
            title: 'Family Can Be Close',
            description: 'At home, there are no restricted visiting hours. Family, close friends, and even beloved pets can be present whenever needed.',
          },
          {
            title: 'A Person-Centred Approach',
            description: 'We follow the individual\'s wishes — their preferences, their values, their needs. Every element of care is shaped around them.',
          },
          {
            title: 'Professional, Compassionate Carers',
            description: 'Our carers are trained in end-of-life care and understand the unique sensitivity this work requires. They are chosen for their compassion as much as their skills.',
          },
          {
            title: 'Family Support',
            description: 'We support the whole family, not just the person receiving care. We listen, we guide, and we make sure you don\'t feel alone during this time.',
          },
          {
            title: 'Co-ordinated with Clinical Teams',
            description: 'We work seamlessly with GPs, district nurses, hospice teams, and palliative care specialists to ensure safe, joined-up care.',
          },
        ],
      }}
      whyDeltaEcho={[
        'Our carers receive training in end-of-life care, including communication and comfort-focused practice.',
        'We approach this work with the deep respect and sensitivity it demands.',
        'We are available for urgent placements — including hospital discharge for end-of-life care.',
        'We maintain open communication with families throughout, and are honest about what to expect.',
        'We are CQC registered and committed to safe, compassionate, regulated care.',
        'We can arrange 24-hour or live-in care for those who need continuous presence.',
      ]}
      faqs={[
        {
          q: 'Can you arrange care at very short notice for someone coming home from hospital?',
          a: 'Yes. We understand that end-of-life hospital discharges can be arranged quickly and that families need support in place fast. Please call us directly on 07883 024345 and we will prioritise your situation.',
        },
        {
          q: 'Do your carers have experience with end-of-life care?',
          a: 'Yes. Our carers receive specific training in end-of-life and palliative care — including how to provide comfort-focused personal care, how to communicate sensitively, and how to support distressed family members.',
        },
        {
          q: 'How do you work alongside district nurses and the hospice?',
          a: 'We work closely and collaboratively with all clinical professionals involved. We maintain clear records, communicate promptly about changes in condition, and follow clinical guidance from the healthcare team.',
        },
        {
          q: 'Can you provide overnight or 24-hour care?',
          a: 'Yes. For end-of-life care, we can arrange overnight visits, waking nights, or full live-in care to ensure someone is always present. We will work with you to find the right level of support.',
        },
      ]}
      relatedServices={[
        { name: 'Live-in Care', href: '/services/live-in-care', icon: Home },
        { name: 'Dementia Care', href: '/services/dementia-care', icon: Brain },
        { name: 'Personal Care', href: '/services/personal-care', icon: User },
        { name: 'Respite Care', href: '/services/respite-care', icon: RefreshCw },
      ]}
    />
  )
}
