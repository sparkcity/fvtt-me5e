export const loadItemPropertiesEdits = function () {
  const me5eItemProps = {
    arc: "ME5E.weaponProperties.weaponPropArc",
    bst: "ME5E.weaponProperties.weaponPropBurst",
    dtp: "ME5E.weaponProperties.weaponPropDouble",
    het: "ME5E.weaponProperties.weaponPropHeat",
    hip: "ME5E.weaponProperties.weaponPropHip",
    snt: "ME5E.weaponProperties.weaponPropSilent",
    coi: "ME5E.weaponProperties.weaponPropRecoil",
    vnt: "ME5E.weaponProperties.weaponPropVented",
    mle: "ME5E.weaponProperties.weaponPropMelee"
  };

  CONFIG.DND5E.itemProperties ??= {};
  CONFIG.DND5E.validProperties ??= {};
  CONFIG.DND5E.validProperties.weapon ??= new Set();

  Object.assign(CONFIG.DND5E.itemProperties, Object.fromEntries(
    Object.entries(me5eItemProps).map(([k, v]) => [k, { label: v }])
  ));

  for (const k of Object.keys(me5eItemProps)) {
    CONFIG.DND5E.validProperties.weapon.add(k);
  }
};