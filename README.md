<div align="center">

# Personal Portfolio (Astro)

Elegant, fast, and SEO-friendly personal portfolio built with Astro. Includes project highlights, career journey, and rich media backgrounds.

</div>

---

### Live

- Production: `https://guelbandeira.github.io/new-portfolio` 

### Tech Stack

- Astro 5 (static output)
- CSS for styling
- Javascript (optional, for specific DOM effects)
- Deployed to GitHub Pages (via GitHub Actions or `gh-pages`)

## Features

- **Blazing fast** static site with Astro
- **Responsive** design and modern UI
- **Project showcase** with `ProjectCard`
- **Career timeline** with `JourneyCard`
- **Video/image backgrounds** served from `public/`
- **Easy deployment** to GitHub Pages

## Project Structure

```text
/
├── public/                 # Static assets (served as-is)
│   ├── background_*.mp4
│   ├── favicon.svg
│   └── logo.webp
├── src/
│   ├── assets/
│   │   ├── img/            # Project images
│   │   └── fonts/          # Fonts (if any)
│   ├── components/
│   │   ├── Welcome.astro
│   │   ├── ProjectCard.astro
│   │   └── JourneyCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .github/workflows/deploy.yml  # GitHub Pages workflow (optional)
├── astro.config.mjs
├── package.json
└── README.md
```

## Getting Started

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Local dev server runs at `http://localhost:4321` by default.

### Build

```bash
npm run build
```

## Scripts


```text
npm run dev       # start local development server
npm run build     # build site to ./dist
npm run preview   # preview the production build locally
npm run deploy    # build + publish dist/ to GitHub Pages
```

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Acknowledgements

- Built with [Astro](https://docs.astro.build)
- Deployed with GitHub Pages
