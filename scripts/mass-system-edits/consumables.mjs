export const loadConsumablesEdits = function () {
  CONFIG.DND5E.consumableTypes ??= {};

  Object.assign(CONFIG.DND5E.consumableTypes, {
    suprogram: {
      label: "ME5E.consumableTypes.consumTypeSUProgram",
    },
    grenade: {
      label: "ME5E.consumableTypes.consumTypeGrenade",
    },
    narcotic: {
      label: "ME5E.consumableTypes.consumTypeNarcotic",
    }
  });
};