## Component management note (2026) — this repo

### Where should “Button” live?

In this repo, **the “button” styling lives as CSS utilities** (Tailwind v4 `@utility`) in `app/globals.css`, not as a React `<Button />` component.

Example usage:

```tsx
<button className="btn btn-primary">Send</button>
<Link className="btn btn-outline" href="/work">View Work</Link>
<a className="btn btn-navy" href="/resume.pdf">Resume</a>
```

### Why keep it in `@utility` (instead of `src/components/ui/Button.tsx`)?

- **No behavior to encapsulate**: if it’s only styles, a wrapper component adds little value.
- **Works across element types**: the same styling needs to apply to `<button>`, `next/link`, and `<a>`. A React Button often needs polymorphic `as` support to do this cleanly.
- **Tailwind v4-intended pattern**: `@utility` is the v4 way to define reusable style primitives (the v3 equivalent was usually `@layer components`).

### When to promote to a React UI component (`src/components/ui/`)?

Promote when the “Button” needs **behavior and a stable API**, e.g.:

- **Loading state** (spinner, async in-flight)
- **Icon slots** (leading/trailing icons)
- **`forwardRef`** requirements
- **Accessibility logic** beyond styling (e.g. complex `aria-*`, keyboard behavior)
- **Reused across many surfaces** where a strict props API prevents inconsistent usage

If you reach that point, then `src/components/ui/Button.tsx` is justified.

### What belongs in `src/components/ui/` today?

UI primitives with **behavior** (not just styles), e.g.:

- `src/components/ui/CopyButton.tsx` (clipboard API + “copied” state)
- Future candidates: `Modal`, `Dropdown`, `Toast`, etc. (focus management, portals, keyboard navigation)

### Rule of thumb

- **Pure styling + repeated pattern** → `@utility` in `app/globals.css`
- **Behavior + shared API** → React component in `src/components/ui/`

