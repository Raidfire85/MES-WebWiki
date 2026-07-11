# Safezone

Safezone profiles use the [MES SafeZone] header in SBC Description blocks.

Profile header: `[MES SafeZone]`

<!-- MES-WEBWIKI-EXAMPLE-SYNC-START -->
Here is an example of how a Safezone profile definition is set up:

```
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <EntityComponents>

    <EntityComponent xsi:type="MyObjectBuilder_InventoryComponentDefinition">
      <Id>
          <TypeId>Inventory</TypeId>
          <SubtypeId>MES-ExampleSafezone</SubtypeId>
      </Id>
      <Description>

      [MES SafeZone]

      [Enabled:true]
      [Radius:250]
      [Coordinates:Value]
      [PlayerAccess:Value]
      [GridAccess:Value]
      [IsVisible:false]

      </Description>
      
    </EntityComponent>

  </EntityComponents>
</Definitions>
```
<!-- MES-WEBWIKI-EXAMPLE-SYNC-END -->

<!-- MES-WEBWIKI-SOURCE-SYNC-START -->
Below are the tags you can use in your Safezone profiles.

|Tag:|AllowedActions|
|:----|:----|
|Tag Format:|`[AllowedActions:Value]`|
|Description:|Enum value for allowed actions.|
|Allowed Value(s):|`None` `Damage` `Shooting` `Drilling` `Welding` `Grinding` `VoxelHand` `Building` `LandingGearLock` `ConvertToStation` `BuildingProjections` `All` `AdminIgnore`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|Yes|


|Tag:|Color|
|:----|:----|
|Tag Format:|`[Color:Value]`|
|Description:|Configures color.|
|Allowed Value(s):|Vector3 value (RGB color or coordinates) eg: `{X:0 Y:0 Z:0}`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|Coordinates|
|:----|:----|
|Tag Format:|`[Coordinates:Value]`|
|Description:|Configures coordinates.|
|Allowed Value(s):|Vector3D coordinates eg: `{X:0 Y:0 Z:0}`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|Enabled|
|:----|:----|
|Tag Format:|`[Enabled:Value]`|
|Description:|When <code>true</code>, enables d.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|FactionAccess|
|:----|:----|
|Tag Format:|`[FactionAccess:Value]`|
|Description:|Enum value for faction access.|
|Allowed Value(s):|`Whitelist` `Blacklist`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|FloatingObjectAccess|
|:----|:----|
|Tag Format:|`[FloatingObjectAccess:Value]`|
|Description:|Enum value for floating object access.|
|Allowed Value(s):|`Whitelist` `Blacklist`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|GridAccess|
|:----|:----|
|Tag Format:|`[GridAccess:Value]`|
|Description:|Enum value for grid access.|
|Allowed Value(s):|`Whitelist` `Blacklist`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|IsVisible|
|:----|:----|
|Tag Format:|`[IsVisible:Value]`|
|Description:|When <code>true</code>, enables or applies visible.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|LinkToParentEntity|
|:----|:----|
|Tag Format:|`[LinkToParentEntity:Value]`|
|Description:|When <code>true</code>, enables or applies to parent entity.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|Offset|
|:----|:----|
|Tag Format:|`[Offset:Value]`|
|Description:|Configures offset.|
|Allowed Value(s):|Vector3D coordinates eg: `{X:0 Y:0 Z:0}`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|ParentEntityRadiusMultiplier|
|:----|:----|
|Tag Format:|`[ParentEntityRadiusMultiplier:Value]`|
|Description:|Numeric value for parent entity radius multiplier.|
|Allowed Value(s):|Any Number Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|PlayerAccess|
|:----|:----|
|Tag Format:|`[PlayerAccess:Value]`|
|Description:|Enum value for player access.|
|Allowed Value(s):|`Whitelist` `Blacklist`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|Radius|
|:----|:----|
|Tag Format:|`[Radius:Value]`|
|Description:|Configures radius.|
|Allowed Value(s):|Any Number Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|RadiusFromParentEntity|
|:----|:----|
|Tag Format:|`[RadiusFromParentEntity:Value]`|
|Description:|When <code>true</code>, activates radius from parent entity.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|Shape|
|:----|:----|
|Tag Format:|`[Shape:Value]`|
|Description:|Enum value for shape.|
|Allowed Value(s):|`Sphere` `Box`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|Size|
|:----|:----|
|Tag Format:|`[Size:Value]`|
|Description:|Vector3D coordinates for size.|
|Allowed Value(s):|Vector3D coordinates eg: `{X:0 Y:0 Z:0}`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|Texture|
|:----|:----|
|Tag Format:|`[Texture:Value]`|
|Description:|Text value for texture.|
|Allowed Value(s):|Any String Value|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|


|Tag:|UseDiamondBoxOrientation|
|:----|:----|
|Tag Format:|`[UseDiamondBoxOrientation:Value]`|
|Description:|When <code>true</code>, uses diamond box orientation.|
|Allowed Value(s):|`true` `false`|
|Default Value(s):|`N/A`|
|Multiple Tags Allowed:|No|
<!-- MES-WEBWIKI-SOURCE-SYNC-END -->