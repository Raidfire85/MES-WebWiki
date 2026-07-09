When setting up grids to be used as Prefabs for your NPC Encounters mod, there are some guidelines you should follow to ensure that they perform well, and provide and engaging experience to players. 

# Common Guidelines:

The following guidelines apply to most types of encounters. Encounter specific guidelines can be found further down the page.

 - **Doors**: Ensure any doors that should be closed by default are already closed.  
 
 - **Programmable Blocks**: Any Programmable Blocks that have scripts that do not directly contribute to the operation of the NPC ship (eg: inventory managers) should be removed from the programmable blocks. Even if the programmable block is disabled, having scripts in them when they spawn will still result in them compiling, which can cause extra lag during spawning.
   
 - **Sensors and Timers**: Similar to Programmable Blocks above, ensure that you disable any Timers or Sensors if they do not directly contribute to the operation of the NPC ship.
 
 - **Refinery and Assembler**: If you have any production blocks on the grid, you should consider disabling them. There's typically no reason for NPC grids to be processing resources in Refineries and Assemblers, and often just contributes to performance issues. O2/H2 generators are usually exempt from this because some NPC ships may require hydrogen to operate.
  
  - **Inventory Size**: If you are planning to pre-fill any of the inventories on your grid, try to do this in Survival with 1x Inventory Size enabled in the world options. This will ensure that regardless of what inventory setting a player uses, the inventory will not be truncated.
   
 - **Inventory Survival Balance**: If adding inventory to your grids, try to balance risk-vs-reward for your grid. A small little transport with 1 interior turret shouldn't be hauling a cargo of 25k Platinum ingot, etc. Ideally, larger and well defended grids would have better rewards available to them.
 
 - **Power Sources**: Consider using Batteries and other cheaper power sources on some of your smaller / easier grids. That way players will be less likely to gain access to Reactors and Uranium earlier in their game.
   
 - **Weapons and Reactors**: The Modular Encounters Spawner has a SpawnGroup tag that will automatically fill the inventories or weapons, reactors, parachutes, and gas generators. If you do not end up using the tag, ensure that you fill these blocks appropriately.
    
 - **Antennas**: Where possible, you should avoid using the HUD Text option on Antennas and rename the actual block instead. This will make things easier when working with the Spawner Prefab Manipulation options (for renaming blocks) and working with RivalAI Chat options.
   
 - **Cockpit Orientation**: It is important that all your grids have a Cockpit or Control Seat block (set as Main Cockpit) that is also facing the proper forward/upward directions of your ship. The Modular Encounters Spawner uses the cockpit to help orient the ship in the proper direction when it initially spawns. Remote Control blocks do not count as Cockpits.
   
 - **Remote Control and Autopilot**: If you are building a ship that will use a Remote Control for Auto-Pilot, it is important that the Remote Control block is oriented properly with the forward and upward directions of the ship. Otherwise, you may encounter strange behavior where a ship flies on its side or in the wrong direction.

 - **Autopilot and Hydrogen**: If you have built a ship that only uses hydrogen, it may struggle to fly when using Autopilot (this is the result of a game quirk/bug). An easy fix for this is to ensure you have at least 1 thruster of another type (ion for space, atmo for atmosphere) in each direction - this will allow the ship to use all thrusters properly.

 - **Autopilot and Natural Gravity**: If you are building a ship or drone that will use Autopilot in natural gravity, it is important that you include thrusters that can push the ship downwards. Another quirk/bug of  vanilla Autopilot is that if thrust in that direction is missing, the ship may try to reach the waypoint, but end up slowly drifting upwards perpetually.

 - **Grid Pivot**: In the Terminal Menu, there is an option to enable the Grid Pivot indicator. This allows you to tell the base directions of the grid (blue = forward | green = up | red = right). It's generally a good idea to design your grid to properly follow these directions. 

 - **Using Prefab "Drone Behavior" Tags**: If you attach a Drone Behavior to a Prefab in one of your SpawnGroups, it should be noted that this will stop the ship from moving forward if it is a Space or Planetary Cargo Ship. It will remain idle until a player reaches its activation distance.
 
 - **Block Count**: You may want to try keeping the total block count of a single grid to be no higher than 5000 blocks. This is typically a good size to allow decent performance on most systems.


# Space Cargo Ships:
 
 - **Subgrids**: If you have smaller connected ships as subgrids on your main spawn, ensure that their inertia dampeners are disabled. Cargo Ships do not actually fly, but rather they are spawned with an initial velocity and just drift with the dampeners turned off. The spawner will disable dampeners of the main grid, but may not catch other attached grids.
 
 
# Random Encounters:
 
 - **Old Style Random Encounter**: Before the survival update, Random Encounters were mostly unpowered neutral derelict ships which could easily be captured if found.
 
 - **New Style Random Encounters**: Random Encounters after the survival update are mostly owned by a hostile faction (usually SPRT), and have a Beacon or Antenna that actives for a moment before deactivating again. To recreate the signal effect they use, place two timers on the grid, Timer A should be set to turn On your Antenna/Beacon and to Start Timer B, Timer B should be set to turn Off Antenna/Beacon and Start Timer A. Set countdown on Timer A to about 1 minute, and set the countdown on Timer B to about 1-2 seconds.
 
 - **Pirate Style Encounters**: Present in both pre/post survival update, some Random Encounters will spawn as Pirates with fully visible signals, and will often spawn drones if you get too close. Drones are often spawned using Pirate Antenna Definitions.
 
 
