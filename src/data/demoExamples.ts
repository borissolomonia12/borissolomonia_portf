// Fictional portfolio fixtures. No client records or external services are used.
export const financeExample = {
  period: 'Example month',
  revenue: 120_000,
  postings: [
    { id: 'DEMO-101', description: 'Mapped cost of sales', amount: 40_200, needsReview: false },
    { id: 'DEMO-102', description: 'Mapped cost of sales', amount: 41_400, needsReview: false },
    { id: 'DEMO-104', description: 'Purchase classification', amount: 2_400, needsReview: true }
  ]
} as const

export const exampleCost = financeExample.postings.reduce((total, posting) => total + posting.amount, 0)
export const exampleProfit = financeExample.revenue - exampleCost
const numberFormat = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 })
export const demoMoney = (value: number) => 'GEL ' + numberFormat.format(value)

export const traceSteps = [
  { id: 'figure', label: 'Reported figure', title: 'A figure worth questioning.' },
  { id: 'finding', label: 'Finding', title: 'Make the uncertainty visible.' },
  { id: 'source', label: 'Source postings', title: 'Follow the figure to its source.' },
  { id: 'review', label: 'Review decision', title: 'Add judgment. Preserve the books.' }
] as const

export const exampleSync = { initialStock: 12, proposedStock: 24, eventId: 'DEMO-EVENT-01', sku: 'DEMO-01' } as const
