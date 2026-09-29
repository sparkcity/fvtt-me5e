export const loadWeaponIDsEdits = function () {
  CONFIG.DND5E.weaponIds ??= {};

  Object.assign(CONFIG.DND5E.weaponIds, {
    assaultr: "Compendium.fvtt-me5e.items-me5e.Item.2i9xfag1ztMVwomC",
    heavyp: "Compendium.fvtt-me5e.items-me5e.Item.QBOx8pTvTIvZknD7",
    smg: "Compendium.fvtt-me5e.items-me5e.Item.off175x9LLykWjz6",
    shotgun: "Compendium.fvtt-me5e.items-me5e.Item.pf5CuxCVkC1hHD5A",
    sniperr: "Compendium.fvtt-me5e.items-me5e.Item.dliOzyRmjOHuLVCx",
    heavyw: "Compendium.fvtt-me5e.items-me5e.Item.it7NrU6lg2OrQF0S"
  });
};