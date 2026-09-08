import { company, differentiators } from '../data/site'
import { scrollToId } from '../hooks'

export default function About() {
  return (
    <>
      <section id="about" className="pad-y">
        <div className="wrap intro-grid reveal">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title">Built for India&apos;s hardest seabeds</h2>
            <p className="section-lede">
              {company.intro} Our directors have spent more than two decades between them building
              and customising the very dredgers we deploy, which is why we take on rock, siltation
              and live traffic constraints that others schedule around.
            </p>
            <p className="section-lede">
              Our mission is to be the premier provider of innovative dredging solutions and
              shipbuilding services in India, delivering projects with exceptional quality, safety
              and efficiency.
            </p>
          </div>
          <figure className="intro-figure" style={{ margin: 0 }}>
            <img src="/img/fleet-1.jpg" alt="Rock and Reef dredger on station" loading="lazy" decoding="async" />
            <figcaption className="intro-badge">
              <div className="n">25M+</div>
              <div className="t">cubic metres dredged across 100+ works</div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="sustainability" className="pad-y section-sand">
        <div className="wrap">
          <div className="adv-head reveal">
            <div className="adv-head-l">
              <p className="eyebrow">Our advantage</p>
              <h2 className="section-title">Delivering more than dredging</h2>
            </div>
            <div className="adv-head-r">
              <p>
                Combining experience, innovation and a client first approach, we deliver dredging
                solutions that create lasting value.
              </p>
              <a
                className="adv-link"
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId('about')
                }}
              >
                About Us
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                  <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>

          <div className="adv-grid reveal">
            {differentiators.map((d, i) => (
              <article className="adv" key={d.title}>
                <div className="adv-top">
                  <span className="adv-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="adv-rule" aria-hidden="true" />
                  <span className="adv-ic" aria-hidden="true">{ADV_ICONS[i % ADV_ICONS.length]}</span>
                </div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <div className="adv-media">
                  <img src={d.img} alt="" loading="lazy" decoding="async" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

const ADV_ICONS = [
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="a">
    <path d="M3 17c1.5 1 3 1 4.5 0S10.5 16 12 17s3 1 4.5 0S19.5 16 21 17" />
    <path d="M5 13V7h14v6M9 7V4h6v3" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="b">
    <path d="M4 12a8 8 0 0116 0M3 12h18" />
    <circle cx="12" cy="16" r="2.6" />
    <path d="M7.5 21c0-1.9 2-3 4.5-3s4.5 1.1 4.5 3" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="c">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="d">
    <circle cx="9" cy="9" r="3" />
    <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
    <path d="M16 7a3 3 0 010 6M17.5 19c0-2-.7-3.5-2-4.5" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="e">
    <path d="M20 4C10 4 4 9 4 16c0 2 1 4 1 4s6-1 9-4c3-3 6-7 6-12z" />
    <path d="M5 20c3-6 7-10 12-13" />
  </svg>,
]
