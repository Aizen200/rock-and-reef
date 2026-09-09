import { useRef } from 'react'
import { projects, services } from '../data/site'
import { scrollToId } from '../hooks'

const serviceName = (id) => services.find((s) => s.id === id)?.name || id

export default function Projects({ onOpenService }) {
  const trackRef = useRef(null)

  // Advance by exactly one card, whatever the current breakpoint's card width is.
  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild
    const step = card ? card.getBoundingClientRect().width + 20 : track.clientWidth
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="pad-y">
      <div className="wrap">
        <div className="proj-head reveal">
          <div className="proj-head-copy">
            <h2 className="section-title">Featured Projects</h2>
            <a
              className="proj-seeall"
              href="#map"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('map')
              }}
            >
              See all
            </a>
          </div>

          <div className="proj-nav">
            <button
              className="proj-arrow"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous projects"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <path d="M18 6H2M6 1L1 6l5 5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
            <button
              className="proj-arrow next"
              onClick={() => scrollByCard(1)}
              aria-label="Next projects"
            >
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                <path d="M0 6h16M12 1l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="proj-carousel reveal">
          <div className="proj-track" ref={trackRef}>
            {projects.map((p) => (
              <ProjectTile key={p.id} project={p} onOpenService={onOpenService} />
            ))}
          </div>
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
          <span className="proj-rule" aria-hidden="true" />
          <span className="proj-name">{p.title}</span>
        </span>

        <span className="proj-reveal">
          <span className="proj-facts">
            <span className="proj-purpose">
              <b>Purpose:</b>
              <span>{p.blurb}</span>
            </span>
            <span className="proj-row">
              <b>Location:</b>
              <span>{p.place}</span>
            </span>
            <span className="proj-row">
              <b>Scope:</b>
              <span>{p.metrics[0]?.k}</span>
            </span>
            <span className="proj-row">
              <b>Client:</b>
              <span>{p.client}</span>
            </span>
            {p.year !== '' && (
              <span className="proj-row">
                <b>Year:</b>
                <span>{p.year}</span>
              </span>
            )}
          </span>

          <span className="proj-foot">
            <span className="proj-rule" aria-hidden="true" />
            <span className="proj-more-link">Explore Project</span>
          </span>
        </span>
      </button>
    </article>
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
