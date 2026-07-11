# Shipyard

Shipyard profiles configure NPC terminals for blueprint building, scrap sales, repairs and construction, paid block replacement, and grid takeover purchases.

Profile header: `[MES Shipyard]`

<!-- MES-WEBWIKI-EXAMPLE-SYNC-START -->
Here is an example of how a Shipyard profile definition is set up:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EntityComponents>

    <EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>MES-ExampleShipyard</SubtypeId>
      </Id>
      <Description>

      [MES Shipyard]

      [BlockName:NPC-ShipyardTerminal]
      [InteractionRadius:250]
      [AllowBlueprintBuilding:true]
      [AllowScrapPurchasing:true]
      [AllowRepairAndConstruction:true]
      [BlueprintBuildingCommissionPercentage:115]

      </Description>
      
    </EntityComponent>

  </EntityComponents>
</Definitions>
```
<!-- MES-WEBWIKI-EXAMPLE-SYNC-END -->

<!-- MES-WEBWIKI-SOURCE-SYNC-START -->
Below are the tags you can use in your Shipyard profiles.

|Tag:|AllowBlueprintBuilding|
|:----|:----|
|Tag Format:|`[AllowBlueprintBuilding:Value]`|
|Description:|When <code>true</code>, players can build grids from blueprints at this shipyard terminal.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|AllowCustomReplacement|
|:----|:----|
|Tag Format:|`[AllowCustomReplacement:Value]`|
|Description:|When <code>true</code>, players can pay to replace blocks using <code>OldBlock</code>/<code>NewBlock</code> or <code>BlockReplacementProfileIds</code>.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|AllowGridTakeover|
|:----|:----|
|Tag Format:|`[AllowGridTakeover:Value]`|
|Description:|When <code>true</code>, players can purchase ownership of an NPC grid through this shipyard.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|AllowRepairAndConstruction|
|:----|:----|
|Tag Format:|`[AllowRepairAndConstruction:Value]`|
|Description:|When <code>true</code>, players can repair and weld incomplete blocks at this shipyard.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|AllowScrapPurchasing|
|:----|:----|
|Tag Format:|`[AllowScrapPurchasing:Value]`|
|Description:|When <code>true</code>, players can sell scrap grids to this shipyard.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|BlockName|
|:----|:----|
|Tag Format:|`[BlockName:Value]`|
|Description:|SubtypeId or name of the shipyard terminal block this profile applies to.|
|Allowed Value(s):|Any String Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|BlockReplacementProfileIds|
|:----|:----|
|Tag Format:|`[BlockReplacementProfileIds:Value]`|
|Description:|One or more block replacement profile profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|Yes|


|Tag:|BlueprintBuildingCommissionPercentage|
|:----|:----|
|Tag Format:|`[BlueprintBuildingCommissionPercentage:Value]`|
|Description:|Blueprint build price multiplier percentage (100 = raw cost). Source default: <code>115</code>.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|BlueprintBuildingLargeGridBlockLimit|
|:----|:----|
|Tag Format:|`[BlueprintBuildingLargeGridBlockLimit:Value]`|
|Description:|Numeric value for blueprint building large grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|BlueprintBuildingReputationDiscount|
|:----|:----|
|Tag Format:|`[BlueprintBuildingReputationDiscount:Value]`|
|Description:|Numeric value for blueprint building reputation discount.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|BlueprintBuildingSmallGridBlockLimit|
|:----|:----|
|Tag Format:|`[BlueprintBuildingSmallGridBlockLimit:Value]`|
|Description:|Numeric value for blueprint building small grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|CustomReplacementCommissionPercentage|
|:----|:----|
|Tag Format:|`[CustomReplacementCommissionPercentage:Value]`|
|Description:|Numeric amount for custom replacement commission percentage.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|CustomReplacementLargeGridBlockLimit|
|:----|:----|
|Tag Format:|`[CustomReplacementLargeGridBlockLimit:Value]`|
|Description:|Numeric value for custom replacement large grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|CustomReplacementReputationDiscount|
|:----|:----|
|Tag Format:|`[CustomReplacementReputationDiscount:Value]`|
|Description:|Numeric value for custom replacement reputation discount.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|CustomReplacementSmallGridBlockLimit|
|:----|:----|
|Tag Format:|`[CustomReplacementSmallGridBlockLimit:Value]`|
|Description:|Numeric value for custom replacement small grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|GridTakeoverLargeGridBlockLimit|
|:----|:----|
|Tag Format:|`[GridTakeoverLargeGridBlockLimit:Value]`|
|Description:|Numeric value for grid takeover large grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|GridTakeoverPricePerComputerMultiplier|
|:----|:----|
|Tag Format:|`[GridTakeoverPricePerComputerMultiplier:Value]`|
|Description:|Price multiplier per computer block when taking over a grid. Source default: <code>100</code>.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|GridTakeoverReputationDiscount|
|:----|:----|
|Tag Format:|`[GridTakeoverReputationDiscount:Value]`|
|Description:|Numeric value for grid takeover reputation discount.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|GridTakeoverSmallGridBlockLimit|
|:----|:----|
|Tag Format:|`[GridTakeoverSmallGridBlockLimit:Value]`|
|Description:|Numeric value for grid takeover small grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|InteractionRadius|
|:----|:----|
|Tag Format:|`[InteractionRadius:Value]`|
|Description:|Radius in meters around the shipyard block where players can interact. Source default: <code>250</code>.|
|Allowed Value(s):|Any Number Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|MinReputation|
|:----|:----|
|Tag Format:|`[MinReputation:Value]`|
|Description:|Minimum faction reputation required (may be unused in current MES build). Source default: <code>-500</code>.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|NewBlock|
|:----|:----|
|Tag Format:|`[NewBlock:Value]`|
|Description:|Configures new block.|
|Allowed Value(s):|See MES source / enum definition|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|OldBlock|
|:----|:----|
|Tag Format:|`[OldBlock:Value]`|
|Description:|Configures old block.|
|Allowed Value(s):|See MES source / enum definition|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|RepairAndConstructionCommissionPercentage|
|:----|:----|
|Tag Format:|`[RepairAndConstructionCommissionPercentage:Value]`|
|Description:|Numeric amount for repair and construction commission percentage.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|RepairAndConstructionExcludedComponentIds|
|:----|:----|
|Tag Format:|`[RepairAndConstructionExcludedComponentIds:Value]`|
|Description:|One or more repair and construction excluded component profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|Yes|


|Tag:|RepairAndConstructionLargeGridBlockLimit|
|:----|:----|
|Tag Format:|`[RepairAndConstructionLargeGridBlockLimit:Value]`|
|Description:|Numeric value for repair and construction large grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|RepairAndConstructionReputationDiscount|
|:----|:----|
|Tag Format:|`[RepairAndConstructionReputationDiscount:Value]`|
|Description:|Numeric value for repair and construction reputation discount.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|RepairAndConstructionSmallGridBlockLimit|
|:----|:----|
|Tag Format:|`[RepairAndConstructionSmallGridBlockLimit:Value]`|
|Description:|Numeric value for repair and construction small grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|ReplaceBlockReference|
|:----|:----|
|Tag Format:|`[ReplaceBlockReference:Value]`|
|Description:|List of values for replace block reference.|
|Allowed Value(s):|See MES source / enum definition|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|ReputationNeededForDiscount|
|:----|:----|
|Tag Format:|`[ReputationNeededForDiscount:Value]`|
|Description:|Faction reputation at or above this value unlocks reputation-based discounts. Source default: <code>501</code>.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|ScrapPurchasingIncludeInventory|
|:----|:----|
|Tag Format:|`[ScrapPurchasingIncludeInventory:Value]`|
|Description:|When <code>true</code>, activates scrap purchasing include inventory.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|ScrapPurchasingLargeGridBlockLimit|
|:----|:----|
|Tag Format:|`[ScrapPurchasingLargeGridBlockLimit:Value]`|
|Description:|Numeric value for scrap purchasing large grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|ScrapPurchasingMaxPercentageValue|
|:----|:----|
|Tag Format:|`[ScrapPurchasingMaxPercentageValue:Value]`|
|Description:|Base percentage of scrap value paid to the player. Source default: <code>75</code>.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|ScrapPurchasingReputationDiscount|
|:----|:----|
|Tag Format:|`[ScrapPurchasingReputationDiscount:Value]`|
|Description:|Numeric value for scrap purchasing reputation discount.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|ScrapPurchasingSmallGridBlockLimit|
|:----|:----|
|Tag Format:|`[ScrapPurchasingSmallGridBlockLimit:Value]`|
|Description:|Numeric value for scrap purchasing small grid block limit.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->