# mattblack.io

Personal portfolio website for [Matt Black](https://mattblack.io) — senior software engineer specializing in full-stack web and mobile development.

Built with Next.js (Pages Router), Tailwind CSS, and Framer Motion. Deployed on Netlify.

## Development

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
yarn build
yarn start
```

## Content

Resume content lives in [`utils/section-data.js`](utils/section-data.js). Site-wide settings (name, bio, contact) are in [`utils/global-data.js`](utils/global-data.js) and [`utils/site-config.js`](utils/site-config.js).

## Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (default: `https://mattblack.io`) |
| `BLOG_NAME` | Display name |
| `BLOG_JOB_TITLE` | Job title for SEO / structured data |
| `BLOG_FOOTER_TEXT` | Footer text |
| `BLOG_EMAIL` | Contact email |
| `BLOG_LINKEDIN` | LinkedIn profile URL |
