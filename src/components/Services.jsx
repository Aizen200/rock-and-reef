import { useEffect, useState } from 'react'
import { services, projects, fleet } from '../data/site'
import { scrollToId } from '../hooks'

/**
 * Services grid where selecting a service expands, in place, a case study of a
 * project delivered under it — and that case study names the vessels used,
 * each linking back into the fleet section.
 */
export default function Services({ openService, onClearOpen, onFocusProject }) {
  const [openId, setOpenId] = useState(null)
  const [caseId, setCaseId] = useState(null)

  // Allow other sections (projects, map, fleet) to drive this panel.
  useEffect(() => {
    if (!openService) return
    setOpenId(openService.serviceId)
    setCaseId(openService.projectId || null)
    onClearOpen?.()
  }, [openService, onClearOpen])

  const toggle = (id) => {
    if (openId === id) {
      setOpenId(null)
      setCaseId(null)
    } else {
      setOpenId(id)
      setCaseId(null)
    }
  }

  const rows = []
  for (let i = 0; i < services.length; i += 3) rows.push(services.slice(i, i + 3))

  return (
    <section id="services" className="section-dark pad-y">
      <div className="wrap">
        <div className="svc-head reveal">
          <div className="svc-head-title">
            <p className="eyebrow on-dark">What we do</p>
            <h2 className="section-title">Our Services</h2>
          </div>
          <p className="svc-head-lede">
            Nine marine capabilities, one integrated team. Open any service to see a project we
            delivered under it, and the exact vessels that did the work.
          </p>
          <a
            className="btn btn-primary svc-head-cta"
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('contact')
            }}
          >
            Discuss a Scope <Arrow />
          </a>
        </div>

        <div className="reveal">
          {rows.map((row, ri) => {
            const openInRow = row.find((s) => s.id === openId)
            return (
              <div key={ri}>
                <div className="svc-grid">
                  {row.map((s, ci) => (
                    <button
                      key={s.id}
                      className="svc"
                      aria-expanded={openId === s.id}
                      aria-controls={openId === s.id ? `panel-${s.id}` : undefined}
                      onClick={() => toggle(s.id)}
                    >
                      <span className="svc-media" aria-hidden="true">
                        <img src={s.img} alt="" loading="lazy" decoding="async" />
                      </span>
                      <span className="svc-body">
                        <span className="svc-num">
                          {String(ri * 3 + ci + 1).padStart(2, '0')}
                          <i />
                        </span>
                        <h3>{s.name}</h3>
                        <span className="svc-reveal">
                          <p>{s.blurb}</p>
                          <span className="svc-go">
                            <Arrow />
                          </span>
                        </span>
                      </span>
                    </button>
                  ))}
                </div>

                {openInRow && (
                  <ServicePanel
                    service={openInRow}
                    caseId={caseId}
                    setCaseId={setCaseId}
                    onClose={() => {
                      setOpenId(null)
                      setCaseId(null)
                    }}
                    onFocusProject={onFocusProject}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServicePanel({ service, caseId, setCaseId, onClose, onFocusProject }) {
  const related = projects.filter((p) => p.services.includes(service.id))
  const current = related.find((p) => p.id === caseId) || related[0]

  return (
    <div className="panel" id={`panel-${service.id}`}>
      <div className="panel-inner">
        <div className="panel-grid">
          <div>
            <h3>{service.name}</h3>
            <p className="panel-detail">{service.detail}</p>

            {current ? (
              <>
                {related.length > 1 && (
                  <div className="case-tabs" role="tablist" aria-label="Related projects">
                    {related.map((p) => (
                      <button
                        key={p.id}
                        role="tab"
                        aria-selected={p.id === current.id}
                        className={`case-tab ${p.id === current.id ? 'active' : ''}`}
                        onClick={() => setCaseId(p.id)}
                      >
                        {p.place.split(',')[0]}
                      </button>
                    ))}
                  </div>
                )}

                <article className="panel-case">
                  <img src={current.img} alt={current.title} loading="lazy" decoding="async" />
                  <div className="panel-case-body">
                    <div className="place">
                      {current.place}{current.year !== '' ? ` · ${current.year}` : ''}
                    </div>
                    <h4>{current.title}</h4>
                    <p>{current.summary}</p>
                    <div className="metrics">
                      {current.metrics.map((m) => (
                        <div key={m.v}>
                          <div className="k">{m.k}</div>
                          <div className="v">{m.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </>
            ) : (
              <p className="panel-detail">
                Case studies for this service are being added. Talk to us about scope and we will
                share references directly.
              </p>
            )}
          </div>

          <div>
            <div className="fleet-mini">
              <h5>Fleet deployed on this project</h5>
              {(current ? current.vessels : Object.keys(fleet)).map((v) => {
                const f = fleet[v]
                if (!f) return null
                return (
                  <a
                    key={v}
                    className="fleet-chip"
                    href="#fleet"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToId('fleet')
                    }}
                  >
                    <img src={f.img} alt="" loading="lazy" decoding="async" />
                    <span>
                      <span className="n">{f.name}</span>
                      <span className="s" style={{ display: 'block' }}>
                        {f.spec}
                      </span>
                    </span>
                  </a>
                )
              })}
            </div>

            {current && (
              <button
                className="btn btn-primary"
                style={{ marginTop: 18 }}
                onClick={() => onFocusProject?.(current.id)}
              >
                View project on the map <Arrow />
              </button>
            )}
          </div>
        </div>

        <button className="panel-close" onClick={onClose}>
          ✕ Close {service.name}
        </button>
      </div>
    </div>
  )
}

function Arrow() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
