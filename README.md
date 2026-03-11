# Lumi & Alan Wedding Website

**Live Site:** https://EmmaWLC.github.io/lumi-and-alan-wedding-site/
A personalized wedding invitation website for Lumi & Alan's wedding on June 27, 2026, at Thornewood Castle in Lakewood, Washington. Each guest receives a unique URL with their name, table assignment, and a interactive card-flip reveal experience.

## Features

- **Personalized Guest URLs** — Each guest gets a unique link (`?guestId=guest-001`) that displays their name and tailored content (e.g., local vs. traveling guest info)
- **Animated Entry Page** — SVG handwriting animation powered by OpenType.js with a calligraphic font
- **RSVP System** — Serverless form submission via [Web3Forms](https://web3forms.com/) with fields for attendance, dietary restrictions, and shuttle preferences
- **Table Reveal** — After RSVPing "yes," guests tap to flip an animated card revealing their table team name and group photo
- **Our Story** — A polaroid-style timeline of the couple's relationship
- **Event Details** — Venue info, schedule, dress code, travel & accommodation details
- **Admin Panel** — Bulk-generate and copy all personalized guest invitation URLs
- **Scroll Animations** — Fade-in effects triggered by Intersection Observer throughout the site

## Tech Stack

- **React 19** + **Vite** — Fast development and build
- **React Router v7** — Client-side routing with GitHub Pages SPA support
- **OpenType.js** — Dynamic SVG path rendering for handwriting animations
- **Web3Forms** — Serverless RSVP form backend
- **GitHub Pages** — Static site hosting with `gh-pages` deployment

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── FadeIn.jsx           # Scroll-triggered fade-in animation
│   ├── Footer.jsx           # Site footer with monogram
│   ├── HandwritingText.jsx  # SVG handwriting animation
│   ├── Header.jsx           # Sticky navigation bar
│   └── ScrollToTop.jsx      # Scroll reset on route change
├── pages/
│   ├── EntryPage.jsx        # Animated landing page
│   ├── MainPage.jsx         # Hub with links to all sections
│   ├── OurStoryPage.jsx     # Couple's timeline story
│   ├── DetailsPage.jsx      # Venue, schedule & travel info
│   ├── RsvpPage.jsx         # RSVP form + table card reveal
│   ├── GuestPage.jsx        # Guest URL redirect handler
│   └── AdminPage.jsx        # Guest link generator
├── data/
│   └── guests.js            # Guest list with table assignments
├── styles/                  # Page-specific CSS
└── utils/
    └── assets.js            # Asset path helpers
```

## Guest Data

73 guests across 8 tables. Each guest entry includes:

| Field   | Description                             |
| ------- | --------------------------------------- |
| `id`    | Unique identifier (e.g., `guest-001`)  |
| `name`  | Display name                            |
| `team`  | Table team name (e.g., "Sir Ollie")     |
| `table` | Table number (1–8)                      |
| `local` | Whether the guest is local to Seattle   |

## Deployment

The site is deployed to GitHub Pages at:  
**https://EmmaWLC.github.io/lumi-and-alan-wedding-site/**

A custom `404.html` handles SPA routing by redirecting all paths back to `index.html`.

## Acknowledgments

- [Web3Forms](https://web3forms.com/) — Free serverless form submission API
- [OpenType.js](https://opentype.js.org/) — JavaScript font parser for SVG handwriting animation
- [spa-github-pages](https://github.com/rafgraph/spa-github-pages) — SPA routing technique for GitHub Pages
- [Google Fonts](https://fonts.google.com/) — Aboreto, Cormorant Garamond, EB Garamond, Italianno, Marcellus
- [Thornewood Castle](https://www.thornewoodcastle.com/) — Wedding venue inspiration for the castle fairytale theme

## License

This project is for personal use. All content, photos, and guest data are private. The code structure may be referenced for inspiration, but please do not reuse personal content.
