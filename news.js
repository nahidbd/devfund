/* Fund News: news and analysis on development finance — loan and grant approvals, signings, aid flows and donor policy.
   The weekly update (every Sunday) edits this file. Newest first.

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
  id: 'n27',
  date: '2026-11-06',
  kind: 'Approval',
  title: 'World Bank approves $300 million for primary education in Bangladesh',
  summary: 'The World Bank Board approved $300 million in IDA financing on 6 November for the Learning Enhancement and Acceleration in Primary Education Programme, which backs the government\'s Fifth Primary Education Development Programme (PEDP-5). It funds a foundational literacy and numeracy package, leadership training for headteachers in 90% of government primary schools, remedial support in the weakest districts and better pre-primary classes. The World Bank says about 26 million children from pre-primary to Grade 5 will benefit; the credit runs 25 years with a five-year grace period, according to the report.',
  why: 'PEDP-5 runs through the Directorate of Primary Education; expect consultancies on teacher training, learning assessment, remedial learning and EMIS, and partnership openings for education NGOs in low-performing districts.',
  country: 'Bangladesh',
  region: 'South Asia',
  lender: 'World Bank',
  deal: {
    amount: 300,
    currency: 'USD',
    instrument: 'IDA credit',
    stage: 'Approved',
    project: 'Learning Enhancement and Acceleration in Primary Education Programme (P512645)',
    agency: 'Directorate of Primary Education',
    countedIn: ''
  },
  sources: [
      [
        'The Business Standard: World Bank approves $300m to improve learning for 2.6 crore Bangladeshi children (6 Nov 2026)',
        'https://www.tbsnews.net/bangladesh/education/world-bank-approves-300m-improve-learning-26-crore-bangladeshi-children-1595296'
      ],
      [
        'Early Warning System: P512645 project record',
        'https://ewsdata.rightsindevelopment.org/projects/p512645-learning-enhancement-and-acceleration-in-primary-e/'
      ]
    ],
  trust: 'media'
},
{
  id: 'n28',
  date: '2026-11-04',
  kind: 'Signing',
  title: 'Bangladesh signs $140 million in additional World Bank financing for Chattogram water supply',
  summary: 'The Economic Relations Division and the World Bank signed $140 million (SDR 102.3 million) in additional financing for the Chattogram Water Supply Improvement Project on 4 November. The money comes from IDA\'s Shorter Maturity Loan facility with a 12-year term and six-year grace period, according to the report. It restores funds after $140 million of the project\'s original $240 million was moved to its contingency emergency response component. Chattogram WASA implements the project, which runs to December 2030.',
  why: 'Restored funding for Chattogram WASA works through 2030; water engineering firms and utility-management consultants should watch for new procurement under the project.',
  country: 'Bangladesh',
  region: 'South Asia',
  lender: 'World Bank',
  deal: {
    amount: 140,
    currency: 'USD',
    instrument: 'IDA Shorter Maturity Loan (additional financing)',
    stage: 'Signed',
    project: 'Chattogram Water Supply Improvement Project (additional financing)',
    agency: 'Chattogram WASA',
    countedIn: ''
  },
  sources: [
      [
        'The Business Standard: World Bank provides additional $140m for Ctg water supply project (4 Nov 2026)',
        'https://www.tbsnews.net/economy/world-bank-provides-additional-140m-ctg-water-supply-project-1593791'
      ]
    ],
  trust: 'media'
},
{
  id: 'n29',
  date: '2026-11-08',
  kind: 'Data',
  title: 'Bangladesh\'s external debt nearly triples in a decade to $113 billion, World Bank data show',
  summary: 'The Daily Star, citing the World Bank\'s International Debt Report 2026, reports that Bangladesh\'s external debt stock reached $113 billion at the end of 2025, up from about $38 billion in 2015. External debt equals 24% of gross national income and 210% of exports, against South Asian averages of 21% and 95%. Government external debt service was $4.9 billion last fiscal year and is projected to reach $7.6 billion by 2029.',
  why: 'Rising repayments limit room for new borrowing and are likely to push the government and lenders towards concessional, grant and results-based finance, which shapes the projects and partner roles that come through.',
  country: 'Bangladesh',
  region: 'South Asia',
  lender: 'World Bank',
  deal: null,
  sources: [
      [
        'The Daily Star: Foreign debt nearly triples in a decade',
        'https://www.thedailystar.net/business/economy/news/foreign-debt-nearly-triples-decade-4317831'
      ]
    ],
  trust: 'media'
},
{
  id: 'n30',
  date: '2026-11-06',
  kind: 'Signing',
  title: 'Sri Lanka signs $200 million in ADB loans for skills training and water-sector reform',
  summary: 'Sri Lanka\'s Ministry of Finance and ADB signed two loans on 6 November: a $100 million results-based loan for the Skills Development System Transformation Program (2027–2031), approved by ADB on 29 September, and a $100 million policy-based loan for Subprogramme 2 of the Water Supply and Sanitation Reform Programme, split between concessional and regular resources. The skills programme will upgrade an automobile engineering institute, turn nine vocational centres into regional hubs and update 200 national competency standards.',
  why: 'Expect consultancy work on competency standards, instructor training, e-learning and training information systems, and policy and tariff advice in the water sector.',
  country: 'Sri Lanka',
  region: 'South Asia',
  lender: 'ADB',
  deal: {
    amount: 200,
    currency: 'USD',
    instrument: 'Loans (results-based $100m; policy-based $100m)',
    stage: 'Signed',
    project: 'Skills Development System Transformation Program; Water Supply and Sanitation Reform Programme, Subprogramme 2',
    agency: 'Ministry of Finance, Planning and Economic Development',
    countedIn: ''
  },
  sources: [
      [
        'OnLanka: Sri Lanka signs US$200 million ADB loans for skills and water reforms (6 Nov 2026)',
        'https://www.onlanka.com/news/sri-lanka-signs-us200-million-adb-loans-for-skills-and-water-reforms.html'
      ],
      [
        'Newswire: Sri Lanka signs USD 100 million loan agreement with ADB for skills development (6 Nov 2026)',
        'https://www.newswire.lk/2026/11/06/sri-lanka-signs-usd-100-million-loan-agreement-with-adb-for-skills-development/'
      ],
      [
        'ADB: ADB approves $100 million loan to boost skills development and jobs for youth in Sri Lanka',
        'https://www.adb.org/news/adb-approves-100-million-loan-boost-skills-development-and-jobs-youth-sri-lanka'
      ]
    ],
  trust: 'media'
},
{
  id: 'n31',
  date: '2026-11-04',
  kind: 'Disbursement data',
  title: 'Pakistan: development partners finance 40 ongoing energy projects, with about half of loans disbursed',
  summary: 'A National Assembly committee was told on 4 November that the World Bank, ADB, AFD, KfW and JICA are financing 40 ongoing energy and transmission projects in Pakistan under 17 loan agreements, and that about 52% of the agreed loan amount has been disbursed, according to officials. Another 38 projects are proposed, with completion dates running to 2036. No total amount was reported.',
  why: 'Slow disbursement and a long pipeline point to steady demand for transmission engineering, supervision and safeguards specialists in Pakistan\'s power sector.',
  country: 'Pakistan',
  region: 'South Asia',
  lender: '',
  deal: null,
  sources: [
      [
        'The Nation: Int\'l development partners financing 40 ongoing energy projects, NA panel informed (5 Nov 2026)',
        'https://www.nation.com.pk/05-Nov-2026/int-l-development-partners-financing-40-ongoing-energy-projects-na-panel-informed'
      ]
    ],
  trust: 'media'
},
{
  id: 'n32',
  date: '2026-11-05',
  kind: 'Data',
  title: 'Developing countries\' external debt hits a record $9.4 trillion, World Bank says',
  summary: 'The World Bank\'s International Debt Report 2026, released on 5 November, says developing countries\' external debt rose 5.5% to a record $9.4 trillion in 2025, with IDA-eligible countries\' debt up 8.1% to $1.3 trillion. IDA-eligible countries paid an average 8.2% on new loans from private creditors, the highest since 1989. From 2022 to 2025 developing countries paid $436 billion more in debt service than they received in new financing, although net long-term flows turned positive at $45 billion in 2025.',
  why: 'High debt service squeezes health, education and social spending; demand for debt management, public financial management and revenue advisory work is likely to stay strong.',
  country: '',
  region: 'Global',
  lender: 'World Bank',
  deal: null,
  sources: [
      [
        'World Bank: Developing Countries\' External Debt Surges to Record $9.4 Trillion (5 Nov 2026)',
        'https://www.worldbank.org/en/news/press-release/2026/11/05/developing-countries-external-debt-surges-to-record-9-4-trillion'
      ],
      [
        'The Irish Times: Debt of poorest countries hits record $9.4tn, World Bank reveals (6 Nov 2026)',
        'https://www.irishtimes.com/business/2026/11/06/world-bank-record-debt-developing-nations-interest-rates-essential-investment-bonds/'
      ]
    ],
  trust: 'official'
},
{
  id: 'n33',
  date: '2026-11-06',
  kind: 'Approval',
  title: 'World Bank approves $500 million more for climate resilience in northern Nigeria',
  summary: 'The World Bank approved $500 million in additional financing for Nigeria\'s Agro-Climatic Resilience in Semi-Arid Landscapes (ACReSAL) project, which helps northern states restore degraded land and build climate resilience, according to a report on 6 November. Financing terms were not reported.',
  why: 'ACReSAL works through federal and state project offices, so the top-up should mean more contracts for land restoration, watershed works, community grants and monitoring.',
  country: 'Nigeria',
  region: 'Africa',
  lender: 'World Bank',
  deal: {
    amount: 500,
    currency: 'USD',
    instrument: 'Additional financing (terms not reported)',
    stage: 'Approved',
    project: 'Agro-Climatic Resilience in Semi-Arid Landscapes (ACReSAL)',
    agency: '',
    countedIn: ''
  },
  sources: [
      [
        'CNBC Africa: World Bank approves $500 million for Nigeria climate resilience project',
        'https://www.cnbcafrica.com/2026/world-bank-approves-500-million-for-nigeria-climate-resilience-project'
      ]
    ],
  trust: 'media'
},
{
  id: 'n34',
  date: '2026-11-04',
  kind: 'Signing',
  title: 'AfDB guarantee brings in $1.2 billion of commercial bank loans for Tanzania\'s Tabora–Kigoma railway',
  summary: 'Tanzania closed a $1.2 billion commercial bank facility for the 411 km Tabora–Kigoma section of its standard gauge railway, announced on 4 November. Nine banks are lending; the AfDB arranged the deal and provides a partial credit guarantee of up to $800 million rather than lending directly. The facility is part of a $2.3 billion package, with about $1.1 billion still to come, according to the report.',
  why: 'A sign of development banks using guarantees to draw in commercial lenders; with construction already contracted, remaining openings are mainly in supervision, safeguards and resettlement monitoring.',
  country: 'Tanzania',
  region: 'Africa',
  lender: 'AfDB',
  deal: {
    amount: 1200,
    currency: 'USD',
    instrument: 'Commercial bank loans with AfDB partial credit guarantee (up to $800m)',
    stage: 'Signed',
    project: 'Standard Gauge Railway, Tabora–Kigoma section',
    agency: 'Government of Tanzania',
    countedIn: ''
  },
  sources: [
      [
        'The Rio Times: Tanzania signs US$1.2 billion for rail line (6 Nov 2026)',
        'https://www.riotimesonline.com/tanzania-us-1-2-billion-sgr-railway-financing-2026/'
      ]
    ],
  trust: 'media'
},
{
  id: 'n35',
  date: '2026-10-21',
  dateText: 'Approved 21 Oct, announced 4 Nov 2026',
  kind: 'Approval',
  title: 'AfDB lends Tanzania $60 million to recapitalise its agricultural development bank',
  summary: 'The AfDB Group announced on 4 November that it had approved a $60 million loan to Tanzania for the third phase of the Tanzania Agricultural Development Bank Equity Enhancement Project, to be invested as equity in the bank. The government adds $60 million from retained earnings. The AfDB says agriculture employs about 65% of Tanzania\'s workforce but gets about 12% of private-sector credit, and expects at least 30% of supported jobs to go to women and 30% to young people.',
  why: 'More long-term agribusiness credit; look for technical assistance on climate-smart lending and women- and youth-led enterprise portfolios.',
  country: 'Tanzania',
  region: 'Africa',
  lender: 'AfDB',
  deal: {
    amount: 60,
    currency: 'USD',
    instrument: 'Loan (invested as equity)',
    stage: 'Approved',
    project: 'TADB Equity Enhancement Project, Phase III',
    agency: 'Tanzania Agricultural Development Bank',
    countedIn: ''
  },
  sources: [
      [
        'allAfrica (AfDB release): African Development Bank Group commits $60 million to boost agricultural financing in Tanzania',
        'https://allafrica.com/stories/202611050699.html'
      ]
    ],
  trust: 'media'
},
{
  id: 'n36',
  date: '2026-11-05',
  kind: 'Approval',
  title: 'ADB approves $11.7 million grant to help the Marshall Islands absorb higher fuel and food costs',
  summary: 'ADB approved an $11.7 million policy-based grant, including $6.7 million in additional funding, for Subprogram 1 of the Marshall Islands Public Sector Reform Program, to help the government cope with fuel and food costs driven up by the Middle East conflict. Linked reforms include a consumption tax, online customs processing and cutting subsidies to state-owned enterprises from an average 6.2% of GDP to 3% by 2028.',
  why: 'Pacific budget support of this kind usually comes with tax, customs and state-enterprise reform assistance suited to public financial management consultants.',
  country: 'Marshall Islands',
  region: 'Pacific',
  lender: 'ADB',
  deal: {
    amount: 11.7,
    currency: 'USD',
    instrument: 'Policy-based grant',
    stage: 'Approved',
    project: 'Public Sector Reform Program, Subprogram 1',
    agency: 'Government of the Marshall Islands',
    countedIn: ''
  },
  sources: [
      [
        'ADB: ADB approves $11.7 million for Marshall Islands as Middle East conflict raises costs',
        'https://www.adb.org/news/adb-approves-11-7-million-marshall-islands-middle-east-conflict-raises-costs'
      ]
    ],
  trust: 'official'
},
{
  id: 'n37',
  date: '2026-11-04',
  kind: 'Policy',
  title: 'ADB aims to put 30% of its operations into cross-border projects by 2030',
  summary: 'ADB launched its operational approach for regional cooperation and integration at a conference in Manila, setting a target for 30% of its operations to support cross-border initiatives by 2030. Priorities include cross-border power, transport and digital links, trade facilitation, shared natural resources and disaster preparedness, with a plan to commit up to $10 billion to the ASEAN Power Grid. The approach works through regional programmes including SASEC, of which Bangladesh is a member.',
  why: 'Expect more regional technical assistance and multi-country studies on power interconnection, trade facilitation and transport corridors, suited to firms with regional experience.',
  country: '',
  region: 'Asia-Pacific',
  lender: 'ADB',
  deal: null,
  sources: [
      [
        'ADB: ADB targets nearly a third of its work for regional initiatives',
        'https://www.adb.org/news/adb-targets-nearly-third-its-work-regional-initiatives'
      ]
    ],
  trust: 'official'
},
{
  id: 'n38',
  date: '2026-11-05',
  kind: 'Policy',
  title: 'Education Cannot Wait raises $541.6 million towards its $600 million target for 2027–2030',
  summary: 'At a financing conference in Geneva on 5 November, Education Cannot Wait received $405.8 million in new pledges which, with $135.8 million in earlier commitments, brings $541.6 million, or 90% of its $600 million target for its 2027–2030 strategic plan. Switzerland pledged CHF 35 million. ECW aims to reach 10 million crisis-affected children and to channel at least half of programme funding through national and local partners by 2030.',
  why: 'The 50% localisation target means more ECW money going directly to national and local NGOs, including in crisis responses such as Bangladesh\'s Rohingya response.',
  country: '',
  region: 'Global',
  lender: 'Education Cannot Wait',
  deal: null,
  sources: [
      [
        'Education Cannot Wait: Global solidarity delivers major boost as Hope Starts Here campaign approaches its US$600 million goal',
        'https://www.educationcannotwait.org/news-stories/press-releases/global-solidarity-delivers-major-boost-education-cannot-wait-hope'
      ],
      [
        'Geneva Solutions: UN-backed Geneva fund raises $400m for education in emergencies',
        'https://genevasolutions.news/peace-humanitarian/un-backed-geneva-fund-raises-400m-for-education-in-emergencies'
      ]
    ],
  trust: 'official'
},
{
  id: 'n39',
  date: '2026-11-05',
  kind: 'Policy',
  title: 'Canada\'s 2026 budget makes no mention of foreign aid',
  summary: 'Canada\'s federal budget, tabled on 5 November, does not mention international assistance or development, according to a Canadian Press review reported by Global News, which said every budget since 2010 had done so. Aid groups said they expect the C$2.7 billion four-year cut announced last year to stand; the budget announced no new cuts.',
  why: 'NGOs that rely on Global Affairs Canada funding get no new signal and should plan around the cut already announced.',
  country: 'Canada',
  region: 'Global',
  lender: 'Canada',
  deal: null,
  sources: [
      [
        'Global News: Aid sector calls out omission of foreign aid in federal budget',
        'https://globalnews.ca/news/12141139/budget-2026-foreign-aid'
      ]
    ],
  trust: 'media'
},
{
  id: 'n40',
  date: '2026-11-04',
  kind: 'Data',
  title: 'UNEP: even tripling adaptation finance would meet only 20–29% of developing countries\' needs',
  summary: 'UNEP\'s Adaptation Gap Report 2026, released on 4 November, puts international public adaptation finance to developing countries at $28.2–31.7 billion in 2024 and needs at about $305 billion a year by 2035. The COP30 call to at least triple adaptation finance by 2035 would mean $85–120 billion a year, which after inflation would cover only 20–29% of needs, according to the report as summarised by Argus Media.',
  why: 'Adaptation money is the main finance fight at COP31; expect tight competition for adaptation grants and more blending with loans and private capital.',
  country: '',
  region: 'Global',
  lender: 'UNEP',
  deal: null,
  sources: [
      [
        'Argus Media: Adaptation too slow as world set to breach 1.5°C: Unep (4 Nov 2026)',
        'https://www.argusmedia.com/pt/news-and-insights/latest-market-news/2899890-adaptation-too-slow-as-world-set-to-breach-1.5degc-unep'
      ]
    ],
  trust: 'media'
},
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
  id: 'a3',
  date: '2026-11-08',
  title: 'COP31 opens with climate finance short of the promises: what it means for NGOs and consultants',
  standfirst: 'As climate talks open in Antalya, public climate budgets in rich countries are flat or falling, adaptation and loss-and-damage funds are far below need, and much of the gap is being filled with loans and guarantees while developing-country debt service sits at a record.',
  keynums: [
      ['$300bn', 'a year by 2035: the Baku climate finance goal [1][6]'],
      ['$28–32bn', 'international public adaptation finance in 2024, against about $305bn a year needed by 2035 [3]'],
      ['$516m', 'paid in to the loss-and-damage fund, against $2.8bn in funding requests [4]'],
      ['$436bn', 'more paid by developing countries in debt service than received in new financing, 2022–2025 [7]']
    ],
  body: [
      [
        'The short version',
        'COP31 runs from 9 to 20 November in Antalya, Türkiye, and developed countries are expected to show how they will reach the goal agreed at Baku of mobilising at least $300 billion a year in climate finance by 2035, within a wider $1.3 trillion target from all sources [6][1]. The numbers going into the talks are weak: adaptation finance covers a fraction of need [3], the loss-and-damage fund is small [4], and the EU has said it will make no new commitments at the summit [5]. Development banks are lending more for climate [8], but mostly as loans, at a time when developing countries are paying record sums to service debt [7].'
      ],
      [
        'What happened',
        'UNEP\'s Adaptation Gap Report 2026, released on 4 November, put international public adaptation finance at $28.2–31.7 billion in 2024, against needs of about $305 billion a year by 2035; even the tripling called for at COP30, to $85–120 billion a year, would cover only 20–29% of 2035 needs after inflation [3]. The Center for Global Development notes that the baseline for that tripling is unclear, and that if it means tripling the $40 billion target for 2025 the result is $120 billion a year [1]. An analysis by the Heinrich Böll Foundation says Germany\'s budgetary climate finance fell from €6.1 billion in 2024 to €4.7 billion in 2025, that developed countries provided and mobilised $136.7 billion in 2024 by OECD figures with only about a quarter for adaptation and more than two-thirds of public climate finance as loans, and that the loss-and-damage fund has $516 million paid in against $2.8 billion in requests [4]. The EU climate commissioner was reported as saying the bloc will make no new climate finance pledges at COP31; the EU and its member states provided €32.3 billion in public climate finance in 2025 [5]. The chair of the African Group of Negotiators argued that $300 billion should be treated as a floor, noting that Africa produces about 4% of global emissions but loses 2–5% of GDP a year to climate extremes [2].'
      ],
      [
        'Where the money is coming from instead',
        'Multilateral development banks reported a record $163 billion in climate finance in 2025, of which $103 billion went to low- and middle-income countries, including $35 billion for adaptation [8]. Much of this is lending: the World Bank\'s International Debt Report, released on 5 November, shows developing countries\' external debt at a record $9.4 trillion and IDA-eligible countries paying an average 8.2% on new private loans, the highest since 1989 [7]. Guarantees are a growing tool: this week an AfDB partial credit guarantee of up to $800 million helped Tanzania raise $1.2 billion from nine commercial banks for a railway [9]. Bilateral aid is under pressure too: Canada\'s 5 November budget did not mention foreign aid, and aid groups expect its C$2.7 billion cut to stand [10].'
      ],
      [
        'What it means for NGOs, firms and consultants',
        'Grant money for adaptation and loss and damage will stay scarce and competitive, so NGOs should expect more calls that ask for co-financing, private-sector partners or links to bank-financed projects [3][4]. For consulting firms, the growth is in work around development bank lending and guarantees: project preparation, safeguards, monitoring and climate-finance structuring, including debt-for-nature swaps and similar instruments [8][9]. Debt pressure [7] also keeps demand high for public financial management, climate budget tagging and revenue advice.'
      ],
      [
        'DevFund\'s assessment',
        'This is DevFund\'s view. The headline risk from Antalya is not a collapse of the $300 billion goal but a slow drift in which the target is met largely through loans and mobilised private money, while grant-based adaptation and loss-and-damage funds stay small [1][4][8]. For organisations working with vulnerable communities, the practical response is to build partnerships with the larger lenders\' projects and with national climate finance bodies rather than wait for new grant windows. Bangladeshi and other South Asian organisations should watch closely whether COP31 produces a clearer adaptation baseline, because that will decide how much grant money reaches climate-vulnerable countries in the next few years.'
      ]
    ],
  watch: [
      'Whether COP31 agrees a clear baseline and pathway for tripling adaptation finance',
      'New pledges, or the lack of them, to the loss-and-damage fund and the Adaptation Fund',
      'Development bank announcements in Antalya on climate lending, guarantees and debt-for-nature swaps',
      'Donor budget decisions after Canada\'s, and the preparation of the Green Climate Fund\'s next replenishment'
    ],
  sources: [
      [
        'Center for Global Development: Implementing climate finance goals: where next for the UNFCCC and other multilateral processes (4 Nov 2026)',
        'https://www.cgdev.org/blog/implementing-climate-finance-goals-where-next-unfccc-and-other-multilateral-processes'
      ],
      [
        'Climate Home News: COP31 must deliver finance for Africa or there will be no implementation (4 Nov 2026)',
        'https://www.climatechangenews.com/2026/11/04/cop31-must-deliver-finance-for-africa-or-there-will-be-no-implementation/'
      ],
      [
        'Argus Media: Adaptation too slow as world set to breach 1.5°C: Unep (4 Nov 2026)',
        'https://www.argusmedia.com/pt/news-and-insights/latest-market-news/2899890-adaptation-too-slow-as-world-set-to-breach-1.5degc-unep'
      ],
      [
        'Heinrich Böll Stiftung: COP31: the sorry state of public climate finance will hamper needed ambition (29 Oct 2026)',
        'https://www.boell.de/en/2026/10/29/cop31-antalya-sorry-state-public-climate-finance-will-hamper-needed-ambition'
      ],
      [
        'OilPrice.com: EU rules out new climate finance pledges at COP31 (29 Oct 2026)',
        'https://oilprice.com/Latest-Energy-News/World-News/EU-Rules-Out-New-Climate-Finance-Pledges-at-COP31.amp.html'
      ],
      [
        'NewsMobile: COP31: seven major climate issues set to shape global talks in Türkiye (7 Nov 2026)',
        'https://www.newsmobile.in/climate/cop31-seven-major-climate-issues-set-to-shape-global-talks-in-turkiye/'
      ],
      [
        'World Bank: Developing countries\' external debt surges to record $9.4 trillion (5 Nov 2026)',
        'https://www.worldbank.org/en/news/press-release/2026/11/05/developing-countries-external-debt-surges-to-record-9-4-trillion'
      ],
      [
        'AIIB (on behalf of the MDBs): Multilateral development banks increase climate finance to record USD163 billion in 2025 (13 Jul 2026)',
        'https://www.aiib.org/en/news-events/news/2026/multilateral-development-banks-increase-climate-finance-record-usd163-billion-2025-supporting-climate-resilient-sustainable-growth.html'
      ],
      [
        'The Rio Times: Tanzania signs US$1.2 billion for rail line (6 Nov 2026)',
        'https://www.riotimesonline.com/tanzania-us-1-2-billion-sgr-railway-financing-2026/'
      ],
      [
        'Global News: Aid sector calls out omission of foreign aid in federal budget (7 Nov 2026)',
        'https://globalnews.ca/news/12141139/budget-2026-foreign-aid'
      ]
    ]
},
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
