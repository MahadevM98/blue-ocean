# The Blue Ocean — agency website

A fast, static, multi-page site. No build step, no dependencies. Every visual is inline SVG, so there are no large image files to host.

## Pages
- `index.html` — Home (hero, red-ocean contrast, science stack, process, Ocean Scan CTA)
- `methodology.html` — The three disciplines + cited approach
- `case-studies.html` — Anonymised results
- `contact.html` — Ocean Scan lead-capture form
- `assets/` — `styles.css`, `script.js`, `favicon.svg`

## Deploy to GitHub Pages

**Option A — via the website (no command line)**
1. Create a new repository on GitHub (e.g. `blue-ocean`).
2. Click **Add file → Upload files** and drag in *all* files here, including the `assets` folder and the hidden `.nojekyll` file.
3. Commit. Then go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source = Deploy from a branch**, branch = `main`, folder = `/ (root)`. Save.
5. Wait ~1 minute. Your site is live at `https://<your-username>.github.io/<repo-name>/`.

**Option B — via git**
```bash
git init
git add .
git commit -m "The Blue Ocean website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
Then enable Pages in **Settings → Pages** as in step 4 above.

## Notes
- The contact form is front-end only (shows a confirmation on submit). To collect real leads, point it at HubSpot, Typeform, or Formspree — see the comment in `assets/script.js` and the `<form>` in `contact.html`.
- Fonts (Poppins + Lora) load from Google Fonts via CDN; the visitor's browser fetches them.
- Colours, type, and the single-boat motif follow the project brief exactly. Red appears only inside the isolated "red ocean" contrast diagram.
