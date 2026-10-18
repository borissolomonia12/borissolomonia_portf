# Boris Solomonia — Finance Automation Portfolio

A conversion-focused React portfolio for finance automation, analytics, and API integration work. The experience pairs ROI-oriented case studies with a scroll-linked Canvas network and real product screenshots.

## Stack

- React 18, TypeScript, Vite, Tailwind CSS, Framer Motion
- Custom lightweight client-side navigation
- Canvas network animation with Intersection Observer
- Nginx production image, Docker Compose, Caddy reverse proxy
- GitHub Actions, GCP Workload Identity Federation, Artifact Registry

## Local development

```powershell
npm ci
npm run assets:build
npm run dev
```

## Release checks

```powershell
npx tsc --noEmit
npm run lint
npm test
npm run build
npm audit --omit=dev
```

## Screenshot pipeline

1. Put public-safe PNG/JPEG screenshots in `assets/source-screenshots/`.
2. Map each screenshot in `config/portfolio-assets.json`.
3. Run `npm run assets:build`.
4. Commit optimized WebP files from `public/projects/network/` and the generated manifest.

Never place confidential reports, credentials, or customer personal data in `public/`.

## Documentation

- Deployment: `DEPLOYMENT_GUIDE.md`
- UX and architecture findings: `.architecture-audit/REPORT-2026-08-02.md`