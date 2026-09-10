import { useState } from 'react'
import { fleet, fleetDetail, projects, company } from '../data/site'
import { navigate } from '../router'

/**
 * One vessel class, laid out the way a fleet register reads: a stated hero,
 * an introduction to the class, then one sheet per vessel with its photo,
 * headline figures, the full specification table and a link to the PDF.
 */
export default function FleetPage({ id }) {
  const cls = fleet[id]
  const detail = fleetDetail[id]
  if (!cls || !detail) {
    return (
      <main className="page">
        <section className="page-hero">
          <div className="wrap">
            <p className="crumb">
              <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a>
              <span aria-hidden="true">/</span>
              <a href="/#fleet" onClick={(e) => { e.preventDefault(); navigate('/', { hash: 'fleet' }) }}>Fleet</a>
            </p>
            <h1 className="page-title">Vessel class not found</h1>
            <p className="page-lede">That link does not match a vessel class we publish a data sheet for.</p>
            <a className="btn btn-dark" href="/#fleet" style={{ marginTop: 24 }} onClick={(e) => { e.preventDefault(); navigate('/', { hash: 'fleet' }) }}>
              Back to the fleet
            </a>
          </div>
        </section>
      </main>
    )
  }

  const deployments = projects.filter((p) => p.vessels.includes(id))

  const toContact = (e) => {
    e.preventDefault()
    navigate('/', { hash: 'contact' })
  }

  return (
    <main className="page fp">
      <section className="page-hero">
        <div className="wrap">
          <p className="crumb">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/') }}>Home</a>
            <span aria-hidden="true">/</span>
            <a href="/#fleet" onClick={(e) => { e.preventDefault(); navigate('/', { hash: 'fleet' }) }}>Fleet</a>
            <span aria-hidden="true">/</span> {cls.name}
          </p>
          <div className="fp-hero-grid">
            <div>
              <h1 className="page-title">{cls.name}</h1>
              <p className="page-lede">{cls.spec}</p>
              <p className="fp-hero-meta">
                <span>{cls.role}</span>
                <span>{detail.vessels.length} {detail.vessels.length === 1 ? 'vessel' : 'vessels'} on the register</span>
              </p>
            </div>
            <HeroImage photo={detail.hero} plate={cls.img} name={cls.name} />
          </div>
        </div>
      </section>

      <section className="fp-intro">
        <div className="wrap fp-intro-grid">
          <h2>{detail.headline}</h2>
          <div className="fp-intro-copy">
            {detail.intro.map((t) => <p key={t}>{t}</p>)}
          </div>
        </div>
      </section>

      <section className="fp-vessels" id="vessels">
        <div className="wrap">
          {detail.vessels.map((v) => <VesselSheet key={v.id} v={v} />)}
        </div>
      </section>

      {deployments.length > 0 && (
        <section className="fp-projects">
          <div className="wrap">
            <p className="eyebrow">Deployed on</p>
            <h2 className="section-title">Featured projects</h2>
            <ul className="fp-project-list">
              {deployments.map((p) => (
                <li key={p.id}>
                  <a href={`/projects/${p.id}`} onClick={(e) => { e.preventDefault(); navigate(`/projects/${p.id}`) }}>
                    <span className="fp-project-title">{p.title}</span>
                    <span className="fp-project-meta">{p.place}{p.year ? ` · ${p.year}` : ''}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="act-foot">
        <div className="wrap">
          <h2>Talk to us about your next project</h2>
          <p>
            Depth, deadline, geology, discharge distance: send what you have and we will come back
            with a method and an indicative programme.
          </p>
          <div className="act-foot-actions">
            <a className="btn btn-primary" href="/#contact" onClick={toContact}>Request a quote</a>
            <a className="btn btn-outline" href={company.phoneHref}>{company.phone}</a>
          </div>
        </div>
      </section>
    </main>
  )
}

function VesselSheet({ v }) {
  return (
    <article className="fp-vessel" id={v.id}>
      <header className="fp-vessel-head">
        <div>
          <p className="eyebrow">{v.type}</p>
          <h2>{v.name}</h2>
        </div>
        <a className="fp-download" href={v.pdf} target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3v12M7 10l5 5 5-5M4 19h16" />
          </svg>
          Download specifications
          <span className="fp-download-type">PDF</span>
        </a>
      </header>

      <div className="fp-vessel-top">
        <figure className="fp-vessel-figure">
          <img src={v.img} alt={`${v.name}, ${v.type}`} decoding="async" />
        </figure>
        <div className="fp-vessel-side">
          <p className="fp-vessel-summary">{v.summary}</p>
          <dl className="fp-headline">
            {v.headline.map((h) => (
              <div key={h.k}>
                <dt>{h.k}</dt>
                <dd>{h.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="fp-spec-grid">
        {v.specs.map((g) => (
          <table className="fp-spec" key={g.group}>
            <caption>{g.group}</caption>
            <tbody>
              {g.rows.map(([k, val]) => (
                <tr key={k}>
                  <th scope="row">{k}</th>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}

        <div className="fp-features">
          <h3>Other features</h3>
          <ul>
            {v.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </div>

      {v.output && (
        <div className="fp-output">
          <div className="fp-output-head">
            <h3>Pump output</h3>
            <p>{v.output.basis}</p>
          </div>
          <div className="fp-output-table-wrap">
            <table className="fp-output-table">
              <thead>
                <tr>
                  <th>Soil type</th>
                  <th>Decisive grain size</th>
                  <th>In situ density</th>
                  <th>Peak output</th>
                  <th>Effective discharge length</th>
                </tr>
              </thead>
              <tbody>
                {v.output.soils.map((s) => (
                  <tr key={s.key}>
                    <th scope="row"><b>{s.key}</b> {s.type}</th>
                    <td>{s.grain}</td>
                    <td>{s.density}</td>
                    <td>{s.peak}</td>
                    <td>up to {s.reach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fp-output-note">{v.output.note}</p>
        </div>
      )}
    </article>
  )
}

/** Photo of the class when one is published; otherwise the silhouette plate. */
function HeroImage({ photo, plate, name }) {
  const [failed, setFailed] = useState(false)
  if (photo && !failed) {
    return (
      <figure className="fp-hero-photo">
        <img src={photo} alt={name} onError={() => setFailed(true)} decoding="async" />
      </figure>
    )
  }
  return (
    <span className="fp-hero-plate" aria-hidden="true">
      <img src={plate} alt="" />
    </span>
  )
}
