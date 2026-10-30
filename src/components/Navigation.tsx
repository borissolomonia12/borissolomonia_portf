import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, useLocation } from '../routing'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'My Systems' },
  { path: '/#technical-skills', label: 'Skills' },
  { path: '/#java-course', label: 'Course' },
  { path: '/work', label: 'Experience' },
  { path: '/education', label: 'Education' },
  { path: '/contact', label: 'Contact' }
]

const Navigation = () => {
  const location = useLocation()
  const reducedMotion = useReducedMotion()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const navLink = (path: string, label: string, mobile = false) => {
    const active = path.includes('#')
      ? `${location.pathname}${location.hash}` === path
      : location.pathname === path
    return (
      <Link
        key={path}
        to={path}
        aria-current={active ? 'page' : undefined}
        className={
          (mobile ? 'block rounded-lg px-4 py-3 ' : 'rounded-md px-3 py-2 ') +
          'font-data text-xs uppercase tracking-[0.11em] transition-colors ' +
          (active
            ? 'bg-emerald-400/10 text-emerald-300'
            : 'text-slate-400 hover:bg-slate-800/70 hover:text-white')
        }
      >
        {label}
      </Link>
    )
  }

  return (
    <motion.nav
      initial={reducedMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/82 backdrop-blur-xl"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Boris Solomonia home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-emerald-400/30 bg-emerald-400/10 font-data text-xs font-bold text-emerald-300">
            BS
          </span>
          <span className="min-w-0 leading-tight">
            <strong className="block truncate text-sm font-bold text-slate-100">Boris Solomonia</strong>
            <span className="block truncate font-data text-[10px] uppercase tracking-[0.12em] text-slate-500">
              Finance + engineering
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => navLink(item.path, item.label))}
          <Link
            to="/contact"
            className="ml-3 rounded-lg border border-emerald-400 bg-emerald-400 px-4 py-2 text-xs font-extrabold text-slate-950 transition-colors hover:bg-emerald-300"
          >
            Discuss a role
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-slate-700 text-slate-200 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="space-y-1.5">
            <span className={'block h-px w-5 bg-current transition-transform ' + (isMenuOpen ? 'translate-y-[7px] rotate-45' : '')} />
            <span className={'block h-px w-5 bg-current transition-opacity ' + (isMenuOpen ? 'opacity-0' : '')} />
            <span className={'block h-px w-5 bg-current transition-transform ' + (isMenuOpen ? '-translate-y-[7px] -rotate-45' : '')} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={reducedMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
            className="border-t border-slate-800 bg-slate-950 px-4 py-4 lg:hidden"
          >
            <div className="space-y-1">
              {navItems.map((item) => navLink(item.path, item.label, true))}
              <Link
                to="/contact"
                className="mt-3 block rounded-lg bg-emerald-400 px-4 py-3 text-center text-sm font-extrabold text-slate-950"
              >
                Discuss a role
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
