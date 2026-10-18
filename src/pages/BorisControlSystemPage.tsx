import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import IntegrationBadge from '../components/IntegrationBadge'
import { Link } from '../routing'
import {
  cashSeries,
  customerProfit,
  demoCustomers,
  demoEmployees,
  demoExpenses,
  demoProducts,
  demoSuppliers,
  employeeCost,
  employeeRoi,
  executiveMetrics,
  formatGel,
  formatPercent,
  scaleMoney,
  scopedCustomers,
  scopedEmployees,
  supplierScore,
  type BranchId,
  type PeriodId,
  type Scope
} from '../data/controlSystem'

type Selection = { kind: 'employee' | 'customer' | 'supplier' | 'product'; id: string }

const sections = [
  ['overview', 'Overview'],
  ['employees', 'Employees'],
  ['customers', 'Customers'],
  ['suppliers', 'Suppliers & products'],
  ['cash', 'Cash & payments'],
  ['expenses', 'Expenses']
] as const

const MetricCard = ({ label, value, note, tone = 'neutral' }: { label: string; value: string; note: string; tone?: 'positive' | 'attention' | 'neutral' }) => (
  <article className={`control-metric control-metric--${tone}`}>
    <span>{label}</span>
    <strong>{value}</strong>
    <p>{note}</p>
  </article>
)


const TrendLine = ({ values, label }: { values: number[]; label: string }) => {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const points = values.map((value, index) => `${index * (100 / (values.length - 1))},${44 - ((value - min) / range) * 38}`).join(' ')
  return (
    <svg className="trend-line" viewBox="0 0 100 48" role="img" aria-label={`${label}: ${values.join(', ')}`} preserveAspectRatio="none">
      <line x1="0" y1="44" x2="100" y2="44" />
      <polyline points={points} />
    </svg>
  )
}

const Panel = ({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro: string; children: ReactNode }) => (
  <section className="control-section control-shell" id={id} aria-labelledby={`${id}-title`}>
    <header className="control-section__heading">
      <div><p className="data-label">{eyebrow}</p><h2 id={`${id}-title`}>{title}</h2></div>
      <p>{intro}</p>
    </header>
    {children}
  </section>
)

