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
|Description:|When <code>true</code>, activates custom action.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|AddExcludedPlayerTag|
|:----|:----|
|Tag Format:|`[AddExcludedPlayerTag:Value]`|
|Description:|List of values for add excluded player tag.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|AddGPSPlayerConditionIds|
|:----|:----|
|Tag Format:|`[AddGPSPlayerConditionIds:Value]`|
|Description:|One or more add gps player condition profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|AddIncludedPlayerTags|
|:----|:----|
|Tag Format:|`[AddIncludedPlayerTags:Value]`|
|Description:|List of values for add included player tags.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|AddInstanceEventGroup|
|:----|:----|
|Tag Format:|`[AddInstanceEventGroup:Value]`|
|Description:|When <code>true</code>, enables or applies instance event group.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|AddItemPlayerConditionIds|
|:----|:----|
|Tag Format:|`[AddItemPlayerConditionIds:Value]`|
|Description:|One or more add item player condition profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|AddItemToPlayersInventory|
|:----|:----|
|Tag Format:|`[AddItemToPlayersInventory:Value]`|
|Description:|When <code>true</code>, enables or applies item to players inventory.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|AddPlayerConditionPlayerTags|
|:----|:----|
|Tag Format:|`[AddPlayerConditionPlayerTags:Value]`|
|Description:|When <code>true</code>, enables or applies player condition player tags.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|AddTagsToPlayers|
|:----|:----|
|Tag Format:|`[AddTagsToPlayers:Value]`|
|Description:|When <code>true</code>, enables or applies tags to players.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|BroadcastCommandProfiles|
|:----|:----|
|Tag Format:|`[BroadcastCommandProfiles:Value]`|
|Description:|When <code>true</code>, broadcasts command profiles.|
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
|Description:|When <code>true</code>, changes player credits.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChangePlayerCreditsAmount|
|:----|:----|
|Tag Format:|`[ChangePlayerCreditsAmount:Value]`|
|Description:|Numeric amount for change player credits amount.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ChangePlayerCreditsPlayerConditionIds|
|:----|:----|
|Tag Format:|`[ChangePlayerCreditsPlayerConditionIds:Value]`|
|Description:|One or more change player credits player condition profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChangeReputationBetweenFactions|
|:----|:----|
|Tag Format:|`[ChangeReputationBetweenFactions:Value]`|
|Description:|When <code>true</code>, changes reputation between factions.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChangeReputationFactionsAmounts|
|:----|:----|
|Tag Format:|`[ChangeReputationFactionsAmounts:Value]`|
|Description:|List of values for change reputation factions amounts.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ChangeReputationFactionsFrom|
|:----|:----|
|Tag Format:|`[ChangeReputationFactionsFrom:Value]`|
|Description:|List of values for change reputation factions from.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChangeReputationFactionsTargets|
|:----|:----|
|Tag Format:|`[ChangeReputationFactionsTargets:Value]`|
|Description:|List of values for change reputation factions targets.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ChangeReputationFactionsTo|
|:----|:----|
|Tag Format:|`[ChangeReputationFactionsTo:Value]`|
|Description:|List of values for change reputation factions to.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChangeReputationPropagatesToPlayers|
|:----|:----|
|Tag Format:|`[ChangeReputationPropagatesToPlayers:Value]`|
|Description:|When <code>true</code>, changes reputation propagates to players.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChangeReputationWithPlayers|
|:----|:----|
|Tag Format:|`[ChangeReputationWithPlayers:Value]`|
|Description:|When <code>true</code>, changes reputation with players.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChatBroadcastPlayerConditionIds|
|:----|:----|
|Tag Format:|`[ChatBroadcastPlayerConditionIds:Value]`|
|Description:|One or more chat broadcast player condition profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChatBroadcastToSpecificPlayers|
|:----|:----|
|Tag Format:|`[ChatBroadcastToSpecificPlayers:Value]`|
|Description:|When <code>true</code>, activates chat broadcast to specific players.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ChatOverrideAudio|
|:----|:----|
|Tag Format:|`[ChatOverrideAudio:Value]`|
|Description:|List of values for chat override audio.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChatOverrideAuthor|
|:----|:----|
|Tag Format:|`[ChatOverrideAuthor:Value]`|
|Description:|Text value for chat override author.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|ChatOverrideColor|
|:----|:----|
|Tag Format:|`[ChatOverrideColor:Value]`|
|Description:|Text value for chat override color.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|ChatOverrideMessage|
|:----|:----|
|Tag Format:|`[ChatOverrideMessage:Value]`|
|Description:|List of values for chat override message.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ChatOverrideType|
|:----|:----|
|Tag Format:|`[ChatOverrideType:Value]`|
|Description:|Text value for chat override type.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|CommandProfileIds|
|:----|:----|
|Tag Format:|`[CommandProfileIds:Value]`|
|Description:|One or more command profile profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|CommandProfileOriginCoords|
|:----|:----|
|Tag Format:|`[CommandProfileOriginCoords:Value]`|
|Description:|Vector3D coordinates for command profile origin coords.|
|Allowed Value(s):|Vector3D coordinates eg: `{X:0 Y:0 Z:0}`|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsBool|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsBool:Value]`|
|Description:|When <code>true</code>, activates custom action arguments bool.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsDouble|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsDouble:Value]`|
|Description:|Numeric value for custom action arguments double.|
|Allowed Value(s):|Any Number Value|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsFloat|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsFloat:Value]`|
|Description:|Numeric value for custom action arguments float.|
|Allowed Value(s):|Any Number Value|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsInt|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsInt:Value]`|
|Description:|List of values for custom action arguments int.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsLong|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsLong:Value]`|
|Description:|Numeric value for custom action arguments long.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionArgumentsString|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsString:Value]`|
|Description:|List of values for custom action arguments string.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|CustomActionArgumentsVector3D|
|:----|:----|
|Tag Format:|`[CustomActionArgumentsVector3D:Value]`|
|Description:|List of values for custom action arguments vector3 d.|
|Allowed Value(s):|See MES source / enum definition|
|Multiple Tags Allowed:|No|


