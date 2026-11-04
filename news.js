/* Fund News: news and analysis on development finance — loan and grant approvals, signings, aid flows and donor policy.
   The daily update edits this file. Newest first.

   NEWS item shape:
   {
     id: 'n1', date: '2026-10-31',            // date of the event (or of the report if the event date is not given)
     dateText: '',                             // optional display text when the exact day is unknown, e.g. 'April 2026'
     kind: 'Signing',                          // 'Approval' | 'Signing' | 'Pipeline' | 'Disbursement data' | 'Policy' | 'Data'
     title, summary,                           // DevFund's own words
     why: '',                                  // why it matters for NGOs, firms and consultants
     country: 'Bangladesh', region: 'South Asia',
     lender: 'World Bank',                     // lender / donor short name ('' for general items)
     deal: {amount: 450, currency: 'USD', instrument: 'Loan', stage: 'Signed', project: '', agency: '', countedIn: ''} | null,
                                               // countedIn: id of a later item for the same money (excluded from tracker totals)
     sources: [['Title', 'url'], ...],         // first = main source
     trust: 'official' | 'media'
   }
   ANALYSES item shape: {id, date, title, standfirst, keynums:[[value,label]], body:[[heading, paragraph-with-[n]-refs]], watch:[...], sources:[[title,url]]}
*/
window.DF_NEWS = {
NEWS: [
{
  id: 'n23', date: '2026-11-03', kind: 'Data',
  title: 'Bangladesh: 92% of climate finance for energy since 2002 came as loans, study finds',
  summary: 'A study presented by the research group Change Initiative at a national dialogue in Dhaka on 3 November found that of $2.54 billion in climate finance for Bangladesh\'s energy sector in 2002–2023, 92% came as loans and 8% as grants. The study notes that renewables supply about 1% of grid electricity and more than 60% of generation relies on imported fuel. Speakers called for more grant-based and local-currency finance for renewables and for financing smaller renewable energy service providers.',
  why: 'The push for grants over loans in renewable energy is likely to feature in Bangladesh\'s positions at COP31 and in donor talks; NGOs and small renewable energy providers are named as under-financed.',
  country: 'Bangladesh', region: 'South Asia', lender: '',
  deal: null,
  sources: [['The Business Standard: Bangladesh needs to shift climate financing from loans to grants: study (3 Nov 2026)', 'https://www.tbsnews.net/economy/bangladesh-needs-shift-climate-financing-loans-grants-study-1591666']],
  trust: 'media'
},
{
  id: 'n24', date: '2026-11-03', kind: 'Pipeline',
  title: 'Nepal\'s cabinet clears $285 million ADB concessional loan and $20 million grant for roads',
  summary: 'Nepal\'s Cabinet on 3 November approved taking $285 million in concessional lending and $20 million in grant assistance from the Asian Development Bank, both earmarked for road improvement, according to a report from Kathmandu. The report does not give the loan\'s interest rate or repayment terms.',
  why: 'Road projects of this size usually bring design, supervision and safeguards consultancies once the financing agreement is signed.',
  country: 'Nepal', region: 'South Asia', lender: 'ADB',
  deal: {amount: 305, currency: 'USD', instrument: 'Concessional loan ($285m) and grant ($20m)', stage: 'Pipeline', project: 'Road improvement', agency: 'Government of Nepal'},
  sources: [['MakaluKhabar: Cabinet approves $285 million ADB loan, recommends two ordinances (3 Nov 2026)', 'https://english.makalukhabar.com/cabinet-approves-285-million-adb-loan-recommends-two-ordinances/']],
  trust: 'media'
},
{
  id: 'n25', date: '2026-11-02', kind: 'Approval',
  title: 'Zimbabwe launches $14.33 million Pandemic Fund grant for health security',
  summary: 'Zimbabwe launched a three-year (2026–2028) country project financed by a $14.33 million grant from the Pandemic Fund, hosted by the World Bank, with partners adding $49 million and the government co-investing $91.8 million. The African Development Bank, FAO and UNICEF implement the grant with the ministries. Plans include five public health emergency operations centres, upgrades to 25 laboratories, training for more than 10,000 health and related workers, and community campaigns aiming to reach up to two million people.',
  why: 'Laboratory upgrades, digital surveillance and large training programmes run through AfDB, FAO and UNICEF are likely to generate procurement and consultancy work.',
  country: 'Zimbabwe', region: 'Africa', lender: 'Pandemic Fund',
  deal: {amount: 14.33, currency: 'USD', instrument: 'Grant', stage: 'Approved', project: 'Pandemic Fund country project, Zimbabwe (2026–2028)', agency: 'Government of Zimbabwe, with AfDB, FAO and UNICEF'},
  sources: [['allAfrica: Zimbabwe launches US$14.33 million Pandemic Fund country project to strengthen health security (2 Nov 2026)', 'https://allafrica.com/stories/202611030056.html']],
  trust: 'media'
},
{
  id: 'n26', date: '2026-10-28', kind: 'Pipeline',
  title: 'Japan pledges two yen loans worth about $295.5 million to Bangladesh, and signs a ¥2.12 billion grant',
  summary: 'During the Bangladeshi Prime Minister\'s official visit to Japan, Japan pledged two yen loans: 15.88 billion yen (about $100.8 million) for an investment environment improvement project and 30.68 billion yen (about $194.7 million) for the second phase of the Upazila Governance and Development Project, according to a press briefing in Tokyo on 28 October. The two governments also signed a grant agreement of up to 2.12 billion yen (about $13.44 million) for a coastal patrol vessel, plus memoranda of cooperation on economic relations, agriculture, skills and fisheries.',
  why: 'Local governance programmes such as the Upazila Governance and Development Project typically hire capacity-building and monitoring consultants; loan agreements are still to be signed.',
  country: 'Bangladesh', region: 'South Asia', lender: 'Japan (JICA)',
  deal: {amount: 295.5, currency: 'USD', instrument: 'Yen loans (JPY 46.56 billion)', stage: 'Pipeline', project: 'Investment Environment Improvement Project; Upazila Governance and Development Project (Phase 2)', agency: 'Economic Relations Division'},
  sources: [['The Daily Star: Six deals signed, Japan pledges two loan projects (29 Oct 2026)', 'https://www.thedailystar.net/news/bangladesh/diplomacy/news/bangladesh-japan-sign-6-deals-pledge-two-loan-projects-humaiun-kobir-4309966']],
  trust: 'media'
},
{
  id: 'n18', date: '2026-11-01', kind: 'Signing',
  title: 'Egypt signs $1 billion World Bank development policy financing agreement',
  summary: 'Egypt and the World Bank signed the agreement for $1 billion in budget support, the second of three concessional development policy operations under the "Building Resilience, Opportunity, and Wealth for Egypt\'s Prosperity and Stability" programme approved by the Bank\'s board in May 2026. According to the government, the reforms target private-sector job creation, public finance management, protection for vulnerable groups and the shift to a green economy.',
  why: 'Budget support flows to the treasury rather than through projects, so it brings little direct procurement, but the policy reforms it backs often lead to technical-assistance work.',
  country: 'Egypt', region: 'Middle East and North Africa', lender: 'World Bank',
  deal: {amount: 1000, currency: 'USD', instrument: 'Development policy financing', stage: 'Signed', project: 'Building Resilience, Opportunity, and Wealth for Egypt\'s Prosperity and Stability (second operation)', agency: 'Ministry of Foreign Affairs (Governor to the World Bank)'},
  sources: [['Egypt Independent (MENA): FM signs $1 billion financing agreement with World Bank (2 Nov 2026)', 'https://www.egyptindependent.com/fm-signs-1-billion-financing-agreement-with-world-bank/']],
  trust: 'media'
},
{
  id: 'n19', date: '2026-11-02', kind: 'Pipeline',
  title: 'Honduras reaches agreement with IMF staff on final review, unlocking $120 million subject to board approval',
  summary: 'Honduras and IMF staff agreed on the final review of the country\'s three-year, $847 million programme agreed in September 2023. The last $120 million will be released once the IMF Executive Board approves the review, which is expected in December. Reported priorities include fiscal discipline with better-targeted social support, public financial management and external stability.',
  why: '',
  country: 'Honduras', region: 'Latin America and the Caribbean', lender: 'IMF',
  deal: {amount: 120, currency: 'USD', instrument: 'IMF arrangement (final tranche)', stage: 'Pipeline', project: 'Final review of the 2023 IMF-supported programme', agency: 'Government of Honduras'},
  sources: [['The Manila Times: IMF clears way for $120 million for Honduras in final bailout tranche (2 Nov 2026)', 'https://www.manilatimes.net/2026/11/02/world/americas-emea/imf-clears-way-for-120-million-for-honduras-in-final-bailout-tranche/2459679']],
  trust: 'media'
},
{
  id: 'n20', date: '2026-10-29', kind: 'Signing',
  title: 'EIB Global and Ethiopia\'s Dashen Bank launch €40 million credit line for agribusiness and women-led firms',
  summary: 'EIB Global signed a €20 million long-term loan with Dashen Bank on 27 October, matched by €20 million from Dashen, for Ethiopian small and medium-sized enterprises. At least 70% is for agriculture and related businesses, especially exporters of coffee, pulses, horticulture and cereals; at least 30% for climate action; and 30% for women-led enterprises. The EU funds technical assistance to the bank through the ACP Trust Fund.',
  why: 'Technical assistance on environmental and social due diligence and climate-finance reporting for partner banks is a recurring consultancy opportunity under EIB Global credit lines.',
  country: 'Ethiopia', region: 'Africa', lender: 'EIB',
  deal: null,
  sources: [['EIB press release: EIB Global and Dashen Bank to unlock €40 million for green agribusiness and women-led enterprises in Ethiopia (29 Oct 2026)', 'https://www.eib.org/en/press/all/2026-367-eib-global-and-ethiopian-lender-dashen-bank-to-unlock-eur40-million-for-green-agribusiness-and-women-led-enterprises-in-ethiopia']],
  trust: 'official'
},
{
  id: 'n21', date: '2026-10-27', kind: 'Pipeline',
  title: 'Japan to provide ¥50 billion (about $317 million) emergency loan to Bangladesh for economic resilience and energy supply',
  summary: 'Following talks in Tokyo between Prime Minister Tarique Rahman and Japanese Prime Minister Sanae Takaichi, Japan announced an "Emergency Support Loan for Enhancing Economic Resilience and Stable Energy Supply" of ¥50 billion, reported as $317 million and described as the first yen-loan project under Japan\'s POWERR Asia initiative. The joint statement also refers to developing the Matarbari–Maheshkhali area around the Matarbari deep-sea port under the BIG-B framework. Loan terms and the signing date were not reported.',
  why: 'Watch for the loan agreement with ERD and JICA; Matarbari-area development under BIG-B has historically generated large consultancy and works contracts.',
  country: 'Bangladesh', region: 'South Asia', lender: 'Japan (JICA)',
  deal: {amount: 317, currency: 'USD', instrument: 'Yen loan (budget support)', stage: 'Pipeline', project: 'Emergency Support Loan for Enhancing Economic Resilience and Stable Energy Supply', agency: 'Economic Relations Division'},
  sources: [['The Daily Star: Japan to provide $317m loan to Bangladesh for economic resilience, energy security (27 Oct 2026)', 'https://www.thedailystar.net/news/bangladesh/diplomacy/news/japan-provide-317m-loan-bangladesh-economic-resilience-energy-security-4308696']],
  trust: 'media'
},
{
  id: 'n22', date: '2026-10-21', kind: 'Approval',
  title: 'ADB approves $100 million for social protection and livelihoods in Sri Lanka',
  summary: 'ADB approved a $50 million policy-based loan and a $50 million project loan under the Promoting Resilience and Opportunity for Inclusive Recovery Sector Development Program. It supports the National Empowerment Program for 30,000 low-income households in six districts with livelihood grants, skills, financial-literacy training and market access, and sets up five model elderly day-care centres. It also funds social-protection data, case management and arrangements for responding to shocks.',
  why: 'Livelihood-grant delivery, skills training and eldercare pilots are typically run with NGOs and training providers; social-protection information systems bring IT and M&E consultancies.',
  country: 'Sri Lanka', region: 'South Asia', lender: 'ADB',
  deal: {amount: 100, currency: 'USD', instrument: 'Policy-based and project loans', stage: 'Approved', project: 'Promoting Resilience and Opportunity for Inclusive Recovery Sector Development Program (59337-001)', agency: 'Government of Sri Lanka'},
  sources: [['ADB news release: ADB Approves $100 Million Program to Strengthen Social Protection and Expand Economic Opportunities in Sri Lanka (21 Oct 2026)', 'https://www.adb.org/news/adb-approves-100-million-program-strengthen-social-protection-and-expand-economic']],
  trust: 'official'
},
{
  id: 'n11', date: '2026-10-30', kind: 'Approval',
  title: 'IDB approves $900 million for Argentina\'s Human Capital Strengthening Support Program',
  summary: 'The Inter-American Development Bank\'s board approved $900 million to strengthen Argentina\'s social protection system: keeping children in school, offering job training to up to 500,000 adults (about 300,000 expected to be certified) and modernising ANSES and SINIDE records so families can more easily meet the education requirements of the AUH child allowance.',
  why: 'Large training and records-modernisation components usually bring procurement for training providers and information-system consultants.',
  country: 'Argentina', region: 'Latin America and the Caribbean', lender: 'IDB',
  deal: {amount: 900, currency: 'USD', instrument: 'Loan', stage: 'Approved', project: 'Human Capital Strengthening Support Program', agency: 'ANSES'},
  sources: [['Devdiscourse: IDB backs Argentina with $900m to support education and job training access (30 Oct 2026)', 'https://www.devdiscourse.com/article/business/3999316-idb-backs-argentina-with-900m-to-support-education-and-job-training-access']],
  trust: 'media'
},
{
  id: 'n12', date: '2026-10-30', kind: 'Approval',
  title: 'World Bank approves $150 million results-based programme for property tax and municipal services in Sindh, Pakistan',
  summary: 'The World Bank board approved the Sindh Property Revenues Enhancement Program (Sindh PREP). Funding is tied to results, with a $40 million investment component. It aims to raise Karachi\'s annual property tax collection from about $8.5 million to $85 million and compliance from 20% to 50%, and to improve municipal services.',
  why: 'Property-tax reform programmes typically procure valuation, GIS and revenue-system consultants.',
  country: 'Pakistan', region: 'South Asia', lender: 'World Bank',
  deal: {amount: 150, currency: 'USD', instrument: 'Program-for-Results', stage: 'Approved', project: 'Sindh Property Revenues Enhancement Program (Sindh PREP)', agency: 'Government of Sindh'},
  sources: [['Daily Pakistan: World Bank approves $150m to help Karachi raise property tax revenue (1 Nov 2026)', 'https://en.dailypakistan.com.pk/01-Nov-2026/world-bank-approves-150m-to-help-karachi-raise-property-tax-revenue']],
  trust: 'media'
},
{
  id: 'n13', date: '2026-10-29', kind: 'Approval',
  title: 'Green Climate Fund approves a record $1.97 billion for 21 projects; 2026 approvals reach $3.2 billion',
  summary: 'At its 46th Board meeting the Green Climate Fund approved $1.97 billion for 21 projects, including $682 million for six private-sector initiatives, taking 2026 approvals to a record $3.2 billion. Algeria, Cameroon, Moldova and Yemen received their first single-country projects, and the Maldives gained its first national direct-access entity.',
  why: 'Approved GCF projects are delivered by accredited entities that hire executing partners, NGOs and consultants over the following years.',
  country: '', region: 'Global', lender: 'Green Climate Fund',
  deal: {amount: 1970, currency: 'USD', instrument: 'Grants and loans', stage: 'Approved', project: '21 projects approved at GCF B.46', agency: 'Accredited entities'},
  sources: [
    ['Reuters via Yahoo Finance: Green Climate Fund approves record near $2 billion funding (29 Oct 2026)', 'https://finance.yahoo.com/economy/policy/articles/green-climate-fund-approves-record-145521720.html'],
    ['PINA: GCF financing tops $3 billion for consecutive record year (30 Oct 2026)', 'https://pina.com.fj/2026/10/30/gcf-financing-tops-usd3-billion-for-consecutive-record-year-as-reforms-continue-to-deliver/']
  ],
  trust: 'media'
},
{
  id: 'n14', date: '2026-10-28', kind: 'Approval',
  title: 'GCF backs FAO-supported projects in Algeria and Mexico worth $128.3 million',
  summary: 'Among the B.46 approvals: a $43 million GCF grant, with $56.5 million from Algeria\'s government, to improve climate resilience across 454,138 hectares of steppe and dry forest in the Green Dam area; and an $85.3 million REDD+ results-based payment for Mexico, supporting silvopastoral systems, 1,200 farmer field schools and forest conservation.',
  why: '',
  country: '', region: 'Global', lender: 'Green Climate Fund',
  deal: {amount: 128.3, currency: 'USD', instrument: 'Grant; results-based payment', stage: 'Approved', project: 'Algeria Green Dam resilience ($43m); Mexico REDD+ ($85.3m)', agency: 'FAO', countedIn: 'n13'},
  sources: [['IndexBox: GCF approves $184.8 million in FAO-supported projects for Algeria and Mexico (28 Oct 2026)', 'https://www.indexbox.io/blog/green-climate-fund-approves-1848-million-in-fao-supported-projects-for-algeria-and-mexico/']],
  trust: 'media'
},
{
  id: 'n15', date: '2026-10-26', kind: 'Approval',
  title: 'AfDB lends Botswana $503.75 million to cushion energy shocks and expand jobs for women and youth',
  summary: 'The African Development Bank approved the first phase of the Economic Competitiveness and Transformation Support Program, with $170 million in co-financing from the OPEC Fund. It offsets the cost-of-living impact of the global energy shock and supports fiscal and private-sector reforms for private-led growth and jobs, especially for women and youth.',
  why: 'Policy-based support pays for reforms; watch for technical-assistance packages linked to the reform actions.',
  country: 'Botswana', region: 'Africa', lender: 'AfDB',
  deal: {amount: 503.75, currency: 'USD', instrument: 'Policy-based loan', stage: 'Approved', project: 'Economic Competitiveness and Transformation Support Program, phase 1', agency: 'Government of Botswana'},
  sources: [['Top Africa News: Botswana secures $503.75m African Development Bank financing (26 Oct 2026)', 'https://www.topafricanews.com/2026/10/26/botswana-secures-503-75m-african-development-bank-financing-to-cushion-energy-shocks-drive-jobs/']],
  trust: 'media'
},
{
  id: 'n16', date: '2026-10-22', kind: 'Approval',
  title: 'AfDB approves $487 million for Morocco\'s economic governance and climate resilience programme',
  summary: 'The AfDB board approved Phase III of the Economic Governance and Climate Change Resilience Support Program, covering tax and public-administration modernisation, digital investor procedures and SME support, water efficiency and desalination, and the energy transition including renewables and green hydrogen.',
  why: '',
  country: 'Morocco', region: 'Africa', lender: 'AfDB',
  deal: {amount: 487, currency: 'USD', instrument: 'Programme financing', stage: 'Approved', project: 'Economic Governance and Climate Change Resilience Support Program, Phase III', agency: 'Government of Morocco'},
  sources: [['Fes News Media: AfDB approves $487 million financing package for Morocco (22 Oct 2026)', 'https://fesnews.media/322933/2026/10/22/']],
  trust: 'media'
},
{
  id: 'n17', date: '2026-10-15', kind: 'Data',
  title: 'Cameroon: World Bank portfolio reaches $5.01 billion across 21 projects, $4.13 billion signed',
  summary: 'Cameroon\'s planning ministry (MINEPAT) said at the IMF–World Bank Annual Meetings that the World Bank has approved $5.01 billion for 21 projects (15 national, 6 regional), of which agreements worth $4.13 billion for 18 active projects have been signed, leaving about $881 million to sign. The Douala–Bangui Economic Corridor alone received $425 million.',
  why: 'A large signed portfolio means ongoing procurement across sectors; check project pages for open notices.',
  country: 'Cameroon', region: 'Africa', lender: 'World Bank',
  deal: null,
  sources: [['Business in Cameroon: World Bank approves $5 billion for Cameroon, $4.13 billion signed (16 Oct 2026)', 'https://www.businessincameroon.com/finance/1610-16987-world-bank-approves-5-billion-for-cameroon-with-4-13-billion-in-financing-deals-signed']],
  trust: 'media'
},
{
  id: 'n1', date: '2026-10-31', kind: 'Signing',
  title: 'Bangladesh signs $450 million World Bank deal for Financial Sector Support Project II',
  summary: 'The Economic Relations Division and the World Bank signed a $450 million (SDR 328 million) financing agreement to strengthen the financial safety net, improve banking supervision and support banking reforms. Bangladesh Bank will implement the five-year project (July 2026 – June 2031). Reported terms: 1.5% interest and 25-year repayment with a five-year grace period.',
  why: 'Bank-supervision and resolution projects usually hire consulting firms and individual experts for systems, legal and capacity work; watch Bangladesh Bank and BPPA notices.',
  country: 'Bangladesh', region: 'South Asia', lender: 'World Bank',
  deal: {amount: 450, currency: 'USD', instrument: 'Financing agreement', stage: 'Signed', project: 'Financial Sector Support Project II', agency: 'Bangladesh Bank'},
  sources: [['The Daily Star: World Bank gives $450 million to strengthen financial sector (31 Oct 2026)', 'https://www.thedailystar.net/business/news/world-bank-gives-450-million-strengthen-financial-sector-4312086']],
  trust: 'media'
},
{
  id: 'n2', date: '2026-10-26', kind: 'Disbursement data',
  title: 'Aid disbursements to Bangladesh fall 42% in July–September while debt repayments rise',
  summary: 'Provisional Economic Relations Division data show $662 million in foreign aid disbursed in the first quarter of FY2026-27, down about 42% from $1.15 billion a year earlier. Debt servicing rose 5.6% to $1.35 billion, about $2 repaid for every $1 received. New commitments rose by nearly 40% to $1.27 billion, led by an Islamic Development Bank agreement of $1 billion for Eastern Refinery.',
  why: 'Slow disbursement means fewer project contracts in the near term, but the rise in commitments points to procurement later in the year.',
  country: 'Bangladesh', region: 'South Asia', lender: '',
  deal: null,
  sources: [
    ['The Business Standard: Foreign debt repayments more than double aid inflows in Q1 FY27 (26 Oct 2026)', 'https://www.tbsnews.net/economy/bangladeshs-foreign-debt-repayments-more-double-aid-inflows-q1-fy27-1582971'],
    ['The Daily Star: Foreign loan disbursements fall 42% in Jul–Sept (27 Oct 2026)', 'https://www.thedailystar.net/business/economy/news/foreign-loan-disbursements-fall-42-jul-sept-4308141']
  ],
  trust: 'media'
},
{
  id: 'n3', date: '2026-10-07', kind: 'Signing',
  title: 'ADB loans of $275 million signed for affordable housing finance and Chattogram Hill Tracts power',
  summary: 'Bangladesh signed two ADB loans: $100 million for the Inclusive Affordable Housing Finance Project, implemented by PKSF to expand housing microfinance, and $175 million plus a $2.72 million Japan Fund for Prosperous and Resilient Asia and the Pacific (JFPR) grant for power distribution in the Chattogram Hill Tracts, implemented by the Bangladesh Power Development Board. Reported terms: 2% interest over 25 years including a five-year grace period.',
  why: 'PKSF channels housing finance through partner organisations; NGO-MFIs should watch for partner selection and capacity-building calls.',
  country: 'Bangladesh', region: 'South Asia', lender: 'ADB',
  deal: {amount: 275, currency: 'USD', instrument: 'Loan', stage: 'Signed', project: 'Inclusive Affordable Housing Finance ($100m); CHT Sustainable Energy ($175m)', agency: 'PKSF; BPDB'},
  sources: [['The Business Standard: Bangladesh signs $275m ADB loan deals for housing, power projects (7 Oct 2026)', 'https://www.tbsnews.net/economy/bangladesh-signs-275m-adb-loan-deals-housing-power-projects-1565786']],
  trust: 'media'
},
{
  id: 'n4', date: '2026-09-01', kind: 'Approval',
  title: 'ADB approves $175 million to modernise power networks in the Chattogram Hill Tracts',
  summary: 'The concessional loan will extend and upgrade distribution networks in 26 upazilas of the three hill districts: six new substations, 5,032 km of new lines and 1,874 km of upgraded lines, reaching at least 88,000 more households, including 35,000 from small ethnic communities. It also funds solar drinking-water facilities, livelihood training and business incubation. Co-financing includes a $2.72 million JFPR grant and contributions from the government and BPDB.',
  why: 'The community components (solar water, livelihoods, incubation) are typical NGO implementation work in the hill districts.',
  country: 'Bangladesh', region: 'South Asia', lender: 'ADB',
  deal: {amount: 175, currency: 'USD', instrument: 'Loan', stage: 'Approved', project: 'Sustainable Energy Development and Community Empowerment in the CHT', agency: 'BPDB', countedIn: 'n3'},
  sources: [['ADB news release (1 Sep 2026)', 'https://www.adb.org/news/adb-approves-175-million-loan-modernize-power-networks-boost-jobs-services-bangladesh-chattogram-hill-tracts']],
  trust: 'official'
},
{
  id: 'n5', date: '2026-06-27', kind: 'Approval',
  title: 'World Bank approves about $1.1 billion for food security and emergency response',
  summary: 'Two World Bank operations: $300 million, repurposed from unused financing, to import about 600,000 tonnes of fertiliser for the Aman and Boro seasons, and $713 million through a contingent emergency response for cash transfers, livelihood support and fuel and energy for essential services, in response to food, fertiliser and fuel price pressures.',
  why: 'Emergency cash-transfer programmes rely on targeting, payment and monitoring partners.',
  country: 'Bangladesh', region: 'South Asia', lender: 'World Bank',
  deal: {amount: 1100, currency: 'USD', instrument: 'Financing', stage: 'Approved', project: 'Food security support ($300m); contingent emergency response ($713m)', agency: ''},
  sources: [['The Daily Star: World Bank approves $1.1 billion emergency finance for Bangladesh (27 Jun 2026)', 'https://www.thedailystar.net/business/news/world-bank-approves-11-billion-emergency-finance-bangladesh-4209336']],
  trust: 'media'
},
{
  id: 'n6', date: '2026-06-01', kind: 'Approval',
  title: 'AIIB approves $250 million for economic management and governance, alongside $750 million from ADB',
  summary: 'AIIB approved sovereign financing for Subprogram 2 of the Strengthening Economic Management and Governance Program, to help Bangladesh absorb the economic and social impact of the Middle East conflict, ease fiscal pressure and support medium-term reforms. ADB is expected to provide $750 million in policy-based lending for the same programme.',
  why: 'Budget-support loans fund reforms rather than projects; consulting demand shows up later as technical assistance for the reform actions.',
  country: 'Bangladesh', region: 'South Asia', lender: 'AIIB',
  deal: {amount: 250, currency: 'USD', instrument: 'Policy-based loan', stage: 'Approved', project: 'Strengthening Economic Management and Governance Program, Subprogram 2', agency: 'Ministry of Finance'},
  sources: [['AIIB project page (approved 1 Jun 2026)', 'https://www.aiib.org/en/projects/details/2026/approved/bangladesh-strengthening-economic-management-and-governance-program-subprogram-2.html']],
  trust: 'official'
},
{
  id: 'n7', date: '2026-05-15', kind: 'Approval',
  title: 'World Bank approves $350 million more to back Bangladesh\'s LNG imports',
  summary: 'Additional financing for the Energy Sector Security Enhancement Project: an IDA payment-guarantee-backed facility providing standby letters of credit and short-term credit lines, so Petrobangla can secure longer-term LNG contracts and rely less on spot purchases. The original $350 million was approved in June 2025.',
  why: '',
  country: 'Bangladesh', region: 'South Asia', lender: 'World Bank',
  deal: {amount: 350, currency: 'USD', instrument: 'Guarantee', stage: 'Approved', project: 'Energy Sector Security Enhancement Project (additional financing)', agency: 'Petrobangla'},
  sources: [['The Business Standard: World Bank approves $350m additional financing to support LNG imports (18 May 2026)', 'https://www.tbsnews.net/bangladesh/energy/world-bank-approves-350m-additional-financing-support-bangladesh-lng-imports']],
  trust: 'media'
},
{
  id: 'n8', date: '2026-04-24', kind: 'Approval',
  title: 'ADB approves $250 million for social protection reforms',
  summary: 'Subprogram 2 of the Second Strengthening Social Resilience Program supports reforms to make Bangladesh\'s social protection system more efficient, wider in reach and better at protecting vulnerable groups, especially women.',
  why: 'Social protection reforms often bring work on beneficiary registries, digital payments and grievance systems.',
  country: 'Bangladesh', region: 'South Asia', lender: 'ADB',
  deal: {amount: 250, currency: 'USD', instrument: 'Policy-based loan', stage: 'Approved', project: 'Second Strengthening Social Resilience Program, Subprogram 2', agency: ''},
  sources: [['ADB news release (24 Apr 2026)', 'https://www.adb.org/news/adb-approves-250-million-loan-implement-social-protection-reforms-bangladesh']],
  trust: 'official'
},
{
  id: 'n9', date: '2026-04-01', dateText: 'April 2026', kind: 'Data',
  title: 'Global aid fell 23.1% in 2025, the largest drop on record',
  summary: 'Preliminary OECD data show official development assistance from DAC members fell 23.1% in real terms in 2025 compared with 2024, the largest annual decline in the history of ODA.',
  why: 'Bilateral grant funding for NGOs is shrinking; multilateral banks and foundations become a larger share of available money.',
  country: '', region: 'Global', lender: 'OECD DAC donors',
  deal: null,
  sources: [
    ['OECD press release: International aid fell sharply in 2025 (April 2026)', 'https://www.oecd.org/en/about/news/press-releases/2026/04/international-aid-fell-sharply-in-2025-says-oecd.html'],
    ['OECD data explainer: A historic decline in foreign aid', 'https://www.oecd.org/en/data/insights/data-explainers/2026/04/a-historic-decline-in-foreign-aid-preliminary-2025-oda-data.html']
  ],
  trust: 'official'
},
{
  id: 'n10', date: '2026-03-28', kind: 'Pipeline',
  title: 'AIIB agrees in principle to $164.57 million for Bangladesh Railway locomotives',
  summary: 'AIIB has consented to finance the Railway Capacity Expansion (RACE) project to buy 30 metre-gauge diesel-electric locomotives. The project costs $241.47 million, with $76.9 million from the government. The Ministry of Railways has sent the preliminary project proposal to the Planning Commission; the loan is not yet final.',
  why: '',
  country: 'Bangladesh', region: 'South Asia', lender: 'AIIB',
  deal: {amount: 164.57, currency: 'USD', instrument: 'Loan', stage: 'Pipeline', project: 'Railway Capacity Expansion (RACE)', agency: 'Bangladesh Railway'},
  sources: [['The Financial Express: AIIB to extend $164.57m loan (28 Mar 2026)', 'https://thefinancialexpress.com.bd/economy/bangladesh/aiib-to-extend-16457m-loan']],
  trust: 'media'
}
],

ANALYSES: [
{
  id: 'a2', date: '2026-11-02',
  title: 'Budget support, social protection and climate: where development money moved in late October 2026',
  standfirst: 'With bilateral aid shrinking, the multilateral banks and climate funds are doing the heavy lifting. October\'s biggest approvals were policy-based loans, social-protection programmes and a record round of climate finance.',
  keynums: [['$3.2bn', 'GCF approvals in 2026, a record [1]'], ['$900m', 'IDB loan for Argentina\'s human capital programme [3]'], ['$990m', 'two AfDB policy-based approvals: Botswana and Morocco [4][5]'], ['23.1%', 'fall in global ODA in 2025 [7]']],
  body: [
    ['The short version', 'In the last two weeks of October 2026, the Green Climate Fund approved $1.97 billion for 21 projects, taking its 2026 total to a record $3.2 billion [1][2]. The IDB approved $900 million for Argentina [3], the AfDB approved $503.75 million for Botswana and $487 million for Morocco [4][5], and the World Bank approved a $150 million results-based programme in Pakistan\'s Sindh province [6]. This comes after official development assistance fell 23.1% in 2025 [7].'],
    ['What the money is for', 'Most of these operations finance reforms and social systems rather than construction. Botswana\'s programme offsets the energy-price shock and supports fiscal and private-sector reforms [4]; Morocco\'s covers tax administration, digital investor services, water and the energy transition [5]; Argentina\'s keeps children in school, trains up to 500,000 adults and modernises social-security records [3]; Sindh\'s pays on results for higher property-tax collection and better municipal services [6]. Climate finance is the exception: GCF approvals include $682 million for private-sector initiatives and first projects in Algeria, Cameroon, Moldova and Yemen [1][2].'],
    ['What it means for NGOs, firms and consultants', 'Policy-based and results-based operations create demand for technical assistance (tax, public financial management, social registries, digital services) rather than large implementation contracts. Social-protection and training programmes like Argentina\'s bring work for training providers and information-system consultants [3]. GCF projects are delivered through accredited entities over several years, so NGOs and consultants should approach the accredited entities and executing partners of newly approved projects [1][2].'],
    ['DevFund\'s assessment', 'DevFund\'s view: for implementers, the most reliable pipeline in 2027 sits with the climate funds and the regional development banks, not bilateral donors. Organisations that can deliver adaptation, social-protection systems or revenue and digital-government reforms, and that partner early with accredited entities or ministries, are best placed. Expect fewer stand-alone grant calls and more subcontracting under large programmes.']
  ],
  watch: ['Procurement notices and executing-partner calls for the 21 GCF B.46 projects', 'Technical-assistance packages linked to the AfDB policy-based programmes in Botswana and Morocco', 'Training-provider and systems procurement under Argentina\'s Human Capital Strengthening Support Program', 'Whether 2026 OECD aid data shows a further fall in bilateral ODA'],
  sources: [
    ['Reuters via Yahoo Finance: Green Climate Fund approves record near $2 billion funding', 'https://finance.yahoo.com/economy/policy/articles/green-climate-fund-approves-record-145521720.html'],
    ['PINA: GCF financing tops $3 billion for consecutive record year', 'https://pina.com.fj/2026/10/30/gcf-financing-tops-usd3-billion-for-consecutive-record-year-as-reforms-continue-to-deliver/'],
    ['Devdiscourse: IDB backs Argentina with $900m', 'https://www.devdiscourse.com/article/business/3999316-idb-backs-argentina-with-900m-to-support-education-and-job-training-access'],
    ['Top Africa News: Botswana secures $503.75m AfDB financing', 'https://www.topafricanews.com/2026/10/26/botswana-secures-503-75m-african-development-bank-financing-to-cushion-energy-shocks-drive-jobs/'],
    ['Fes News Media: AfDB approves $487 million for Morocco', 'https://fesnews.media/322933/2026/10/22/'],
    ['Daily Pakistan: World Bank approves $150m for Karachi property tax revenue', 'https://en.dailypakistan.com.pk/01-Nov-2026/world-bank-approves-150m-to-help-karachi-raise-property-tax-revenue'],
    ['OECD: International aid fell sharply in 2025', 'https://www.oecd.org/en/about/news/press-releases/2026/04/international-aid-fell-sharply-in-2025-says-oecd.html'],
    ['IndexBox: GCF approves FAO-supported projects for Algeria and Mexico', 'https://www.indexbox.io/blog/green-climate-fund-approves-1848-million-in-fao-supported-projects-for-algeria-and-mexico/']
  ]
},
{
  id: 'a1', date: '2026-11-02',
  title: 'More money promised, less money arriving: what Bangladesh\'s aid pipeline means for NGOs and consultants',
  standfirst: 'New commitments to Bangladesh are rising, but disbursements have fallen sharply and debt repayments now exceed inflows two to one. The money that is moving is mostly budget support and emergency finance, not projects.',
  keynums: [['$662m', 'aid disbursed Jul–Sep 2026, down about 42% [1]'], ['$1.35bn', 'debt servicing in the same quarter [1]'], ['$1.27bn', 'new commitments, up nearly 40% [1]'], ['23.1%', 'fall in global ODA in 2025, in real terms [2]']],
  body: [
    ['The short version', 'In the first quarter of FY2026-27, Bangladesh received $662 million in foreign aid and paid $1.35 billion in debt service [1]. Commitments rose to $1.27 billion, but most of that came from a single $1 billion Islamic Development Bank agreement for Eastern Refinery [3]. Globally, aid from OECD donors fell 23.1% in 2025 [2].'],
    ['Where the new money is going', 'The large 2026 approvals are dominated by policy-based and emergency finance: $250 million from AIIB alongside $750 million expected from ADB for economic management [4], $250 million from ADB for social protection reform [5], about $1.1 billion from the World Bank for fertiliser imports and emergency response [6], and $350 million in World Bank guarantees for LNG imports [7]. These operations pay for reforms and imports, not for long project-implementation contracts.'],
    ['Where project work will come from', 'Investment projects are fewer but more relevant to implementers: the World Bank\'s $450 million Financial Sector Support Project II with Bangladesh Bank [8]; ADB\'s $100 million housing finance project through PKSF and $175 million for power in the Chattogram Hill Tracts, which includes solar water, livelihoods and incubation components [9][10]; and AIIB\'s proposed $164.57 million railway locomotive project [11].'],
    ['DevFund\'s assessment', 'DevFund\'s view: for NGOs, the best near-term openings are partner roles in the PKSF housing finance and CHT community components, and social-protection delivery work linked to the ADB reform programme. For consulting firms and individual experts, technical assistance attached to the Bangladesh Bank, social protection and economic-governance reforms is the main source of demand. Slow disbursement suggests procurement will come later in the fiscal year rather than now.']
  ],
  watch: ['Procurement notices from Bangladesh Bank, PKSF and BPDB under the newly signed projects', 'Whether disbursements recover in October–December as signed loans become effective', 'Technical assistance packages attached to the ADB and AIIB policy-based loans'],
  sources: [
    ['The Business Standard: Foreign debt repayments more than double aid inflows in Q1 FY27', 'https://www.tbsnews.net/economy/bangladeshs-foreign-debt-repayments-more-double-aid-inflows-q1-fy27-1582971'],
    ['OECD: International aid fell sharply in 2025', 'https://www.oecd.org/en/about/news/press-releases/2026/04/international-aid-fell-sharply-in-2025-says-oecd.html'],
    ['The Daily Star: Foreign loan disbursements fall 42% in Jul–Sept', 'https://www.thedailystar.net/business/economy/news/foreign-loan-disbursements-fall-42-jul-sept-4308141'],
    ['AIIB: Strengthening Economic Management and Governance Program, Subprogram 2', 'https://www.aiib.org/en/projects/details/2026/approved/bangladesh-strengthening-economic-management-and-governance-program-subprogram-2.html'],
    ['ADB: $250 million for social protection reforms', 'https://www.adb.org/news/adb-approves-250-million-loan-implement-social-protection-reforms-bangladesh'],
    ['The Daily Star: World Bank approves $1.1 billion emergency finance', 'https://www.thedailystar.net/business/news/world-bank-approves-11-billion-emergency-finance-bangladesh-4209336'],
    ['The Business Standard: World Bank approves $350m additional financing for LNG imports', 'https://www.tbsnews.net/bangladesh/energy/world-bank-approves-350m-additional-financing-support-bangladesh-lng-imports'],
    ['The Daily Star: World Bank gives $450 million to strengthen financial sector', 'https://www.thedailystar.net/business/news/world-bank-gives-450-million-strengthen-financial-sector-4312086'],
    ['The Business Standard: Bangladesh signs $275m ADB loan deals', 'https://www.tbsnews.net/economy/bangladesh-signs-275m-adb-loan-deals-housing-power-projects-1565786'],
    ['ADB: $175 million for Chattogram Hill Tracts power networks', 'https://www.adb.org/news/adb-approves-175-million-loan-modernize-power-networks-boost-jobs-services-bangladesh-chattogram-hill-tracts'],
    ['The Financial Express: AIIB to extend $164.57m loan', 'https://thefinancialexpress.com.bd/economy/bangladesh/aiib-to-extend-16457m-loan']
  ]
}
]
};
