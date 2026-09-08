import { projects, services } from '../data/site'

const serviceName = (id) => services.find((s) => s.id === id)?.name || id

export default function Projects({ onOpenService }) {
  return (
    <section id="projects" className="pad-y">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow">Proof of work</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-lede">
              Ports, terminals, offshore corridors and Himalayan reservoirs, each delivered with our
              own fleet and our own crews.
            </p>
          </div>
        </div>

        <div className="proj-grid reveal">
          {projects.map((p) => (
            <ProjectTile key={p.id} project={p} onOpenService={onOpenService} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Image-and-name tile that reveals the detail panel on hover or keyboard focus.
 * On touch / no-hover devices the detail panel is always shown instead, so the
 * information is never locked behind an interaction that cannot happen.
 */
function ProjectTile({ project: p, onOpenService }) {
  return (
    <article className="proj" id={`project-${p.id}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema(p)) }}
      />

      <button
        className="proj-tile"
        onClick={() => onOpenService(p.services[0], p.id)}
        aria-label={`${p.title}: open the ${serviceName(p.services[0])} story`}
      >
        <img className="proj-img" src={p.img} alt="" loading="lazy" decoding="async" />

        <span className="proj-face">
          {p.year !== '' && <span className="proj-year">{p.year}</span>}
          <span className="proj-name">{p.title}</span>
          <span className="proj-place">{p.place}</span>
        </span>

        <span className="proj-reveal">
          <span className="proj-place">{p.place}</span>
          <span className="proj-name">{p.title}</span>
          <span className="proj-summary">{p.blurb}</span>
          <span className="proj-metrics">
            {p.metrics.slice(0, 2).map((m) => (
              <span key={m.v}>
                {m.k}
                <small>{m.v}</small>
              </span>
            ))}
          </span>
          <span className="proj-more">
            {p.services.map(serviceName).join(' · ')}
            <span className="proj-more-link">
              Learn more <Arrow />
            </span>
          </span>
        </span>
      </button>
    </article>
  )
}

function Arrow() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

/** schema.org markup so project pages surface for "dredging contractor <place>" searches. */
function projectSchema(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: p.title,
    description: p.summary,
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
    ...(p.year !== '' ? { temporalCoverage: p.year } : {}),
  }
}