|Tag:|CustomActionName|
|:----|:----|
|Tag Format:|`[CustomActionName:Value]`|
|Description:|Text value for custom action name.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|EventControllerNames|
|:----|:----|
|Tag Format:|`[EventControllerNames:Value]`|
|Description:|One or more event controller profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|EventControllersActive|
|:----|:----|
|Tag Format:|`[EventControllersActive:Value]`|
|Description:|When <code>true</code>, activates event controllers active.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|EventControllersSetCurrentTime|
|:----|:----|
|Tag Format:|`[EventControllersSetCurrentTime:Value]`|
|Description:|When <code>true</code>, activates event controllers set current time.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|GPSCoords|
|:----|:----|
|Tag Format:|`[GPSCoords:Value]`|
|Description:|List of values for gps coords.|
|Allowed Value(s):|See MES source / enum definition|
|Multiple Tags Allowed:|No|


|Tag:|IncreaseRunCountEventIdAmount|
|:----|:----|
|Tag Format:|`[IncreaseRunCountEventIdAmount:Value]`|
|Description:|Numeric amount for increase run count event id amount.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|IncreaseRunCountEventIds|
|:----|:----|
|Tag Format:|`[IncreaseRunCountEventIds:Value]`|
|Description:|One or more increase run count event profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|IncreaseRunCountEventTagAmount|
|:----|:----|
|Tag Format:|`[IncreaseRunCountEventTagAmount:Value]`|
|Description:|Numeric amount for increase run count event tag amount.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|IncreaseRunCountEventTags|
|:----|:----|
|Tag Format:|`[IncreaseRunCountEventTags:Value]`|
|Description:|List of values for increase run count event tags.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|IncreaseRunCountOfEvents|
|:----|:----|
|Tag Format:|`[IncreaseRunCountOfEvents:Value]`|
|Description:|When <code>true</code>, enables or applies run count of events.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|InstanceEventGroupId|
|:----|:----|
|Tag Format:|`[InstanceEventGroupId:Value]`|
|Description:|A instance event group profile or id value.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|InstanceEventGroupReplaceKeys|
|:----|:----|
|Tag Format:|`[InstanceEventGroupReplaceKeys:Value]`|
|Description:|List of values for instance event group replace keys.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|InstanceEventGroupReplaceValues|
|:----|:----|
|Tag Format:|`[InstanceEventGroupReplaceValues:Value]`|
|Description:|List of values for instance event group replace values.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ItemIds|
|:----|:----|
|Tag Format:|`[ItemIds:Value]`|
|Description:|One or more item profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|OverrideCommandCode|
|:----|:----|
|Tag Format:|`[OverrideCommandCode:Value]`|
|Description:|Text value for override command code.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|OverridePlayerConditionPosition|
|:----|:----|
|Tag Format:|`[OverridePlayerConditionPosition:Value]`|
|Description:|When <code>true</code>, activates override player condition position.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|OverridePosition|
|:----|:----|
|Tag Format:|`[OverridePosition:Value]`|
|Description:|Vector3D coordinates for override position.|
|Allowed Value(s):|Vector3D coordinates eg: `{X:0 Y:0 Z:0}`|
|Multiple Tags Allowed:|No|


