import { useEffect, useMemo, useRef, useState } from 'react'
import { caseStudies } from '../data/caseStudies'

type NodePoint = {
  x: number
  y: number
  radius: number
  phase: number
  accent: 'emerald' | 'sapphire' | 'muted'
}

type Edge = {
  from: number
  to: number
}

const colors = {
  emerald: '216, 137, 77',
  sapphire: '45, 183, 163',
  muted: '104, 143, 139'
}

const createNetwork = (width: number, height: number) => {
  const count = width < 768 ? 24 : 44
  const nodes: NodePoint[] = Array.from({ length: count }, (_, index) => ({
    x: ((index * 73) % 101) / 100 * width,
    y: ((index * 47 + 13) % 97) / 96 * height,
    radius: index % 7 === 0 ? 2.4 : 1.3,
    phase: index * 0.63,
    accent: index % 9 === 0 ? 'emerald' : index % 5 === 0 ? 'sapphire' : 'muted'
  }))

  const edges: Edge[] = []
  nodes.forEach((node, index) => {
    const nearest = nodes
      .map((candidate, candidateIndex) => ({
        candidateIndex,
        distance: Math.hypot(node.x - candidate.x, node.y - candidate.y)
      }))
      .filter(({ candidateIndex }) => candidateIndex > index)
      .sort((left, right) => left.distance - right.distance)
      .slice(0, width < 768 ? 1 : 2)

    nearest.forEach(({ candidateIndex }) => edges.push({ from: index, to: candidateIndex }))
  })

  return { nodes, edges }
}

const getReducedMotionPreference = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const NetworkBackground = ({ paused = false }: { paused?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeId, setActiveId] = useState(caseStudies[0].id)
  const [reducedMotion, setReducedMotion] = useState(getReducedMotionPreference)
  const staticMotion = reducedMotion || paused
  const activeCase = useMemo(
    () => caseStudies.find((item) => item.id === activeId) ?? caseStudies[0],
    [activeId]
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-network-section]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0]
        const sectionId = visible?.target.getAttribute('data-network-section')
        if (sectionId) setActiveId(sectionId)
      },
      { rootMargin: '-22% 0px -35%', threshold: [0.2, 0.45, 0.7] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    let frameId = 0
    let network = createNetwork(window.innerWidth, window.innerHeight)
    let width = window.innerWidth
    let height = window.innerHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let isVisible = document.visibilityState === 'visible'
    const activeIndex = Math.max(0, caseStudies.findIndex((item) => item.id === activeId))

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      network = createNetwork(width, height)
    }

    const render = (time = 0) => {
      context.clearRect(0, 0, width, height)
      const pulse = staticMotion ? 0 : Math.sin(time * 0.001) * 0.12
      const anchorX = width < 768 ? width * 0.78 : activeIndex % 2 === 0 ? width * 0.78 : width * 0.22
      const anchorY = height * (0.26 + activeIndex * 0.08)

      network.edges.forEach((edge) => {
        const from = network.nodes[edge.from]
        const to = network.nodes[edge.to]
        context.beginPath()
        context.moveTo(from.x, from.y)
        context.lineTo(to.x, to.y)
        context.strokeStyle = 'rgba(45, 183, 163, 0.10)'
        context.lineWidth = 0.7
        context.stroke()
      })

      network.nodes.forEach((node, index) => {
        const drift = staticMotion ? 0 : Math.sin(time * 0.00035 + node.phase) * 4
        const nodeX = node.x + drift
        const nodeY = node.y + drift * 0.5
        const color = colors[node.accent]

        context.beginPath()
        context.arc(nodeX, nodeY, node.radius + pulse, 0, Math.PI * 2)
        context.fillStyle = 'rgba(' + color + ', ' + (node.accent === 'muted' ? '0.32' : '0.72') + ')'
        context.fill()

        if (index % 8 === activeIndex % 8) {
          context.beginPath()
          context.moveTo(nodeX, nodeY)
          context.lineTo(anchorX, anchorY)
          context.strokeStyle = index % 2 === 0
            ? 'rgba(216, 137, 77, 0.16)'
            : 'rgba(45, 183, 163, 0.14)'
          context.lineWidth = 0.8
          context.stroke()
        }
      })

      context.beginPath()
      context.arc(anchorX, anchorY, 4.5 + pulse * 4, 0, Math.PI * 2)
      context.fillStyle = 'rgba(216, 137, 77, 0.9)'
      context.fill()

      if (!staticMotion && isVisible) frameId = window.requestAnimationFrame(render)
    }

    const handleVisibility = () => {
      isVisible = document.visibilityState === 'visible'
      window.cancelAnimationFrame(frameId)
      if (isVisible && !staticMotion) {
        window.cancelAnimationFrame(frameId)
        frameId = window.requestAnimationFrame(render)
      }
    }

    resize()
    render()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [activeId, staticMotion])

  return (
    <div className="network-background" aria-hidden="true" data-motion-paused={staticMotion ? 'true' : 'false'}>
      <canvas ref={canvasRef} className="network-canvas" />
      <div
        key={activeCase.id}
        className={'network-preview ' + (staticMotion ? 'network-preview--static' : '')}
      >
        <img
          src={activeCase.image.src}
          alt=""
          width={activeCase.image.width}
          height={activeCase.image.height}
          decoding="async"
        />
        <span>{activeCase.integrations.join(' · ')}</span>
      </div>
    </div>
  )
}

export default NetworkBackground
