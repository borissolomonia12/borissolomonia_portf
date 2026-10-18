import { useState } from 'react'
import { requirePortfolioAsset } from '../data/portfolio'

const memory = requirePortfolioAsset('brooks-memory')

const BrooksDemo = () => {
  const [stage, setStage] = useState<'invitation' | 'place' | 'memory'>('invitation')
  return <div className="exhibit brooks-demo" id="brooks-demo">
    <div className="exhibit-bar"><span>Brooks / a memory belongs here</span><span className="example-label">Concept experience</span></div>
    <div className="memory-scene" data-memory-stage={stage}>
      {stage === 'memory' ? <><img className="memory-photo" src={memory.src} alt={memory.alt} width={memory.width} height={memory.height} loading="lazy" decoding="async" /><div className="memory-revealed"><span className="exhibit-eyebrow">A message from someone important</span><h4>For the next time<br />you find your way back.</h4><p>Some places keep a little of us. I left this one here for you.</p></div></> : <><svg className="memory-map" viewBox="0 0 640 420" aria-hidden="true"><defs><pattern id="memory-grid" width="38" height="38" patternUnits="userSpaceOnUse"><path d="M38 0H0V38" fill="none" stroke="currentColor" strokeWidth=".4" /></pattern></defs><rect width="640" height="420" fill="url(#memory-grid)" /><path className="memory-river" d="M475 -30C350 90 500 200 350 470" /><g className="memory-streets" fill="none"><path d="M-50 300L660 70M90 -40L430 460M-50 80L660 360M240 -40L90 460" /></g><g className="memory-buildings"><path d="M185 135l60-20 25 55-63 23zM350 212l65 26-27 54-58-30zM120 310l45-15 20 50-42 20zM430 75l55 20-20 45-55-18z" /></g><circle className="memory-radius" cx="310" cy="225" r={stage === 'place' ? 72 : 105} /><circle className="memory-pin-halo" cx="310" cy="225" r="22" /><circle className="memory-pin" cx="310" cy="225" r="7" /></svg><div className="memory-invitation"><span className="memory-envelope" aria-hidden="true">↗</span><span className="exhibit-eyebrow">{stage === 'invitation' ? 'Someone left something for you' : 'The old courtyard'}</span><h4>{stage === 'invitation' ? 'A familiar place.\nA memory waiting.' : 'You have to be there\nto open it.'}</h4><p>{stage === 'invitation' ? 'A message from someone important, held by the place it belongs to.' : 'The place is visible. The photograph and message stay closed until the simulated arrival.'}</p><button type="button" className="exhibit-button" onClick={() => setStage(stage === 'invitation' ? 'place' : 'memory')}>{stage === 'invitation' ? 'Open the invitation →' : 'Simulate arrival & reveal →'}</button></div></>}
    </div>
    <div className="memory-footer"><span role="status">{stage === 'memory' ? 'Memory revealed · simulated presence' : stage === 'place' ? 'Memory closed · arrival required' : 'A fictional invitation'}</span>{stage !== 'invitation' && <button type="button" className="text-button" onClick={() => setStage('invitation')}>Close & reset</button>}</div>
    <p className="exhibit-footnote">A fictional story with an AI-generated image. Arrival is simulated; this does not verify location. The full Brooks experience is in development.</p>
  </div>
}

export default BrooksDemo
