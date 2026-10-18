import { createContext, useContext, useEffect, useMemo, useState, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react'

type ClientLocation = {
  pathname: string
  search: string
  hash: string
}

const readLocation = (): ClientLocation => ({
  pathname: window.location.pathname,
  search: window.location.search,
  hash: window.location.hash
})

const LocationContext = createContext<ClientLocation | null>(null)

export const AppRouter = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState(readLocation)

  useEffect(() => {
    const updateLocation = () => setLocation(readLocation())
    window.addEventListener('popstate', updateLocation)
    window.addEventListener('portfolio:navigate', updateLocation)

    return () => {
      window.removeEventListener('popstate', updateLocation)
      window.removeEventListener('portfolio:navigate', updateLocation)
    }
  }, [])

  const value = useMemo(() => location, [location])
  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}

export const useLocation = () => {
  const location = useContext(LocationContext)
  if (!location) throw new Error('useLocation must be used inside AppRouter')
  return location
}

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  to: string
}

export const Link = ({ to, onClick, target, children, ...props }: LinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      target === '_blank' ||
      !to.startsWith('/')
    ) return

    event.preventDefault()
    if (`${window.location.pathname}${window.location.search}${window.location.hash}` !== to) {
      window.history.pushState(null, '', to)
    }
    window.dispatchEvent(new Event('portfolio:navigate'))
  }

  return <a {...props} href={to} target={target} onClick={handleClick}>{children}</a>
}