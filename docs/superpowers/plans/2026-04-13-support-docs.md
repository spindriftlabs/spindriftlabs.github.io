# Support Docs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add four customer-facing documentation pages for Old Skool Board to the spindriftlabs.net Jekyll site, update the site header nav, and add a docs link to the landing page support section.

**Architecture:** All pages use the existing `.legal-page` CSS class (same structure as privacy/security pages). The docs index page gets a small additional `.docs-index-links` CSS component. No new layout files needed.

**Tech Stack:** Jekyll (GitHub Pages), SCSS, HTML/Markdown

---

## File structure

| Action | File | Responsibility |
|--------|------|----------------|
| Modify | `_sass/main.scss` | Add `.docs-index-links` CSS component for the index page card links |
| Modify | `_layouts/default.html` | Add "Docs" link to site header nav |
| Create | `docs/index.md` | Docs index — links to all three doc pages with descriptions |
| Create | `docs/getting-started.md` | Requirements, install, opening the board, board selection, permissions |
| Create | `docs/using-the-board.md` | Board layout, moving items, inline create, opening issues, settings |
| Create | `docs/release-notes.md` | v1.0 entry with features and known limitations |
| Modify | `index.md` | Add Documentation row to support section |

---

## Task 1: Add docs nav link and docs index CSS

**Files:**
- Modify: `_layouts/default.html`
- Modify: `_sass/main.scss`

- [ ] **Step 1: Add "Docs" to site header nav**

In `_layouts/default.html`, find the `<nav>` block:

```html
      <nav>
        <a href="mailto:support@spindriftlabs.net">Support</a>
        <a href="{{ '/security' | relative_url }}">Security</a>
        <a href="{{ '/privacy' | relative_url }}">Privacy</a>
      </nav>
```

Replace with:

```html
      <nav>
        <a href="{{ '/docs/' | relative_url }}">Docs</a>
        <a href="mailto:support@spindriftlabs.net">Support</a>
        <a href="{{ '/security' | relative_url }}">Security</a>
        <a href="{{ '/privacy' | relative_url }}">Privacy</a>
      </nav>
```

- [ ] **Step 2: Add `.docs-index-links` CSS to `_sass/main.scss`**

Append at the end of `_sass/main.scss` (before the closing of the file):

```scss
/* ─── Docs index ─────────────────────────────────────────── */

.docs-index-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;

  a {
    display: block;
    padding: 1rem 1.25rem;
    border: 1px solid $divider;
    border-radius: 4px;
    text-decoration: none;
    color: $text;

    &:hover {
      background: $hover-bg;
      color: $text;
    }

    strong {
      display: block;
      margin-bottom: 0.2rem;
    }

    span {
      font-size: 0.875rem;
      color: $muted;
    }
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add _layouts/default.html _sass/main.scss
git commit -m "Add Docs nav link and docs index link styles"
```

---

## Task 2: Create docs index page

**Files:**
- Create: `docs/index.md`

- [ ] **Step 1: Create `docs/index.md`**

```markdown
---
layout: default
title: Documentation
description: Help and documentation for Old Skool Board.
permalink: /docs/
---

<section class="legal-page">
  <div class="container">
    <a href="{{ '/' | relative_url }}" class="legal-back">&larr; Home</a>
    <div class="legal-header">
      <h1>Old Skool Board documentation</h1>
    </div>
    <div class="docs-index-links">
      <a href="{{ '/docs/getting-started' | relative_url }}">
        <strong>Getting started</strong>
        <span>Requirements, installation, and first-time setup</span>
      </a>
      <a href="{{ '/docs/using-the-board' | relative_url }}">
        <strong>Using the board</strong>
        <span>Board layout, moving items, inline creation, and settings</span>
      </a>
      <a href="{{ '/docs/release-notes' | relative_url }}">
        <strong>Release notes</strong>
        <span>What's new in each version</span>
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify file is valid**

```bash
cd ~/Development/SpinDriftLabsGitHub
cat docs/index.md
```

Confirm: frontmatter present, three links present, no typos.

- [ ] **Step 3: Commit**

```bash
git add docs/index.md
git commit -m "Add docs index page"
```

---

## Task 3: Create Getting started page

**Files:**
- Create: `docs/getting-started.md`

- [ ] **Step 1: Create `docs/getting-started.md`**

```markdown
---
layout: default
title: Getting started
description: How to install and set up Old Skool Board for Jira.
permalink: /docs/getting-started
---

