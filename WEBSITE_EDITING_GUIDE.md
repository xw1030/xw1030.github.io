# Phyres.ai website editing guide

This guide explains where to edit the website's text, fonts, colours, images,
links and layout, and how to preview and publish changes safely.

## 1. Current website version

The black-and-white design is the only homepage. The public website is:

<https://phyres-site.vercel.app/>

The root entry point, `app/page.tsx`, loads the implementation from
`app/black-white-preview/page.tsx`. The former `/black-white-preview` URL
redirects permanently to `/`.

When editing the website, use the files under `app/black-white-preview/`.

## 2. The files you will use most often

### Change wording, names, links or page sections

Edit:

```text
app/black-white-preview/page.tsx
```

This file contains:

- navigation labels;
- hero text and buttons;
- service names and descriptions;
- evaluation workflow steps;
- publications and evidence links;
- sector and platform names;
- team names, roles, biographies and profile links;
- email addresses and the email subject line;
- the order of all page sections.

### Change the main font

Edit:

```text
app/layout.tsx
app/globals.css
```

`app/layout.tsx` loads the fonts. The site currently uses **Geist** and
**Geist Mono** from `next/font/google`.

`app/globals.css` applies the font globally:

```css
body {
  font-family: var(--font-geist-sans), Arial, sans-serif;
}
```

To use another Google font, import it in `app/layout.tsx`, give it a CSS
variable, add that variable to the `<body>` class, and reference it in
`app/globals.css`.

Example using Inter:

```tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

// In <body>:
className={`${inter.variable} antialiased`}
```

```css
body {
  font-family: var(--font-inter), Arial, sans-serif;
}
```

### Change font size, spacing, alignment or local colours

The black-and-white page imports these style files in this order:

```text
preview.module.css
full.module.css
tuning.module.css
service.module.css
adjustments.module.css
requested-overrides.module.css
```

Later files are used for final adjustments and can override earlier files.
For a small new visual change, prefer:

```text
app/black-white-preview/requested-overrides.module.css
```

For styles that belong to a specific section, use:

- `service.module.css` — the three service titles and descriptions;
- `adjustments.module.css` — workflow, evidence, company and team refinements;
- `requested-overrides.module.css` — header, logo, navigation and final overrides;
- `preview.module.css` — the base page, header, hero, service and footer design;
- `full.module.css` — workflow, evidence, sectors, company and contact sections;
- `tuning.module.css` — page density, responsive spacing and section sizing.

If a change appears to have no effect, search for the same property in the
files imported later. A later rule or a rule containing `!important` is
probably overriding it.

## 3. How to change common items

### Edit the main headline

Open `app/black-white-preview/page.tsx` and search for:

```tsx
Secure AI,
```

Edit the words between the tags. Keep `<br/>` where a forced line break is
required.

### Edit service text

Search for:

```tsx
Fault injection & integrity
```

The three service blocks are inside the section with `id="evaluate"`.

### Edit workflow steps

At the beginning of `app/black-white-preview/page.tsx`, edit the `workflow`
array:

```tsx
const workflow = [
  ['01', 'Threat definition', 'Define protected assets...'],
  // ...
];
```

### Add or edit a publication

Edit the `evidence` array near the top of
`app/black-white-preview/page.tsx`. Each entry contains:

```text
publication, paper title, attack type, hardware, demonstrated result, URL
```

Copy an existing entry, change all six fields and retain the surrounding
brackets and comma.

### Edit team information

Edit the `team` array near the top of
`app/black-white-preview/page.tsx`. Each team member contains:

```text
name, title, short biography, profile URL
```

Use an empty string for the profile URL if the name should not be linked.

### Edit email addresses

Search `app/black-white-preview/page.tsx` for:

```text
xuewang1129@hotmail.com
peter.horvath2@ru.nl
```

The `mailto` constant near the top controls the main contact buttons. The
footer contains the two displayed addresses separately, so update both
locations when an address changes.

### Change text colour

For a section-specific colour, find the relevant CSS class and change its
`color` value:

```css
.example {
  color: #e3000b;
}
```

The principal global colours are defined as CSS variables in
`app/globals.css` under `:root`, for example:

```css
:root {
  --background: #06152f;
  --foreground: #eef6ff;
  --primary: #1269c7;
  --accent: #38bdf8;
}
```

Changing a global variable may affect many components. For a single heading
or paragraph, change its local CSS module class instead.

Current visual accents include:

| Purpose | Colour |
| --- | --- |
| Primary red accent | `#e3000b` |
| Black/dark text | `#090909` or the relevant local value |
| White background | `#ffffff` or the relevant local value |
| Blue legacy/global accent | `#38bdf8` |

### Change font size

Find the relevant class in the CSS modules and edit `font-size`. Responsive
headings commonly use `clamp()`:

```css
font-size: clamp(3rem, 5.4vw, 5.5rem);
```

The three values mean minimum size, responsive preferred size and maximum
size. For ordinary text, use `rem`, for example:

```css
font-size: 1rem;
```

### Change spacing

The common CSS properties are:

```css
margin-top: 24px;
padding: 48px;
gap: 16px;
line-height: 1.4;
```

Use browser developer tools to test a value before saving it in the relevant
CSS module.

### Change an image

Images are stored in:

```text
public/
```

Important files include:

- `public/hero-em-signal.png` — electromagnetic-signal hero background;
- `public/what-we-evaluate-chip.png` — chip illustration;
- `public/favicon.svg` — browser icon.

To replace an image without changing code, use the same filename and image
format. To use a new filename, change its `/filename` reference in
`app/black-white-preview/page.tsx` as well.

### Change the browser title and description

Edit the `metadata` object in:

```text
app/layout.tsx
```

## 4. Preview changes locally

From the repository directory:

```bash
cd /path/to/phyres-site
git pull origin main
pnpm install
pnpm dev
```

Open:

```text
http://localhost:3000/
```

The development server normally updates the page automatically after a file
is saved.

Before committing, verify the production build:

```bash
pnpm build
```

Also inspect the page at desktop and mobile widths. Pay particular attention
to forced one-line text such as publication headings and team biographies,
because long wording can overflow on smaller screens.

## 5. Commit and push changes

Check what changed:

```bash
git status
git diff
```

Commit only the intended files:

```bash
git add app/black-white-preview/page.tsx \
  app/black-white-preview/requested-overrides.module.css
git commit -m "Update website copy and styling"
git push origin main
```

Adjust the `git add` list to match the files actually edited. Do not use
`git add .` when unrelated drafts or image concepts are present.

## 6. Vercel deployment and cached pages

Vercel is connected to the GitHub repository. A push to `main` should trigger
a new production deployment. Check the Vercel deployment status before
assuming the new version is live.

Current website URL:

<https://phyres-site.vercel.app/>

If another person still sees an old version:

1. confirm that the latest GitHub commit appears in Vercel as **Ready**;
2. open the root website URL;
3. perform a hard refresh or open the page in a private browser window;
4. verify that the browser has followed the redirect to `/`.

## 7. Recommended future cleanup

The black-and-white design contains several layers of CSS overrides.
They are documented above, but consolidating them later into fewer,
well-named style files will make future editing easier and reduce conflicting
rules.
