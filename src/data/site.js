// Content sourced from rockandreef.in (existing site) — services, projects, fleet, leadership.

export const company = {
  name: 'Rock and Reef Dredging Pvt. Ltd.',
  short: 'Rock and Reef',
  tagline: 'Specialists in Dredging and Marine Works',
  intro:
    'Rock And Reef Dredging is a leading dredging and shipbuilding company that has been at the forefront of capital dredging in India.',
  phone: '+91 9833949560',
  phoneHref: 'tel:+919833949560',
  whatsapp: 'https://api.whatsapp.com/send?phone=919833949560&text=Hi%20Rock%20and%20Reef',
  email: 'hello@rockandreef.in',
  address:
    'Centurion Haware Mall, S-05 2nd Floor, Sector 19A Nerul Rd, East, Navi Mumbai, India, 400706',
  linkedin: 'https://www.linkedin.com/company/rock-and-reef-dredging-pvt-ltd/about/?viewAsMember=true',
  x: 'https://x.com/rockandreef33',
}

export const stats = [
  { value: '25+', label: 'Years of industry experience' },
  { value: '100+', label: 'Projects completed successfully' },
  { value: '25+', label: 'Million cubic metres dredged' },
  // Backhoe, cutter suction and grab: the classes we own and operate.
  { value: '11', label: 'Treasure and  the fleet' },
]

// --- Fleet -------------------------------------------------------------
export const fleet = {
  backhoe: {
    id: 'backhoe',
    name: 'Backhoe Dredgers',
    img: '/img/Backchoe-Dredgers.png',
    tier: 'dredger',
    role: 'Rock and hard strata',
    spec: 'Pontoon mounted excavators for hard, compacted and rocky seabed, the core of our capital dredging capability.',
  },
  csd: {
    id: 'csd',
    name: 'Cutter Suction Dredgers',
    img: '/img/cutter-suction-dredgers.png',
    tier: 'dredger',
    role: 'Reservoirs and channels',
    spec: 'Continuous cutting and pumping of sediment through floating pipeline, ideal for reservoirs, channels and reclamation.',
  },
  grab: {
    id: 'grab',
    name: 'Grab Dredgers',
    img: '/img/Grab-Dredgers-.png',
    tier: 'dredger',
    role: 'Berths and quay walls',
    spec: 'Precise deep reach digging alongside berths, quay walls and confined harbour pockets.',
  },
  barge: {
    id: 'barge',
    name: 'Hopper Barges',
    img: '/img/Barge.png',
    tier: 'support',
    role: 'Sediment haulage',
    spec: 'Self propelled hoppers carrying dredged material to the designated disposal ground.',
    units: ['Rock 1', 'Rock 9', 'Rock 10', 'Rock 12', 'Phoenix', 'Reef 1'],
  },
  tug: {
    id: 'tug',
    name: 'Tugs',
    img: '/img/tug.png',
    tier: 'support',
    role: 'Towage and positioning',
    spec: 'Towage, positioning and station keeping for the dredging spread.',
    units: ['Rockstar', 'Premrath', 'Porunai'],
  },
  launch: {
    id: 'launch',
    name: 'Motor Launch',
    img: '/img/Motor-Lauch.png',
    tier: 'support',
    role: 'Crew transfer',
    spec: 'Crew transfer and site supervision across active working areas.',
  },
  survey: {
    id: 'survey',
    name: 'Survey Boat',
    img: '/img/survey-boat.png',
    tier: 'support',
    role: 'Sounding and survey',
    spec: 'Single and multi beam hydrographic survey platform for pre, progress and post dredge sounding.',
  },
}

