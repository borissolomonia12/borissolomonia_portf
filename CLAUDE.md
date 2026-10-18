# Repository Guidance

## Project

- React 18 + TypeScript + Vite static portfolio.
- Main sales experience: `src/pages/HomePage.tsx`.
- ROI case data: `src/data/caseStudies.ts`.
- Scroll-linked visual system: `src/components/NetworkBackground.tsx`.
- Lightweight navigation: `src/routing.tsx`; do not add a routing dependency without a demonstrated need.

## Commands

```powershell
npm ci
npm run assets:build
npm run dev
npx tsc --noEmit
npm run lint
npm test
npm run build
npm audit --omit=dev
```

## Design constraints

- Preserve the slate, emerald, and sapphire system.
- Keep case-study content readable above decorative motion.
- New motion must honor `prefers-reduced-motion`.
- Do not invent client ROI numbers.
- Screenshots must be public-safe and pass through the WebP asset pipeline.

## Security constraints

- Never put confidential files or secrets in `public/` or Vite variables.
- The portfolio is static and currently needs no `.env`.
- Deployment must only recreate `portfolio-boris-app` and must not manage shared Caddy or Tasty ERP containers.
- Use immutable image tags, health checks, rollback, resource limits, and SSH host fingerprint verification.

See `DEPLOYMENT_GUIDE.md` for the full deployment procedure and `.architecture-audit/REPORT-2026-08-02.md` for architecture decisions.