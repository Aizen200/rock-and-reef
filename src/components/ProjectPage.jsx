import { useEffect } from 'react'
import { projects, services, fleet, company } from '../data/site'
import { navigate } from '../router'

/**
 * Standalone page for one project, reached from the project tiles on the home
 * page at /projects/:id.  Redesigned with a sticky left sidebar (image + CTA)
 * and scrollable right-side content sections.
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
    <main className="rn pp-v2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema(p)) }}
      />

      {/* ── Top bar: breadcrumb + back link ── */}
      <div className="pp2-topbar">
        <div className="wrap pp2-topbar-inner">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/" hash="projects">Projects</Link>
            <span aria-hidden="true">/</span> {p.place.split(',')[0]}
          </p>
          <Link to="/" hash="projects" className="pp2-back">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
              <path d="M16 5H2M6 1L2 5l4 4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            All Projects
          </Link>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div className="wrap pp2-body">
        {/* LEFT: sticky sidebar */}
        <aside className="pp2-sidebar">
          <div className="pp2-sidebar-inner">
            <figure className="pp2-img">
              <img src={p.img} alt={p.title} width="1600" height="900" decoding="async" />
            </figure>

            <div className="pp2-cta-card">
              <p className="pp2-cta-label">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8 1l2.1 4.2L15 6l-3.5 3.4.8 4.6L8 11.5 3.7 14l.8-4.6L1 6l4.9-.8L8 1z" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                Marine Engineering Specialists
              </p>
              <h3 className="pp2-cta-heading">Discuss a similar project</h3>
              <p className="pp2-cta-sub">Depth · Deadline · Geology · Traffic constraints</p>
              <Link to="/" hash="contact" className="btn btn-primary pp2-cta-btn">
                Contact Us
              </Link>
            </div>
          </div>
        </aside>

        {/* RIGHT: scrollable content */}
        <div className="pp2-content">
          {/* Title block */}
          <div className="pp2-header">
            <p className="pp2-kicker">
              {svc[0] && <span>{svc[0].name}</span>}
              {p.year && <span>{p.year}</span>}
            </p>
            <h1 className="pp2-title">{p.title}</h1>
            <p className="pp2-place">
              <svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true">
                <path d="M7 17s6-5.2 6-10A6 6 0 001 7c0 4.8 6 10 6 10z" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              {p.place}
            </p>
          </div>

          {/* Project specifications card */}
          <div className="pp2-card">
            <h3 className="pp2-card-title">Project specifications</h3>
            <div className="pp2-spec-grid">
              <div className="pp2-spec-item">
                <span className="pp2-spec-label">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M4 7h6M7 4v6" stroke="currentColor" strokeWidth="1.3"/></svg>
                  Client
                </span>
                <span className="pp2-spec-value">{p.client}</span>
              </div>
              <div className="pp2-spec-item">
                <span className="pp2-spec-label">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.3"/><path d="M7 3v4l3 2" stroke="currentColor" strokeWidth="1.3"/></svg>
                  Year
                </span>
                <span className="pp2-spec-value">{p.year || '—'}</span>
              </div>
              {p.metrics.map((m) => (
                <div className="pp2-spec-item" key={m.k}>
                  <span className="pp2-spec-label">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M1 13V5l4-4 4 4v8" stroke="currentColor" strokeWidth="1.3"/><rect x="9" y="7" width="4" height="6" stroke="currentColor" strokeWidth="1.3"/></svg>
                    {m.v}
                  </span>
                  <span className="pp2-spec-value">{m.k}</span>
                </div>
              ))}
            </div>
            {svc.length > 0 && (
              <div className="pp2-spec-item pp2-spec-full">
                <span className="pp2-spec-label">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7a5 5 0 0110 0" stroke="currentColor" strokeWidth="1.3"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>
                  {svc.length > 1 ? 'Services' : 'Service'}
                </span>
                <span className="pp2-spec-value pp2-links">
                  {svc.map((s, i) => (
                    <span key={s.id}>
                      {i > 0 && ' · '}
                      <Link to={`/services/${s.id}`}>{s.name}</Link>
                    </span>
                  ))}
                </span>
              </div>
            )}
          </div>

          {/* Key highlights: metrics as pill tags */}
          {p.detail?.facts && (
            <div className="pp2-card">
              <h3 className="pp2-card-title">Key highlights</h3>
              <div className="pp2-pills">
                {p.detail.facts.map((f) => (
                  <span className="pp2-pill" key={f.k}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M5 7l2 2 3-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <b>{f.k}:</b> {f.v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* About / Overview */}
          {p.detail?.overview && (
            <div className="pp2-card">
              <h3 className="pp2-card-title">
                About <span className="pp2-title-accent">{p.title.split(',')[0]}</span>
              </h3>
              {p.detail.overview.map((t) => (
                <p className="pp2-text" key={t}>{t}</p>
              ))}
            </div>
          )}

          {/* Location */}
          {p.detail?.location && (
            <div className="pp2-card">
              <h3 className="pp2-card-title">Location & connectivity</h3>
              <p className="pp2-text">{p.detail.location.text}</p>
              <div className="pp2-pills">
                {p.detail.location.facts.map((f) => (
                  <span className="pp2-pill" key={f.k}>
                    {f.k}: <b>{f.v}</b>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Scope of work */}
          {p.detail?.scope && (
            <div className="pp2-card">
              <h3 className="pp2-card-title">Scope of work</h3>
              <p className="pp2-text">{p.detail.scope.intro}</p>
              <dl className="pp2-scope-table">
                {p.detail.scope.table.map((f) => (
                  <div key={f.k}>
                    <dt>{f.k}</dt>
                    <dd>{f.v}</dd>
                  </div>
                ))}
              </dl>
              <ul className="pp2-scope-list">
                {p.detail.scope.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Methodology */}
          {p.detail?.method && (
            <div className="pp2-card">
              <h3 className="pp2-card-title">Methodology & execution</h3>
              <div className="pp2-method-grid">
                {p.detail.method.map((m, i) => (
                  <article className="pp2-method-item" key={m.title}>
                    <span className="pp2-method-num">{String(i + 1).padStart(2, '0')}</span>
                    <h4>{m.title}</h4>
                    <p>{m.text}</p>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {p.detail?.challenges && (
            <div className="pp2-card">
              <h3 className="pp2-card-title">Key challenges</h3>
              <div className="pp2-challenges">
                {p.detail.challenges.map((c, i) => (
                  <article className="pp2-challenge" key={c.title}>
                    <div className="pp2-challenge-top">
                      <span className="pp2-method-num">{String(i + 1).padStart(2, '0')}</span>
                      <h4>{c.title}</h4>
                    </div>
                    <p className="pp2-challenge-problem">{c.problem}</p>
                    <div className="pp2-challenge-answer">
                      <span className="pp2-challenge-kicker">How we handled it</span>
                      <p>{c.answer}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Fleet on this project — Minimalist Table */}
          <div className="pp2-card" style={{ padding: '24px 32px' }}>
            <h3 className="pp2-card-title">Fleet on this project</h3>
            <div className="pp2-fleet-table">
              {vessels.map((v) => (
                <Link to={`/fleet/${v.id}`} className="pp2-fleet-row" key={v.id}>
                  <div className="pp2-fleet-cell name">{v.name}</div>
                  <div className="pp2-fleet-cell role">{v.role}</div>
                  <div className="pp2-fleet-cell arrow" aria-hidden="true">→</div>
                </Link>
              ))}
            </div>
            <Link to="/" hash="fleet" className="rn-link sm" style={{ marginTop: 24 }}>
              View full fleet
            </Link>
          </div>
          {/* Banner connecting to All Projects */}
          <div className="pp2-banner">
            <div className="pp2-banner-text">
              <span className="pp2-banner-kicker">PROJECT PORTFOLIO</span>
              <h3 className="pp2-card-title">Explore more dredging projects?</h3>
              <p className="pp2-text">
                Browse our complete list of past and ongoing marine engineering projects across India.
              </p>
            </div>
            <Link to="/" hash="projects" className="btn btn-primary pp2-banner-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ marginRight: 8, verticalAlign: '-3px' }}>
                <path d="M2 3h4v4H2V3zm6 0h6v2H8V3zm0 4h6v2H8V7zm0 4h6v2H8v-2zM2 9h4v4H2V9z" fill="currentColor"/>
              </svg>
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
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
