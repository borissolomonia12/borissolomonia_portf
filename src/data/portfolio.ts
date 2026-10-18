import projectAssets from '../generated/projectAssets.json'

export type IntegrationBrandId = 'rsge' | 'bog' | 'tbc' | 'wolt' | 'glovo'
export type IntegrationBrand = { id: IntegrationBrandId; label: string; logo: string }
export type ClientBrand = { id: string; name: string; logo: string; width: number; height: number }
export type PortfolioAsset = { id: string; src: string; alt: string; width: number; height: number; bytes: number }
export type SystemProduct = { id: string; name: string; category: string; summary: string; capabilities: string[]; integrations: IntegrationBrandId[]; asset?: PortfolioAsset; visualType: 'product-capture' | 'architecture' }
export type SystemModule = { id: string; title: string; description: string; domain: 'operations' | 'finance' | 'control' | 'intelligence' }
export type SystemConnectionStage = { id: string; label: string; detail: string; brands?: IntegrationBrandId[]; kind: 'source' | 'control' | 'external' | 'output' }

export const integrationBrands: Record<IntegrationBrandId, IntegrationBrand> = {
  rsge: { id: 'rsge', label: 'RS.ge', logo: '/brands/rsge.svg' },
  bog: { id: 'bog', label: 'BOG', logo: '/brands/bog.svg' },
  tbc: { id: 'tbc', label: 'TBC', logo: '/brands/tbc.svg' },
  wolt: { id: 'wolt', label: 'Wolt', logo: '/brands/wolt.svg' },
  glovo: { id: 'glovo', label: 'Glovo', logo: '/brands/glovo.svg' }
}

export const clientBrands: ClientBrand[] = [
  { id: 'beercraft', name: 'BeerCraft', logo: '/clients/BeerCraft.jpg', width: 1024, height: 1024 },
  { id: 'camora', name: 'Camora', logo: '/clients/Camora.png', width: 1635, height: 1047 },
  { id: 'voulez-vous', name: 'Voulez Vous', logo: '/clients/Voulez_Vous.jpg', width: 862, height: 862 }
]

const assets = projectAssets as PortfolioAsset[]
const assetIds = new Set<string>()
assets.forEach((asset) => {
  if (assetIds.has(asset.id)) throw new Error(`Duplicate generated portfolio asset: ${asset.id}`)
  if (!asset.src || asset.width <= 0 || asset.height <= 0) throw new Error(`Invalid generated portfolio asset: ${asset.id}`)
  assetIds.add(asset.id)
})

export const requirePortfolioAsset = (id: string): PortfolioAsset => {
  const asset = assets.find((candidate) => candidate.id === id)
  if (!asset) throw new Error(`Missing generated portfolio asset: ${id}`)
  return asset
}

export const connectionStages: SystemConnectionStage[] = [
  { id: 'client-system', label: 'Client accounting system', detail: 'Sales, purchases, inventory and ledgers', kind: 'source' },
  { id: 'control-system', label: 'Boris control system', detail: 'Match, classify, validate and explain', kind: 'control' },
  { id: 'rsge', label: 'RS.ge', detail: 'VAT, invoices and waybills', brands: ['rsge'], kind: 'external' },
  { id: 'banks', label: 'BOG / TBC', detail: 'Payments, settlement and cash flow', brands: ['bog', 'tbc'], kind: 'external' },
  { id: 'delivery', label: 'Wolt / Glovo', detail: 'Orders, catalogue and inventory', brands: ['wolt', 'glovo'], kind: 'external' },
  { id: 'financial-analysis', label: 'Financial Analysis', detail: 'Cash, margin, debt and exceptions', kind: 'output' },
  { id: 'big-data-analysis', label: 'Big-Data Analysis', detail: 'High-volume operational signals', kind: 'output' }
]

