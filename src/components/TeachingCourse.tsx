import { javaCourse as course } from '../data/courses'

const TeachingCourse = () => (
  <section className="course-feature sales-shell" id={course.id} aria-labelledby="course-feature-title">
    <div className="course-feature__intro">
      <div className="course-feature__copy">
        <p className="data-label">{course.format} · by {course.author}</p>
        <h2 id="course-feature-title">{course.title}</h2>
        <p className="course-feature__promise">{course.promise}</p>
        <p className="course-feature__description">{course.description}</p>
        <div className="course-feature__actions"><a className="button-primary" href={course.startUrl} target="_blank" rel="noreferrer">Start the course <span aria-hidden="true">↗</span></a><a className="button-secondary" href={course.url} target="_blank" rel="noreferrer">See the full syllabus</a></div>
      </div>
      <div className="course-feature__evidence">
        <a className="course-cover" href={course.url} target="_blank" rel="noreferrer" aria-label={`${course.title} on ${course.platform.name}`}>
          <div className="course-cover__copy"><span className="course-cover__code" aria-hidden="true">{'class Main {'}</span><strong>{course.title}</strong><span>{course.facts.map(fact => `${fact.value} ${fact.label.toLowerCase()}`).slice(0, 2).join(' · ')}</span><img className="course-cover__platform" src={course.platform.logo} alt="" width="900" height="900" loading="lazy" decoding="async" /></div>
          <div className="course-cover__portrait" aria-hidden="true"><img src="/images/profile-photo.jpg" alt="" width="768" height="877" loading="lazy" decoding="async" /></div>
        </a>
        <dl className="course-facts">{course.facts.map(fact => <div key={fact.label} data-course-fact={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
      </div>
    </div>
    <ol className="course-modules" aria-label="What the course covers">
      {course.modules.map(module => <li key={module.index} data-course-module={module.index}><h3><span>{module.index}</span>{module.title}</h3><p>{module.summary}</p><ul>{module.topics.map(topic => <li key={topic}>{topic}</li>)}</ul></li>)}
    </ol>
  </section>
)

export default TeachingCourse
