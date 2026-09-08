import { useState } from 'react'
import { clients } from '../data/site'

/**
 * Client strip. Each logo falls back to a plain wordmark until its file is
 * dropped into /public/img/clients, so the row never shows a broken image.
 */
function Client({ name, img }) {
  const [failed, setFailed] = useState(false)
  if (failed || !img) return <span className="client-word">{name}</span>
  return <img src={img} alt={name} loading="lazy" decoding="async" onError={() => setFailed(true)} />
}

export default function Clients() {
  return (
    <section className="clients" aria-label="Clients and partners">
      <div className="wrap client-row reveal">
        {clients.map((c) => (
          <span className="client" key={c.name}>
            <Client {...c} />
          </span>
        ))}
      </div>
    </section>
  )
}