<section class="legal-page">
  <div class="container">
    <a href="{{ '/docs/' | relative_url }}" class="legal-back">&larr; Docs</a>
    <div class="legal-header">
      <h1>Getting started</h1>
      <p class="legal-meta">Old Skool Board</p>
    </div>
    <div class="legal-body">

<h2>Requirements</h2>

<ul>
  <li><strong>Jira Cloud</strong> — Server and Data Center are not supported</li>
  <li><strong>Desktop browser</strong> — mobile and tablet are not supported</li>
  <li><strong>Parent items with sub-tasks</strong> — the board's value comes from that relationship; it has limited use for flat issue structures</li>
  <li><strong>An existing Jira board</strong> — Kanban or Scrum — in the project you want to view</li>
</ul>

<hr>

<h2>Installing</h2>

<p>Find Old Skool Board on the <a href="https://marketplace.atlassian.com/apps/3925154041/" target="_blank" rel="noopener">Atlassian Marketplace</a> and install it to your Jira Cloud site. Once installed, it appears as a page inside your Jira projects.</p>

<hr>

<h2>Opening the board</h2>

<p>Navigate to a Jira project and look for <strong>Old Skool Board</strong> in the left sidebar under the project pages. Click it to open the board.</p>

<p><em>[Screenshot: Jira project sidebar with Old Skool Board visible in the left nav]</em></p>

<hr>

<h2>Selecting a board</h2>

<p>The first time you open Old Skool Board in a project, you'll be prompted to select a Jira board to mirror. Old Skool Board shows the same issues as the board you select — pick the one your team uses day-to-day.</p>

<p>Your selection is saved per-project. You can change it later from the settings panel.</p>

<p><em>[Screenshot: Board selector / first-time setup prompt]</em></p>

<hr>

<h2>Required Jira permissions</h2>

<p>Old Skool Board uses your existing Jira permissions — it can only show and move issues you already have access to. No admin permissions are required to use the board.</p>

<p>The app requests the following Jira scopes on install:</p>

<ul>
  <li><code>read:jira-work</code> — read issues, boards, and workflows</li>
  <li><code>write:jira-work</code> — create issues and trigger workflow transitions</li>
  <li><code>storage:app</code> — save your board preferences</li>
</ul>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify file is valid**

```bash
cat ~/Development/SpinDriftLabsGitHub/docs/getting-started.md
```

Confirm: five sections present, two screenshot placeholders present, scopes list present.

- [ ] **Step 3: Commit**

```bash
git add docs/getting-started.md
git commit -m "Add getting started doc page"
```

---

## Task 4: Create Using the board page

**Files:**
- Create: `docs/using-the-board.md`

- [ ] **Step 1: Create `docs/using-the-board.md`**

