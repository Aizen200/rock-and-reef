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
                {/* Default Face: Blueprint image plate + Title */}
                <div className="fleet-card-default">
                  <div className="fleet-plate">
                    <img src={f.img} alt={f.name} loading="lazy" decoding="async" />
                  </div>
                  <h4 className="fleet-title-overlay">{f.name}</h4>
                </div>

                {/* Hover Face: Detailed information (Role, Title, Specs, Units, Deployments) */}
                <div className="fleet-card-hover">
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
                      </a>
                    ) : (
                      f.name
                    )}
                  </h4>
                  <p className="fleet-hover-desc">{f.spec}</p>
                  {f.units && (
                    <div className="fleet-units">
                      {f.units.map((u) => (
                        <span key={u}>{u}</span>
                      ))}
                    </div>
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
