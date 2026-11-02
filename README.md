# DevFund

Funding, tenders and jobs for the development sector, starting with Bangladesh. A venture of Synapse Consulting and sister site of [Digivern](https://digivern.pages.dev).

## Files

| File | What it holds |
|---|---|
| `index.html` | Page layout and styles |
| `app.js` | How pages are drawn: routing, the Opportunity Board filters, listing pages, calendar, forms |
| `data.js` | All content: `LISTINGS`, `DONORS`, `SOURCES`, `DIGEST`, `CORRECTIONS`, `UPDATED`, `TODAY`. The comment at the top explains every listing field |
| `_headers` | Security headers |
| `wrangler.toml` | Cloudflare Pages settings and the `devfund-data` database binding |
| `functions/api/form.js` | Stores form submissions (post an opportunity, report a problem, Proposal Desk, digest sign-up) in the `submissions` table |
| `functions/api/hit.js`, `stats.js` | Page-view counting and totals (no cookies, no IP addresses), as on Digivern |

## Publishing

The repository is linked to Cloudflare Pages (project `devfund`, no build step). Every push to `main` publishes the site automatically within about a minute.

Form submissions are stored in the D1 database `devfund-data` (table `submissions`, status `new` until the editor handles them).

## Daily update

A scheduled task edits `data.js` every morning: adds new verified listings, re-checks open ones, updates `UPDATED` and `TODAY`, refreshes `DIGEST` on Mondays, and publishes. Closed listings drop off the board automatically at their deadline and stay reachable by link.
