import { useState } from 'react'
import { clients } from '../data/site'

/**
 * Client logo wall, shown as two marquee strips scrolling in opposite
 * directions. Each plate stays empty until its file is dropped into
 * /public/img/clients, so a missing logo never shows a broken image.
 */
function Logo({ name, img }) {
  const [failed, setFailed] = useState(false)
  return (
    <li className={`client ${failed ? 'empty' : ''}`}>
      {!failed && (
        <img
          src={img}
          alt={`${name} logo`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </li>
  )
}

/** One strip. The list is rendered twice so the loop is seamless at -50%. */
function Strip({ items, reverse, speed }) {
  return (
    <div className="client-strip">
      <ul
        className={`client-track ${reverse ? 'rev' : ''}`}
        style={{ '--speed': `${speed}s` }}
      >
        {[...items, ...items].map((c, i) => (
          <Logo key={`${c.name}-${i}`} {...c} />
        ))}
      </ul>
    </div>
  )
}

export default function Clients() {
  const half = Math.ceil(clients.length / 2)
  const top = clients.slice(0, half)
  const bottom = clients.slice(half)

  return (
    <section className="clients pad-y" aria-labelledby="clients-title">
      <div className="wrap">
        <div className="clients-head reveal">
          <h2 id="clients-title">Trusted by Industry Leaders</h2>
          <p>Join hundreds of companies that rely on our solutions</p>
        </div>
      </div>

      <div className="client-marquee reveal" aria-label="Client logos">
        <Strip items={top} speed={46} />
        <Strip items={bottom} speed={54} reverse />
      </div>
    </section>
  )
}
