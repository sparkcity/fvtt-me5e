export const loadConditionTypesEdits = function () {

  // Add ME5E condition types
  const me5eConditions = {
    indoctrinated: {
      name: "ME5E.conditionTypes.condTypeIndoc",
      img: "modules/fvtt-me5e/assets/icons/status-indoctrinated.webp",
      reference: "For each 24 hour period a creature spends within the presence of an indoctrinating source, the creature must make a DC 10 Wisdom saving throw. On a failed save, the creature suffers one level of indoctrination. If an already indoctrinated creature spends another 24 hour period within the presence of Reaper technology, the DC of the saving throw increases as described in the indoctrination table."
    },
    lifted: {
      name: "ME5E.conditionTypes.condTypeLift",
      img: "modules/fvtt-me5e/assets/icons/status-lifted.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ"
    },
    primed: {
      name: "ME5E.conditionTypes.condTypePrime",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: ""
    },
    primedCold: {
      name: "ME5E.conditionTypes.condTypePrimeCold",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: ""
    },
    primedFire: {
      name: "ME5E.conditionTypes.condTypePrimeFire",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: ""
    },
    primedForce: {
      name: "ME5E.conditionTypes.condTypePrimeForce",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: ""
    },
    primedLightning: {
      name: "ME5E.conditionTypes.condTypePrimeLightning",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: ""
    },
    primedNecrotic: {
      name: "ME5E.conditionTypes.condTypePrimeNecrotic",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: ""
    },
    primedRadiant: {
      name: "ME5E.conditionTypes.condTypePrimeRadiant",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: ""
    },
    targeting: {
      name: "ME5E.conditionTypes.condTypeTarget",
      img: "modules/fvtt-me5e/assets/icons/status-targeting.webp",
      reference: ""
    },
  };

  for (const [k, v] of Object.entries(me5eConditions)) {
    CONFIG.statusEffects.push({
      id: k,
      _id: dnd5e.utils.staticID(`dnd5e${k}`),
      name: v.name,
      img: v.img,
      reference: v.reference,
    });
    CONFIG.DND5E.conditionTypes[k] = { ...v, pseudo: false };
  };//end of for loop

}