# Rajib Bora Personal Webpage & ICDT Architecture

## 1. System Overview

This repository (`rajibbora_com`) hosts the code for Rajib Bora's personal webpage, which serves as a solitary, authoritative representation of professional identity and a proof-of-concept for the **Integrated Cognitive Digital Twin (ICDT)** principles. 

The project itself is designed as a minimalistic static website optimized for simplicity, portability, and longevity. It avoids complex build tools or backend infrastructures, keeping the focus entirely on high-signal content delivery.

## 2. Directory Structure

- **`docs/`**: The main public-facing document root. Designed to be easily served via static hosting systems like GitHub Pages (indicated by the presence of a `CNAME` file).
  - **`index.html`**: The primary landing page detailing the philosophical approach ("Operator → Architect → Builder") and providing an entry map to projects and writing.
  - **`about.html`**: The background and philosophical grounding of the author.
  - **Markdown docs** (`*.md`): Curated ideas and synthesis (e.g., `mit-xpro-synthesis.md`, `project-icdt.md`).
- **`docs/private/`**: A protected subdirectory containing sensitive or targeted briefs.
  - **`gate.js`**: The client-side mechanism protecting the private routes.
  - **`icdt-architecture.html` / `oilfield.html`**: Private briefs protected by the gate.
- **`site/`**: An additional directory (potentially reserved for static generation inputs/outputs if a generator like MkDocs or Hugo is utilized in the future, though currently, pure HTML is used).
- **`README.md`**: Acts as the project charter and development guide, ensuring all modifications align with the site's intended tone, purpose, and long-term trajectory.

## 3. Technology Stack & Patterns

- **Core Web Technologies**: Raw HTML and inline/internal CSS (`<style>` blocks).
- **Minimal Dependencies**: The site imports zero external CSS frameworks (like Bootstrap or Tailwind) or heavy frontend libraries (like React or Vue.js). It relies strictly on modern native CSS features (`system-ui` fonts, CSS variables, semantic tags).
- **Client-Side "Gating"**: Authentication is implemented conceptually via `gate.js`. 
  - It intercepts DOM loads on private HTML files.
  - It displays a passcode form which hard-checks against a static code (`icdt-ops-2026`).
  - Access state is stored natively in `sessionStorage` (`icdt_access_granted`), granting uninterrupted access strictly for the duration of the current browser tab session.
  - *Note: This is a deterrence layer ensuring "intentional outreach," not cryptographically secure authorization.*

## 4. ICDT (Integrated Cognitive Digital Twin) Embedded Concepts

The content hosted on the site outlines a sophisticated architectural mechanism—the ICDT. While the site itself is simple, it describes a massive conceptual system:

### Twin-Artifact-Lens Model
- **Twin**: The persistent digital identity and history of an asset.
- **Artifacts**: Verified states, telemetry logs, and state evidence.
- **Lenses**: Role-specific, governed views ensuring accurate distribution of data based on operational need.

### System Layers
1. **Data Ingestion & Curation**: Validates and normalizes raw telemetry into structured context.
2. **Memory Layer**: Graph-based state storage ensuring an auditable chain of custody.
3. **Workflow Layer**: Contextual awareness applying lifecycle stages (e.g., Drilling vs. Completions) to adjust rulesets.
4. **Agent Orchestration**: Narrow-scope autonomous agents interpreting specific streams (e.g., Torque & Drag constraints) orchestrated safely.
5. **Governance & Presentation**: Permissioning and Lenses.

### Logical Paradigm
Operating on a dual-logic track:
- **Deterministic**: Hard rules, physics validation, and engineering guardrails.
- **Probabilistic**: AI, LLM trends, and anomaly detection. 
- *Core rule*: Probabilistic logic never overrides deterministic safety checks.

## 5. Deployment Posture

The application is deployed as a static layer. Content updates translate directly into structural changes to the HTML or Markdown, favoring "longevity and portability" per the project charter. Revisions are infrequent, meaningful, and rigorously version-controlled.
