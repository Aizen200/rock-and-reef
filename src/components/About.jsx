import { company, differentiators } from '../data/site'
import { scrollToId } from '../hooks'

const ADV_PATHS = [
  'M3 20h18M6 20V9l6-4 6 4v11M10 20v-5h4v5',
  'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5',
  'M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M15.6 8.4l2.1-2.1M6.3 17.7l2.1-2.1M12 9a3 3 0 100 6 3 3 0 000-6',
  'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-6 8-6s8 2 8 6',
  'M12 21c0-6 3-11 8-13-1 7-4 11-8 13zM12 21C12 15 9 10 4 8c1 7 4 11 8 13z',
]

function AdvIcon({ index }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d={ADV_PATHS[index % ADV_PATHS.length]} />
    </svg>
  )
}

export default function About() {
  return (
    <>
      {/* ── 1. Hero — full-bleed image with overlay + content bottom-left ── */}
      <section id="about" className="abv2-hero">
        <div className="abv2-hero-bg">
          <img src="/img/Banner-Image.jpg" alt="Rock and Reef dredger at work" />
          <div className="abv2-hero-overlay" />
          <div className="abv2-wave-dots" aria-hidden="true" />
        </div>

        <div className="wrap abv2-hero-inner">
          <div className="abv2-hero-body">
            <span className="abv2-kicker">
              <span className="abv2-kicker-line" />
              Who we are
            </span>
            <h2 className="abv2-hero-title">Built for India's hardest seabeds</h2>
            <p className="abv2-hero-lede">
              {company.intro} Our directors have spent two decades building the very dredgers we
              deploy, so we take on constraints others schedule around.
            </p>
            <ul className="abv2-hero-points">
              <li>Backhoe, cutter suction and grab dredgers, owned and operated</li>
              <li>25+ years across ports, coasts, offshore corridors and reservoirs</li>
              <li>Vessels built and customised in our own yard</li>
            </ul>
            <a
              className="btn btn-primary"
              href="#sustainability"
              onClick={(e) => { e.preventDefault(); scrollToId('sustainability') }}
            >
              Learn More About Us
            </a>
          </div>

          {/* Right floating image card */}
          <div className="abv2-hero-img-card">
            <img src="/img/Banner-Image.jpg" alt="Rock and Reef cutter suction dredger" loading="lazy" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="abv2-scroll-indicator" aria-hidden="true">
          <span className="abv2-scroll-line" />
          <span className="abv2-scroll-label">Scroll</span>
        </div>
      </section>

      {/* ── 2. Our Advantage — image cards strip ── */}
      <section id="sustainability" className="abv2-advantage">
        <div className="wrap">
          <div className="abv2-adv-head">
            <span className="abv2-kicker abv2-kicker-centered">
              <span className="abv2-kicker-line" />
              Our advantage
              <span className="abv2-kicker-line" />
            </span>
            <h2 className="abv2-adv-title">Delivering more than dredging</h2>
            <p className="abv2-adv-sub">
              Combining experience, innovation and a client first approach, we deliver dredging
              solutions that create lasting value.
            </p>
          </div>

          <ul className="abv2-adv-strip">
            {differentiators.map((d, i) => (
              <li className="abv2-adv-card" key={d.title}>
                <img src={d.img} alt="" loading="lazy" decoding="async" />
                <div className="abv2-adv-card-overlay" />
                <div className="abv2-adv-card-body">
                  <span className="abv2-adv-icon" aria-hidden="true">
                    <AdvIcon index={i} />
                  </span>
                  <h3 className="abv2-adv-card-title">{d.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
