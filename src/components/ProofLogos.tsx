import { proofLogos } from '../data/homeHighlights'

const ProofLogos = () => (
  <section className="proof-logos sales-shell" aria-labelledby="proof-logos-title">
    <p className="proof-logos__label" id="proof-logos-title">Teams I have worked for and with</p>
    <ul className="proof-logos__grid">
      {proofLogos.map(item => <li key={item.name}><img src={item.logo} alt={item.name} width={item.width} height={item.height} loading="lazy" decoding="async" /></li>)}
    </ul>
  </section>
)

export default ProofLogos
