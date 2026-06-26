# Tyler Lee Electrical Engineering Portfolio

Static GitHub Pages portfolio for Tyler Lee, focused on embedded systems, FPGA and digital design, robotics, hardware systems, and evidence-backed engineering research.

Live site:

```text
https://tylerlee102.github.io/website/
```

## Edit Content

Most public-facing content lives in `index.html`.

Update only verified information:

- Contact email, LinkedIn URL, location, and resume link
- Research paper status, final abstract, and final paper URL
- Project source repositories, demos, videos, reports, and reproduction notes
- Education, experience, research roles, technical team work, and skills

Public-facing placeholders should be removed before deployment. Use comments or "coming soon" language only when a fact is not ready for recruiters.

## Documents

Put downloadable documents in `assets/docs/`.

- `resume.pdf` for the resume button
- `mxfp4-gdn-draft.pdf` for the MXFP4 research section
- `copper-research-draft-review.pdf` for the COPPER case study
- Future project reports or one-page PDFs

After adding `assets/docs/resume.pdf`, add or update resume links in `index.html`.

## Images

Put project images in `assets/img/`.

Current assets:

- `mxfp4-gdn-datapath.png`
- `copper-review.jpg`

Use only real project images or diagrams. Do not add AI-generated images. Add `width`, `height`, and useful `alt` text for images shown directly on the page.

## Run Locally

Serve the folder from the repo root:

```powershell
python -m http.server 8000
```

Open:

```text
http://localhost:8000
```

## Deploy

This repo deploys through GitHub Actions using `.github/workflows/pages.yml`.

1. Push changes to `main`.
2. Confirm repository Settings -> Pages is set to GitHub Actions.
3. Wait for the `Deploy static site to GitHub Pages` workflow to finish.

The workflow stages only:

- `index.html`
- `.nojekyll`
- `assets/`

Any future public file outside those paths must be added to the workflow before it will publish.

## Evidence Rules

- Do not invent publications, internships, awards, metrics, benchmark results, or paper claims.
- Keep caveats visible where evidence is synthetic, simulation-only, draft-only, fallback-only, or visual-artifact-only.
- Add source repositories or reports before claiming runnable methodology for projects that are currently represented only by images.
- Verify chart labels and formulas before using a graph as a headline visual.
