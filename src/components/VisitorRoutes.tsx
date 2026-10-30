import { type ReactNode } from 'react'
import { Link } from '../routing'
import { visitorRoutes, type VisitorLink } from '../data/homeHighlights'

const isExternal = (link: Pick<VisitorLink, 'href' | 'kind'>) => link.href.startsWith('http') || link.kind === 'pdf'

const RouteLink = ({ link, className, children }: { link: Pick<VisitorLink, 'href' | 'kind'>; className: string; children: ReactNode }) => isExternal(link)
  ? <a className={className} href={link.href} target="_blank" rel="noreferrer">{children}</a>
  : <Link className={className} to={link.href}>{children}</Link>

const VisitorRoutes = () => (
  <section className="visitor-routes sales-shell" id="start-here" aria-labelledby="visitor-routes-title">
    <div className="section-heading section-heading--split"><div><p className="data-label">Start here</p><h2 id="visitor-routes-title">What brings you here?</h2></div><p>Pick the question closest to yours. Each one leads to the work that answers it.</p></div>
    <ol className="visitor-routes__list">
      {visitorRoutes.map(route => <li key={route.tag} data-visitor-route={route.tag}>
        <div className="visitor-routes__question"><span className="visitor-routes__tag">{route.tag}</span><h3>{route.question}</h3><RouteLink className="inline-link" link={{ href: route.more.href, kind: 'page' }}>{route.more.label} <span aria-hidden="true">→</span></RouteLink></div>
        <ul>{route.links.map(link => <li key={link.label}><RouteLink className="visitor-routes__link" link={link}><span className="visitor-routes__kind">{link.kind}</span><span>{link.label}</span><span aria-hidden="true">{isExternal(link) ? '↗' : '→'}</span></RouteLink></li>)}</ul>
      </li>)}
    </ol>
  </section>
)

export default VisitorRoutes
