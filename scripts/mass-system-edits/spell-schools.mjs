export const loadSpellSchoolEdits = function () {
  CONFIG.DND5E.spellSchools ??= {};

  Object.assign(CONFIG.DND5E.spellSchools, {
    btc: {
      label: "ME5E.spellSchools.spSchBiotics",
      icon: "modules/fvtt-me5e/assets/icons/spellschool-biotics.webp",
      fullKey: "biotics",
      reference: ""
    },
    cmt: {
      label: "ME5E.spellSchools.spSchCombat",
      icon: "modules/fvtt-me5e/assets/icons/spellschool-combatpowers.webp",
      fullKey: "combat powers",
      reference: ""
    },
    tec: {
      label: "ME5E.spellSchools.spSchTech",
      icon: "modules/fvtt-me5e/assets/icons/spellschool-tech.webp",
      fullKey: "tech",
      reference: ""
    }
  });
};