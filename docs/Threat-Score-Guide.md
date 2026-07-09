# Modular Encounter Spawner - Threat Scoring

When designing your SpawnGroups for use with MES, one feature that is available is Threat Score checking. This feature will scan an area around the proposed spawning coordinates and calculate the threat level of all player grids (and optionally NPC grids) within the specified radius. 

Here's a detailed outline of how the Threat Score is calculated for each grid:

* A list of all blocks on the grid is collected. Initially, any block that is not a Terminal Block or Non-Functional (damaged, incomplete) will be skipped.   

* Each block is checked to see if it can produce power (and if it is currently enabled/working). If so, for every 10MW of power the block can provide, 1 point is added to the threat score.

* The next check is to see if the block is a Special Modded Block. Below is a table of these blocks and their point value: 

|Block|Points|
|:----|:----|
|Nanobot Build and Repair (small and large)|10|
|Nanite Control Factory|15|
|Energy Shield (SmallGrid/Small)|3|
|Energy Shield (SmallGrid/Large)|7|
|Energy Shield (LargeGrid/Small)|10|
|Energy Shield (LargeGrid/Large)|20|
|Defense Shield (SmallGrid)|7|
|Defense Shield (LargeGrid)|10|
|Defense Shield (StationGrid)|20|

* The following values are based on block types present on the grid. If the block scanned is also a modded variant, then the score for that block is doubled. 

|Block|Points|
|:----|:----|
|Weapons|5|
|Production|1.5|
|ToolBlock|1|
|Thruster|1|
|Cargo|0.5|
|Antenna|4|
|Beacon|3|

* Following the above, the calculator will then count the total blocks on the grid and add 1 point for every 100 blocks.  

* The last calculation done is based on grid size. If the grid type is small, the total score is divided by half. If the grid type is large, the total score is multiplied by 2.5  

After all these calculations are done, the spawner will add up the scores of all grids within the radius of the spawn coordinates, and if the score satisfies the requirements in the SpawnGroup, the encounter will appear.
