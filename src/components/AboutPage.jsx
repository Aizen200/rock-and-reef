import { Ship, Users, Box, Target, Waves, Phone, ArrowRight, Anchor, ShieldCheck, Compass, Activity } from 'lucide-react'
import { company } from '../data/site'

const founders = [
  {
    name: 'MR. HARPREMAN S. SINGH CHAWLA',
    role: 'MANAGING DIRECTOR',
    img: '/img/Harsharan-Singh-Dharni.jpg',
    bio: 'A seasoned maritime professional with over two decades of experience in dredging and marine infrastructure. He leads Rock and Reef with a clear vision for operational excellence, sustainable growth and a stronger, more connected India.',
  },
  {
    name: 'MR. PARMINDER SINGH CHAWLA',
    role: 'DIRECTOR',
    img: '/img/parminder.png',
    bio: 'Brings deep technical expertise and hands-on experience in project execution and marine operations. He plays a key role in driving innovation, efficiency and the company\'s commitment to delivering high-quality solutions.',
  },
  {
    name: 'MR. PUNEET DHIMAN',
    role: 'DIRECTOR',
    img: '/img/Manish-Shaha.png',
    bio: 'A results-driven leader with a strong focus on strategic growth, client relationships and operational excellence. He works closely with teams to deliver value and build long-term partnerships.',
  },
  {
    name: 'MR. GURSHARAN S. SINGH CHAWLA (BUNTY)',
    role: 'DIRECTOR',
    img: '/img/Mr.-Gurudayal-Singh-Dhanotra.jpg',
    bio: 'Brings a rich legacy of industry knowledge and a deep commitment to safety, people and performance. His guidance continues to strengthen Rock and Reef\'s values and long-term vision.',
  },
]

