# Style Rules — Harry CV

Design system rules to keep the UI consistent and modern across every component in this Next.js / Tailwind CSS v4 / shadcn/ui project.

---

## Core Principles

- **Tokens over values** — never hardcode colors (`gray-200`, `#fff`, `black`). Always use Tailwind CSS custom-property tokens (`border-border`, `bg-background`, `text-muted-foreground`, etc.).
- **Theme-aware by default** — every component must look correct in both light and dark mode. Test both before marking work done.
- **Smooth but subtle** — micro-interactions should use `transition-all duration-200`; avoid heavy animations that slow the page feel.
- **No new deps** — use what's installed: Tailwind v4, shadcn/ui (new-york), tw-animate-css, lucide-react, devicons-react.
- **Content in constants** — never inline data in components. All content lives in `constants/`.
- **Hardcode contact info** — email, phone, social handles/URLs are hardcoded directly. Only `CV_URL` and `AVATAR_URL` use env vars.

---

## Color Tokens (always use these)

| Purpose            | Token                   |
|--------------------|-------------------------|
| Page background    | `bg-background`         |
| Surface / card     | `bg-card`               |
| Muted surface      | `bg-secondary` / `bg-muted` |
| Primary accent     | `bg-primary` / `text-primary` |
| Body text          | `text-foreground`       |
| Subdued text       | `text-muted-foreground` |
| Borders            | `border-border`         |
| Input borders      | `border-input`          |
| Focus ring         | `ring-ring`             |

Primary color: `oklch(65% 0.22 38)` (orange) — defined in `globals.css`. Never hardcode this value; always use `text-primary` / `bg-primary`.

---

## Typography Scale

| Role            | Classes                              |
|-----------------|--------------------------------------|
| Hero heading    | `text-4xl md:text-5xl lg:text-7xl font-extrabold` |
| Section heading | `text-2xl font-bold`                 |
| Sub-heading     | `text-lg font-bold`                  |
| Label / role    | `text-sm font-semibold text-primary` |
| Body            | `text-sm`                            |
| Meta / timestamp| `text-sm text-muted-foreground`      |
| Category label  | `text-xs font-semibold uppercase tracking-widest text-muted-foreground` |

---

## Layout & Navigation

There is **no sticky header**. Navigation is provided by `FloatingNav` — a fixed pill at the bottom of the viewport. The layout is:

```
app/(landing)/layout.tsx  →  FloatingNav + LayoutFooter
app/(landing)/page.tsx    →  sections stacked with space-y-16 pb-24
```

Page max-width: `max-width: 1000px` at `min-width: 1000px` (set in `globals.css`).

---

## Section Pattern

Every page section must follow this shell:

```tsx
<section id="<id>" className="px-4 mx-auto scroll-mt-4">
  <FadeIn>
    <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">
      <span className="section-heading">Section Title</span>
    </h2>
  </FadeIn>
  {/* content */}
</section>
```

- `scroll-mt-4` (16px) compensates for FloatingNav scroll detection offset (`SCROLL_OFFSET = 16`).
- `px-4` is the standard horizontal padding inside the container.
- Section heading uses the `.section-heading` class (gradient text from foreground → primary), applied to an inline `<span>` inside the `<h2>`.
- Section heading always uses `border-b border-border`.
- Wrap animated elements in `<FadeIn>` with staggered `delay` props.

---

## Section Heading Gradient

Use the `.section-heading` CSS class (defined in `globals.css`) on an inline `<span>`:

```tsx
<h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">
  <span className="section-heading">About</span>
</h2>
```

Never apply `.section-heading` to a block element — the gradient spans the full width and short text would appear as solid black.

---

## Card Pattern

```tsx
<div className="bg-card border border-border rounded-2xl p-5 space-y-4">
  {/* content */}
</div>
```

Use `rounded-2xl` for main cards; `rounded-xl` for nested/smaller cards.

---

## Badge / Pill Pattern

- Tech tags in experience → `<Badge variant="secondary" className="rounded-full text-xs">`
- Skill pills → custom `<span>` with pill shape and hover lift:

```tsx
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 cursor-default select-none">
  {icon} Label
</span>
```

---

## FadeIn Animation

Wrap content in `<FadeIn>` from `@/components/common/FadeIn`. Stagger with `delay` (ms):

```tsx
<FadeIn delay={100}>...</FadeIn>
<FadeIn delay={200}>...</FadeIn>
```

---

## Interactive Elements

- Hover transitions: `transition-all duration-200`
- Hover lift: `hover:-translate-y-0.5 hover:shadow-md`
- Links in nav: use `.hover-underline` utility (defined in globals.css)
- Icon buttons: `rounded-full h-8 w-8`
- CTA buttons: `rounded-full` (used in HomeSection)

---

## Timeline (Experience)

Experiences are grouped by company. Each group has a header row and a vertical line spanning all its projects via an absolutely-positioned element:

```tsx
<div className="relative">
  {/* continuous line */}
  <div className="absolute left-[184px] top-8 bottom-0 w-px bg-border hidden md:block" />
  {/* projects */}
  {group.experiences.map((exp) => (
    <div className="relative flex gap-6 mb-6">
      {/* left: date */}
      <div className="hidden md:block w-40 shrink-0 text-right ...">date</div>
      {/* dot */}
      <div className="hidden md:flex ...dot..." />
      {/* card */}
      <div className="flex-1 bg-card border border-border rounded-2xl p-5">...</div>
    </div>
  ))}
</div>
```

Mobile layout: time and dot stacked above the card, line at `left-3`.

---

## Responsive Breakpoints

| Name | Value  | Use case                     |
|------|--------|------------------------------|
| xs   | 480px  | Small phones → landscape     |
| sm   | 640px  | Larger phones / nav labels   |
| md   | 768px  | Tablet / horizontal layout   |
| lg   | 1024px | Desktop                      |

---

## Environment Variables

Only two env vars are used — both optional with graceful fallbacks:

| Variable     | Used in          | Fallback                  |
|--------------|------------------|---------------------------|
| `CV_URL`     | HomeSection      | Button href is undefined  |
| `AVATAR_URL` | AboutSection     | Shows "HH" initials block |

All other contact info (email, phone, LinkedIn, GitHub, Telegram) is hardcoded directly in components and constants.

---

## What NOT To Do

- Do not use `border-gray-*` or any hardcoded color class.
- Do not add new npm packages for UI — use existing stack.
- Do not skip dark mode testing.
- Do not inline data in components — keep all content in `constants/`.
- Do not use `rounded-sm` for badges/pills — prefer `rounded-full`.
- Do not add a sticky header — navigation is FloatingNav only.
- Do not apply `.section-heading` to block elements — always wrap in an inline `<span>`.
- Do not use `process.env.*` for contact info — hardcode it directly.
