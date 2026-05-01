import type { Metadata } from 'next'
import { User, Home, RefreshCw, HeartPulse } from 'lucide-react'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Dementia Care at Home | Nottinghamshire',
  description:
    'Specialist dementia care at home in Nottinghamshire from DeltaEcho Care. Trained carers providing person-centred support for people living with Alzheimer\'s and other dementias.',
  keywords: ['dementia care Nottingham', 'dementia care Nottinghamshire', 'Alzheimer\'s care at home Nottingham', 'specialist dementia carer Nottinghamshire'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/dementia-care`,
  },
}

export default function DementiaCarePage() {
  return (
    <ServicePageLayout
      title="Dementia Care at Home"
      subtitle="Compassionate, specialist support for people living with dementia — enabling them to remain in familiar surroundings with the understanding and consistency they need."
      badge="Dementia Care"
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: 'Dementia Care', href: '/services/dementia-care' },
      ]}
      imageSrc="/images/family-peace-of-mind.png"
      imageAlt="A calm companionship moment supporting an older person at home"
      intro="Living with dementia at home is possible with the right support. Our trained carers understand the unique needs of people living with Alzheimer's disease and other forms of dementia — and we know that for many people, remaining at home in familiar surroundings can make a profound difference to their wellbeing and quality of life. We work closely with families, GPs, and dementia support services to provide joined-up, compassionate care."
      whoIsItFor={{
        title: 'Who This Service Supports',
        items: [
          'People living with Alzheimer\'s disease, vascular dementia, or other forms of dementia',
          'Those in early, moderate, or advanced stages of dementia',
          'People who are still able to live at home but need increasing support',
          'Families who are struggling to provide enough care alone',
          'Those who have recently received a dementia diagnosis and are planning for the future',
          'People who would benefit from specialist memory support and cognitive stimulation',
        ],
      }}
      whatWeProvide={{
        title: 'Dementia Care Support Can Include',
        items: [
          'Personal care — washing, dressing, oral hygiene',
          'Medication prompts and administration',
          'Meal preparation and monitoring of nutrition and hydration',
          'Maintaining a consistent and reassuring daily routine',
          'Cognitive stimulation activities — conversations, reminiscence, puzzles',
          'Orientation support and gentle reality orientation techniques',
          'Monitoring for changes in condition and wellbeing',
          'Behaviour support — responding calmly to confusion, distress, or wandering',
          'Accompanying to appointments and activities',
          'Regular communication and updates with family members',
        ],
      }}
      benefits={{
        title: 'Benefits of Dementia Care at Home',
        items: [
          {
            title: 'Familiar Environment',
            description: 'Familiar surroundings, routines, and faces are deeply important for people with dementia. Home is where memories live — and that matters.',
          },
          {
            title: 'Consistency of Carer',
            description: 'We carefully match carers and maintain consistency. Seeing familiar faces reduces anxiety and helps build trust — which is everything in dementia care.',
          },
          {
            title: 'Specialist Training',
            description: 'Our carers receive training in dementia care, communication techniques, and how to respond to distressing behaviours with patience and compassion.',
          },
          {
            title: 'Family Involvement',
            description: 'We work in partnership with families — keeping you informed and involved, and supporting you with the emotional and practical challenges of caring for someone with dementia.',
          },
          {
            title: 'Flexible and Adaptive',
            description: 'Dementia is progressive. We review and adapt care plans as needs change — ensuring the right level of support at every stage.',
          },
          {
            title: 'Reduced Hospital Admissions',
            description: 'Consistent, high-quality dementia care at home can help to reduce unnecessary hospital admissions — which can be disorientating and distressing for people with dementia.',
          },
        ],
      }}
      whyDeltaEcho={[
        'Our carers are trained in dementia care and understanding the specific challenges it presents.',
        'We maintain exceptional carer consistency for all dementia clients.',
        'We communicate openly with families — you will never be left in the dark.',
        'We can work alongside GP teams, community nurses, and Admiral Nurses.',
        'We are CQC registered and committed to safe, high-quality care.',
        'We take time to understand the person behind the diagnosis — their life history, preferences, and personality.',
      ]}
      faqs={[
        {
          q: 'At what stage of dementia should I consider care at home?',
          a: 'It is never too early to plan ahead. Many families arrange a small amount of support in the early stages — perhaps a weekly companion visit or help with medication — and increase this as needs develop. We can help you think through what might be appropriate now and in the future.',
        },
        {
          q: 'My family member refuses care. What should we do?',
          a: 'This is a very common and challenging situation. We have experience in working sensitively with people who are initially resistant to care. A gradual, friendly introduction often works well — we can start with a simple companionship visit and build trust over time.',
        },
        {
          q: 'Can you support someone with advanced dementia?',
          a: 'Yes. We can support people at all stages of dementia, including those with advanced needs — potentially alongside live-in care or 24-hour support. We will always be honest with families about what we can and cannot provide.',
        },
        {
          q: 'How do you keep families updated?',
          a: 'We maintain regular contact with family members and named contacts. We will always alert you promptly to any significant changes in your loved one\'s condition or wellbeing.',
        },
      ]}
      relatedServices={[
        { name: 'Live-in Care', href: '/services/live-in-care', icon: Home },
        { name: 'Respite Care', href: '/services/respite-care', icon: RefreshCw },
        { name: 'Personal Care', href: '/services/personal-care', icon: User },
        { name: 'End-of-Life Care', href: '/services/end-of-life-care', icon: HeartPulse },
      ]}
    />
  )
}
