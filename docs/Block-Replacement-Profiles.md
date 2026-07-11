# Block Replacement Profiles

<!-- MES-WEBWIKI-BLOCK-REPLACEMENT-PROFILES-INTRO-START -->
MES ships with ready-made **Block Replacement profiles** — named swap rules (for example, light armor to heavy armor, or gatling turrets to missile turrets). You do **not** add these as SBC files in your mod. You **reference the profile name** wherever MES reads block-replacement settings.

The table at the bottom of this page lists every built-in profile name and what it does.

## Where to put profile names (so they take effect)

### 1. Server-wide — Global Block Replacer (most common)

This is the main server-side setting. It applies block replacement to **all NPC grids spawned through MES** (unless a SpawnGroup opts out).

**File:** `MySaveWorldFolder\Storage\1521905890.sbm_ModularEncountersSpawner\Config-Grids.xml`

**Steps:**

1. Set `UseGlobalBlockReplacer` to `true`.
2. Add one or more profile names under `GlobalBlockReplacerProfiles`.

**Example:**

```xml
<UseGlobalBlockReplacer>true</UseGlobalBlockReplacer>
<GlobalBlockReplacerProfiles>
  <string>MES-Armor-LightToHeavy</string>
  <string>MES-ProprietaryValuableBlocks</string>
</GlobalBlockReplacerProfiles>
```

You can also change these in-game with chat commands — see [Admin Config → Grid](AdminConfig_Grid.md) (`UseGlobalBlockReplacer`, `GlobalBlockReplacerProfiles`).

**Note:** `GlobalBlockReplacerReference` is a separate option for one-off `OldBlock|NewBlock` pairs (block subtype IDs), not named profiles. Use `GlobalBlockReplacerProfiles` when you want the presets listed below.

---

### 2. Per SpawnGroup — only certain spawns

Use this when only **specific spawn groups** should run block replacement, instead of the whole server.

**File:** Your SpawnGroup `.sbc` — tags go in the SpawnGroup **Description** block (Manipulation tags).

**Example:**

```
[UseBlockReplacerProfile:true]
[BlockReplacerProfileNames:MES-Armor-LightToHeavy,MES-Turret-GatlingToMissile]
```

See [Manipulation → Block-Replacement](Manipulation.md#Block-Replacement) for related tags (`IgnoreGlobalBlockReplacer`, `RelaxReplacedBlocksSize`, etc.).

If the global server setting is enabled, a SpawnGroup can skip it with:

```
[IgnoreGlobalBlockReplacer:true]
```

---

### 3. Shipyard terminal — player-paid block swap

For NPC shipyards that let players pay to replace blocks using preset rules:

**File:** Your Shipyard profile EntityComponent SBC (see [Shipyard Profile](Shipyard-Profile.md)).

**Example:**

```
[AllowCustomReplacement:true]
[BlockReplacementProfileIds:MES-ProprietaryValuableBlocks]
```

---

## Built-in vs custom profiles

| What you want | What to do |
|:----|:----|
| Use an MES preset from the table below | Reference its **Name** in one of the places above — no extra SBC required. |
| Define your own swap rules | Create a Block Replacement profile SBC with `[MES Block Replacement]` and tags like `OldBlock` / `NewBlock` / `Limit`. See [Block Replacement](Block-Replacement.md). Then reference your profile's **SubtypeId** the same way as the built-in names. |
| Swap one block pair on a single SpawnGroup | Use `[UseBlockReplacer:true]` with `[ReplaceBlockOld:…]` and `[ReplaceBlockNew:…]` on that SpawnGroup instead of a named profile. See [Manipulation](Manipulation.md#Block-Replacement). |
<!-- MES-WEBWIKI-BLOCK-REPLACEMENT-PROFILES-INTRO-END -->

---

## Available profiles

|Name:|MES-Armor-LightToHeavy|
|:----|:----|
|Description:|This profile will swap all vanilla light armor blocks with their heavy armor variants.|

|Name:|MES-Armor-HeavyToLight|
|:----|:----|
|Description:|This profile will swap all vanilla heavy armor blocks with their light armor variants.|

|Name:|MES-Turret-InteriorToNpcInterior|
|:----|:----|
|Description:|This profile will swap all vanilla Interior Turrets with an NPC variant that has 800m range (as of SE 1.199, interior turret max range is 400m, which complicates existing NPC builds).|

|Name:|MES-Turret-GatlingToMissile|
|:----|:----|
|Description:|This profile will swap all vanilla Gatling Turrets with Missile Turrets.|

|Name:|MES-Turret-MissileToGatling|
|:----|:----|
|Description:|This profile will swap all vanilla Missile Turrets with Gatling Turrets.|

|Name:|MES-Gun-GatlingToMissile|
|:----|:----|
|Description:|This profile will swap all vanilla Gatling Guns with Rocket Launchers.|

|Name:|MES-Gun-MissileToGatling|
|:----|:----|
|Description:|This profile will swap all vanilla Rocket Launchers with Gatling Guns.|

|Name:|MES-ProprietaryValuableBlocks|
|:----|:----|
|Description:|This profile will swap out a variety of high value blocks with variants that return scrap for their most valuable components. This includes Reactors, Ion Thrusters, Jump Drives, Gravity Blocks, and more. This is useful if you do not want salvaging of NPC grids to be as profitable.|

|Name:|MES-ProprietaryCompRichBlocks|
|:----|:----|
|Description:|This profile will swap out a variety of blocks that return a high yield of regular components with variants that return about half of their vanilla counterparts. This is useful if you do not want salvaging of NPC grids to be as profitable.|

|Name:|MES-DisposableNpcBeacons|
|:----|:----|
|Description:|This profile will swap all vanilla Beacon Blocks with a new variant that will auto-remove itself from the NPC grid if its inactive or out of a set player distance for a period of time (both configurable). This is useful for Servers using systems where grids are removed when they no longer have a beacon.|

|Name:|MES-NpcThrusters-Ion|
|:----|:----|
|Description:|This profile will swap all vanilla Ion Thruster Blocks with a new variant that can have its properties adjusted in the SpawnGroup settings. This variant of Ion Thruster also loses no effectiveness in atmosphere, and does not return Thruster Components when grinded down.|

|Name:|MES-NpcThrusters-Atmo|
|:----|:----|
|Description:|This profile will swap all vanilla Atmospheric Thruster Blocks with a new variant that can have its properties adjusted in the SpawnGroup settings.|

|Name:|MES-NpcThrusters-Hydro|
|:----|:----|
|Description:|This profile will swap all vanilla Hydrogen Thruster Blocks with a new variant that can have its properties adjusted in the SpawnGroup settings.|
