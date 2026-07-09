# Factions.sbc

```xml
<?xml version="1.0"?>
<Definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
	<Factions>
	<!--Do Not Edit Above Here-->

		<!--Copy From This Line-->
		<Faction Tag="FACTTAG" Founder="Faction Founder Name Here">
			<Id>
				<TypeId>MyObjectBuilder_FactionDefinition</TypeId> <!--Do Not Edit-->
				<SubtypeId>FactionSubtypeId</SubtypeId> <!--Must Be Unique-->
			</Id>
			<DisplayName>Faction Name</DisplayName>
			<IsDefault>true</IsDefault>
			<DefaultRelation>Enemies</DefaultRelation> <!--Enemies, Neutral, Friends-->
			<AcceptHumans>false</AcceptHumans>
			<AutoAcceptMember>false</AutoAcceptMember>
			<StartingBalance>1000000</StartingBalance>
			<Type>None</Type> <!--None, Miner, Trader, Builder-->
			<DiscoveredByDefault>false</DiscoveredByDefault>
			<FactionIcon>Textures\FactionLogo\PirateIcon.dds</FactionIcon> <!--Game or Mod Path For Texture File-->
		</Faction>
		<!--Copy To This Line And Paste Directly Below-->



	<!--Do Not Edit Below Here-->
	</Factions>
</Definitions>
```
