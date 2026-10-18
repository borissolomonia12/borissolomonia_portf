import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import { AppRouter } from '../routing'
import WorkPage from './WorkPage'

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', { writable: true, value: vi.fn().mockReturnValue({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn(), addListener: vi.fn(), removeListener: vi.fn() }) })
  vi.stubGlobal('IntersectionObserver', class { observe() {} unobserve() {} disconnect() {} })
})

describe('Experience page', () => {
  it('keeps timeline content visible without waiting for scroll observers', () => {
    const { container } = render(<AppRouter><WorkPage /></AppRouter>)
    expect(screen.getByRole('heading', { name: 'Career Timeline' })).toBeInTheDocument()
    const firstYear = container.querySelector('[data-year="2010"]')
    expect(firstYear).toBeInTheDocument()
    expect(firstYear).not.toHaveStyle({ opacity: '0' })
  })
})
