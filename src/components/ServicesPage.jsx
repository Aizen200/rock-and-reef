import { services, company } from '../data/site'
import { navigate } from '../router'

/* Inline SVG icons for the pillar band */
const IconEquipment = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 30V19l8-8 8 8v11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <rect x="17" y="23" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M19 23v-3h6v3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
  </svg>
)

const IconTeam = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="22" cy="17" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M11 33c0-6.1 5-11 11-11s11 4.9 11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const IconSafety = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M22 12l9 4v6.5C31 28 27 32 22 34c-5-2-9-6-9-11.5V16l9-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M17.5 22.5l3.5 3.5 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconEnv = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <circle cx="22" cy="22" r="21" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 28c2-5 6-8 9-5s7-1 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="22" cy="16" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 33c3-2 6.5-3.5 10-3.5s7 1.5 10 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const PILLARS = [
  { Icon: IconEquipment, title: 'Specialised Equipment',  text: 'Well-maintained fleet for diverse marine conditions.' },
  { Icon: IconTeam,      title: 'Experienced Teams',       text: 'Skilled professionals with proven execution capability.' },
  { Icon: IconSafety,    title: 'Safety & Compliance',     text: 'Commitment to highest standards on every project.' },
  { Icon: IconEnv,       title: 'Environmental Focus',     text: 'Responsible processes for sustainable outcomes.' },
]

/**
 * Services page — layout matches the Reliable & Marine Works reference design:
 * full-bleed hero with stats bar → 3-col card grid → icon pillars → discuss CTA.
 */
export default function ServicesPage() {
  return (
    <main className="page sp">

      {/* ════════════════════════════════
          HERO
      ════════════════════════════════ */}
      <section className="sp-hero">
        <img
          className="sp-hero-img"
          src="/img/Banner-Image.jpg"
          alt="Dredger at sea during golden hour"
        />
        <div className="sp-hero-scrim" />

        <div className="wrap sp-hero-body">
          <p className="sp-crumb">SERVICES</p>
          <h1 className="sp-title">
            Specialised<br />
            Marine Solutions<br />
            <em>For a Stronger Tomorrow</em>
          </h1>
          <p className="sp-lede">
            From dredging and surveying to marine construction and repair,
            we deliver end-to-end solutions for ports, waterways, coastal infrastructure
            and inland water bodies.
          </p>
        </div>

        {/* Bottom stats strip */}
        <div className="sp-stats">
          <div className="wrap sp-stats-grid">
            {['PEOPLE', 'EQUIPMENT', 'EXPERTISE', 'RESULTS'].map((label) => (
              <div className="sp-stat" key={label}>
                <span className="sp-stat-label">{label}</span>
                <svg className="sp-stat-icon" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 1v10M1 6l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          SERVICE CARDS GRID
      ════════════════════════════════ */}
      <section className="sp-grid-section">
        <div className="wrap">

          {/* Section header: eyebrow + title left, lede right */}
          <div className="sp-grid-head">
            <div>
              <p className="sp-eyebrow">OUR SERVICES</p>
              <h2 className="sp-grid-h2">End-to-End Marine Capabilities</h2>
            </div>
            <p className="sp-grid-lede">
              We offer a comprehensive range of marine services, delivered with
              specialised equipment, experienced teams and a focus on safety,
              efficiency and environmental responsibility.
            </p>
          </div>

          {/* 3 × 3 card grid */}
          <ul className="sp-cards">
            {services.map((s, i) => (
              <li key={s.id} className="sp-card">
                <div className="sp-card-photo">
                  <img src={s.img} alt={s.name} loading="lazy" decoding="async" />
                </div>
                <div className="sp-card-body">
                  <span className="sp-card-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="sp-card-h3">{s.name.toUpperCase()}</h3>
                  <p className="sp-card-desc">{s.blurb}</p>
                  <a
                    className="sp-card-link"
                    href={`/services/${s.id}`}
                    onClick={(e) => { e.preventDefault(); navigate(`/services/${s.id}`) }}
                  >
                    LEARN MORE
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════
          ICON PILLAR BAND
      ════════════════════════════════ */}
      <section className="sp-pillars">
        <div className="wrap sp-pillars-grid">
          {PILLARS.map(({ Icon, title, text }) => (
            <div className="sp-pillar" key={title}>
              <div className="sp-pillar-icon"><Icon /></div>
              <div>
                <h4 className="sp-pillar-h4">{title}</h4>
                <p className="sp-pillar-p">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════
          DISCUSS CTA
      ════════════════════════════════ */}
      <section className="sp-cta">
        <div className="wrap sp-cta-inner">
          <p className="sp-cta-eyebrow">— LET'S WORK TOGETHER</p>
          <h2 className="sp-cta-h2">
            Discuss Your <em>Marine Requirements</em>
          </h2>
          <p className="sp-cta-sub">
            Our team is ready to understand your requirements and recommend the right solution.
          </p>
          <div className="sp-cta-actions">
            <a
              className="sp-cta-btn-primary"
              href="/#contact"
              onClick={(e) => { e.preventDefault(); navigate('/', { hash: 'contact' }) }}
            >
              GET IN TOUCH →
            </a>
            <a className="sp-cta-btn-ghost" href={company.phoneHref}>
              {company.phone}
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
