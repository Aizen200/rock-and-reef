import { fleet, fleetOverview, projects } from '../data/site'

/**
 * The fleet splits into two tiers rather than one flat grid of equal cards:
 * the three dredger classes carry the work and get full-size plates, while the
 * four support vessels sit beneath as a compact register. Seven equal cards in
 * a three-column grid always left a stranded orphan on the last row.
 */
export default function Fleet({ onOpenService }) {
  const vessels = Object.values(fleet)
  const dredgers = vessels.filter((v) => v.tier === 'dredger')
  const support = vessels.filter((v) => v.tier !== 'dredger')

  const deployments = (f) => projects.filter((p) => p.vessels.includes(f.id))

  return (
    <section id="fleet" className="section-dark pad-y">
      <div className="wrap">
        <div className="fleet-head reveal">
          <div>
            <p className="eyebrow on-dark">Owned and operated</p>
            <h2 className="section-title">The Fleet</h2>
          </div>
          <div>
            <p className="fleet-lede">{fleetOverview}</p>
            <ul className="fleet-tally">
              <li>
                <b>{dredgers.length}</b> dredger classes
              </li>
              <li>
                <b>9</b> tugs and hopper barges
              </li>
              <li>
                <b>In house</b> build and repair
              </li>
            </ul>
          </div>
        </div>

        {/* Tier 1 — the dredgers */}
        <div className="fleet-tier reveal">
          <h3 className="fleet-tier-label">
            <span className="n">01</span> Dredgers
            <em>What actually moves the seabed</em>
          </h3>

          <ul className="fleet-primary">
            {dredgers.map((f) => (
              <li className="fleet-card" key={f.id}>
                <span className="fleet-plate">
                  <img src={f.img} alt={f.name} loading="lazy" decoding="async" />
                </span>
                <div className="fleet-body">
                  <p className="fleet-role">{f.role}</p>
                  <h4>{f.name}</h4>
                  <p className="fleet-spec">{f.spec}</p>
                  <Deployments list={deployments(f)} onOpenService={onOpenService} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Tier 2 — everything that keeps them working */}
        <div className="fleet-tier reveal">
          <h3 className="fleet-tier-label">
            <span className="n">02</span> Support fleet
            <em>Haulage, towage, crew and survey</em>
          </h3>

          <ul className="fleet-support">
            {support.map((f) => (
              <li className="fleet-row" key={f.id}>
                <span className="fleet-plate small">
                  <img src={f.img} alt={f.name} loading="lazy" decoding="async" />
                </span>
                <div className="fleet-body">
                  <p className="fleet-role">{f.role}</p>
                  <h4>{f.name}</h4>
                  <p className="fleet-spec">{f.spec}</p>
                  {f.units && (
                    <p className="fleet-units">
                      {f.units.map((u) => (
                        <span key={u}>{u}</span>
                      ))}
                    </p>
                  )}
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
