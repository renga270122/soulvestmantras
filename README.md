# Soulvest Mantras

A simple web app to explore gods, planets (Navagraha), and gurus with famous mantras/slokas and Gayatri mantras.

## Features
- Simplified Home quick access (God / Planet / Guru icon-first entry)
- Three mantra modes: Chant, Meditation, Learning
- Expanded famous + traditional mantra sets for each selected god/planet/guru
- Voice AI chant playback with Tamil/Sanskrit/Hindi accent options + loop
- AI-style personalized suggestions by weekday or preferred deity
- Mood-based UI adaptation (auto by time, or from user emotional input)
- Practical ritual guidance per selected god, planet, and guru
- God, planet, and guru wise cards
- Famous mantra/sloka + Gayatri mantra for each entry
- Mantra selector with dedicated meaning and usage guidance panel
- Main content shows only the selected mantra mode (Famous or Gayatri)
- Supports Beej Mantra mode for applicable deities
- Tamil mantra display mode (where available, with fallback)
- Quick Chant mode with large mantra text and japa counter (11/21/51/108)
- Mantra of the Day suggestion based on weekday tradition
- Favorites list with one-click reopen
- Persistent chant history with per-mantra total counts and last chanted time
- Daily Sankalpa Tracker with target, completion, and streak tracking
- Day/time reminders with optional browser notifications
- Temple bell + soft chime on chant session start/end (toggleable)
- Breath-led chant cue and 108 mala progress ring in Quick Chant Mode
- Blessing card generator for download + Web Share API sharing (with fallback)
- Offline mode with service worker (caches core app files and visited images)
- Devanagari + transliteration display toggle
- Search by name/mantra/purpose
- Select God/Planet/Guru and view image + purpose/history brief
- Uses Tamil Nadu style image preference for selected god/planet/guru
- One-click copy buttons
- Remembers last selection and chant progress in browser
- Full page view for the selected god/planet/guru
- You Should Know section with practical chanting guidance
- Responsive layout tuned for mobile, tablet, and desktop use

## Run
No frontend build tools needed.

1. Open `index.html` in your browser.
2. Search for a deity (for example: Shiva, Lakshmi, Hanuman).
3. Select category and entry to view image and brief history.
4. Choose mantra type (Famous or Gayatri) to view detailed meaning and usage guidance.
5. Use copy buttons to share famous mantra, Gayatri mantra, or full text.

## Deploy (GitHub Pages)
This repository is configured to auto-deploy to GitHub Pages using GitHub Actions.

### 1) Push to GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 2) Enable Pages in repository settings
1. Open your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Source: GitHub Actions**.
4. Wait for the workflow **Deploy static site to GitHub Pages** to finish.

### 3) Custom domain (already configured)
- The `CNAME` file is set to: `mantras.soulvest.ai`
- In your DNS provider, create a `CNAME` record:
	- **Host/Name**: `mantras`
	- **Value/Target**: `<your-github-username>.github.io`

### 4) Verify HTTPS
In **Settings → Pages**, enable **Enforce HTTPS** after DNS resolves.

### 5) Update flow
For future updates, just push to `main`; deployment runs automatically.

## Notes
- This app includes a curated list of commonly used forms.
- Different traditions may use variant recitations; verify with your sampradaya/guru for strict liturgical use.
- For offline usage, open the app once while online so core assets can be cached by the browser.

## Curation References
- Dakshinamurti overview and hymn links: https://en.wikipedia.org/wiki/Dakshinamurti
- Tamil devotional text sources (recommended for cross-checking variants): https://ta.wikisource.org/
- Navagraha dhyana sloka traditions (verify with your guru/temple parampara before strict liturgical use).