```markdown
---
layout: default
title: Using the board
description: How to use Old Skool Board — layout, moving items, creating issues, and settings.
permalink: /docs/using-the-board
---

<section class="legal-page">
  <div class="container">
    <a href="{{ '/docs/' | relative_url }}" class="legal-back">&larr; Docs</a>
    <div class="legal-header">
      <h1>Using the board</h1>
      <p class="legal-meta">Old Skool Board</p>
    </div>
    <div class="legal-body">

<h2>Board layout</h2>

<p>The board has three columns — <strong>To Do</strong>, <strong>In Progress</strong>, and <strong>Done</strong> — derived from Jira status categories. In Progress is the dominant workspace: each parent item shows its sub-tasks arranged into horizontal lanes that match your Jira sub-task workflow.</p>

<p>Parent items appear as yellow cards. Sub-tasks appear as blue cards.</p>

<p><em>[Screenshot: Full board view — To Do / In Progress / Done with sub-task lanes visible]</em></p>

<hr>

<h2>Moving parent items</h2>

<p>Drag a parent item between To Do, In Progress, and Done. This triggers the same Jira workflow transition as moving a card on your native Jira board.</p>

<p>If a transition is not permitted by your workflow, you'll see an error message and the card returns to its original position.</p>

<p><em>[Screenshot: Parent item mid-drag between columns]</em></p>

<hr>

<h2>Moving sub-tasks</h2>

<p>Drag a sub-task between lanes inside the In Progress workspace. Each lane corresponds to a status in your Jira sub-task workflow. You can also reorder sub-tasks within a lane by dragging them up or down.</p>

<p><em>[Screenshot: Sub-task mid-drag between lanes]</em></p>

<hr>

<h2>Creating items inline</h2>

<p>Click <strong>+ Add</strong> at the bottom of any column to create a new parent item, or at the bottom of a sub-task lane to create a sub-task. Type a title and press Enter to save, or Escape to cancel.</p>

<p><em>[Screenshot: Inline create composer open in a column]</em></p>

<hr>

<h2>Opening an issue</h2>

<p>Click any card title to open the full Jira issue. It will open in a new tab.</p>

<hr>

<h2>Hiding old completed items (Kanban only)</h2>

<p>On Kanban boards, you can hide parent items that have been in Done for longer than a set period. Click the <strong>settings cog</strong> in the top bar and choose a retention period: 1 week, 2 weeks, 4 weeks, or Keep all.</p>

<p>This setting is saved per-board to your account. It has no effect on Scrum boards.</p>

<p><em>[Screenshot: Settings panel open showing the retention dropdown]</em></p>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify file is valid**

```bash
cat ~/Development/SpinDriftLabsGitHub/docs/using-the-board.md
```

Confirm: six sections present, five screenshot placeholders present.

- [ ] **Step 3: Commit**

```bash
git add docs/using-the-board.md
git commit -m "Add using the board doc page"
```

---

## Task 5: Create Release notes page

**Files:**
- Create: `docs/release-notes.md`

- [ ] **Step 1: Create `docs/release-notes.md`**

```markdown
---
layout: default
title: Release notes
description: What's new in each version of Old Skool Board.
permalink: /docs/release-notes
---

<section class="legal-page">
  <div class="container">
    <a href="{{ '/docs/' | relative_url }}" class="legal-back">&larr; Docs</a>
    <div class="legal-header">
      <h1>Release notes</h1>
      <p class="legal-meta">Old Skool Board</p>
    </div>
    <div class="legal-body">

<h2>v1.0 — Initial release</h2>

<p class="legal-meta">Coming soon</p>

<h3>What's included</h3>

<ul>
  <li>Story-focused board with To Do / In Progress / Done columns</li>
  <li>Sub-task lanes driven by your Jira workflow</li>
  <li>Drag-and-drop for parent items and sub-tasks</li>
  <li>Inline creation for parent items and sub-tasks</li>
  <li>Board selection and per-user preferences</li>
  <li>Kanban retention setting — hide completed items older than 1, 2, or 4 weeks</li>
  <li>Split-pane In Progress layout — fixed parent item panel with scrollable sub-task lanes</li>
</ul>

<h3>Known limitations</h3>

<ul>
  <li>Desktop only — mobile and tablet are not supported</li>
  <li>Jira Cloud only — Server and Data Center are not supported</li>
  <li>Requires parent items with sub-tasks — limited value for flat issue structures</li>
  <li>Board ordering is app-specific and does not affect Jira's native rank</li>
  <li>No auto-refresh — the board must be refreshed manually</li>
</ul>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify file is valid**

```bash
cat ~/Development/SpinDriftLabsGitHub/docs/release-notes.md
```

Confirm: v1.0 entry present, "Coming soon" date, two lists (included + limitations).

- [ ] **Step 3: Commit**

```bash
git add docs/release-notes.md
git commit -m "Add release notes page"
```

---

## Task 6: Update landing page support section

**Files:**
- Modify: `index.md`

- [ ] **Step 1: Locate the support section in `index.md`**

Find this block in `index.md`:

