# MES WebWiki (community mirror)

Unofficial, auto-synced wiki for [Modular Encounters Systems](https://github.com/MeridiusIX/Modular-Encounters-Systems).

**Live site:** https://raidfire85.github.io/MES-WebWiki/

**Official wiki:** https://meridiusix.github.io/Modular-Encounters-Systems/

This repo contains MeridiusIX's original `WebWiki/` markdown plus an embedded sync tool (`publisher/`). Wiki pages keep Meridius's prose and structure; the tool adds missing tags and profiles from the current MES C# source.

## Not official

This is **not** maintained by MeridiusIX. Credit for the original wiki prose and structure goes to MeridiusIX. Sync tooling and hosting are maintained here.

## Layout

```
docs/              Wiki markdown (sync-managed sections marked in files)
mkdocs.yml         Sidebar navigation and site settings
docs/style.css     Dark theme and sidebar UX
docs/js/           Site scripts (e.g. sidebar scroll behavior)
publisher/         Sync tool (Node/TypeScript) — runs in GitHub Actions
.github/workflows/ Weekly sync + deploy to GitHub Pages
readme.txt         Original Meridius WebWiki readme
LICENSE            MIT (tooling); wiki content credited to MeridiusIX (see below)
```

## Automation

GitHub Actions (`.github/workflows/webwiki-sync-deploy.yml`):

1. Fetches the latest `Data/Scripts/ModularEncountersSystems` from MeridiusIX/MES
2. Runs `publisher/publish.cjs --write` against `docs/`
3. Commits doc updates to `main` when the MES source has changed
4. Builds MkDocs and publishes HTML to **`gh-pages`**

**Triggers:**

- Push to `main` when `docs/`, `publisher/`, `mkdocs.yml`, or the workflow file changes
- **Weekly** — Sundays at 08:00 UTC (`0 8 * * 0`)
- Manual **Run workflow**

The homepage **Last synced** line updates on every run; **What's new** bullets appear only when profiles, tags, or navigation actually change.

## Mobile-friendly

The site uses the ReadTheDocs MkDocs theme with a custom dark stylesheet. On phones and narrow screens (≤768px), the sidebar is hidden behind the **☰ menu** at the top; the main content uses the full width. The desktop layout is unchanged above that breakpoint.

## Local preview

Requires Node 20+, Python 3, and Git.

```powershell
git clone https://github.com/Raidfire85/MES-WebWiki.git
cd MES-WebWiki

# Optional: clone MES scripts for local sync
git clone --depth 1 --filter=blob:none --sparse https://github.com/MeridiusIX/Modular-Encounters-Systems.git mes-upstream
cd mes-upstream && git sparse-checkout set Data/Scripts/ModularEncountersSystems && cd ..

cd publisher
npm install --no-save
npx tsc -p tsconfig.json
cd ..

node publisher/publish.cjs `
  --docs docs `
  --mkdocs mkdocs.yml `
  --mes-source mes-upstream/Data/Scripts/ModularEncountersSystems `
  --tag-descriptions publisher/TagDescriptions.json `
  --write

pip install mkdocs
mkdocs serve
```

Open http://127.0.0.1:8000

## Sync tool source

The sync tool is developed in [MES-WebWiki-Sync](https://github.com/Raidfire85/MES-WebWiki-Sync). Copy `publisher/` updates from that repo whenever the tool changes.

## License and attribution

- **Sync tooling, theme, GitHub Actions, and site automation** in this repo are licensed under the [MIT License](./LICENSE) (Copyright Raidfire85, 2026).
- **Wiki markdown under `docs/`** is derived from [MeridiusIX's WebWiki](https://github.com/MeridiusIX/Modular-Encounters-Systems/tree/master/WebWiki). Original prose and structure are credited to MeridiusIX and MES contributors — not relicensed as original work by this project.
- **Tag and profile metadata** synced from [Modular Encounters Systems](https://github.com/MeridiusIX/Modular-Encounters-Systems) C# source is attributed to MeridiusIX and upstream contributors.
- This is an **unofficial community mirror**. Official wiki: https://meridiusix.github.io/Modular-Encounters-Systems/

This project follows the same licensing approach as [MES-Reference-Library](https://github.com/Raidfire85/MES-Reference-Library).
