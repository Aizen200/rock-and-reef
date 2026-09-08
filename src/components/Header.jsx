import { useState } from 'react'
import { company, nav } from '../data/site'
import { useScrolled, scrollToId } from '../hooks'

export default function Header({ active }) {
  const scrolled = useScrolled(60)
  const [open, setOpen] = useState(false)

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className={`header ${scrolled || open ? 'solid' : ''}`}>
      <div className="wrap header-top">
        <a className="logo" href="#top" onClick={(e) => go(e, 'top')} aria-label="Rock and Reef home">
          <img src="/img/Main-logo.png" alt="Rock and Reef Dredging" width="140" height="40" />
          <span className="logo-text">
            Dredging &amp;<br />Marine Works
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? 'active' : ''}
              onClick={(e) => go(e, n.id)}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <a className="btn btn-primary" href="#contact" onClick={(e) => go(e, 'contact')}>
            Get a Quote
          </a>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)}>
              {n.label}
            </a>
          ))}
          <a href={company.phoneHref}>Call {company.phone}</a>
        </div>
      )}
    </header>
  )
}