```html
    <div class="support-links">
      <div class="support-item">
        <span class="support-label">General support</span>
        <a href="mailto:support@spindriftlabs.net">support@spindriftlabs.net</a>
      </div>
```

- [ ] **Step 2: Add Documentation row above the existing items**

Replace the `<div class="support-links">` block with:

```html
    <div class="support-links">
      <div class="support-item">
        <span class="support-label">Documentation</span>
        <a href="{{ '/docs/' | relative_url }}">spindriftlabs.net/docs</a>
      </div>
      <div class="support-item">
        <span class="support-label">General support</span>
        <a href="mailto:support@spindriftlabs.net">support@spindriftlabs.net</a>
      </div>
      <div class="support-item">
        <span class="support-label">Bug reports</span>
        <a href="https://github.com/spindriftlabs/old-skool-board-feedback" target="_blank" rel="noopener">github.com/spindriftlabs/old-skool-board-feedback</a>
      </div>
      <div class="support-item">
        <span class="support-label">Security</span>
        <a href="mailto:security@spindriftlabs.net">security@spindriftlabs.net</a>
      </div>
    </div>
```

- [ ] **Step 3: Verify the full support section looks correct**

```bash
grep -A 30 "support-links" ~/Development/SpinDriftLabsGitHub/index.md
```

Confirm: four items, Documentation is first, all existing rows still present.

- [ ] **Step 4: Commit**

```bash
git add index.md
git commit -m "Add docs link to landing page support section"
```

---

## Task 7: Push to GitHub Pages and verify

- [ ] **Step 1: Push all commits**

```bash
cd ~/Development/SpinDriftLabsGitHub
git push
```

- [ ] **Step 2: Wait for GitHub Pages to deploy (~1 min) then verify each URL**

Check all five URLs resolve and render correctly:

| URL | Expected |
|-----|----------|
| `https://spindriftlabs.net/docs/` | Index page with three linked cards |
| `https://spindriftlabs.net/docs/getting-started` | Getting started — 5 sections |
| `https://spindriftlabs.net/docs/using-the-board` | Using the board — 6 sections |
| `https://spindriftlabs.net/docs/release-notes` | Release notes — v1.0 entry |
| `https://spindriftlabs.net/` | Landing page support section now has Documentation row |

- [ ] **Step 3: Verify site header nav on all pages shows "Docs" link**

Click the Docs nav link from the landing page — confirm it goes to `/docs/`.

- [ ] **Step 4: Verify back links work**

On each docs page, confirm "← Docs" back link goes to `/docs/` (not "← Home").  
On the docs index, confirm "← Home" goes to `/`.

---

## Screenshot placeholders

The following screenshot placeholders are in the published pages and must be replaced with real images before the Marketplace submission:

| # | Page | Placeholder text | Image path to use |
|---|------|-----------------|-------------------|
| 1 | getting-started | `[Screenshot: Jira project sidebar with Old Skool Board visible in the left nav]` | `assets/img/docs-sidebar.png` |
| 2 | getting-started | `[Screenshot: Board selector / first-time setup prompt]` | `assets/img/docs-board-selector.png` |
| 3 | using-the-board | `[Screenshot: Full board view — To Do / In Progress / Done with sub-task lanes visible]` | `assets/img/docs-board-overview.png` |
| 4 | using-the-board | `[Screenshot: Parent item mid-drag between columns]` | `assets/img/docs-story-drag.png` |
| 5 | using-the-board | `[Screenshot: Sub-task mid-drag between lanes]` | `assets/img/docs-subtask-drag.png` |
| 6 | using-the-board | `[Screenshot: Inline create composer open in a column]` | `assets/img/docs-inline-create.png` |
| 7 | using-the-board | `[Screenshot: Settings panel open showing the retention dropdown]` | `assets/img/docs-settings.png` |

To replace a placeholder: take the screenshot, save it to `assets/img/` under the filename above, then replace the `<em>[Screenshot: ...]</em>` line with:

```html
<img src="{{ '/assets/img/docs-FILENAME.png' | relative_url }}" alt="DESCRIPTION" style="max-width: 100%; margin: 1rem 0; border: 1px solid #d6d3d1; border-radius: 4px;">
```
