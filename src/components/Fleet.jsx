import { fleet, fleetDetail, projects } from '../data/site'
import { navigate } from '../router'

/**
 * One register for every vessel class we own, dredgers and support craft
 * alike, so the fleet reads as a single capability rather than two tiers.
 */
export default function Fleet({ onOpenService }) {
  const vessels = Object.values(fleet)
  const deployments = (f) => projects.filter((p) => p.vessels.includes(f.id))

  return (
    <section id="fleet" className="section-dark pad-y">
      <div className="wrap">
        <div className="fleet-head reveal">
          <p className="eyebrow on-dark">Owned and operated</p>
          <h2 className="section-title">The Fleet</h2>
        </div>

        <div className="fleet-tier reveal">
          <h3 className="fleet-tier-label">
            <span className="n">{String(vessels.length).padStart(2, '0')}</span> Fleets
            <em>Dredgers, haulage, towage, crew and survey</em>
          </h3>

          <ul className="fleet-primary">
            {vessels.map((f) => (
              <li className="fleet-card" key={f.id}>
                <span className="fleet-plate">
                  <img src={f.img} alt={f.name} loading="lazy" decoding="async" />
                </span>
                <div className="fleet-body">
                  <p className="fleet-role">{f.role}</p>
                  <h4>
                    {fleetDetail[f.id] ? (
                      <a
                        className="fleet-link"
                        href={`/fleet/${f.id}`}
                        onClick={(e) => {
                          e.preventDefault()
                          navigate(`/fleet/${f.id}`)
                        }}
                      >
                        {f.name}
                        <svg width="14" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                          <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                        </svg>
                      </a>
                    ) : (
                      f.name
                    )}
                  </h4>
                  <p className="fleet-spec">{f.spec}</p>
                  {f.units && (
                    <p className="fleet-units">
                      {f.units.map((u) => (
                        <span key={u}>{u}</span>
                      ))}
                    </p>
                  )}
                  <Deployments list={deployments(f)} onOpenService={onOpenService} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/** Places this vessel class has worked; each opens that project's service story. */
function Deployments({ list, onOpenService }) {
  if (!list.length) return null
  return (
    <span className="fleet-used">
      <span className="k">Deployed at</span>
      {list.slice(0, 3).map((p) => (
        <button
          key={p.id}
          onClick={() => onOpenService(p.services[0], p.id)}
          title={`Deployed on ${p.title}`}
        >
          {p.place.split(',')[0]}
        </button>
      ))}
    </span>
  )
}
