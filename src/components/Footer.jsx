import { company, nav, services } from '../data/site'
import { scrollToId } from '../hooks'

export default function Footer() {
  const go = (e, id) => {
    e.preventDefault()
    scrollToId(id)
  }

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="/img/Main-logo.png" alt="Rock and Reef Dredging" width="100" height="94" />
            <p style={{ marginTop: 16, fontSize: 14, maxWidth: '34ch' }}>{company.intro}</p>
            <div className="social" style={{ marginTop: 18 }}>
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href={company.x} target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
            </div>
          </div>

          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><a href="#top" onClick={(e) => go(e, 'top')}>Home</a></li>
              {nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} onClick={(e) => go(e, n.id)}>{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" onClick={(e) => go(e, 'services')}>{s.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Get in touch</h5>
            <ul>
              <li>{company.address}</li>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><a href={company.phoneHref}>{company.phone}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rock And Reef Dredging Pvt. Ltd. All rights reserved.</span>
          <span>Navi Mumbai, India</span>
        </div>
      </div>
    </footer>
  )
}
