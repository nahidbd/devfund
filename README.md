# DevFund

Funding, tenders, jobs and remote consultancies for the development sector worldwide, with an in-depth Bangladesh desk. A venture of Synapse Consulting and sister site of [Digivern](https://digivern.pages.dev).

## Files

| File | What it holds |
|---|---|
| `index.html` | Page layout and styles |
| `app.js` | How pages are drawn: routing, the Opportunity Board filters, listing pages, calendar, forms |
| `data.js` | All content: `LISTINGS`, `DONORS`, `SOURCES`, `DIGEST`, `CORRECTIONS`, `UPDATED`, `TODAY`. The comment at the top explains every listing field |
| `news.js` | Fund News: `NEWS` (approvals, signings, pipeline deals, aid-flow data, policy) and `ANALYSES`. Items with a `deal` feed the Finance tracker |
| `_headers` | Security headers |
| `wrangler.toml` | Cloudflare Pages settings and the `devfund-data` database binding |
| `functions/api/form.js` | Stores form submissions (post an opportunity, report a problem, Proposal Desk, digest sign-up) in the `submissions` table |
| `functions/api/hit.js`, `stats.js` | Page-view counting and totals (no cookies, no IP addresses), as on Digivern |

## Publishing

The repository is linked to Cloudflare Pages (project `devfund`, no build step). Every push to `main` publishes the site automatically within about a minute.

Form submissions are stored in the D1 database `devfund-data` (table `submissions`, status `new` until the editor handles them).

## Weekly update

A scheduled task runs every Sunday at 07:12 Dhaka time. It re-checks open listings, adds new verified listings and Fund News items from the past week, writes one analysis, refreshes `DIGEST`, updates `UPDATED` and `TODAY`, and publishes. Closed listings drop off the board automatically at their deadline and stay reachable by link.
