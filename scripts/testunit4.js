const testunit4 = extendContent(UnitType, "testunit4", {
    load() {
        this.super$load();
        this.region = Core.atlas.find(this.name);
    }
});

testunit4.abilities.add(new ForceFieldAbility(96, 0.5, 550, 2 * 60));

testunit4.constructor = () => extend(BuilderMinerPayloadUnit, {});
