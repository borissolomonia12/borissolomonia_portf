export type BranchId = 'all' | 'tbilisi' | 'batumi'
export type PeriodId = '30' | '90' | '180'
export type Trend = 'up' | 'down' | 'attention' | 'steady'

export type Employee = {
  id: string
  name: string
  role: string
  branch: Exclude<BranchId, 'all'>
  level: string
  nextLevel: string
  progress: number
  revenue: number
  grossProfit: number
  collected: number
  receivables: number
  overdue: number
  customers: number
  orders: number
  salary: number
  bonus: number
  commission: number
  employerCost: number
  trend: number
}

export type Customer = {
  id: string
  name: string
  segment: string
  branch: Exclude<BranchId, 'all'>
  employeeId: string
  revenue: number
  grossProfit: number
  collected: number
  receivables: number
  overdue: number
  orders: number
  averageDaysToPay: number
  costToServe: number
  creditLimit: number
  trend: number
}

export type Supplier = {
  id: string
  name: string
  aliases: string[]
  purchases: number
  paid: number
  payable: number
  overdue: number
  marginGenerated: number
  reliability: number
  quality: number
  terms: number
  leadTime: number
  priceTrend: number
  concentration: number
}

export type Product = {
  id: string
  name: string
  category: string
  supplierId: string
  revenue: number
  grossProfit: number
  inventory: number
  turnover: number
  priceChange: number
}

export type Expense = {
  id: string
  label: string
  amount: number
  budget: number
  kind: 'Fixed' | 'Variable'
  trend: number
}

export type Scope = { branch: BranchId; period: PeriodId }

export const demoEmployees: Employee[] = [
  { id: 'nino', name: 'Nino Beridze', role: 'Senior account manager', branch: 'tbilisi', level: 'Senior', nextLevel: 'Team Lead', progress: 78, revenue: 382000, grossProfit: 112000, collected: 307000, receivables: 75000, overdue: 28000, customers: 18, orders: 146, salary: 10800, bonus: 4200, commission: 5100, employerCost: 2100, trend: 8.4 },
  { id: 'giorgi', name: 'Giorgi Maisuradze', role: 'Account manager', branch: 'tbilisi', level: 'Specialist', nextLevel: 'Senior', progress: 64, revenue: 316000, grossProfit: 79000, collected: 252000, receivables: 64000, overdue: 35000, customers: 15, orders: 128, salary: 9000, bonus: 2700, commission: 4300, employerCost: 2000, trend: 11.2 },
  { id: 'mariam', name: 'Mariam Gelashvili', role: 'Key account manager', branch: 'batumi', level: 'Senior', nextLevel: 'Team Lead', progress: 86, revenue: 298000, grossProfit: 94000, collected: 281000, receivables: 17000, overdue: 4000, customers: 13, orders: 119, salary: 9600, bonus: 3500, commission: 3900, employerCost: 2000, trend: 6.1 },
  { id: 'luka', name: 'Luka Kapanadze', role: 'Account manager', branch: 'batumi', level: 'Specialist', nextLevel: 'Senior', progress: 51, revenue: 244000, grossProfit: 57000, collected: 210000, receivables: 34000, overdue: 17000, customers: 12, orders: 103, salary: 8100, bonus: 1800, commission: 2800, employerCost: 1300, trend: -2.8 }
]

