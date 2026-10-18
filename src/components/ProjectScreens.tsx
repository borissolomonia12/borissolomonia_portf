import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { projectScreens } from '../data/projectScreens'
import { Link } from '../routing'

const ProjectScreens = () => {
  const [active, setActive] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const id = useId()
  const project = projectScreens[active]
  const selectWithKeys = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % projectScreens.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + projectScreens.length - 1) % projectScreens.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = projectScreens.length - 1
    else return
    event.preventDefault()
    setActive(next)
    document.getElementById(id + '-tab-' + next)?.focus()
  }

  return <div className="project-screens" aria-label="Implemented project screen collection">
    <div className="screen-collection-header"><span>Applications & design studies</span><span>Project screens ↗</span></div>
    <div className="screen-picker" role="tablist" aria-label="Choose a project screen">{projectScreens.map((item, index) => <button type="button" role="tab" key={item.id} id={id + '-tab-' + index} aria-selected={active === index} aria-controls={id + '-screen'} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={event => selectWithKeys(event, index)}><span>{item.name}</span><small>{item.id === 'bachmann' ? 'Design study' : 'Application'}</small></button>)}</div>
    <div role="tabpanel" id={id + '-screen'} aria-labelledby={id + '-tab-' + active} tabIndex={0}>
      <button type="button" className="screen-preview" aria-label={'Enlarge ' + project.name + ' screen'} onClick={() => dialog.current?.showModal()}><img key={project.asset.id} src={project.asset.src} alt={project.asset.alt} width={project.asset.width} height={project.asset.height} loading="eager" decoding="async" /><span>Enlarge screen <span aria-hidden="true">↗</span></span></button>
      <div className="screen-caption"><div><strong>{project.view}</strong><span>{project.status}</span></div><Link to={project.target} aria-label={'Explore ' + project.name}>Explore ↗</Link></div>
    </div>
    <dialog ref={dialog} className="screen-dialog" aria-labelledby={id + '-dialog-title'} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close() }}><div className="screen-dialog-header"><div><h2 id={id + '-dialog-title'}>{project.name} / {project.view}</h2><p>{project.status}</p></div><button type="button" autoFocus onClick={() => dialog.current?.close()}>Close screen <span aria-hidden="true">×</span></button></div><div className="screen-dialog-image"><img src={project.asset.src} alt={project.asset.alt} width={project.asset.width} height={project.asset.height} decoding="async" /></div><p>{project.description}</p></dialog>
  </div>
}

export default ProjectScreens
