# Contract Block

Contract Block profiles use the [MES Contract Block] header in SBC Description blocks.

Profile header: `[MES Contract Block]`

<!-- MES-WEBWIKI-EXAMPLE-SYNC-START -->
Here is an example of how a Contract Block profile definition is set up:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EntityComponents>

    <EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>MES-ExampleContractBlock</SubtypeId>
      </Id>
      <Description>

      [MES Contract Block]

      [MinContracts:10]
      [MaxContracts:10]
      [MissionIds:ExampleMissionProfileA,ExampleMissionProfileB]

      </Description>
      
    </EntityComponent>

  </EntityComponents>
</Definitions>
```
<!-- MES-WEBWIKI-EXAMPLE-SYNC-END -->

<!-- MES-WEBWIKI-SOURCE-SYNC-START -->
Below are the tags you can use in your Contract Block profiles.

|Tag:|MaxContracts|
|:----|:----|
|Tag Format:|`[MaxContracts:Value]`|
|Description:|Maximum value for contracts.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|MinContracts|
|:----|:----|
|Tag Format:|`[MinContracts:Value]`|
|Description:|Minimum value for contracts.|
|Allowed Value(s):|Any Integer Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|MissionIds|
|:----|:----|
|Tag Format:|`[MissionIds:Value]`|
|Description:|One or more mission profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|Yes|
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->