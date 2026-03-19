# patrikvalentiny.work

Portfolio and utility site for Patrik Valentiny, built with Astro and React.

## What is included

- A minimalist landing page with links to selected work and social profiles
- A brand identity board for the visual system behind the site
- An SU holiday request form generator that produces a downloadable PDF

## Live routes

- `/` - personal landing page
- `/brand-identity` - brand identity board
- `/su-holidays` - SU holiday request form generator

## Tech stack

- Astro 6
- React 18
- Tailwind CSS 4
- daisyUI 5
- `@react-pdf/renderer`
- TypeScript

## Project structure

```text
src/
├── assets/            global styles
├── components/        shared React components
├── features/          feature-specific app logic
│   └── su-holidays/   PDF generator and request form
├── layouts/           Astro layout wrappers
└── pages/             route entry points
```

## Getting started

```sh
pnpm install
pnpm dev
```

The development server runs at <http://localhost:4321>.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm build` | Build the site for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro` | Run Astro CLI commands |

## Notes

- The SU holidays page is rendered client-side with React.
- Site metadata, social cards, and icons are configured per route.
- The project uses daisyUI for most UI styling, with Tailwind utility classes for layout and spacing.
