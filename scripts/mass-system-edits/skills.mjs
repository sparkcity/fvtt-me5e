export const loadSkillsEdits = function () {

  // Replace unused skills with ME5E ones
  CONFIG.DND5E.skills.arc = {
    label: "ME5E.skills.skillElectronics",
    ability: "int",
    fullKey: "electronics",
    icon: "",
  };

  CONFIG.DND5E.skills.nat = {
    label: "ME5E.skills.skillEngineering",
    ability: "int",
    fullKey: "engineering",
    icon: "",
  };

  CONFIG.DND5E.skills.rel = {
    label: "ME5E.skills.skillScience",
    ability: "int",
    fullKey: "science",
    icon: "",
  };

  CONFIG.DND5E.skills.ani = {
    label: "ME5E.skills.skillVehicleHandling",
    ability: "dex",
    fullKey: "vehicle handling",
    icon: "",
  };

}