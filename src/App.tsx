import { Component, Suspense, lazy, useEffect, type ErrorInfo, type ReactNode } from 'react'
import Navigation from './components/Navigation'
import SkipLink from './components/SkipLink'
import { AppRouter, Link, useLocation } from './routing'

const HomePage = lazy(() => import('./pages/HomePage'))
const WorkPage = lazy(() => import('./pages/WorkPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const EducationPage = lazy(() => import('./pages/EducationPage'))
const InstructionsPage = lazy(() => import('./pages/InstructionsPage'))
const BorisControlSystemPage = lazy(() => import('./pages/BorisControlSystemPage'))

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null }

  static getDerivedStateFromError(error: Error) { return { error } }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render failure', { error, componentStack: info.componentStack })
  }

  render() {
    if (!this.state.error) return this.props.children
    return <main className="grid min-h-screen place-items-center bg-slate-950 px-6 text-center text-slate-100"><div className="max-w-lg"><p className="font-data text-xs uppercase tracking-[0.14em] text-emerald-300">Render error</p><h1 className="mt-3 text-4xl font-bold">This view could not be loaded.</h1><p className="mt-4 text-slate-400">Refresh the page. If the problem continues, use the contact page.</p><button type="button" className="mt-6 rounded-lg bg-emerald-400 px-5 py-3 font-bold text-slate-950" onClick={() => window.location.assign('/')}>Return home</button></div></main>
  }
}

const RouteEffects = () => {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      document.getElementById('main-content')?.focus({ preventScroll: true })
      return
    }
    let targetId: string
    try { targetId = decodeURIComponent(location.hash.slice(1)) } catch { return }
    const revealTarget = () => {
      const target = document.getElementById(targetId)
      if (!target) return false
      target.scrollIntoView()
      return true
    }
    // Hash destinations can appear after a lazy route finishes loading.
    const observer = new MutationObserver(() => { if (revealTarget()) observer.disconnect() })
    if (!revealTarget()) observer.observe(document.getElementById('main-content') ?? document.body, { childList: true, subtree: true })
    const timeout = window.setTimeout(() => observer.disconnect(), 5000)
    document.getElementById('main-content')?.focus({ preventScroll: true })
    return () => { observer.disconnect(); window.clearTimeout(timeout) }
  }, [location])
  return null
}

const NotFoundPage = () => <section className="grid min-h-screen place-items-center bg-slate-950 px-6 text-center"><div><p className="font-data text-xs uppercase tracking-[0.14em] text-emerald-300">404 / Missing route</p><h1 className="mt-3 text-5xl font-bold text-white">There is no system here.</h1><p className="mt-4 text-slate-400">Return to the portfolio’s working routes.</p><Link className="button-primary mt-7" to="/">Return home</Link></div></section>

const RouteView = () => {
  const { pathname } = useLocation()
  switch (pathname.replace(/\/$/, '') || '/') {
    case '/': return <HomePage />
    case '/work': return <WorkPage />
    case '/projects': return <ProjectsPage />
    case '/boris-control-system': return <BorisControlSystemPage />
    case '/education': return <EducationPage />
    case '/contact': return <ContactPage />
    case '/instructions': return <InstructionsPage />
    default: return <NotFoundPage />
  }
}

function App() {
  return <ErrorBoundary><AppRouter><RouteEffects /><div className="min-h-screen bg-slate-950"><SkipLink /><Navigation /><main id="main-content" tabIndex={-1}><Suspense fallback={<div className="grid min-h-screen place-items-center bg-slate-950 font-data text-xs uppercase tracking-[0.14em] text-emerald-300">Loading system…</div>}><RouteView /></Suspense></main></div></AppRouter></ErrorBoundary>
}

export default App
