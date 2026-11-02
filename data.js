/* DevFund content. All listings, donor profiles and sources live here.
   The daily update edits this file only.

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
     bd: true,                      // open to applicants from Bangladesh (true), or not confirmed (false)
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
UPDATED: '2 Nov 2026',
TODAY: '2026-11-02',

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
  bd: true, applicants: ['individual'], sectors: ['media', 'gender'],
  close: '2026-11-09T05:00:00Z', closeText: '8 Nov 2026, midnight Eastern Standard Time',
  url: 'https://equalityfund.ca/en/posts/journalism-fellowship',
  via: 'https://opportunitydesk.org/2026/09/24/equality-fund-journalism-fellowship-2026-2027/', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},

{
  id: 'g7', type: 'grant',
  title: 'Global EbA Fund: Call for Proposals for Medium-Size Grants (ecosystem-based adaptation)',
  issuer: 'Global EbA Fund', issuerKind: 'Other', ref: '',
  summary: 'Grants of up to $500,000 for up to 24 months to scale up ecosystem-based adaptation (EbA) to climate change; 10 grants are available. NGOs, community-based and Indigenous Peoples\' organisations, universities, think tanks and private companies can apply. Country-level projects need a consortium with at least one local organisation receiving at least 25% of the budget. Applications go through the IUCN Grants Portal, in English.',
  amount: 'Up to $500,000', duration: 'Up to 24 months (projects expected to start in 2027)',
  location: 'ODA-eligible countries', countries: 'Countries on the OECD DAC list of ODA recipients (Bangladesh is on it); multi-country projects must cover only ODA-eligible countries.',
  bd: true, applicants: ['ngo', 'ingo', 'academic', 'firm'], sectors: ['climate', 'agriculture', 'wash'],
  close: '2026-11-16T17:59:00Z', closeText: '16 Nov 2026 (submission window 12 Oct – 16 Nov; no time stated)',
  url: 'https://globalebafund.org/medium-size-grants/',
  docs: 'https://globalebafund.org/wp-content/uploads/2026/08/Global-EbA-Fund_Medium-size-grants-Call-for-Proposals.pdf',
  extra: [['Frequently asked questions (October 2026)', 'https://globalebafund.org/wp-content/uploads/2026/10/FAQ_Global-EbA-Fund-Open-Calls-for-Proposals_Oct26.pdf']],
  via: '', check: 'official', checked: '2026-11-02', added: '2026-11-02', foreign: true,
  steps: ['Read the call document and the Grants Procedures Manual on the Global EbA Fund website', 'Draft offline using the application form, then submit on the IUCN Grants Portal by 16 November 2026', 'Upload a theory of change and logframe, budget, team CVs, organigram and a project-location map if available']
},

/* ---------- Jobs and consultancies ---------- */
{
  id: 'j1', type: 'job',
  title: 'National Consultant – E-Governance Expert',
  issuer: 'UNDP Bangladesh', issuerKind: 'UN agency', ref: 'UNDP-BGD-01235',
  summary: 'Individual consultancy giving e-governance guidance on digital governance policy and implementation. About 90 working days over six months, December 2026 to May 2027. Proposals go through the UNDP Quantum supplier portal.',
  amount: '', duration: 'About 90 working days, Dec 2026 – May 2027',
  location: 'Bangladesh', countries: 'Bangladeshi nationals only',
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
  bd: true, applicants: ['individual'], sectors: ['education', 'governance'],
  close: '2026-11-12T17:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://jobs.unicef.org/en-us/job/596684/national-consultant-p2e-genu-officebased-with-travel-for-12-months',
  via: 'https://unvacancies.org/jobs/national-consultant-p2e-genu-office-based-with-travel-for-12-months-F-596684', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j3', type: 'job',
  title: 'National Monitoring and Evaluation Specialist (ATP project)',
  issuer: 'FAO Bangladesh', issuerKind: 'UN agency', ref: '2602237',
  summary: 'Seven-month consultancy tracking the ATP project and its letters of agreement with BARC, DAE and BADC, and preparing reports for FAO, the Gates Foundation and the Government of Bangladesh. Requires an advanced degree and 9 years of M&E experience; KoboToolbox or ODK and dashboard skills are an asset.',
  amount: 'Grade SC 9', duration: '7 months',
  location: 'Dhaka', countries: 'Bangladeshi nationals, or residents with a valid work permit',
  bd: true, applicants: ['individual'], sectors: ['agriculture', 'research'],
  close: '2026-11-12T17:59:00Z', closeText: '12 Nov 2026 (no time stated)',
  url: 'https://jobs.fao.org/careersection/fao_external/jobdetail.ftl?job=2602237',
  via: 'https://unvacancies.org/jobs/national-monitoring-and-evaluation-specialist--2602237', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},
{
  id: 'j4', type: 'job',
  title: 'Health Officer (eHMIS), NO-B, fixed term',
  issuer: 'UNICEF Bangladesh', issuerKind: 'UN agency', ref: '128030',
  summary: 'Staff post supporting digital health: health management information system data collection, integration and visualisation, and planning and reporting on health programme results. Requires a relevant bachelor\'s degree and at least two years of experience.',
  amount: 'NO-B', duration: 'Fixed term',
  location: 'Dhaka', countries: 'Bangladeshi nationals only',
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
  bd: true, applicants: ['individual'], sectors: ['humanitarian'],
  close: '2026-11-14T17:59:00Z', closeText: '14 Nov 2026, 23:59 Bangladesh time',
  url: 'https://wd3.myworkdaysite.com/recruiting/wfp/job_openings/job/Coxs-Bazaar-Bangladesh-The-Peoples-R/Mechanics--Electrical-Engineer---SC4--Cox-s-Bazar_JR128058',
  via: 'https://unvacancies.org/jobs/mechanics-electrical-engineer-sc4-cox-s-bazar-31097322', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: false
},

