import { clientBrands, systemProducts } from './portfolio'
import { javaCourse } from './courses'

// Home page structure borrowed from aihero.dev: announcement, hero proof row, visitor routes, logo wall.
// Every figure here must already be stated elsewhere on the site (timeline, systems, course page).
export type HeroStat = { value: string; label: string }
export type VisitorLinkKind = 'page' | 'system' | 'course' | 'video' | 'pdf' | 'demo'
export type VisitorLink = { kind: VisitorLinkKind; label: string; href: string }
export type VisitorRoute = { tag: string; question: string; more: { label: string; href: string }; links: VisitorLink[] }
export type ProofLogo = { name: string; logo: string; width: number; height: number }

export const announcement = {
  tag: 'Course',
  text: `${javaCourse.title} is live on ${javaCourse.platform.name}`,
  href: `/#${javaCourse.id}`
}

export const heroStats: HeroStat[] = [
  { value: '60+', label: 'Valuation & FP&A engagements' },
  { value: String(systemProducts.length), label: 'Systems & prototypes shown' },
  { value: javaCourse.facts.find(fact => fact.label === 'Lessons')!.value, label: 'Java lessons published' }
]

export const resumeHref = '/files/CV/Boris_Solomonia_Resume_28102026.pdf'

export const visitorRoutes: VisitorRoute[] = [
  {
    tag: 'Hiring',
    question: 'Do you need someone who owns both the numbers and the system?',
    more: { label: 'More on my experience', href: '/work' },
    links: [
      { kind: 'page', label: 'Career timeline, 2010 to today', href: '/work' },
      { kind: 'pdf', label: 'Résumé', href: resumeHref },
      { kind: 'page', label: 'Discuss a role', href: '/contact' }
    ]
  },
  {
    tag: 'Automate finance',
    question: 'Can my finance work run with less copying and fewer surprises?',
    more: { label: 'See all systems', href: '/projects' },
    links: [
      { kind: 'system', label: '9T ERP: from a statement line to its source postings', href: '/#nine-t-erp' },
      { kind: 'system', label: 'Optimo: marketplace sync with a clear trail', href: '/#optimo' },
      { kind: 'demo', label: 'The connected control system', href: '/boris-control-system' }
    ]
  },
  {
    tag: 'Learn Java',
    question: 'Where do I start if I want to learn Java?',
    more: { label: 'More on the course', href: `/#${javaCourse.id}` },
    links: [
      { kind: 'course', label: javaCourse.title, href: `/#${javaCourse.id}` },
      { kind: 'video', label: 'Lesson 00: Welcome', href: javaCourse.startUrl },
      { kind: 'course', label: `Full syllabus: ${javaCourse.facts.map(fact => `${fact.value} ${fact.label.toLowerCase()}`).slice(0, 2).join(', ')}`, href: javaCourse.url }
    ]
  }
]

export const proofLogos: ProofLogo[] = [
  { name: '9 Tones Distribution', logo: '/images/9t.png', width: 1024, height: 1024 },
  { name: 'Girchi', logo: '/images/girchi.jpg', width: 900, height: 900 },
  { name: 'EPAM Systems', logo: '/images/epam-1.png', width: 1200, height: 300 },
  { name: 'JSC Savvy', logo: '/images/savvy.png', width: 694, height: 246 },
  { name: 'Rural Development Agency', logo: '/images/RDA-Logo.png', width: 1689, height: 718 },
  { name: 'Ilia State University', logo: '/images/ilia.png', width: 447, height: 447 },
  ...clientBrands.map(client => ({ name: client.name, logo: client.logo, width: client.width, height: client.height }))
]
