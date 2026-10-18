import { useId, useState } from 'react'
import { demoMoney, exampleCost, exampleProfit, financeExample, traceSteps } from '../data/demoExamples'
import { Link } from '../routing'

export const FinanceSnapshot = () => (
  <div className="finance-snapshot">
    <div className="exhibit-bar"><span>9T ERP / financial trace</span><span className="example-label">Fictional example</span></div>
    <div className="snapshot-body">
      <div className="snapshot-heading"><span>Reported gross profit</span><span className="state-badge state-badge--attention">Review needed</span></div>
      <strong className="snapshot-value">{demoMoney(exampleProfit)}</strong>
      <p>A useful number starts with a question:<br />what is behind it?</p>
      <div className="snapshot-finding"><span className="finding-dot" aria-hidden="true" /><div><strong>One purchase needs classification</strong><span>DEMO-104 · {demoMoney(2_400)} · source preserved</span></div><span aria-hidden="true">↗</span></div>
      <div className="snapshot-rail" aria-hidden="true"><span>Figure</span><i /><span>Source</span><i /><span>Decision</span></div>
      <Link className="snapshot-link" to="/#nine-t-erp-demo">Investigate the example <span aria-hidden="true">↗</span></Link>
    </div>
  </div>
)

const FinanceTrace = () => {
  const [step, setStep] = useState(0)
  const [note, setNote] = useState('Confirm whether this purchase belongs in inventory or cost of sales.')
  const [verdict, setVerdict] = useState('Follow-up required')
  const [recorded, setRecorded] = useState<{ verdict: string; note: string } | null>(null)
  const [reviewError, setReviewError] = useState('')
  const id = useId()
  const current = traceSteps[step]

  const reset = () => {
    setStep(0)
    setRecorded(null)
    setReviewError('')
    setVerdict('Follow-up required')
    setNote('Confirm whether this purchase belongs in inventory or cost of sales.')
  }
  const downloadReview = () => {
    if (!recorded) return
    const blob = new Blob([JSON.stringify({ example: true, reference: 'DEMO-104', ...recorded, reportedGrossProfit: exampleProfit, accountingChanged: false }, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = '9t-example-review.json'
    link.click()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return (
    <div className="finance-trace exhibit" id="nine-t-erp-demo">
      <div className="exhibit-bar"><span>9T ERP / follow one figure</span><span className="example-label">Interactive example · fictional data</span></div>
      <nav className="trace-steps" aria-label="Financial review steps">
        {traceSteps.map((item, index) => <button key={item.id} type="button" aria-pressed={step === index} aria-controls={id + '-panel'} onClick={() => setStep(index)}><span className="step-number" aria-hidden="true">{index + 1}</span><span>{item.label}</span></button>)}
      </nav>
      <div className="trace-content">
        <aside className="trace-ledger" aria-label="Reported example figures">
          <span className="exhibit-eyebrow">{financeExample.period}</span>
          <dl><div><dt>Revenue</dt><dd>{demoMoney(financeExample.revenue)}</dd></div><div><dt>Recorded cost of sales</dt><dd>{demoMoney(exampleCost)}</dd></div><div className="ledger-total"><dt>Gross profit</dt><dd data-testid="reported-profit">{demoMoney(exampleProfit)}</dd></div></dl>
          <span className="state-badge state-badge--attention">{recorded ? 'Review recorded · source unchanged' : 'Classification needs review'}</span>
          <p>The flagged purchase is included in the reported cost. Its classification still needs a human decision.</p>
        </aside>
        <section className="trace-inspector" id={id + '-panel'} aria-label={current.label}>
          <div className="inspector-title"><span className="exhibit-eyebrow">Step {step + 1} of {traceSteps.length}</span><button className="text-button" type="button" onClick={reset}>Reset example</button></div>
          <h4>{current.title}</h4>
          {step === 0 && <><p>The statement reports {demoMoney(exampleProfit)} gross profit. A finding marker tells you that one input needs a closer look.</p><div className="finding-card"><span className="finding-dot" aria-hidden="true" /><div><strong>Purchase classification is unresolved</strong><p>{demoMoney(2_400)} · reference DEMO-104</p></div></div><p className="exhibit-caption">Start with the question, then inspect the evidence.</p></>}
          {step === 1 && <><p>The purchase was posted to cost of sales, but its source label does not establish whether the goods were sold or remain in inventory.</p><div className="finding-card"><div><span className="exhibit-eyebrow">DEMO-104 / classification</span><strong>Was this purchase consumed or still held?</strong><p>Keep the uncertainty attached to the reported figure. Do not silently adjust it.</p></div></div></>}
          {step === 2 && <><p>These three fictional postings make up the reported cost of sales. The highlighted entry is the one requiring review.</p><div className="exhibit-table-wrap"><table className="exhibit-table"><caption className="sr-only">Fictional cost-of-sales postings</caption><thead><tr><th scope="col">Reference / source</th><th scope="col">Amount</th></tr></thead><tbody>{financeExample.postings.map(posting => <tr key={posting.id} className={posting.needsReview ? 'flagged-row' : ''}><th scope="row"><strong>{posting.id}</strong><span>{posting.description}{posting.needsReview ? ' · needs review' : ''}</span></th><td>{demoMoney(posting.amount)}</td></tr>)}</tbody><tfoot><tr><th scope="row">Reported cost</th><td>{demoMoney(exampleCost)}</td></tr></tfoot></table></div></>}
          {step === 3 && <>{recorded ? <div className="review-receipt" role="status"><span className="state-badge">Review saved in this example</span><strong>{recorded.verdict}</strong><p>{recorded.note}</p><p>Reported gross profit remains {demoMoney(exampleProfit)}. This verdict documents judgment; it does not correct the accounting books.</p><button type="button" className="exhibit-button" onClick={downloadReview}>Download example review</button></div> : <form className="review-form" onSubmit={event => { event.preventDefault(); if (!note.trim()) { setReviewError('Add a reason before recording the review.'); document.getElementById(id + '-note')?.focus(); return } setReviewError(''); setRecorded({ verdict, note: note.trim() }) }}><label htmlFor={id + '-verdict'}>Review decision</label><select id={id + '-verdict'} value={verdict} onChange={event => setVerdict(event.target.value)}><option>Follow-up required</option><option>Reviewed with explanation</option></select><label htmlFor={id + '-note'}>Reason for the decision</label><textarea id={id + '-note'} value={note} onChange={event => { setNote(event.target.value); setReviewError('') }} aria-invalid={Boolean(reviewError)} aria-describedby={reviewError ? id + '-error' : undefined} required maxLength={500} rows={3} />{reviewError && <p id={id + '-error'} role="alert">{reviewError}</p>}<button type="submit" className="exhibit-button">Record review decision</button><p className="exhibit-caption">Saved only in this page. No accounting records are changed.</p></form>}</>}
          <div className="trace-navigation"><button className="text-button" type="button" disabled={step === 0} onClick={() => setStep(value => value - 1)}>← Previous</button>{step < traceSteps.length - 1 && <button type="button" className="exhibit-button" onClick={() => setStep(value => value + 1)}>{['Inspect the finding', 'Trace source postings', 'Review the evidence'][step]} <span aria-hidden="true">→</span></button>}</div>
        </section>
      </div>
      <p className="exhibit-footnote">A synthetic walkthrough of the review pattern. No client data or live 9T service is connected.</p>
    </div>
  )
}

export default FinanceTrace
