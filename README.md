# achyuta-portfolio

Personal site for Achyuta Kumar Singh. Next.js 15 (App Router) + TypeScript + React 19, vanilla CSS, no UI libraries.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Where to edit

Everything on the page comes from **`lib/data.ts`** — projects, timeline, skills, quick picks, poem, links. Change content there, not in `page.tsx`.

- `app/globals.css` — all styling. Tokens live in the `:root` block at the top.
- `components/Client.tsx` — the interactive pieces: custom cursor, scroll reveal, hero typewriter, IST clock, project hover previews, timeline accordion, skill bars, quick picks.
- `components/Previews.tsx` — one hand-built SVG diagram per project, shown in the card that follows your cursor on the work rows.

## Sections

Hero → work → craft → path → about → off-screen → contact.

The work rows read from `projects` in `lib/data.ts`. Each entry's `preview` key maps to a diagram exported from `components/Previews.tsx`; add a project and you add a matching diagram there.

## Before shipping

1. Drop a portrait at `public/portrait.jpg`. The off-screen frame probes for it and falls back to a monogram placeholder until it exists — no code change needed.
2. Update `metadataBase` in `app/layout.tsx` to the real domain so social previews resolve.

## Deploy

Import the repo at vercel.com — framework auto-detects as Next.js, no env vars, no build settings to change. Or run `npx vercel`.

## Notes

- Static-friendly: no client data fetching. Add `output: "export"` to `next.config.mjs` to host plain HTML.
- Fonts are Instrument Serif / Inter Tight / JetBrains Mono, self-hosted via `next/font`.
- The page hides the native cursor (`body { cursor: none }`) and draws its own; this is disabled under `@media (hover: none)` so touch devices behave normally.
- `prefers-reduced-motion` is respected: reveals resolve to visible and transitions collapse.