# Planetary Cargo Ships:
 
 - **Remote Control**: Unlike Space Cargo Ships, ship that fly in Natural Gravity use the Remote Control AutoPilot to navigate. Because of this, it is very important that you include a Remote Control block in the proper orientation.
  
 - **Cockpit Block**: While this was already mentioned above, it is very important you have a proper cockpit/control seat on your ship. Otherwise the ship may spawn in an incorrect orientation, which could cause it to fall out of the sky before the Remote Control can correct it.
 
 - **Hydrogen Powered Cargo Ships**: If your Cargo Ship uses Hydrogen as a requirement to maintain altitude, ensure that you have plenty of Gas Tanks or Generators. The spawner will automatically replenish Ice on the grid while ships are classified as Planetary Cargo Ships.

 - **Parachutes**: Consider using Parachutes in your Planetary Cargo Ships. Often when a player manages to defeat one of these ships, there is very little to recover if it falls from the sky. Parachutes allow players to salvage the ship with better ease.
 
 - **High Altitude Flight**: When building a Planetary Cargo Ship grid, it is important that it is able to reach fairly high altitudes - about to where atmospheric thrusters begin to noticably lose effectiveness. When these ships spawn, they often try to maintain a fairly high altitude, so it's important they can fly at this height - otherwise they may not be able to make it to their despawn coordinates. You can use the [script at this link](https://gist.github.com/MeridiusIX/68e43b4a882029efa2666f4cc06e7278) to easily verify if a ship is capable of flight under certain environmental conditions.

 
# Planetary Installations:

  - **Cockpit Block**: While this was already mentioned above, it is very important you have a proper cockpit/control seat on your station. Otherwise the station may spawn upside down or on its side.
  
 - **Static Grid**: When building a station that will spawn as a Planetary Installation, it is important that the station is saved as a Static Grid (ie: Station). If not, the spawner may try to spawn it as a non-static grid into the voxel, which will lead to explosions, clang, and other unpleasentness.
 
 - **Grid Foundation**: The Planetary Installation Spawner in MES does not always find perfectly flat terrain (this is by design, since most terrain is rarely perfectly flat). With this in mind, it's best to ensure your station designs have a bit of a thicker foundation that will spawn beneath the surface - otherwise you may see the bottom of the grid poking out from one part of the terrain, which looks silly. Designs using large beams or stilts work nicely as well.
 
 - **Underground Stations**: One feature of the Modular Encounters Spawner is the ability to support subterranean stations. This is achieved by first spawning the grid, then scanning the grid for air-tight rooms and removing the voxel material at the airtight grid cells. If you plan to use underground rooms in your stations, ensure that they are air-tight and that the air-tight passage extends to the surface somewhere.


# Boss Encounters:

- **AI**: Boss Encounters Grids do not automatically have AI loaded into them. Ensure that you use a Programmable Block script that gives your grid behavior, or use/create/modify one of the Drone Behaviors that can be attached to your Prefab when building your SpawnGroup.
 

# Economy:

With the update 1.192, Economy Features are now available to the Spawner. Here are some guidelines to follow:

 - **Multiple Store Blocks**: If your grid has multiple store blocks, ensure that their conveyor networks are isolated from each-other. Otherwise, the spawner will add all the available inventory to a single store block.

 - **Connectors**: There are new option in the Connector Block that allow any ship to connect for trading purposes, and to auto-disconnect after a period of time. These are useful for ships/stations using economy features.

 - **Doors**: Doors now have an option to allow anybody to open them. This allows you to easily setup public areas for a grid, while restricting other areas.

 - **Ship Inventory**: Using the Spawner, the Store Block(s) are automatically configured to use inventory that is connected to the block for what it can sell. You can prefill grids with specific inventory, or you can utilize ContainerTypes definitions to automatically fill the inventories with semi-randomized items.

 - **Naming Containers**: You may want to give your Cargo Container specific names. This will make it easier for the Spawner to target them if using Automatic Inventory Replenishment via the ContainerTypes system.

 
# Traps:

Clever placement of traps can really improve the experience for many players. Below are some examples of some that you can use on unsuspecting players.

 - **Interior Turrets**: Try placing turrets in places that are not immediately visible, such as above doors, around corners, etc.

 - **Welder Trap**: Place a Welder Block beneath a Catwalk Block and having a sensor nearby that enables the welder if the player steps on the Catwalk.

 - **Turret Door**: Hide one or more turret behind a door (two non-windowed doors on their side work well for this), and place a sensor in the room that will trigger the doors to open.

 - **Warhead Behind Thruster**: This works best on Space Cargo Ships. Place a Thruster in front of an armed Warhead Block. If a player manages to capture the ship and turn on inertia dampeners, as soon as they thrust in the direction of the thruster near the warhead, it should detonate.

 - **Ceiling Drop**: This is more trollish than practical, but if you have a relatively large room, create a fake ceiling connected by a merge block. You may want to include artifical mass blocks on the ceiling part and a gravity generator on the ship part if this is not in natural gravity. Have a sensor in the room beneath the ceiling that releases the merge block (and activates the mass blocks if needed), and laugh as the ceiling makes engineers pancakes.

 - **Swatter**: A fake hangar door. Build a blast-door section connected to a rotor that sits upright. When a player gets close, have a sensor activate the rotor to quickly slam the blast-door section down at 90 degrees to the floor, crushing the player.

 - **Gravity Slam**: Hide a cluster of Gravity Generator blocks somewhere on a grid. Ensure the gravity field is set to push/pull towards the ceiling in the room. When a player gets close, have a sensor block enable the gravity generators - causing the player to slam into the ceiling at high speed.
