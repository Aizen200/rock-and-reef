import { useCallback, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import StatBand from './components/StatBand'
import Services from './components/Services'
import Projects from './components/Projects'
import IndiaMap from './components/IndiaMap'
import Fleet from './components/Fleet'
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { company, nav } from './data/site'
import { useReveal, useActiveSection, scrollToId } from './hooks'
import ServicesPage from './components/ServicesPage'
import { useRoute } from './router'

export default function App() {
  const route = useRoute()
  useReveal(route)
  const ids = useMemo(() => nav.map((n) => n.id), [])
  const active = useActiveSection(ids)

  // Cross-section wiring: any card can open the service panel on a given project.
  const [openService, setOpenService] = useState(null)
  const [focusProject, setFocusProject] = useState(null)

  const openServiceWith = useCallback((serviceId, projectId) => {
    setOpenService({ serviceId, projectId, at: Date.now() })
    scrollToId('services')
  }, [])

  const focusOnMap = useCallback((projectId) => {
    setFocusProject(projectId)
    scrollToId('map')
  }, [])

  if (route === '/services') {
    return (
      <>
        <Header active="services" solid />
        <ServicesPage />
        <Footer />
        <WhatsApp />
      </>
    )
  }

  return (
    <>
      <Header active={active} />
      <main>
        <Hero />
        <StatBand />
        <About />
        <Services
          openService={openService}
          onClearOpen={() => setOpenService(null)}
          onFocusProject={focusOnMap}
        />
        <Projects onOpenService={openServiceWith} />
        <IndiaMap focusProject={focusProject} onOpenService={openServiceWith} />
        <Fleet onOpenService={openServiceWith} />
        <Clients />
        <Contact />
      </main>
      <Footer />

      <WhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: company.name,
            url: 'https://rockandreef.in/',
            logo: 'https://rockandreef.in/wp-content/uploads/2023/06/Main-logo.png',
            description: company.intro,
            telephone: company.phone,
            email: company.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Centurion Haware Mall, S-05 2nd Floor, Sector 19A Nerul Rd, East',
              addressLocality: 'Navi Mumbai',
              postalCode: '400706',
              addressCountry: 'IN',
            },
            sameAs: [company.linkedin, company.x],
          }),
        }}
      />
    </>
  )
}

function WhatsApp() {
  return (
        <a
          className="wa"
          href={company.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.42 1.32-1.95 1.36-.5.04-.98.22-3.3-.69-2.78-1.1-4.55-3.94-4.69-4.12-.14-.18-1.12-1.49-1.12-2.85s.71-2.02.96-2.3c.25-.28.55-.35.73-.35.18 0 .37 0 .53.01.17.01.4-.06.62.48.24.57.8 1.98.87 2.13.07.14.12.31.02.5-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.17-.19.7-.81.88-1.09.18-.28.37-.23.62-.14.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.66-.17 1.34z" />
          </svg>
        </a>
  )
}
