# Armor Modules Included with MES

Modular Encounters Systems ships with specialized armor modules that can be placed on NPC grids during spawn. These blocks replace vanilla armor cubes and add suppression fields, defensive combat logic, or flight movement abilities to encounters.

Armor modules are applied through [Manipulation Profiles](Manipulation.md#Armor-Modules) using the `ReplaceArmorBlocksWithModules` and `ModulesForArmorReplacement` tags. For each value in `ModulesForArmorReplacement`, one eligible armor block on the prefab is replaced with the specified module block type.

## Manipulation Tags

|Tag:|ReplaceArmorBlocksWithModules|
|:----|:----|
|Tag Format:|`[ReplaceArmorBlocksWithModules:Value]`|
|Description:|Enables replacement of armor blocks (cubes) on the grid with specialized modules that add additional abilities and effects to NPC prefabs.|
|Allowed Values:|`true`<br>`false`|
|Default Value(s):|`false`|
|Multiple Tag Allowed:|No|

|Tag:|ModulesForArmorReplacement|
|:----|:----|
|Tag Format:|`[ModulesForArmorReplacement:Value]`|
|Description:|Specifies the block types that replace armor cubes. For every value provided, one armor cube is replaced with the provided block type.|
|Allowed Values:|MyDefinitionId SubtypeId of a valid MES armor module (see tables below)|
|Default Value(s):|`N/A`|
|Multiple Tag Allowed:|Yes|

Eligible armor blocks for replacement are vanilla light and heavy armor cubes on the same grid size (small or large).

## Suppression Field Modules

These modules use the Radio Antenna block type and generate an area-of-effect field around the NPC grid. When placed via armor replacement, MES sets default broadcast radii automatically.

|SubtypeId|Display Name|Grid|Default Range|Description|
|:----|:----|:----|:----|:----|
|MES-Suppressor-Nanobots-Small|Nanobot Suppression Field|Small|1000 m|Suppresses the operation of various nanite and nanobot technologies within range.|
|MES-Suppressor-Nanobots-Large|Nanobot Suppression Field|Large|1000 m|Suppresses the operation of various nanite and nanobot technologies within range.|
|MES-Suppressor-JumpDrive-Small|Jump Drive Suppression Field|Small|6000 m|Suppresses the operation of Jump Drives within range.|
|MES-Suppressor-JumpDrive-Large|Jump Drive Suppression Field|Large|6000 m|Suppresses the operation of Jump Drives within range.|
|MES-Suppressor-Jetpack-Small|Jetpack Suppression Field|Small|1000 m|Suppresses the operation of Jetpacks within range.|
|MES-Suppressor-Jetpack-Large|Jetpack Suppression Field|Large|1000 m|Suppresses the operation of Jetpacks within range.|
|MES-Suppressor-Drill-Small|Drill Suppression Field|Small|500 m|Suppresses the operation of Hand Drills within range.|
|MES-Suppressor-Drill-Large|Drill Suppression Field|Large|500 m|Suppresses the operation of Hand Drills within range.|
|MES-Suppressor-Player-Small|Personnel Suppression Field|Small|1000 m|Suppresses player presence by applying increasing damage the closer they get.|
|MES-Suppressor-Player-Large|Personnel Suppression Field|Large|1000 m|Suppresses player presence by applying increasing damage the closer they get.|
|MES-Suppressor-Energy-Small|Energy Suppression Field|Small|1000 m|Depletes engineer suit energy when players get close.|
|MES-Suppressor-Energy-Large|Energy Suppression Field|Large|1000 m|Depletes engineer suit energy when players get close.|

## Combat and Movement Modules

|SubtypeId|Block Type|Grid|Description|
|:----|:----|:----|:----|
|SmallDefensiveCombat|Defensive Combat Block|Small|Adds defensive combat behavior to the NPC grid.|
|LargeDefensiveCombat|Defensive Combat Block|Large|Adds defensive combat behavior to the NPC grid.|
|SmallFlightMovement|Flight Movement Block|Small|Adds flight movement behavior to the NPC grid.|
|LargeFlightMovement|Flight Movement Block|Large|Adds flight movement behavior to the NPC grid.|

## Example

```
[MES Manipulation]

[ReplaceArmorBlocksWithModules:true]
[ModulesForArmorReplacement:MES-Suppressor-JumpDrive-Large]
[ModulesForArmorReplacement:MES-Suppressor-Player-Large]
```

This example replaces two armor cubes on a large-grid prefab with a Jump Drive Suppression Field and a Personnel Suppression Field.

## Related Documentation

- [Manipulation Profiles](Manipulation.md) — full tag reference for `ReplaceArmorBlocksWithModules` and `ModulesForArmorReplacement`
- [Block Replacement Profiles](Block-Replacement-Profiles.md) — preset profiles for swapping armor variants (light/heavy), distinct from armor module replacement
