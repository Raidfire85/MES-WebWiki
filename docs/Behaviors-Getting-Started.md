Modular Encounters Systems provides a framework that aims to give modders the ability to easily create and configure NPC AI Behaviors with rich functionality - all without requiring the ability to write C# scripts, which was the typical barrier of entry for anyone interested in this type of modding.

Instead of writing scripts, all behavior is instead saved to XML Definition files using a tagging system similar to what is used in the Modular Encounters Spawner mod. Certain components of the behaviors are written to separate files, so they can be used in multiple behaviors.

This guide assumes that you have a minor background working with SpawnGroups in Space Engineers Modding and have worked with the Modular Encounters Spawner mod.

***

# Creating Behavior Profiles

Behavior Profiles are saved as EntityComponent Definitions (these are one of the closest definition types that are considered 'blank' and do not impact other parts of the game). We then use the `<Description>` field to store the tags, similar to how MES manages the custom SpawnGroup tags. The `SubtypeId` for the behavior file should be something unique, since we'll need to reference it later. Below is an example definition file for one of these behaviors:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EntityComponents>

    <EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>RAI-ExampleBehavior-Fighter</SubtypeId>
      </Id>
      <Description>

      [RivalAI Behavior]
      [BehaviorName:Fighter]

      </Description>
      
    </EntityComponent>

  </EntityComponents>
</Definitions>
```

All RivalAI behaviors require the `[RivalAI Behavior]` tag, along with a `[BehaviorName:####]` tag (`####` is replaced with a behavior name). The different behavior names in RivalAI control the basic NPC movement and interactions with the player. For example, `Fighter` is a simple behavior that acquires a target within a range and then pursues it, while `Passive` has no other special movements or abilities outside of what you customize it with in the various tags available.

For examples of some pre-built behavior profiles, I suggest checking out the Example Mod section of this tutorial.

***

# How To Attach Behaviors While Using Modular Encounters Spawner

The easiest (and preferred) way to setup your behaviors is to create the behavior profiles and then attach them using MES SpawnGroup definitions. This allows you to easily edit the behaviors as needed, without having to re-export the grid prefab after making changes.

When setting up your SpawnGroup definition in MES, you'll want to include the `[UseRivalAI:true]` tag in your SpawnGroup. If your prefab(s) do not have the custom AI Module Block, then you can also use the `[RivalAiReplaceRemoteControl:true]` tag to replace the first or main Remote Control block with the custom block. 

In the Prefabs section of your SpawnGroup, you will add the SubtypeId of the Behavior Profile to the Prefab `<Behaviour>` tags. Keep in mind, you do not need to set or include the `<BehaviourActivationDistance>` tag while using RivalAI, since it does not utilize an activation distance for all behavior types (any that do would be specified in the External Profile). Below is an example SpawnGroup file setup to use the behavior above:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <SpawnGroups>

    <SpawnGroup>
      <Id>
        <TypeId>SpawnGroupDefinition</TypeId>
        <SubtypeId>ExampleSpawnGroup</SubtypeId>
      </Id>
      <Description>

      [Modular Encounters SpawnGroup]
      [SpaceCargoShip:true]
      [UseRivalAi:true]
      [RivalAiReplaceRemoteControl:true]
      [ReplenishSystems:true]

      </Description>
      <Icon>Textures\GUI\Icons\Fake.dds</Icon>
      <Frequency>1.0</Frequency>
      <IsPirate>true</IsPirate>
      <Prefabs>
        <Prefab SubtypeId="Example Drone">
          <Position>
            <X>0.0</X>
            <Y>0.0</Y>
            <Z>0.0</Z>
          </Position>
          <Behaviour>RAI-ExampleBehavior-Fighter</Behaviour>
          <Speed>15.0</Speed>
        </Prefab>
      </Prefabs>
    </SpawnGroup>

  </SpawnGroups>
</Definitions>
```
