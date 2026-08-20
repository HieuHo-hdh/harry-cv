# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (see `pnpm-lock.yaml`).

- `pnpm dev` — start Next.js dev server
- `pnpm build` — production build (also runs in CI, deploys to GitHub Pages via `.github/workflows/nextjs.yml`)
- `pnpm start` — serve the production build
- `pnpm lint` — ESLint (config: `eslint.config.mjs`, extends `next/core-web-vitals` + `next/typescript`)

There is no test runner configured.

## Architecture

Single-page personal CV site built with **Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + shadcn/ui (new-york style)**. Deployed as a static export to GitHub Pages on push to `master`.

### Routing shape

- `app/layout.tsx` — root: fonts (Geist), metadata, `ThemeProvider` (next-themes, defaults to dark).
- `app/(landing)/layout.tsx` — client layout wrapping every section with `FloatingNav` (fixed pill at bottom of viewport — there is **no sticky header**) and `LayoutFooter`.
- `app/(landing)/page.tsx` — the only page. Renders `HomeSection` eagerly; `About`, `Skill`, `Experience`, `Contact` sections are `next/dynamic` + `Suspense` for code splitting.

Navigation is hash-based (`/#home`, `/#about`, …) driven by `constants/menu.constants.ts`. Section elements use `scroll-mt-4` because `SCROLL_OFFSET = 16` compensates for FloatingNav detection.

### Content lives in `constants/`, never inline

All CV content (`experience.constants.tsx`, `skill.constants.tsx`, `menu.constants.ts`) is data, imported by the section components in `components/page/`. When editing CV data, edit constants — do not touch section components unless the layout itself changes.

Contact info (email, phone, LinkedIn, GitHub, Telegram) is **hardcoded directly** in components/constants. Only two env vars exist, both optional with graceful fallbacks:

| Variable     | Used in       | Fallback                  |
|--------------|---------------|---------------------------|
| `CV_URL`     | HomeSection   | Download button href undefined |
| `AVATAR_URL` | AboutSection  | Shows "HH" initials block |

### Component layers

- `components/ui/` — shadcn primitives (badge, button, dropdown-menu, separator, toggle, toggle-group). Manage via `components.json`; alias `@/components/ui`.
- `components/common/` — `FadeIn` (IntersectionObserver-based reveal, staggered with `delay` ms), `DarkModeToggle`.
- `components/layout/` — `FloatingNav`, `LayoutFooter`, `ScrollTopButton`.
- `components/page/` — one file per section; wrap animated blocks in `<FadeIn delay={...}>`.

Path alias: `@/*` → repo root (see `tsconfig.json`).

## Design system (must follow — see `.claude/rules.md` for full details)

- **Never hardcode colors.** Use tokens: `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, `text-primary`, etc. Primary is `oklch(65% 0.22 38)` (orange) defined in `app/globals.css`.
- **Theme-aware by default** — every change must look correct in both light and dark mode.
- Section shell pattern (see rules.md for full snippet): `<section id px-4 mx-auto scroll-mt-4>` → `<FadeIn>` → `<h2>` with `border-b border-border` wrapping an inline `<span className="section-heading">` (gradient text; must be inline, not block).
- Cards: `bg-card border border-border rounded-2xl p-5` (nested → `rounded-xl`).
- Pills/badges: `rounded-full` (never `rounded-sm`). Tech tags use `<Badge variant="secondary" className="rounded-full text-xs">`.
- Hover transitions: `transition-all duration-200`, lift with `hover:-translate-y-0.5 hover:shadow-md`.
- Container max-width caps at 1000px (`app/globals.css`).
- Custom breakpoint `xs: 480px` (defined in `@theme`).
- No new UI dependencies — stack is Tailwind v4, shadcn/ui, tw-animate-css, lucide-react, devicons-react.

## CI/CD

Two workflows, split by responsibility (see `docs/ci-cd.md` for details):

- `.github/workflows/ci.yml` — on PRs to `master` and pushes to non-`master` branches: `pnpm install --frozen-lockfile` → `pnpm lint` → `pnpm build`. No deploy, no elevated permissions.
- `.github/workflows/deploy.yml` — on push to `master` (or manual `workflow_dispatch`): build with `actions/configure-pages@v5` (`static_site_generator: next` — auto-injects `basePath`, disables server image optimization) and deploy `./out` to GitHub Pages. Holds the `pages` concurrency group without cancelling in-progress runs.

Both workflows use pnpm 9 + Node 20 with pnpm cache. Keep `next.config.ts` compatible with static export (currently only sets `images.remotePatterns` for `lh3.googleusercontent.com` and `drive.google.com`).
