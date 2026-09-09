import { company, differentiators } from '../data/site'
import { scrollToId } from '../hooks'

/** One outline mark per advantage, in the order they appear in the data. */
const ADV_PATHS = [
  'M3 20h18M6 20V9l6-4 6 4v11M10 20v-5h4v5',            // execution / port
  'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5',                 // layered experience
  'M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M15.6 8.4l2.1-2.1M6.3 17.7l2.1-2.1M12 9a3 3 0 100 6 3 3 0 000-6', // innovation
  'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-6 8-6s8 2 8 6', // client
  'M12 21c0-6 3-11 8-13-1 7-4 11-8 13zM12 21C12 15 9 10 4 8c1 7 4 11 8 13z', // environment
]

function AdvIcon({ index }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d={ADV_PATHS[index % ADV_PATHS.length]} />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <section id="about" className="pad-y">
        <div className="wrap intro-grid reveal">
          <div className="intro-copy">
            <span className="pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l1.9 5.6L19.5 9l-4.4 3.6 1.4 5.7L12 15.2 7.5 18.3l1.4-5.7L4.5 9l5.6-1.4z" />
              </svg>
              Who we are
            </span>
            <h2 className="section-title">Built for India&apos;s hardest seabeds</h2>
            <p className="intro-lede">
              {company.intro} Our directors have spent two decades building the very dredgers we
              deploy, so we take on constraints others schedule around.
            </p>

            <ul className="intro-points">
              <li>Backhoe, cutter suction and grab dredgers, owned and operated</li>
              <li>25+ years across ports, coasts, offshore corridors and reservoirs</li>
              <li>Vessels built and customised in our own yard</li>
            </ul>

            <a
              className="btn btn-primary"
              href="#sustainability"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('sustainability')
              }}
            >
              Learn More About Us
            </a>
          </div>

          <figure className="intro-figure">
            <img src="/img/Banner-Image.jpg" alt="A Rock and Reef cutter suction dredger working on open water" loading="lazy" decoding="async" />
          </figure>
        </div>
      </section>

      <section id="sustainability" className="pad-y section-sand">
        <div className="wrap">
          <div className="adv-head reveal">
            <p className="eyebrow">Our advantage</p>
            <h2 className="section-title">Delivering more than dredging</h2>
            <p className="adv-sub">
              Combining experience, innovation and a client first approach, we deliver dredging
              solutions that create lasting value.
            </p>
          </div>

          <ul className="adv-cards reveal">
            {differentiators.map((d, i) => (
              <li className="adv-card" key={d.title}>
                <img src={d.img} alt="" loading="lazy" decoding="async" />
                <div className="adv-card-body">
                  <span className="adv-card-icon" aria-hidden="true">
                    <AdvIcon index={i} />
                  </span>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </>
  )
}
