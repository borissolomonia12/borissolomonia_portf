import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { AppRouter } from '../routing'
import ProjectsPage from './ProjectsPage'

afterEach(cleanup)

describe('My Systems page', () => {
  it('renders all nine ERP module categories and seven systems', () => {
    const { container } = render(<AppRouter><ProjectsPage /></AppRouter>)
    expect(screen.getByRole('heading', { level: 1, name: /My Systems/i })).toBeInTheDocument()
    expect(container.querySelectorAll('[data-module-id]')).toHaveLength(9)
    expect(container.querySelectorAll('[data-product-id]')).toHaveLength(7)
    ;['9T ERP', 'Tasty ERP', 'WaybillMCP', 'Optimo Sync', 'Order App', 'AI Booking Assistant', 'BachmannLogi'].forEach((name) => expect(screen.getByRole('heading', { name })).toBeInTheDocument())
    expect(screen.getByText(/WaybillMCP architecture visual \/ no browser dashboard/i)).toBeInTheDocument()
    expect(screen.getByText(/AI Booking Assistant architecture visual \/ no browser dashboard/i)).toBeInTheDocument()
  })

  it('uses one unique corresponding screen for each visual application', () => {
    const { container } = render(<AppRouter><ProjectsPage /></AppRouter>)
    const screens = [...container.querySelectorAll<HTMLImageElement>('[data-project-screen]')]
    expect(screens).toHaveLength(4)
    expect(new Set(screens.map((image) => image.src)).size).toBe(4)
    expect(screens.map((image) => image.dataset.projectScreen)).toEqual(['nine-t-erp', 'tasty-erp', 'optimo-sync', 'bachmann'])
    expect(container.querySelector('[data-product-id="nine-t-erp"] .finance-snapshot')).not.toBeInTheDocument()
    expect(container.querySelector('[data-product-id="nine-t-erp"] img[src="/projects/network/nine-t-erp.webp"]')).toBeInTheDocument()
    expect(container.querySelector('[data-product-id="bachmann"]')).toHaveTextContent('not a shipped ERP')
    expect(screen.getByRole('navigation', { name: 'Explore featured project demonstrations' })).toHaveTextContent('Brooks')
    screens.forEach((image) => { expect(image.getAttribute('loading')).toBe('lazy'); expect(Number(image.getAttribute('width'))).toBeGreaterThan(0); expect(Number(image.getAttribute('height'))).toBeGreaterThan(0) })
    ;['rsge', 'bog', 'tbc', 'wolt', 'glovo'].forEach((brand) => expect(container.querySelector(`[data-brand="${brand}"] img`)).toBeInTheDocument())
  })
  it('shows every client with a local logo', () => {
    const { container } = render(<AppRouter><ProjectsPage /></AppRouter>)
    const view = within(container)
    expect(view.getByRole('heading', { name: 'Clients who trust my work.' })).toBeInTheDocument()
    expect(container.querySelectorAll('[data-client-id]')).toHaveLength(3)
    ;['BeerCraft', 'Camora', 'Voulez Vous'].forEach((name) => expect(view.getByRole('img', { name: `${name} logo` })).toBeInTheDocument())
  })
})
