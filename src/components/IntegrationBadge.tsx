import { integrationBrands, type IntegrationBrandId } from '../data/portfolio'

const IntegrationBadge = ({ id, compact = false }: { id: IntegrationBrandId; compact?: boolean }) => {
  const brand = integrationBrands[id]
  return <span className={'integration-badge' + (compact ? ' integration-badge--compact' : '')} data-brand={id}><img src={brand.logo} alt="" width="96" height="32" loading="lazy" decoding="async" /><span>{brand.label}</span></span>
}

export default IntegrationBadge
