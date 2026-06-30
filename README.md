# Clear Way Sewer & Drain — website

Static one-page marketing site for **Clear Way Sewer & Drain** (Yitzchok Kahan), serving the
Hudson Valley / Rockland / Orange County, NY. Built by BH Web Solutions.

- **Tagline:** Clear Blockages. Restore Flow.
- **Phone:** (845) 690-0020  ·  **Email:** info@clearwaysewer.com
- **Services:** Sewer & Drain Cleaning · Drain Snaking · Hydro Jetting · Camera Inspections · Residential & Commercial

## Structure
```
index.html            One-page site (hero, services, why-us, process, area, FAQ, contact)
thanks.html           Form success page (FormSubmit _next target)
favicon.svg
robots.txt / sitemap.xml
assets/css/styles.css
assets/js/main.js      Sticky header, mobile nav, FAQ accordion, scroll reveal
assets/img/            hero-pipe, trench, og-card (+ .webp), apple-touch-icon
```

## Contact form (FormSubmit)
The form posts to `https://formsubmit.co/info@clearwaysewer.com`.

> **ACTION NEEDED — activate FormSubmit once:** submit the form one time on the live site (or
> click the activation link FormSubmit emails to info@clearwaysewer.com). Until activated, the
> first submission shows FormSubmit's confirmation screen and emails aren't delivered.

- After activation you can swap the plain email in the form `action` for the FormSubmit
  **random alias** (Settings) to keep the address out of the page source.
- `_next` is set to `https://clearwaysewer.com/thanks.html` — update it if the live domain differs.

## Notes / to confirm with client
- **Phone:** card says **(845) 690-0020** (used site-wide); the order form listed 845-200-4177 — confirm which is correct.
- **Hours:** shown as "7 Days · Emergency Service" — replace with real hours if needed.
- **Service-area towns** (Monsey, Spring Valley, Suffern, Nanuet, New City, etc.) are assumed from the 845 area — adjust to the real coverage.
- Optional: add real job photos / Google reviews when available (reference sites lead with reviews + named techs).

## Images
Brand photos were extracted from the official business card PDF. WebP versions are served via
`<picture>` / CSS `image-set()` with JPG fallback. To regenerate WebP after replacing a JPG:
```
cwebp -q 82 -m 6 assets/img/NAME.jpg -o assets/img/NAME.webp
```

## Deploy
Static — host anywhere (GitHub Pages, Cloudflare Pages/Workers, Netlify, SiteGround, etc.).
Point `clearwaysewer.com` at the host. If served as a Cloudflare Worker, redeploy after each push.
