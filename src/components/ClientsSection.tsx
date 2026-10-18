import { clientBrands } from '../data/portfolio'

const ClientCard = ({ client }: { client: (typeof clientBrands)[number] }) => (
  <article className={'client-ledger__item'} data-client-id={client.id} role={'listitem'}>
    <span className={'client-ledger__status'} aria-hidden={'true'}>Active client</span>
    <div className={'client-ledger__logo'}><img src={client.logo} alt={client.name + ' logo'} width={client.width} height={client.height} loading={'lazy'} decoding={'async'} /></div>
    <h3>{client.name}</h3>
  </article>
)

const ClientsSection = () => (
  <section className={'clients-section sales-shell'} aria-labelledby={'clients-title'}>
    <div className={'section-heading section-heading--split'}>
      <div><p className={'data-label'}>Systems in practice</p><h2 id={'clients-title'}>Clients who trust my work.</h2></div>
      <p>Businesses using my systems and financial automation in their day-to-day operations.</p>
    </div>
    <div className={'client-ledger'} role={'list'} aria-label={'Clients'}>
      {clientBrands.map(client => <ClientCard key={client.id} client={client} />)}
    </div>
  </section>
)

export default ClientsSection
