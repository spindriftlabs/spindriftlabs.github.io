---
layout: default
title: Security Statement
description: Security architecture and practices for Old Skool Board.
---

<section class="legal-page">
  <div class="container">
    <a href="{{ '/' | relative_url }}" class="legal-back">&larr; Home</a>
    <div class="legal-header">
      <h1>Security Statement</h1>
      <p class="legal-meta">Old Skool Board &nbsp;·&nbsp; Last updated: 31 March 2026</p>
    </div>
    <div class="legal-body">

<h2>Overview</h2>

<p>Old Skool Board is a Jira Cloud app built on <a href="https://developer.atlassian.com/platform/forge/">Atlassian Forge</a>, Atlassian's serverless app platform. The app runs entirely on Atlassian's infrastructure. There are no external servers, databases, or third-party services.</p>

<hr>

<h2>Architecture</h2>

<ul>
  <li><strong>Platform:</strong> Atlassian Forge (Custom UI)</li>
  <li><strong>Runtime:</strong> Forge serverless functions (Atlassian-hosted)</li>
  <li><strong>Frontend:</strong> React application served via Forge Custom UI sandbox</li>
  <li><strong>Communication:</strong> All API calls are made to Jira Cloud via Forge's <code>requestJira</code> bridge</li>
  <li><strong>External network calls:</strong> None. The app makes no outbound requests to any server outside Atlassian's infrastructure.</li>
</ul>

<hr>

<h2>Data Flow</h2>

<p>Old Skool Board reads issue, board, and workflow data from Jira Cloud using the Jira REST API via Forge's <code>requestJira</code> mechanism. All data flows between the app and Jira remain within Atlassian's infrastructure.</p>

<p>The app does not send data to external servers, use analytics or tracking services, set cookies, or log user activity outside Atlassian's platform.</p>

<hr>

<h2>Data Storage</h2>

<p>The app uses the <a href="https://developer.atlassian.com/platform/forge/runtime-reference/storage-api/">Forge Storage API</a> to persist:</p>

<table>
  <thead>
    <tr><th>What</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td>Selected board preference</td><td>Which board a user last viewed in a project</td></tr>
    <tr><td>Board display preferences</td><td>User-specific display settings</td></tr>
    <tr><td>Story ordering</td><td>Custom ordering of items on the board</td></tr>
  </tbody>
</table>

<p>Storage keys include the user's Atlassian account ID to scope preferences per user. No display names, email addresses, or other personal profile data is stored.</p>

<p>All Forge Storage data is encrypted at rest by Atlassian, scoped to the app installation, and deleted when the app is uninstalled.</p>

<hr>

<h2>Authentication and Authorisation</h2>

<p>Authentication is handled entirely by the Atlassian platform. Old Skool Board does not implement its own authentication. The app respects Jira's existing permission model — users can only view and modify issues they have access to in Jira.</p>

<hr>

<h2>Tenant Isolation</h2>

<p>Forge provides automatic tenant isolation. Each app installation operates in its own isolated context. Cross-tenant data access is prevented at the platform level by Atlassian.</p>

<hr>

<h2>Encryption</h2>

<ul>
  <li><strong>At rest:</strong> Forge Storage is encrypted at rest by Atlassian.</li>
  <li><strong>In transit:</strong> All communication between the app and Jira APIs uses TLS, enforced by the Forge platform.</li>
</ul>

<hr>

<h2>Dependency Management</h2>

<ul>
  <li>Dependencies are reviewed and updated regularly</li>
  <li><code>npm audit</code> is run as part of the development workflow</li>
  <li>Atlassian's Ecoscanner automatically scans all Marketplace apps for known vulnerabilities on an ongoing basis</li>
</ul>

<hr>

<h2>Vulnerability Disclosure</h2>

<p>If you discover a security vulnerability in Old Skool Board:</p>

<ol>
  <li><strong>Email:</strong> <a href="mailto:security@spindriftlabs.net">security@spindriftlabs.net</a></li>
  <li><strong>Do not</strong> disclose the issue publicly until it has been addressed</li>
  <li>We aim to acknowledge reports within 48 hours and provide a resolution timeline within 5 business days</li>
</ol>

<p>For non-security bugs and feature requests: <a href="https://github.com/spindriftlabs/old-skool-board-feedback">github.com/spindriftlabs/old-skool-board-feedback</a></p>

<hr>

<h2>Shared Responsibility Model</h2>

<p>Old Skool Board runs on Atlassian Forge, which operates under a <a href="https://developer.atlassian.com/platform/forge/shared-responsibility-model/">shared responsibility model</a>.</p>

<p><strong>Atlassian is responsible for:</strong> infrastructure security, user authentication, encryption at rest and in transit, tenant isolation, DDoS protection, and platform monitoring.</p>

<p><strong>Spindrift Labs is responsible for:</strong> application logic and input validation, output encoding, dependency management, authorisation logic within the app, and responding to security reports about app-specific behaviour.</p>

<hr>

<h2>Incident Response</h2>

<p>In the event of a security incident:</p>

<ol>
  <li>Investigate and contain the issue</li>
  <li>Notify affected customers via the Marketplace listing and support channels</li>
  <li>Deploy a fix via Forge deployment</li>
  <li>Publish a post-incident summary where appropriate</li>
</ol>

<p>For platform-level incidents, Atlassian's own incident response processes apply.</p>

<hr>

<h2>Contact</h2>

<ul>
  <li><strong>Security issues:</strong> <a href="mailto:security@spindriftlabs.net">security@spindriftlabs.net</a></li>
  <li><strong>General support:</strong> <a href="mailto:support@spindriftlabs.net">support@spindriftlabs.net</a></li>
  <li><strong>Bug reports:</strong> <a href="https://github.com/spindriftlabs/old-skool-board-feedback">github.com/spindriftlabs/old-skool-board-feedback</a></li>
</ul>

<p><em>Spindrift Labs is a sole trader business based in Australia.</em></p>

    </div>
  </div>
</section>
