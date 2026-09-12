import { services, company } from '../data/site'
import { navigate } from '../router'

/* Inline SVG icons matching the reference design exactly */
const IconEquipment = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <circle cx="22" cy="22" r="16" stroke="currentColor" strokeWidth="2.2"/>
    <circle cx="22" cy="22" r="10" stroke="currentColor" strokeWidth="2.2"/>
    <circle cx="22" cy="22" r="4" fill="currentColor"/>
    <path d="M30 14l5-5M32 9h3v3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconTeam = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    {/* Top center head */}
    <circle cx="22" cy="14" r="3.5" stroke="currentColor" strokeWidth="2.2"/>
    {/* Left head */}
    <circle cx="14" cy="20" r="3" stroke="currentColor" strokeWidth="2.2"/>
    {/* Right head */}
    <circle cx="30" cy="20" r="3" stroke="currentColor" strokeWidth="2.2"/>
    {/* Main body arc */}
    <path d="M14 31c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    {/* Left body arc */}
    <path d="M8 32c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    {/* Right body arc */}
    <path d="M30 26c3.3 0 6 2.7 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

const IconSafety = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <path d="M22 10L33 15V23C33 29.5 28.5 35 22 37C15.5 35 11 29.5 11 23V15L22 10Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
    <path d="M17.5 23.5L20.5 26.5L26.5 19.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconEnv = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <path d="M32 14C22 14 14 22 14 32C24 32 32 24 32 14Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
    <path d="M14 32L21 25" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M11 29C11 29 13.5 32 14 32" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
)

const PILLARS = [
  { Icon: IconEquipment, title: 'SPECIALISED\nEQUIPMENT', text: 'Well-maintained fleet for diverse marine conditions.' },
  { Icon: IconTeam,      title: 'EXPERIENCED\nTEAMS',    text: 'Skilled professionals with proven execution capability.' },
  { Icon: IconSafety,    title: 'SAFETY &\nCOMPLIANCE',  text: 'Committed to the highest standards on every project.' },
  { Icon: IconEnv,       title: 'ENVIRONMENTAL\nFOCUS',  text: 'Responsible practices for sustainable outcomes.' },
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
            SPECIALISED<br />
            MARINE SOLUTIONS<br />
            FOR <em>A STRONGER TOMORROW</em>
          </h1>
          <p className="sp-lede">
            From dredging and surveying to marine construction and repair,
            we deliver end-to-end solutions for ports, waterways, coastal infrastructure
            and inland water bodies.
          </p>
        </div>

        {/* Floating text tags overlay on bottom right of hero */}
        <div className="wrap sp-hero-tags-wrap">
          <div className="sp-hero-tags">
            <span>PEOPLE</span>
            <span className="sp-hero-sep">|</span>
            <span>EQUIPMENT</span>
            <span className="sp-hero-sep">|</span>
            <span>EXPERTISE</span>
            <span className="sp-hero-sep">|</span>
            <span>RESULTS</span>
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
                <h4 className="sp-pillar-h4" style={{ whiteSpace: 'pre-line' }}>{title}</h4>
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
          <p className="sp-cta-eyebrow">— LET'S WORK TOGETHER —</p>
          <h2 className="sp-cta-h2">
            DISCUSS YOUR MARINE<br />
            <em>REQUIREMENTS</em>
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
              +91 98765 43210
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
