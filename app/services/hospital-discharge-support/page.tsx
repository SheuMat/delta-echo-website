import type { Metadata } from 'next'
import { User, Home, RefreshCw, HeartPulse } from 'lucide-react'
import ServicePageLayout from '@/components/ui/ServicePageLayout'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Hospital Discharge Support | Care at Home Nottinghamshire',
  description:
    'Hospital discharge support from DeltaEcho Care in Nottinghamshire. Safe, fast home care set up after hospital — preventing readmission and supporting recovery at home.',
  keywords: ['hospital discharge support Nottinghamshire', 'hospital discharge care Nottingham', 'care after hospital Nottingham', 'reablement care Nottinghamshire'],
  alternates: {
    canonical: `${SITE_CONFIG.url}/services/hospital-discharge-support`,
  },
}

export default function HospitalDischargePage() {
  return (
    <ServicePageLayout
      title="Hospital Discharge Support"
      subtitle="Safe, well-supported return home after hospital — with care in place from day one to aid recovery, restore confidence, and prevent readmission."
      badge="Hospital Discharge"
      breadcrumbs={[
        { name: 'Services', href: '/services' },
        { name: 'Hospital Discharge Support', href: '/services/hospital-discharge-support' },
      ]}
      imageSrc="/images/daily-care-support.png"
      imageAlt="A caregiver helping someone settle safely back into daily life at home"
      intro="Returning home after a hospital stay can be daunting — particularly if you have been there for some time, experienced a major health event, or are returning to a home environment that now feels less manageable. DeltaEcho Care provides prompt, professional care from the moment you arrive home — helping you to recover safely, rebuild confidence, and avoid the risk of readmission."
      whoIsItFor={{
        title: 'Who This Service Is For',
        items: [
          'People being discharged from hospital who need immediate care at home',
          'Those recovering from stroke, falls, fractures, or surgery',
          'People who live alone and whose families have concerns about their safe return home',
          'Individuals who need a short-term recovery package while they regain strength',
          'Those who may need ongoing care assessment once they are home',
          'Families who have been notified of an imminent discharge and need to arrange support quickly',
        ],
      }}
      whatWeProvide={{
        title: 'Hospital Discharge Support Includes',
        items: [
          'Personal care — washing, dressing, hygiene',
          'Medication support — collecting prescriptions, prompts, and administration',
          'Meal preparation and monitoring of nutrition and hydration',
          'Mobility support and assistance with moving around the home safely',
          'Wound care observation and liaison with district nurses',
          'Shopping and essential errands',
          'Domestic tasks — ensuring the home is clean, safe, and comfortable',
          'Accompanying to follow-up appointments',
          'Monitoring recovery progress and reporting concerns',
          'Reassuring, confidence-building companionship during recovery',
        ],
      }}
      benefits={{
        title: 'Benefits of Supported Hospital Discharge',
        items: [
          {
            title: 'Prevent Readmission',
            description: 'Many hospital readmissions are preventable. Professional care in the first days and weeks at home — monitoring medication, nutrition, and health — significantly reduces risk.',
          },
          {
            title: 'Recover at Home',
            description: 'People consistently recover faster and more fully in their own home environment, surrounded by familiar people and places, than in a clinical setting.',
          },
          {
            title: 'Fast Setup',
            description: 'We understand that hospital discharges can happen quickly. We can often have care in place within 24 hours of you contacting us.',
          },
          {
            title: 'Family Reassurance',
            description: "If you can't be there, knowing a professional carer is visiting regularly to monitor and support your loved one provides enormous peace of mind.",
          },
          {
            title: 'Flexible Duration',
            description: 'Hospital discharge support can be short-term — just a few weeks while you recover — or it can transition into longer-term ongoing care if needed.',
          },
          {
            title: 'Joined-Up Care',
            description: 'We communicate with your GP, district nurses, and any other community health services involved — ensuring nothing falls through the gaps.',
          },
        ],
      }}
      whyDeltaEcho={[
        'We can arrange care very quickly — often within 24 hours for urgent discharges.',
        'We are experienced in working with hospital discharge teams and NHS colleagues.',
        'We carry out a thorough initial assessment to ensure the right level of support from day one.',
        'We monitor recovery and alert families or healthcare teams if we have any concerns.',
        'We are CQC registered, giving hospitals and families confidence in our quality and safety.',
        'We can seamlessly transition from discharge support to longer-term care if needed.',
      ]}
      faqs={[
        {
          q: 'How quickly can you start care after hospital discharge?',
          a: 'We aim to have care in place within 24 hours for urgent situations. Please call us directly on 07883 024345 as soon as you know discharge is planned — even if the date is not yet confirmed.',
        },
        {
          q: 'Can you liaise directly with the hospital discharge team?',
          a: 'Yes. We are happy to speak directly with hospital social workers, discharge coordinators, and ward staff to ensure care is in place at the right time.',
        },
        {
          q: 'What happens if my needs are greater than expected?',
          a: 'We reassess regularly. If your needs are more complex than anticipated, we will adjust the care plan and level of support accordingly — and communicate this with you and your family.',
        },
        {
          q: 'Is hospital discharge support available for people who live alone?',
          a: 'Yes — in fact, this is one of the most important situations we support. People who live alone are at the highest risk after hospital discharge, and appropriate care can make a life-changing difference.',
        },
      ]}
      relatedServices={[
        { name: 'Personal Care', href: '/services/personal-care', icon: User },
        { name: 'Live-in Care', href: '/services/live-in-care', icon: Home },
        { name: 'Respite Care', href: '/services/respite-care', icon: RefreshCw },
        { name: 'End-of-Life Care', href: '/services/end-of-life-care', icon: HeartPulse },
      ]}
    />
  )
}
