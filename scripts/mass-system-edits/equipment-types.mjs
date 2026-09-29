export const loadEquipmentTypesEdits = function () {
  CONFIG.DND5E.equipmentTypes ??= {};
  CONFIG.DND5E.miscEquipmentTypes ??= {};

  Object.assign(CONFIG.DND5E.equipmentTypes, {
    armormod: "ME5E.equipmentTypes.equipTypeArmorMod",
    weaponmod: "ME5E.equipmentTypes.equipTypeWeaponMod",
    program: "ME5E.equipmentTypes.equipTypeProgram"
  });

  Object.assign(CONFIG.DND5E.miscEquipmentTypes, {
    armormod: "ME5E.equipmentTypes.equipTypeArmorMod",
    weaponmod: "ME5E.equipmentTypes.equipTypeWeaponMod",
    program: "ME5E.equipmentTypes.equipTypeProgram"
  });
};