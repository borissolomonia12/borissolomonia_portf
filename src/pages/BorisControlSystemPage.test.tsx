import { fireEvent, render, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AppRouter } from '../routing'
import BorisControlSystemPage from './BorisControlSystemPage'

const renderPage = () => render(<AppRouter><BorisControlSystemPage /></AppRouter>)

describe('Boris Control System showcase', () => {
  it('renders all connected analytics areas and labels example data clearly', () => {
    const { container } = renderPage()
    const view = within(container)
    expect(view.getByRole('heading', { level: 1, name: /Operations become management signals/i })).toBeInTheDocument()
    expect(view.getAllByText(/synthetic/i).length).toBeGreaterThan(0)
    ;['Company health in one scan.', 'Value creation includes collection.', 'Revenue is only the beginning.', 'Purchasing decisions reach the margin line.', 'Profit is not cash.', 'See what changed—and why.'].forEach((heading) => expect(view.getByRole('heading', { name: heading })).toBeInTheDocument())
    expect(view.getByText(/Gross profit generated − salary, bonus, commission and employer cost/i)).toBeInTheDocument()
    expect(view.getByRole('heading', { name: 'RS.ge, BOG, TBC, Wolt and Glovo—connected.' })).toBeInTheDocument()
    ;['rsge', 'bog', 'tbc', 'wolt', 'glovo'].forEach((brand) => {
      const badge = container.querySelector(`[data-brand="${brand}"]`)
      expect(badge).toBeInTheDocument()
      expect(badge?.querySelector('img')).toBeInTheDocument()
    })
  })

  it('updates the shared scope and filters employee and customer records by branch', () => {
    const { container } = renderPage()
    const view = within(container)
    fireEvent.change(view.getByLabelText('Branch'), { target: { value: 'batumi' } })
    expect(view.getByText('Showing 90 days · Batumi')).toBeInTheDocument()
    expect(within(container.querySelector('#employees')!).queryByText('Nino Beridze')).not.toBeInTheDocument()
    expect(within(container.querySelector('#employees')!).getAllByText('Mariam Gelashvili').length).toBeGreaterThan(0)
    expect(within(container.querySelector('#customers')!).queryByText('Urban Market Group')).not.toBeInTheDocument()
    expect(within(container.querySelector('#customers')!).getAllByText('Black Sea Retail').length).toBeGreaterThan(0)
  })

  it('opens an accessible connected-record drawer', () => {
    const { container } = renderPage()
    const view = within(container)
    fireEvent.click(view.getAllByRole('button', { name: /Nino Beridze/i })[0])
    const dialog = view.getByRole('dialog', { name: 'Nino Beridze' })
    expect(within(dialog).getByText('Employee ROI')).toBeInTheDocument()
    expect(within(dialog).getByText(/toward next level/i)).toBeInTheDocument()
    fireEvent.click(within(dialog).getByRole('button', { name: /Close record details/i }))
    expect(view.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
