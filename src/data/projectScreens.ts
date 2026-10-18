import { requirePortfolioAsset } from './portfolio'

export const projectScreens = [
  { id: 'optimo', name: 'Optimo Sync', view: 'Marketplace operations', status: 'Application screen', asset: requirePortfolioAsset('optimo-sync'), target: '/#optimo', description: 'Catalogue, stock and marketplace synchronization in one operator workspace.' },
  { id: 'bachmann', name: 'BachmannLogi', view: 'Financial operations', status: 'Design prototype · synthetic data', asset: requirePortfolioAsset('bachmann-today'), target: '/#bachmann', description: 'Labour economics, cost allocation and data availability, designed for investigation.' },
  { id: 'camora', name: 'Camora ERP', view: 'Purchase reconciliation', status: 'Application screen · empty state', asset: requirePortfolioAsset('rsge-banks'), target: '/#implementation-network', description: 'An implemented reconciliation interface connecting operational files and RS.ge workflows.' },
  { id: 'nine-t-erp', name: '9T ERP', view: 'Secure application entry', status: 'Application sign-in screen', asset: requirePortfolioAsset('nine-t-erp'), target: '/#nine-t-erp', description: 'The public-safe application entry. Explore the fictional walkthrough for financial review behavior.' }
]
