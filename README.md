# FlowPilot Landing Page

A responsive, single-page marketing site for **FlowPilot**, a fictional project and team-collaboration tool. Built with React, Vite, and Tailwind CSS.

## Features

- **Sticky header** with anchor navigation and a collapsible mobile menu
- **Hero section** with a coded dashboard preview (no images required)
- **Features** grid, driven by a simple data array
- **How it works** section with a progress card and a three-step walkthrough
- **Pricing** section with a monthly/yearly billing toggle (yearly shows a 20% discount on the Growth plan)
- **Contact / demo request form** with client-side validation (name, email format, message) and a success state
- Smooth scrolling between sections, with an offset so the sticky header never covers headings
- Icons from [Lucide](https://lucide.dev)

## Tech Stack

| Tool | Purpose |
| --- | --- |
| [React](https://react.dev) | UI library |
| [Vite](https://vite.dev) | Dev server and build tool |
| [Tailwind CSS](https://tailwindcss.com) | Styling, via the `@tailwindcss/vite` plugin |
| [lucide-react](https://lucide.dev) | Icon set |
| [ESLint](https://eslint.org) | Linting (with React Hooks and React Refresh rules) |

### Run the dev server

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`). The page hot-reloads as you edit.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |


## Project Structure

```
landing-page/
├── index.html          # HTML entry point
├── vite.config.js      # Vite config (React + Tailwind plugins)
├── eslint.config.js    # ESLint flat config
├── package.json
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # The entire page: components, data, and form logic
    ├── App.css         # Tailwind import
    └── index.css       # Tailwind import and global base styles
```


## Notes

- **The contact form doesn't send data anywhere.** `handleSubmit` validates the fields and shows a confirmation message, but nothing is submitted. To make it functional, wire it up to a backend, a form service, or an email API.
- **Custom Tailwind classes.** `App.jsx` uses `font-display`, `text-ink`, `bg-ink`, and `shadow-soft`. With Tailwind 4 these need to be defined in a `@theme` block in your CSS (for example in `src/index.css`). Without those definitions, the classes have no effect.
- **Fonts.** `index.css` sets the base font to "DM Sans", but the font isn't loaded by `index.html`. Add a font link (or self-host it) if you want it to render everywhere.

## Deployment

Build the site and deploy the generated `dist/` folder to any static host (Netlify, GitHub Pages):

```bash
npm run build
```

