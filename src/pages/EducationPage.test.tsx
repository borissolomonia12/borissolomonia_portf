import { render, screen } from '@testing-library/react'
import { beforeAll, describe, expect, it, vi } from 'vitest'
import EducationPage from './EducationPage'

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', { writable: true, value: vi.fn().mockReturnValue({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn(), addListener: vi.fn(), removeListener: vi.fn() }) })
})

describe('Education page', () => {
  it('shows the corresponding logo for each university', () => {
    render(<EducationPage />)
    expect(screen.getByRole('img', { name: 'Free University logo' })).toHaveAttribute('src', '/images/Free_logo_ENG.png')
    expect(screen.getByRole('img', { name: 'Caucasus University logo' })).toHaveAttribute('src', '/images/CU-SiteLogo.png')
  })
})