export const demoCustomers: Customer[] = [
  { id: 'urban', name: 'Urban Market Group', segment: 'Strategic', branch: 'tbilisi', employeeId: 'nino', revenue: 286000, grossProfit: 78000, collected: 228000, receivables: 58000, overdue: 22000, orders: 82, averageDaysToPay: 31, costToServe: 12800, creditLimit: 70000, trend: 9.2 },
  { id: 'horeca', name: 'Horeca Partners', segment: 'High value / slow pay', branch: 'tbilisi', employeeId: 'giorgi', revenue: 252000, grossProfit: 57000, collected: 193000, receivables: 59000, overdue: 33000, orders: 75, averageDaysToPay: 47, costToServe: 16100, creditLimit: 60000, trend: 13.5 },
  { id: 'daily', name: 'Daily Basket', segment: 'Frequent and reliable', branch: 'tbilisi', employeeId: 'nino', revenue: 160000, grossProfit: 43000, collected: 138000, receivables: 22000, overdue: 8000, orders: 64, averageDaysToPay: 19, costToServe: 7900, creditLimit: 35000, trend: 4.1 },
  { id: 'black-sea', name: 'Black Sea Retail', segment: 'High margin', branch: 'batumi', employeeId: 'mariam', revenue: 214000, grossProfit: 72000, collected: 205000, receivables: 9000, overdue: 1000, orders: 71, averageDaysToPay: 12, costToServe: 8700, creditLimit: 42000, trend: 7.8 },
  { id: 'coastline', name: 'Coastline Hospitality', segment: 'Seasonal', branch: 'batumi', employeeId: 'luka', revenue: 174000, grossProfit: 39000, collected: 145000, receivables: 29000, overdue: 15000, orders: 55, averageDaysToPay: 36, costToServe: 11300, creditLimit: 32000, trend: -4.7 },
  { id: 'adjara', name: 'Adjara Foods', segment: 'Growth account', branch: 'batumi', employeeId: 'mariam', revenue: 154000, grossProfit: 53000, collected: 141000, receivables: 13000, overdue: 5000, orders: 49, averageDaysToPay: 21, costToServe: 6800, creditLimit: 28000, trend: 15.6 }
]

export const demoSuppliers: Supplier[] = [
  { id: 'caucasus', name: 'Caucasus Distribution', aliases: ['Caucasus Dist.', 'CD Georgia'], purchases: 238000, paid: 206000, payable: 32000, overdue: 6000, marginGenerated: 121000, reliability: 96, quality: 94, terms: 35, leadTime: 4, priceTrend: 3.2, concentration: 33.8 },
  { id: 'global', name: 'Global Brands Georgia', aliases: ['GBG LLC'], purchases: 194000, paid: 166000, payable: 28000, overdue: 9000, marginGenerated: 93000, reliability: 89, quality: 97, terms: 30, leadTime: 7, priceTrend: 7.6, concentration: 27.6 },
  { id: 'kartli', name: 'Kartli Foods', aliases: ['Kartli Trade', 'KF Wholesale'], purchases: 152000, paid: 135000, payable: 17000, overdue: 3000, marginGenerated: 75000, reliability: 93, quality: 91, terms: 28, leadTime: 3, priceTrend: 1.8, concentration: 21.6 },
  { id: 'black-sea-imports', name: 'Black Sea Imports', aliases: ['BSI Batumi'], purchases: 120000, paid: 105000, payable: 15000, overdue: 4000, marginGenerated: 53000, reliability: 82, quality: 88, terms: 21, leadTime: 11, priceTrend: 9.4, concentration: 17.0 }
]

export const demoProducts: Product[] = [
  { id: 'premium-beverages', name: 'Premium beverages', category: 'Beverages', supplierId: 'global', revenue: 294000, grossProfit: 91000, inventory: 68000, turnover: 5.8, priceChange: 6.4 },
  { id: 'craft-selection', name: 'Craft selection', category: 'Beverages', supplierId: 'caucasus', revenue: 268000, grossProfit: 86000, inventory: 52000, turnover: 6.7, priceChange: 2.1 },
  { id: 'grocery-core', name: 'Grocery core', category: 'Food', supplierId: 'kartli', revenue: 246000, grossProfit: 57000, inventory: 74000, turnover: 4.2, priceChange: 1.4 },
  { id: 'hospitality-supply', name: 'Hospitality supply', category: 'Food service', supplierId: 'black-sea-imports', revenue: 224000, grossProfit: 53000, inventory: 83000, turnover: 3.1, priceChange: 8.7 },
  { id: 'seasonal-range', name: 'Seasonal range', category: 'Seasonal', supplierId: 'caucasus', revenue: 208000, grossProfit: 55000, inventory: 96000, turnover: 2.4, priceChange: 4.9 }
]

