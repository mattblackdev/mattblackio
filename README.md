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
| `OPENAI_API_KEY` | **Required** for the résumé chat assistant. Server-side only — never exposed to the browser. |
| `OPENAI_MODEL` | Optional. Chat model for the assistant (default: `gpt-4o-mini`). |

## Résumé chat assistant

The homepage includes a subtle floating action button (bottom-right) that opens a chat window powered by [`components/ChatWidget.js`](components/ChatWidget.js). Questions are sent to the serverless route [`pages/api/chat.js`](pages/api/chat.js), which grounds the LLM in the résumé content (via [`utils/resume-context.js`](utils/resume-context.js)) and instructs it to answer only questions about Matt's background, declining anything off-topic.

To enable it, set `OPENAI_API_KEY` in your environment:

- **Local:** add it to a `.env.local` file (git-ignored): `OPENAI_API_KEY=sk-...`
- **Netlify:** add it under Site settings → Environment variables. Netlify's Next.js runtime runs `pages/api/*` as serverless functions automatically.

To use a different provider (e.g. Anthropic), swap the request logic in [`pages/api/chat.js`](pages/api/chat.js).
