import { useEffect, useState } from 'react'
import { projects, services } from '../data/site'
import { INDIA_PATH, MAP_WIDTH, MAP_HEIGHT, project } from '../data/indiaPath'
import { scrollToId } from '../hooks'

const serviceName = (id) => services.find((s) => s.id === id)?.name || id

// Pre-project the pins once.
const PINS = projects.map((p) => ({ ...p, pt: project(p.coords.lat, p.coords.lng) }))

// Label offsets keep the three Mumbai-area pins from colliding.
const LABEL = {
  mult: { dx: -3, dy: 1.2, anchor: 'end' },
  gogha: { dx: -3, dy: 0.2, anchor: 'end' },
  jd5: { dx: 3, dy: -1.6, anchor: 'start' },
  salvage: { dx: 3, dy: 1.4, anchor: 'start' },
  offshore: { dx: -3, dy: 0.4, anchor: 'end' },
  dakpathar: { dx: 3, dy: -0.4, anchor: 'start' },
}

export default function IndiaMap({ focusProject, onOpenService }) {
  const [activeId, setActiveId] = useState(projects[0].id)
  const active = projects.find((p) => p.id === activeId) || projects[0]

  useEffect(() => {
    if (focusProject) setActiveId(focusProject)
  }, [focusProject])

  return (
    <section id="map" className="section-sand pad-y">
      <div className="wrap">
        <div className="map-grid reveal">
          <figure className="map-figure">
            <svg
              className="map-svg"
              viewBox={`-14 -6 ${MAP_WIDTH + 28} ${MAP_HEIGHT + 12}`}
              role="group"
              aria-label="Map of India showing Rock and Reef project locations"
            >
              <defs>
                <linearGradient id="landFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dfe7e6" />
                  <stop offset="100%" stopColor="#cfdcdd" />
                </linearGradient>
              </defs>

              <path className="map-land" d={INDIA_PATH} fill="url(#landFill)" />

              {PINS.map((p) => {
                const lab = LABEL[p.id] || { dx: 3, dy: 0, anchor: 'start' }
                const on = p.id === activeId
                return (
                  <g
                    key={p.id}
                    className={`pin ${on ? 'active' : ''}`}
                    transform={`translate(${p.pt.x} ${p.pt.y})`}
                    onClick={() => setActiveId(p.id)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveId(p.id)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={on}
                    aria-label={`${p.title}, ${p.place}`}
                  >
                    <circle className="halo" r="2.6" />
                    <circle className="dot" r="1.25" />
                    <text
                      className="map-label"
                      x={lab.dx}
                      y={lab.dy}
                      textAnchor={lab.anchor}
                      dominantBaseline="middle"
                    >
                      {p.place.split(',')[0]}
                    </text>
                    <title>{`${p.title}, ${p.place}`}</title>
                  </g>
                )
              })}
            </svg>
            <div className="map-legend">
              {PINS.map((p) => (
                <button
                  key={p.id}
                  className={p.id === activeId ? 'active' : ''}
                  onClick={() => setActiveId(p.id)}
                >
                  {p.place.split(',')[0]}
                </button>
              ))}
            </div>
            <figcaption className="map-note">
              Six featured projects across four states. Boundaries shown are indicative.
            </figcaption>
          </figure>

          <aside className="map-card" aria-live="polite">
            <img src={active.img} alt={active.title} loading="lazy" decoding="async" />
            <div className="map-card-body">
              <p className="eyebrow">
                {active.place}
                {active.year !== '' ? ` · ${active.year}` : ''}
              </p>
              <h3 className="map-card-title">{active.title}</h3>
              <p className="map-card-text">{active.summary}</p>
              <p className="map-card-client">
                <strong>Client:</strong> {active.client}
              </p>
              <div className="proj-metrics">
                {active.metrics.map((m) => (
                  <span key={m.v}>
                    {m.k}
                    <small>{m.v}</small>
                  </span>
                ))}
              </div>
              <div className="map-card-actions">
                <button
                  className="btn btn-dark"
                  onClick={() => onOpenService(active.services[0], active.id)}
                >
                  {serviceName(active.services[0])} story
                </button>
                <button className="btn btn-outline" onClick={() => scrollToId(`project-${active.id}`)}>
                  Project card
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
