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
