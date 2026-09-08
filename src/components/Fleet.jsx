import { fleet, fleetOverview, projects } from '../data/site'

/**
 * The fleet reads as a roster rather than a card grid: one hairline-separated
 * row per vessel, the silhouette floating on a soft wash instead of a plate.
 */
export default function Fleet({ onOpenService }) {
  const vessels = Object.values(fleet)

  return (
    <section id="fleet" className="section-dark pad-y">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <p className="eyebrow on-dark">Owned and operated</p>
            <h2 className="section-title">The Fleet</h2>
            <p className="section-lede">{fleetOverview}</p>
          </div>
        </div>

        <ul className="fleet-roster reveal">
          {vessels.map((f, i) => {
            const used = projects.filter((p) => p.vessels.includes(f.id))
            return (
              <li className="fleet-row" key={f.id}>
                <span className="fleet-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="fleet-shape">
                  <img src={f.img} alt={f.name} loading="lazy" decoding="async" />
                </span>
                <span className="fleet-text">
                  <h3>{f.name}</h3>
                  <p>{f.spec}</p>
                </span>
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
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
