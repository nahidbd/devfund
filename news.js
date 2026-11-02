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
