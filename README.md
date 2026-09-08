# Rock and Reef — Website (React + Vite)

Homepage rebuild for Rock and Reef Dredging Pvt. Ltd., following the recommendations in
`rockandreef recommendations.docx`. All copy, project data and imagery are taken from the
existing site at https://rockandreef.in/.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview
```

## How the recommendations map to the build

| Recommendation | Where |
|---|---|
| Video hero, muted auto-loop, poster fallback, reduced-motion freeze | `src/components/Hero.jsx` |
| Services + projects as real blocks on page one | `src/components/Services.jsx`, `Projects.jsx` |
| Service → project → fleet linked in place | `Services.jsx` (`ServicePanel`) — opening a service expands a case study with metrics, which names the vessels used; every card in Projects, Fleet and the map can drive that panel |
| Sticky in-page sub-nav + fixed top nav | `Header.jsx`, `SubNav.jsx`, `hooks.js` (`useActiveSection`) |
| India map with project pins | `IndiaMap.jsx` — inline SVG, pin click swaps the project card |
| Mobile performance | compressed poster fallback, `loading="lazy"` below the fold, panels render only when opened |
| Capability statement PDF near the contact CTA | `Contact.jsx` |
| schema.org structured data per project | `Projects.jsx` (`projectSchema`) + Organization JSON-LD in `App.jsx` |

## Still needed from the client

- **`public/capability-statement.pdf`** — the download link in the contact section points here; the file is not in the repo yet.
- **Better hero footage.** `public/video/hero.mp4` is the clip from the current site (1.3 MB).
  The doc's first recommendation is new 4K drone/vessel footage, delivered compressed and muted
  with a poster frame — drop the replacement at the same path.
- Vessel-level specs (length, capacity, year) if the fleet cards should carry real numbers rather
  than category descriptions.
- Confirmation of client names on the JD-5, Gogha and Dakpathar projects.

## Content notes

`src/data/site.js` is the single source of content — services, projects, fleet, leadership,
stats and contact details. Editing that file updates every section, including the map pins
(`map: { x, y }`, normalised to a 100×100 box over 66–98°E / 6–37°N).