const DetailDrawer = ({ selection, onClose }: { selection: Selection; onClose: () => void }) => {
  const closeRef = useRef<HTMLButtonElement>(null)
  const employee = demoEmployees.find((item) => selection.kind === 'employee' && item.id === selection.id)
  const customer = demoCustomers.find((item) => selection.kind === 'customer' && item.id === selection.id)
  const supplier = demoSuppliers.find((item) => selection.kind === 'supplier' && item.id === selection.id)
  const product = demoProducts.find((item) => selection.kind === 'product' && item.id === selection.id)
  const entity = employee ?? customer ?? supplier ?? product

  useEffect(() => {
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        event.preventDefault()
        closeRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      previousFocus?.focus()
    }
  }, [onClose])

  if (!entity) return null

  return (
    <div className="control-drawer-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <aside className="control-drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <div className="control-drawer__header"><div><p className="data-label">Connected record / {selection.kind}</p><h2 id="drawer-title">{entity.name}</h2></div><button ref={closeRef} type="button" onClick={onClose} aria-label="Close record details">Close</button></div>
        {employee && <><p>{employee.role} · {employee.branch === 'tbilisi' ? 'Tbilisi' : 'Batumi'} branch</p><div className="drawer-metrics"><MetricCard label="Gross profit" value={formatGel(employee.grossProfit)} note={`${formatPercent(employee.grossProfit / employee.revenue)} margin`} /><MetricCard label="Employee ROI" value={`${employeeRoi(employee).toFixed(1)}×`} note={`${formatGel(employeeCost(employee))} total employee cost`} /><MetricCard label="Collection rate" value={formatPercent(employee.collected / employee.revenue)} note={`${formatGel(employee.overdue)} overdue`} /></div><h3>Career progression</h3><p>{employee.level} → {employee.nextLevel}. Progress is based on margin, collection discipline, retention, data quality, and team contribution.</p><div className="career-progress"><i style={{ width: `${employee.progress}%` }} /><span>{employee.progress}% toward next level</span></div></>}
        {customer && <><p>{customer.segment} · managed by {demoEmployees.find((item) => item.id === customer.employeeId)?.name}</p><div className="drawer-metrics"><MetricCard label="Contribution" value={formatGel(customerProfit(customer))} note="Gross profit less logistics and service cost" /><MetricCard label="Average order" value={formatGel(customer.revenue / customer.orders)} note={`${customer.orders} orders in the base period`} /><MetricCard label="Credit used" value={formatPercent(customer.receivables / customer.creditLimit)} note={`${customer.averageDaysToPay} average days to pay`} /></div></>}
        {supplier && <><p>Master supplier record grouping {supplier.aliases.length} accounting and purchasing aliases.</p><div className="drawer-metrics"><MetricCard label="Supplier score" value={`${supplierScore(supplier)}/100`} note="Price, reliability, quality, and terms" /><MetricCard label="Margin enabled" value={formatGel(supplier.marginGenerated)} note={`${supplier.concentration.toFixed(1)}% purchasing concentration`} /><MetricCard label="Payment terms" value={`${supplier.terms} days`} note={`${formatGel(supplier.overdue)} overdue payable`} /></div><h3>Grouped aliases</h3><ul className="drawer-list">{supplier.aliases.map((alias) => <li key={alias}>{alias}</li>)}</ul></>}
        {product && <><p>{product.category} · supplied by {demoSuppliers.find((item) => item.id === product.supplierId)?.name}</p><div className="drawer-metrics"><MetricCard label="Gross profit" value={formatGel(product.grossProfit)} note={`${formatPercent(product.grossProfit / product.revenue)} product margin`} /><MetricCard label="Inventory held" value={formatGel(product.inventory)} note={`${product.turnover.toFixed(1)}× turnover`} /><MetricCard label="Price movement" value={`+${product.priceChange.toFixed(1)}%`} note="Purchase-price change" /></div></>}
        <p className="control-drawer__note">Synthetic portfolio data. The interaction demonstrates how one selection can expose connected operational and financial context.</p>
      </aside>
    </div>
  )
}

