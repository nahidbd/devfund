/* DevFund content. All listings, donor profiles and sources live here.
   The weekly update (every Sunday) edits this file.

   LISTINGS item shape:
   {
     id: 'j1',                      // g = grant/fellowship, t = tender/RFP/EOI, j = job/consultancy, f = funding release, p = philanthropy/CSR
     type: 'job',                   // 'grant' | 'tender' | 'job' | 'fund' | 'philanthropy'
     title, issuer,                 // issuer = organisation that published the notice
     issuerKind: 'UN agency',       // UN agency | Development bank | Bilateral donor | Foundation | Government | INGO | Other
     ref: '',                       // issuer reference number, if any
     summary,                       // DevFund's own words, 1-3 sentences
     amount: '',                    // as published, or ''
     duration: '',                  // as published, or ''
     location: '',                  // duty station / where work happens
     countries: 'Bangladesh',       // who/where is eligible, in words
     region: 'asia',                // where the work is: one of REGIONS keys ('global' for remote or worldwide)
     country: 'Bangladesh',         // country where the work is ('' for global / multi-country / remote)
     remote: false,                 // true when the work can be done fully or mainly remotely / home-based
     open: 'national',              // who may apply: 'worldwide' | 'developing' (ODA / low- and middle-income countries) | 'listed' (named countries) | 'national' (nationals or residents of the country only)
     bd: true,                      // applicants from Bangladesh are eligible or not excluded (feeds the Bangladesh Desk)
     applicants: ['individual'],    // keys of APPLICANTS
     sectors: ['governance'],       // keys of SECTORS
     close: '2026-11-08T17:59:00Z', // deadline as UTC ISO time (end of day Dhaka when no time is given)
     closeText: '8 Nov 2026 (no time stated)', // deadline exactly as the issuer states it
     url: '',                       // the issuer's official notice / application page
     docs: '',                      // optional direct link to the bid documents / ToR
     via: '',                       // where DevFund found it, if not the issuer's own site
     check: 'official' | 'platform',// official = checked on the issuer's own page; platform = official link taken from a job or grant platform
     checked: '2026-11-02',         // date last checked
     added: '2026-11-02',
     foreign: true                  // foreign-funded money for a Bangladeshi organisation (shows the NGOAB note)
   }
*/
window.DF = {
UPDATED: '4 Nov 2026',
TODAY: '2026-11-04',

TYPES: {
  grant: {label: 'Grants & calls', one: 'Grant or call', code: 'G'},
  tender: {label: 'Tenders & EOIs', one: 'Tender, RFP or EOI', code: 'T'},
  job: {label: 'Jobs & consultancies', one: 'Job or consultancy', code: 'J'},
  fund: {label: 'Funding releases', one: 'Funding release', code: 'F'},
  philanthropy: {label: 'Philanthropy & CSR', one: 'Philanthropy or CSR', code: 'P'}
},

SECTORS: {
  governance: 'Governance and digital',
  health: 'Health',
  education: 'Education and skills',
  agriculture: 'Agriculture and food security',
  climate: 'Climate, environment and disaster risk',
  wash: 'Water and sanitation',
  social: 'Social protection and livelihoods',
  gender: 'Gender and inclusion',
  humanitarian: 'Humanitarian and refugees',
  economic: 'Economic development and trade',
  research: 'Research and data',
  media: 'Media and civic space'
},

REGIONS: {
  global: 'Global and multi-country',
  asia: 'Asia and the Pacific',
  africa: 'Africa',
  americas: 'Latin America and the Caribbean',
  mena: 'Middle East and North Africa',
  europe: 'Europe and Central Asia',
  northam: 'North America'
},

OPEN: {
  worldwide: 'Open worldwide',
  developing: 'Developing-country applicants',
  listed: 'Listed countries',
  national: 'Nationals or residents only'
},

APPLICANTS: {
  ngo: 'Local NGO or CSO',
  ingo: 'International NGO',
  firm: 'Consulting firm or company',
  individual: 'Individual',
  government: 'Government body',
  academic: 'University or research institute',
  startup: 'New or early-stage organisation'
},

LISTINGS: [
/* ---------- Grants, fellowships and calls ---------- */
{
  id: 'g1', type: 'grant',
  title: 'Cities Deliver: AI Solutions for Public Services — open call, Round 1',
  issuer: 'The Rockefeller Foundation and OpenAI Foundation', issuerKind: 'Foundation', ref: '',
  summary: 'Grants for organisations that work with a city government to use frontier AI in public health, economic mobility, environmental resilience or civic engagement. Seed grants run from $500,000 to under $1 million and Scale grants from $1 million to $2 million, over 24 months. Every proposal needs a letter of intent from a city government partner; research-only projects are not funded.',
  amount: '$500,000 – $2 million', duration: '24 months',
  location: 'Cities in any region', countries: 'Cities in all regions; organisations in countries under comprehensive US OFAC sanctions are excluded. Bangladesh is not named; confirm with citiesdeliver@rockfound.org.',
  region: 'global', country: '', remote: false, open: 'worldwide',
  bd: true, applicants: ['ngo', 'ingo', 'academic', 'firm'], sectors: ['governance', 'health', 'climate', 'social'],
  close: '2026-11-30T04:59:00Z', closeText: '29 Nov 2026, 11:59 pm EST (Round 1 proposal)',
  url: 'https://www.rockefellerfoundation.org/wp-content/uploads/2026/10/Cities-Deliver-AI-Solutions-for-Public-Services-FAQs-Final.pdf',
  via: '', check: 'official', checked: '2026-11-02', added: '2026-11-02', foreign: true,
  steps: ['Complete the eligibility screening', 'Submit the Round 1 proposal with legal status documents, the city government letter of intent and a short video of the AI solution', 'Shortlisted teams are interviewed in January 2027; Round 2 proposals are due 1 March 2027']
},
{
  id: 'g2', type: 'grant',
  title: 'Mozilla Foundation Fellowships 2027–2028',
  issuer: 'Mozilla Foundation', issuerKind: 'Foundation', ref: '',
  summary: 'Ten fellowships for technologists, researchers, entrepreneurs, artists and change-makers building a more human-centred technology future. Track I (embedded) offers $100,000 and Track II (independent) $125,000, each including a $25,000 project budget. A letter of intent comes first; shortlisted candidates submit a full application by 12 March 2027.',
  amount: '$100,000 (Track I) or $125,000 (Track II)', duration: '2027–2028',
  location: 'Global', countries: 'Not restricted by country on the published summary; check the official call for full eligibility.',
  region: 'global', country: '', remote: false, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['governance', 'research', 'media'],
  close: '2026-12-18T07:59:00Z', closeText: '17 Dec 2026, 11:59 pm Pacific Time (letter of intent)',
  url: 'https://www.mozillafoundation.org/what-we-do/grantmaking/fellowship/2027-call-for-applications/',
  via: 'https://www.globalsouthopportunities.com/2026/10/31/fellowship-314/', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'g3', type: 'grant',
  title: 'Internet Society Fellowship Program 2027',
  issuer: 'Internet Society', issuerKind: 'Other', ref: '',
  summary: 'A fellowship for internet change-makers in three tracks: policy and mobilisation, connectivity, and safety and security. Fellows get a mentor, a project stipend of up to $5,000 and travel support to a global or regional internet event. Applicants must first finish the Pre-Fellowship Training; the application link follows within 24 hours.',
  amount: 'Project stipend up to $5,000, plus travel support', duration: '',
  location: 'Global', countries: 'No country restriction stated on the published summary.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['governance'],
  close: '2026-11-22T23:59:00Z', closeText: '22 Nov 2026: finish the Pre-Fellowship Training. Applications close 18 Dec 2026.',
  url: 'https://www.internetsociety.org/fellowship/',
  via: 'https://opportunitydesk.org/2026/09/24/internet-society-fellowship-program-2027/', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'g4', type: 'grant',
  title: 'CrossCulture Programme (CCP) Fellowships 2027, Germany',
  issuer: 'ifa – Institut für Auslandsbeziehungen', issuerKind: 'Government', ref: '',
  summary: 'Placements in Germany for civil society professionals and volunteers. Participants from abroad receive a monthly stipend of €650, return airfare, accommodation, a public transport ticket, health insurance and visa fees. Applicants need two years of work in a civil society organisation in their home country and must be at least 23.',
  amount: '€650 a month plus travel, housing and insurance', duration: '',
  location: 'Germany', countries: 'Listed countries; Bangladesh is eligible.',
  region: 'europe', country: 'Germany', remote: false, open: 'listed',
  bd: true, applicants: ['individual', 'ngo'], sectors: ['governance', 'gender', 'climate', 'media'],
  close: '2026-12-08T23:59:00Z', closeText: '8 Dec 2026',
  url: 'https://www.ifa.de/en/funding/ccp-fellowships/',
  via: 'https://opportunitydesk.org/2026/10/21/ifa-crossculture-programme-fellowships-2027/', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'g5', type: 'grant',
  title: 'D-Prize Global Competition 2026: start-up grants to distribute proven poverty interventions',
  issuer: 'D-Prize', issuerKind: 'Foundation', ref: '',
  summary: 'Grants of up to $20,000 for entrepreneurs launching a new organisation that distributes a proven poverty intervention in a low- or middle-income country. Applicants choose one intervention from the challenge list or propose their own. Organisations with more than 18 months of full-time operation or more than $30,000 raised are usually not supported.',
  amount: 'Up to $20,000', duration: '',
  location: 'Low- and middle-income countries', countries: 'Any low- or middle-income country with extreme poverty; countries are not named.',
  region: 'global', country: '', remote: false, open: 'developing',
  bd: true, applicants: ['startup', 'individual'], sectors: ['social', 'health', 'economic'],
  close: '2026-12-07T07:59:00Z', closeText: '6 Dec 2026, midnight Pacific Time (final extension; regular round closes 15 Nov)',
  url: 'https://d-prize.org/',
  via: 'https://opportunitydesk.org/2026/09/18/d-prize-global-competition-2026/', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: true
},

{
  id: 'g6', type: 'grant',
  title: 'Equality Fund Global Journalism Fellowship 2026–2027',
  issuer: 'Equality Fund', issuerKind: 'Foundation', ref: '',
  summary: 'A fellowship for journalists based in and reporting on communities in ODA-recipient countries. Fellows get a CAD 4,000 stipend, up to CAD 500 in reporting expenses, monthly online sessions with journalists and experts, safety training and one in-person convening. Applicants need at least three years of full-time or freelance journalism and fluent English.',
  amount: 'CAD 4,000 stipend plus up to CAD 500 reporting expenses', duration: 'January – September 2027',
  location: 'Remote, with one in-person convening', countries: 'Journalists located in and reporting on ODA-recipient countries (OECD DAC list; Bangladesh is on it).',
  region: 'global', country: '', remote: true, open: 'developing',
  bd: true, applicants: ['individual'], sectors: ['media', 'gender'],
  close: '2026-11-09T05:00:00Z', closeText: '8 Nov 2026, midnight Eastern Standard Time',
  url: 'https://equalityfund.ca/en/posts/journalism-fellowship',
  via: 'https://opportunitydesk.org/2026/09/24/equality-fund-journalism-fellowship-2026-2027/', check: 'platform', checked: '2026-11-04', added: '2026-11-02', foreign: false
},

{
  id: 'g7', type: 'grant',
  title: 'Global EbA Fund: Call for Proposals for Medium-Size Grants (ecosystem-based adaptation)',
  issuer: 'Global EbA Fund', issuerKind: 'Other', ref: '',
  summary: 'Grants of up to $500,000 for catalytic projects of up to 24 months that help scale up ecosystem-based adaptation (EbA) to climate change; 10 grants are available. Projects must build on existing work and must not be standalone field-implementation projects. Optional priority topics: innovative finance for EbA, EbA for human development and security, and people–nature–climate–land synergies. IUCN and UNEP act as the Fund\'s secretariat; the Fund\'s announcement says it is funded by Germany\'s International Climate Initiative (IKI).',
  amount: 'Up to $500,000', duration: 'Up to 24 months (projects expected to start in 2027)',
  location: 'ODA-eligible countries', countries: 'Countries on the OECD DAC list of ODA recipients (Bangladesh is on it); multi-country projects must cover only ODA-eligible countries.',
  region: 'global', country: '', remote: false, open: 'developing',
  bd: true, applicants: ['ngo', 'ingo', 'academic', 'firm'], sectors: ['climate', 'agriculture', 'wash'],
  close: '2026-11-16T17:59:00Z', closeText: '16 Nov 2026 (submission window 12 Oct – 16 Nov; no time stated)',
  url: 'https://globalebafund.org/medium-size-grants/',
  docs: 'https://globalebafund.org/wp-content/uploads/2026/08/Global-EbA-Fund_Medium-size-grants-Call-for-Proposals.pdf',
  extra: [['Frequently asked questions (October 2026)', 'https://globalebafund.org/wp-content/uploads/2026/10/FAQ_Global-EbA-Fund-Open-Calls-for-Proposals_Oct26.pdf']],
  via: '', check: 'official', checked: '2026-11-04', added: '2026-11-02', foreign: true,
  steps: ['Check the eligibility checklist: builds on existing work, ODA-eligible countries (or a global/thematic focus), local partners, results sustained after the grant, up to 24 months and $500,000', 'Eligible lead applicants: NGOs, INGOs, intergovernmental organisations (not UNEP or IUCN offices), community-based and Indigenous Peoples\' organisations, universities, research institutes and companies. Consortia apply through one lead organisation, and country-level projects need a local partner receiving at least 25% of the budget', 'Read the call document, FAQ and Grants Procedures Manual, draft offline with the application form, then submit on the IUCN Grants Portal by 16 November 2026', 'Upload a theory of change and logframe, budget, team CVs, organigram and a project-location map if available']
},

{
  id: 'g8', type: 'grant',
  title: 'Commonwealth Blue Charter Incubator, Round II: ocean project grants for governments',
  issuer: 'Commonwealth Secretariat', issuerKind: 'Other', ref: '',
  summary: 'Grants of £20,000 to £50,000 for 6–18-month ocean projects led by a national or sub-national government body in a Commonwealth member country, covering marine pollution, ecosystem restoration, the sustainable blue economy, fisheries and the ocean–climate link. NGOs, technical and implementing partners can join as partners. There are dedicated windows for South Asia, Pacific small island states and the Caribbean, and each country may submit up to two applications.',
  amount: '£20,000 – £50,000 per project', duration: '6–18 months',
  location: 'Commonwealth member countries', countries: 'All 56 Commonwealth member countries, including Bangladesh; the lead applicant must be a government ministry, department or agency.',
  region: 'global', country: '', remote: false, open: 'listed',
  bd: true, applicants: ['government'], sectors: ['climate', 'economic', 'agriculture'],
  close: '2026-12-11T23:59:00Z', closeText: 'Friday 11 December 2026, 23:59 GMT (UTC+0)',
  url: 'https://thecommonwealth.org/commonwealth-blue-charter-project-incubator-round-ii',
  via: '', check: 'official', checked: '2026-11-04', added: '2026-11-03', foreign: true
},
{
  id: 'g9', type: 'grant',
  title: 'Mozilla Foundation Human-Scale AI Incubator 2026',
  issuer: 'Mozilla Foundation', issuerKind: 'Foundation', ref: '',
  summary: 'Non-dilutive funding for teams building smaller, specialised, community-focused AI: $300,000 at first, with up to $200,000 more for projects that show strong progress (up to $500,000 over three years). Support starts in April 2027 with 12 months of incubation and possible follow-on support.',
  amount: '$300,000, rising to up to $500,000', duration: '12 months from April 2027, with possible two-year follow-on',
  location: 'Global', countries: 'Country and organisation eligibility is not stated on the platform summary; check the official call before applying.',
  region: 'global', country: '', remote: false, open: 'worldwide',
  bd: true, applicants: ['ngo', 'ingo', 'startup', 'firm', 'academic'], sectors: ['governance', 'research'],
  close: '2026-11-21T07:59:00Z', closeText: 'Friday 20 Nov 2026, 11:59 pm Pacific Standard Time',
  url: 'https://www.mozillafoundation.org/en/what-we-do/grantmaking/incubator/human-scale-ai/call-for-proposals/',
  via: 'https://www.globalsouthopportunities.com/2026/11/02/mozilla-3/', check: 'platform', checked: '2026-11-03', added: '2026-11-03', foreign: true
},
{
  id: 'g10', type: 'grant',
  title: 'AERC call for proposals: Industrial Policy and Growth in Africa project',
  issuer: 'African Economic Research Consortium (AERC)', issuerKind: 'Other', ref: '',
  summary: 'Commissioned studies of up to $10,000 each on industrial policy and growth in Africa, at country, multi-country or sector level, to be finished within 18 months. Funds cover researcher time, secondary data licences and software, not field data collection or travel. Lead and co-applicants need an economics (or related) PhD awarded in 2016 or later.',
  amount: 'Up to $10,000 per study', duration: 'Up to 18 months',
  location: 'Africa', countries: 'Early-career African and Africa-focused economists; collaboration with African and international institutions is encouraged.',
  region: 'africa', country: '', remote: false, open: 'worldwide',
  bd: true, applicants: ['individual', 'academic'], sectors: ['economic', 'research'],
  close: '2026-11-21T20:59:00Z', closeText: '21 Nov 2026, midnight East Africa Time (UTC+3)',
  url: 'https://aercafrica.org/opportunities/industrial-policy-and-growth-in-africa-project/',
  via: 'https://www.globalsouthopportunities.com/2026/10/26/africa-153/', check: 'platform', checked: '2026-11-03', added: '2026-11-03', foreign: false
},
{
  id: 'g11', type: 'grant',
  title: 'Climate Democracy Accelerator 2027 cohort: training and grants for participatory climate programmes',
  issuer: 'People Powered', issuerKind: 'Other', ref: '',
  summary: 'A six-month training programme (March–August 2027) followed by 12 months to carry out an action plan, for government–civil society partnerships that run participatory programmes on regenerative agriculture or renewable energy. Every participant receives a $10,000 implementation grant and the six best action plans in each cohort get a further $15,000. Grants go to the non-governmental partner, which must be a registered non-profit with at least a year of operations, paid staff, a board and audited accounts.',
  amount: '$10,000 grant (plus $15,000 for the top six action plans)', duration: '6 months training (Mar–Aug 2027) + 12 months implementation',
  location: 'Any country; priority to Brazil, India, Indonesia and Mexico', countries: 'Priority countries are Brazil, India, Indonesia and Mexico; other countries, especially in Africa, Asia and Latin America, are welcome. A government applicant must partner with a civil society organisation.',
  region: 'global', country: '', remote: false, open: 'worldwide',
  bd: true, applicants: ['ngo', 'government'], sectors: ['climate', 'governance', 'agriculture'],
  close: '2026-11-27T23:59:00Z', closeText: '27 Nov 2026, 11:59 pm UTC',
  url: 'https://www.peoplepowered.org/climate-democracy-accelerator',
  via: '', check: 'official', checked: '2026-11-04', added: '2026-11-04', foreign: true
},
{
  id: 'g12', type: 'grant',
  title: 'Terre de Femmes International Award 2027: women-led tree projects in cities',
  issuer: 'Fondation Yves Rocher', issuerKind: 'Foundation', ref: '',
  summary: 'An award for women, or groups of women, leading nature conservation projects linked to trees, with the 2027 theme "Trees in the City". Two winners worldwide each receive €10,000 for their project. Applicants apply through a non-profit (association, NGO or foundation) that has existed for at least a year.',
  amount: '€10,000 per project (2 winners)', duration: '',
  location: 'Any country', countries: 'Open to all countries and nationalities.',
  region: 'global', country: '', remote: false, open: 'worldwide',
  bd: true, applicants: ['ngo', 'individual'], sectors: ['climate', 'gender'],
  close: '2026-11-30T22:59:00Z', closeText: '30 Nov 2026, midnight (time zone not stated; read as Paris time)',
  url: 'https://www.yves-rocher-fondation.org/en/how-to-apply-for-the-international-award/',
  via: 'https://opportunitydesk.org/2026/10/10/terre-de-femmes-international-award-2027/', check: 'platform', checked: '2026-11-04', added: '2026-11-04', foreign: true
},
/* ---------- Jobs and consultancies ---------- */
{
  id: 'j1', type: 'job',
  title: 'National Consultant – E-Governance Expert',
  issuer: 'UNDP Bangladesh', issuerKind: 'UN agency', ref: 'UNDP-BGD-01235',
  summary: 'Individual consultancy giving e-governance guidance on digital governance policy and implementation. About 90 working days over six months, December 2026 to May 2027. Proposals go through the UNDP Quantum supplier portal.',
  amount: '', duration: 'About 90 working days, Dec 2026 – May 2027',
  location: 'Bangladesh', countries: 'Bangladeshi nationals only',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['individual'], sectors: ['governance'],
  close: '2026-11-08T17:59:00Z', closeText: '8 Nov 2026 (no time stated)',
  url: 'https://procurement-notices.undp.org/view_negotiation.cfm?nego_id=51067',
  via: 'https://unvacancies.org/jobs/national-consultant-e-governance-expert-IC-51067', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j2', type: 'job',
  title: 'National Consultant (Passport to Earning), Generation Unlimited',
  issuer: 'UNICEF Bangladesh', issuerKind: 'UN agency', ref: '596684',
  summary: 'Twelve-month consultancy to lead digital learning and employability work: adapting the Passport to Earning platform and designing a government-hosted national aggregator, covering partner onboarding, interoperability, APIs, governance and data-sharing. Requires a master\'s degree and at least 10 years in skilling-to-earning digital programmes.',
  amount: '', duration: '12 months, office-based with travel',
  location: 'Dhaka', countries: 'Bangladeshi nationals only',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['individual'], sectors: ['education', 'governance'],
  close: '2026-11-12T17:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://jobs.unicef.org/en-us/job/596684/national-consultant-p2e-genu-officebased-with-travel-for-12-months',
  via: 'https://unvacancies.org/jobs/national-consultant-p2e-genu-office-based-with-travel-for-12-months-F-596684', check: 'platform', checked: '2026-11-04', added: '2026-11-02', foreign: false
},
{
  id: 'j3', type: 'job',
  title: 'National Monitoring and Evaluation Specialist (ATP project)',
  issuer: 'FAO Bangladesh', issuerKind: 'UN agency', ref: '2602237',
  summary: 'Seven-month consultancy tracking the ATP project and its letters of agreement with BARC, DAE and BADC, and preparing reports for FAO, the Gates Foundation and the Government of Bangladesh. Requires an advanced degree and 9 years of M&E experience; KoboToolbox or ODK and dashboard skills are an asset.',
  amount: 'Grade SC 9', duration: '7 months',
  location: 'Dhaka', countries: 'Bangladeshi nationals, or residents with a valid work permit',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['individual'], sectors: ['agriculture', 'research'],
  close: '2026-11-12T17:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://jobs.fao.org/careersection/fao_external/jobdetail.ftl?job=2602237',
  via: 'https://unvacancies.org/jobs/national-monitoring-and-evaluation-specialist--2602237', check: 'platform', checked: '2026-11-04', added: '2026-11-02', foreign: false
},
{
  id: 'j4', type: 'job',
  title: 'Health Officer (eHMIS), NO-B, fixed term',
  issuer: 'UNICEF Bangladesh', issuerKind: 'UN agency', ref: '128030',
  summary: 'Staff post supporting digital health: health management information system data collection, integration and visualisation, and planning and reporting on health programme results. Requires a relevant bachelor\'s degree and at least two years of experience.',
  amount: 'NO-B', duration: 'Fixed term',
  location: 'Dhaka', countries: 'Bangladeshi nationals only',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['individual'], sectors: ['health', 'governance'],
  close: '2026-11-04T17:59:00Z', closeText: '4 Nov 2026 (no time stated)',
  url: 'https://jobs.unicef.org/en-us/job/596631/health-officer-ehmis-no2-ft-128030-dhaka-bangladesh-apro',
  via: 'https://unvacancies.org/jobs/health-officer-ehmis-no-2-ft-128030-dhaka-bangladesh-apro-F-596631', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j5', type: 'job',
  title: 'Programme Associate (SC-6), Bandarban',
  issuer: 'World Food Programme Bangladesh', issuerKind: 'UN agency', ref: 'JR127883',
  summary: 'Six-month service contract supporting food security programming in Bandarban: project support, weekly and monthly reporting, data analysis and day-to-day work with cooperating partners and local government. Requires a university degree and 6 years of relevant experience.',
  amount: 'SC-6', duration: '6 months, may be extended',
  location: 'Bandarban (Rangamati Field Office)', countries: 'Bangladeshi nationals only',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['individual'], sectors: ['agriculture', 'humanitarian'],
  close: '2026-11-08T17:59:00Z', closeText: '8 Nov 2026, 23:59 Bangladesh time',
  url: 'https://wd3.myworkdaysite.com/recruiting/wfp/job_openings/job/Rangamati-Bangladesh-The-Peoples-R/Programme-Associate--SC6--Bandarban_JR127883',
  via: 'https://unvacancies.org/jobs/programme-associate-sc6-bandarban-90519112', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j6', type: 'job',
  title: 'HSSE Senior Associate (Environmental Management), LICA-7',
  issuer: 'UNOPS Bangladesh', issuerKind: 'UN agency', ref: '4939',
  summary: 'Twelve-month contract coordinating health, safety, social and environmental work for the IMPACT medical waste management programme in six government hospitals, with the Ministry of Health and Family Welfare and DGHS.',
  amount: 'LICA-7', duration: '12 months',
  location: 'Dhaka', countries: 'Bangladeshi nationals and legal residents only',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['individual'], sectors: ['health', 'climate'],
  close: '2026-11-05T22:59:00Z', closeText: '5 Nov 2026, before midnight Copenhagen time',
  url: 'https://careers.unops.org/careersmarketplace/JobDetail/Health-Safety-Social-and-Environmental-Senior-Associate-Environmental-Management/4939',
  via: 'https://unvacancies.org/jobs/hsse-senior-associate-environmental-management-OPS-4939', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j7', type: 'job',
  title: 'Mechanics (Electrical Engineer), SC-4, Cox\'s Bazar',
  issuer: 'World Food Programme Bangladesh', issuerKind: 'UN agency', ref: 'JR128058',
  summary: 'Twelve-month contract to design, install and maintain electrical systems, generators and related equipment for WFP in Cox\'s Bazar, and to train operators, partners and vendors. Requires a bachelor\'s degree (electrical engineering preferred) and 4 years of experience.',
  amount: 'SC-4', duration: '12 months',
  location: 'Cox\'s Bazar', countries: 'Bangladeshi nationals and legal residents only',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['individual'], sectors: ['humanitarian'],
  close: '2026-11-14T17:59:00Z', closeText: '14 Nov 2026, 23:59 Bangladesh time',
  url: 'https://wd3.myworkdaysite.com/recruiting/wfp/job_openings/job/Coxs-Bazaar-Bangladesh-The-Peoples-R/Mechanics--Electrical-Engineer---SC4--Cox-s-Bazar_JR128058',
  via: 'https://unvacancies.org/jobs/mechanics-electrical-engineer-sc4-cox-s-bazar-31097322', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},

{
  id: 'j8', type: 'job',
  title: 'Climate Mitigation Modelling Consultant (NDC Act & Invest)',
  issuer: 'UNEP, Mitigation Branch', issuerKind: 'UN agency', ref: '287426',
  summary: 'Eight-month home-based consultancy giving technical modelling support across UNEP\'s NDC Act & Invest projects, focusing on long-term low-emission development strategies and sectoral mitigation modelling, and reviewing partner-country proposals. Requires a master\'s in a quantitative field and 8 years in mitigation, energy-system or emissions-scenario modelling.',
  amount: '', duration: '8 months (25 Nov 2026 – 20 Jul 2027)',
  location: 'Remote (home-based), linked to Paris', countries: 'No nationality restriction stated on the notice.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['climate', 'research'],
  close: '2026-11-12T23:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://careers.un.org/jobSearchDescription/287426?language=en',
  via: 'https://unvacancies.org/jobs/climate-mitigation-modelling-consultant-P-287426', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j9', type: 'job',
  title: 'GHG Inventory Specialist (AFOLU)',
  issuer: 'UNEP (Climate Transparency – Global Support Programme)', issuerKind: 'UN agency', ref: '287431',
  summary: 'Part-time remote consultancy helping developing countries build greenhouse-gas inventory skills for agriculture, forestry and land use, including training on the IPCC Inventory Software and the Enhanced Transparency Framework through five country programmes. Requires a master\'s (or bachelor\'s plus two years) and 5 years in GHG inventories.',
  amount: '', duration: '60 working days, part-time',
  location: 'Remote (home-based), linked to Paris', countries: 'No nationality restriction stated on the notice.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['climate', 'agriculture'],
  close: '2026-11-12T23:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://careers.un.org/jobSearchDescription/287431?language=en',
  via: 'https://unvacancies.org/jobs/ghg-inventory-specialist-afolu-P-287431', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j10', type: 'job',
  title: 'Consultant – Upgrade of the World Economic Forecast Model (WEFM) for Cambodia',
  issuer: 'UN DESA, Economic Analysis and Policy Division', issuerKind: 'UN agency', ref: '287372',
  summary: 'Four-month consultancy to tailor and validate an interactive macroeconomic scenario tool for Cambodia, train government officials and produce a country scenario study, with some travel to Cambodia. Requires a master\'s in economics or a related field and 7 years in macroeconomic modelling; R and Shiny skills are highly desirable.',
  amount: '', duration: '4 months',
  location: 'Remote, linked to New York, with travel to Cambodia', countries: 'No nationality restriction stated on the notice.',
  region: 'asia', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['economic', 'research'],
  close: '2026-11-16T23:59:00Z', closeText: '16 Nov 2026 (no time stated)',
  url: 'https://careers.un.org/jobSearchDescription/287372?language=en',
  via: 'https://unvacancies.org/jobs/consultant-upgrade-of-the-world-economic-forecast-model-wefm-for-cambodia-N-287372', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j11', type: 'job',
  title: 'UNEP FI – Technical Legal Expert on sustainable finance taxonomy and climate-related financial risk (Costa Rica and Panama)',
  issuer: 'UNEP Finance Initiative', issuerKind: 'UN agency', ref: '287437',
  summary: 'Six-month home-based consultancy to produce technical-legal analysis and draft regulatory text for a sustainable finance taxonomy and a climate-related financial risk framework in Costa Rica and Panama. Requires a master\'s in law or a related field, 7 years advising projects in Costa Rica or Panama, and fluent Spanish and English.',
  amount: '', duration: '6 months',
  location: 'Remote (home-based), linked to Geneva', countries: 'No nationality restriction stated; requires Costa Rica or Panama experience and fluent Spanish.',
  region: 'americas', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['governance', 'economic', 'climate'],
  close: '2026-11-12T23:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://careers.un.org/jobSearchDescription/287437?language=en',
  via: 'https://unvacancies.org/jobs/unep-fi-technical-legal-expert-to-support-costa-rica-and-panama-regulation-on-sustainable-finance-ta-P-287437', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j12', type: 'job',
  title: 'Advisor – Innovative and Sustainable Finance (retainer)',
  issuer: 'UNOPS, Infrastructure and Project Management Group', issuerKind: 'UN agency', ref: '4960',
  summary: 'Fully remote retainer contract to research innovative and sustainable financing mechanisms, consult stakeholders and recommend viable models for UNOPS projects, mainly for the Geneva portfolio. Assignments vary from hours to months with no guaranteed minimum. Requires a master\'s and 7 years in innovative or sustainable finance.',
  amount: 'IICA-3 retainer', duration: 'Up to 12 months, as needed',
  location: 'Fully remote, with occasional travel', countries: 'Open to all nationalities.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['economic'],
  close: '2026-11-15T22:59:00Z', closeText: '15 Nov 2026, before midnight Copenhagen time',
  url: 'https://careers.unops.org/careersmarketplace/JobDetail/Advisor-Innovative-and-Sustainable-Finance/4960',
  via: 'https://unvacancies.org/jobs/advisor-innovative-and-sustainable-finance-OPS-4960', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j13', type: 'job',
  title: 'Consultant Team Leader – Evaluation of UNICEF\'s risk management in humanitarian action',
  issuer: 'UNICEF Evaluation Office', issuerKind: 'UN agency', ref: '596709',
  summary: 'Ten-month home-based role leading a global evaluation of UNICEF\'s risk governance in humanitarian action, managing the team and deliverables. Requires a master\'s and more than 15 years of humanitarian research and evaluation, including global thematic evaluations for UN agencies.',
  amount: '', duration: '10 months',
  location: 'Home-based with travel, linked to New York', countries: 'No nationality restriction stated on the notice.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['humanitarian', 'research'],
  close: '2026-11-12T23:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://jobs.unicef.org/en-us/job/596709/consultancy-consultant-team-leader-evaluation-of-unicefs-risk-management-prevention-and-sharing-in-humanitarian-actionnyhq10-monthshomebased-with-travel',
  via: 'https://unvacancies.org/jobs/consultancy-consultant-team-leader-evaluation-of-unicefs-risk-management-prevention-and-sharing-in-h-F-596709', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j14', type: 'job',
  title: 'Senior Humanitarian Evaluation Expert – risk-taking, risk-sharing and risk management',
  issuer: 'UNICEF Evaluation Office', issuerKind: 'UN agency', ref: '596718',
  summary: 'Home-based consultancy of about six months to help lead phase 2 of UNICEF\'s humanitarian risk evaluation, including at least four pilot cases and quality assurance of all case studies. Requires 15 years of humanitarian research and evaluation, including field work in large-scale emergencies.',
  amount: '', duration: 'About 6 months',
  location: 'Home-based with travel for data collection, linked to New York', countries: 'Applications welcome regardless of nationality.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['humanitarian', 'research'],
  close: '2026-11-15T23:59:00Z', closeText: '15 Nov 2026 (no time stated)',
  url: 'https://jobs.unicef.org/en-us/job/596718/senior-humanitarian-evaluation-expert-evaluation-of-risktaking-risksharing-and-risk-management-in-humanitarian-action-new-york-united-states-of-america-home-based-with-travel-to-countries-for-data-collection-as-relevant',
  via: 'https://unvacancies.org/jobs/senior-humanitarian-evaluation-expert-evaluation-of-risk-taking-risk-sharing-and-risk-management-in-F-596718', check: 'platform', checked: '2026-11-04', added: '2026-11-02', foreign: false
},
{
  id: 'j15', type: 'job',
  title: 'Project Management, Reporting and Partnership Support Consultant – UNICEF Evaluation Office',
  issuer: 'UNICEF Evaluation Office (DevEI)', issuerKind: 'UN agency', ref: '596701',
  summary: 'Nine-month remote role, about half-time (up to 90 days), supporting coordination, donor reporting, budgets and knowledge management for multi-country impact evaluations. Requires a master\'s and 5 years across project management, donor reporting, grant monitoring or knowledge management.',
  amount: '', duration: '9 months, up to 90 days',
  location: 'Remote, no travel, linked to New York', countries: 'Applications welcome regardless of nationality.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['research'],
  close: '2026-11-12T23:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://jobs.unicef.org/en-us/job/596701/project-management-reporting-and-partnership-support-consultant-unicef-evaluation-office-development-effectiveness-and-impact-evaluation-remote-with-no-travel-9-months-596701',
  via: 'https://unvacancies.org/jobs/project-management-reporting-and-partnership-support-consultant-unicef-evaluation-office-development-F-596701', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j16', type: 'job',
  title: 'Child Poverty Advocacy International Consultant, Global Programme Division',
  issuer: 'UNICEF Global Programme Division', issuerKind: 'UN agency', ref: '596700',
  summary: 'Remote consultancy of about 9.5 months leading UNICEF\'s global child poverty advocacy strategy and partnerships, and supporting regional and country policy work. Requires a master\'s and 5 years of policy advocacy; Spanish is an asset.',
  amount: '', duration: '9.53 months',
  location: 'Remote with travel, linked to Panama City', countries: 'No nationality restriction stated on the notice.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['social', 'research'],
  close: '2026-11-11T23:59:00Z', closeText: '11 Nov 2026 (no time stated)',
  url: 'https://jobs.unicef.org/en-us/job/596700/child-poverty-advocacy-international-consultant-global-programme-division-gpd-panama-953-months-remote-with-travel',
  via: 'https://unvacancies.org/jobs/child-poverty-advocacy-international-consultant-global-programme-division-gpd-panama-9-53-months-rem-F-596700', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j17', type: 'job',
  title: 'Consultant – Food Environment Policy Advocacy, Governance and Conflict-of-Interest Resources (Nutrition)',
  issuer: 'UNICEF Global Programme Division – Nutrition', issuerKind: 'UN agency', ref: '596704',
  summary: 'Eleven-month remote consultancy to develop tools and advocacy resources on preventing child and adolescent overweight and obesity, support country offices on food-environment policy, and update guidance. Requires a master\'s in human or public health nutrition and 10 years in food systems, nutrition policy or governance.',
  amount: '', duration: '11 months',
  location: 'Fully remote, linked to Bangkok', countries: 'Applications welcome regardless of nationality.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['health', 'agriculture'],
  close: '2026-11-12T23:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://jobs.unicef.org/en-us/job/596704/consultancy-consultant-to-strengthen-unicef-food-environment-policy-advocacy-governance-conflictofinterest-resourcesgpdnutritionbangkok-thailand-11-months-remote',
  via: 'https://unvacancies.org/jobs/consultancy-consultant-to-strengthen-unicef-food-environment-policy-advocacy-governance-conflict-of-F-596704', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j18', type: 'job',
  title: 'Technical Support International Consultant – Quality Assurance of National Curriculum and Assessment Reform, Uzbekistan',
  issuer: 'UNICEF Uzbekistan', issuerKind: 'UN agency', ref: '596703',
  summary: 'Twenty-four-month remote consultancy with travel to quality-assure education products and oversee guidance on teaching-learning materials, capacity building and assessment reform for preschool and school education in Uzbekistan. Requires a master\'s in education or a related field.',
  amount: '', duration: '24 months',
  location: 'Remote with travel, linked to Tashkent', countries: 'No nationality restriction stated on the notice.',
  region: 'europe', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['education'],
  close: '2026-11-13T23:59:00Z', closeText: '13 Nov 2026 (no time stated)',
  url: 'https://jobs.unicef.org/en-us/job/596703/technical-support-international-consultant-quality-assurance-of-national-curriculum-tlm-guidance-capacity-building-and-assessment-reform-uzbekistan-24-months-remote-with-travel',
  via: 'https://unvacancies.org/jobs/technical-support-international-consultant-quality-assurance-of-national-curriculum-tlm-guidance-cap-F-596703', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},

{
  id: 'j19', type: 'job',
  title: 'National WASH Consultant – WASH Sector Development, Policy and Coordination',
  issuer: 'UNICEF Bangladesh', issuerKind: 'UN agency', ref: '596736',
  summary: 'Twelve-month office-based consultancy in Dhaka supporting the Local Government Division\'s Policy Support Wing on WASH policies, guidelines and standards, sector planning, budgeting and financing, and coordination of the national WASH forums and Sector Development Plan thematic groups. Requires a master\'s, at least 10 years of development experience (preferably water and sanitation) and fluent Bangla and English.',
  amount: '', duration: '12 months',
  location: 'Dhaka (office-based, with travel)', countries: 'Bangladeshi nationals only.',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['individual'], sectors: ['wash', 'governance'],
  close: '2026-11-16T17:55:00Z', closeText: '16 Nov 2026, 11:55 pm Bangladesh Standard Time',
  url: 'https://jobs.unicef.org/en-us/job/596736/national-wash-consultant-wash-sector-development-policy-and-coordination-dhaka-bangladeshwash-12-months-office-based-with-travel-nationals-only596736',
  via: '', check: 'official', checked: '2026-11-04', added: '2026-11-03', foreign: false
},
{
  id: 'j20', type: 'job',
  title: 'National Consultant for Hygiene Programming, Evidence Generation and Knowledge Management',
  issuer: 'UNICEF Bangladesh', issuerKind: 'UN agency', ref: '596733',
  summary: 'Twelve-month consultancy in Dhaka supporting the national school-based menstrual hygiene management campaign: planning, monitoring and documentation, hygiene promotion materials, WASH data analysis and knowledge products. Requires a master\'s, at least 8 years in WASH or hygiene programming and fluent Bangla and English; a short technical proposal is part of the application.',
  amount: '', duration: '12 months',
  location: 'Dhaka (office-based, with travel)', countries: 'Bangladeshi nationals only.',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['individual'], sectors: ['wash', 'gender', 'education'],
  close: '2026-11-09T17:59:00Z', closeText: '9 Nov 2026 (closing time not shown on the platform listing; check the UNICEF page)',
  url: 'https://jobs.unicef.org/en-us/job/596733/national-consultant-for-hygiene-programming-evidence-generation-and-knowledge-management-dhaka-bangladesh-wash12-months-office-based-with-travel-nationals-only596733',
  via: 'https://unvacancies.org/jobs/national-consultant-for-hygiene-programming-evidence-generation-and-knowledge-management-dhaka-bangl-F-596733', check: 'platform', checked: '2026-11-04', added: '2026-11-03', foreign: false
},
{
  id: 'j21', type: 'job',
  title: 'International Sustainable Energy Consultant, Climate Resilience Section (remote, 12 months)',
  issuer: 'UNICEF Global Programme Division', issuerKind: 'UN agency', ref: '596727',
  summary: 'Fully remote 12-month consultancy, linked to Bangkok, working with UNICEF country and regional offices to push for stronger sustainable-energy and child-sensitive commitments in energy investments and programming. Requires a master\'s in renewable energy, climate, development or a related field and at least 8 years on sustainable energy initiatives; French is an asset.',
  amount: '', duration: '12 months',
  location: 'Remote (home-based), linked to Bangkok', countries: 'No nationality restriction stated on the listing.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['climate'],
  close: '2026-11-15T16:59:00Z', closeText: '15 Nov 2026 (closing time not shown on the platform listing)',
  url: 'https://jobs.unicef.org/en-us/job/596727/international-sustainable-energy-consultant-global-programme-divisiongpd-climate-resilience-section-remote-work-for-12-months-bangkok-thailand',
  via: 'https://unvacancies.org/jobs/international-sustainable-energy-consultant-global-programme-division-gpd-climate-resilience-section-F-596727', check: 'platform', checked: '2026-11-04', added: '2026-11-03', foreign: false
},
{
  id: 'j22', type: 'job',
  title: 'Project Scientist II (Urban Heat Expert), India Cooling Programme',
  issuer: 'UNEP (Cool Coalition)', issuerKind: 'UN agency', ref: '287135',
  summary: 'Twelve-month remote consultancy running urban heat assessments in 50 Indian cities and helping city governments and developers adopt passive cooling, nature-based solutions and district cooling. Requires a PhD (or postdoc) in planning, climate science or energy engineering, practical experience in India and knowledge of Hindi.',
  amount: '', duration: '12 months',
  location: 'Remote; work focused on India', countries: 'No nationality restriction stated, but India experience and Hindi are required.',
  region: 'asia', country: 'India', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['climate', 'research'],
  close: '2026-11-15T23:59:00Z', closeText: '15 Nov 2026 (no time stated)',
  url: 'https://careers.un.org/jobSearchDescription/287135?language=en',
  via: 'https://unvacancies.org/jobs/project-scientist-ii-urban-heat-expert-P-287135', check: 'platform', checked: '2026-11-04', added: '2026-11-03', foreign: false
},
{
  id: 'j23', type: 'job',
  title: 'Home-based Disaster Preparedness Consultant – National Emergency Telecom Plans and Mobile Early Warning (roster)',
  issuer: 'International Telecommunication Union (ITU), Telecommunication Development Bureau', issuerKind: 'UN agency', ref: 'Vacancy 1152',
  summary: 'Roster of home-based consultants for 15–80-day assignments helping countries draft national emergency telecommunication plans, assess early warning systems and advise on cell-broadcast and location-based SMS alerts, including specifications for bidding documents. Requires a degree in telecoms or IT and at least seven years in emergency telecommunications; English or French.',
  amount: 'Daily rate', duration: '15–80 working days per assignment',
  location: 'Remote (home-based)', countries: 'Open to external candidates of any nationality.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['climate', 'governance'],
  close: '2026-12-31T22:59:00Z', closeText: '31 Dec 2026, midnight Geneva time',
  url: 'https://jobs.itu.int/job/Home-Based-Disaster-Preparedness-Consultant-National-Emergency-Telecom-Plans-and-Mobile-Early-Warning/941800455/',
  via: 'https://unvacancies.org/jobs/disaster-preparedness-consultant-national-emergency-telecom-plans-and-mobile-early-warning-41800455', check: 'platform', checked: '2026-11-04', added: '2026-11-03', foreign: false
},
{
  id: 'j24', type: 'job',
  title: 'International Consultant, Information Management Analyst (retainer, home-based)',
  issuer: 'UN Women, State of Palestine Country Office', issuerKind: 'UN agency', ref: '37829',
  summary: 'Six-month home-based retainer supporting information management for UN Women\'s humanitarian and early-recovery work: reach analysis, sex- and age-disaggregated data, dashboards, the inter-agency community feedback system and joint-programme reporting. Requires a master\'s (or bachelor\'s plus two years) and two years in humanitarian information management; Arabic is desirable.',
  amount: '', duration: '6 months (retainer)',
  location: 'Remote (home-based), no travel', countries: 'Open to all nationalities.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['humanitarian', 'gender', 'research'],
  close: '2026-11-11T23:59:00Z', closeText: '11 Nov 2026 (no time zone stated on the platform listing)',
  url: 'https://estm.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/37829',
  via: 'https://unvacancies.org/jobs/un-women-international-consultant-information-management-analyst-retainer-home-based-EN-37829', check: 'platform', checked: '2026-11-04', added: '2026-11-03', foreign: false
},
{
  id: 'j25', type: 'job',
  title: 'Middle-level Consultant on Education: EMIS, out-of-school children and learner pathways (home-based)',
  issuer: 'UNESCO, Section of Education Policy', issuerKind: 'UN agency', ref: '76471957',
  summary: 'About 60 working days, home-based, to review how education data systems track out-of-school children, dropout and learner pathways, write six country case studies and build a new self-assessment module for UNESCO\'s EMIS toolkit. Needs an advanced degree and at least five years in EMIS or education data systems. Applicants send one PDF of up to eight pages with a short technical proposal, a one-page financial proposal and a CV.',
  amount: 'Daily rate set by the applicant\'s financial proposal', duration: 'About 3 months (Nov 2026 – Jan 2027)',
  location: 'Remote (home-based), linked to Paris', countries: 'No nationality restriction stated; external candidates only.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['education', 'research'],
  close: '2026-11-17T22:59:00Z', closeText: '17 Nov 2026, 23:59 CET (midnight UTC+1)',
  url: 'https://careers.unesco.org/job/Paris-Middle-level-Consultant-on-Education/1376471957/',
  via: 'https://unvacancies.org/jobs/middle-level-consultant-on-education-76471957', check: 'platform', checked: '2026-11-04', added: '2026-11-04', foreign: false
},
{
  id: 'j26', type: 'job',
  title: 'Technical Consultant – Secondary Education Guidance: Multiple and Flexible Pathways, 2027 edition (fully remote)',
  issuer: 'UNICEF', issuerKind: 'UN agency', ref: '596746',
  summary: 'A fully remote consultancy of three months and ten days to write the 2027 edition of UNICEF\'s guidance for country offices on secondary education and flexible learning pathways, replacing the 2020 version, with multi-country consultation and a short partner-facing summary. Requires an advanced degree and at least 15 years in education policy and programmes in low- and middle-income countries.',
  amount: 'Fee set by the applicant\'s financial proposal', duration: '3 months 10 days',
  location: 'Fully remote (linked to Amman)', countries: 'No nationality restriction stated.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['education'],
  close: '2026-11-09T20:59:00Z', closeText: '9 Nov 2026 (no time stated on the platform listing)',
  url: 'https://jobs.unicef.org/en-us/job/596746/technical-consultant-secondary-education-guidance-multiple-and-flexible-pathways-2027-edition-remote-3-months-10-days',
  via: 'https://unvacancies.org/jobs/technical-consultant-secondary-education-guidance-multiple-and-flexible-pathways-2027-edition-remote-F-596746', check: 'platform', checked: '2026-11-04', added: '2026-11-04', foreign: false
},
{
  id: 'j27', type: 'job',
  title: 'Senior Urban and Territorial Planner Consultant, Urban Lab (home-based)',
  issuer: 'UN-Habitat, Regional Programme Division', issuerKind: 'UN agency', ref: '287558',
  summary: 'Three-month home-based consultancy supporting the Water as Leverage Multilevel Climate Action Programme in countries including India and Kenya: progress and lessons-learned reports, resource mobilisation, planning guidance and training materials. Requires a master\'s in architecture, urban planning or design and seven years of relevant experience.',
  amount: '', duration: '3 months',
  location: 'Remote (home-based), linked to Nairobi', countries: 'No nationality restriction stated on the platform listing.',
  region: 'global', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['climate', 'wash'],
  close: '2026-11-12T20:59:00Z', closeText: '12 Nov 2026 (no time stated on the platform listing)',
  url: 'https://careers.un.org/jobSearchDescription/287558?language=en',
  via: 'https://unvacancies.org/jobs/senior-urban-and-territorial-planner-consultant-t-287558', check: 'platform', checked: '2026-11-04', added: '2026-11-04', foreign: false
},
{
  id: 'j28', type: 'job',
  title: 'Consultant, Regional Administrative Data for Counter-Trafficking (home-based with travel)',
  issuer: 'IOM Regional Data Hub for East, Horn and Southern Africa', issuerKind: 'UN agency', ref: '23768',
  summary: 'Five-month consultancy to design and deliver a regional programme that helps East African governments use administrative data on migration, trafficking in persons and migrant smuggling, with travel to field locations. Requires a master\'s and seven years in migration, development and data management; applicants send a CV and a one-page costed workplan.',
  amount: '', duration: '5 months (extension possible)',
  location: 'Home-based with travel in East and Horn of Africa (linked to Nairobi)', countries: 'No nationality restriction stated; candidates within about three hours of East Africa Time are preferred.',
  region: 'africa', country: '', remote: true, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['humanitarian', 'research', 'governance'],
  close: '2026-11-12T20:59:00Z', closeText: '12 Nov 2026 (no time stated on the platform listing)',
  url: 'https://fa-evlj-saasfaprod1.fa.ocs.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/23768',
  via: 'https://unvacancies.org/jobs/consultant-regional-administrative-data-for-counter-trafficking-OM-23768', check: 'platform', checked: '2026-11-04', added: '2026-11-04', foreign: false
},
{
  id: 'j29', type: 'job',
  title: 'Data Analysis Assistant (consultant), Data and Statistics Unit, Nairobi',
  issuer: 'UN-Habitat, Knowledge and Innovation Branch', issuerKind: 'UN agency', ref: '287313',
  summary: 'Six-month consultancy in Nairobi to calculate urban indicators from new surveys, compile and validate secondary data, and contribute data and a housing chapter to UN-Habitat\'s Urban 2030 work and the World Cities Report 2028. Requires five years as a data analyst; a degree in statistics, economics or urban planning is an asset.',
  amount: '', duration: '6 months',
  location: 'Nairobi, Kenya', countries: 'No nationality restriction stated on the platform listing.',
  region: 'africa', country: 'Kenya', remote: false, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['research'],
  close: '2026-11-12T20:59:00Z', closeText: '12 Nov 2026 (no time stated on the platform listing)',
  url: 'https://careers.un.org/jobSearchDescription/287313?language=en',
  via: 'https://unvacancies.org/jobs/data-analysis-assistant-t-287313', check: 'platform', checked: '2026-11-04', added: '2026-11-04', foreign: false
},
/* ---------- Tenders, RFPs and EOIs ---------- */
{
  id: 't1', type: 'tender',
  title: 'Two-year framework agreement for food, venue and accommodation services, Mymensingh',
  issuer: 'CARE Bangladesh', issuerKind: 'INGO', ref: '',
  summary: 'CARE Bangladesh invites suppliers for a two-year framework agreement covering food, venues and accommodation for its work in Mymensingh. The bid documents are in a downloadable package on CARE Bangladesh\'s consultancy and procurement page.',
  amount: '', duration: '2 years (framework agreement)',
  location: 'Mymensingh', countries: 'Suppliers able to serve Mymensingh; see the bid documents for eligibility.',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['firm'], sectors: ['economic'],
  close: '2026-11-07T17:59:00Z', closeText: '7 Nov 2026 (no time stated on the listing page)',
  url: 'https://www.carebangladesh.org/consultancy',
  docs: 'https://www.carebangladesh.org/storage/app/uploads/public/6ae/09a/ad6/6ae09aad67abe215593903.zip',
  via: '', check: 'official', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 't2', type: 'tender',
  title: 'Two-year framework agreement for food, venue and accommodation services, Bandarban',
  issuer: 'CARE Bangladesh', issuerKind: 'INGO', ref: '',
  summary: 'CARE Bangladesh invites suppliers for a two-year framework agreement covering food, venues and accommodation for its work in Bandarban. The bid documents are in a downloadable package on CARE Bangladesh\'s consultancy and procurement page.',
  amount: '', duration: '2 years (framework agreement)',
  location: 'Bandarban', countries: 'Suppliers able to serve Bandarban; see the bid documents for eligibility.',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['firm'], sectors: ['economic'],
  close: '2026-11-07T17:59:00Z', closeText: '7 Nov 2026 (no time stated on the listing page)',
  url: 'https://www.carebangladesh.org/consultancy',
  docs: 'https://www.carebangladesh.org/storage/app/uploads/public/6ae/09a/4f7/6ae09a4f7c1ae341354449.zip',
  via: '', check: 'official', checked: '2026-11-02', added: '2026-11-02', foreign: false
},

{
  id: 't3', type: 'tender',
  title: 'Request for expressions of interest: two senior individual consultants for the Horn of Africa Initiative Secretariat',
  issuer: 'Inter-University Council for East Africa (IUCEA)', issuerKind: 'Other', ref: 'UG-IUCEA-577529-CS-INDV; UG-IUCEA-577537-CS-INDV',
  summary: 'World Bank-financed EOI for a Senior Program Officer (officer-in-charge) to lead the Horn of Africa Initiative Secretariat in Nairobi and a Senior Operations Officer for results and communication. Selection follows the World Bank\'s individual consultant method; signed CVs go by email only, with the assignment and reference in the subject line.',
  amount: '', duration: '',
  location: 'Nairobi, Kenya (Horn of Africa Initiative Secretariat)', countries: 'Qualified individual consultants; no nationality restriction stated on the notice.',
  region: 'africa', country: 'Kenya', remote: false, open: 'worldwide',
  bd: true, applicants: ['individual'], sectors: ['economic', 'governance'],
  close: '2026-11-06T14:00:00Z', closeText: '6 Nov 2026, 5:00 pm East African Time',
  url: 'https://iucea.org/request-for-expressions-of-interest-consulting-services-individual-selection/',
  via: '', check: 'official', checked: '2026-11-03', added: '2026-11-03', foreign: false
},
{
  id: 't4', type: 'tender',
  title: 'Consultancy to build an interactive SADDD evidence and inclusion dashboard linked to the UN Women data platform',
  issuer: 'BRAC', issuerKind: 'INGO', ref: 'BPD/2026/RFP-2957',
  summary: 'BRAC invites proposals from consultants to develop an interactive dashboard for sex-, age- and disability-disaggregated data (SADDD) and evidence on inclusion, and to integrate it with the UN/UN Women data platform. Documents and submission are on BRAC\'s e-tender portal.',
  amount: '', duration: '',
  location: 'Bangladesh', countries: 'See the letter of invitation on BRAC\'s e-tender portal for eligibility.',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['firm', 'individual'], sectors: ['gender', 'research', 'governance'],
  close: '2026-11-11T08:30:00Z', closeText: '11 Nov 2026, 2:30 pm (last submission)',
  url: 'https://tender.brac.net/',
  via: '', check: 'official', checked: '2026-11-03', added: '2026-11-03', foreign: false
},
{
  id: 't5', type: 'tender',
  title: 'Invitation for tender: transport services with loading and unloading in Cox\'s Bazar (BRAC Humanitarian Crisis Management Programme)',
  issuer: 'BRAC', issuerKind: 'INGO', ref: 'BPD/FA/2026/IFT-2759',
  summary: 'BRAC seeks transport providers, including loading and unloading, for its Humanitarian Crisis Management Programme in the Cox\'s Bazar area. Tender documents and submission are on BRAC\'s e-tender portal.',
  amount: '', duration: '',
  location: 'Cox\'s Bazar', countries: 'Suppliers able to serve the Cox\'s Bazar area; see the tender documents.',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'national',
  bd: true, applicants: ['firm'], sectors: ['humanitarian'],
  close: '2026-11-15T08:30:00Z', closeText: '15 Nov 2026, 2:30 pm (last submission)',
  url: 'https://tender.brac.net/',
  via: '', check: 'official', checked: '2026-11-03', added: '2026-11-03', foreign: false
},
{
  id: 't6', type: 'tender',
  title: 'RFP: consulting firm to develop Circular Bangladesh policy briefs',
  issuer: 'UNDP Bangladesh', issuerKind: 'UN agency', ref: 'UNDP-BGD-01238',
  summary: 'UNDP Bangladesh is hiring a consulting firm to prepare policy briefs on the circular economy in Bangladesh. Offers go through UNDP\'s online supplier portal; the solicitation documents there set out the scope, deliverables and evaluation.',
  amount: '', duration: '',
  location: 'Bangladesh', countries: 'Firms registered on UNGM (basic level); see the solicitation documents for eligibility.',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'worldwide',
  bd: true, applicants: ['firm'], sectors: ['climate', 'economic', 'research'],
  close: '2026-11-11T21:30:00Z', closeText: '11 Nov 2026, 17:30 (GMT-4)',
  url: 'https://www.ungm.org/Public/Notice/320251',
  via: '', check: 'official', checked: '2026-11-04', added: '2026-11-04', foreign: false
},
{
  id: 't7', type: 'tender',
  title: 'RFQ: renovation of an existing composting facility into a materials recovery facility (MRF)',
  issuer: 'UNDP Bangladesh', issuerKind: 'UN agency', ref: 'UNDP-BGD-01237',
  summary: 'A request for quotations for works to convert an existing composting facility into a materials recovery facility for solid waste. Quotations are submitted through UNDP\'s online supplier system following the solicitation document; the site and technical specifications are in the documents.',
  amount: '', duration: '',
  location: 'Bangladesh (site given in the solicitation documents)', countries: 'Not restricted on the notice; the works are in Bangladesh, so it suits contractors able to work there.',
  region: 'asia', country: 'Bangladesh', remote: false, open: 'worldwide',
  bd: true, applicants: ['firm'], sectors: ['wash', 'climate'],
  close: '2026-11-10T10:30:00Z', closeText: '10 Nov 2026, 06:30 (GMT-4)',
  url: 'https://www.ungm.org/Public/Notice/320252',
  via: '', check: 'official', checked: '2026-11-04', added: '2026-11-04', foreign: false
},
/* ---------- Funding releases ---------- */
{
  id: 'f1', type: 'fund',
  title: 'Rockefeller Foundation and OpenAI Foundation launch $50 million Cities Deliver initiative',
  issuer: 'The Rockefeller Foundation and OpenAI Foundation', issuerKind: 'Foundation', ref: '',
  summary: 'Announced on 16 October 2026: $50 million for organisations that help cities use AI to anticipate and meet residents\' needs, starting with a global open call. The first round of the open call is listed separately on DevFund.',
  amount: '$50 million', duration: '',
  location: 'Global', countries: 'Global open call',
  region: 'global', country: '', remote: false, open: 'worldwide',
  bd: true, applicants: ['ngo', 'ingo', 'academic', 'firm'], sectors: ['governance'],
  close: '', closeText: 'Ongoing initiative; Round 1 of the open call closes 29 Nov 2026',
  url: 'https://nextbillion.net/news/press-release-rockefeller-foundation-openai-foundation-announce-50-million-partnership-to-help-cities-improve-public-services-through-ai/',
  via: '', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: true, related: 'g1'
}
],

/* Donor profiles: who funds what and where their notices appear. Every fact links to a page opened on the date shown. */
DONORS: [
{
  id: 'unicef-bd', match: 'UNICEF Bangladesh', scope: 'Bangladesh', name: 'UNICEF Bangladesh', kind: 'UN agency',
  what: 'Requests for proposals (LRPS) for research, evaluations, technical assistance, training and construction; individual consultancies and staff posts.',
  where: 'Notices are posted on the UNICEF Bangladesh website and on UNGM. Jobs are on jobs.unicef.org.',
  how: 'Bids go by email only to ebidsbangladesh@unicef.org, with technical and financial proposals in separate files; financial files are password-protected; each email must be under 10 MB.',
  recent: [
    'LRPS-2026-9206039: assessment of the VaxEPI digital immunization self-registration platform (closed 30 Sep 2026)',
    'LRPS-2026-9205645: technical assistance to BANBEIS on education data governance (closed 20 Sep 2026)',
    'LRPS-2026-9206469: operational research on community Kangaroo Mother Care (closed 29 Oct 2026)'
  ],
  sources: [
    ['UNICEF Bangladesh: LRPS-2026-9206039', 'https://www.unicef.org/bangladesh/en/documents/request-proposal-lrps-2026-9206039-assessment-vaxepi-digital-immunization-self'],
    ['UNGM notice 311664', 'https://www.ungm.org/Public/Notice/311664'],
    ['UNGM notice 316771', 'https://www.ungm.org/Public/Notice/316771']
  ], checked: '2026-11-02'
},
{
  id: 'unwomen-bd', match: 'UN Women', scope: 'Bangladesh', name: 'UN Women Bangladesh', kind: 'UN agency',
  what: 'Calls for proposals for civil society organisations, with preference for women\'s rights organisations; national consultancies.',
  where: 'UN Women Asia-Pacific website (programme implementation section).',
  how: 'Download the call template from the notice page and follow its submission instructions.',
  recent: ['UNW-AP-BGD-CFP-2026-003: reintegration and social protection for Bangladeshi migrants (closed 15 Oct 2026)'],
  sources: [['UN Women Asia-Pacific: UNW-AP-BGD-CFP-2026-003', 'https://asiapacific.unwomen.org/en/programme-implementation/2026/09/unw-ap-bgd-cfp-2026-003-addressing-the-medium-to-long-term-reintegration-needs-and-strengthening-social-protection-support-mechanisms-for-the-social-inclusion-of-bangladeshi-migrants']],
  checked: '2026-11-02'
},
{
  id: 'unfpa-bd', match: 'UNFPA', scope: 'Bangladesh', name: 'UNFPA Bangladesh', kind: 'UN agency',
  what: 'Invitations for proposals for NGOs, including faith-based organisations; requests for quotation for goods and services.',
  where: 'UNFPA Bangladesh "Call for submissions" page.',
  how: 'Proposals by email to eoi-bgd@unfpa.org, marked with the call name, in English.',
  recent: ['Bridging Faith, Education and Health to Prevent Child Marriage in Bangladesh (closed 19 Oct 2026)'],
  sources: [
    ['UNFPA Bangladesh: call for submissions', 'https://bangladesh.unfpa.org/en/call-for-submissions'],
    ['UNFPA Bangladesh: child marriage invitation for proposals', 'https://bangladesh.unfpa.org/en/submission/invitation-proposals-bridging-faith-education-and-health-prevent-child-marriage']
  ], checked: '2026-11-02'
},
{
  id: 'worldbank-bd', match: '', scope: 'Bangladesh', name: 'World Bank-financed projects in Bangladesh', kind: 'Development bank',
  what: 'Government project units hire consulting firms and individual consultants under World Bank Procurement Regulations.',
  where: 'Requests for expressions of interest are advertised by the procuring entity on the BPPA advertisement pages and on the World Bank projects site.',
  how: 'Submit a written EOI with CV or firm profile to the project office by the stated deadline; follow the selection method in the notice (for example QCBS for firms).',
  recent: [
    'National Board of Revenue, SDRMP: international consultant, Project Executive & Coordinator (ICT for VAT) (closed 22 Jul 2026)',
    'BRTA, BEST Project: national consulting firm for supervision and monitoring (closed 25 Mar 2026)'
  ],
  sources: [
    ['BPPA advertisement 10636 (NBR, SDRMP)', 'https://www.bppa.gov.bd/advertisement-services/details-10636.html'],
    ['BPPA advertisement 10540 (BRTA, BEST)', 'https://bppa.gov.bd/advertisement-services/details-10540.html']
  ], checked: '2026-11-02'
},
{
  id: 'gcf', match: 'Green Climate Fund', scope: 'Global', name: 'Green Climate Fund (GCF)', kind: 'Global fund',
  what: 'The largest multilateral climate fund, financing adaptation and mitigation projects in developing countries, including private-sector initiatives. At its 46th Board meeting (October 2026) it approved $1.97 billion for 21 projects, bringing 2026 approvals to a record $3.2 billion.',
  where: 'GCF website: funding proposals approved at each Board meeting, accredited entities and readiness support.',
  how: 'Funding flows through accredited entities (international, regional and national direct-access entities) working with national designated authorities. NGOs and firms usually take part as executing partners or consortium members of an accredited entity\'s project.',
  recent: ['B.46 (October 2026): 21 projects, $1.97 billion, including first single-country projects for Algeria, Cameroon, Moldova and Yemen', 'FAO-supported projects approved at B.46: $43 million for steppe and dry-forest resilience in Algeria and $85.3 million REDD+ results-based payment for Mexico'],
  sources: [
    ['Reuters via Yahoo Finance: Green Climate Fund approves record near $2 billion (29 Oct 2026)', 'https://finance.yahoo.com/economy/policy/articles/green-climate-fund-approves-record-145521720.html'],
    ['PINA: GCF financing tops $3 billion for consecutive record year (30 Oct 2026)', 'https://pina.com.fj/2026/10/30/gcf-financing-tops-usd3-billion-for-consecutive-record-year-as-reforms-continue-to-deliver/'],
    ['IndexBox: GCF approves $184.8 million in FAO-supported projects for Algeria and Mexico', 'https://www.indexbox.io/blog/green-climate-fund-approves-1848-million-in-fao-supported-projects-for-algeria-and-mexico/']
  ], checked: '2026-11-02'
},
{
  id: 'afdb', match: 'African Development Bank', scope: 'Global', name: 'African Development Bank Group (AfDB)', kind: 'Development bank',
  what: 'Loans, grants and guarantees for African countries and businesses. Recent approvals include large policy-based programmes: $503.75 million for Botswana\'s Economic Competitiveness and Transformation Support Program (with $170 million from the OPEC Fund) and $487 million for Morocco\'s economic governance and climate resilience programme.',
  where: 'AfDB press releases and the consultants page, which lists expressions of interest for individual consultants and firms with closing dates.',
  how: 'Consultants and firms respond to expressions of interest on the AfDB consultants page; check each notice for eligibility rules, which can depend on nationality of a member country.',
  recent: ['Botswana: $503.75 million, first phase of a two-year programme (October 2026)', 'Morocco: $487 million, Phase III of the Economic Governance and Climate Change Resilience Support Program (22 Oct 2026)'],
  sources: [
    ['Top Africa News: Botswana secures $503.75m AfDB financing (26 Oct 2026)', 'https://www.topafricanews.com/2026/10/26/botswana-secures-503-75m-african-development-bank-financing-to-cushion-energy-shocks-drive-jobs/'],
    ['Fes News Media: AfDB approves $487 million for Morocco (22 Oct 2026)', 'https://fesnews.media/322933/2026/10/22/'],
    ['AfDB: current consultant vacancies', 'https://www.afdb.org/en/about-us/careers/current-vacancies/consultants']
  ], checked: '2026-11-02'
},
{
  id: 'idb', match: 'Inter-American Development Bank', scope: 'Global', name: 'Inter-American Development Bank (IDB)', kind: 'Development bank',
  what: 'Loans and grants for Latin America and the Caribbean, with large social-protection and human-capital programmes, such as $900 million for Argentina\'s Human Capital Strengthening Support Program (October 2026), which includes job training for up to 500,000 adults.',
  where: 'IDB press room and project pages; IDB Lab runs separate calls for start-ups and innovators.',
  how: 'Governments borrow; consultants, firms and NGOs are hired through procurement under each project. IDB Lab calls are open to eligible start-ups and organisations in the region.',
  recent: ['Argentina: $900 million Human Capital Strengthening Support Program (30 Oct 2026)', 'IDB Lab: call for STEM start-ups to expand access to capital (press room, autumn 2026)'],
  sources: [
    ['Devdiscourse: IDB backs Argentina with $900m (30 Oct 2026)', 'https://www.devdiscourse.com/article/business/3999316-idb-backs-argentina-with-900m-to-support-education-and-job-training-access'],
    ['IDB press room', 'https://www.iadb.org/en/press-room']
  ], checked: '2026-11-02'
},
{
  id: 'rockefeller', match: 'Rockefeller', scope: 'Global', name: 'The Rockefeller Foundation', kind: 'Foundation',
  what: 'Global foundation. With the OpenAI Foundation it launched the $50 million Cities Deliver initiative (October 2026), whose open call gives grants of $500,000 to $2 million to organisations working with city governments on AI for public services.',
  where: 'Rockefeller Foundation website, including call FAQs.',
  how: 'Organisations (not individuals or government bodies) apply with a city government partner; Round 1 closes 29 November 2026. Questions: citiesdeliver@rockfound.org.',
  recent: ['Cities Deliver: AI Solutions for Public Services, Round 1 (closes 29 Nov 2026)'],
  sources: [['Cities Deliver FAQs (October 2026)', 'https://www.rockefellerfoundation.org/wp-content/uploads/2026/10/Cities-Deliver-AI-Solutions-for-Public-Services-FAQs-Final.pdf']],
  checked: '2026-11-02'
},
{
  id: 'global-eba-fund', match: 'Global EbA Fund', scope: 'Global', name: 'Global EbA Fund', kind: 'Other',
  what: 'Grants for ecosystem-based adaptation (EbA) to climate change: small-size grants of up to $250,000 (18–24 months), with priority for least developed countries and small island developing states, and medium-size grants of up to $500,000 (up to 24 months) for ODA-eligible countries. Themes include investment readiness, innovative EbA technologies, applied research and links with other nature-based solutions.',
  where: 'Global EbA Fund website (globalebafund.org): call documents, FAQ and the Grants Procedures Manual. IUCN and UNEP act as the secretariat; the Fund\'s own announcements say it is funded by Germany\'s International Climate Initiative (IKI).',
  how: 'Online through the IUCN Grants Portal, in English, by one lead organisation (consortia welcome). NGOs, INGOs, intergovernmental organisations (except UNEP and IUCN offices), CBOs, Indigenous Peoples\' organisations, universities, think tanks and companies can apply; individuals cannot. Projects must build on existing work rather than stand-alone field implementation. Country-level projects need a consortium with a local partner receiving at least 25% of the budget. Government bodies, IUCN and UNEP offices can be partners but cannot receive funds. Co-financing is optional.',
  recent: ['8th call for small-size grants: open 28 Sep – 26 Oct 2026 (closed); Bangladesh listed among eligible LDCs', 'Call for medium-size grants: open 12 Oct – 16 Nov 2026'],
  sources: [
    ['Global EbA Fund: medium-size grants', 'https://globalebafund.org/medium-size-grants/'],
    ['Call for Proposals: medium-size grants (PDF)', 'https://globalebafund.org/wp-content/uploads/2026/08/Global-EbA-Fund_Medium-size-grants-Call-for-Proposals.pdf'],
    ['8th Call for Proposals: small-size grants (PDF)', 'https://globalebafund.org/wp-content/uploads/2026/08/Global-EbA-Fund_Small-size-grants-Call-for-Proposals.pdf'],
    ['FAQ on the open calls (October 2026)', 'https://globalebafund.org/wp-content/uploads/2026/10/FAQ_Global-EbA-Fund-Open-Calls-for-Proposals_Oct26.pdf']
  ], checked: '2026-11-02'
},
{
  id: 'commonwealth', match: 'Commonwealth Foundation', scope: 'Global', name: 'Commonwealth Foundation', kind: 'Foundation',
  what: 'Individual Organisation Grants of £15,000–£30,000 a year and Collective Action Grants of £15,000–£20,000 a year, for up to two years, in climate and environmental justice, economic inclusion and freedom of expression.',
  where: 'Commonwealth Foundation grants page. Bangladesh is eligible.',
  how: 'Online through the Foundation\'s portal. Applicants need three years of registration and an average income under £2.5 million.',
  recent: ['2026 call ran 23 Sep – 26 Oct 2026 and is closed; the Foundation says it reopens in 2027'],
  sources: [['Commonwealth Foundation: open grants call', 'https://commonwealthfoundation.com/grants/annual/']],
  checked: '2026-11-02'
},
{
  id: 'japan-gghsp', match: 'Embassy of Japan', scope: 'Bangladesh', name: 'Embassy of Japan in Bangladesh – Grassroots Human Security Projects (GGHSP)', kind: 'Bilateral donor',
  what: 'Grants mainly for health care, primary education, rural development and poverty relief, covering construction, equipment and infrastructure. Salaries, research, training and recurring costs are not covered.',
  where: 'Embassy of Japan in Bangladesh, assistance pages.',
  how: 'Download the GGHSP forms and guideline and submit to the GGHSP Consultant, Economic and Development Cooperation Section, Embassy of Japan, Baridhara, Dhaka. Contact the Embassy to confirm the current round.',
  recent: [],
  sources: [['Embassy of Japan: GGHSP', 'https://www.bd.emb-japan.go.jp/en/assistance/gghsp.html']],
  checked: '2026-11-02'
},
{
  id: 'undef', match: 'UN Democracy Fund', scope: 'Global', name: 'UN Democracy Fund (UNDEF)', kind: 'UN agency',
  what: 'Project grants of $100,000–$200,000, usually over two years, for civil society, human rights and democratic participation.',
  where: 'UNDEF "Apply for funding" page. Proposals are accepted only during an annual online window.',
  how: 'Online Project Proposal System only, in English or French. The window published on the page ran 1–28 February.',
  recent: [],
  sources: [['UNDEF: apply for funding', 'https://www.un.org/democracyfund/apply-for-funding']],
  checked: '2026-11-02'
},
{
  id: 'us-mission-bd', match: 'U.S. Mission', scope: 'Bangladesh', name: 'U.S. Mission to Bangladesh – Public Diplomacy grants', kind: 'Bilateral donor',
  what: 'Small public diplomacy cooperative agreements for nonprofits, universities and individuals.',
  where: 'Grants.gov (simpler.grants.gov).',
  how: 'Apply through Grants.gov under the published notice of funding opportunity.',
  recent: ['PD-DHAKA-NOFO-FY2026-01, Freedom 250 Bangladesh 2026: $5,000–$24,990 awards (archived 30 May 2026)'],
  sources: [['Grants.gov: Freedom 250 Bangladesh 2026', 'https://simpler.grants.gov/opportunity/361708']],
  checked: '2026-11-02'
},
{
  id: 'gif', match: 'Global Innovation Fund', scope: 'Global', name: 'Global Innovation Fund', kind: 'Foundation',
  what: 'Grants and investments for innovations that improve the lives of people living on low incomes, in bands from £100,001 to over £1 million.',
  where: 'Global Innovation Fund website. The UK government funding listing names Bangladesh among 26 eligible countries but marks the opportunity closed.',
  how: 'Check globalinnovation.fund for the current application route.',
  recent: [],
  sources: [['GOV.UK: Global Innovation Fund listing', 'https://www.gov.uk/international-development-funding/global-innovation-fund']],
  checked: '2026-11-02'
}
],

/* Approved source list (public on the Our Sources page) */
SOURCES: {
  tier1: [
    ['UN Global Marketplace (UNGM): tenders from all UN agencies', 'https://www.ungm.org/Public/Notice'],
    ['UN Partner Portal: calls for civil society partners', 'https://www.unpartnerportal.org/'],
    ['UN Secretariat procurement', 'https://www.un.org/procurement/solicitations-opportunities'],
    ['UNDP procurement notices and consultancies', 'https://procurement-notices.undp.org/'],
    ['UNICEF jobs', 'https://jobs.unicef.org/'],
    ['UN Careers (UN Secretariat, UNEP, UN DESA, UNDRR and others)', 'https://careers.un.org/'],
    ['UN Women Asia-Pacific calls for proposals', 'https://asiapacific.unwomen.org/en'],
    ['FAO careers', 'https://jobs.fao.org/'],
    ['WFP careers', 'https://www.wfp.org/careers'],
    ['UNOPS jobs', 'https://jobs.unops.org/'],
    ['UNDEF: UN Democracy Fund', 'https://www.un.org/democracyfund/apply-for-funding'],
    ['World Bank projects and procurement', 'https://projects.worldbank.org/'],
    ['African Development Bank: consultants and procurement', 'https://www.afdb.org/en/about-us/careers/current-vacancies/consultants'],
    ['Inter-American Development Bank', 'https://www.iadb.org/en'],
    ['European Bank for Reconstruction and Development', 'https://www.ebrd.com/'],
    ['Green Climate Fund', 'https://www.greenclimate.fund/'],
    ['Global Environment Facility', 'https://www.thegef.org/'],
    ['The Global Fund', 'https://www.theglobalfund.org/'],
    ['UNHCR', 'https://www.unhcr.org/'],
    ['World Health Organization', 'https://www.who.int/'],
    ['UNEP', 'https://www.unep.org/'],

    ['Asian Development Bank consulting and procurement', 'https://www.adb.org/'],
    ['Asian Infrastructure Investment Bank procurement', 'https://www.aiib.org/'],
    ['Islamic Development Bank procurement', 'https://www.isdb.org/'],
    ['EU Funding & Tenders Portal', 'https://ec.europa.eu/info/funding-tenders/opportunities/portal/'],
    ['UK Find a Tender', 'https://www.find-tender.service.gov.uk/'],
    ['UK international development funding', 'https://www.gov.uk/international-development-funding'],
    ['US Grants.gov', 'https://simpler.grants.gov/'],
    ['GIZ tenders', 'https://www.giz.de/en/workingwithgiz/tenders.html'],
    ['JICA', 'https://www.jica.go.jp/english/'],
    ['Commonwealth Foundation grants', 'https://commonwealthfoundation.com/grants/annual/'],
    ['Rockefeller Foundation', 'https://www.rockefellerfoundation.org/'],
    ['Mozilla Foundation fellowships', 'https://www.mozillafoundation.org/'],
    ['Internet Society fellowship', 'https://www.internetsociety.org/fellowship/'],
    ['ifa CrossCulture Programme', 'https://www.ifa.de/en/funding/ccp-fellowships/'],
    ['Equality Fund', 'https://equalityfund.ca/'],
    ['D-Prize', 'https://d-prize.org/'],
    ['Global Innovation Fund', 'https://www.globalinnovation.fund/'],
    ['Global EbA Fund', 'https://globalebafund.org/']
  ],
  national: {
    Bangladesh: [
      ['Bangladesh Public Procurement Authority (BPPA) advertisements', 'https://www.bppa.gov.bd/'],
      ['Bangladesh e-GP', 'https://www.eprocure.gov.bd/'],
      ['NGO Affairs Bureau', 'https://ngoab.gov.bd/'],
      ['PKSF', 'https://pksf.org.bd/'],
      ['icddr,b tender notices', 'https://www.icddrb.org/tender-notices'],
      ['CARE Bangladesh consultancy and procurement', 'https://www.carebangladesh.org/consultancy'],
      ['Embassy of Japan in Bangladesh: grassroots grants', 'https://www.bd.emb-japan.go.jp/en/assistance/gghsp.html'],
      ['EU Delegation to Bangladesh', 'https://www.eeas.europa.eu/delegations/bangladesh_en'],
      ['UNICEF Bangladesh supply and procurement', 'https://www.unicef.org/bangladesh/en/supply-and-logistics'],
      ['UNFPA Bangladesh calls for submissions', 'https://bangladesh.unfpa.org/en/call-for-submissions'],
      ['IOM Bangladesh procurement', 'https://bangladesh.iom.int/procurement']
    ]
  },
  tier2: [
    ['ReliefWeb jobs and training', 'https://reliefweb.int/jobs'],
    ['GOV.UK international development funding finder', 'https://www.gov.uk/international-development-funding'],
    ['Grants.gov opportunity search', 'https://simpler.grants.gov/search']
  ],
  tier3: [
    ['UN Vacancies (including its remote-jobs list)', 'https://unvacancies.org/remote-un-jobs'],
    ['Impactpool', 'https://www.impactpool.org/'],
    ['DevelopmentAid', 'https://www.developmentaid.org/'],
    ['Opportunity Desk', 'https://opportunitydesk.org/'],
    ['fundsforNGOs', 'https://www2.fundsforngos.org/'],
    ['Global South Opportunities', 'https://www.globalsouthopportunities.com/']
  ]
},

/* Weekly Opportunity Digest: refreshed every Sunday. Items are listing ids. */
DIGEST: {
  week: '2 – 8 Nov 2026',
  note: 'DevFund now covers the whole world, including remote work: this week brings 11 home-based UN consultancies in climate, evaluation, finance, nutrition and education, alongside grants such as the Global EbA Fund (up to $500,000, closing 16 Nov). Fund News tracks $2.8 billion in 2026 financing approvals and signings.',
  top: ['g7', 'j8', 'j12', 'g1'],
  also: ['j13', 'j17', 'g2', 'j1', 'g6', 'g4']
},

/* Corrections log: newest first. {date, id, what} */
CORRECTIONS: []
};
