import { useState } from 'react'
import { company, differentiators } from '../data/site'
import { scrollToId } from '../hooks'

export default function About() {
  const [advIndex, setAdvIndex] = useState(0)
  const active = differentiators[advIndex]

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

          <div className="adv-show reveal">
            <div className="adv-list" role="tablist" aria-label="What sets us apart">
              {differentiators.map((d, i) => (
                <button
                  key={d.title}
                  role="tab"
                  aria-selected={i === advIndex}
                  className={`adv-item ${i === advIndex ? 'active' : ''}`}
                  onClick={() => setAdvIndex(i)}
                  onMouseEnter={() => setAdvIndex(i)}
                >
                  <span className="adv-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="adv-ic" aria-hidden="true">{ADV_ICONS[i % ADV_ICONS.length]}</span>
                  <span className="adv-name">{d.title}</span>
                </button>
              ))}
            </div>

            <div className="adv-panel">
              <figure className="adv-figure">
                <img
                  key={active.img}
                  src={active.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <div className="adv-copy" key={active.title}>
                <h3>{active.title}</h3>
                <p>{active.text}</p>
              </div>
            </div>
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
