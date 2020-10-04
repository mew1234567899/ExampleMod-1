const spawnUnit = Vars.content.getByName(ContentType.unit, "testmod-electricdagger");

const testunit4Entity = () => extend(BuilderMinerPayloadUnit, {});
EntityMapping.nameMap.put("testunit4", testunit4Entity);
const testunit4 = extendContent(UnitType, "testunit4", {});

testunit4.abilities.add(new ForceFieldAbility(96, 0.5, 550, 2 * 60));
testunit4.abilities.add(new UnitSpawnAbility(spawnUnit, 5 * 60, 8, 4));
testunit4.abilities.add(new UnitSpawnAbility(spawnUnit, 5 * 60, -8, 4));
testunit4.abilities.add(new UnitSpawnAbility(spawnUnit, 5 * 60, 8, -4));
testunit4.abilities.add(new UnitSpawnAbility(spawnUnit, 5 * 60, -8, -4));