export const systemModules: SystemModule[] = [
  { id: 'people', title: 'Employees and seller performance', description: 'Roles, teams, targets and operational contribution.', domain: 'operations' },
  { id: 'sales', title: 'Sales, orders and customers', description: 'Commercial activity connected to customers and fulfilment.', domain: 'operations' },
  { id: 'purchases', title: 'Purchases and suppliers', description: 'Supplier records, purchases, matching and review.', domain: 'operations' },
  { id: 'inventory', title: 'Inventory and price volatility', description: 'Movements, catalogue state, costs and price change signals.', domain: 'control' },
  { id: 'tax', title: 'VAT, tax, RS.ge and waybills', description: 'Government workflows with reusable mappings and traceability.', domain: 'control' },
  { id: 'banks', title: 'BOG/TBC reconciliation and cash flow', description: 'Bank movement classification, transfers and settlement controls.', domain: 'finance' },
  { id: 'debt', title: 'Debt, AP/AR, audit and exceptions', description: 'Balances, counterparties and exception-first control queues.', domain: 'finance' },
  { id: 'analytics', title: 'Executive, financial and high-volume data analytics', description: 'Decision views across operational and financial activity.', domain: 'intelligence' },
  { id: 'quality', title: 'Data quality, mappings and integrations', description: 'Controlled synchronization with visible failures and lineage.', domain: 'intelligence' }
]

export const systemProducts: SystemProduct[] = [
  { id: 'nine-t-erp', name: '9T ERP', category: 'Flagship ecosystem', summary: 'Modular operations and financial intelligence spanning people, sales, inventory, control and executive analytics.', capabilities: ['Modular ERP', 'Financial intelligence', 'Team performance'], integrations: ['rsge', 'bog', 'tbc'], asset: requirePortfolioAsset('nine-t-erp'), visualType: 'product-capture' },
  { id: 'tasty-erp', name: 'Tasty ERP', category: 'Finance control services', summary: 'RS.ge, bank, payment, VAT, debt and audit-control microservices working as one reviewable finance layer.', capabilities: ['VAT and debt controls', 'Bank reconciliation', 'Audit exceptions'], integrations: ['rsge', 'bog', 'tbc'], asset: requirePortfolioAsset('tasty-erp'), visualType: 'product-capture' },
  { id: 'waybill-mcp', name: 'WaybillMCP', category: 'AI-assisted workflow', summary: 'AI/MCP automation over RS.ge SOAP workflows for guided, traceable waybill operations.', capabilities: ['MCP tools', 'SOAP workflow', 'Human-in-the-loop'], integrations: ['rsge'], visualType: 'architecture' },
  { id: 'optimo-sync', name: 'Optimo Sync', category: 'Delivery synchronization', summary: 'Wolt and Glovo catalogue, inventory, mapping and synchronization with explicit data-quality controls.', capabilities: ['Catalogue mapping', 'Inventory sync', 'Data quality'], integrations: ['wolt', 'glovo'], asset: requirePortfolioAsset('optimo-sync'), visualType: 'product-capture' },
  { id: 'order-app', name: 'Order App', category: 'Operational automation', summary: 'Role-based ordering, customers, reports, RS.ge, Google Sheets and Telegram workflows.', capabilities: ['Role-based orders', 'Customer reporting', 'Operational alerts'], integrations: ['rsge'], asset: requirePortfolioAsset('order-app'), visualType: 'product-capture' },
  { id: 'ai-booking', name: 'AI Booking Assistant', category: 'AI operations', summary: 'Telegram and OpenAI vision connected to Google Sheets availability and conflict management.', capabilities: ['Vision intake', 'Availability checks', 'Conflict management'], integrations: [], visualType: 'architecture' },
  { id: 'bachmann', name: 'BachmannLogi', category: 'Discovery & interface prototype', summary: 'A table-first financial operations design study connecting labour hours, billing, cost allocation and margin. Synthetic demonstration data; not a shipped ERP.', capabilities: ['Domain discovery', 'Cost-centre comparisons', 'Data availability'], integrations: [], asset: requirePortfolioAsset('bachmann-today'), visualType: 'product-capture' }
]
