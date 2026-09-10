import { useEffect } from 'react'
import { projects, services, fleet, company } from '../data/site'
import { navigate } from '../router'

/**
 * Standalone page for one project, reached from the project tiles on the home
 * page at /projects/:id. Same shell as ServicesPage: sand hero with a crumb,
 * then the body, then the shared dark call-to-action foot.
 */
export default function ProjectPage({ id }) {
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    const base = 'Rock and Reef Dredging'
    document.title = project ? `${project.title} — ${base}` : `Project not found — ${base}`
    return () => {
      document.title = `${base} — Capital Dredging & Marine Works in India`
    }
  }, [project])

  if (!project) return <NotFound />

  const p = project
  const svc = p.services.map((sid) => services.find((s) => s.id === sid)).filter(Boolean)
  const vessels = p.vessels.map((vid) => fleet[vid]).filter(Boolean)
  const related = projects.filter((o) => o.id !== p.id).slice(0, 3)

  return (
    <main className="rn">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema(p)) }}
      />

      {/* Split hero: copy on sand, the photo framed beside it. */}
      <section className="pp-hero">
        <div className="wrap pp-hero-grid">
          <div className="pp-hero-copy">
            <p className="crumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link to="/" hash="projects">Projects</Link>
              <span aria-hidden="true">/</span> {p.place.split(',')[0]}
            </p>
            <p className="pp-kicker">
              {svc[0] && <span>{svc[0].name}</span>}
              {p.year && <span>{p.year}</span>}
            </p>
            <h1 className="pp-title">{p.title}</h1>
            <p className="pp-lede">{p.blurb}</p>
            <p className="pp-place">
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
                <path d="M7 17s6-5.2 6-10A6 6 0 001 7c0 4.8 6 10 6 10z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              {p.place}
            </p>
            <div className="pp-hero-links">
              <Link to="/" hash="contact" className="btn btn-primary">
                Discuss a similar scope
              </Link>
              <Link to="/" hash="map" className="rn-link">
                See it on the map
              </Link>
            </div>
          </div>
          <figure className="pp-hero-fig">
            <img src={p.img} alt={p.title} width="1600" height="900" decoding="async" />
            <figcaption>
              <b>{p.metrics[0]?.k}</b>
              <span>{p.metrics[0]?.v}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Overview: heading left, story right. */}
      <section className="rn-intro">
        <div className="wrap rn-intro-grid">
          <h2>What we delivered</h2>
          <div className="rn-intro-copy">
            <p className="lead">{p.blurb}</p>
            <p>{p.summary}</p>
            <Link to="/" hash="map" className="rn-link">
              See it on the map
            </Link>
          </div>
        </div>
      </section>

      {/* Facts as a spec table, like the service pages. */}
      <section className="rn-facts">
        <div className="wrap">
          <dl className="rn-spec">
            <div className="rn-spec-row">
              <dt>Client</dt>
              <dd>{p.client}</dd>
            </div>
            <div className="rn-spec-row">
              <dt>Location</dt>
              <dd>{p.place}</dd>
            </div>
            {p.year && (
              <div className="rn-spec-row">
                <dt>Year</dt>
                <dd>{p.year}</dd>
              </div>
            )}
            {p.detail?.facts?.map((f) => (
              <div className="rn-spec-row" key={f.k}>
                <dt>{f.k}</dt>
                <dd className="sm">{f.v}</dd>
              </div>
            ))}
            <div className="rn-spec-row">
              <dt>{svc.length > 1 ? 'Services' : 'Service'}</dt>
              <dd className="pp-links">
                {svc.map((s, i) => (
                  <span key={s.id}>
                    {i > 0 && ' · '}
                    <Link to={`/services/${s.id}`}>{s.name}</Link>
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Long-form case study, only for projects that carry one. */}
      {p.detail && <CaseStudy d={p.detail} />}

      {/* Vessels that did the work. */}
      <section className="rn-section">
        <div className="wrap">
          <h2 className="rn-h2">Fleet on this project</h2>
          <ul className="pp-fleet">
            {vessels.map((v) => (
              <li key={v.id}>
                <Link to={`/fleet/${v.id}`} className="pp-vessel">
                  <span className="pp-vessel-shape">
                    <img src={v.img} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span className="pp-vessel-body">
                    <b>{v.name}</b>
                    <small>{v.role}</small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/" hash="fleet" className="rn-link sm" style={{ marginTop: 28 }}>
            The full fleet
          </Link>
        </div>
      </section>

      {/* Other projects, on the home tiles. */}
      <section className="rn-section rn-projects">
        <div className="wrap">
          <div className="proj-head">
            <h2 className="rn-h2">Other projects</h2>
            <Link to="/" hash="projects" className="rn-link sm">
              All projects
            </Link>
          </div>
          <div className={`rn-proj-grid n${Math.min(related.length, 4)}`}>
            {related.map((o) => (
              <article className="proj" key={o.id}>
                <Link to={`/projects/${o.id}`} className="proj-tile pp-tile">
                  <img className="proj-img" src={o.img} alt="" loading="lazy" decoding="async" />
                  <span className="proj-face">
                    <span className="proj-rule" aria-hidden="true" />
                    <span className="proj-name">{o.title}</span>
                  </span>
                  <span className="proj-reveal">
                    <span className="proj-facts">
                      <span className="proj-purpose">
                        <b>Purpose:</b>
                        <span>{o.blurb}</span>
                      </span>
                      <span className="proj-row"><b>Location:</b><span>{o.place}</span></span>
                      <span className="proj-row"><b>Client:</b><span>{o.client}</span></span>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rn-cta">
        <div className="wrap">
          <h2>Tell us about your seabed</h2>
          <p>
            Depth, deadline, geology, traffic constraints: send what you have and we will come back
            with a method and an indicative programme.
          </p>
          <div className="rn-cta-links">
            <Link to="/" hash="contact" className="rn-link">
              Discuss a similar scope
            </Link>
            <a className="rn-link" href={company.phoneHref}>
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function CaseStudy({ d }) {
  return (
    <>
      {d.overview && (
        <section className="rn-section pp-cs">
          <div className="wrap rn-intro-grid">
            <h2 className="rn-h2">Project overview</h2>
            <div className="rn-intro-copy">
              {d.overview.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {d.location && (
        <section className="rn-section pp-cs">
          <div className="wrap rn-intro-grid">
            <h2 className="rn-h2">Location</h2>
            <div className="rn-intro-copy">
              <p>{d.location.text}</p>
              <dl className="pp-kv">
                {d.location.facts.map((f) => (
                  <div key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      )}

      {d.scope && (
        <section className="rn-section pp-cs">
          <div className="wrap rn-intro-grid">
            <h2 className="rn-h2">Scope of work</h2>
            <div className="rn-intro-copy">
              <p>{d.scope.intro}</p>
              <dl className="pp-kv">
                {d.scope.table.map((f) => (
                  <div key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
              <ul className="pp-list">
                {d.scope.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {d.method && (
        <section className="rn-section rn-method">
          <div className="wrap">
            <h2 className="rn-h2">Methodology and execution</h2>
            <div className="rn-method-grid">
              {d.method.map((m, i) => (
                <article className="rn-method-card" key={m.title}>
                  <div className="rn-method-card-top">
                    <span className="rn-n">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{m.title}</h3>
                  </div>
                  <p className="rn-method-problem">{m.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {d.challenges && (
        <section className="rn-section rn-method">
          <div className="wrap">
            <h2 className="rn-h2">Key challenges and how they were managed</h2>
            <div className="rn-method-grid n3">
              {d.challenges.map((c, i) => (
                <article className="rn-method-card" key={c.title}>
                  <div className="rn-method-card-top">
                    <span className="rn-n">{String(i + 1).padStart(2, '0')}</span>
                    <h3>{c.title}</h3>
                  </div>
                  <p className="rn-method-problem">{c.problem}</p>
                  <div className="rn-method-answer">
                    <span className="rn-method-kicker">How we handled it</span>
                    <p className="rn-method-problem">{c.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

function NotFound() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/" hash="projects">Projects</Link>
          </p>
          <h1 className="page-title">Project not found</h1>
          <p className="page-lede">
            That link does not match any of our featured projects. Browse the full list instead.
          </p>
          <Link to="/" hash="projects" className="btn btn-dark" style={{ marginTop: 24 }}>
            Back to projects
          </Link>
        </div>
      </section>
    </main>
  )
}

/** Internal link that goes through the router instead of a full reload. */
function Link({ to, hash, className, style, children }) {
  const href = hash ? `${to}#${hash}` : to
  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={(e) => {
        e.preventDefault()
        navigate(to, hash ? { hash } : undefined)
      }}
    >
      {children}
    </a>
  )
}

function Arrow() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function projectSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: p.title,
    description: p.summary,
    url: `https://rockandreef.in/projects/${p.id}`,
    image: `https://rockandreef.in${p.img}`,
    location: {
      '@type': 'Place',
      name: p.place,
      address: { '@type': 'PostalAddress', addressRegion: p.region, addressCountry: 'IN' },
    },
    provider: {
      '@type': 'Organization',
      name: 'Rock and Reef Dredging Pvt. Ltd.',
      url: 'https://rockandreef.in/',
    },
    ...(p.year ? { temporalCoverage: p.year } : {}),
  }
}
