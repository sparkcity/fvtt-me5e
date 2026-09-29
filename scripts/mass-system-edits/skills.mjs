export const loadSkillsEdits = function () {
  CONFIG.DND5E.skills ??= {};

  Object.assign(CONFIG.DND5E.skills, {
    arc: {
      label: "ME5E.skills.skillElectronics",
      ability: "int",
      fullKey: "electronics",
      icon: ""
    },
    nat: {
      label: "ME5E.skills.skillEngineering",
      ability: "int",
      fullKey: "engineering",
      icon: ""
    },
    rel: {
      label: "ME5E.skills.skillScience",
      ability: "int",
      fullKey: "science",
      icon: ""
    },
    ani: {
      label: "ME5E.skills.skillVehicleHandling",
      ability: "dex",
      fullKey: "vehicle handling",
      icon: ""
    }
  });
};