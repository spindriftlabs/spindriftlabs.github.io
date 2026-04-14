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

<h2>v2.3</h2>

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

    <div class="docs-page-nav">
      <a href="{{ '/docs/using-the-board' | relative_url }}">&larr; Using the board</a>
    </div>
  </div>
</section>
