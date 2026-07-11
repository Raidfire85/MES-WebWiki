# Block Replacement

Block Replacement profiles use the [MES Block Replacement] header in SBC Description blocks.

Profile header: `[MES Block Replacement]`

<!-- MES-WEBWIKI-EXAMPLE-SYNC-START -->
Here is an example of how a Block Replacement profile definition is set up:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EntityComponents>

    <EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>MES-ExampleBlockReplacement</SubtypeId>
      </Id>
      <Description>

      [MES Block Replacement]

      [OldBlock:MyObjectBuilder_CubeBlock/LargeBlockSmallGenerator]
      [NewBlock:MyObjectBuilder_CubeBlock/LargeBlockSmallGeneratorUpgrade]
      [Limit:-1]

      </Description>
      
    </EntityComponent>

  </EntityComponents>
</Definitions>
```
<!-- MES-WEBWIKI-EXAMPLE-SYNC-END -->

<!-- MES-WEBWIKI-SOURCE-SYNC-START -->
Below are the tags you can use to swap blocks on spawned grids during manipulation.

|Tag:|Limit|
|:----|:----|
|Tag Format:|`[Limit:Value]`|
|Description:|Configures limit.|
|Allowed Value(s):|See MES source / enum definition|
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
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->