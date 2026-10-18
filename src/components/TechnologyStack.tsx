type SkillGroup = {
  stage: string
  title: string
  skills: { name: string; detail: string }[]
}

const skillGroups: SkillGroup[] = [
  { stage: '01', title: 'Business foundation', skills: [{ name: 'Finance', detail: 'Financial systems' }, { name: 'OM', detail: 'Operations management' }] },
  { stage: '02', title: 'Data tools', skills: [{ name: 'MS Excel', detail: 'Models & analysis' }, { name: 'SQL', detail: 'Relational data' }] },
  { stage: '03', title: 'Application engineering', skills: [{ name: 'Java', detail: 'Backend services' }, { name: 'Spring Boot', detail: 'Production APIs' }, { name: 'OAuth', detail: 'Secure access' }] },
  { stage: '04', title: 'Cloud & infrastructure', skills: [{ name: 'Docker', detail: 'Containers' }, { name: 'Kubernetes', detail: 'Orchestration' }, { name: 'GCP', detail: 'Cloud delivery' }] },
  { stage: '05', title: 'Emerging systems', skills: [{ name: 'Blockchain', detail: 'Distributed systems' }] }
]

const TechnologyStack = () => (
  <section id="technical-skills" className="technical-stack-section" aria-labelledby="technical-stack-title">
    <div className="sales-shell">
      <div className="section-heading section-heading--split">
        <div><p className="data-label">Technical toolkit</p><h2 id="technical-stack-title">From financial model to production cluster.</h2></div>
        <p>Finance and operations shape the questions. Data tools, application engineering, and infrastructure turn the answers into usable systems.</p>
      </div>
      <div className="technical-stack" role="list" aria-label="Technical skills by delivery stage">
        {skillGroups.map((group) => <article className="technical-stack__group" role="listitem" key={group.stage}><div className="technical-stack__stage"><span>{group.stage}</span><h3>{group.title}</h3></div><ul>{group.skills.map((skill) => <li data-technical-skill={skill.name} key={skill.name}><strong>{skill.name}</strong><span>{skill.detail}</span></li>)}</ul></article>)}
      </div>
    </div>
  </section>
)

export { skillGroups }
export default TechnologyStack
