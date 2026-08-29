# C&S Remodeling Website

Marketing site for C&S Remodeling, a Poway, CA remodeling company. Built from a
provided design mockup: hero section, services overview, trust/credentials bar,
projects, about, reviews, and a working contact form.

## Stack

- **client/** — React + Vite frontend
- **server/** — Express API (handles `POST /api/contact` and serves the built
  client in production); used for local dev and for hosting outside Cloudflare
- **worker/** — Cloudflare Worker with the same `/api/contact` handler, used
  when deploying to Cloudflare (see below)

## Getting started

```bash
npm run install:all
npm run dev
```

This starts the Express API on `http://localhost:4000` and the Vite dev
server on `http://localhost:5173` (which proxies `/api` requests to the
Express server). Open `http://localhost:5173` in your browser.

## Production build

```bash
npm start
```

Builds the client and serves it (plus the API) from Express on
`http://localhost:4000` (or `$PORT` if set).

## Deploying to Cloudflare

This repo is set up for Cloudflare's Git-connected Worker deploys, using
[Workers static assets](https://developers.cloudflare.com/workers/static-assets/)
to serve the built client and a small Worker ([`worker/index.js`](worker/index.js))
to handle `POST /api/contact` (the Express server isn't used in this path —
Workers don't run Express directly).

In the Cloudflare dashboard's "Create a Worker" flow, connected to this repo,
the defaults work as-is:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

To test locally before deploying:

```bash
npm run cf:dev
```
