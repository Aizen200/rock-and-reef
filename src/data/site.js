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
  { value: '25M+', label: 'Cubic metres dredged' },
  { value: '9', label: 'Tugs & self propelled hopper barges' },
]

// --- Fleet -------------------------------------------------------------
export const fleet = {
  backhoe: {
    id: 'backhoe',
    name: 'Backhoe Dredgers',
    img: '/img/Backchoe-Dredgers.png',
    spec: 'Pontoon mounted excavators for hard, compacted and rocky seabed, the core of our capital dredging capability.',
  },
  csd: {
    id: 'csd',
    name: 'Cutter Suction Dredgers',
    img: '/img/cutter-suction-dredgers.png',
    spec: 'Continuous cutting and pumping of sediment through floating pipeline, ideal for reservoirs, channels and reclamation.',
  },
  grab: {
    id: 'grab',
    name: 'Grab Dredgers',
    img: '/img/Grab-Dredgers-.png',
    spec: 'Precise deep reach digging alongside berths, quay walls and confined harbour pockets.',
  },
  barge: {
    id: 'barge',
    name: 'Hopper Barges',
    img: '/img/Barge.png',
    spec: 'Six self propelled hopper barges, Rock 1, Rock 9, Rock 10, Rock 12, Phoenix, Reef 1.',
  },
  tug: {
    id: 'tug',
    name: 'Tugs',
    img: '/img/tug.png',
    spec: 'Three tugs, Rockstar, Premrath and Porunai, for towage, positioning and station keeping.',
  },
  launch: {
    id: 'launch',
    name: 'Motor Launch',
    img: '/img/Motor-Lauch.png',
    spec: 'Crew transfer and site supervision across active working areas.',
  },
  survey: {
    id: 'survey',
    name: 'Survey Boat',
    img: '/img/survey-boat.png',
    spec: 'Single and multi beam hydrographic survey platform for pre, progress and post dredge sounding.',
  },
}

export const fleetOverview =
  'Rock & Reef Fleet offers a lot of variety in terms of dredgers. This helps us execute projects of different magnitudes and difficulties. That being said, the core of Rock & Reef is capital dredging and our fleet backs that up. You will find a wide range of Grab and Backhoe dredgers. Over the years, we have tailored and customised our dredgers to accomplish sometimes even unimaginable tasks.'

// --- Projects ----------------------------------------------------------
export const projects = [
  {
    id: 'mult',
    title: 'MULT Project, Capital Dredging',
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
    services: ['trenching', 'cable-pipe'],
    vessels: ['backhoe', 'barge', 'survey'],
    coords: { lat: 18.93, lng: 72.87 },
  },
  {
    id: 'dakpathar',
    title: 'Dakpathar Barrage, Reservoir Dredging',
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
    services: ['deep-dredging'],
    vessels: ['csd', 'survey'],
    coords: { lat: 30.5, lng: 77.85 },
  },
  {
    id: 'offshore',
    title: 'Offshore Works, Pipe Laying & Trenching',
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
    services: ['trenching', 'cable-pipe'],
    vessels: ['backhoe', 'barge', 'tug', 'survey'],
    coords: { lat: 19.0, lng: 72.3 },
  },
  {
    id: 'salvage',
    title: 'Bollard Salvage, APM Terminals',
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
      'New depth where there was none, ports, berths, approach channels and turning circles, including hard rock and compacted strata.',
    detail:
      'A comprehensive range of dredging services, including river desilting, coastal restoration and harbour maintenance. Capital dredging is the core of Rock and Reef, and the fleet is built around it.',
  },
  {
    id: 'maintenance-dredging',
    name: 'Maintenance Dredging',
    img: '/img/dreging.jpg',
    blurb:
      'Keeping declared depths available, programmed siltation removal at berths, channels and turning basins.',
    detail:
      'Planned, survey driven removal of siltation so terminals hold their declared depth year round, scheduled around live traffic and monsoon cycles.',
  },
  {
    id: 'trenching',
    name: 'Trenching Works',
    img: '/img/Trenching-Works.jpg',
    blurb:
      'Precise subsea trenches for cables, pipelines and outfalls, cut through soft sediment and rock alike.',
    detail:
      'Dive into the world of underwater trenching. We excavate precise trenches for subsea cables, pipelines and more using cutting edge engineering techniques, including backfill and reinstatement to specification.',
  },
  {
    id: 'cable-pipe',
    name: 'Underwater Cable & Pipe Laying',
    img: '/img/Underwater-Cable-Laying-Services-RockandReef-1.jpg',
    blurb: 'Seabed preparation, lay support and protection for subsea cable and pipeline corridors.',
    detail:
      'Rock and Reef is well equipped to support underwater cable laying projects, providing precise seabed preparation, trench cutting, lay support and post lay backfill.',
  },
  {
    id: 'survey',
    name: 'Hydrographic & Bathymetric Survey',
    img: '/img/Hydrographic-and-Bathymetric-Survey.jpg',
    blurb: 'Pre, progress and post dredge survey that turns volumes into evidence.',
    detail:
      'Our comprehensive survey services provide detailed underwater maps for safe navigation and environmental assessment. We measure depth, analyse seabed conditions and identify potential hazards.',
  },
  {
    id: 'breakwater',
    name: 'Breakwater Construction',
    img: '/img/Breakwater-Construction-Services-iPAC-Automation-1-1.jpg',
    blurb: 'Shoreline and harbour protection against wave energy and erosion.',
    detail:
      'Our Breakwater Construction and Maintenance Services are designed to protect shorelines, harbours and coastal infrastructure from the impact of waves and erosion.',
  },
  {
    id: 'deep-dredging',
    name: 'Deep & Reservoir Dredging',
    img: '/img/deep-dredging-service.png',
    blurb: 'Restoring storage in reservoirs and dams lost to siltation and debris.',
    detail:
      'Rock and Reef delivers specialist deep dredging services for reservoirs and dam environments where sediment build up, siltation and debris reduce storage, with sustainable sediment placement options.',
  },
  {
    id: 'intake-outfall',
    name: 'Intake & Outfall Channel Dredging',
    img: '/img/intake-outfall-channel-dredging-services-india.webp',
    blurb: 'Uninterrupted cooling and discharge flow for plants that cannot stop.',
    detail:
      'Specialised intake and outfall channel dredging for power plants, desalination facilities and industrial plants, planned around plant availability windows.',
  },
  {
    id: 'shipbuilding',
    name: 'Shipbuilding & Repair',
    img: '/img/Shipbuilding.jpg',
    blurb: 'Building, repairing and refurbishing hopper barges, tugs and dredgers.',
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
