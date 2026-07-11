# Faction Icon

Faction Icon profiles use the [MES Faction Icon] header in SBC Description blocks.

Profile header: `[MES Faction Icon]`

<!-- MES-WEBWIKI-EXAMPLE-SYNC-START -->
Here is an example of how a Faction Icon profile definition is set up:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EntityComponents>

    <EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>MES-ExampleFactionIcon</SubtypeId>
      </Id>
      <Description>

      [MES Faction Icon]

      [Faction:SPRT]
      [Color:Value]
      [Background:Value]

      </Description>
      
    </EntityComponent>

  </EntityComponents>
</Definitions>
```
<!-- MES-WEBWIKI-EXAMPLE-SYNC-END -->

<!-- MES-WEBWIKI-SOURCE-SYNC-START -->
Below are the tags you can use in your Faction Icon profiles.

|Tag:|Background|
|:----|:----|
|Tag Format:|`[Background:Value]`|
|Description:|Vector3D coordinates for background.|
|Allowed Value(s):|See MES source / enum definition|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|Color|
|:----|:----|
|Tag Format:|`[Color:Value]`|
|Description:|Configures color.|
|Allowed Value(s):|See MES source / enum definition|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|Faction|
|:----|:----|
|Tag Format:|`[Faction:Value]`|
|Description:|Text value for faction.|
|Allowed Value(s):|Any String Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->