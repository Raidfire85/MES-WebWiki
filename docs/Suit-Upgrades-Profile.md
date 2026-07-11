# Suit Upgrades

Suit Upgrades profiles use the [MES Suit Upgrades] header in SBC Description blocks.

Profile header: `[MES Suit Upgrades]`

<!-- MES-WEBWIKI-EXAMPLE-SYNC-START -->
Here is an example of how a Suit Upgrades profile definition is set up:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EntityComponents>

    <EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>MES-ExampleSuitUpgrades</SubtypeId>
      </Id>
      <Description>

      [MES Suit Upgrades]

      [BlockName:NPC-ShipyardTerminal]
      [AllowJetpackInhibitorMod:true]
      [AllowHandDrillInhibitorMod:true]
      [AllowSolarChargingMod:true]
      [AllowDamageReductionMod:true]

      </Description>
      
    </EntityComponent>

  </EntityComponents>
</Definitions>
```
<!-- MES-WEBWIKI-EXAMPLE-SYNC-END -->

<!-- MES-WEBWIKI-SOURCE-SYNC-START -->
Below are the tags you can use in your Suit Upgrades profiles.

|Tag:|AllowDamageReductionMod|
|:----|:----|
|Tag Format:|`[AllowDamageReductionMod:Value]`|
|Description:|When <code>true</code>, allows damage reduction mod.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|AllowEnergyInhibitorMod|
|:----|:----|
|Tag Format:|`[AllowEnergyInhibitorMod:Value]`|
|Description:|When <code>true</code>, allows energy inhibitor mod.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|AllowHandDrillInhibitorMod|
|:----|:----|
|Tag Format:|`[AllowHandDrillInhibitorMod:Value]`|
|Description:|When <code>true</code>, allows hand drill inhibitor mod.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|AllowJetpackInhibitorMod|
|:----|:----|
|Tag Format:|`[AllowJetpackInhibitorMod:Value]`|
|Description:|When <code>true</code>, allows jetpack inhibitor mod.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|AllowPersonnelInhibitorMod|
|:----|:----|
|Tag Format:|`[AllowPersonnelInhibitorMod:Value]`|
|Description:|When <code>true</code>, allows personnel inhibitor mod.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|AllowSolarChargingMod|
|:----|:----|
|Tag Format:|`[AllowSolarChargingMod:Value]`|
|Description:|When <code>true</code>, allows solar charging mod.|
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
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->