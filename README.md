# Yanning Zhao’s Personal Website

A personal website with a short introduction and a downloadable resume. Built with React, TypeScript, Vite, and React Router for GitHub Pages.

[Visit the website](https://ynzhao96.github.io/)

## Local development

With Node.js and npm installed, run:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. To check the production build:

```sh
npm run lint
npm run build
npm run preview
```

## Project structure

| Path | Purpose |
| --- | --- |
| `src/pages/` | Home, resume, and 404 pages, plus the shared app layout |
| `src/components/siteHeader/` | Site header and primary navigation |
| `src/constants/siteRoutes.ts` | Route paths shared by the app, navigation, and build |
| `src/styles/global.css` | Global styles and layout variables |
| `public/` | Source files for the resume PDF, homepage illustration, and favicon |
| `docs/` | Generated files published by GitHub Pages |

## Updating the resume

Replace [the PDF in `public/`](public/Yanning%20Zhao%20-%20Software%20Engineer.pdf). If you rename the PDF, update `resumeFilename` in [`resume.tsx`](src/pages/resume/resume.tsx). Run `npm run build` to copy the new PDF into `docs/`.

## Publishing to GitHub Pages

This repository builds to `docs/` for branch-based publishing. The corresponding settings under **Settings → Pages** are **Deploy from a branch**, **main**, and **/docs**.

1. Run `npm run lint` and `npm run build`.
2. Preview the build and check that the homepage, `/resume/`, and the PDF link work.
3. Commit the source changes and the regenerated `docs/` files together, then push to the publishing branch.

Edit source files in `src/` and `public/`. Vite regenerates `docs/`, including the route entry files and `404.html`, on each build.