// --- Projects ----------------------------------------------------------
export const projects = [
  {
    id: 'porbandar',
    title: 'Coast Guard Jetty, Porbandar Port',
    mapLabel: 'Porbandar Port',
    place: 'Porbandar Port, Gujarat',
    region: 'Gujarat',
    client: 'Gujarat Maritime Board',
    year: '2025',
    img: '/img/Banner-Image.jpg',
    metrics: [
      { k: '1,09,970 m³', v: 'Dredge quantity' },
      { k: '6.3 m BCD', v: 'Design level' },
      { k: '6 months', v: 'Contract period' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Capital dredging of the Indian Coast Guard berth pocket, inside a live all-weather port.',
    summary:
      'Capital dredging in front of the existing and proposed Coast Guard Jetty at Porbandar Port to 6.3 m BCD, for the Gujarat Maritime Board. Executed in a live channel shared with ICG, naval and commercial traffic, with a dredge spread planned for relocation at short notice, mixed strata from fine sand to hard rock, and all spoil barged to an offshore ground in over 20 m of water to protect the shoreline and fisheries harbour.',
    services: ['capital-dredging', 'survey'],
    vessels: ['backhoe', 'barge', 'tug', 'survey'],
    coords: { lat: 21.63, lng: 69.62 },
    // long-form case study, rendered on the project page when present
    detail: {
      facts: [
        { k: 'Scope', v: 'Capital dredging to 6.3 m BCD' },
        { k: 'Dredge quantity', v: '1,09,970 m³ (estimated)' },
        { k: 'Duration', v: '6 months, excluding monsoon' },
        { k: 'Start date', v: '25 November 2025' },
        { k: 'Awarding authority', v: 'Gujarat Maritime Board, Office of the Executive Engineer (Mech.), PIU Porbandar' },
      ],
      overview: [
        'Porbandar Port, situated on the Arabian Sea coast of Gujarat, is an all-weather, direct-berthing commercial port serving merchant vessels, naval ships and Indian Coast Guard (ICG) ships, alongside an active fisheries harbour. The Indian Coast Guard operates a round-the-clock station at the port, and the Gujarat Maritime Board engaged our team to carry out capital dredging in front of the existing and proposed extension of the Coast Guard Jetty to ensure smooth, unhindered movement of ICG vessels.',
        'The project required dredging the berth pocket to a design level of 6.3 m BCD, executed within a live operational environment shared with cargo vessels, naval ships and coast guard traffic, demanding a dredge spread capable of being relocated at short notice whenever shipping movements required it.',
      ],
      location: {
        text: 'Porbandar Port lies on the open Arabian Sea coast. The dredging footprint covered the berth face of the existing and proposed Coast Guard Jetty, with all dredged material transported and disposed of at a designated offshore dumping ground in waters deeper than 20 m below MSL, positioned well clear of the shoreline to prevent sediment drift back into the port or fisheries area.',
        facts: [
          { k: 'Port coordinates', v: "21°38' N, 69°37' E" },
          { k: 'Disposal ground (offshore)', v: '21°36\'5.00" N, 69°29\'11.74" E' },
          { k: 'Water body', v: 'Arabian Sea, open sea, all-weather direct-berthing port' },
          { k: 'Tidal range (MHHW to MLLW)', v: '+2.50 m to +0.80 m (Admiralty Chart No. 2054)' },
        ],
      },
      scope: {
        intro: 'The work covered the full dredging cycle for the Coast Guard berth pocket.',
        table: [
          { k: 'Dredging location', v: 'In front of existing and proposed extension of the Coast Guard Jetty, Porbandar Port' },
          { k: 'Level to be achieved', v: '6.3 m BCD (+300 mm vertical / +500 mm horizontal tolerance permitted)' },
          { k: 'Estimated quantity', v: '1,09,970 m³' },
        ],
        items: [
          'Mobilisation of a suitable dredge spread with ancillaries, capable of handling fine sand, clay and silt, pebbles, stray boulders and hard strata encountered in the Porbandar seabed.',
          'Dredging of the berth pocket to 6.3 m BCD, within permitted vertical (+300 mm) and horizontal (+500 mm) tolerances.',
          'Transport and disposal of dredged spoil at the identified offshore ground, beyond 20 m MSL depth.',
          'Continuous hydrographic surveying: setting out, water-level registration, and pre-, interim and post-dredge surveys to certify quantities and levels achieved.',
          'A traffic-compatible work methodology allowing the dredge spread to be relocated at short notice to keep the channel clear for ICG, naval and commercial shipping movements.',
        ],
      },
      method: [
        {
          title: 'Equipment and production planning',
          text: 'The method statement detailed the dredging equipment deployed, its capacity and per-hour output, and the expected production rates for each unit of plant mobilised, enabling a realistic execution schedule to be built around the six-month completion window, excluding monsoon.',
        },
        {
          title: 'Dredging methodology',
          text: 'A detailed bar chart sequenced the deployment of equipment and the order of work across the jetty frontage, with allowances built in for weather downtime and site constraints. Because the dredge area sits directly in an active shipping channel, the spread was planned for rapid shifting at short notice, ensuring Coast Guard and other vessel movements were never obstructed during execution.',
        },
        {
          title: 'Disposal plan',
          text: 'All dredged material was barged to the designated offshore disposal ground in water depths exceeding 20 m below MSL, in line with the environmental safeguard of keeping disposed sediment from migrating back toward the shoreline.',
        },
        {
          title: 'Survey methodology',
          text: 'Pre-dredge, interim and post-dredge hydrographic surveys were carried out to verify achieved levels and compute dredged quantities using Simpson\'s Rule, supported by continuous water-level registration and full setting-out of the work area with markers and beacons.',
        },
      ],
      challenges: [
        {
          title: 'Live shipping channel',
          problem: 'Dredging had to proceed without disrupting Coast Guard, naval and commercial vessel movements.',
          answer: 'Addressed through a mobile, quickly relocatable dredge spread.',
        },
        {
          title: 'Variable seabed strata',
          problem: 'The scope anticipated everything from fine sand to hard strata and rock mass.',
          answer: 'A dredge spread specification flexible enough to handle mixed ground conditions.',
        },
        {
          title: 'Environmentally sensitive disposal',
          problem: 'Spoil had to be placed far enough offshore and deep enough to prevent any impact on the shoreline or fisheries area.',
          answer: 'Precise navigation to the designated offshore ground, beyond 20 m below MSL.',
        },
      ],
    },
  },
  {
    id: 'mult',
    title: 'MULT Project, Capital Dredging',
    mapLabel: 'Kochi Port',
    place: 'Kochi Port, Kerala',
    region: 'Kerala',
    client: 'IOCL, via Kochi Port',
    year: '2022',
    img: '/img/project-1.png',
    metrics: [
      { k: '1,450,000 m³', v: 'Dredged' },
      { k: '2022', v: 'Completed' },
      { k: 'Capital', v: 'Dredging class' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Capital dredging for the Multi Utility LNG Terminal, delivered straight through monsoon siltation.',
    summary:
      'Capital dredging for the Multi Utility LNG Terminal at Kochi Port. Heavy monsoon siltation and opposition from local fishermen were managed through cutting edge dredging equipment, strategic scheduling and sustained community engagement.',
    services: ['capital-dredging'],
    vessels: ['backhoe', 'barge', 'tug', 'survey'],
    // real coordinates; projected to the map in indiaPath.js
    coords: { lat: 9.93, lng: 76.27 },
  },
  {
    id: 'gogha',
    title: 'Ferry Terminal, Gogha',
    mapLabel: 'Gogha',
    place: 'Gogha, Gulf of Khambhat, Gujarat',
    region: 'Gujarat',
    client: 'Ferry terminal developer',
    year: '2023',
    img: '/img/project-2.png',
    metrics: [
      { k: '650,000 m³', v: 'Dredged' },
      { k: '4 km × 1 km', v: 'Navigable channel' },
      { k: '2023', v: 'Completed' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'A terminal turning circle and a 4 km navigable channel, cut against current and hard sandstone.',
    summary:
      'Dredging of the terminal turning circle and a 4 km long, 1 km wide navigable channel leading to the terminal, executed against fast moving currents, live ferry traffic and hard sandstone formations.',
    services: ['capital-dredging', 'maintenance-dredging'],
    vessels: ['backhoe', 'barge', 'tug'],
    coords: { lat: 21.68, lng: 72.28 },
  },
  {
    id: 'jd5',
    title: 'Fifth Oil Berth (JD-5), MbPT',
    mapLabel: 'Fifth Oil Berth',
    place: 'Mumbai Harbour, Maharashtra',
    region: 'Maharashtra',
    client: 'Sapura (main contractor), Mumbai Port Trust',
    year: '2019',
    img: '/img/fifth-oil-berth.jpg',
    metrics: [
      { k: '4,068 m', v: 'Trench length' },
      { k: '5 to 50 m', v: 'Trench width' },
      { k: '6 m below CD', v: 'Max depth' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Over 4 km of pipeline trenching and backfill, executed inside a live Mumbai harbour.',
    summary:
      'Trenching and backfilling across 4,068 metres for offshore pipeline installation, with trench widths from 5 to 50 metres and depths of up to 6 metres below Chart Datum, as subcontractor to Sapura.',
    services: ['trenching'],
    vessels: ['backhoe', 'barge', 'survey'],
    coords: { lat: 18.93, lng: 72.87 },
  },
  {
    id: 'dakpathar',
    title: 'Dakpathar Barrage, Reservoir Dredging',
    mapLabel: 'Dakpathar Barrage',
    place: 'Dakpathar, Uttarakhand',
    region: 'Uttarakhand',
    client: 'Executed with international technology partners',
    year: '2021',
    img: '/img/dakpathar-barrage-rock-and-reef-project.jpg',
    metrics: [
      { k: 'Geotextile tubes', v: 'Sediment placement' },
      { k: 'Pilot', v: 'First of its kind in India' },
      { k: '2021', v: 'Executed' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Reservoir desilting with sediment pumped into geotextile tubes, a first of its kind in India.',
    summary:
      'Reservoir dredging and sustainable sediment management: accumulated silt was extracted and pumped into geotextile tubes for embankment strengthening and controlled desilting, a pioneering pilot for inland dredging in India.',
    services: ['reservoir-dredging'],
    vessels: ['csd', 'survey'],
    coords: { lat: 30.5, lng: 77.85 },
  },
  {
    id: 'offshore',
    title: 'Offshore Works, Pipe Laying & Trenching',
    mapLabel: 'Offshore Works',
    place: 'Offshore Mumbai, Maharashtra',
    region: 'Maharashtra',
    client: 'Sapura',
    year: '2019',
    img: '/img/project-4.png',
    metrics: [
      { k: '4 km', v: 'Corridor' },
      { k: 'Rock breaking', v: 'Method' },
      { k: '2019', v: 'Completed' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'Offshore pipe laying and trenching through rock along a 4 km subsea corridor.',
    summary:
      'Offshore pipe laying and trenching where rock formations along the route were addressed with specialised rock breaking techniques and continuous survey control.',
    services: ['trenching'],
    vessels: ['backhoe', 'barge', 'tug', 'survey'],
    coords: { lat: 19.0, lng: 72.3 },
  },
  {
    id: 'salvage',
    title: 'Bollard Salvage, APM Terminals',
    mapLabel: 'Bollard Salvage',
    place: 'Navi Mumbai, Maharashtra',
    region: 'Maharashtra',
    client: 'APM Terminals',
    year: '',
    img: '/img/salvage_operation.png',
    metrics: [
      { k: '4 hours', v: 'Recovery time' },
      { k: 'Zero visibility', v: 'Conditions' },
      { k: 'Liebherr crane', v: 'Primary plant' },
    ],
    // one-line version for the project tile's hover panel
    blurb:
      'A fallen bollard recovered from zero visibility silt in a record four hours.',
    summary:
      'Recovery of a fallen bollard from beneath heavy siltation in zero visibility conditions, completed in a record four hours using grid based dredging, four point mooring and load variation monitoring.',
    services: ['capital-dredging'],
    vessels: ['grab', 'tug'],
    coords: { lat: 18.99, lng: 73.02 },
  },
]

// --- Services ----------------------------------------------------------
export const services = [
  {
    id: 'capital-dredging',
    name: 'Capital Dredging',
    img: '/img/Dredging-Services.jpg',
    blurb:
      'New capital dredging for ports, harbours, approach channels and navigation basins.',
    detail:
      'A comprehensive range of dredging services, including river desilting, coastal restoration and harbour maintenance. Capital dredging is the core of Rock and Reef, and the fleet is built around it.',
  },
  {
    id: 'maintenance-dredging',
    name: 'Maintenance Dredging',
    img: '/img/dreging.jpg',
    blurb:
      'Keeping channels, berths and waterways at required depths for safe operations.',
    detail:
      'Planned, survey driven removal of siltation so terminals hold their declared depth year round, scheduled around live traffic and monsoon cycles.',
  },
  {
    id: 'deep-dredging',
    name: 'Deep Dredging',
    img: '/img/deep-dredging-service.png',
    blurb: 'Dredging for deeper waters and challenging geological conditions.',
    detail:
      'Rock and Reef delivers specialist deep dredging where design depths exceed what conventional plant can reach, using long reach backhoe and cutter suction dredgers to achieve and hold the required profile in hard and compacted strata.',
  },
  {
    id: 'reservoir-dredging',
    name: 'Reservoir Dredging',
    img: '/img/dakpathar-barrage-rock-and-reef-project.jpg',
    blurb: 'Restoring storage capacity in reservoirs and other inland water bodies.',
    detail:
      'Reservoir and dam environments lose capacity to sediment build up, siltation and debris. We restore storage with inland dredging spreads and sustainable sediment placement, including geotextile tube dewatering, as pioneered at Dakpathar Barrage.',
  },
  {
    id: 'trenching',
    name: 'Trenching Works',
    img: '/img/Trenching-Works.jpg',
    blurb:
      'Dredging and trenching for subsea cables, pipelines and utility installations.',
    detail:
      'Dive into the world of underwater trenching. We excavate precise trenches for subsea cables, pipelines and more using cutting edge engineering techniques, including backfill and reinstatement to specification.',
  },
  {
    id: 'survey',
    name: 'Hydrographic & Bathymetric Survey',
    img: '/img/Hydrographic-and-Bathymetric-Survey.jpg',
    blurb: 'Comprehensive hydrographic surveys and seabed mapping for accurate data and planning.',
    detail:
      'Our comprehensive survey services provide detailed underwater maps for safe navigation and environmental assessment. We measure depth, analyse seabed conditions and identify potential hazards.',
  },
  {
    id: 'breakwater',
    name: 'Breakwater Construction',
    img: '/img/Breakwater-Construction-Services-iPAC-Automation-1-1.jpg',
    blurb: 'Marine construction solutions including breakwaters, revetments and coastal protection works.',
    detail:
      'Our Breakwater Construction and Maintenance Services are designed to protect shorelines, harbours and coastal infrastructure from the impact of waves and erosion.',
  },
  {
    id: 'intake-outfall',
    name: 'Intake & Outfall Channel Dredging',
    img: '/img/intake-outfall-channel-dredging-services-india.webp',
    blurb: 'Dredging for intake and outfall channels for power plants, industrial facilities and other marine infrastructure.',
    detail:
      'Specialised intake and outfall channel dredging for power plants, desalination facilities and industrial plants, planned around plant availability windows.',
  },
  {
    id: 'shipbuilding',
    name: 'Shipbuilding & Repair',
    img: '/img/Shipbuilding.jpg',
    blurb: 'Building, repairing and refurbishing hopper barges, tugs and support vessels.',
    detail:
      'We build, repair and refurbish vessels of all types. Our experienced team specialises in creating customised solutions that meet your exact requirements, including the specialised backhoe dredgers in our own fleet.',
  },
]

export const differentiators = [
  {
    title: 'Unparalleled Execution',
    img: '/img/industrial-port-de-barcelona-1.jpg',
    text: 'Projects delivered on programme in live ports, against monsoon siltation, currents and rock.',
  },
  {
    title: 'Extensive Experience',
    img: '/img/extensive-experirnrce.jpg',
    text: 'Over 25 years and 100+ dredging works across India, from harbours to Himalayan reservoirs.',
  },
  {
    title: 'Technology & Innovation',
    img: '/img/Technological-Advancements-1.jpg',
    text: 'Dredgers tailored and customised in house, including our own advanced backhoe, Rock King.',
  },
  {
    title: 'Client Centric Approach',
    img: '/img/Dredging-Services.jpg',
    text: 'Tailored solutions built around each client\u2019s requirements, with open communication and transparency from mobilisation to handover.',
  },
  {
    title: 'Environmental Stewardship',
    img: '/img/about-us-2-min.jpg',
    text: 'Sustainable sediment management, geotextile placement and community engagement built into method statements.',
  },
]

export const leadership = [
  {
    name: 'Harsharan Singh Dharni',
    role: 'Managing Director',
    img: '/img/Harsharan-Singh-Dharni.jpg',
    bio: '25+ years of dredging expertise; developed the specialised backhoe dredger equipment at the core of the fleet.',
  },
  {
    name: 'Parminder Singh Dharni',
    role: 'Director',
    img: '/img/Mr.-Parmindar-Singh-Dharni.png',
    bio: 'Has executed some of the most challenging projects in the country, including capital dredging at Mundra Port.',
  },
  {
    name: 'Manish Shah',
    role: 'Director',
    img: '/img/Manish-Shaha.png',
    bio: 'Brings a strong vendor network and deep industry supply chain expertise to project mobilisation.',
  },
  {
    name: 'Gurudayal Singh Dhanotra',
    role: 'Director',
    img: '/img/Mr.-Gurudayal-Singh-Dhanotra.jpg',
    bio: '30 years of shipbuilding experience across hopper barges, tugs and dredgers.',
  },
]

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'fleet', label: 'Fleet' },
  { id: 'contact', label: 'Contact' },
]

// --- Clients -----------------------------------------------------------
// Logo files live in /public/img/clients. A missing file renders as an empty
// plate, never a broken img.
export const clients = [
  { name: 'Larsen & Toubro', img: '/img/clients/landt.png' },
  { name: 'Tata Projects', img: '/img/clients/tata-projects.png' },
  { name: 'Adani Ports', img: '/img/clients/adani-ports.png' },
  { name: 'Navyuga Engineering', img: '/img/clients/navyuga.png' },
  { name: 'IGPL', img: '/img/clients/igpl.png' },
  { name: 'Cemindia', img: '/img/clients/cemindia.png' },
  { name: 'Flowline Systems', img: '/img/clients/flowline-systems.png' },
  { name: 'Comacoe', img: '/img/clients/comacoe.png' },
  { name: 'BSA Tugs', img: '/img/clients/bsa-tugs.png' },
  { name: 'Twilight Shipping', img: '/img/clients/twilight-shipping.png' },
  { name: 'C-Track Geosciences and Geoinformatics', img: '/img/clients/c-track-geosciences-and-geoinformatics.png' },
  { name: 'Creative Construction', img: '/img/clients/creative-construction.png' },
  { name: 'Paresh Constructions and Foundations', img: '/img/clients/paresh-constructions-and-foundations.png' },
  { name: 'Vishwakarma Mechanical Works', img: '/img/clients/vishwakarma-mechanical-works.png' },
  { name: 'MERC', img: '/img/clients/merc.png' },
  { name: 'Bhadrakali', img: '/img/clients/bhadrakali.png' },
  { name: 'Kink Revealers', img: '/img/clients/kink-revealers.png' },
]

/**
 * Long-form content for the individual service pages. Only services listed here
 * get their own page; the rest fall back to the services index for now.
 */
// --- Fleet detail pages ---------------------------------------------------
// One page per vessel class that has a spec sheet, at /fleet/<id>. Specs are
// transcribed from the vessel's data sheet; the source PDF is linked for download.
export const fleetDetail = {
  csd: {
    // Photo behind the class page hero; falls back to the silhouette plate if missing.
    hero: '/img/fleet/csd-hero.jpg',
    headline: 'Continuous cutting and pumping through floating pipeline',
    intro: [
      'Cutter suction dredgers cut the seabed with a rotating cutter head and pump the loosened material ashore or to a reclamation area through a floating pipeline, without a hopper cycle. That makes them the most productive plant for reservoirs, channels, inland waterways and reclamation, where the discharge point is a fixed distance away.',
      'Our cutter suction dredger is a dismountable IHC Beaver class unit that travels by road, rail or sea, so we can mobilise it to reservoirs and rivers well beyond reach of a sea-going spread.',
    ],
    vessels: [
      {
        id: 'brahmaputra',
        name: 'CSD Brahmaputra',
        type: 'IHC Beaver 45 cutter suction dredger',
        img: '/img/csd-brahmaputra.jpg',
        pdf: '/docs/csd-brahmaputra-specifications.pdf',
        summary:
          'A robust and highly productive dredger built for low cost per cubic metre: an exceptional rate of pumping power, a Cutter Special pump with a large ball passage for high availability, a single low maintenance diesel engine, and first class ergonomics and diagnostics on board.',
        headline: [
          { k: 'Dredging depth', v: '14.0 m' },
          { k: 'Discharge diameter', v: '450 mm' },
          { k: 'Total power', v: '895 kW' },
          { k: 'Length overall', v: '26.60 m' },
        ],
        specs: [
          {
            group: 'Dimensions',
            rows: [
              ['Length overall (ladder raised), approx.', '26.60 m'],
              ['Length over pontoons', '16.96 m'],
              ['Breadth', '6.99 m'],
              ['Depth', '2.01 m'],
              ['Mean draught with full bunkers', '1.40 m'],
              ['Maximum standard dredging depth', '14.0 m'],
              ['Suction pipe diameter', '550 mm'],
              ['Discharge pipe diameter', '450 mm'],
              ['Total installed power', '895 kW'],
            ],
          },
          {
            group: 'Swing width with 35° swing each side',
            rows: [
              ['At maximum dredging depth', '23.5 m'],
              ['At minimum dredging depth', '29.0 m'],
            ],
          },
          {
            group: 'Dredge pump',
            rows: [
              ['Type', 'IHC HRCS 108-23-45, single-walled'],
              ['Engine type', 'Caterpillar C32 TTA Acert'],
              ['Heavy duty power', '895 kW @ 1,800 rpm'],
              ['Specific fuel consumption', '205.9 g/kWh'],
              ['Ball passage', '225 mm'],
            ],
          },
          {
            group: 'Electrical installation',
            rows: [
              ['Voltage', '24 V DC'],
              ['Battery capacity', '400 Ah'],
            ],
          },
          {
            group: 'Cutter',
            rows: [
              ['Type', 'IHC Lancelot 1330-120-10CB'],
              ['Power at shaft', '110 kW'],
              ['Diameter', '1,330 mm'],
              ['Maximum speed, approx.', '34 rpm'],
            ],
          },
          {
            group: 'Ladder and swing winches',
            rows: [
              ['Line pull, first layer', '57 kN'],
              ['Maximum line speed', '25 m/min'],
              ['Wire diameter', '18 mm'],
              ['Drum diameter', '390 mm'],
              ['Swing wires length', '100 m'],
              ['Anchor weight', '360 kg'],
            ],
          },
          {
            group: 'Spuds',
            rows: [
              ['Length', '13.85 m'],
              ['Diameter', '457 mm'],
              ['Weight', '2,260 kg'],
            ],
          },
          {
            group: 'Spud hoisting cylinders',
            rows: [
              ['Force', '100 kN'],
              ['Spud stroke (each time), approx.', '3.5 m'],
            ],
          },
          {
            group: 'Deck crane',
            rows: [
              ['Lifting power', '20 kN'],
              ['Outreach', '2.80 m'],
            ],
          },
        ],
        features: [
          'Spare parts available from stock',
          'Durable heavy-duty marine engine compliant with IMO Tier II',
          'Fresh-water engine cooling system (radiator cooling optional)',
          'Dredge pump driven through integrated bearing block, clutch and reduction gearbox',
          'White iron wear parts for the dredge pump',
          'Cutter drive accepts temporary overload, giving high maximum cutter power',
          'Reliable hydraulic system',
          'Dismountable and transportable by road, rail or sea',
          'One-man operation',
          'Comfort (AC etc.) and safety (kickplate) package',
          'Quick-closing suction line inspection hatch',
          'Grease lines on A-frame',
          'Cutter ladder retrieval cable',
          'Double filter in flushing water system',
          'Extended cutter ladder safety wires',
          'Environmentally friendly solutions, such as LED lighting',
        ],
        // Pump output, read off the data sheet's curves: peak output at short
        // discharge and the approximate length at which each curve tails off.
        output: {
          basis: 'Discharge pipe 450 mm · dredging depth 14.0 m · maximum volumetric concentration of in situ solids 25% · final elevation at end of discharge pipe 4.0 m',
          soils: [
            { key: 'A', peak: '≈900 m³/h', type: 'Fine sand', grain: '100 µm', density: '1,900 kg/m³', reach: '10,000 m' },
            { key: 'B', peak: '≈850 m³/h', type: 'Medium sand', grain: '235 µm', density: '1,950 kg/m³', reach: '6,200 m' },
            { key: 'C', peak: '≈800 m³/h', type: 'Coarse sand', grain: '440 µm', density: '2,000 kg/m³', reach: '4,700 m' },
            { key: 'D', peak: '≈730 m³/h', type: 'Coarse sand and gravel', grain: '1.3 mm', density: '2,100 kg/m³', reach: '3,400 m' },
            { key: 'E', peak: '≈560 m³/h', type: 'Gravel', grain: '7 mm', density: '2,200 kg/m³', reach: '2,200 m' },
          ],
          note: 'Calculated output curves only indicate pumping capacity, based on the maximum available power on the pump shaft and free-flowing material. In practice, properties vary from free-flowing, easily excavated to compacted, hard-to-excavate material; the nature of the material and local job conditions must be considered when estimating actual outputs.',
        },
      },
    ],
  },
}

export const serviceDetail = {
  'capital-dredging': {
    heroImg: '/img/Dredging-Services.jpg',
    headline: 'Depth where there was none',
    intro:
      'Capital dredging is the excavation of large volumes of material to deepen harbours and waterways or create new land. It is where Rock and Reef started, and the fleet, the crews and the method statements are all built around it.',
    overview: [
      'Ports, berths, approach channels and turning circles: we cut new depth through soft sediment, compacted strata and hard rock, in live ports and against the monsoon calendar.',
      'Our directors have spent two decades building and customising the backhoe, grab and cutter suction dredgers we deploy, so plant is matched to the geology rather than the other way round.',
    ],
    facts: [
      { k: '1.45M m³', v: 'Dredged at Kochi Port for the MULT terminal' },
      { k: '25+', v: 'Years of capital dredging in India' },
      { k: 'Rock', v: 'Breaking and removal with our own backhoe fleet' },
      { k: 'Live port', v: 'Working around traffic without closures' },
    ],
    challenges: [
      {
        title: 'Environmental impact',
        problem:
          'Dredging can disturb marine ecosystems, spread sediment plumes that affect water quality and release contaminants held in the seabed.',
        answer: [
          'Comprehensive environmental impact assessments before mobilisation, with mitigation written into the method statement.',
          'Closed loop and low turbidity techniques to keep sediment dispersion to a minimum.',
          'Beneficial reuse of dredged material for beach nourishment, reclamation or habitat restoration wherever the material allows.',
        ],
      },
      {
        title: 'Weather and currents',
        problem:
          'Storms, swell and strong tidal currents disrupt operations, shift programmes and put crews and plant at risk.',
        answer: [
          'Real time weather and tide monitoring, with the programme adjusted around windows rather than against them.',
          'Vessels selected and moored for rough weather working, so the spread stays productive in marginal conditions.',
          'Experienced crews trained for open water and monsoon operations.',
        ],
      },
      {
        title: 'Seabed conditions',
        problem:
          'Rock, boulders, compacted clay and buried obstructions slow progress and can exceed the reach of standard plant.',
        answer: [
          'Thorough geotechnical and bathymetric survey before work begins, so nothing in the ground is a surprise.',
          'Adaptive methods, switching between backhoe, grab and cutter suction spreads as the strata change.',
          'Rock breaking and removal with heavy backhoe dredgers such as Rock King.',
        ],
      },
      {
        title: 'Regulatory compliance',
        problem:
          'Capital projects sit under layered environmental, safety and port regulations that change by state and by authority.',
        answer: [
          'Close working relationships with port trusts, maritime boards and environmental regulators.',
          'Documented survey control and volume reconciliation, so every cubic metre is evidenced.',
          'A standing commitment to sustainability that goes beyond the minimum permit conditions.',
        ],
      },
    ],
    closing:
      'Successful capital dredging needs expertise, planning and the flexibility to change method mid job. That is what we bring, along with a fleet that was built for it.',
  },
}
