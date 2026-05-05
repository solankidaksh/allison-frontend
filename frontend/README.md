# Arkin Design — Frontend

Marketing website for **Arkin Design** (luxury interior design, Gurgaon). Built with React 19, Tailwind CSS, Framer Motion and Swiper.

## Stack
- React 19 + Create React App (CRACO)
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- Swiper (hero image slider)
- Lucide React (icons)

## Local development

```bash
yarn install
cp .env.example .env       # fill in REACT_APP_BACKEND_URL
yarn start                 # http://localhost:3000
```

## Production build

```bash
yarn build                 # output → /build
```

## Environment variables

| Key | Description |
|-----|-------------|
| `REACT_APP_BACKEND_URL` | Base URL of the FastAPI backend (e.g. `https://arkin-design-backend.onrender.com`). The site does not currently call the backend, but the variable must be set for any future API calls. |

## Deploy to Vercel

1. Push this folder to a GitHub repo (e.g. `interior-design-frontend`).
2. On [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects `vercel.json` (Create React App preset). If not, set:
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `yarn install`
4. Add environment variable `REACT_APP_BACKEND_URL` (Render backend URL).
5. **Deploy**.

After the backend is deployed on Render, update the `CORS_ORIGINS` env var on Render to include your Vercel domain.

## Project structure

```
src/
├── App.js                   # Routes + main page composition
├── index.js                 # React entry
├── index.css                # Tailwind + global styles
├── data/site.js             # Static content: slides, projects, testimonials, services, FAQs
└── components/
    ├── Navigation.jsx       # Sticky nav + mobile menu
    ├── Hero.jsx             # Swiper hero with Ken Burns
    ├── Marquee.jsx          # Editorial marquee strip
    ├── About.jsx            # Studio + stats + services
    ├── Projects.jsx         # Asymmetric project gallery
    ├── Testimonials.jsx     # Client quote grid
    ├── FAQ.jsx              # Accordion FAQ section
    └── Contact.jsx          # Email / phone / studio + footer
```
