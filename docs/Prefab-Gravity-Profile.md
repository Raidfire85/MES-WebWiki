# Prefab Gravity

Prefab Gravity profile tags parsed from MES source (prefab gravity).

<!-- MES-WEBWIKI-EXAMPLE-SYNC-START -->
Here is an example of how a Prefab Gravity profile definition is set up:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EntityComponents>

    <EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>MES-ExamplePrefabGravity</SubtypeId>
      </Id>
      <Description>

      [PrefabIds:ExamplePrefabProfileA,ExamplePrefabProfileB]
      [MaxGravityAtmo:0]
      [MaxGravityVacuum:0]

      </Description>
      
    </EntityComponent>

  </EntityComponents>
</Definitions>
```
<!-- MES-WEBWIKI-EXAMPLE-SYNC-END -->

<!-- MES-WEBWIKI-SOURCE-SYNC-START -->
Below are the tags you can use in your Prefab Gravity profiles.

|Tag:|MaxGravityAtmo|
|:----|:----|
|Tag Format:|`[MaxGravityAtmo:Value]`|
|Description:|Maximum value for gravity atmo.|
|Allowed Value(s):|Any Number Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|MaxGravityVacuum|
|:----|:----|
|Tag Format:|`[MaxGravityVacuum:Value]`|
|Description:|Maximum value for gravity vacuum.|
|Allowed Value(s):|Any Number Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|PrefabIds|
|:----|:----|
|Tag Format:|`[PrefabIds:Value]`|
|Description:|One or more prefab profile or id values (comma-separated).|
|Allowed Value(s):|Comma-separated list of values|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|Yes|
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->