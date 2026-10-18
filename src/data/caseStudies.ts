import { requirePortfolioAsset, type IntegrationBrandId, type PortfolioAsset } from './portfolio'

export type CaseStudy = {
  id: string
  label: string
  title: string
  outcome: string
  proof: string
  image: PortfolioAsset
  integrations: IntegrationBrandId[]
  capabilities: string[]
}

export const caseStudies: CaseStudy[] = [
  { id: 'rsge-banks', label: '01 / Tax & supplier control', title: 'Turn RS.ge purchases into a review queue—not a monthly fire drill.', outcome: 'Automated VAT checks, supplier matching, and exception-first reconciliation give finance teams a clean trail from government waybill to payment.', proof: 'The workflow compares RS.ge purchases with operational records, isolates mismatches, and keeps supplier mappings reusable for the next period.', image: requirePortfolioAsset('rsge-banks'), integrations: ['rsge', 'bog', 'tbc'], capabilities: ['VAT reconciliation', 'Supplier matching', 'Audit trail'] },
  { id: 'delivery-analytics', label: '02 / Delivery economics', title: 'See which delivery channel, route, and vehicle actually creates margin.', outcome: 'Wolt and Glovo activity becomes decision-ready operating data: sales by channel, routing signals, vehicle utilization, and bank-income variance in one view.', proof: 'Managers can compare delivery revenue with cash received and investigate variance before it becomes a month-end surprise.', image: requirePortfolioAsset('delivery-analytics'), integrations: ['wolt', 'glovo'], capabilities: ['Route analytics', 'Vehicle usage', 'Revenue variance'] },
  { id: 'bank-analytics', label: '03 / Bank intelligence', title: 'Convert BOG and TBC movements into categorized, explainable cash flow.', outcome: 'Credits, debits, counterparties, and internal transfers are classified consistently so financial managers can trust the daily position without rebuilding spreadsheets.', proof: 'Reusable mapping rules reduce repetitive classification while preserving a clear path back to every source transaction.', image: requirePortfolioAsset('bank-analytics'), integrations: ['bog', 'tbc'], capabilities: ['Transaction mapping', 'Transfer detection', 'Cash visibility'] },
  { id: 'internal-analytics', label: '04 / ERP synchronization', title: 'Keep operational tools, banks, and internal reporting in agreement.', outcome: 'Cross-platform synchronization replaces manual copying with controlled data flows for income, expenses, inventory movements, and internal transfers.', proof: 'One operating model connects source systems while exceptions remain visible instead of being silently overwritten.', image: requirePortfolioAsset('internal-analytics'), integrations: [], capabilities: ['API integration', 'ERP sync', 'Control reporting'] }
]
