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

// One accordion group per state, in the order the projects are listed.
const REGIONS = projects.reduce((acc, p) => {
  const g = acc.find((r) => r.region === p.region)
  if (g) g.items.push(p)
  else acc.push({ region: p.region, items: [p] })
  return acc
}, [])

const regionOf = (id) => projects.find((p) => p.id === id)?.region

// Viewport centre in viewBox units, and how far the map may zoom in.
const CX = MAP_WIDTH / 2
const CY = MAP_HEIGHT / 2
const MAX_K = 4.2

/**
 * Transform that frames a set of pins: fit their bounding box into ~55% of the
 * viewport, capped so a single pin does not zoom to the point of meaninglessness.
 */
function frame(pins) {
  if (!pins || pins.length === 0) return { k: 1, tx: 0, ty: 0 }
  const xs = pins.map((p) => p.pt.x)
  const ys = pins.map((p) => p.pt.y)
  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)
  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)
  const bw = Math.max(maxX - minX, 6)
  const bh = Math.max(maxY - minY, 6)
  const k = Math.min(MAX_K, (MAP_WIDTH * 0.55) / bw, (MAP_HEIGHT * 0.55) / bh)
  const cx = (minX + maxX) / 2
  const cy = (minY + maxY) / 2
  return { k, tx: CX - k * cx, ty: CY - k * cy }
}

export default function IndiaMap({ focusProject, onOpenService }) {
  const [activeId, setActiveId] = useState(null)
  const [openRegion, setOpenRegion] = useState(null)

  // Selecting a pin (or arriving from another section) opens the group it sits in.
  const select = (id) => {
    setActiveId(id)
    setOpenRegion(regionOf(id))
  }

  useEffect(() => {
    if (focusProject) select(focusProject)
  }, [focusProject])

  // The map follows the accordion: one project framed tightly, an open state
  // framed around all of its pins, nothing open showing the whole country.
  const framed = activeId
    ? PINS.filter((p) => p.id === activeId)
    : openRegion
      ? PINS.filter((p) => p.region === openRegion)
      : null
  const { k, tx, ty } = frame(framed)

  return (
    <section id="map" className="section-dark map-dark pad-y">
      <div className="wrap map-grid reveal">
        <div className="map-list">
          {REGIONS.map(({ region, items }) => {
            const open = openRegion === region
            return (
              <div className={`reg ${open ? 'open' : ''}`} key={region}>
                <button
                  className="reg-head"
                  aria-expanded={open}
                  onClick={() => {
                    setActiveId(null)
                    setOpenRegion(open ? null : region)
                  }}
                >
                  <span className="reg-name">{region}</span>
                  <span className="reg-count">
                    ({items.length} {items.length === 1 ? 'Project' : 'Projects'})
                  </span>
                  <span className="reg-chev" aria-hidden="true">
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                      <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                </button>

                {open && (
                  <div className="reg-body">
                    {items.map((p) => {
                      const on = p.id === activeId
                      return (
                        <div className={`reg-item ${on ? 'on' : ''}`} key={p.id}>
                          <button className="reg-item-head" aria-expanded={on} onClick={() => select(p.id)}>
                            <span className="dot" aria-hidden="true" />
                            <span className="t">{p.title}</span>
                            <span className="y">{p.year || 'Delivered'}</span>
                          </button>

                          {on && (
                            <div className="reg-detail">
                              <img src={p.img} alt={p.title} loading="lazy" decoding="async" />
                              <p className="place">{p.place}</p>
                              <p className="text">{p.summary}</p>
                              <p className="client">
                                <strong>Client:</strong> {p.client}
                              </p>
                              <div className="proj-metrics">
                                {p.metrics.map((m) => (
                                  <span key={m.v}>
                                    {m.k}
                                    <small>{m.v}</small>
                                  </span>
                                ))}
                              </div>
                              <div className="map-card-actions">
                                <button
                                  className="btn btn-dark"
                                  onClick={() => onOpenService(p.services[0], p.id)}
                                >
                                  {serviceName(p.services[0])} story
                                </button>
                                <button
                                  className="btn btn-outline"
                                  onClick={() => scrollToId(`project-${p.id}`)}
                                >
                                  Project card
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <figure className="map-figure">
          <svg
            className="map-svg"
            viewBox={`-14 -6 ${MAP_WIDTH + 28} ${MAP_HEIGHT + 12}`}
            role="group"
            aria-label="Map of India showing Rock and Reef project locations"
          >
            <defs>
              <linearGradient id="landFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#173445" />
                <stop offset="100%" stopColor="#0f2836" />
              </linearGradient>
            </defs>

            <g className="map-zoom" transform={`translate(${tx} ${ty}) scale(${k})`}>
              <path className="map-land" d={INDIA_PATH} fill="url(#landFill)" />

              {PINS.map((p) => {
                const lab = LABEL[p.id] || { dx: 3, dy: 0, anchor: 'start' }
                const on = p.id === activeId
                return (
                  <g
                    key={p.id}
                    className={`pin ${on ? 'active' : ''}`}
                    transform={`translate(${p.pt.x} ${p.pt.y}) scale(${1 / k})`}
                    onClick={() => select(p.id)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && select(p.id)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={on}
                    aria-label={`${p.title}, ${p.place}`}
                  >
                    <circle className="halo" r="2.6" />
                    <circle className="dot" r="1.25" />
                    {(on || openRegion === p.region) && (
                      <text
                        className="map-label"
                        x={lab.dx}
                        y={lab.dy}
                        textAnchor={lab.anchor}
                        dominantBaseline="middle"
                      >
                        {p.region}
                      </text>
                    )}
                    <title>{`${p.title}, ${p.place}`}</title>
                  </g>
                )
              })}
            </g>
          </svg>

          <p className="map-note">
            Six featured projects across four states. Boundaries shown are indicative.
          </p>
        </figure>
      </div>
    </section>
  )
}
