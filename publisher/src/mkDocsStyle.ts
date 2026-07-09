import * as fs from 'fs/promises';
import * as path from 'path';
import { contentEquals } from './syncBridge';
import { WEBWIKI_STYLE_SYNC_END, WEBWIKI_STYLE_SYNC_START } from './constants';

/** Hide MkDocs footer prev/next + style the home-page updates embed (Theme C palette). */
const STYLE_SYNC_BLOCK = `${WEBWIKI_STYLE_SYNC_START}
.rst-footer-buttons,
footer .rst-footer-buttons {
  display: none !important;
}

.mes-wiki-updates {
  border: 1px solid var(--mes-border-strong, #3d4654);
  border-left: 4px solid var(--mes-amber, #f0a030);
  background: var(--mes-bg-elevated, #1a1e26);
  padding: 1em 1.25em;
  margin: 1.5em 0 2em;
  border-radius: 4px;
}

.mes-wiki-updates-label {
  margin: 0 0 0.35em;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--mes-amber, #f0a030);
}

.mes-wiki-updates-summary {
  margin: 0 0 0.75em;
  color: var(--mes-text-muted, #9aa3b2);
}

.mes-wiki-updates-meta {
  margin: 0 0 0.25em;
  color: var(--mes-text, #e4e8ed);
}

.mes-wiki-updates-source {
  margin: 0 0 0.75em;
  font-size: 0.92em;
  color: var(--mes-text-muted, #9aa3b2);
}

.mes-wiki-updates a {
  color: var(--mes-amber-bright, #ffb347);
  text-decoration: none;
}

.mes-wiki-updates a:hover {
  text-decoration: underline;
}

.mes-wiki-updates-latest,
.mes-wiki-updates-history ul {
  margin: 0 0 0.75em 1.1em;
  padding: 0;
}

.mes-wiki-updates-history-entry {
  margin-bottom: 0.85em;
}

.mes-wiki-updates-history-date {
  margin: 0 0 0.35em;
  font-weight: 600;
  color: var(--mes-text-muted, #9aa3b2);
}

.mes-wiki-updates-history summary {
  cursor: pointer;
  color: var(--mes-amber, #f0a030);
  margin-bottom: 0.5em;
}
${WEBWIKI_STYLE_SYNC_END}`;

export async function ensureWebWikiStylePatches(
  docsDir: string,
  write: boolean
): Promise<{ changed: boolean }> {
  const stylePath = path.join(docsDir, 'style.css');
  let existing = '';

  try {
    existing = await fs.readFile(stylePath, 'utf8');
  } catch {
    return { changed: false };
  }

  let next: string;
  const pattern = new RegExp(
    `${escapeRegex(WEBWIKI_STYLE_SYNC_START)}[\\s\\S]*?${escapeRegex(WEBWIKI_STYLE_SYNC_END)}`,
    'm'
  );

  if (pattern.test(existing)) {
    next = existing.replace(pattern, STYLE_SYNC_BLOCK.trim());
  } else {
    next = `${existing.trimEnd()}\n\n${STYLE_SYNC_BLOCK.trim()}\n`;
  }

  if (contentEquals(existing, next)) {
    return { changed: false };
  }

  if (write) {
    await fs.writeFile(stylePath, next, 'utf8');
  }

  return { changed: true };
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
