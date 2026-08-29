# C&S Remodeling Website

Marketing site for C&S Remodeling, a Poway, CA remodeling company. Built from a
provided design mockup: hero section, services overview, trust/credentials bar,
projects, about, reviews, and a working contact form.

## Stack

- **client/** — React + Vite frontend
- **server/** — Express API (handles `POST /api/contact` and serves the built
  client in production)

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
