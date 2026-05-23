# pedrogrilo.dev

Personal portfolio — built with Next.js 14, Tailwind CSS, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to `main` triggers an automatic deploy to Vercel via GitHub Actions.

Required secrets in GitHub repo settings:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`
