import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import IntegrationBadge from './IntegrationBadge'
import { connectionStages, requirePortfolioAsset } from '../data/portfolio'
import { Link } from '../routing'

const controlAsset = requirePortfolioAsset('rsge-banks')
const getReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const services = [
  'Create and maintain financial ERP systems',
  'Integrate Banks in existing or new ERP systems',
  'Integrate RS.ge in existing or new ERP systems',
  'Integrate Wolt and Glovo in existing or new ERP systems',
  'Turn connected data into decision-ready analysis'
]
export const flowConnections = [
  ['client-system', 'control-system'],
  ['control-system', 'rsge'], ['control-system', 'banks'], ['control-system', 'delivery'],
  ['rsge', 'financial-analysis'], ['banks', 'financial-analysis'],
  ['banks', 'big-data-analysis'], ['delivery', 'big-data-analysis']
]

const FinanceFlow = ({ motionPaused = false }: { motionPaused?: boolean }) => {
  const id = useId()
  const map = useRef<HTMLDivElement>(null)
  const [paths, setPaths] = useState<string[]>([])
  const [size, setSize] = useState({ width: 1000, height: 500 })
  const [reducedMotion, setReducedMotion] = useState(getReducedMotion)
  const [isVisible, setIsVisible] = useState(() => typeof document === 'undefined' || document.visibilityState === 'visible')

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => setReducedMotion(media.matches)
    const updateVisibility = () => setIsVisible(document.visibilityState === 'visible')
    media.addEventListener('change', updateMotion)
    document.addEventListener('visibilitychange', updateVisibility)
    return () => { media.removeEventListener('change', updateMotion); document.removeEventListener('visibilitychange', updateVisibility) }
  }, [])

  useLayoutEffect(() => {
    const element = map.current
    if (!element) return
    const measure = () => {
      const bounds = element.getBoundingClientRect()
      if (!bounds.width || !bounds.height) return
      setSize({ width: bounds.width, height: bounds.height })
      setPaths(flowConnections.map(([from, to]) => {
        const start = element.querySelector<HTMLElement>('[data-flow-stage="' + from + '"]')?.getBoundingClientRect()
        const end = element.querySelector<HTMLElement>('[data-flow-stage="' + to + '"]')?.getBoundingClientRect()
        if (!start || !end) return ''
        const x1 = start.right - bounds.left
        const y1 = start.top + start.height / 2 - bounds.top
        const x2 = end.left - bounds.left
        const y2 = end.top + end.height / 2 - bounds.top
        const mid = (x1 + x2) / 2
        return 'M' + x1 + ',' + y1 + ' C' + mid + ',' + y1 + ' ' + mid + ',' + y2 + ' ' + x2 + ',' + y2
      }))
    }
    measure()
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(measure)
    observer?.observe(element)
    element.querySelectorAll('[data-flow-stage]').forEach(node => observer?.observe(node))
    window.addEventListener('resize', measure)
    return () => { observer?.disconnect(); window.removeEventListener('resize', measure) }
  }, [])

  return <figure className="finance-flow finance-flow--network" aria-labelledby={id + '-title'} data-reduced-motion={reducedMotion ? 'true' : 'false'} data-paused={!isVisible || motionPaused ? 'true' : 'false'}>
    <figcaption id={id + '-title'} className="finance-flow__header"><span>The implementation network</span><strong>Records → connections → decisions</strong></figcaption>
    <aside className="finance-flow__services" aria-labelledby={id + '-services'}><div><span>What I do</span><h3 id={id + '-services'}>Finance systems, connected end to end.</h3></div><ul>{services.map(service => <li key={service}>{service}</li>)}</ul></aside>
    <p className="network-pan-hint" id={id + '-hint'}>Swipe or scroll horizontally to follow every connection.</p>
    <div className="finance-flow__viewport" tabIndex={0} role="region" aria-label="Interconnected finance implementations" aria-describedby={id + '-hint'}>
      <div className="finance-flow__map" ref={map}>
        <div className="flow-column-labels" aria-hidden="true"><span>Operational sources</span><span>My implementations</span><span>Connected platforms</span><span>Decision layers</span></div>
        <svg className="finance-flow__lines" viewBox={'0 0 ' + size.width + ' ' + size.height} aria-hidden="true"><defs><marker id={id + '-arrow'} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" className="flow-arrow" /></marker></defs>{flowConnections.map(([from, to], index) => <path key={from + to} data-flow-connection={from + ':' + to} className="flow-connection" pathLength="1" d={paths[index] || ''} markerEnd={'url(#' + id + '-arrow)'} />)}</svg>
        {connectionStages.map(stage => {
          const content = <><span className="flow-node__step">{stage.kind === 'source' ? 'Source records' : stage.kind === 'control' ? 'Finance & operations' : stage.kind === 'external' ? 'Integration' : 'Analysis'}</span>{stage.id === 'control-system' && <><div className="flow-project-tags"><span>9T ERP</span><span>Tasty ERP</span><span>Optimo</span><span>Camora</span></div><img className="flow-node__capture" src={controlAsset.src} alt="Camora ERP purchase reconciliation interface" width={controlAsset.width} height={controlAsset.height} loading="lazy" decoding="async" /></>}{stage.brands && <div className="flow-node__brands">{stage.brands.map(brand => <IntegrationBadge id={brand} compact key={brand} />)}</div>}<strong>{stage.label}</strong><span>{stage.detail}</span>{stage.id === 'control-system' && <small>Explore separate synthetic analytics ↗</small>}</>
          const className = 'flow-node flow-node--' + stage.kind + ' flow-node--' + stage.id
          return stage.id === 'control-system' ? <Link key={stage.id} to="/boris-control-system" className={className} data-flow-stage={stage.id} aria-label="Open Boris Control System ERP analytics showcase">{content}</Link> : <div key={stage.id} className={className} data-flow-stage={stage.id}>{content}</div>
        })}
      </div>
    </div>
    <p className="exhibit-caption flow-map-caption">A map of capabilities across my implementations, not a claim that every project shares one deployment. The linked analytics model is synthetic and separate from 9T. Bachmann’s cost and labour analysis is a design study, shown below.</p>
  </figure>
}

export default FinanceFlow
