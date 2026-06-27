# Tyler Lee Electrical / Computer Engineering Portfolio

Vite + React GitHub Pages portfolio for Tyler Lee, focused on FPGA/RTL, embedded systems, digital design, hardware engineering, robotics, and computer architecture research.

Live site:

```text
https://tylerlee102.github.io/website/
```

## Site Structure

Public-facing pages:

- `index.html` for the recruiter landing page
- `projects.html` for the project hub
- `project-mxfp4.html` for the MXFP4 FPGA/HLS case study
- `project-copper-line.html` for the COPPER-LINE architecture case study
- `about.html` for technical focus, skills, and resume notes
- `contact.html` for GitHub/contact links
- `src/data/portfolio.js` for verified portfolio content
- `src/components/` for the React UI
- `CONTENT_TODO.md` for missing details Tyler should provide

## Edit Content

Update only verified information:

- Contact email, LinkedIn URL, location, and resume link
- Research paper status, final abstract, and final paper URL
- Project source repositories, demos, videos, reports, and reproduction notes
- Education, experience, research roles, technical team work, and skills

Update the site only with details that are accurate and ready for recruiters.

## Documents

Put downloadable documents in `public/assets/docs/`.

- `resume.pdf` for the resume button
- `mxfp4-gdn-draft.pdf` for the MXFP4 research section
- `copper-research-draft-review.pdf` for the COPPER case study
- Future project reports or one-page PDFs

After adding `public/assets/docs/resume.pdf`, add verified resume links in `src/data/portfolio.js`.

## Images

Put project images in `public/assets/img/`.

Current assets:

- `favicon.svg`
- `mxfp4-gdn-datapath.png`
- `copper-review.jpg`

Use only real project images or diagrams. Do not add AI-generated images. Add `width`, `height`, and useful `alt` text for images shown directly on the page.

## Run Locally

Install dependencies and run Vite:

```powershell
npm install
npm run dev
```

Preview a production build:

```powershell
npm run build
npm run preview
```

## Deploy

This repo deploys through GitHub Actions using `.github/workflows/pages.yml`.

1. Push changes to `main`.
2. Confirm repository Settings -> Pages is set to GitHub Actions.
3. Wait for the `Deploy static site to GitHub Pages` workflow to finish.

The workflow installs dependencies with `npm ci`, runs `npm run build`, and uploads `dist/`.

Vite is configured with `base: "/website/"` so GitHub Pages asset paths resolve under the live repository path.

## Evidence Rules

- Do not invent publications, internships, awards, metrics, benchmark results, or paper claims.
- Keep caveats visible where evidence is synthetic, simulation-only, draft-only, fallback-only, or visual-artifact-only.
- Add source repositories or reports before claiming runnable methodology for projects that are currently represented only by images.
- Verify chart labels and formulas before using a graph as a headline visual.
