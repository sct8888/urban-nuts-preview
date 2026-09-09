# Urban Nuts — Website Preview

Stakeholder preview of a modernized Urban Nuts e-commerce experience (Cape Town). This is **not** the live store.

- **Live store:** [urban-nuts.co.za](https://urban-nuts.co.za/)
- **Preview (GitHub Pages):** [sct8888.github.io/urban-nuts-preview](https://sct8888.github.io/urban-nuts-preview/)

## What’s included

- Static multi-page site: Home, Shop, Product detail, About, Contact
- Black & white premium design (DM Sans + Instrument Serif)
- Persistent free-delivery messaging for orders **over R1 000**
- Demo product catalogue with ZAR pricing and size variants
- Cart drawer + checkout modal (localStorage; PayFast / Ozow / card placeholders — no real payments)
- Six Cape Town store locations on Contact

## Local preview

Open any HTML file in a browser, or serve the folder:

```bash
cd urban-nuts-preview
python3 -m http.server 8080
```

Then visit `http://localhost:8080/`.

## GitHub Pages

This repo is configured for **GitHub Pages** from the `main` branch root (`/`).

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Save — site available at `https://sct8888.github.io/urban-nuts-preview/`

A `.nojekyll` file is included so asset paths are served as-is. Pages use relative paths and a `<base href="./">` so the project-site base path works.

## Tech

Pure HTML, CSS, and JavaScript. No build step required.

## Contact (brand)

- Phone: 083 627 7992  
- Email: info@urbannuts.co.za  
