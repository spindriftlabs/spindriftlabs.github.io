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
    <div class="legal-body" markdown="1">

<h2>Overview</h2>

Old Skool Board is a Jira Cloud app built on [Atlassian Forge](https://developer.atlassian.com/platform/forge/), Atlassian's serverless app platform. The app runs entirely on Atlassian's infrastructure. There are no external servers, databases, or third-party services.

---

<h2>Architecture</h2>

- **Platform:** Atlassian Forge (Custom UI)
- **Runtime:** Forge serverless functions (Atlassian-hosted)
- **Frontend:** React application served via Forge Custom UI sandbox
- **Communication:** All API calls are made to Jira Cloud via Forge's `requestJira` bridge
- **External network calls:** None. The app makes no outbound requests to any server outside Atlassian's infrastructure.

---

<h2>Data Flow</h2>

Old Skool Board reads issue, board, and workflow data from Jira Cloud using the Jira REST API via Forge's `requestJira` mechanism. All data flows between the app and Jira remain within Atlassian's infrastructure.

The app does not send data to external servers, use analytics or tracking services, set cookies, or log user activity outside Atlassian's platform.

---

<h2>Data Storage</h2>

The app uses the [Forge Storage API](https://developer.atlassian.com/platform/forge/runtime-reference/storage-api/) to persist:

| What | Purpose |
|------|---------|
| Selected board preference | Which board a user last viewed in a project |
| Board display preferences | User-specific display settings |
| Story ordering | Custom ordering of items on the board |

Storage keys include the user's Atlassian account ID to scope preferences per user. No display names, email addresses, or other personal profile data is stored.

All Forge Storage data is encrypted at rest by Atlassian, scoped to the app installation, and deleted when the app is uninstalled.

---

<h2>Authentication and Authorisation</h2>

Authentication is handled entirely by the Atlassian platform. Old Skool Board does not implement its own authentication. The app respects Jira's existing permission model — users can only view and modify issues they have access to in Jira.

---

<h2>Tenant Isolation</h2>

Forge provides automatic tenant isolation. Each app installation operates in its own isolated context. Cross-tenant data access is prevented at the platform level by Atlassian.

---

<h2>Encryption</h2>

- **At rest:** Forge Storage is encrypted at rest by Atlassian.
- **In transit:** All communication between the app and Jira APIs uses TLS, enforced by the Forge platform.

---

<h2>Dependency Management</h2>

- Dependencies are reviewed and updated regularly
- `npm audit` is run as part of the development workflow
- Atlassian's Ecoscanner automatically scans all Marketplace apps for known vulnerabilities on an ongoing basis

---

<h2>Vulnerability Disclosure</h2>

If you discover a security vulnerability in Old Skool Board:

1. **Email:** [security@spindriftlabs.net](mailto:security@spindriftlabs.net)
2. **Do not** disclose the issue publicly until it has been addressed
3. We aim to acknowledge reports within 48 hours and provide a resolution timeline within 5 business days

For non-security bugs and feature requests: [github.com/spindriftlabs/old-skool-board-feedback](https://github.com/spindriftlabs/old-skool-board-feedback)

---

<h2>Shared Responsibility Model</h2>

Old Skool Board runs on Atlassian Forge, which operates under a [shared responsibility model](https://developer.atlassian.com/platform/forge/shared-responsibility-model/).

**Atlassian is responsible for:** infrastructure security, user authentication, encryption at rest and in transit, tenant isolation, DDoS protection, and platform monitoring.

**Spindrift Labs is responsible for:** application logic and input validation, output encoding, dependency management, authorisation logic within the app, and responding to security reports about app-specific behaviour.

---

<h2>Incident Response</h2>

In the event of a security incident:

1. Investigate and contain the issue
2. Notify affected customers via the Marketplace listing and support channels
3. Deploy a fix via Forge deployment
4. Publish a post-incident summary where appropriate

For platform-level incidents, Atlassian's own incident response processes apply.

---

<h2>Contact</h2>

- **Security issues:** [security@spindriftlabs.net](mailto:security@spindriftlabs.net)
- **General support:** [support@spindriftlabs.net](mailto:support@spindriftlabs.net)
- **Bug reports:** [github.com/spindriftlabs/old-skool-board-feedback](https://github.com/spindriftlabs/old-skool-board-feedback)

*Spindrift Labs is a sole trader business based in Australia.*

    </div>
  </div>
</section>