const BorisControlSystemPage = () => {
  const [branch, setBranch] = useState<BranchId>('all')
  const [period, setPeriod] = useState<PeriodId>('90')
  const [selection, setSelection] = useState<Selection | null>(null)
  const scope = useMemo<Scope>(() => ({ branch, period }), [branch, period])
  const employees = scopedEmployees(scope)
  const customers = scopedCustomers(scope)
  const metrics = executiveMetrics(scope)
  const periodLabel = period === '30' ? '30 days' : period === '90' ? '90 days' : '180 days'
  const branchLabel = branch === 'all' ? 'All branches' : branch === 'tbilisi' ? 'Tbilisi' : 'Batumi'
  const scale = (value: number) => scaleMoney(value * (branch === 'all' ? 1 : metrics.revenue / scaleMoney(1240000, period)), period)
  const employeeForSelection = selection?.kind === 'employee' ? selection.id : selection?.kind === 'customer' ? demoCustomers.find((item) => item.id === selection.id)?.employeeId : undefined

  const resetFilters = () => { setBranch('all'); setPeriod('90'); setSelection(null) }

  return (
    <div className="control-showcase">
      <header className="control-hero control-shell">
        <div className="control-hero__copy">
          <p className="data-label">Boris Control System / interactive portfolio demonstration</p>
          <h1>Operations become <span>management signals.</span></h1>
          <p>A unified ERP analytics environment connecting sales, people, customers, suppliers, inventory, payments, expenses, and cash—not a collection of disconnected dashboards.</p>
          <div className="control-hero__actions"><a className="button-primary" href="#overview">Open the control room</a><Link className="button-secondary" to="/projects">View My Systems</Link></div>
        </div>
        <div className="control-hero__map" aria-label="ERP relationship map">
          <span className="control-hero__status">Demo company · GEL · synthetic records</span>
          <strong>Finance control core</strong>
          <p>Validate · reconcile · explain</p>
          <div><span>People</span><span>Customers</span><span>Products</span><span>Suppliers</span><span>Cash</span><span>Expenses</span></div>
        </div>
      </header>

      <section className="control-integrations" aria-labelledby="control-integrations-title">
        <div className="control-integrations__inner control-shell">
          <div><p className="data-label">Connected integrations</p><h2 id="control-integrations-title">RS.ge, BOG, TBC, Wolt and Glovo—connected.</h2><p>Government tax workflows, bank reconciliation, payments, catalogue, inventory, and delivery orders feed the same control environment.</p></div>
          <div className="control-integrations__logos" aria-label="Integrated platforms">
            {(['rsge', 'bog', 'tbc', 'wolt', 'glovo'] as const).map((brand) => <IntegrationBadge id={brand} key={brand} />)}
          </div>
        </div>
      </section>

      <div className="control-nav-wrap">
        <nav className="control-nav control-shell" aria-label="Control system sections">
          {sections.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>
      </div>

      <section className="control-filters control-shell" aria-labelledby="filters-title">
        <div><p className="data-label">Shared analysis controls</p><h2 id="filters-title">One scope across every panel.</h2><p aria-live="polite">Showing {periodLabel} · {branchLabel}</p></div>
        <div className="control-filters__fields">
          <label>Period<select value={period} onChange={(event) => setPeriod(event.target.value as PeriodId)}><option value="30">Last 30 days</option><option value="90">Last 90 days</option><option value="180">Last 180 days</option></select></label>
          <label>Branch<select value={branch} onChange={(event) => setBranch(event.target.value as BranchId)}><option value="all">All branches</option><option value="tbilisi">Tbilisi</option><option value="batumi">Batumi</option></select></label>
          <button type="button" onClick={resetFilters} disabled={branch === 'all' && period === '90'}>Reset</button>
        </div>
      </section>

      <Panel id="overview" eyebrow="01 / Executive overview" title="Company health in one scan." intro="Profit, cash, and working capital are read together so growth cannot hide collection or liquidity problems.">
        <div className="control-metric-grid">
          <MetricCard label="Revenue" value={formatGel(metrics.revenue, true)} note="Invoiced sales · not cash" tone="positive" />
          <MetricCard label="Gross profit" value={formatGel(metrics.grossProfit, true)} note={`${formatPercent(metrics.margin)} gross margin`} tone="positive" />
          <MetricCard label="Collected cash" value={formatGel(metrics.collected, true)} note={`${formatPercent(metrics.collectionRate)} of revenue`} tone={metrics.collectionRate < .88 ? 'attention' : 'positive'} />
          <MetricCard label="Receivables" value={formatGel(metrics.receivables, true)} note={`${formatGel(metrics.overdue, true)} overdue`} tone="attention" />
          <MetricCard label="Purchases" value={formatGel(metrics.purchases, true)} note="Inventory and cost base" />
          <MetricCard label="Operating expenses" value={formatGel(metrics.expenses, true)} note="Fixed and variable costs" />
          <MetricCard label="Net operating cash" value={formatGel(metrics.netCash, true)} note="Collections − supplier payments − opex" tone="positive" />
          <MetricCard label="Active network" value={`${metrics.customers} customers`} note={`${metrics.employees} accountable employees`} />
        </div>
        <div className="insight-strip" aria-labelledby="insights-title"><div><p className="data-label">Management attention</p><h3 id="insights-title">Signals generated from connected records</h3></div><ul><li className="insight--attention"><strong>Collection gap</strong><span>Giorgi creates sales growth, but 54.7% of his receivables are already overdue.</span></li><li><strong>Working-capital risk</strong><span>Seasonal range holds the most inventory and turns only 2.4 times.</span></li><li><strong>Supplier pressure</strong><span>Black Sea Imports shows the longest lead time and fastest price increase.</span></li></ul></div>
      </Panel>

      <Panel id="employees" eyebrow="02 / Employees" title="Value creation includes collection." intro="Sales, margin, cash collection, customer ownership, employment cost, and progression are evaluated together.">
        <div className="control-split">
          <article className="control-chart-card"><header><div><p className="data-label">Revenue vs. collected cash</p><h3>Collection quality by employee</h3></div><span>Click a name for detail</span></header><div className="employee-bars">{employees.map((employee) => <button type="button" key={employee.id} className={employeeForSelection === employee.id ? 'is-related' : ''} onClick={() => setSelection({ kind: 'employee', id: employee.id })}><span><strong>{employee.name}</strong><small>{employee.role}</small></span><i><b style={{ width: `${employee.revenue / 382000 * 100}%` }} /><em style={{ width: `${employee.collected / 382000 * 100}%` }} /></i><span className="employee-bars__values">{formatGel(scaleMoney(employee.revenue, period), true)} / {formatGel(scaleMoney(employee.collected, period), true)}</span></button>)}</div><div className="chart-legend"><span><i />Revenue</span><span><i />Collected</span></div></article>
          <article className="control-chart-card"><header><div><p className="data-label">ROI methodology</p><h3>Gross-profit return on employee cost</h3></div><span>Role-aware</span></header><p className="formula">(Gross profit generated − salary, bonus, commission and employer cost) ÷ total employee cost</p><div className="roi-list">{employees.map((employee) => <div key={employee.id}><span>{employee.name}<small>{employee.level} → {employee.nextLevel}</small></span><strong>{employeeRoi(employee).toFixed(1)}×</strong><i><b style={{ width: `${employee.progress}%` }} /></i></div>)}</div></article>
        </div>
        <div className="control-table-wrap"><table><caption>Employee financial and operational scorecard for {periodLabel}</caption><thead><tr><th>Employee</th><th>Revenue</th><th>Gross profit</th><th>Collection</th><th>Customers</th><th>Orders</th><th>Total cost</th><th>ROI</th><th>Trend</th></tr></thead><tbody>{employees.map((employee) => <tr key={employee.id} className={employeeForSelection === employee.id ? 'is-related' : ''}><th scope="row"><button type="button" onClick={() => setSelection({ kind: 'employee', id: employee.id })}>{employee.name}</button><small>{employee.branch}</small></th><td>{formatGel(scaleMoney(employee.revenue, period), true)}</td><td>{formatGel(scaleMoney(employee.grossProfit, period), true)}</td><td>{formatPercent(employee.collected / employee.revenue)}</td><td>{employee.customers}</td><td>{Math.round(employee.orders * (period === '30' ? .34 : period === '180' ? 1.92 : 1))}</td><td>{formatGel(scaleMoney(employeeCost(employee), period), true)}</td><td>{employeeRoi(employee).toFixed(1)}×</td><td className={employee.trend < 0 ? 'text-attention' : 'text-positive'}>{employee.trend > 0 ? '+' : ''}{employee.trend}%</td></tr>)}</tbody></table></div>
      </Panel>

      <Panel id="customers" eyebrow="03 / Customers" title="Revenue is only the beginning." intro="Contribution subtracts delivery and servicing cost; payment behavior shows which customers consume working capital.">
        <div className="customer-grid">{customers.map((customer) => <button type="button" key={customer.id} onClick={() => setSelection({ kind: 'customer', id: customer.id })} className={selection?.kind === 'customer' && selection.id === customer.id ? 'is-related' : ''}><span className="customer-grid__segment">{customer.segment}</span><strong>{customer.name}</strong><span>{formatGel(scaleMoney(customer.revenue, period), true)} revenue · {formatPercent(customer.grossProfit / customer.revenue)} margin</span><div><i style={{ width: `${Math.min(customer.receivables / customer.creditLimit, 1) * 100}%` }} /></div><small>{formatGel(scaleMoney(customer.receivables, period), true)} receivable · {customer.averageDaysToPay} days to pay</small></button>)}</div>
        <div className="control-split control-split--customer"><article className="control-chart-card"><header><div><p className="data-label">Profitability matrix</p><h3>Commercial value after cost-to-serve</h3></div></header><div className="quadrant" role="img" aria-label="Customers positioned by revenue and contribution after servicing cost"><span className="quadrant__y">Contribution</span><span className="quadrant__x">Revenue</span>{customers.map((customer, index) => <button type="button" key={customer.id} aria-label={`${customer.name}: ${formatGel(customer.revenue)} revenue, ${formatGel(customerProfit(customer))} contribution`} style={{ left: `${15 + customer.revenue / 286000 * 67}%`, bottom: `${12 + customerProfit(customer) / 65200 * 67}%` }} onClick={() => setSelection({ kind: 'customer', id: customer.id })}><span>{index + 1}</span><small>{customer.name}</small></button>)}</div></article><article className="control-chart-card"><header><div><p className="data-label">Receivables aging</p><h3>Debt requiring action</h3></div></header><div className="aging-bars"><div><span>Current</span><i><b style={{ width: '100%' }} /></i><strong>{formatGel(scale(84000), true)}</strong></div><div><span>1–30 days</span><i><b style={{ width: '61%' }} /></i><strong>{formatGel(scale(51000), true)}</strong></div><div><span>31–60 days</span><i><b style={{ width: '38%' }} /></i><strong>{formatGel(scale(32000), true)}</strong></div><div><span>60+ days</span><i><b style={{ width: '27%' }} /></i><strong>{formatGel(scale(23000), true)}</strong></div></div></article></div>
      </Panel>

      <Panel id="suppliers" eyebrow="04 / Suppliers, purchases & products" title="Purchasing decisions reach the margin line." intro="Supplier terms, price movement, reliability, inventory, and the profit generated by supplied products share one evidence chain.">
        <div className="supplier-grid">{demoSuppliers.map((supplier) => <button type="button" key={supplier.id} onClick={() => setSelection({ kind: 'supplier', id: supplier.id })}><span><small>Supplier score</small><strong>{supplierScore(supplier)}</strong></span><h3>{supplier.name}</h3><p>{formatGel(scale(supplier.purchases), true)} purchases · {formatGel(scale(supplier.marginGenerated), true)} margin enabled</p><dl><div><dt>Reliability</dt><dd>{supplier.reliability}%</dd></div><div><dt>Terms</dt><dd>{supplier.terms}d</dd></div><div><dt>Price</dt><dd className={supplier.priceTrend > 7 ? 'text-attention' : ''}>+{supplier.priceTrend}%</dd></div></dl><small>{supplier.aliases.length} aliases grouped under master record</small></button>)}</div>
        <div className="control-table-wrap"><table><caption>Product margin, inventory, and supplier dependency</caption><thead><tr><th>Product group</th><th>Supplier</th><th>Revenue</th><th>Gross margin</th><th>Inventory held</th><th>Turnover</th><th>Purchase price</th></tr></thead><tbody>{demoProducts.map((product) => <tr key={product.id}><th scope="row"><button type="button" onClick={() => setSelection({ kind: 'product', id: product.id })}>{product.name}</button><small>{product.category}</small></th><td>{demoSuppliers.find((supplier) => supplier.id === product.supplierId)?.name}</td><td>{formatGel(scale(product.revenue), true)}</td><td>{formatPercent(product.grossProfit / product.revenue)}</td><td>{formatGel(scale(product.inventory), true)}</td><td>{product.turnover.toFixed(1)}×</td><td className={product.priceChange > 7 ? 'text-attention' : ''}>+{product.priceChange}%</td></tr>)}</tbody></table></div>
      </Panel>

      <Panel id="cash" eyebrow="05 / Income, payments & cash flow" title="Profit is not cash." intro="Invoice dates, payment dates, supplier obligations, and forecast balances remain visibly distinct.">
        <div className="cash-layout"><article className="control-chart-card cash-chart"><header><div><p className="data-label">Cash movement</p><h3>Actual and forecast balance</h3></div><span>July is simulated</span></header><TrendLine values={cashSeries.map((item) => item.balance)} label="Closing cash balance from April through July forecast" /><div className="cash-chart__months">{cashSeries.map((item) => <div key={item.label}><span>{item.label}</span><strong>{formatGel(scale(item.balance), true)}</strong><small>In {formatGel(scale(item.inflow), true)} · Out {formatGel(scale(item.outflow), true)}</small></div>)}</div></article><div className="cash-stack"><MetricCard label="Expected customer collections" value={formatGel(scale(369000), true)} note="Next 30 days · based on open invoices" tone="positive" /><MetricCard label="Supplier obligations" value={formatGel(scale(291000), true)} note="Next 30 days · scheduled payables" tone="attention" /><MetricCard label="Minimum projected balance" value={formatGel(scale(281000), true)} note="After payroll, tax, and supplier plan" /><article className="working-capital"><p className="data-label">Cash conversion cycle</p><strong>43 days</strong><div><span>DSO <b>29d</b></span><span>Inventory <b>42d</b></span><span>DPO <b>28d</b></span></div><p>Sales growth increases cash need when inventory and receivables move faster than supplier terms.</p></article></div></div>
        <div className="payment-flow" aria-label="Payment relationship"><span>Customer invoices<strong>{formatGel(metrics.revenue, true)}</strong></span><i>→</i><span>Cash collected<strong>{formatGel(metrics.collected, true)}</strong></span><i>→</i><span>Supplier payments<strong>{formatGel(metrics.supplierPayments, true)}</strong></span><i>→</i><span>Operating cash<strong>{formatGel(metrics.netCash, true)}</strong></span></div>
      </Panel>

      <Panel id="expenses" eyebrow="06 / Expenses & profitability" title="See what changed—and why." intro="Budget, trend, cost behavior, and operational ownership make expense growth actionable.">
        <div className="expense-layout"><article className="control-chart-card"><header><div><p className="data-label">Budget vs. actual</p><h3>Expense structure</h3></div><span>Base 90-day plan</span></header><div className="expense-bars">{demoExpenses.map((expense) => { const actual = scale(expense.amount); const budget = scale(expense.budget); return <div key={expense.id}><span><strong>{expense.label}</strong><small>{expense.kind} · {expense.trend > 0 ? '+' : ''}{expense.trend}% trend</small></span><i><b style={{ width: `${Math.min(expense.amount / 92000 * 100, 100)}%` }} /><em style={{ left: `${Math.min(expense.budget / 92000 * 100, 100)}%` }} /></i><strong className={actual > budget ? 'text-attention' : 'text-positive'}>{formatGel(actual, true)}</strong></div> })}</div></article><aside className="expense-note"><p className="data-label">Investigation queue</p><h3>Costs that need context</h3><ul><li><strong>Logistics is 11.9% over budget.</strong><span>Compare delivery cost by customer before treating growth as profitable.</span></li><li><strong>Technology and banking is 5.6% over budget.</strong><span>Separate transaction-linked fees from recurring platform cost.</span></li><li><strong>Marketing is below plan.</strong><span>Check whether the saving explains lower acquisition in the next period.</span></li></ul><div><span>Cost per order</span><strong>{formatGel(scale(587))}</strong><small>Expense ÷ 396 orders</small></div></aside></div>
      </Panel>

      <section className="control-cta control-shell"><div><p className="data-label">System design, finance logic, implementation</p><h2>This is what connected ERP control can look like.</h2><p>The records are synthetic. The architecture, calculations, interaction model, and management questions demonstrate the systems Boris designs and builds.</p></div><Link className="button-primary" to="/contact">Discuss a control system</Link></section>
      {selection && <DetailDrawer selection={selection} onClose={() => setSelection(null)} />}
    </div>
  )
}

export default BorisControlSystemPage
