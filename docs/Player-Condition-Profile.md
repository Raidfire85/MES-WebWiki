#Player-Condition-Profile.md

On it self it doesn't do anything, check where it is being referenced below.

For most cases, it loops through all the players and for each player it checks if the player passes all conditions, if that is the case the action, chat, spawncondition will only activate for that player. Handy for MP situations. 


### Player Tags
You can add Tags to certain players, what can be added by [Behavior Actions](Action.md#PlayerTags) and [Event Actions](Event.md-Action#Players), and be used as an extra condition for this condition profile. Examples on what you can make:

-Player attacks a factions ship -> Player gets tag ("Attacked_GC_recently") -> Retribution Spawngroup becomes eligible only for that player

-Make an Event that checks which SpawnOption the player chooses. -> What happens: Player chooses SpawnoptionA -> Event will trigger that activates some chat message -> using PlayerCondition again the message will only be visible  for the player

-Some custom behaviour/chat messages from NPC based which tags player have.





### Referenced by:
[Event Conditions](Event.md-Conditions#Player)  
[Event Actions](Event.md-Action#Players)   
[Behavior Actions](Action.md#PlayerTags)  
[Chat Profiles](Chat.md#sendtospecificplayers)  
[SpawnConditions](Spawn-Conditions.md#Players)

Here's an example of how a Player Condition Profile definition is setup:
```
<EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>PlayerConditionProfile-AHESpecialMessage</SubtypeId>
      </Id>
      <Description>
	[MES Player Condition]
	
	[CheckPlayerReputation:true]
	[CheckReputationwithFaction:AHE]
	[MinPlayerReputation:500]
	[MaxPlayerReputation:1500]

       	[CheckPlayerTags:true]
	[IncludedPlayerTag:RecentyAttackedGCVessel]

      </Description> 
    </EntityComponent>
```

<!--AllowOverrides  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|AllowOverrides|
|:----|:----|
|Tag Format:|`[AllowOverrides:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--AllPlayersMatchThisCondition  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|AllPlayersMatchThisCondition|
|:----|:----|
|Tag Format:|`[AllPlayersMatchThisCondition:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--UseFailCondition  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|UseFailCondition|
|:----|:----|
|Tag Format:|`[UseFailCondition:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--UseAnyPassingCondition  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|UseAnyPassingCondition|
|:----|:----|
|Tag Format:|`[UseAnyPassingCondition:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--CheckPlayerReputation  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|CheckPlayerReputation|
|:----|:----|
|Tag Format:|`[CheckPlayerReputation:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--CheckReputationwithFaction  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|CheckReputationwithFaction|
|:----|:----|
|Tag Format:|`[CheckReputationwithFaction:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--MinPlayerReputation  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|MinPlayerReputation|
|:----|:----|
|Tag Format:|`[MinPlayerReputation:Value]`|
|Description:|nan|
|Allowed Values:|Any interger |
|Multiple Tag Allowed:|yes|
<!--MaxPlayerReputation  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|MaxPlayerReputation|
|:----|:----|
|Tag Format:|`[MaxPlayerReputation:Value]`|
|Description:|nan|
|Allowed Values:|Any interger|
|Multiple Tag Allowed:|yes|
<!--CheckLastRespawnShipName  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|CheckLastRespawnShipName|
|:----|:----|
|Tag Format:|`[CheckLastRespawnShipName:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--LastRespawnShipName  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|LastRespawnShipName|
|:----|:----|
|Tag Format:|`[LastRespawnShipName:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|no|
<!--CheckPlayerTags  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|CheckPlayerTags|
|:----|:----|
|Tag Format:|`[CheckPlayerTags:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--IncludedPlayerTag  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|IncludedPlayerTag|
|:----|:----|
|Tag Format:|`[IncludedPlayerTag:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--ExcludedPlayerTag  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ExcludedPlayerTag|
|:----|:----|
|Tag Format:|`[ExcludedPlayerTag:Value]`|
|Description:|nan|
|Allowed Values:|Any name string excluding `:`, `[`, `]`|
|Multiple Tag Allowed:|yes|
<!--CheckPlayerNear  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|CheckPlayerNear|
|:----|:----|
|Tag Format:|`[CheckPlayerNear:Value]`|
|Description:|nan|
|Allowed Values:|`true`<br>`false`|
|Multiple Tag Allowed:|no|
<!--PlayerNearCoords  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|PlayerNearCoords|
|:----|:----|
|Tag Format:|`[PlayerNearCoords:Value]`|
|Description:|nan|
|Allowed Values:|A Vector3D Value in the following format:<br />`{X:# Y:# Z:#}`<br />.|
|Multiple Tag Allowed:|no|
<!--PlayerNearDistanceFromCoords  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|PlayerNearDistanceFromCoords|
|:----|:----|
|Tag Format:|`[PlayerNearDistanceFromCoords:Value]`|
|Description:|nan|
|Allowed Values:|Any interger equal or greater than 0|
|Multiple Tag Allowed:|no|
<!--PlayerNearMinDistanceFromCoords  -->
|Tag:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|PlayerNearMinDistanceFromCoords|
|:----|:----|
|Tag Format:|`[PlayerNearMinDistanceFromCoords:Value]`|
|Description:|nan|
|Allowed Values:|Any interger equal or greater than 0|
|Multiple Tag Allowed:|no|

<!-- MES-WEBWIKI-SOURCE-SYNC-START -->
## Additional Tags

These tags add player-state checks and requirements for Player Condition profiles.

|Tag:|AllowAnyExcludedPlayerTag|
|:----|:----|
|Tag Format:|`[AllowAnyExcludedPlayerTag:Value]`|
|Description:|Configures allow any excluded player tag.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|AllowAnyIncludedPlayerTag|
|:----|:----|
|Tag Format:|`[AllowAnyIncludedPlayerTag:Value]`|
|Description:|Configures allow any included player tag.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|CheckPlayerCreditBalance|
|:----|:----|
|Tag Format:|`[CheckPlayerCreditBalance:Value]`|
|Description:|Configures check player credit balance.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|CheckPlayerInActiveZone|
|:----|:----|
|Tag Format:|`[CheckPlayerInActiveZone:Value]`|
|Description:|Configures check player in active zone.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|CheckPlayerInZone|
|:----|:----|
|Tag Format:|`[CheckPlayerInZone:Value]`|
|Description:|Configures check player in zone.|
|Allowed Value(s):|`true` `false`|
|Multiple Tags Allowed:|No|


|Tag:|ExcludedPlayerTags|
|:----|:----|
|Tag Format:|`[ExcludedPlayerTags:Value]`|
|Description:|Configures excluded player tags.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|IncludedPlayerTags|
|:----|:----|
|Tag Format:|`[IncludedPlayerTags:Value]`|
|Description:|Configures included player tags.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|


|Tag:|MaxPlayerCreditBalance|
|:----|:----|
|Tag Format:|`[MaxPlayerCreditBalance:Value]`|
|Description:|Configures max player credit balance.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|MinPlayerCreditBalance|
|:----|:----|
|Tag Format:|`[MinPlayerCreditBalance:Value]`|
|Description:|Configures min player credit balance.|
|Allowed Value(s):|Any Integer Value|
|Multiple Tags Allowed:|No|


|Tag:|ZoneName|
|:----|:----|
|Tag Format:|`[ZoneName:Value]`|
|Description:|Configures zone name.|
|Allowed Value(s):|Comma-separated list of values|
|Multiple Tags Allowed:|Yes|
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->
