export const loadItemPropertiesEdits = function () {


  // Add ME5E item properties and push to validProperties so they're available on item sheets
  const me5eItemProps = {
    arc: "ME5E.weaponProperties.weaponPropArc",
    bst: "ME5E.weaponProperties.weaponPropBurst",
    dtp: "ME5E.weaponProperties.weaponPropDouble",
    het: "ME5E.weaponProperties.weaponPropHeat",
    hip: "ME5E.weaponProperties.weaponPropHip",
    snt: "ME5E.weaponProperties.weaponPropSilent",
    coi: "ME5E.weaponProperties.weaponPropRecoil",
    vnt: "ME5E.weaponProperties.weaponPropVented",
    mle: "ME5E.weaponProperties.weaponPropMelee",
  };

  for (const [k, v] of Object.entries(me5eItemProps)) {
    CONFIG.DND5E.itemProperties[k] = { label: v };
    CONFIG.DND5E.validProperties.weapon.add(k);
  }

}