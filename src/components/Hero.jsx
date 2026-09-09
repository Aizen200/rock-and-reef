import { usePrefersReducedMotion, scrollToId } from '../hooks'

export default function Hero() {
  const reduced = usePrefersReducedMotion()

  return (
    <section className="hero" id="top">
      <div className="hero-media">
        {reduced ? (
          <img src="/img/hero-still.jpg" alt="Rock King backhoe dredger under tow" width="1600" height="900" />
        ) : (
          <video
            src="/video/hero.mp4"
            poster="/img/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <h1>Depth where India needs it most</h1>
          <p className="hero-tag">Capital dredging and marine works, owned fleet, delivered in house</p>
          <div className="hero-body">
            <p className="hero-lede">
              Whether it is Capital Dredging, Trenching, Marine Survey, Breakwater Construction or
              Shipbuilding, we take on the seabeds others schedule around.
            </p>
          </div>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('services')
              }}
            >
              Explore Our Services
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('contact')
              }}
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