export default function AboutPage() {
  return (
    <main className="ab-exact page">
      {/* ── 1. Hero Section ── */}
      <section className="ab-exact-hero">
        <div className="ab-exact-hero-bg">
          <img src="/img/Banner-Image.jpg" alt="Rock and Reef Dredger" />
          <div className="ab-exact-hero-scrim" />
        </div>

        <div className="wrap ab-exact-hero-grid">
          <div className="ab-exact-hero-copy">
            <span className="ab-exact-kicker">— ABOUT US</span>
            <h1 className="ab-exact-hero-title">
              ENABLING INDIA’S MARITIME GROWTH
            </h1>
            <p className="ab-exact-hero-subtitle">
              Through wider channels and a stronger tomorrow.
            </p>
            <p className="ab-exact-hero-lede">
              Rock and Reef Dredging & Marine Works is a leading dredging and marine infrastructure company in India,
              delivering reliable, innovative and sustainable solutions that support India’s growing maritime economy
              and coastal development.
            </p>
          </div>

          <div className="ab-exact-hero-slogan">
            <span>DREDGE</span>
            <span>DEVELOP</span>
            <span>STRENGTHEN</span>
            <span>FOR INDIA</span>
          </div>
        </div>

        {/* Hero Bottom Stats Bar */}
        <div className="ab-exact-stats-bar">
          <div className="wrap ab-exact-stats-grid">
            <div className="ab-exact-stat-item">
              <div className="ab-exact-stat-icon">
                <Ship size={28} strokeWidth={1.5} />
              </div>
              <div className="ab-exact-stat-body">
                <span className="ab-exact-stat-num">100+</span>
                <span className="ab-exact-stat-label">PROJECTS COMPLETED ACROSS INDIA</span>
              </div>
            </div>

            <div className="ab-exact-stat-item">
              <div className="ab-exact-stat-icon">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <div className="ab-exact-stat-body">
                <span className="ab-exact-stat-num">25+</span>
                <span className="ab-exact-stat-label">YEARS OF COMBINED EXPERIENCE</span>
              </div>
            </div>

            <div className="ab-exact-stat-item">
              <div className="ab-exact-stat-icon">
                <Box size={28} strokeWidth={1.5} />
              </div>
              <div className="ab-exact-stat-body">
                <span className="ab-exact-stat-num">25 MILLION+</span>
                <span className="ab-exact-stat-label">CUBIC METERS DREDGED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Who We Are Section ── */}
      <section className="ab-exact-who">
        <div className="wrap ab-exact-who-grid">
          <div className="ab-exact-who-copy">
            <span className="ab-exact-kicker dark">— WHO WE ARE</span>
            <h2 className="ab-exact-who-title">
              A TRUSTED PARTNER IN BUILDING INDIA’S COASTAL FUTURE
            </h2>
            <p className="ab-exact-who-p">
              Rock and Reef Dredging & Marine Works is a leading dredging and marine works company in India,
              with a strong track record in port development, channel maintenance, land reclamation and coastal
              protection. We combine technical expertise, modern equipment and a commitment to safety and
              sustainability to deliver projects that create lasting value.
            </p>
            <p className="ab-exact-who-p">
              Our work supports the nation’s maritime growth, enabling safer navigation, stronger coastal
              infrastructure and thriving ports for a more connected and prosperous India.
            </p>
            <a href="/services" className="ab-exact-btn-dark">
              GET TO KNOW US <ArrowRight size={16} />
            </a>
          </div>

          <div className="ab-exact-who-media">
            <div className="ab-exact-who-img-wrap">
              <img src="/img/dreging.jpg" alt="Dredging operation" />
              <div className="ab-exact-who-overlay-bar">
                <div className="ab-exact-who-feature">
                  <Anchor size={20} />
                  <span>PORT DEVELOPMENT</span>
                </div>
                <div className="ab-exact-who-feature">
                  <Waves size={20} />
                  <span>CHANNEL MAINTENANCE</span>
                </div>
                <div className="ab-exact-who-feature">
                  <Compass size={20} />
                  <span>ENVIRONMENTAL RESTORATION</span>
                </div>
                <div className="ab-exact-who-feature">
                  <ShieldCheck size={20} />
                  <span>COASTAL PROTECTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Our Mission & Vision Section ── */}
      <section className="ab-exact-mv">
        <div className="wrap">
          <div className="ab-exact-mv-head">
            <span className="ab-exact-kicker-center">— OUR MISSION & VISION —</span>
          </div>

          <div className="ab-exact-mv-grid">
            {/* Mission Card */}
            <div className="ab-exact-mv-card">
              <div className="ab-exact-mv-badge">
                <Target size={28} strokeWidth={1.8} />
              </div>
              <div className="ab-exact-mv-body">
                <h3>OUR MISSION</h3>
                <p>
                  To deliver reliable, safe and efficient dredging and marine infrastructure solutions for India,
                  creating lasting value through technical excellence, responsible practices and a commitment to the
                  people and communities we serve.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="ab-exact-mv-card">
              <div className="ab-exact-mv-badge">
                <Waves size={28} strokeWidth={1.8} />
              </div>
              <div className="ab-exact-mv-body">
                <h3>OUR VISION</h3>
                <p>
                  To be India’s leading partner in maritime development, driving progress through innovation,
                  sustainability and long-term impact, for stronger coastal economies and a more connected tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* (OUR VALUES section skipped per user request) */}

      {/* ── 4. Our Founders Section ── */}
      <section className="ab-exact-founders">
        <div className="wrap">
          <div className="ab-exact-founders-head">
            <span className="ab-exact-kicker-center">— OUR FOUNDERS —</span>
            <p className="ab-exact-founders-sub">
              Experienced leadership. A shared vision for India’s maritime growth.
            </p>
          </div>

          <div className="ab-exact-founders-grid">
            {founders.map((f) => (
              <div className="ab-exact-founder-card" key={f.name}>
                <div className="ab-exact-founder-photo">
                  <img src={f.img} alt={f.name} loading="lazy" />
                </div>
                <div className="ab-exact-founder-info">
                  <h3 className="ab-exact-founder-name">{f.name}</h3>
                  <span className="ab-exact-founder-role">{f.role}</span>
                  <p className="ab-exact-founder-bio">{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Let's Work Together CTA ── */}
      <section className="ab-exact-cta">
        <div className="ab-exact-cta-bg">
          <img src="/img/deep-dredging-service.png" alt="Dredging pipe background" />
          <div className="ab-exact-cta-scrim" />
        </div>

        <div className="wrap ab-exact-cta-grid">
          <div className="ab-exact-cta-copy">
            <span className="ab-exact-kicker">— LET’S WORK TOGETHER</span>
            <h2 className="ab-exact-cta-title">
              LET’S BUILD A STRONGER TOMORROW
            </h2>
            <p className="ab-exact-cta-lede">
              From ports to coastlines, we partner with you to deliver innovative, sustainable dredging
              solutions for a stronger, more connected India.
            </p>
            <div className="ab-exact-cta-buttons">
              <a href="/#contact" className="ab-exact-btn-cyan">
                DISCUSS A PROJECT <ArrowRight size={16} />
              </a>
              <a href={company.phoneHref} className="ab-exact-btn-phone">
                <Phone size={16} /> +91 98202 45630
              </a>
            </div>
          </div>

          <div className="ab-exact-cta-slogan">
            <span>CLEANER WATERS</span>
            <span>SAFER PORTS</span>
            <span>STRONGER COMMUNITIES</span>
            <span>A BRIGHTER TOMORROW</span>
          </div>
        </div>
      </section>
    </main>
  )
}
