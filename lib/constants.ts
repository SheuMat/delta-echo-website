export const SITE_CONFIG = {
  name: 'DeltaEcho Care Ltd',
  shortName: 'DeltaEcho Care',
  tagline: 'Compassionate Home Care Across Nottinghamshire & Derbyshire',
  description:
    'DeltaEcho Care Ltd provides reliable, CQC-registered domiciliary and live-in care across Nottinghamshire, Derbyshire, and surrounding towns. Person-centred support for older people and adults with care needs.',
  phone1: '07883 024345',
  phone2: '07782 500126',
  email: 'info@deltaechocare.co.uk',
  address: {
    street: '28 Field Farm Way',
    area: 'Stapleford',
    city: 'Nottingham',
    postcode: 'NG9 8JP',
    full: '28 Field Farm Way, Stapleford, Nottingham, NG9 8JP',
  },
  manager: 'Chiromo Makina',
  url: 'https://deltaechocare.co.uk',
  openingHours: {
    weekdays: 'Monday – Friday: 8:00am – 6:00pm',
    saturday: 'Saturday: 9:00am – 5:00pm',
    sunday: 'Sunday: On-call support available',
    note: 'Care visits are available 7 days a week, including bank holidays.',
  },
} as const

export const NAV_SERVICES = [
  {
    name: 'Personal Care',
    href: '/services/personal-care',
    description: 'Dignified support with daily personal hygiene and routines.',
  },
  {
    name: 'Live-in Care',
    href: '/services/live-in-care',
    description: 'Round-the-clock support in the comfort of home.',
  },
  {
    name: 'Dementia Care',
    href: '/services/dementia-care',
    description: 'Specialist support for those living with dementia.',
  },
  {
    name: 'Respite Care',
    href: '/services/respite-care',
    description: 'A well-earned break for family carers.',
  },
  {
    name: 'End-of-Life Care',
    href: '/services/end-of-life-care',
    description: 'Compassionate support during life\'s final chapter.',
  },
  {
    name: 'Hospital Discharge Support',
    href: '/services/hospital-discharge-support',
    description: 'Safe, supported return home after hospital.',
  },
  {
    name: 'Companionship & Domestic Support',
    href: '/services/companionship-domestic-support',
    description: 'Friendly support, social engagement and home help.',
  },
]

export const ALL_SERVICES = [
  'Personal care',
  'Medication support',
  'Meal preparation',
  'Domestic support',
  'Companionship',
  'Community access',
  'Respite support',
  'Live-in care',
  'End-of-life care',
  'Dementia care',
  'Physical disability support',
  'Hospital discharge support',
  'Overnight care',
  '24-hour care',
]

export const AREAS = [
  'Derby city',
  'Ilkeston',
  'Belper',
  'Ripley',
  'Alfreton',
  'Kirkby in Ashfield',
  'Sutton in Ashfield',
  'Long Eaton',
  'Heanor',
  'Borrowash',
  'Draycott',
  'Nottingham',
  'Hucknall',
  'Beeston',
  'West Bridgford',
  'Clifton',
  'Gedling',
  'Arnold',
  'Wollaton',
  'Broxtowe',
  'Rushcliffe',
  'Kimberley',
  'Eastwood',
]

export const TRUST_ITEMS = [
  { label: 'CQC Registered', icon: 'shield' },
  { label: 'Personalised Care Plans', icon: 'clipboard' },
  { label: 'Local Care Team', icon: 'map-pin' },
  { label: 'Flexible Visiting & Live-in Care', icon: 'clock' },
  { label: 'Adults 18+ & Older People', icon: 'heart' },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Initial Enquiry',
    description:
      'Call us or complete our online form. We\'ll listen carefully and answer your questions without any pressure.',
  },
  {
    number: '02',
    title: 'Free Care Discussion',
    description:
      'We\'ll arrange a free, no-obligation conversation to understand your situation and what support might look like.',
  },
  {
    number: '03',
    title: 'Care Assessment',
    description:
      'Our registered manager visits you at home to carry out a thorough, person-centred care assessment.',
  },
  {
    number: '04',
    title: 'Personalised Care Plan',
    description:
      'We create a detailed care plan tailored specifically to your needs, preferences, and daily routines.',
  },
  {
    number: '05',
    title: 'Care Begins',
    description:
      'Your matched carer begins visits. We introduce them beforehand so you feel comfortable from day one.',
  },
  {
    number: '06',
    title: 'Ongoing Reviews',
    description:
      'We review your care plan regularly and stay in close contact with you and your family to ensure everything is right.',
  },
]

export const FAQS_GENERAL = [
  {
    q: 'How do I arrange care for myself or a loved one?',
    a: 'Simply call us on 07883 024345 or complete our online enquiry form. We\'ll arrange a free, no-obligation chat to understand your needs, followed by a home care assessment. There\'s no pressure — we\'re here to help you explore your options.',
  },
  {
    q: 'Are your carers DBS checked and trained?',
    a: 'Yes. Every member of our care team holds an enhanced DBS (Disclosure and Barring Service) check and receives thorough induction training. We also provide ongoing training, including specialist dementia and medication training.',
  },
  {
    q: 'Can I choose the times of my care visits?',
    a: 'Absolutely. We work around your existing routine and preferences. Whether you need early morning support, evening visits, or specific times throughout the day, we\'ll do our best to accommodate you.',
  },
  {
    q: 'What happens if my needs change over time?',
    a: 'We regularly review care plans and can increase, reduce, or change the type of support you receive as your needs evolve. You\'re never locked into a rigid package.',
  },
  {
    q: 'Is DeltaEcho Care registered with the CQC?',
    a: 'Yes. DeltaEcho Care Ltd is registered with the Care Quality Commission (CQC), the independent regulator of health and social care in England. Our registration means we meet national standards of quality and safety.',
  },
  {
    q: 'How much does home care cost?',
    a: 'Costs vary depending on the type and amount of care needed. We provide transparent pricing with no hidden fees. Contact us for a personalised quote — we\'ll always be upfront about costs before anything begins.',
  },
  {
    q: 'Can I meet the carer before care starts?',
    a: 'Yes. We always introduce your carer before visits begin, so you and your family can feel comfortable and confident. Continuity of carer is very important to us.',
  },
  {
    q: 'Do you provide emergency or short-notice care?',
    a: 'We will always do our best to assist in urgent situations, including hospital discharge and short-notice requests. Please call us directly on 07883 024345 to discuss your situation.',
  },
]
