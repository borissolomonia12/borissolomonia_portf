import { describe, expect, it } from 'vitest'
import { customerProfit, demoCustomers, demoEmployees, demoExpenses, demoProducts, demoSuppliers, employeeCost, employeeRoi, executiveMetrics, supplierScore } from './controlSystem'

const sum = <T,>(items: T[], value: (item: T) => number) => items.reduce((total, item) => total + value(item), 0)

describe('Boris Control System demo model', () => {
  it('reconciles revenue, gross profit, collections, and receivables across connected entities', () => {
    const employeeRevenue = sum(demoEmployees, (item) => item.revenue)
    const employeeProfit = sum(demoEmployees, (item) => item.grossProfit)
    expect(employeeRevenue).toBe(1_240_000)
    expect(sum(demoCustomers, (item) => item.revenue)).toBe(employeeRevenue)
    expect(sum(demoProducts, (item) => item.revenue)).toBe(employeeRevenue)
    expect(sum(demoCustomers, (item) => item.grossProfit)).toBe(employeeProfit)
    expect(sum(demoProducts, (item) => item.grossProfit)).toBe(employeeProfit)
    demoEmployees.forEach((employee) => expect(employee.collected + employee.receivables).toBe(employee.revenue))
    demoCustomers.forEach((customer) => expect(customer.collected + customer.receivables).toBe(customer.revenue))
  })

  it('reconciles supplier payments and operating cash', () => {
    expect(sum(demoSuppliers, (item) => item.purchases)).toBe(704_000)
    expect(sum(demoSuppliers, (item) => item.paid)).toBe(612_000)
    expect(sum(demoSuppliers, (item) => item.payable)).toBe(92_000)
    expect(sum(demoExpenses, (item) => item.amount)).toBe(233_000)
    expect(executiveMetrics({ branch: 'all', period: '90' }).netCash).toBe(205_000)
  })

  it('uses explainable employee, customer, and supplier calculations', () => {
    const employee = demoEmployees[0]
    expect(employeeCost(employee)).toBe(22_200)
    expect(employeeRoi(employee)).toBeCloseTo((112_000 - 22_200) / 22_200)
    expect(customerProfit(demoCustomers[0])).toBe(65_200)
    expect(supplierScore(demoSuppliers[0])).toBe(89)
  })

  it('keeps branch and period filters proportional', () => {
    const all = executiveMetrics({ branch: 'all', period: '90' })
    const tbilisi = executiveMetrics({ branch: 'tbilisi', period: '90' })
    const thirtyDays = executiveMetrics({ branch: 'all', period: '30' })
    expect(tbilisi.revenue).toBe(698_000)
    expect(tbilisi.customers).toBe(3)
    expect(thirtyDays.revenue).toBe(Math.round(all.revenue * .34))
  })
})
