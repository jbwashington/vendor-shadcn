# Changes

- 2026-11-01 adopt shadcn@3.8.5 (ad25490cf) from shadcn-ui/ui
- 2026-11-01 skip shadcn@3.8.5..shadcn@4.23.0 (src stays on shadcn@3.8.5): shadcn@3.8.5->4.23.0: tailwind.css only gains new features (scroll-fade-* and shimmer-* utilities, 18fcf0f76). The one fix (a9c1da49e, shimmer reduced-motion for variants) patches the new shimmer utility, which our src does not contain. No advisories. Nothing to take.
