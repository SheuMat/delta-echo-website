import type { Metadata } from 'next'
import { User, Home, Brain, RefreshCw } from 'lucide-react'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Companionship & Domestic Support | Home Care Nottinghamshire & Derbyshire',
  description:
    'Companionship and domestic support from DeltaEcho Care across Nottinghamshire and Derbyshire. Friendly visits, social engagement, housework, shopping, and community access for older people.',
  keywords: ['companionship care Nottingham', 'domestic support Nottinghamshire', 'home help Nottingham', 'social care visits Nottinghamshire', 'help at home Nottingham'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/companionship-domestic-support`,
  },
}

export default function CompanionshipDomesticPage() {
  return (
    <ServicePageLayout
      title="Companionship & Domestic Support"
      subtitle="Warm, friendly visits that make a real difference — reducing isolation, keeping the home comfortable, and helping you stay connected to the things you enjoy."
      badge="Companionship & Home Help"
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: 'Companionship & Domestic Support', href: '/services/companionship-domestic-support' },
      ]}
      imageSrc="/images/family-peace-of-mind.png"
      imageAlt="An older person enjoying conversation and companionship at home"
      intro="Not all care is about personal hygiene or medical needs. Sometimes, the most valuable thing a carer can do is simply be there — to talk, to listen, to help with the shopping, or to accompany someone to a community activity they love. Loneliness and social isolation are serious issues for many older people and adults living at home, and our companionship service addresses this directly."
      whoIsItFor={{
        title: 'Who This Service Is For',
        items: [
          'Older people who live alone and would benefit from regular company',
          'Adults who have become socially isolated following illness, bereavement, or reduced mobility',
          'Those who need help with household tasks they find difficult to manage',
          'People who would like support with shopping, errands, or appointments',
          'Anyone who wants to remain active in their community but needs some assistance',
          'Families who would like to know their loved one has regular, friendly support',
        ],
      }}
      whatWeProvide={{
        title: 'Companionship & Domestic Support Includes',
        items: [
          'Friendly conversation and genuine social engagement',
          'Accompanying to social clubs, groups, and community activities',
          'Support with hobbies and interests — reading, puzzles, crafts, music',
          'Light housework — dusting, vacuuming, mopping',
          'Laundry, ironing, and linen changes',
          'Shopping — in-store with you or on your behalf',
          'Errand running — post office, pharmacy, appointments',
          'Meal preparation and keeping the kitchen tidy',
          'Help with correspondence and paperwork',
          'Accompanying to GP, hospital, or other appointments',
        ],
      }}
      benefits={{
        title: 'Why Companionship Care Matters',
        items: [
          {
            title: 'Combats Loneliness',
            description: 'Loneliness is a serious health concern — linked to depression, cognitive decline, and increased risk of serious illness. Regular, genuine companionship can significantly improve wellbeing.',
          },
          {
            title: 'Maintains Independence',
            description: 'With help managing daily tasks and staying connected to the community, people can remain independent and active for longer.',
          },
          {
            title: 'Family Peace of Mind',
            description: 'Knowing that a friendly, professional carer is visiting regularly gives families reassurance — and allows them to know their loved one is not isolated.',
          },
          {
            title: 'A Comfortable Home',
            description: 'Domestic support keeps the home clean, safe, and comfortable — which is essential for both physical health and mental wellbeing.',
          },
          {
            title: 'Early Warning',
            description: 'Regular carer visits often mean that changes in health or wellbeing are noticed early — before they become serious — because a familiar face knows what is normal.',
          },
          {
            title: 'Flexible and Light-Touch',
            description: 'This service can be as simple as one or two visits a week — and can easily be combined with personal care or other services as needs develop.',
          },
        ],
      }}
      whyDeltaEcho={[
        'We carefully match companionship carers to clients based on personality and shared interests.',
        'Our carers are genuine, warm, and interested in the people they visit.',
        'We understand that domestic support must respect your privacy and your space.',
        'Companionship visits can be easily scaled up or combined with personal care.',
        'We are CQC registered — giving you peace of mind even for lighter support services.',
        'We maintain clear communication with families about how visits are going.',
      ]}
      faqs={[
        {
          q: 'Can a companion carer also help with personal care?',
          a: 'Yes. Many clients begin with companionship and domestic support and then add personal care as their needs develop. Our carers are trained across multiple service areas and can provide both.',
        },
        {
          q: 'How often would the carer visit?',
          a: 'This is entirely up to you. Some clients have one or two visits a week; others prefer daily contact. We build the schedule around your preferences and your life.',
        },
        {
          q: 'Can the carer take me out to appointments or activities?',
          a: 'Yes. Accompanying clients to appointments, social clubs, community groups, or simply for a walk is very much part of what we offer. We believe in social engagement, not just time at home.',
        },
        {
          q: 'Is this service available for someone with dementia?',
          a: 'Absolutely. Companionship and gentle stimulation are particularly beneficial for people living with dementia. Our carers are trained to engage with people with memory difficulties in a positive, patient way.',
        },
      ]}
      relatedServices={[
        { name: 'Personal Care', href: '/services/personal-care', icon: User },
        { name: 'Dementia Care', href: '/services/dementia-care', icon: Brain },
        { name: 'Respite Care', href: '/services/respite-care', icon: RefreshCw },
        { name: 'Live-in Care', href: '/services/live-in-care', icon: Home },
      ]}
    />
  )
}
