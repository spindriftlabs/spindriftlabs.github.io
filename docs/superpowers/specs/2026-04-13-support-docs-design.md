# Support Docs — Design Spec

**Date:** 2026-04-13  
**Status:** Approved  
**Repo:** `github.com/spindriftlabs/spindriftlabs.github.io`

---

## Overview

Add customer-facing support documentation for Old Skool Board to the `spindriftlabs.net` Jekyll site. Required before Atlassian Marketplace submission.

---

## Structure

Four new pages under `/docs/`, plus one update to the existing landing page.

```
spindriftlabs.net/docs/                  ← new: docs index
spindriftlabs.net/docs/getting-started  ← new
spindriftlabs.net/docs/using-the-board  ← new
spindriftlabs.net/docs/release-notes    ← new
spindriftlabs.net/                       ← existing: support section update only
```

`/privacy` and `/security` are unchanged and linked from `/docs/limitations`... *(correction: no limitations page — linked from `/docs/getting-started` and `/docs/using-the-board` where relevant)*.

---

## Page designs

### `/docs/` — Docs index

Heading: "Old Skool Board documentation"  
Three linked cards, one per doc page, each with a one-line description:

| Link | Description |
|------|-------------|
| Getting started | Requirements, installation, and first-time setup |
| Using the board | Board layout, moving items, inline creation, and settings |
| Release notes | What's new in each version |

No screenshots needed.

---

### `/docs/getting-started`

| Section | Content | Screenshot |
|---------|---------|-----------|
| Requirements | Jira Cloud only; desktop browser only; project must have parent items with sub-tasks; a Jira board must exist | None |
| Installing | Find on Marketplace → install → appears as a project page in Jira | None (Atlassian controls install flow) |
| Opening the board | Navigate to Jira project → left sidebar → Old Skool Board | **Jira sidebar showing "Old Skool Board" in project nav** |
| Selecting a board | First-time prompt to pick a Jira board; choice saved per-project | **Board selector / first-time setup prompt** |
| Required Jira permissions | Uses existing Jira account permissions; no admin required; scopes: `read:jira-work`, `write:jira-work`, `storage:app` | None |

---

### `/docs/using-the-board`

| Section | Content | Screenshot |
|---------|---------|-----------|
| Board layout | To Do / In Progress / Done from Jira status categories; In Progress is dominant workspace; sub-task lanes from Jira workflow; yellow = parent items, blue = sub-tasks | **Full board view with sub-task lanes visible** |
| Moving parent items | Drag between columns → Jira workflow transition; failed transitions roll back with error | **Parent item mid-drag between columns** |
| Moving sub-tasks | Drag between lanes within In Progress; reorder within a lane by dragging up/down | **Sub-task mid-drag between lanes** |
| Creating items inline | Click "+ Add" at bottom of column or lane; Enter to save, Escape to cancel | **Inline create composer open** |
| Opening an issue | Click card title → opens Jira issue in new tab | None |
| Hiding old completed items (Kanban only) | Settings cog → retention dropdown (1/2/4 weeks or Keep all); per-board, per-user; Scrum boards unaffected | **Settings panel open showing retention dropdown** |

---

### `/docs/release-notes`

Single entry at launch:

**v1.0 — Initial release**  
*Coming soon*

**What's included:**
- Story-focused board with To Do / In Progress / Done columns
- Sub-task lanes driven by your Jira workflow
- Drag-and-drop for parent items and sub-tasks
- Inline creation for parent items and sub-tasks
- Board selection and per-user preferences
- Kanban retention setting (hide completed items older than 1, 2, or 4 weeks)
- Split-pane In Progress layout — fixed parent item panel with scrollable sub-task lanes

**Known limitations at launch:**
- Desktop only — mobile and tablet are not supported
- Jira Cloud only — Server and Data Center are not supported
- Requires parent items with sub-tasks — limited value for flat issue structures
- Board ordering is app-specific and does not affect Jira's native rank
- No auto-refresh — use the Refresh button to sync with Jira (OSB-130 raised for future)

Future releases appended in reverse chronological order (newest first).

No screenshots needed.

---

### `/` — Landing page (update only)

Add a Documentation row to the existing support section, above the contact channels:

```
Documentation   → spindriftlabs.net/docs/
General support → support@spindriftlabs.net
Bug reports     → github.com/spindriftlabs/old-skool-board-feedback
Security        → security@spindriftlabs.net
```

---

## Screenshots summary

All screenshots must be taken from a real Jira Cloud project with realistic data.

| # | Page | What to capture |
|---|------|----------------|
| 1 | Getting started | Jira project sidebar with "Old Skool Board" visible in left nav |
| 2 | Getting started | Board selector / first-time setup prompt |
| 3 | Using the board | Full board view — To Do / In Progress / Done with sub-task lanes visible |
| 4 | Using the board | Parent item mid-drag between columns |
| 5 | Using the board | Sub-task mid-drag between lanes |
| 6 | Using the board | Inline create composer open in a column |
| 7 | Using the board | Settings panel open showing retention dropdown |

---

## Files to create/modify

| Action | File |
|--------|------|
| Create | `docs/index.md` |
| Create | `docs/getting-started.md` |
| Create | `docs/using-the-board.md` |
| Create | `docs/release-notes.md` |
| Update | `index.md` (support section only) |

---

## Out of scope

- No `/docs/limitations` page — limitations distributed into getting-started and release notes
- No changes to `/privacy` or `/security`
- No new navigation bar — docs pages use the same `← Home` back-link pattern as existing legal pages
