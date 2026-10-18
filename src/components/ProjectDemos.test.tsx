import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import FinanceTrace from './FinanceTrace'
import OptimoDemo from './OptimoDemo'
import BrooksDemo from './BrooksDemo'
import { exampleCost, exampleProfit, financeExample } from '../data/demoExamples'

afterEach(cleanup)

describe('9T fictional financial review', () => {
  it('reconciles source costs and preserves the reported figure when a review is recorded', () => {
    expect(exampleCost).toBe(84_000)
    expect(exampleProfit + exampleCost).toBe(financeExample.revenue)
    render(<FinanceTrace />)
    fireEvent.click(screen.getByRole('button', { name: 'Source postings' }))
    expect(screen.getByRole('table')).toHaveTextContent('DEMO-104')
    expect(screen.getByRole('table')).toHaveTextContent('GEL 84,000')
    fireEvent.click(screen.getByRole('button', { name: 'Review decision' }))
    fireEvent.change(screen.getByLabelText('Reason for the decision'), { target: { value: 'Ask accounting to verify the purchase classification.' } })
    fireEvent.click(screen.getByRole('button', { name: 'Record review decision' }))
    expect(screen.getByRole('status')).toHaveTextContent('Ask accounting to verify the purchase classification.')
    expect(screen.getByRole('status')).toHaveTextContent('does not correct the accounting books')
    expect(screen.getByTestId('reported-profit')).toHaveTextContent('GEL 36,000')
    fireEvent.click(screen.getByRole('button', { name: 'Reset example' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Reported figure' })).toHaveAttribute('aria-pressed', 'true')
  })
  it('does not record an empty explanation', () => {
    render(<FinanceTrace />)
    fireEvent.click(screen.getByRole('button', { name: 'Review decision' }))
    fireEvent.change(screen.getByLabelText('Reason for the decision'), { target: { value: '   ' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Record review decision' }).closest('form')!)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveTextContent('Add a reason before recording the review.')
    expect(screen.getByLabelText('Reason for the decision')).toHaveFocus()
  })
})

describe('Optimo fictional sync', () => {
  it('keeps a failed destination unchanged until retry, and ignores replay', () => {
    const { container } = render(<OptimoDemo />)
    fireEvent.change(screen.getByLabelText('Available units'), { target: { value: '32' } })
    fireEvent.click(screen.getByRole('button', { name: /Preview stock change/i }))
    expect(screen.queryByRole('button', { name: /Run example sync/i })).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Resolve Glovo mapping' }))
    fireEvent.click(screen.getByRole('button', { name: /Run example sync/i }))
    const destinations = container.querySelectorAll('.sync-destination')
    expect(destinations[0].querySelector('strong')).toHaveTextContent('32')
    expect(destinations[1].querySelector('strong')).toHaveTextContent('12')
    expect(within(destinations[1] as HTMLElement).getByText('Pending · request failed')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /Retry pending update/i }))
    expect(destinations[1].querySelector('strong')).toHaveTextContent('32')
    fireEvent.click(screen.getByRole('button', { name: 'Replay last event' }))
    expect(screen.getByRole('status')).toHaveTextContent('Duplicate event ignored')
    expect(destinations[1].querySelector('strong')).toHaveTextContent('32')
    fireEvent.click(screen.getByRole('button', { name: 'Reset example' }))
    expect(destinations[0].querySelector('strong')).toHaveTextContent('12')
  })
  it('rejects negative and fractional stock, and accepts zero', () => {
    render(<OptimoDemo />)
    fireEvent.change(screen.getByLabelText('Available units'), { target: { value: '-1' } })
    expect(screen.getByRole('button', { name: /Preview stock change/i })).toBeDisabled()
    fireEvent.change(screen.getByLabelText('Available units'), { target: { value: '3.5' } })
    expect(screen.getByRole('button', { name: /Preview stock change/i })).toBeDisabled()
    fireEvent.change(screen.getByLabelText('Available units'), { target: { value: '0' } })
    expect(screen.getByRole('button', { name: /Preview stock change/i })).toBeEnabled()
  })
})

describe('Brooks fictional memory', () => {
  it('reveals the image after simulated arrival and removes it on reset', () => {
    render(<BrooksDemo />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /Open the invitation/i }))
    expect(screen.getByRole('status')).toHaveTextContent('Memory closed')
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /Simulate arrival/i }))
    const photo = screen.getByRole('img', { name: /AI-generated fictional courtyard/i })
    expect(photo).toHaveAttribute('loading', 'lazy')
    expect(Number(photo.getAttribute('width'))).toBeGreaterThan(0)
    expect(screen.getByRole('status')).toHaveTextContent('simulated presence')
    fireEvent.click(screen.getByRole('button', { name: /Close & reset/i }))
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
