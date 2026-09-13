import { company, stats } from '../data/site'

const founders = [
  {
    name: 'Mr. Harsharan Singh Dharni',
    role: 'Managing Director',
    img: '/img/Harsharan-Singh-Dharni.jpg',
    bio: 'He is a seasoned professional in the area of dredging. He brings with him more than 25 years of experience in this field. He has executed several projects and has a strong network in the dredging industry. His achievements include the development of specialized equipment like the Backhoe dredger for this industry in India.',
  },
  {
    name: 'Mr. Parminder Singh Dharni',
    role: 'Director',
    img: null,
    bio: 'He is well known in the field of dredging and has executed many challenging projects. One of them being, capital dredging for the construction of the deepest berth at the Mundra port.',
  },
  {
    name: 'Mr. Manish Shah',
    role: 'Director',
    img: '/img/Manish-Shaha.png',
    bio: 'He has an extremely strong vendor network. His experience in the industry is invaluable for the company to find the right spares at the right time.',
  },
  {
    name: 'Mr. Gurudayal Singh Dhanotra',
    role: 'Director',
    img: '/img/Mr.-Gurudayal-Singh-Dhanotra.jpg',
    bio: 'He is in the field of shipbuilding for the past 30 years and has executed several projects from building of hopper barges, tugs, dredgers to other ancillary dredging equipment. An experienced and seasoned specialist in his field.',
  },
]

const aboutStats = [
  { icon: '🚢', value: '100+', label: 'Projects Finished Successfully' },
  { icon: '⏳', value: '25+', label: 'Years of Experience with Pride' },
  { icon: '📊', value: '25 Million+', label: 'Cubic Meters Dredged' },
]

export default function AboutPage() {
  return (
    <main className="abp page">
      {/* ── Hero ── */}
      <section className="abp-hero">
        <div className="abp-hero-bg">
          <img src="/img/Banner-Image.jpg" alt="Rock and Reef dredger" />
          <div className="abp-hero-overlay" />
          <div className="abp-hero-wave" aria-hidden="true" />
        </div>
        <div className="wrap abp-hero-inner">
          <h1 className="abp-hero-title">About Us</h1>
        </div>
        <div className="abp-scroll-indicator" aria-hidden="true">
          <span className="abp-scroll-line" />
          <span className="abp-scroll-label">Scroll</span>
        </div>
      </section>

      {/* ── About + Mission / Vision ── */}
      <section className="abp-intro">
        <div className="wrap abp-intro-grid">
          {/* Left: Who we are */}
          <div className="abp-intro-left">
            <span className="abp-kicker">About Us</span>
            <h2 className="abp-section-title">Rock And Reef</h2>
            <p className="abp-body-text">
              Rock And Reef Dredging Pvt. Ltd. is a leading dredging and shipbuilding company that
              has been at the forefront of capital dredging in India. With a strong focus on quality,
              reliability, and client satisfaction, we have successfully executed over 100 dredging
              works, setting new benchmarks in the industry.
            </p>
            <p className="abp-body-text">
              Our commitment to excellence and the completion of every project we undertake sets us
              apart from others in the Indian dredging industry.
            </p>
            <a href="/services" className="btn btn-primary abp-intro-btn">Our Expertise</a>
          </div>

          {/* Right: Mission + Vision */}
          <div className="abp-intro-right">
            <div className="abp-mv-block">
              <div className="abp-mv-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                  <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
                  <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
                </svg>
              </div>
              <div>
                <h3 className="abp-mv-title">Our Mission</h3>
                <p className="abp-body-text">
                  To be the premier provider of innovative dredging solutions and shipbuilding services
                  in India, delivering projects with exceptional quality, safety, and efficiency. We
                  strive to exceed client expectations, contribute to the growth and sustainability of
                  the marine industry, and leave a positive impact on the environment and communities
                  we work in.
                </p>
              </div>
            </div>

            <div className="abp-mv-block">
              <div className="abp-mv-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div>
                <h3 className="abp-mv-title">Our Vision</h3>
                <p className="abp-body-text">
                  To be recognized as pioneers in capital dredging, shipbuilding, and marine
                  infrastructure development in India. We aim to continuously push the boundaries of
                  excellence, embracing technological advancements, sustainable practices, and industry
                  best practices. Our vision is to inspire and lead the industry, transforming India's
                  waterways and coastal regions for economic growth, environmental preservation, and
                  improved connectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="abp-stats">
        <div className="abp-stats-bg">
          <img src="/img/dreging.jpg" alt="" aria-hidden="true" />
          <div className="abp-stats-overlay" />
          <div className="abp-stats-wave" aria-hidden="true" />
        </div>
        <div className="wrap abp-stats-inner">
          {aboutStats.map((s) => (
            <div className="abp-stat" key={s.value}>
              <div className="abp-stat-icon" aria-hidden="true">{s.icon}</div>
              <span className="abp-stat-value">{s.value}</span>
              <span className="abp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="abp-founders">
        <div className="wrap">
          <div className="abp-founders-head">
            <span className="abp-kicker abp-kicker-centered">The Team</span>
            <h2 className="abp-section-title abp-centered">Our Founders</h2>
          </div>

          <div className="abp-founders-grid">
            {founders.map((f) => (
              <article className="abp-founder-card" key={f.name}>
                <div className="abp-founder-img-wrap">
                  {f.img ? (
                    <img src={f.img} alt={f.name} loading="lazy" />
                  ) : (
                    <div className="abp-founder-placeholder">
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="abp-founder-name">{f.name}</h3>
                <span className="abp-founder-role">{f.role}</span>
                <p className="abp-founder-bio">{f.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="abp-cta">
        <div className="abp-cta-bg">
          <img src="/img/Banner-Image.jpg" alt="" aria-hidden="true" />
          <div className="abp-cta-overlay" />
          <div className="abp-cta-wave" aria-hidden="true" />
        </div>
        <div className="wrap abp-cta-inner">
          <span className="abp-kicker abp-kicker-light">Start a conversation</span>
          <h2 className="abp-cta-title">Tell us about your seabed</h2>
          <p className="abp-cta-text">
            Depth, deadline, geology, traffic constraints — send what you have and we'll come back
            with a method and an indicative programme.
          </p>
          <div className="abp-cta-actions">
            <a href="/#contact" className="btn btn-primary">Discuss a scope</a>
            <a href={company.phoneHref} className="abp-cta-phone">
              {company.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
