import { useId, useState } from 'react'
import { exampleSync } from '../data/demoExamples'
import IntegrationBadge from './IntegrationBadge'

type Phase = 'ready' | 'preview' | 'failed' | 'complete'

const OptimoDemo = () => {
  const id = useId()
  const [stock, setStock] = useState<string>(String(exampleSync.proposedStock))
  const [phase, setPhase] = useState<Phase>('ready')
  const [mapped, setMapped] = useState(false)
  const [replayed, setReplayed] = useState(false)
  const quantity = Number(stock)
  const valid = stock.trim() !== '' && Number.isInteger(quantity) && quantity >= 0 && quantity <= 999
  const reset = () => { setStock(String(exampleSync.proposedStock)); setPhase('ready'); setMapped(false); setReplayed(false) }
  const woltStock = phase === 'failed' || phase === 'complete' ? quantity : exampleSync.initialStock
  const glovoStock = phase === 'complete' ? quantity : exampleSync.initialStock

  return <div className="exhibit optimo-demo" id="optimo-demo">
    <div className="exhibit-bar"><span>Optimo / catalogue control</span><span className="example-label">Simulated workflow</span></div>
    <div className="sync-body">
      <div className="inspector-title"><span className="exhibit-eyebrow">One item · two destinations</span><button className="text-button" type="button" onClick={reset}>Reset example</button></div>
      <div className="sync-source"><div><span className="exhibit-eyebrow">{exampleSync.sku}</span><h4>Craft beverage · 330 ml</h4><p>Set the stock you want both channels to receive.</p></div><label htmlFor={id + '-stock'}>Available units<input id={id + '-stock'} type="number" inputMode="numeric" min={0} max={999} step={1} value={stock} disabled={phase === 'failed' || phase === 'complete'} onChange={event => { setStock(event.target.value); setPhase('ready'); setMapped(false); setReplayed(false) }} /></label></div>
      <div className="sync-destinations">
        <div className="sync-destination"><IntegrationBadge id="wolt" /><strong>{woltStock}<span>confirmed units</span></strong><span className={'state-badge ' + (phase === 'failed' || phase === 'complete' ? '' : 'state-badge--neutral')}>{phase === 'failed' || phase === 'complete' ? 'Confirmed in example' : phase === 'preview' ? 'Ready to update' : 'Current snapshot'}</span></div>
        <div className="sync-destination"><IntegrationBadge id="glovo" /><strong>{glovoStock}<span>confirmed units</span></strong><span className={'state-badge ' + (phase !== 'complete' ? 'state-badge--attention' : '')}>{phase === 'complete' ? 'Confirmed in example' : phase === 'failed' ? 'Pending · request failed' : mapped ? 'Mapping resolved' : 'Mapping required'}</span></div>
      </div>
      <div className="sync-feedback" role="status" aria-live="polite">
        {phase === 'ready' && <p>Both saved snapshots start at {exampleSync.initialStock} units. Preview the change before anything moves.</p>}
        {phase === 'preview' && <p>{mapped ? 'The SKU now has a destination mapping. Run the example to inspect each outcome.' : 'Wolt can receive ' + quantity + ' units. Glovo is blocked by a missing SKU mapping.'}</p>}
        {phase === 'failed' && <p>Wolt confirmed {quantity} units. The simulated Glovo request failed; its saved snapshot stays at {exampleSync.initialStock}. Retry only the pending update.</p>}
        {phase === 'complete' && <p>{replayed ? 'Duplicate event ignored in this fixture. Both destinations remain at ' + quantity + ' units.' : 'Both destinations confirmed ' + quantity + ' units. Replay the event to inspect the duplicate state.'}</p>}
      </div>
      <div className="demo-actions">
        {phase === 'ready' && <button className="exhibit-button" type="button" disabled={!valid} onClick={() => setPhase('preview')}>Preview stock change →</button>}
        {phase === 'preview' && !mapped && <button className="exhibit-button" type="button" onClick={() => setMapped(true)}>Resolve Glovo mapping</button>}
        {phase === 'preview' && mapped && <button className="exhibit-button" type="button" onClick={() => setPhase('failed')}>Run example sync →</button>}
        {phase === 'failed' && <button className="exhibit-button" type="button" onClick={() => setPhase('complete')}>Retry pending update →</button>}
        {phase === 'complete' && <button className="exhibit-button" type="button" onClick={() => setReplayed(true)}>Replay last event</button>}
        {!valid && <span className="exhibit-caption">Enter a whole number from 0 to 999.</span>}
      </div>
    </div>
    <p className="exhibit-footnote">Fictional catalogue and outcomes. No marketplace requests are sent. This illustrates state and recovery, not live provider availability.</p>
  </div>
}

export default OptimoDemo