/* ---------- Tenders, RFPs and EOIs ---------- */
{
  id: 't1', type: 'tender',
  title: 'Two-year framework agreement for food, venue and accommodation services, Mymensingh',
  issuer: 'CARE Bangladesh', issuerKind: 'INGO', ref: '',
  summary: 'CARE Bangladesh invites suppliers for a two-year framework agreement covering food, venues and accommodation for its work in Mymensingh. The bid documents are in a downloadable package on CARE Bangladesh\'s consultancy and procurement page.',
  amount: '', duration: '2 years (framework agreement)',
  location: 'Mymensingh', countries: 'Suppliers able to serve Mymensingh; see the bid documents for eligibility.',
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
  bd: true, applicants: ['firm'], sectors: ['economic'],
  close: '2026-11-07T17:59:00Z', closeText: '7 Nov 2026 (no time stated on the listing page)',
  url: 'https://www.carebangladesh.org/consultancy',
  docs: 'https://www.carebangladesh.org/storage/app/uploads/public/6ae/09a/4f7/6ae09a4f7c1ae341354449.zip',
  via: '', check: 'official', checked: '2026-11-02', added: '2026-11-02', foreign: false
},

/* ---------- Funding releases ---------- */
{
  id: 'f1', type: 'fund',
  title: 'Rockefeller Foundation and OpenAI Foundation launch $50 million Cities Deliver initiative',
  issuer: 'The Rockefeller Foundation and OpenAI Foundation', issuerKind: 'Foundation', ref: '',
  summary: 'Announced on 16 October 2026: $50 million for organisations that help cities use AI to anticipate and meet residents\' needs, starting with a global open call. The first round of the open call is listed separately on DevFund.',
  amount: '$50 million', duration: '',
  location: 'Global', countries: 'Global open call',
  bd: true, applicants: ['ngo', 'ingo', 'academic', 'firm'], sectors: ['governance'],
  close: '', closeText: 'Ongoing initiative; Round 1 of the open call closes 29 Nov 2026',
  url: 'https://nextbillion.net/news/press-release-rockefeller-foundation-openai-foundation-announce-50-million-partnership-to-help-cities-improve-public-services-through-ai/',
  via: '', check: 'platform', checked: '2026-11-02', added: '2026-11-02', foreign: true, related: 'g1'
}
],