export const demoExpenses: Expense[] = [
  { id: 'payroll', label: 'Payroll and employer cost', amount: 92000, budget: 90000, kind: 'Fixed', trend: 4.8 },
  { id: 'logistics', label: 'Logistics and delivery', amount: 47000, budget: 42000, kind: 'Variable', trend: 12.4 },
  { id: 'warehouse', label: 'Warehouse and rent', amount: 36000, budget: 36000, kind: 'Fixed', trend: 1.2 },
  { id: 'marketing', label: 'Marketing and promotion', amount: 23000, budget: 26000, kind: 'Variable', trend: -5.3 },
  { id: 'technology', label: 'Technology and banking', amount: 19000, budget: 18000, kind: 'Fixed', trend: 6.7 },
  { id: 'admin', label: 'Administration and other', amount: 16000, budget: 17000, kind: 'Variable', trend: 2.3 }
]

export const cashSeries = [
  { label: 'Apr', inflow: 320000, outflow: 277000, balance: 218000 },
  { label: 'May', inflow: 344000, outflow: 301000, balance: 261000 },
  { label: 'Jun', inflow: 386000, outflow: 337000, balance: 310000 },
  { label: 'Jul · forecast', inflow: 352000, outflow: 381000, balance: 281000 }
]

const periodFactor: Record<PeriodId, number> = { '30': 0.34, '90': 1, '180': 1.92 }
export const scaleMoney = (value: number, period: PeriodId) => Math.round(value * periodFactor[period])

export const employeeCost = (employee: Employee) => employee.salary + employee.bonus + employee.commission + employee.employerCost
export const employeeRoi = (employee: Employee) => (employee.grossProfit - employeeCost(employee)) / employeeCost(employee)
export const customerProfit = (customer: Customer) => customer.grossProfit - customer.costToServe
export const supplierScore = (supplier: Supplier) => Math.round(supplier.reliability * 0.35 + supplier.quality * 0.25 + Math.min(supplier.terms / 45 * 100, 100) * 0.2 + Math.max(0, 100 - supplier.priceTrend * 5) * 0.2)

export const scopedEmployees = (scope: Scope) => demoEmployees.filter((employee) => scope.branch === 'all' || employee.branch === scope.branch)
export const scopedCustomers = (scope: Scope) => demoCustomers.filter((customer) => scope.branch === 'all' || customer.branch === scope.branch)

export const executiveMetrics = (scope: Scope) => {
  const employees = scopedEmployees(scope)
  const revenue = employees.reduce((sum, item) => sum + item.revenue, 0)
  const grossProfit = employees.reduce((sum, item) => sum + item.grossProfit, 0)
  const collected = employees.reduce((sum, item) => sum + item.collected, 0)
  const receivables = employees.reduce((sum, item) => sum + item.receivables, 0)
  const overdue = employees.reduce((sum, item) => sum + item.overdue, 0)
  const branchShare = revenue / 1240000
  const purchases = 704000 * branchShare
  const supplierPayments = 612000 * branchShare
  const expenses = demoExpenses.reduce((sum, item) => sum + item.amount, 0) * branchShare
  const factor = periodFactor[scope.period]

  return {
    revenue: Math.round(revenue * factor),
    grossProfit: Math.round(grossProfit * factor),
    margin: revenue ? grossProfit / revenue : 0,
    collected: Math.round(collected * factor),
    receivables: Math.round(receivables * factor),
    overdue: Math.round(overdue * factor),
    purchases: Math.round(purchases * factor),
    supplierPayments: Math.round(supplierPayments * factor),
    expenses: Math.round(expenses * factor),
    netCash: Math.round((collected - supplierPayments - expenses) * factor),
    customers: scopedCustomers(scope).length,
    employees: employees.length,
    collectionRate: revenue ? collected / revenue : 0
  }
}

export const formatGel = (value: number, compact = false) => new Intl.NumberFormat('en', {
  style: 'currency', currency: 'GEL', maximumFractionDigits: 0, notation: compact ? 'compact' : 'standard'
}).format(value)

export const formatPercent = (value: number, fractionDigits = 1) => `${(value * 100).toFixed(fractionDigits)}%`
