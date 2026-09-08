import { usePrefersReducedMotion } from '../hooks'

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
          <p>
            Whether it is Capital Dredging, Trenching, Marine Survey, Breakwater Construction or
            Shipbuilding, we take on the seabeds others schedule around.
          </p>
        </div>
      </div>
    </section>
  )
}
