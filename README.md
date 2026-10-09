# Phyres

Website for **Phyres**, an AI-hardware security startup focused on physical information leakage, fault injection and execution-integrity evaluation.

## View the website

The current published version is available at:

**https://phyres-site.vercel.app/**

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

## Editing workflow

1. Pull the latest `main` branch.
2. Create and test the changes locally.
3. Run the build check.
4. Commit the changes with a clear message.
5. Push to GitHub.

The hosted website is deployed separately from the GitHub repository. Pushing to GitHub updates the source code but does not by itself guarantee that the public website has been redeployed.
