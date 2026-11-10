# Spatial School · 3D Vision

An interactive, module-based curriculum from spatial mathematics to current 3D research.

- **11 modules**, following the requested mathematics, graphics, geometric vision, geometry processing, reconstruction, estimation/SLAM, learned 3D, rendering, simulation, manipulation, and spatial-intelligence sequence.
- **112 lessons**: 24 expanded original tutorials plus 88 course-study guides paired with complete original source material.
- **372 source-material links** across MIT, Stanford, CMU, PBRT, and a Lie-groups reference. Availability and access are controlled by the original publishers.
- LaTeX through locally bundled KaTeX, including live lab equations and diagram labels.
- 11 downloadable Python experiments, worked examples and exercise solutions, module exit projects, an interactive prerequisite DAG, search, quizzes, notes, and browser-local progress.

The external full lectures/chapters are the main text for course-study lessons. The site does not claim to reproduce entire courses or provide unrestricted access to publisher-controlled material. The guides, sequencing, examples, and interface are original. Sources were reviewed November 10, 2026. Research coverage is a dated selection, not a live or exhaustive ranking. No university affiliation.

## Run

Requires Node.js. No package installation or build step.

```powershell
node verify.mjs
node preview.mjs
```

Open http://127.0.0.1:4173. Any static host can serve the dist directory. Navigation uses URL hashes.

## Study formats

Core tutorials include an original explanation, derivations, worked examples, exercises and solutions, common errors, and a feedback quiz. Course-study lessons include an orientation, key equation, active-reading procedure, specific practice task and reasoning, and a full original lecture/chapter link. Optional embedding depends on publisher permissions; a direct link is always present. Module projects include a common review rubric.

Notes and progress use localStorage and do not sync across devices or origins. If storage is unavailable, the site remains usable for the current session. KaTeX scripts, CSS, fonts, and its MIT license are included under dist/vendor/katex. The optional Google Fonts import has system-font fallbacks.

## Source files

- dist/content.js: core lesson records and research resources.
- dist/modules.js: 11-module structure and 88 course-study guides.
- dist/deep-lessons.js: expanded tutorial derivations, examples, solutions, and pitfalls.
- dist/courses.js: verified official course indexes and source links.
- dist/experiments.js: downloadable Python/NumPy code examples.
- dist/math.js and dist/prose-math.js: LaTeX rendering and prose notation.
- dist/app.js and dist/app-modules.js: interface, labs, full-page readers, and progress.
- verify-curriculum.mjs: content, graph, LaTeX, reference, and lab-math checks; regenerates LEARNING_GRAPH.md.

See [LEARNING_GRAPH.md](LEARNING_GRAPH.md) for the prerequisite diagram and complete module lesson lists.
