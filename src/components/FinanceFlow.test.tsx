import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { AppRouter } from '../routing'
import FinanceFlow from './FinanceFlow'

afterEach(() => { cleanup(); vi.restoreAllMocks() })

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', { writable: true, value: vi.fn().mockReturnValue({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }) })
})

describe('FinanceFlow services summary', () => {
  it('anchors the visible connections to actual node bounds', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function (this: HTMLElement) {
      const stage = this.getAttribute('data-flow-stage')
      if (!stage) return new DOMRect(0, 0, 1000, 500)
      return stage === 'client-system' ? new DOMRect(20, 200, 150, 100) : new DOMRect(300, 100, 200, 200)
    })
    const { container } = render(<AppRouter><FinanceFlow /></AppRouter>)
    expect(container.querySelectorAll('[data-flow-connection]')).toHaveLength(8)
    expect(container.querySelector('[data-flow-connection="client-system:control-system"]')).toHaveAttribute('d', 'M170,250 C235,250 235,200 300,200')
    expect(screen.getByRole('region', { name: 'Interconnected finance implementations' })).toHaveAttribute('tabindex', '0')
  })
  it('lists Boris services and links the control system to its showcase', () => {
    render(<AppRouter><FinanceFlow /></AppRouter>)
    expect(screen.getByRole('heading', { name: 'Finance systems, connected end to end.' })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(5)
    expect(screen.getByText('Create and maintain financial ERP systems')).toBeInTheDocument()
    expect(screen.getByText('Integrate Wolt and Glovo in existing or new ERP systems')).toBeInTheDocument()
    expect(screen.getByText('Turn connected data into decision-ready analysis')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Open Boris Control System ERP analytics showcase' })).toHaveAttribute('href', '/boris-control-system')
  })
})
