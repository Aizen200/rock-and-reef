import { useState } from 'react'
import { services, serviceDetail } from '../data/site'
import { navigate } from '../router'
import { scrollToId } from '../hooks'

/**
 * Services index: a numbered list driving one large preview. The arrow on each
 * row goes to that service's own page; nothing expands in place.
 */
export default function Services() {
  // Which service the preview panel is showing; follows hover, then selection.
  const [previewId, setPreviewId] = useState(services[0].id)
  const preview = services.find((s) => s.id === previewId) || services[0]

  return (
    <section id="services" className="section-dark pad-y">
      <div className="wrap">
        <div className="svc-head reveal">
          <div className="svc-head-title">
            <p className="eyebrow on-dark">What we do</p>
            <h2 className="section-title">Our Services</h2>
          </div>
          <p className="svc-head-lede">
            Nine marine capabilities, one integrated team, from capital dredging and trenching to
            survey, breakwater construction and shipbuilding.
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

        <div className="svc-split reveal">
          <ol className="svc-list">
            {services.map((s, i) => {
              return (
                <li className={`svc-row ${previewId === s.id ? 'showing' : ''}`} key={s.id}>
                  <button
                    className="svc-row-head"
                    onMouseEnter={() => setPreviewId(s.id)}
                    onFocus={() => setPreviewId(s.id)}
                    onClick={() => setPreviewId(s.id)}
                  >
                    <span className="svc-n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="svc-name">{s.name}</span>
                  </button>
                  {/* The arrow is the way into that service's own page. */}
                  <a
                    className="svc-go"
                    href={serviceDetail[s.id] ? `/services/${s.id}` : `/services#${s.id}`}
                    aria-label={`Open ${s.name}`}
                    onMouseEnter={() => setPreviewId(s.id)}
                    onClick={(e) => {
                      e.preventDefault()
                      serviceDetail[s.id]
                        ? navigate(`/services/${s.id}`)
                        : navigate('/services', { hash: s.id })
                    }}
                  >
                    <Arrow />
                  </a>
                </li>
              )
            })}
          </ol>

          {/* Every image is mounted and cross-faded, so switching never flashes. */}
          <figure className="svc-preview" aria-hidden="true">
            <span className="svc-preview-stack">
              {services.map((s) => (
                <img
                  key={s.id}
                  className={previewId === s.id ? 'on' : ''}
                  src={s.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </span>
            <figcaption>
              <span className="k">{preview.name}</span>
              <span className="d">{preview.blurb}</span>
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  )
}

function Arrow() {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
