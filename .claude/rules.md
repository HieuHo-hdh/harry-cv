# Style Rules — Harry CV

Design system rules to keep the UI consistent and modern across every component in this Next.js / Tailwind CSS v4 / shadcn/ui project.

---

## Core Principles

- **Tokens over values** — never hardcode colors (`gray-200`, `#fff`, `black`). Always use Tailwind CSS custom-property tokens (`border-border`, `bg-background`, `text-muted-foreground`, etc.).
- **Theme-aware by default** — every component must look correct in both light and dark mode. Test both before marking work done.
- **Smooth but subtle** — micro-interactions should use `transition-all duration-200`; avoid heavy animations that slow the page feel.
- **No new deps** — use what's installed: Tailwind v4, shadcn/ui (new-york), tw-animate-css, lucide-react, devicons-react.

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

---

## Typography Scale

| Role            | Classes                              |
|-----------------|--------------------------------------|
| Hero heading    | `text-4xl md:text-5xl lg:text-6xl font-extrabold` |
| Section heading | `text-2xl font-bold`                 |
| Sub-heading     | `text-lg font-bold`                  |
| Label / role    | `text-sm font-semibold text-primary` |
| Body            | `text-sm`                            |
| Meta / timestamp| `text-sm text-muted-foreground`      |
| Category label  | `text-xs font-semibold uppercase tracking-widest text-muted-foreground` |

---

## Section Pattern

Every page section must follow this layout shell:

```tsx
<section id="<id>" className="px-4 mx-auto pt-16 -mt-8">
  <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">
    Section Title
  </h2>
  {/* content */}
</section>
```

- `pt-16 -mt-8` compensates for the sticky header's 56px (h-14) height.
- `px-4` is the standard horizontal padding inside the container.
- Section heading always uses `border-b border-border` (NOT `border-gray-200`).

---

## Card Pattern

Use for experience items, education, and any grouped content block:

```tsx
<div className="bg-card border border-border rounded-xl p-4 space-y-2">
  {/* content */}
</div>
```

---

## Badge / Pill Pattern

- Tech tags in experience → `<Badge variant="secondary" className="rounded-full">`
- Skill pills → custom `<span>` with pill shape and hover lift:

```tsx
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 cursor-default select-none">
  {icon} Label
</span>
```

---

## Interactive Elements

- Hover transitions: `transition-all duration-200`
- Hover lift: `hover:-translate-y-0.5 hover:shadow-md`
- Links in nav: use `.hover-underline` utility (defined in globals.css)
- Icon buttons: `rounded-full h-8 w-8`
- CTA buttons: `rounded-md` (default shadcn shape)

---

## Header

```tsx
<header className="sticky top-0 border-b bg-background/80 backdrop-blur-md z-10">
```

Glass-morphism effect keeps the header light and modern in both themes.

---

## Timeline (Experience)

```tsx
<div className="ml-4 border-l-2 border-border space-y-6">
  <div className="relative pl-8">
    {/* dot */}
    <div className="absolute left-0 top-3 h-3 w-3 rounded-full bg-primary border-2 border-background -translate-x-[7px]" />
    <div className="bg-card border border-border rounded-xl p-4 space-y-2">
      {/* card content */}
    </div>
  </div>
</div>
```

---

## Responsive Breakpoints

| Name | Value  | Use case                    |
|------|--------|-----------------------------|
| xs   | 480px  | Small phones → landscape    |
| md   | 768px  | Tablet / horizontal layout  |
| lg   | 1024px | Desktop                     |

---

## What NOT To Do

- Do not use `border-gray-*` or any hardcoded color class.
- Do not add new npm packages for UI — use existing stack.
- Do not skip dark mode testing.
- Do not inline data in components — keep all content in `constants/`.
- Do not use `rounded-sm` for badges/pills — prefer `rounded-full`.
