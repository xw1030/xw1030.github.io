# Phyres

Website for **Phyres**, an AI-hardware security startup focused on physical information leakage, fault injection and execution-integrity evaluation.

## View the website

The GitHub Pages deployment target is:

**https://xw1030.github.io/**

The website exports to static HTML, CSS, JavaScript and images. It does not
require Vercel or a Node.js server in production.

## View locally

Requirements:

- Node.js 22.13 or newer
- pnpm

Clone the repository and start the development server:

```bash
git clone https://github.com/xw1030/xw1030.github.io.git
cd xw1030.github.io
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

To build the GitHub Pages version:

```bash
pnpm build:pages
```

`.github/workflows/pages.yml` builds and publishes `out/` whenever `main`
is updated in `xw1030/xw1030.github.io`. In that repository's Pages settings,
select **GitHub Actions** as the source. The website is served at the domain
root; no `/phyres` prefix is needed. The former preview URL remains a static
copy of the homepage.

For a future subdirectory deployment, set `NEXT_PUBLIC_BASE_PATH` at build
time. Public images and compiled scripts will use the same prefix.

## Editing workflow

1. Pull the latest `main` branch.
2. Create and test the changes locally.
3. Run the build check.
4. Commit the changes with a clear message.
5. Push to GitHub.

The publishing repository is `xw1030/xw1030.github.io`. Push there to deploy
automatically, then check the **Deploy GitHub Pages** workflow. The original
`xw1030/phyres-site` repository can remain a source mirror; its Pages job is
disabled. Vercel automatic deployment has been disconnected.