/* Donor profiles: who funds what and where their notices appear. Every fact links to a page opened on the date shown. */
DONORS: [
{
  id: 'unicef-bd', name: 'UNICEF Bangladesh', kind: 'UN agency',
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
  id: 'unwomen-bd', name: 'UN Women Bangladesh', kind: 'UN agency',
  what: 'Calls for proposals for civil society organisations, with preference for women\'s rights organisations; national consultancies.',
  where: 'UN Women Asia-Pacific website (programme implementation section).',
  how: 'Download the call template from the notice page and follow its submission instructions.',
  recent: ['UNW-AP-BGD-CFP-2026-003: reintegration and social protection for Bangladeshi migrants (closed 15 Oct 2026)'],
  sources: [['UN Women Asia-Pacific: UNW-AP-BGD-CFP-2026-003', 'https://asiapacific.unwomen.org/en/programme-implementation/2026/09/unw-ap-bgd-cfp-2026-003-addressing-the-medium-to-long-term-reintegration-needs-and-strengthening-social-protection-support-mechanisms-for-the-social-inclusion-of-bangladeshi-migrants']],
  checked: '2026-11-02'
},
{
  id: 'unfpa-bd', name: 'UNFPA Bangladesh', kind: 'UN agency',
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
  id: 'worldbank-bd', name: 'World Bank-financed projects in Bangladesh', kind: 'Development bank',
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
  id: 'global-eba-fund', name: 'Global EbA Fund', kind: 'Other',
  what: 'Grants for ecosystem-based adaptation (EbA) to climate change: small-size grants of up to $250,000 (18–24 months), with priority for least developed countries and small island developing states, and medium-size grants of up to $500,000 (up to 24 months) for ODA-eligible countries. Themes include investment readiness, innovative EbA technologies, applied research and links with other nature-based solutions.',
  where: 'Global EbA Fund website (globalebafund.org): call documents, FAQ and the Grants Procedures Manual.',
  how: 'Online through the IUCN Grants Portal, in English. NGOs, CBOs, Indigenous Peoples\' organisations, universities, think tanks and companies can apply; individuals cannot. Country-level projects need a consortium with a local partner receiving at least 25% of the budget. Government bodies, IUCN and UNEP offices can be partners but cannot receive funds. Co-financing is optional.',
  recent: ['8th call for small-size grants: open 28 Sep – 26 Oct 2026 (closed); Bangladesh listed among eligible LDCs', 'Call for medium-size grants: open 12 Oct – 16 Nov 2026'],
  sources: [
    ['Global EbA Fund: medium-size grants', 'https://globalebafund.org/medium-size-grants/'],
    ['Call for Proposals: medium-size grants (PDF)', 'https://globalebafund.org/wp-content/uploads/2026/08/Global-EbA-Fund_Medium-size-grants-Call-for-Proposals.pdf'],
    ['8th Call for Proposals: small-size grants (PDF)', 'https://globalebafund.org/wp-content/uploads/2026/08/Global-EbA-Fund_Small-size-grants-Call-for-Proposals.pdf'],
    ['FAQ on the open calls (October 2026)', 'https://globalebafund.org/wp-content/uploads/2026/10/FAQ_Global-EbA-Fund-Open-Calls-for-Proposals_Oct26.pdf']
  ], checked: '2026-11-02'
},
{
  id: 'commonwealth', name: 'Commonwealth Foundation', kind: 'Foundation',
  what: 'Individual Organisation Grants of £15,000–£30,000 a year and Collective Action Grants of £15,000–£20,000 a year, for up to two years, in climate and environmental justice, economic inclusion and freedom of expression.',
  where: 'Commonwealth Foundation grants page. Bangladesh is eligible.',
  how: 'Online through the Foundation\'s portal. Applicants need three years of registration and an average income under £2.5 million.',
  recent: ['2026 call ran 23 Sep – 26 Oct 2026 and is closed; the Foundation says it reopens in 2027'],
  sources: [['Commonwealth Foundation: open grants call', 'https://commonwealthfoundation.com/grants/annual/']],
  checked: '2026-11-02'
},
{
  id: 'japan-gghsp', name: 'Embassy of Japan in Bangladesh – Grassroots Human Security Projects (GGHSP)', kind: 'Bilateral donor',
  what: 'Grants mainly for health care, primary education, rural development and poverty relief, covering construction, equipment and infrastructure. Salaries, research, training and recurring costs are not covered.',
  where: 'Embassy of Japan in Bangladesh, assistance pages.',
  how: 'Download the GGHSP forms and guideline and submit to the GGHSP Consultant, Economic and Development Cooperation Section, Embassy of Japan, Baridhara, Dhaka. Contact the Embassy to confirm the current round.',
  recent: [],
  sources: [['Embassy of Japan: GGHSP', 'https://www.bd.emb-japan.go.jp/en/assistance/gghsp.html']],
  checked: '2026-11-02'
},
{
  id: 'undef', name: 'UN Democracy Fund (UNDEF)', kind: 'UN agency',
  what: 'Project grants of $100,000–$200,000, usually over two years, for civil society, human rights and democratic participation.',
  where: 'UNDEF "Apply for funding" page. Proposals are accepted only during an annual online window.',
  how: 'Online Project Proposal System only, in English or French. The window published on the page ran 1–28 February.',
  recent: [],
  sources: [['UNDEF: apply for funding', 'https://www.un.org/democracyfund/apply-for-funding']],
  checked: '2026-11-02'
},
{
  id: 'us-mission-bd', name: 'U.S. Mission to Bangladesh – Public Diplomacy grants', kind: 'Bilateral donor',
  what: 'Small public diplomacy cooperative agreements for nonprofits, universities and individuals.',
  where: 'Grants.gov (simpler.grants.gov).',
  how: 'Apply through Grants.gov under the published notice of funding opportunity.',
  recent: ['PD-DHAKA-NOFO-FY2026-01, Freedom 250 Bangladesh 2026: $5,000–$24,990 awards (archived 30 May 2026)'],
  sources: [['Grants.gov: Freedom 250 Bangladesh 2026', 'https://simpler.grants.gov/opportunity/361708']],
  checked: '2026-11-02'
},
{
  id: 'gif', name: 'Global Innovation Fund', kind: 'Foundation',
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
    ['UNICEF Bangladesh supply and procurement', 'https://www.unicef.org/bangladesh/en/supply-and-logistics'],
    ['UNICEF jobs', 'https://jobs.unicef.org/'],
    ['UNFPA Bangladesh calls for submissions', 'https://bangladesh.unfpa.org/en/call-for-submissions'],
    ['UN Women Asia-Pacific calls for proposals', 'https://asiapacific.unwomen.org/en'],
    ['IOM Bangladesh procurement', 'https://bangladesh.iom.int/procurement'],
    ['FAO careers', 'https://jobs.fao.org/'],
    ['WFP careers', 'https://www.wfp.org/careers'],
    ['UNOPS jobs', 'https://jobs.unops.org/'],
    ['UNDEF: UN Democracy Fund', 'https://www.un.org/democracyfund/apply-for-funding'],
    ['World Bank projects and procurement', 'https://projects.worldbank.org/'],
    ['Asian Development Bank consulting and procurement', 'https://www.adb.org/'],
    ['Asian Infrastructure Investment Bank procurement', 'https://www.aiib.org/'],
    ['Islamic Development Bank procurement', 'https://www.isdb.org/'],
    ['EU Funding & Tenders Portal', 'https://ec.europa.eu/info/funding-tenders/opportunities/portal/'],
    ['EU Delegation to Bangladesh', 'https://www.eeas.europa.eu/delegations/bangladesh_en'],
    ['UK Find a Tender', 'https://www.find-tender.service.gov.uk/'],
    ['UK international development funding', 'https://www.gov.uk/international-development-funding'],
    ['US Grants.gov', 'https://simpler.grants.gov/'],
    ['GIZ tenders', 'https://www.giz.de/en/workingwithgiz/tenders.html'],
    ['JICA', 'https://www.jica.go.jp/english/'],
    ['Embassy of Japan in Bangladesh: grassroots grants', 'https://www.bd.emb-japan.go.jp/en/assistance/gghsp.html'],
    ['Bangladesh Public Procurement Authority (BPPA) advertisements', 'https://www.bppa.gov.bd/'],
    ['Bangladesh e-GP', 'https://www.eprocure.gov.bd/'],
    ['NGO Affairs Bureau', 'https://ngoab.gov.bd/'],
    ['PKSF', 'https://pksf.org.bd/'],
    ['icddr,b tender notices', 'https://www.icddrb.org/tender-notices'],
    ['CARE Bangladesh consultancy and procurement', 'https://www.carebangladesh.org/consultancy'],
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
  tier2: [
    ['ReliefWeb jobs and training', 'https://reliefweb.int/jobs'],
    ['GOV.UK international development funding finder', 'https://www.gov.uk/international-development-funding'],
    ['Grants.gov opportunity search', 'https://simpler.grants.gov/search']
  ],
  tier3: [
    ['UN Vacancies', 'https://unvacancies.org/'],
    ['Impactpool', 'https://www.impactpool.org/'],
    ['DevelopmentAid', 'https://www.developmentaid.org/'],
    ['Opportunity Desk', 'https://opportunitydesk.org/'],
    ['fundsforNGOs', 'https://www2.fundsforngos.org/'],
    ['Global South Opportunities', 'https://www.globalsouthopportunities.com/']
  ]
},

/* Weekly Opportunity Digest: refreshed every Monday. Items are listing ids. */
DIGEST: {
  week: '2 – 8 Nov 2026',
  note: 'DevFund opens in public beta this week with jobs and consultancies from UN agencies in Bangladesh and international grants and fellowships open to Bangladeshi applicants. Tender coverage from UNGM, the World Bank, ADB and Bangladesh e-GP is being added through the daily scan.',
  top: ['g7', 'j1', 'g1', 'j2'],
  also: ['g2', 'g6', 't1', 'j3', 'g4', 'g5']
},

/* Corrections log: newest first. {date, id, what} */
CORRECTIONS: []
};
