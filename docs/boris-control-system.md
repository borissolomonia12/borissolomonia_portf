# Boris Control System showcase

`/boris-control-system` is a route-split, single-page ERP analytics demonstration. It uses synthetic data for one Georgian wholesale/distribution company, two branches, and GEL reporting. It does not connect to client records or a live AI service.

## Architecture

- `src/data/controlSystem.ts` owns the typed demo entities, reconciled source values, filters, formatters, and business calculations.
- `src/pages/BorisControlSystemPage.tsx` owns presentation state, cross-panel selection, the accessible detail drawer, and lightweight SVG/CSS visualizations.
- `src/styles/control-system.css` extends the portfolio's Copper & Teal design tokens and existing responsive breakpoints.
- The homepage `Boris control system` node is a native internal link to the showcase.

## Calculation assumptions

- Employee ROI is `(gross profit generated - total employee cost) / total employee cost` for sales roles.
- Total employee cost includes salary, bonus, commission, and employer cost.
- Customer contribution is gross profit less estimated logistics and servicing cost.
- Supplier score weights reliability at 35%, quality at 25%, payment terms at 20%, and price stability at 20%.
- Net operating cash is customer collections less supplier payments and operating expenses.
- Forecast values are simulated examples derived from receivables, payables, payroll, and tax obligations.

The tests verify that employee, customer, and product revenue and gross profit reconcile; collections plus receivables equal revenue; supplier payments plus payables equal purchases; and operating cash reconciles to its inputs.

## Accessibility and performance

Charts provide accessible summaries, detailed values remain available in semantic tables, filters use native labels, the drawer supports Escape and trapped focus, and the page uses the application's reduced-motion rules. No charting dependency was added; the route is lazy-loaded as a separate production chunk.
