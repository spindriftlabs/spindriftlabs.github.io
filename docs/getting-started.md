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

<h2>How the board works best</h2>

<p>Old Skool Board maps your work items to one of three columns — <strong>To Do</strong>, <strong>In Progress</strong>, and <strong>Done</strong> — using Jira's status category system. Sub-tasks use their actual Jira status, appearing as lanes inside the In Progress workspace.</p>

<p>This means the board will work with any workflow structure you already have.</p>

<p>That said, we've found it works best when:</p>

<ul>
  <li><strong>Work items</strong> have three statuses — one mapped to each category: To Do, In Progress, and Done</li>
  <li><strong>Sub-tasks</strong> have their own dedicated workflow, separate from work items</li>
</ul>

<p>When work items are kept simple and sub-tasks carry the detail, the In Progress workspace becomes a genuinely useful view of what's actually happening inside each item. But how you structure your Jira project is entirely up to you.</p>

<hr>

<h2>Installing</h2>

<p>Find Old Skool Board on the <a href="https://marketplace.atlassian.com/apps/3925154041/" target="_blank" rel="noopener">Atlassian Marketplace</a> and install it to your Jira Cloud site. Once installed, it appears as a page inside your Jira projects.</p>

<hr>

<h2>Opening the board</h2>

<p>Navigate to a Jira project and click <strong>More</strong> in the top navigation bar. In the dropdown, select <strong>Old Skool Board</strong> to open the board.</p>

<a href="{{ '/assets/img/opening-the-board.png' | relative_url }}" target="_blank"><img src="{{ '/assets/img/opening-the-board.png' | relative_url }}" alt="Jira project top nav with More dropdown open, showing Old Skool Board" style="width:100%;border:1px solid #e8e4dd;border-radius:4px;margin:0.5rem 0 1rem;"></a>

<hr>

<h2>Board settings</h2>

<p>Click the <strong>settings icon</strong> in the top-right corner of the board to open the Board settings panel. From here you can:</p>

<ul>
  <li><strong>Board</strong> — switch to a different Jira board</li>
  <li><strong>To Do / In Progress / Done status</strong> — map your project's workflow statuses to the three board columns</li>
  <li><strong>Done retention</strong> (Kanban only) — control how long completed items remain visible before being archived</li>
</ul>

<p>Settings are saved per-project.</p>

<a href="{{ '/assets/img/board-settings.png' | relative_url }}" target="_blank"><img src="{{ '/assets/img/board-settings.png' | relative_url }}" alt="Board settings panel" style="width:100%;border:1px solid #e8e4dd;border-radius:4px;margin:0.5rem 0 1rem;"></a>

    </div>

    <div class="docs-page-nav">
      <span></span>
      <a href="{{ '/docs/using-the-board' | relative_url }}" class="docs-page-nav-next">Using the board &rarr;</a>
    </div>
  </div>
</section>
