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

    <div class="docs-page-nav">
      <a href="{{ '/docs/getting-started' | relative_url }}">&larr; Getting started</a>
      <a href="{{ '/docs/release-notes' | relative_url }}" class="docs-page-nav-next">Release notes &rarr;</a>
    </div>
  </div>
</section>
