# MES WebWiki (community mirror)

Unofficial, auto-synced wiki for [Modular Encounters Systems](https://github.com/MeridiusIX/Modular-Encounters-Systems).

**Live site:** https://raidfire85.github.io/MES-WebWiki/

**Official wiki:** https://meridiusix.github.io/Modular-Encounters-Systems/

This repo is a fork of MeridiusIX’s `WebWiki/` content plus an embedded sync tool (`publisher/`). Wiki pages stay based on Meridius’s original docs; the tool adds missing tags and profiles from current MES C# source.

## Not official

This is **not** maintained by MeridiusIX. Original wiki prose and structure credit MeridiusIX. Sync tooling is maintained here.

## Layout

```
docs/           Meridius WebWiki markdown (sync-managed sections marked in files)
mkdocs.yml      Sidebar navigation
publisher/      Sync tool (Node/TypeScript) — runs in GitHub Actions
readme.txt      Original Meridius WebWiki readme
```

## Automation

GitHub Actions (`.github/workflows/webwiki-sync-deploy.yml`):

1. Fetches latest `Data/Scripts/ModularEncountersSystems` from MeridiusIX/MES
2. Runs `publisher/publish.cjs --write` against `docs/`
3. Commits doc updates to `main`
4. Builds MkDocs and publishes HTML to **`gh-pages`**

Triggers: push to `main` (docs/publisher), weekly schedule, or manual **Run workflow**.

# PC and Cellphone friendly

## Local preview

Requires Node 20+, Python 3, and git.

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

Developed in [MES-WebWiki-Sync](https://github.com/Raidfire85/MES-WebWiki-Sync). Copy `publisher/` updates from there when the tool changes.
