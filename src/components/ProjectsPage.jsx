import { useState } from 'react'
import { projects, services } from '../data/site'
import { navigate } from '../router'

/**
 * Project index: a stated hero, a filter bar by service, then one reference
 * card per project laid out as a data sheet (purpose, location, scope, client,
 * year), each opening its own page.
 */
const PAGE = 6

// Only the services that actually have a project behind them become filters.
const FILTERS = services.filter((s) => projects.some((p) => p.services.includes(s.id)))

const go = (e, path, hash) => {
  e.preventDefault()
  navigate(path, hash ? { hash } : undefined)
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [shown, setShown] = useState(PAGE)

  const list = filter === 'all' ? projects : projects.filter((p) => p.services.includes(filter))
  const visible = list.slice(0, shown)

  const pick = (id) => {
    setFilter(id)
    setShown(PAGE)
  }

  return (
    <main className="page pj">
      <section className="page-hero has-img">
        <img className="page-hero-img" src="/img/fifth-oil-berth.jpg" alt="Marine works at a port berth" />
        <div className="wrap">
          <p className="crumb">
            <a href="/" onClick={(e) => go(e, '/')}>Home</a>
            <span aria-hidden="true">/</span> Projects
          </p>
          <h1 className="page-title">Explore our projects</h1>
          <p className="page-lede">
            Twenty five years of capital dredging, trenching and marine works across India&apos;s
            ports, coasts and reservoirs, delivered with a fleet we build and customise ourselves.
          </p>
        </div>
      </section>

      {/* Filter bar: one chip per service that has a reference behind it. */}
      <div className="pj-filters">
        <div className="wrap">
          <div className="pj-filter-row" role="tablist" aria-label="Filter projects by service">
            <button role="tab" aria-selected={filter === 'all'} className={filter === 'all' ? 'on' : ''} onClick={() => pick('all')}>
              All
            </button>
            {FILTERS.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={filter === s.id}
                className={filter === s.id ? 'on' : ''}
                onClick={() => pick(s.id)}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="pj-list-wrap">
        <div className="wrap">
          <div className="pj-intro">
            <h2>Featured projects across India</h2>
            <p>
              A selection of Rock and Reef&apos;s project references. Every entry names the client,
              the scope and the year, and opens to a full account of how the work was delivered.
            </p>
          </div>

          <ul className="pj-grid" aria-live="polite">
            {visible.map((p) => (
              <li className="pj-card" key={p.id}>
                <a
                  className="pj-card-img"
                  href={`/projects/${p.id}`}
                  onClick={(e) => go(e, `/projects/${p.id}`)}
                  aria-label={p.title}
                >
                  <img src={p.img} alt="" loading="lazy" decoding="async" />
                </a>
                <div className="pj-card-body">
                  <h3>{p.title}</h3>
                  <dl className="pj-sheet">
                    <div>
                      <dt>Purpose</dt>
                      <dd>{p.blurb}</dd>
                    </div>
                    <div>
                      <dt>Location</dt>
                      <dd>{p.place}</dd>
                    </div>
                    <div>
                      <dt>Scope</dt>
                      <dd>{p.metrics[0]?.k} {p.metrics[0]?.v?.toLowerCase()}</dd>
                    </div>
                    <div>
                      <dt>Client</dt>
                      <dd>{p.client}</dd>
                    </div>
                    <div>
                      <dt>Year</dt>
                      <dd>{p.year || 'Recent'}</dd>
                    </div>
                  </dl>
                  <a className="rn-link" href={`/projects/${p.id}`} onClick={(e) => go(e, `/projects/${p.id}`)}>
                    Explore project
                  </a>
                </div>
              </li>
            ))}
          </ul>

          {list.length === 0 && <p className="pj-empty">No projects under this service yet.</p>}

          {shown < list.length && (
            <div className="pj-more">
              <button className="btn btn-outline" onClick={() => setShown((n) => n + PAGE)}>
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="pj-cta">
        <div className="wrap">
          <h2>Talk to us about your next project</h2>
          <p>Depth, deadline, geology, traffic constraints: send us what you have and we will come back with a method and an indicative programme.</p>
          <a className="btn btn-primary" href="/#contact" onClick={(e) => go(e, '/', 'contact')}>
            Get in touch
          </a>
        </div>
      </section>
    </main>
  )
}
