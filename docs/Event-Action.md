#Event-Action.md

These profile are what execute specified actions when the conditions in a Event Profile are satisfied. It is important that you use a unique SubtypeId for each Action Profile you create, otherwise they may not work correctly.

Here is an example of how an Event Action Profile definition is setup:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EntityComponents>

    <EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>TAG-EventAction-Example</SubtypeId>
      </Id>
      <Description>

	  [MES Event Action]
      
          [UseChatBroadcast:true]
          [ChatData:RAI-ExampleChatProfile]

	  [ChangeBooleans:true]
	  [SetBooleansTrue:SomeRandomBool]	
      </Description>
      
    </EntityComponent>

  </EntityComponents>
</Definitions>
```


**[Debug](#Debug)**

**[SandboxVariables](#SandboxVariables)**

**[Chat](#Chat)**

**[Spawning](#Spawning)**

**[Zones](#Zones)**

**[Players](#Players)**

**[Events](#Events)**


# Debug

<!--DebugHudMessage  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|DebugHudMessage|
|:----|:----|
|Tag Format:|`[DebugHudMessage:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|no|
# SandboxVariables
This Section
<!--ChangeBooleans  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ChangeBooleans|
|:----|:----|
|Tag Format:|`[ChangeBooleans:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--SetBooleansTrue  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|SetBooleansTrue|
|:----|:----|
|Tag Format:|`[SetBooleansTrue:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--SetBooleansFalse  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|SetBooleansFalse|
|:----|:----|
|Tag Format:|`[SetBooleansFalse:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--ChangeCounters  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ChangeCounters|
|:----|:----|
|Tag Format:|`[ChangeCounters:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--IncreaseCounters  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|IncreaseCounters|
|:----|:----|
|Tag Format:|`[IncreaseCounters:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--DecreaseCounters  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|DecreaseCounters|
|:----|:----|
|Tag Format:|`[DecreaseCounters:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--IncreaseCountersAmount  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|IncreaseCountersAmount|
|:----|:----|
|Tag Format:|`[IncreaseCountersAmount:Value]`|
|Description:|nan|
|Allowed Values:|Any interger equal or greater than 0|
|Multiple Tag Allowed:|yes|
<!--DecreaseCountersAmount  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|DecreaseCountersAmount|
|:----|:----|
|Tag Format:|`[DecreaseCountersAmount:Value]`|
|Description:|nan|
|Allowed Values:|Any interger equal or greater than 0|
|Multiple Tag Allowed:|yes|
<!--SetCounters  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|SetCounters|
|:----|:----|
|Tag Format:|`[SetCounters:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--SetCountersAmount  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|SetCountersAmount|
|:----|:----|
|Tag Format:|`[SetCountersAmount:Value]`|
|Description:|nan|
|Allowed Values:|Any interger|
|Multiple Tag Allowed:|yes|
# Chat
This Section
<!--UseChatBroadcast  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|UseChatBroadcast|
|:----|:----|
|Tag Format:|`[UseChatBroadcast:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--ChatData  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ChatData|
|:----|:----|
|Tag Format:|`[ChatData:Value]`|
|Description:|nan|
|Allowed Values:|Any behaviour Chat Profile SubtypeId|
|Multiple Tag Allowed:|yes|
# Spawning
This Section
<!--SpawnVector3Ds  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|SpawnVector3Ds|
|:----|:----|
|Tag Format:|`[SpawnVector3Ds:Value]`|
|Description:|nan|
|Allowed Values:|A Vector3D Value in the following format:<br />`{X:# Y:# Z:#}`<br />Replace `#` with values in meters.|
|Multiple Tag Allowed:|yes|
<!--SpawnFactionTags  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|SpawnFactionTags|
|:----|:----|
|Tag Format:|`[SpawnFactionTags:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--Spawner  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|Spawner|
|:----|:----|
|Tag Format:|`[Spawner:Value]`|
|Description:|nan|
|Allowed Values:|Any behaviour Spawner Profile SubtypeId|
|Multiple Tag Allowed:|no|
# Zones
This Section
<!--ChangeZoneAtPosition  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ChangeZoneAtPosition|
|:----|:----|
|Tag Format:|`[ChangeZoneAtPosition:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|yes|
<!--SpawnEncounter  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|SpawnEncounter|
|:----|:----|
|Tag Format:|`[SpawnEncounter:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--ZoneNames  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ZoneNames|
|:----|:----|
|Tag Format:|`[ZoneNames:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--ZoneCoords  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ZoneCoords|
|:----|:----|
|Tag Format:|`[ZoneCoords:Value]`|
|Description:|nan|
|Allowed Values:|A Vector3D Value in the following format:<br />`{X:# Y:# Z:#}`<br />Replace `#` with values in meters.|
|Multiple Tag Allowed:|yes|
<!--ZoneToggleActiveModes  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ZoneToggleActiveModes|
|:----|:----|
|Tag Format:|`[ZoneToggleActiveModes:Value]`|
|Description:|true will activate it. false will set disable it|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|yes|
# Players
This Section
<!--AddTagstoPlayers  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|AddTagstoPlayers|
|:----|:----|
|Tag Format:|`[AddTagstoPlayers:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--AddTagsPlayerConditionIds  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|AddTagsPlayerConditionIds|
|:----|:----|
|Tag Format:|`[AddTagsPlayerConditionIds:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--AddTags  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|AddTags|
|:----|:----|
|Tag Format:|`[AddTags:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--RemoveTagsFromPlayers  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|RemoveTagsFromPlayers|
|:----|:----|
|Tag Format:|`[RemoveTagsFromPlayers:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--RemoveTagsPlayerConditionIds  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|RemoveTagsPlayerConditionIds|
|:----|:----|
|Tag Format:|`[RemoveTagsPlayerConditionIds:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--RemoveTags  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|RemoveTags|
|:----|:----|
|Tag Format:|`[RemoveTags:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--AddGPSToPlayers  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|AddGPSToPlayers|
|:----|:----|
|Tag Format:|`[AddGPSToPlayers:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--RemoveGPSFromPlayers  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|RemoveGPSFromPlayers|
|:----|:----|
|Tag Format:|`[RemoveGPSFromPlayers:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--UseGPSObjective  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|UseGPSObjective|
|:----|:----|
|Tag Format:|`[UseGPSObjective:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--GPSNames  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|GPSNames|
|:----|:----|
|Tag Format:|`[GPSNames:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--GPSDescriptions  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|GPSDescriptions|
|:----|:----|
|Tag Format:|`[GPSDescriptions:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--GPSVector3Ds  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|GPSVector3Ds|
|:----|:----|
|Tag Format:|`[GPSVector3Ds:Value]`|
|Description:|nan|
|Allowed Values:|A Vector3D Value in the following format:<br />`{X:# Y:# Z:#}`<br />Replace `#` with values in meters.|
|Multiple Tag Allowed:|yes|
<!--GPSColors  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|GPSColors|
|:----|:----|
|Tag Format:|`[GPSColors:Value]`|
|Description:|nan|
|Allowed Values:|A Vector3D Value in the following format:<br />`{X:# Y:# Z:#}`<br />.|
|Multiple Tag Allowed:|yes|
<!--FadeInPlayers  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|FadeInPlayers|
|:----|:----|
|Tag Format:|`[FadeInPlayers:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--FadeInPlayerConditionIds  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|FadeInPlayerConditionIds|
|:----|:----|
|Tag Format:|`[FadeInPlayerConditionIds:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--FadeOutPlayers  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|FadeOutPlayers|
|:----|:----|
|Tag Format:|`[FadeOutPlayers:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--FadeOutPlayerConditionIds  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|FadeOutPlayerConditionIds|
|:----|:----|
|Tag Format:|`[FadeOutPlayerConditionIds:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--TeleportPlayers  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|TeleportPlayers|
|:----|:----|
|Tag Format:|`[TeleportPlayers:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--TeleportPlayerConditionIds  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|TeleportPlayerConditionIds|
|:----|:----|
|Tag Format:|`[TeleportPlayerConditionIds:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--TeleportPlayerCoords  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|TeleportPlayerCoords|
|:----|:----|
|Tag Format:|`[TeleportPlayerCoords:Value]`|
|Description:|nan|
|Allowed Values:|A Vector3D Value in the following format:<br />`{X:# Y:# Z:#}`<br />.|
|Multiple Tag Allowed:|no|
<!--TeleportRadius  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|TeleportRadius|
|:----|:----|
|Tag Format:|`[TeleportRadius:Value]`|
|Description:|nan|
|Allowed Values:|Any interger|
|Multiple Tag Allowed:|nan|
# Events
Jaa events!
<!--ToggleEvents  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ToggleEvents|
|:----|:----|
|Tag Format:|`[ToggleEvents:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--ToggleEventIds  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ToggleEventIds|
|:----|:----|
|Tag Format:|`[ToggleEventIds:Value]`|
|Description:|nan|
|Allowed Values:|Any Event Profile SubtypeId|
|Multiple Tag Allowed:|yes|
<!--ToggleEventIdModes  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ToggleEventIdModes|
|:----|:----|
|Tag Format:|`[ToggleEventIdModes:Value]`|
|Description:|true will activate it. false will set disable it|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|yes|
<!--ToggleEventTags  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ToggleEventTags|
|:----|:----|
|Tag Format:|`[ToggleEventTags:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--ToggleEventTagModes  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ToggleEventTagModes|
|:----|:----|
|Tag Format:|`[ToggleEventTagModes:Value]`|
|Description:|true will activate it. false will set disable it|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|yes|
<!--ResetCooldownTimeOfEvents  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ResetCooldownTimeOfEvents|
|:----|:----|
|Tag Format:|`[ResetCooldownTimeOfEvents:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--ResetEventCooldownIds  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ResetEventCooldownIds|
|:----|:----|
|Tag Format:|`[ResetEventCooldownIds:Value]`|
|Description:|nan|
|Allowed Values:|Any Event Profile SubtypeId|
|Multiple Tag Allowed:|yes|
<!--ResetEventCooldownTags  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ResetEventCooldownTags|
|:----|:----|
|Tag Format:|`[ResetEventCooldownTags:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding characters ": [ ]"|
|Multiple Tag Allowed:|yes|



# Custom Actions

This Secition ...

[See Here](Custom-Event-Actions-and-ScenarioTools.md)

<!-- MES-WEBWIKI-SOURCE-SYNC-START -->
## Additional Tags

These tags add actions and world effects that an Event Action profile can run when an event fires.

|Tag:|ActivateCustomAction|
|:----|:----|
|Tag Format:|`[ActivateCustomAction:Value]`|
|Description:|Configures activate custom action.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|AddExcludedPlayerTag|
|:----|:----|
|Tag Format:|`[AddExcludedPlayerTag:Value]`|
|Description:|Configures add excluded player tag.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|AddGPSPlayerConditionIds|
|:----|:----|
|Tag Format:|`[AddGPSPlayerConditionIds:Value]`|
|Description:|Configures add gps player condition ids.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|AddIncludedPlayerTags|
|:----|:----|
|Tag Format:|`[AddIncludedPlayerTags:Value]`|
|Description:|Configures add included player tags.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|AddInstanceEventGroup|
|:----|:----|
|Tag Format:|`[AddInstanceEventGroup:Value]`|
|Description:|Configures add instance event group.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|AddItemPlayerConditionIds|
|:----|:----|
|Tag Format:|`[AddItemPlayerConditionIds:Value]`|
|Description:|Configures add item player condition ids.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|AddItemToPlayersInventory|
|:----|:----|
|Tag Format:|`[AddItemToPlayersInventory:Value]`|
|Description:|Configures add item to players inventory.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|AddPlayerConditionPlayerTags|
|:----|:----|
|Tag Format:|`[AddPlayerConditionPlayerTags:Value]`|
|Description:|Configures add player condition player tags.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|AddTagsToPlayers|
|:----|:----|
|Tag Format:|`[AddTagsToPlayers:Value]`|
|Description:|Configures add tags to players.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|BroadcastCommandProfiles|
|:----|:----|
|Tag Format:|`[BroadcastCommandProfiles:Value]`|
|Description:|Configures broadcast command profiles.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|Chance|
|:----|:----|
|Tag Format:|`[Chance:Value]`|
|Description:|Configures chance.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ChangePlayerCredits|
|:----|:----|
|Tag Format:|`[ChangePlayerCredits:Value]`|
|Description:|Configures change player credits.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChangePlayerCreditsAmount|
|:----|:----|
|Tag Format:|`[ChangePlayerCreditsAmount:Value]`|
|Description:|Configures change player credits amount.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ChangePlayerCreditsPlayerConditionIds|
|:----|:----|
|Tag Format:|`[ChangePlayerCreditsPlayerConditionIds:Value]`|
|Description:|Configures change player credits player condition ids.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChangeReputationBetweenFactions|
|:----|:----|
|Tag Format:|`[ChangeReputationBetweenFactions:Value]`|
|Description:|Configures change reputation between factions.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChangeReputationFactionsAmounts|
|:----|:----|
|Tag Format:|`[ChangeReputationFactionsAmounts:Value]`|
|Description:|Configures change reputation factions amounts.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ChangeReputationFactionsFrom|
|:----|:----|
|Tag Format:|`[ChangeReputationFactionsFrom:Value]`|
|Description:|Configures change reputation factions from.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChangeReputationFactionsTargets|
|:----|:----|
|Tag Format:|`[ChangeReputationFactionsTargets:Value]`|
|Description:|Configures change reputation factions targets.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ChangeReputationFactionsTo|
|:----|:----|
|Tag Format:|`[ChangeReputationFactionsTo:Value]`|
|Description:|Configures change reputation factions to.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChangeReputationPropagatesToPlayers|
|:----|:----|
|Tag Format:|`[ChangeReputationPropagatesToPlayers:Value]`|
|Description:|Configures change reputation propagates to players.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChangeReputationWithPlayers|
|:----|:----|
|Tag Format:|`[ChangeReputationWithPlayers:Value]`|
|Description:|Configures change reputation with players.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChatBroadcastPlayerConditionIds|
|:----|:----|
|Tag Format:|`[ChatBroadcastPlayerConditionIds:Value]`|
|Description:|Configures chat broadcast player condition ids.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChatBroadcastToSpecificPlayers|
|:----|:----|
|Tag Format:|`[ChatBroadcastToSpecificPlayers:Value]`|
|Description:|Configures chat broadcast to specific players.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChatOverrideAudio|
|:----|:----|
|Tag Format:|`[ChatOverrideAudio:Value]`|
|Description:|Configures chat override audio.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChatOverrideAuthor|
|:----|:----|
|Tag Format:|`[ChatOverrideAuthor:Value]`|
|Description:|Configures chat override author.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|ChatOverrideColor|
|:----|:----|
|Tag Format:|`[ChatOverrideColor:Value]`|
|Description:|Configures chat override color.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|ChatOverrideMessage|
|:----|:----|
|Tag Format:|`[ChatOverrideMessage:Value]`|
|Description:|Configures chat override message.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChatOverrideType|
|:----|:----|
|Tag Format:|`[ChatOverrideType:Value]`|
|Description:|Configures chat override type.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|CommandProfileIds|
|:----|:----|
|Tag Format:|`[CommandProfileIds:Value]`|
|Description:|Configures command profile ids.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|CommandProfileOriginCoords|
|:----|:----|
|Tag Format:|`[CommandProfileOriginCoords:Value]`|
|Description:|Configures command profile origin coords.|
|Allowed Value(s):|See MES source / enum definition|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsBool|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsBool:Value]`|
|Description:|Configures custom action arguments bool.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsDouble|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsDouble:Value]`|
|Description:|Configures custom action arguments double.|
|Allowed Value(s):|Any Number Value|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsFloat|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsFloat:Value]`|
|Description:|Configures custom action arguments float.|
|Allowed Value(s):|Any Number Value|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsInt|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsInt:Value]`|
|Description:|Configures custom action arguments int.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsLong|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsLong:Value]`|
|Description:|Configures custom action arguments long.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsString|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsString:Value]`|
|Description:|Configures custom action arguments string.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|CustomActionArgumentsVector3D|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsVector3D:Value]`|
|Description:|Configures custom action arguments vector3 d.|
|Allowed Value(s):|See MES source / enum definition|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionName|
|:----|:----|
|Tag Format:|`[CustomActionName:Value]`|
|Description:|Configures custom action name.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|EventControllerNames|
|:----|:----|
|Tag Format:|`[EventControllerNames:Value]`|
|Description:|Configures event controller names.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|EventControllersActive|
|:----|:----|
|Tag Format:|`[EventControllersActive:Value]`|
|Description:|Configures event controllers active.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|EventControllersSetCurrentTime|
|:----|:----|
|Tag Format:|`[EventControllersSetCurrentTime:Value]`|
|Description:|Configures event controllers set current time.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|GPSCoords|
|:----|:----|
|Tag Format:|`[GPSCoords:Value]`|
|Description:|Configures gps coords.|
|Allowed Value(s):|See MES source / enum definition|
|Multiple Tags Allowed:|No|


|Tag:|IncreaseRunCountEventIdAmount|
|:----|:----|
|Tag Format:|`[IncreaseRunCountEventIdAmount:Value]`|
|Description:|Configures increase run count event id amount.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|IncreaseRunCountEventIds|
|:----|:----|
|Tag Format:|`[IncreaseRunCountEventIds:Value]`|
|Description:|Configures increase run count event ids.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|IncreaseRunCountEventTagAmount|
|:----|:----|
|Tag Format:|`[IncreaseRunCountEventTagAmount:Value]`|
|Description:|Configures increase run count event tag amount.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|IncreaseRunCountEventTags|
|:----|:----|
|Tag Format:|`[IncreaseRunCountEventTags:Value]`|
|Description:|Configures increase run count event tags.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|IncreaseRunCountOfEvents|
|:----|:----|
|Tag Format:|`[IncreaseRunCountOfEvents:Value]`|
|Description:|Configures increase run count of events.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|InstanceEventGroupId|
|:----|:----|
|Tag Format:|`[InstanceEventGroupId:Value]`|
|Description:|Configures instance event group id.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|InstanceEventGroupReplaceKeys|
|:----|:----|
|Tag Format:|`[InstanceEventGroupReplaceKeys:Value]`|
|Description:|Configures instance event group replace keys.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|InstanceEventGroupReplaceValues|
|:----|:----|
|Tag Format:|`[InstanceEventGroupReplaceValues:Value]`|
|Description:|Configures instance event group replace values.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ItemIds|
|:----|:----|
|Tag Format:|`[ItemIds:Value]`|
|Description:|Configures item ids.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|OverrideCommandCode|
|:----|:----|
|Tag Format:|`[OverrideCommandCode:Value]`|
|Description:|Configures override command code.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|OverridePlayerConditionPosition|
|:----|:----|
|Tag Format:|`[OverridePlayerConditionPosition:Value]`|
|Description:|Configures override player condition position.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|OverridePosition|
|:----|:----|
|Tag Format:|`[OverridePosition:Value]`|
|Description:|Configures override position.|
|Allowed Value(s):|See MES source / enum definition|
|Multiple Tags Allowed:|No|


|Tag:|RemoveGPSNames|
|:----|:----|
|Tag Format:|`[RemoveGPSNames:Value]`|
|Description:|Configures remove gps names.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|RemoveGPSPlayerConditionIds|
|:----|:----|
|Tag Format:|`[RemoveGPSPlayerConditionIds:Value]`|
|Description:|Configures remove gps player condition ids.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|RemoveThisInstanceGroup|
|:----|:----|
|Tag Format:|`[RemoveThisInstanceGroup:Value]`|
|Description:|Configures remove this instance group.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ReputationChangeAmount|
|:----|:----|
|Tag Format:|`[ReputationChangeAmount:Value]`|
|Description:|Configures reputation change amount.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ReputationChangeFactions|
|:----|:----|
|Tag Format:|`[ReputationChangeFactions:Value]`|
|Description:|Configures reputation change factions.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ReputationChangesForAllRadiusPlayerFactionMembers|
|:----|:----|
|Tag Format:|`[ReputationChangesForAllRadiusPlayerFactionMembers:Value]`|
|Description:|Configures reputation changes for all radius player faction members.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ReputationMaxCap|
|:----|:----|
|Tag Format:|`[ReputationMaxCap:Value]`|
|Description:|Configures reputation max cap.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ReputationMinCap|
|:----|:----|
|Tag Format:|`[ReputationMinCap:Value]`|
|Description:|Configures reputation min cap.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ReputationPlayerConditionIds|
|:----|:----|
|Tag Format:|`[ReputationPlayerConditionIds:Value]`|
|Description:|Configures reputation player condition ids.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ResetUniqueSpawnGroup|
|:----|:----|
|Tag Format:|`[ResetUniqueSpawnGroup:Value]`|
|Description:|Configures reset unique spawn group.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ResetUniqueSpawnGroupName|
|:----|:----|
|Tag Format:|`[ResetUniqueSpawnGroupName:Value]`|
|Description:|Configures reset unique spawn group name.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|SetEventControllers|
|:----|:----|
|Tag Format:|`[SetEventControllers:Value]`|
|Description:|Configures set event controllers.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|SpawnCoords|
|:----|:----|
|Tag Format:|`[SpawnCoords:Value]`|
|Description:|Configures spawn coords.|
|Allowed Value(s):|See MES source / enum definition|
|Multiple Tags Allowed:|No|


|Tag:|SpawnReplaceKeys|
|:----|:----|
|Tag Format:|`[SpawnReplaceKeys:Value]`|
|Description:|Configures spawn replace keys.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|SpawnReplaceValues|
|:----|:----|
|Tag Format:|`[SpawnReplaceValues:Value]`|
|Description:|Configures spawn replace values.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|TryContractFail|
|:----|:----|
|Tag Format:|`[TryContractFail:Value]`|
|Description:|Configures try contract fail.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|TryContractSuccess|
|:----|:----|
|Tag Format:|`[TryContractSuccess:Value]`|
|Description:|Configures try contract success.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideAudio|
|:----|:----|
|Tag Format:|`[UseChatOverrideAudio:Value]`|
|Description:|Configures use chat override audio.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideAuthor|
|:----|:----|
|Tag Format:|`[UseChatOverrideAuthor:Value]`|
|Description:|Configures use chat override author.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideColor|
|:----|:----|
|Tag Format:|`[UseChatOverrideColor:Value]`|
|Description:|Configures use chat override color.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideMessage|
|:----|:----|
|Tag Format:|`[UseChatOverrideMessage:Value]`|
|Description:|Configures use chat override message.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideType|
|:----|:----|
|Tag Format:|`[UseChatOverrideType:Value]`|
|Description:|Configures use chat override type.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->
