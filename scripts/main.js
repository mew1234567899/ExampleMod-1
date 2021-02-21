//units
require("units/testunit4");

//blocks
require("blocks/activationmatter-weaver");
require("blocks/atmospheric-cooler");
require("blocks/impact-projector");
require("blocks/multi-projector");
require("blocks/multi-cultivator");
require("blocks/power-processor");
require("blocks/coredvalut");
require("blocks/boostwater");
require("blocks/plastsalvo");
require("blocks/titanium-launch-pad")

//experiement
require("experiment/page");
require("experiment/oregen");

//campaign
require("campaign/planet");

//units
require("units/testunit4");

print("Load Complete!");

//this should export a map into sector 174//
const mapVariable = extend(SectorPreset, "mewsmap", Planets.serpulo, 174, {
    localizedName: "sadland",
    description: "you'll never laugh again",
    difficulty: 2
})




/*
credit(){
  younggam: "answering tons of question",
  deltaNedas: "refer to routorio, rtfm",
  sk7725: "answering tons of question, refer to testers"
}
*/
