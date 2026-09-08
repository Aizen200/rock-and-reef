import { fleet, fleetOverview, projects } from '../data/site'

/**
 * The fleet reads as a set of specimen cards: each silhouette floats on its own
 * tinted panel, with the deployments it has sailed listed underneath.
 */
export default function Fleet({ onOpenService }) {
  const vessels = Object.values(fleet)

  return (
    <section id="fleet" className="section-dark pad-y">
      <div className="wrap">
        <div className="fleet-head reveal">
          <div>
            <p className="eyebrow on-dark">Owned and operated</p>
            <h2 className="section-title">The Fleet</h2>
          </div>
          <p className="fleet-lede">{fleetOverview}</p>
        </div>

        <ul className="fleet-cards reveal">
          {vessels.map((f, i) => {
            const used = projects.filter((p) => p.vessels.includes(f.id))
            return (
              <li className="fleet-card" key={f.id}>
                <span className="fleet-shape">
                  <span className="fleet-idx">{String(i + 1).padStart(2, '0')}</span>
                  <img src={f.img} alt={f.name} loading="lazy" decoding="async" />
                </span>
                <div className="fleet-body">
                  <h3>{f.name}</h3>
                  <p>{f.spec}</p>
                  {used.length > 0 && (
                    <span className="fleet-used">
                      {used.slice(0, 3).map((p) => (
                        <button
                          key={p.id}
                          onClick={() => onOpenService(p.services[0], p.id)}
                          title={`Deployed on ${p.title}`}
                        >
                          {p.place.split(',')[0]}
                        </button>
                      ))}
                    </span>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