|Tag:|RemoveGPSNames|
|:----|:----|
|Tag Format:|`[RemoveGPSNames:Value]`|
|Description:|One or more remove gps profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|RemoveGPSPlayerConditionIds|
|:----|:----|
|Tag Format:|`[RemoveGPSPlayerConditionIds:Value]`|
|Description:|One or more remove gps player condition profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|RemoveThisInstanceGroup|
|:----|:----|
|Tag Format:|`[RemoveThisInstanceGroup:Value]`|
|Description:|When <code>true</code>, enables or applies this instance group.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ReputationChangeAmount|
|:----|:----|
|Tag Format:|`[ReputationChangeAmount:Value]`|
|Description:|Numeric amount for reputation change amount.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ReputationChangeFactions|
|:----|:----|
|Tag Format:|`[ReputationChangeFactions:Value]`|
|Description:|List of values for reputation change factions.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ReputationChangesForAllRadiusPlayerFactionMembers|
|:----|:----|
|Tag Format:|`[ReputationChangesForAllRadiusPlayerFactionMembers:Value]`|
|Description:|When <code>true</code>, activates reputation changes for all radius player faction members.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ReputationMaxCap|
|:----|:----|
|Tag Format:|`[ReputationMaxCap:Value]`|
|Description:|Numeric value for reputation max cap.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ReputationMinCap|
|:----|:----|
|Tag Format:|`[ReputationMinCap:Value]`|
|Description:|Numeric value for reputation min cap.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ReputationPlayerConditionIds|
|:----|:----|
|Tag Format:|`[ReputationPlayerConditionIds:Value]`|
|Description:|One or more reputation player condition profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|ResetUniqueSpawnGroup|
|:----|:----|
|Tag Format:|`[ResetUniqueSpawnGroup:Value]`|
|Description:|When <code>true</code>, resets unique spawn group.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ResetUniqueSpawnGroupName|
|:----|:----|
|Tag Format:|`[ResetUniqueSpawnGroupName:Value]`|
|Description:|Text value for reset unique spawn group name.|
|Allowed Value(s):|Any String Value|
|Multiple Tags Allowed:|No|


|Tag:|SetEventControllers|
|:----|:----|
|Tag Format:|`[SetEventControllers:Value]`|
|Description:|When <code>true</code>, sets event controllers.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|SpawnCoords|
|:----|:----|
|Tag Format:|`[SpawnCoords:Value]`|
|Description:|List of values for spawn coords.|
|Allowed Value(s):|See MES source / enum definition|
|Multiple Tags Allowed:|No|


|Tag:|SpawnReplaceKeys|
|:----|:----|
|Tag Format:|`[SpawnReplaceKeys:Value]`|
|Description:|List of values for spawn replace keys.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|SpawnReplaceValues|
|:----|:----|
|Tag Format:|`[SpawnReplaceValues:Value]`|
|Description:|List of values for spawn replace values.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|TryContractFail|
|:----|:----|
|Tag Format:|`[TryContractFail:Value]`|
|Description:|When <code>true</code>, attempts contract fail.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|TryContractSuccess|
|:----|:----|
|Tag Format:|`[TryContractSuccess:Value]`|
|Description:|When <code>true</code>, attempts contract success.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideAudio|
|:----|:----|
|Tag Format:|`[UseChatOverrideAudio:Value]`|
|Description:|When <code>true</code>, uses chat override audio.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideAuthor|
|:----|:----|
|Tag Format:|`[UseChatOverrideAuthor:Value]`|
|Description:|When <code>true</code>, uses chat override author.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideColor|
|:----|:----|
|Tag Format:|`[UseChatOverrideColor:Value]`|
|Description:|When <code>true</code>, uses chat override color.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideMessage|
|:----|:----|
|Tag Format:|`[UseChatOverrideMessage:Value]`|
|Description:|When <code>true</code>, uses chat override message.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|UseChatOverrideType|
|:----|:----|
|Tag Format:|`[UseChatOverrideType:Value]`|
|Description:|When <code>true</code>, uses chat override type.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->
