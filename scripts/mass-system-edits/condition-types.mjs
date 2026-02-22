export const loadConditionTypesEdits = function () {

  // Add ME5E condition types
  const me5eConditions = {
    indoctrinated: {
      name: "ME5E.conditionTypes.condTypeIndoc",
      img: "modules/fvtt-me5e/assets/icons/status-indoctrinated.webp",
    },
    lifted: {
      name: "ME5E.conditionTypes.condTypeLift",
      img: "modules/fvtt-me5e/assets/icons/status-lifted.webp",
    },
    primed: {
      name: "ME5E.conditionTypes.condTypePrime",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
    },
    primedCold: {
      name: "ME5E.conditionTypes.condTypePrimeCold",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
    },
    primedFire: {
      name: "ME5E.conditionTypes.condTypePrimeFire",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
    },
    primedForce: {
      name: "ME5E.conditionTypes.condTypePrimeForce",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
    },
    primedLightning: {
      name: "ME5E.conditionTypes.condTypePrimeLightning",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
    },
    primedNecrotic: {
      name: "ME5E.conditionTypes.condTypePrimeNecrotic",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
    },
    primedRadiant: {
      name: "ME5E.conditionTypes.condTypePrimeRadiant",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
    },
    targeting: {
      name: "ME5E.conditionTypes.condTypeTarget",
      img: "modules/fvtt-me5e/assets/icons/status-targeting.webp",
    },
  };

  for (const [k, v] of Object.entries(me5eConditions)) {
    CONFIG.statusEffects.push({
      id: k,
      _id: dnd5e.utils.staticID(`dnd5e${k}`),
      name: v.name,
      img: v.img,
      reference: "",
    });
    CONFIG.DND5E.conditionTypes[k] = { ...v, pseudo: false };
    CONFIG.DND5E.statusEffects[k] = { name: v.name, icon: v.icon };
  };

}