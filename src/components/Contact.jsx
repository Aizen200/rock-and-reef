import { useState } from 'react'
import { company, services } from '../data/site'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    // No backend on the static build — hand the enquiry to the mail client.
    const body = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      `Location: ${data.location}`,
      '',
      data.message,
    ].join('\n')
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Enquiry: ${data.service}`
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="section-dark pad-y">
      <div className="wrap contact-grid">
        <div className="contact-info reveal">
          <p className="eyebrow on-dark">Start a conversation</p>
          <h2 className="section-title">Tell us about your seabed</h2>
          <p className="section-lede">
            Depth, deadline, geology, traffic constraints: send us what you have and we will come
            back with a method and an indicative programme.
          </p>

          <ul className="contact-list">
            <li>
              <span className="k">Phone</span>
              <a className="v" href={company.phoneHref}>{company.phone}</a>
            </li>
            <li>
              <span className="k">Email</span>
              <a className="v" href={`mailto:${company.email}`}>{company.email}</a>
            </li>
            <li>
              <span className="k">Registered office</span>
              <span className="v">{company.address}</span>
            </li>
          </ul>

          <a className="cap-strip" href="/capability-statement.pdf" download>
            <span className="ic" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" />
              </svg>
            </span>
            <span>
              <span className="t">Capability Statement (PDF)</span>
              <span className="d">
                Fleet list, completed project summary and certifications, one document your
                procurement or tender team can circulate before a call.
              </span>
            </span>
          </a>
        </div>

        <div className="contact-panel reveal">
          {sent ? (
            <div className="form-ok">
              Thanks, your email client should have opened with the enquiry ready to send. If it
              didn&apos;t, write to <a href={`mailto:${company.email}`} style={{ color: 'var(--amber)' }}>{company.email}</a> or
              call {company.phone}.
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="two">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" autoComplete="organization" />
                </div>
              </div>
              <div className="two">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
              </div>
              <div className="two">
                <div className="field">
                  <label htmlFor="service">Service required</label>
                  <select id="service" name="service" defaultValue={services[0].name}>
                    {services.map((s) => (
                      <option key={s.id}>{s.name}</option>
                    ))}
                    <option>Other / not sure</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="location">Site location</label>
                  <input id="location" name="location" placeholder="Port, coast or reservoir" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Scope &amp; constraints</label>
                <textarea id="message" name="message" rows="5" placeholder="Volumes, depths, geology, programme dates…" />
              </div>
              <button className="btn btn-primary" type="submit">Send Enquiry</button>
              <p className="form-note">
                We reply to tender and procurement enquiries within one working day.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
