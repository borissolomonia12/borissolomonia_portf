import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  workflow: ''
}

const ContactPage = () => {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('')

  const updateField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const subject = 'Role / systems conversation — ' + (form.company.trim() || form.name.trim())
    const body = [
      'Name: ' + form.name.trim(),
      'Email: ' + form.email.trim(),
      'Company: ' + (form.company.trim() || 'Not provided'),
      '',
      'Role or system to discuss:',
      form.workflow.trim()
    ].join('\n')

    setStatus('Opening your email app with a prepared message. Review it, then press Send.')
    window.location.href =
      'mailto:borissolomonia@gmail.com?subject=' +
      encodeURIComponent(subject) +
      '&body=' +
      encodeURIComponent(body)
  }

  return (
    <div className="contact-page min-h-screen bg-slate-950 px-5 pb-24 pt-32 text-slate-100">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <section aria-labelledby="contact-title">
          <p className="data-label">Finance judgment + engineering</p>
          <h1 id="contact-title" className="text-5xl font-extrabold tracking-[-0.05em] text-white md:text-7xl">
            Let’s build the next system.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
            I’m interested in roles where understanding a business and building its software
            belong together. Tell me about the team, the problem, and what you want to make possible.
          </p>

          <dl className="mt-10 grid gap-5 border-t border-slate-800 pt-8">
            <div>
              <dt className="font-data text-xs uppercase tracking-[0.12em] text-slate-500">Best fit</dt>
              <dd className="mt-1 text-slate-200">Building systems across finance, full-stack engineering, and operational automation</dd>
            </div>
            <div>
              <dt className="font-data text-xs uppercase tracking-[0.12em] text-slate-500">Direct email</dt>
              <dd className="mt-1">
                <a className="text-emerald-300 hover:text-emerald-200" href="mailto:borissolomonia@gmail.com">
                  borissolomonia@gmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-data text-xs uppercase tracking-[0.12em] text-slate-500">Network</dt>
              <dd className="mt-2 flex gap-4">
                <a className="text-blue-300 hover:text-white" href="https://www.linkedin.com/in/boris-solomonia-mba-245b4855/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="text-blue-300 hover:text-white" href="https://github.com/BorisSolomonia" target="_blank" rel="noreferrer">GitHub</a>
              </dd>
            </div>
          </dl>
          <a className="contact-resume" href="/files/CV/Boris_Solomonia_Resume_19062026.pdf" target="_blank" rel="noreferrer">View résumé ↗</a>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-black/20 md:p-9" aria-labelledby="contact-form-title">
          <p className="font-data text-xs uppercase tracking-[0.12em] text-emerald-300">01 / Context</p>
          <h2 id="contact-form-title" className="mt-3 text-3xl font-bold text-white">Prepare the first conversation.</h2>
          <p className="mt-3 text-sm text-slate-400">Submitting opens your email app. Nothing is silently sent or stored.</p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name
                <input required autoComplete="name" name="name" value={form.name} onChange={updateField} className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-600" placeholder="Boris Solomonia" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email
                <input required autoComplete="email" spellCheck={false} type="email" name="email" value={form.email} onChange={updateField} className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-600" placeholder="name@company.com" />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Company
              <input autoComplete="organization" name="company" value={form.company} onChange={updateField} className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-600" placeholder="Company or operating team" />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              What role or system would you like to discuss?
              <textarea required name="workflow" rows={7} value={form.workflow} onChange={updateField} className="resize-y rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-600" placeholder="The team, the opportunity, and the problem we would work on…" />
            </label>

            <button type="submit" className="button-primary w-full sm:w-auto">Open prepared email</button>
            <p className="min-h-6 text-sm text-emerald-300" role="status" aria-live="polite">{status}</p>
          </form>
        </section>
      </div>
    </div>
  )
}

export default ContactPage
