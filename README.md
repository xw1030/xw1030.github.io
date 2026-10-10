# Phyres

Website for **Phyres**, an AI-hardware security startup focused on physical information leakage, fault injection and execution-integrity evaluation.

## View the website

The GitHub Pages deployment target is:

**https://liuzrcc.github.io/phyres/**

The website exports to static HTML, CSS, JavaScript and images. It does not
require Vercel or a Node.js server in production.

## View locally

Requirements:

- Node.js 22.13 or newer
- pnpm

Clone the repository and start the development server:

```bash
git clone https://github.com/xw1030/phyres-site.git
cd phyres-site
pnpm install
pnpm dev
```

Open the local address shown in the terminal, normally:

```text
http://localhost:3000
```

## Main files

- `app/page.tsx` — entry point for the website homepage
- `app/black-white-preview/page.tsx` — website content and page structure
- `app/globals.css` — colours, typography and global styles
- `public/` — website images and visual assets
- `app/layout.tsx` — page metadata and global layout

For detailed instructions on changing text, fonts, colours, images and the
current black-and-white design, see
[`WEBSITE_EDITING_GUIDE.md`](./WEBSITE_EDITING_GUIDE.md).

## Build check

Before pushing a substantial change, run:

```bash
pnpm build
```

The result is static output in `out/`. To preview this root-path build:

```bash
python3 -m http.server 3000 --bind 127.0.0.1 --directory out
```

To build for the personal site's `/phyres/` subdirectory:

```bash
pnpm build:pages
```

Copy the contents of `out/` to `phyres/` in the
`liuzrcc/liuzrcc.github.io` repository, then publish that repository using its
existing GitHub Pages workflow. Preserve the rest of the personal website.
All images, fonts and compiled scripts use the `/phyres/` prefix.
If the destination uses Jekyll, its build must include `phyres/_next/` and
the exported `__next*.txt` files; do not disable Jekyll for an existing
Jekyll website. The former preview URL remains a static copy of the page.

## Editing workflow

1. Pull the latest `main` branch.
2. Create and test the changes locally.
3. Run the build check.
4. Commit the changes with a clear message.
5. Push to GitHub.

This repository contains the source. To publish an update, rebuild with
`pnpm build:pages` and update `phyres/` in the personal website repository.
Pushing source changes here alone does not update GitHub Pages.
