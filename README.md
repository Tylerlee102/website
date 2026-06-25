# Personal Resume Portfolio

A lightweight static resume and portfolio website designed for GitHub Pages. It uses plain HTML and CSS, so there is no build step, JavaScript dependency, or backend.

## Edit The Content

Update `index.html` with your real:

- Name, email, GitHub, LinkedIn, and location
- Resume PDF link
- Research paper status, final abstract, and final paper URL if the draft changes
- Project GitHub URLs, live demo URLs, videos, and any final report links
- Experience, education, research, leadership, and skill details

Replace the placeholder text before publishing.

The current project/research entries are based on local artifacts found near this website folder:

- Native MXFP4 Gated DeltaNet FPGA Accelerator
- Europa Radar Flyby Model
- SDC-Spec Testbed
- COPPER Prefetching Research

The entries intentionally keep caveats visible where the source artifacts describe synthetic-only results, fallback-only evidence, or bounded research scope.

## Run Locally

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy To GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

1. Push these files to your GitHub repository on the `main` branch.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Set the source to **GitHub Actions**.
5. Push to `main` or run the workflow manually.

The site uses relative asset paths, so it works for both user sites and project sites. The workflow stages only `index.html`, `.nojekyll`, and `assets/` into `_site` before deploying.

If you use GitHub CLI:

```powershell
gh repo create resume-portfolio --public --source . --remote origin --push
```

Then enable Pages with GitHub Actions in the repository settings.

## File Structure

```text
.
|-- index.html
|-- .nojekyll
|-- .gitignore
|-- .github
|   `-- workflows
|       `-- pages.yml
|-- assets
|   |-- css
|   |   `-- styles.css
|   |-- docs
|   |   |-- README.md
|   |   |-- copper-conference-draft-review.pdf
|   |   `-- mxfp4-gdn-draft.pdf
|   |-- img
|   |   |-- copper-review.jpg
|   |   |-- europa-dashboard.png
|   |   |-- mxfp4-gdn-datapath.png
|   |   `-- sdc-coverage.png
`-- README.md
```

## Notes

- The page displays copied chart/dashboard images only. It does not recompute formulas or chart data.
- Responsive checks were run for narrow phones, common iPhone/Android widths, large phones, and phone landscape.
- Add only verified project results, publications, awards, and metrics.
- Keep new image assets compressed for fast GitHub Pages loading.
