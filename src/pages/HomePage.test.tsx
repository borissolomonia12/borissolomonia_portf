import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { AppRouter } from '../routing'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import HomePage from './HomePage'
import FinanceFlow from '../components/FinanceFlow'
import NetworkBackground from '../components/NetworkBackground'

const setReducedMotion = (matches: boolean) => { vi.mocked(window.matchMedia).mockImplementation((query: string) => ({ matches: query.includes('prefers-reduced-motion') && matches, media: query, onchange: null, addEventListener: vi.fn(), removeEventListener: vi.fn(), addListener: vi.fn(), removeListener: vi.fn(), dispatchEvent: vi.fn() })) }

afterEach(cleanup)

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', { writable: true, value: vi.fn() }); setReducedMotion(false)
  vi.stubGlobal('IntersectionObserver', class { observe() {} unobserve() {} disconnect() {} })
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({ setTransform: vi.fn(), clearRect: vi.fn(), beginPath: vi.fn(), moveTo: vi.fn(), lineTo: vi.fn(), stroke: vi.fn(), arc: vi.fn(), fill: vi.fn() })
})

describe('HomePage connected finance story', () => {
  it('lets a visitor pause and resume the ambient network', () => {
    const { container } = render(<AppRouter><HomePage /></AppRouter>)
    fireEvent.click(screen.getByRole('button', { name: /Pause motion/i }))
    expect(container.querySelector('.network-background')).toHaveAttribute('data-motion-paused', 'true')
    fireEvent.click(screen.getByRole('button', { name: /Resume motion/i }))
    expect(container.querySelector('.network-background')).toHaveAttribute('data-motion-paused', 'false')
  })
  it('restores the complete original technical skill set', () => {
    const { container } = render(<AppRouter><HomePage /></AppRouter>)
    const skills = [...container.querySelectorAll('[data-technical-skill]')].map((item) => item.getAttribute('data-technical-skill'))
    expect(skills).toEqual(['Finance', 'OM', 'MS Excel', 'SQL', 'Java', 'Spring Boot', 'OAuth', 'Docker', 'Kubernetes', 'GCP', 'Blockchain'])
    expect(container.querySelector('#technical-skills')).toBeInTheDocument()
  })
  it('renders the exact connection sequence and both analysis outputs', () => {
    const { container } = render(<AppRouter><HomePage /></AppRouter>)
    expect([...container.querySelectorAll('[data-flow-stage]')].map((node) => node.getAttribute('data-flow-stage'))).toEqual(['client-system', 'control-system', 'rsge', 'banks', 'delivery', 'financial-analysis', 'big-data-analysis'])
    expect(container.querySelector('[data-flow-stage="financial-analysis"]')).toHaveTextContent('Financial Analysis')
    expect(container.querySelector('[data-flow-stage="big-data-analysis"]')).toHaveTextContent('Big-Data Analysis')
    expect(screen.getByAltText('Camora ERP purchase reconciliation interface')).toBeInTheDocument()
    expect(screen.getByAltText(/Boris Solomonia, financial manager/i)).toHaveAttribute('src', '/images/profile-photo.jpg')
  })
  it('gives every core integration label a local logo', () => {
    const { container } = render(<AppRouter><HomePage /></AppRouter>)
    ;['rsge', 'bog', 'tbc', 'wolt', 'glovo'].forEach((brand) => { const badges = container.querySelectorAll(`[data-brand="${brand}"]`); expect(badges.length).toBeGreaterThan(0); badges.forEach((badge) => expect(badge.querySelector('img')?.getAttribute('src')).toMatch(/^\/brands\/.+\.svg$/)) })
  })
  it('renders a static flow and does not animate canvas frames with reduced motion', async () => {
    setReducedMotion(true); const requestFrame = vi.spyOn(window, 'requestAnimationFrame'); const { container } = render(<><FinanceFlow /><NetworkBackground /></>)
    await waitFor(() => expect(container.querySelector('.finance-flow')).toHaveAttribute('data-reduced-motion', 'true'))
    expect(container.querySelector('.network-preview')).toHaveClass('network-preview--static'); requestFrame.mockRestore(); setReducedMotion(false)
  })
  it('leads with selected work before capabilities and keeps copy readable', () => {
    const { container } = render(<AppRouter><HomePage /></AppRouter>); expect(container.querySelectorAll('[data-network-section]')).toHaveLength(3)
    expect([...container.querySelectorAll('.featured-project')].map(item => item.id)).toEqual(['nine-t-erp', 'optimo', 'brooks', 'bachmann'])
    expect(container.querySelector('.hero-evidence .finance-snapshot')).not.toBeInTheDocument()
    expect(container.querySelector('.hero-evidence .project-screens')).toBeInTheDocument()
    expect(container.querySelector('#implementation-network details')).not.toBeInTheDocument()
    expect(container.querySelectorAll('[data-flow-connection]')).toHaveLength(8)
    expect(container.querySelector('#selected-work')!.compareDocumentPosition(container.querySelector('#technical-skills')!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    container.querySelectorAll<HTMLImageElement>('.case-study__visual>img').forEach((image) => { expect(image.getAttribute('loading')).toBe('lazy'); expect(Number(image.getAttribute('width'))).toBeGreaterThan(0); expect(Number(image.getAttribute('height'))).toBeGreaterThan(0) })
    expect(container.textContent).not.toMatch(/Ã|Â|â€”/)
  })
  it('presents the Java course after selected work, with the published facts and Bitcamp links', () => {
    const { container } = render(<AppRouter><HomePage /></AppRouter>)
    const course = container.querySelector('#java-course')!
    expect(course).toHaveTextContent('by Boris Solomonia')
    expect([...course.querySelectorAll('[data-course-fact]')].map(fact => fact.textContent)).toEqual(['Chapters21', 'Lessons267', 'Videos265', 'LanguageGeorgian'])
    expect(course.querySelectorAll('[data-course-module]')).toHaveLength(6)
    course.querySelectorAll('a').forEach(link => { expect(link.getAttribute('href')).toMatch(/^https:\/\/www\.bitcamp\.ge\/courses\/java/); expect(link).toHaveAttribute('rel', 'noreferrer') })
    expect(container.querySelector('#selected-work')!.compareDocumentPosition(course) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(container.querySelectorAll('[data-network-section]')).toHaveLength(3)
  })
  it('follows the aihero layout: announcement, hero proof row, visitor routes and a logo wall', () => {
    const { container } = render(<AppRouter><HomePage /></AppRouter>)
    expect(container.querySelector('.hero-announcement')).toHaveAttribute('href', '/#java-course')
    expect([...container.querySelectorAll('[data-hero-stat] dd')].map(stat => stat.textContent)).toEqual(['60+', '7', '267'])
    expect([...container.querySelectorAll('[data-visitor-route]')].map(route => route.getAttribute('data-visitor-route'))).toEqual(['Hiring', 'Automate finance', 'Learn Java'])
    container.querySelectorAll<HTMLAnchorElement>('#start-here a').forEach(link => { const href = link.getAttribute('href')!; expect(href.startsWith('/') || href.startsWith('https://www.bitcamp.ge/')).toBe(true); if (link.target === '_blank') expect(link).toHaveAttribute('rel', 'noreferrer') })
    container.querySelectorAll<HTMLImageElement>('.proof-logos img').forEach(image => { expect(image.alt).not.toBe(''); expect(Number(image.getAttribute('width'))).toBeGreaterThan(0) })
    expect(container.querySelector('#implementation-network')!.compareDocumentPosition(container.querySelector('#start-here')!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(container.querySelector('#implementation-network .finance-flow')).toBeInTheDocument()
  })
})
