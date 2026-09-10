import { services, projects, fleet, company } from '../data/site'
import { navigate } from '../router'

/**
 * Standalone services page: a stated hero, then one detail block per service
 * alternating image and copy.
 */
export default function ServicesPage() {
  return (
    <main className="page">
      <section className="page-hero has-img">
        <img className="page-hero-img" src="/img/Dredging-Services.jpg" alt="Cutter suction dredger working in a channel" />
        <div className="wrap">
          <p className="crumb">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
              }}
            >
              Home
            </a>
            <span aria-hidden="true">/</span> Services
          </p>
          <h1 className="page-title">
            Leading the way in dredging <em>and</em> marine works
          </h1>
          <p className="page-lede">
            Nine capabilities delivered by one integrated team with its own fleet: capital,
            maintenance, deep and reservoir dredging, trenching, survey, breakwater construction
            and shipbuilding. Send us the scope and we come back with a method and a programme.
          </p>
        </div>
      </section>

      {/* One block per capability, image and copy trading sides. */}
      <section className="act-detail-wrap">
        <div className="wrap">
          {services.map((s, i) => (
            <article className={`act-detail ${i % 2 ? 'flip' : ''}`} id={s.id} key={s.id}>
              <figure>
                <img src={s.img} alt={s.name} loading="lazy" decoding="async" />
              </figure>
              <div className="act-detail-body">
                <span className="act-detail-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.name}</h3>
                <p className="act-detail-lede">{s.blurb}</p>
                <p className="act-detail-text">{s.detail}</p>

                <ul className="act-facts">
                  <li>
                    <b>Fleet</b>
                    <span>{fleetFor(s.id)}</span>
                  </li>
                  <li>
                    <b>Delivered at</b>
                    <span>{placesFor(s.id)}</span>
                  </li>
                </ul>

                <a
                  className="act-cta"
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/', { hash: 'contact' })
                  }}
                >
                  Discuss this scope
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                    <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="act-foot">
        <div className="wrap">
          <h2>Tell us about your seabed</h2>
          <p>
            Depth, deadline, geology, traffic constraints: send what you have and we will come back
            with a method and an indicative programme.
          </p>
          <div className="act-foot-actions">
            <a
              className="btn btn-primary"
              href="/#contact"
              onClick={(e) => {
                e.preventDefault()
                navigate('/', { hash: 'contact' })
              }}
            >
              Request a quote
            </a>
            <a className="btn btn-outline" href={company.phoneHref}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

/** Vessel types actually used on projects delivered under this service. */
function fleetFor(serviceId) {
  const ids = new Set()
  projects
    .filter((p) => p.services.includes(serviceId))
    .forEach((p) => p.vessels.forEach((v) => ids.add(v)))
  const names = [...ids].map((v) => fleet[v]?.name).filter(Boolean)
  return names.length ? names.join(', ') : 'Owned backhoe, grab and cutter suction dredgers'
}

function placesFor(serviceId) {
  const places = projects
    .filter((p) => p.services.includes(serviceId))
    .map((p) => p.place.split(',')[0])
  return places.length ? [...new Set(places)].join(', ') : 'Ports, coasts and reservoirs across India'
}
