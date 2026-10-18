import { Link } from '../routing'
import IntegrationBadge from '../components/IntegrationBadge'
import ClientsSection from '../components/ClientsSection'
import { systemModules, systemProducts } from '../data/portfolio'

const architectureFlows: Record<string, string[]> = {
  'waybill-mcp': ['AI client', 'MCP tools', 'SOAP adapter', 'RS.ge waybills'],
  'ai-booking': ['Telegram screenshot', 'Vision extraction', 'Google Sheets', 'Document output']
}

const ProductVisual = ({ product }: { product: (typeof systemProducts)[number] }) => {
  if (product.id === 'order-app') return <div className="product-card__visual order-workflow"><span className="exhibit-eyebrow">Order App / workflow overview</span><div><span>01</span>Choose customer & location</div><div><span>02</span>Assemble the order</div><div><span>03</span>Inspect send status & export</div><p>A structured ordering workflow. This overview is not a connected demo.</p></div>
  if (product.visualType === 'architecture') {
    const nodes = architectureFlows[product.id] ?? ['Input', 'Control layer', 'Verified output']
    return <figure className="architecture-visual" aria-label={`${product.name} architecture visual`}><figcaption>{product.name} architecture visual / no browser dashboard</figcaption><div>{nodes.map((node, index) => <span className="architecture-step" key={node}>{node}{index < nodes.length - 1 && <i aria-hidden="true">{String.fromCharCode(8594)}</i>}</span>)}</div>{product.id === 'waybill-mcp' && <div className="architecture-visual__integration"><IntegrationBadge id="rsge" compact /></div>}<p>{product.id === 'waybill-mcp' ? 'Validated requests / explicit tool boundaries / traceable responses' : 'Screenshot intake / structured booking / document generation'}</p></figure>
  }
  if (!product.asset) return null
  return <figure className="product-card__visual"><div className="product-card__bar"><span>{product.name} project screen</span><span>{product.id === 'bachmann' ? 'Design prototype · fabricated figures' : product.id === 'nine-t-erp' ? 'Secure sign-in · no financial data' : 'Synthetic or non-sensitive data'}</span></div><img src={product.asset.src} alt={product.asset.alt} width={product.asset.width} height={product.asset.height} loading="lazy" decoding="async" data-project-screen={product.id} /></figure>
}

const ProjectsPage = () => (
  <div className="systems-page systems-page--enhanced">
    <header className="systems-hero sales-shell"><p className="data-label">My Systems / selected work & supporting projects</p><h1>My systems. Financial clarity, connected operations, a sense of place.</h1><p>Start with three interactive examples, then explore the wider systems behind my finance and engineering work.</p><div className="systems-hero__legend"><span><i className="domain-dot domain-dot--operations" />Operations</span><span><i className="domain-dot domain-dot--control" />Control</span><span><i className="domain-dot domain-dot--finance" />Finance</span><span><i className="domain-dot domain-dot--intelligence" />Intelligence</span></div></header>

    <div className="sales-shell"><nav className="selected-project-index" aria-label="Explore featured project demonstrations"><Link to="/#nine-t-erp"><span className="exhibit-eyebrow">Financial intelligence</span><strong>9T ERP</strong><p>Follow a figure from statement to source and a review decision.</p><span>Explore the example ↗</span></Link><Link to="/#optimo"><span className="exhibit-eyebrow">Operational automation</span><strong>Optimo</strong><p>Preview a stock update and investigate what reaches each destination.</p><span>Try the sync example ↗</span></Link><Link to="/#brooks"><span className="exhibit-eyebrow">Place & memory</span><strong>Brooks</strong><p>A memory from someone important, waiting at a meaningful place.</p><span>Open the invitation ↗</span></Link></nav><details className="systems-architecture"><summary>Explore the financial architecture · nine business domains</summary><div><div className="erp-map"><div className="erp-map__core"><span>CONTROL CORE</span><strong>Validate / map / reconcile</strong><p>One traceable operating model</p></div>{systemModules.map((module, index) => <article key={module.id} className={`erp-module erp-module--${module.domain}`} data-module-id={module.id}><span>{String(index + 1).padStart(2,'0')}</span><h3>{module.title}</h3><p>{module.description}</p></article>)}</div></div></details></div>

    <section className="product-section sales-shell" aria-labelledby="products-title"><div className="section-heading section-heading--split"><div><p className="data-label">My product ecosystem</p><h2 id="products-title">The systems behind the work.</h2></div><p>Financial applications, integration services, and guided workflows. Examples, screenshots, and architecture views are labeled for what they show.</p></div><div className="product-grid">{systemProducts.map((product, index) => <article className="product-card" key={product.id} data-product-id={product.id}><div className="product-card__copy"><div className="product-card__number"><span>{String(index + 1).padStart(2,'0')}</span><span>{product.category}</span></div><h3>{product.name}</h3><p>{product.summary}</p>{product.integrations.length > 0 && <div className="product-card__brands" aria-label={`${product.name} integrations`}>{product.integrations.map((id) => <IntegrationBadge id={id} compact key={id} />)}</div>}<ul>{product.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>{(product.id === 'nine-t-erp' || product.id === 'optimo-sync') && <Link className="inline-link" to={product.id === 'nine-t-erp' ? '/#nine-t-erp' : '/#optimo'}>Try the interactive example ↗</Link>}</div><ProductVisual product={product} /></article>)}</div></section>

    <ClientsSection />

    <section className="systems-cta sales-shell"><div><p className="data-label">The next system</p><h2>Building systems with financial judgment.</h2></div><Link className="button-primary" to="/contact">Discuss a role</Link></section>
  </div>
)

export default ProjectsPage
