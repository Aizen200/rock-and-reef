import { services, serviceDetail, projects, fleet, company } from '../data/site'
import { navigate } from '../router'
import { useCountUp } from '../hooks'

/**
 * A single service, laid out the way the reference site lays out a fleet class:
 * a text-only hero with a scroll prompt, an intro block, spec cards for the
 * vessels that do the work, the method in plain sections, then project tiles
 * and a closing "talk to us" block. Ours, in our type and colour.
 */
export default function ServiceDetailPage({ id }) {
  const service = services.find((s) => s.id === id)
  const detail = serviceDetail[id]
  if (!service || !detail) return null

  const related = projects.filter((p) => p.services.includes(id))
  const vesselIds = [...new Set(related.flatMap((p) => p.vessels))]
  const vessels = vesselIds.map((v) => fleet[v]).filter(Boolean)

  const toContact = (e) => {
    e.preventDefault()
    navigate('/', { hash: 'contact' })
  }

  return (
    <main className="page rn">
      {/* Hero: title only, with the scroll prompt. */}
      <section className="rn-hero">
        <img src={detail.heroImg} alt="" className="rn-hero-img" />
        <div className="wrap rn-hero-inner">
          <p className="crumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a>
            <span aria-hidden="true">/</span>
            <a href="/services" onClick={(e) => { e.preventDefault(); navigate('/services') }}>Services</a>
          </p>
          <h1 className="rn-title">{service.name}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="rn-intro" id="rn-intro">
        <div className="wrap rn-intro-grid">
          <h2>{detail.headline}</h2>
          <div className="rn-intro-copy">
            <p className="lead">{detail.intro}</p>
            {detail.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <a className="rn-link" href="/#contact" onClick={toContact}>
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Key facts as counter boxes; numeric ones count up on scroll. */}
      <section className="rn-facts">
        <div className="wrap">
          <ul className="rn-counters" aria-label="Key figures">
            {detail.facts.map((f) => (
              <Counter key={f.v} value={f.k} label={f.v} />
            ))}
          </ul>
        </div>
      </section>

      {/* Vessels: one spec card each, the reference's fleet-card pattern. */}
      {vessels.length > 0 && (
        <section className="rn-section">
          <div className="wrap">
            <h2 className="rn-h2">Fleet for {service.name.toLowerCase()}</h2>
            <div className="rn-cards">
              {vessels.map((f) => {
                const on = related.filter((p) => p.vessels.includes(f.id))
                return (
                  <article className="rn-card" key={f.id}>
                    <div className="rn-card-top">
                      <h3>{f.name}</h3>
                      <a className="rn-link sm" href="/capability-statement.pdf" download>
                        Specifications (PDF)
                      </a>
                    </div>
                    <div className="rn-card-shape">
                      <img src={f.img} alt={f.name} loading="lazy" decoding="async" />
                    </div>
                    <dl className="rn-card-spec">
                      <div>
                        <dt>Role</dt>
                        <dd>{f.role}</dd>
                      </div>
                      <div>
                        <dt>Class</dt>
                        <dd>{f.tier === 'dredger' ? 'Dredging plant' : 'Support vessel'}</dd>
                      </div>
                      {f.units && (
                        <div>
                          <dt>Units</dt>
                          <dd>{f.units.join(', ')}</dd>
                        </div>
                      )}
                      <div>
                        <dt>Deployed on</dt>
                        <dd>{on.map((p) => p.place.split(',')[0]).join(', ')}</dd>
                      </div>
                    </dl>
                    <p className="rn-card-text">{f.spec}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Method: the challenges, as a compact 2x2 grid of cards. */}
      <section className="rn-section rn-method">
        <div className="wrap">
          <div className="rn-method-head">
            <h2 className="rn-h2">Overcoming the marine environment</h2>
            <p className="rn-closing">{detail.closing}</p>
          </div>
          <div className="rn-method-grid">
            {detail.challenges.map((c, i) => (
              <article className="rn-method-card" key={c.title}>
                <div className="rn-method-card-top">
                  <span className="rn-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{c.title}</h3>
                </div>
                <p className="rn-method-problem">{c.problem}</p>
                <div className="rn-method-answer">
                  <span className="rn-method-kicker">How we handle it</span>
                  <ul>
                    {c.answer.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects: the same tall tiles with the spec-sheet hover as the home page. */}
      {related.length > 0 && (
        <section className="rn-section rn-projects">
          <div className="wrap">
            <div className="proj-head">
              <h2 className="rn-h2">Featured projects</h2>
              <a
                className="proj-seeall"
                href="/#projects"
                onClick={(e) => { e.preventDefault(); navigate('/', { hash: 'projects' }) }}
              >
                See all
              </a>
            </div>
            <div className={`rn-proj-grid n${Math.min(related.length, 4)}`}>
              {related.map((p) => (
                <article className="proj" key={p.id}>
                  <div className="proj-tile" role="group" aria-label={p.title}>
                    <img className="proj-img" src={p.img} alt="" loading="lazy" decoding="async" />
                    <span className="proj-face">
                      <span className="proj-rule" aria-hidden="true" />
                      <span className="proj-name">{p.title}</span>
                    </span>
                    <span className="proj-reveal">
                      <span className="proj-facts">
                        <span className="proj-purpose">
                          <b>Purpose:</b>
                          <span>{p.blurb}</span>
                        </span>
                        <span className="proj-row"><b>Location:</b><span>{p.place}</span></span>
                        <span className="proj-row"><b>Scope:</b><span>{p.metrics[0]?.k}</span></span>
                        <span className="proj-row"><b>Client:</b><span>{p.client}</span></span>
                        {p.year !== '' && (
                          <span className="proj-row"><b>Year:</b><span>{p.year}</span></span>
                        )}
                      </span>
                      <span className="proj-foot">
                        <span className="proj-rule" aria-hidden="true" />
                      </span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing */}
      <section className="rn-cta">
        <div className="wrap">
          <h2>Talk to us about your next project</h2>
          <p>
            Depth, deadline, geology, traffic constraints: send what you have and we will come back
            with a method and an indicative programme.
          </p>
          <div className="rn-cta-links">
            <a className="rn-link" href="/#contact" onClick={toContact}>Get in touch</a>
            <a className="rn-link" href={company.phoneHref}>{company.phone}</a>
          </div>
        </div>
      </section>
    </main>
  )
}

/** "1.45M m³" → animate 1.45, then print "M m³"; a word like "Rock" is shown as is. */
function parseFigure(value) {
  const m = String(value).match(/^([\d.,]+)(.*)$/)
  if (!m) return { number: null, suffix: value, decimals: 0 }
  const num = parseFloat(m[1].replace(/,/g, ''))
  return { number: num, suffix: m[2], decimals: (m[1].split('.')[1] || '').length }
}

function Counter({ value, label }) {
  const { number, suffix, decimals } = parseFigure(value)
  const [ref, current] = useCountUp(number ?? 0)
  return (
    <li className="rn-counter" ref={ref}>
      <span className="rn-counter-v">
        {number === null ? (
          <span className="rn-counter-word">{value}</span>
        ) : (
          <>
            {current.toFixed(decimals)}
            <span className="rn-counter-s">{suffix}</span>
          </>
        )}
      </span>
      <span className="rn-counter-l">{label}</span>
    </li>
  )
}
