import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ProjectScreens from './ProjectScreens'
import { AppRouter } from '../routing'

afterEach(cleanup)

describe('project screen collection', () => {
  it('shows actual project captures instead of a standalone financial amount', () => {
    const { container } = render(<AppRouter><ProjectScreens /></AppRouter>)
    expect(screen.getAllByRole('tab')).toHaveLength(4)
    expect(screen.getByRole('tab', { name: /Optimo Sync/ })).toHaveAttribute('aria-selected', 'true')
    expect(container.querySelector('.screen-preview img')).toHaveAttribute('src', '/projects/network/optimo-sync.webp')
    expect(container).not.toHaveTextContent('36,000')
  })
  it('switches screens and clearly identifies Bachmann as a synthetic prototype', () => {
    const { container } = render(<AppRouter><ProjectScreens /></AppRouter>)
    fireEvent.click(screen.getByRole('tab', { name: /BachmannLogi/ }))
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Design prototype · synthetic data')
    expect(container.querySelector('.screen-preview img')).toHaveAttribute('src', '/projects/network/bachmann-today.webp')
    expect(screen.getByRole('link', { name: 'Explore BachmannLogi' })).toHaveAttribute('href', '/#bachmann')
  })
  it('supports arrow-key and Home/End selection with roving focus', () => {
    render(<AppRouter><ProjectScreens /></AppRouter>)
    const tabs = screen.getAllByRole('tab')
    fireEvent.keyDown(tabs[0], { key: 'ArrowRight' })
    expect(tabs[1]).toHaveFocus()
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    fireEvent.keyDown(tabs[1], { key: 'End' })
    expect(tabs[3]).toHaveFocus()
    fireEvent.keyDown(tabs[3], { key: 'Home' })
    expect(tabs[0]).toHaveFocus()
  })
  it('opens the selected screen in a native modal', () => {
    const showModal = vi.fn()
    Object.defineProperty(HTMLDialogElement.prototype, 'showModal', { configurable: true, value: showModal })
    render(<AppRouter><ProjectScreens /></AppRouter>)
    fireEvent.click(screen.getByRole('button', { name: 'Enlarge Optimo Sync screen' }))
    expect(showModal).toHaveBeenCalledOnce()
  })
})
