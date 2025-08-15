# Marisa Olusemo — Portfolio Site

This is the portfolio website for Marisa Olusemo — musician, producer, audio engineer, singer, songwriter, and advocate.

## Structure

- `index.html`: Compact landing (hero-only). Nav links route to pages.
- `work.html`: Featured work, podcasts/broadcasting, gallery.
- `work/*`: Case studies (hero image, role, timeline, tools, credits).
- `advocacy.html`: Advocacy highlights and platforms.
- `blog/`: Blog index and posts.
- `contact.html`: Contact form (FormSubmit) and tips.

## Design & UX

- Modern Inter typography, subtle shadows, rounded cards.
- Sticky nav, active-link highlighting (location + IntersectionObserver).
- Dark mode toggle (persists in localStorage).
- Accessible focus-visible styles, labeled inputs, keyboardable carousel.

## Performance

- Lightweight YouTube embeds, minimal JS, sticky nav via CSS.
- Image optimization recommended: compress files in `Edited/` to 2000px max width and ~75% quality (AVIF or WebP preferred). Filenames unchanged to avoid broken links.

## Deployment

Static site; serve locally or host on GitHub Pages/Netlify. No build step required.

## Content updates

- Edit HTML files directly. Add new case studies under `work/` and link them from `work.html`.

## License

See `LICENSE`.
