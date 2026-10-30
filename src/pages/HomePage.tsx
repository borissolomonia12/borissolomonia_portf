import { useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Link } from '../routing'
import NetworkBackground from '../components/NetworkBackground'
import IntegrationBadge from '../components/IntegrationBadge'
import TechnologyStack from '../components/TechnologyStack'
import FeaturedSystems from '../components/FeaturedSystems'
import ProjectScreens from '../components/ProjectScreens'
import FinanceFlow from '../components/FinanceFlow'
import TeachingCourse from '../components/TeachingCourse'
import VisitorRoutes from '../components/VisitorRoutes'
import ProofLogos from '../components/ProofLogos'
import { announcement, heroStats, resumeHref } from '../data/homeHighlights'
import { type IntegrationBrandId } from '../data/portfolio'

const capabilities = [
  { title: 'Financial judgment', description: 'Define the number, its assumptions, and the decision it needs to support.' },
  { title: 'Full-stack systems', description: 'Connect the domain model, application, data, and the interface people use.' },
  { title: 'Operational automation', description: 'Remove repetitive copying and make exceptions visible when judgment is needed.' }
]

const HomePage = () => {
  const [motionPaused, setMotionPaused] = useState(false)
  const reducedMotion = useReducedMotion()
  const staticMotion = motionPaused || Boolean(reducedMotion)

  return <div className="sales-page portfolio-home">
    <NetworkBackground paused={motionPaused} />
    <section className="sales-hero" aria-labelledby="sales-hero-title"><div className="sales-shell">
      <div className="hero-utility"><span>Tbilisi / Remote</span><Link className="hero-announcement" to={announcement.href}><span className="hero-announcement__tag">{announcement.tag}</span><span>{announcement.text}</span><span aria-hidden="true">→</span></Link><button type="button" className="motion-control" aria-pressed={staticMotion} disabled={Boolean(reducedMotion)} onClick={() => setMotionPaused(value => !value)}><span aria-hidden="true">{staticMotion ? '▷' : 'Ⅱ'}</span>{reducedMotion ? 'Reduced motion' : motionPaused ? 'Resume motion' : 'Pause motion'}</button></div>
      <div className="sales-hero__intro">
        <div className="sales-hero__copy"><p className="data-label">Financial manager & full-stack engineer</p><h1 id="sales-hero-title">I turn financial complexity into <span>working systems.</span></h1><p className="sales-hero__lead">I automate financial analysis and operations, and build products that connect people to places.</p><div className="sales-hero__actions"><a className="button-primary" href="#nine-t-erp">Explore 9T ERP <span aria-hidden="true">↗</span></a><Link className="button-secondary" to="/contact">Discuss a role</Link></div><nav className="hero-project-links" aria-label="Selected project shortcuts"><a href="#nine-t-erp">9T ERP</a><span aria-hidden="true">/</span><a href="#optimo">Optimo</a><span aria-hidden="true">/</span><a href="#brooks">Brooks</a><span aria-hidden="true">/</span><a href="#bachmann">Bachmann</a></nav><dl className="hero-stats">{heroStats.map(stat => <div key={stat.label} data-hero-stat={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl></div>
        <aside className="hero-evidence" aria-label="A first look at my work"><ProjectScreens /><div className="authority-card" aria-label="About Boris Solomonia"><img src="/images/profile-photo.jpg" alt="Boris Solomonia, financial manager and full-stack engineer" width="768" height="877" loading="eager" decoding="async" /><div><span>Designed and built by</span><strong>Boris Solomonia</strong><p>Finance judgment. Engineering ownership.</p></div></div></aside>
      </div>
    </div></section>
    <section className="integration-strip" aria-label="Integration experience"><div className="sales-shell"><p>Systems I work across</p><div>{(['rsge', 'bog', 'tbc', 'wolt', 'glovo'] as IntegrationBrandId[]).map(id => <IntegrationBadge id={id} key={id} />)}</div></div></section>
    <section className="implementation-network sales-shell" id="implementation-network" aria-labelledby="implementation-network-title"><div className="section-heading section-heading--split"><div><p className="data-label">The connections are the work</p><h2 id="implementation-network-title">Not isolated screens.<br />Connected systems.</h2></div><p>Accounting, tax, banks and delivery platforms. I build the connections that turn separate records into something people can use.</p></div><FinanceFlow motionPaused={staticMotion} /></section>
    <VisitorRoutes />
    <FeaturedSystems />
    <TeachingCourse />
    <ProofLogos />
    <section className="builder-note sales-shell" aria-labelledby="builder-note-title"><div><p className="data-label">Why I build</p><h2 id="builder-note-title">Less repetitive work.<br />More room for meaning.</h2></div><div><p>Financial systems should take repetitive analysis and operations out of people’s way. The interesting work is understanding the problem, making uncertainty visible, and building a system that helps someone act.</p><p>Brooks comes from another part of the same curiosity: how software can deepen our connection to a place and to someone important.</p><Link className="inline-link" to="/work">Explore my experience ↗</Link></div></section>
    <section className="skills-section" aria-labelledby="skills-title"><div className="sales-shell"><div className="section-heading"><p className="data-label">Behind the work</p><h2 id="skills-title">Understand the problem.<br />Own the system.</h2></div><div className="skills-grid">{capabilities.map(skill => <article key={skill.title} className="skill-card"><h3>{skill.title}</h3><p>{skill.description}</p></article>)}</div></div></section>
    <TechnologyStack />
    <section className="sales-cta" aria-labelledby="cta-title"><div className="sales-shell sales-cta__inner"><div><p className="data-label">The next system</p><h2 id="cta-title">Let’s build something worth understanding.</h2></div><div><p>I’m interested in roles that bring together business judgment and hands-on engineering.</p><div className="demo-actions"><Link className="button-primary" to="/contact">Discuss a role</Link><a className="inline-link" href={resumeHref} target="_blank" rel="noreferrer">View résumé ↗</a></div></div></div></section>
  </div>
}

export default HomePage
