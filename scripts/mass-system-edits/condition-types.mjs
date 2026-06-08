export const loadConditionTypesEdits = function () {

  // Add ME5E condition types
  const me5eConditions = {
    indoctrinated: {
      name: "ME5E.conditionTypes.condTypeIndoc",
      img: "modules/fvtt-me5e/assets/icons/status-indoctrinated.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.IiZwuTq3Cz9ESej5"
    },
    lifted: {
      name: "ME5E.conditionTypes.condTypeLift",
      img: "modules/fvtt-me5e/assets/icons/status-lifted.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.Iw0QNMOzHeWu8o0r"
    },
    primed: {
      name: "ME5E.conditionTypes.condTypePrime",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.2EcLvQyjvXTRUTc1"
    },
    primedCold: {
      name: "ME5E.conditionTypes.condTypePrimeCold",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.6L4df8TAWjyVor2S"
    },
    primedFire: {
      name: "ME5E.conditionTypes.condTypePrimeFire",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.SSCgKjAQYEmHpM4x"
    },
    primedForce: {
      name: "ME5E.conditionTypes.condTypePrimeForce",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.jwpKtKoaESvNzL64"
    },
    primedLightning: {
      name: "ME5E.conditionTypes.condTypePrimeLightning",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.ccHlZkRek7hdmttl"
    },
    primedNecrotic: {
      name: "ME5E.conditionTypes.condTypePrimeNecrotic",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.rKhDN6YV1HsDCh6B"
    },
    primedRadiant: {
      name: "ME5E.conditionTypes.condTypePrimeRadiant",
      img: "modules/fvtt-me5e/assets/icons/status-primed.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.qmK0oFGVRNttOKA7"
    },
    targeting: {
      name: "ME5E.conditionTypes.condTypeTarget",
      img: "modules/fvtt-me5e/assets/icons/status-targeting.webp",
      reference: "Compendium.fvtt-me5e.rules.JournalEntry.ylamfcORxRL1IDwJ.JournalEntryPage.ZY9ii6Fw13HYK8jC"
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