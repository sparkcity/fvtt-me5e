Hooks.once("init", () => {
  // Add ME5E 'spellcasting' schools
  CONFIG.DND5E.spellSchools.btc = {
    label: game.i18n.localize("ME5E.spellSchools.spSchBiotics"),
    icon: "modules/fvtt-me5e/assets/icons/spellschool-biotics.svg",
    fullKey: "biotics",
    reference: "",
  };

  CONFIG.DND5E.spellSchools.cmt = {
    label: game.i18n.localize("ME5E.spellSchools.spSchCombat"),
    icon: "modules/fvtt-me5e/assets/icons/spellschool-combatpowers.svg",
    fullKey: "combat powers",
    reference: "",
  };

  CONFIG.DND5E.spellSchools.tec = {
    label: game.i18n.localize("ME5E.spellSchools.spSchTech"),
    icon: "modules/fvtt-me5e/assets/icons/spellschool-tech.svg",
    fullKey: "tech",
    reference: "",
  };

  // Adds ME5E as a suggested book when you define the source of an item
  CONFIG.DND5E.sourceBooks.ME5E = "ME5E 1.4.4";

  // Replace unused skills with ME5E ones
  CONFIG.DND5E.skills.arc = {
    label: game.i18n.localize("ME5E.skills.skillElectronics"),
    ability: "int",
    fullKey: "electronics",
    icon: "",
  };

  CONFIG.DND5E.skills.nat = {
    label: game.i18n.localize("ME5E.skills.skillEngineering"),
    ability: "int",
    fullKey: "engineering",
    icon: "",
  };

  CONFIG.DND5E.skills.rel = {
    label: game.i18n.localize("ME5E.skills.skillScience"),
    ability: "int",
    fullKey: "science",
    icon: "",
  };

  CONFIG.DND5E.skills.ani = {
    label: game.i18n.localize("ME5E.skills.skillVehicleHandling"),
    ability: "dex",
    fullKey: "vehicle handling",
    icon: "",
  };

  // Add ME5E consumables

  CONFIG.DND5E.consumableTypes.suprogram = {
    label: game.i18n.localize("ME5E.consumableTypes.consumTypeSUProgram"),
  };

  CONFIG.DND5E.consumableTypes.grenade = {
    label: game.i18n.localize("ME5E.consumableTypes.consumTypeGrenade"),
  };

  CONFIG.DND5E.consumableTypes.narcotic = {
    label: game.i18n.localize("ME5E.consumableTypes.consumTypeNarcotic"),
  };

  // Add ME5E item properties and push to validProperties so they're available on item sheets
  const me5eItemProps = {
    arc: game.i18n.localize("ME5E.weaponProperties.weaponPropArc"),
    bst: game.i18n.localize("ME5E.weaponProperties.weaponPropBurst"),
    dtp: game.i18n.localize("ME5E.weaponProperties.weaponPropDouble"),
    het: game.i18n.localize("ME5E.weaponProperties.weaponPropHeat"),
    hip: game.i18n.localize("ME5E.weaponProperties.weaponPropHip"),
    snt: game.i18n.localize("ME5E.weaponProperties.weaponPropSilent"),
    coi: game.i18n.localize("ME5E.weaponProperties.weaponPropRecoil"),
    vnt: game.i18n.localize("ME5E.weaponProperties.weaponPropVented"),
    mle: game.i18n.localize("ME5E.weaponProperties.weaponPropVented"),
  };

  for (const [k, v] of Object.entries(me5eItemProps)) {
    CONFIG.DND5E.itemProperties[k] = { label: v };
    CONFIG.DND5E.validProperties.weapon.add(k);
  }

  /*  doesnt show up under the properties box when viewing primary page of item description

    const me5eEquipmentProps = {
    placebody: "Placement: Body",
    placechest: "Placement: Chest",
    placearms: "Placement: Arms",
    placelegs: "Placement: Legs",
    pleacehead: "Placement: Head",
    placeammo: "Placement: Ammo",
    placemag: "Placement: Magazine",
    placegrip: "Placement: Grip",
    placestrike: "Placement: Strike",
    placebarrel: "Placement: Barrel",
  };

  for (const [k, v] of Object.entries(me5eEquipmentProps)) {
    CONFIG.DND5E.itemProperties[k] = { label: v };
    CONFIG.DND5E.validProperties.equipment.add(k);
  } */

  // Add ME5E currency

  CONFIG.DND5E.currencies = {
    credits: {
      label: game.i18n.localize("ME5E.currencies.currency"),
      abbreviation: "ȼ",
      conversion: 1,
    },
  };
  // Add ME5E condition types
  const me5eConditions = {
    indoctrinated: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypeIndoc"),
      icon: "modules/fvtt-me5e/assets/icons/status-indoctrinated.svg",
    },
    lifted: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypeLift"),
      icon: "modules/fvtt-me5e/assets/icons/status-lifted.svg",
    },
    primed: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypePrime"),
      icon: "modules/fvtt-me5e/assets/icons/status-primed.svg",
    },
    primedCold: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypePrimeCold"),
      icon: "modules/fvtt-me5e/assets/icons/status-primed.svg",
    },
    primedFire: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypePrimeFire"),
      icon: "modules/fvtt-me5e/assets/icons/status-primed.svg",
    },
    primedForce: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypePrimeForce"),
      icon: "modules/fvtt-me5e/assets/icons/status-primed.svg",
    },
    primedLightning: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypePrimeLightning"),
      icon: "modules/fvtt-me5e/assets/icons/status-primed.svg",
    },
    primedNecrotic: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypePrimeNecrotic"),
      icon: "modules/fvtt-me5e/assets/icons/status-primed.svg",
    },
    primedRadiant: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypePrimeRadiant"),
      icon: "modules/fvtt-me5e/assets/icons/status-primed.svg",
    },
    targeting: {
      label: game.i18n.localize("ME5E.conditionTypes.condTypeTarget"),
      icon: "modules/fvtt-me5e/assets/icons/status-targeting.svg",
    },
  };

  for (const [k, v] of Object.entries(me5eConditions)) {
    CONFIG.statusEffects.push({
      id: k,
      _id: dnd5e.utils.staticID(`dnd5e${k}`),
      name: v.label,
      img: v.icon,
      reference: "",
    });
    CONFIG.DND5E.conditionTypes[k] = { ...v, pseudo: false };
    CONFIG.DND5E.statusEffects[k] = { name: v.label, icon: v.icon };
  }

  // Add ME5E weapon IDs
  CONFIG.DND5E.weaponIds.assaultr =
    "Compendium.fvtt-me5e.items-me5e.Item.2i9xfag1ztMVwomC";
  CONFIG.DND5E.weaponIds.heavyp =
    "Compendium.fvtt-me5e.items-me5e.Item.QBOx8pTvTIvZknD7";
  CONFIG.DND5E.weaponIds.smg =
    "Compendium.fvtt-me5e.items-me5e.Item.off175x9LLykWjz6";
  CONFIG.DND5E.weaponIds.shotgun =
    "Compendium.fvtt-me5e.items-me5e.Item.pf5CuxCVkC1hHD5A";
  CONFIG.DND5E.weaponIds.sniperr =
    "Compendium.fvtt-me5e.items-me5e.Item.dliOzyRmjOHuLVCx";
  CONFIG.DND5E.weaponIds.heavyw =
    "Compendium.fvtt-me5e.items-me5e.Item.it7NrU6lg2OrQF0S";

  // Add ME5E misc equipment types
  CONFIG.DND5E.miscEquipmentTypes.armormod =
    CONFIG.DND5E.equipmentTypes.armormod = game.i18n.localize(
      "ME5E.equipmentTypes.equipTypeArmorMod"
    );
  CONFIG.DND5E.miscEquipmentTypes.bodyarmor =
    CONFIG.DND5E.equipmentTypes.bodyarmor = game.i18n.localize(
      "ME5E.equipmentTypes.equipTypeBodyArmor"
    );
  CONFIG.DND5E.miscEquipmentTypes.weaponmod =
    CONFIG.DND5E.equipmentTypes.weaponmod = game.i18n.localize(
      "ME5E.equipmentTypes.equipTypeWeaponMod"
    );
  CONFIG.DND5E.miscEquipmentTypes.program =
    CONFIG.DND5E.equipmentTypes.program = game.i18n.localize(
      "ME5E.equipmentTypes.equipTypeProgram"
    );

  // Add ME5E tool categories
  CONFIG.DND5E.toolTypes.starship = game.i18n.localize(
    "ME5E.toolTypes.toolTypeCatStar"
  );

  //Add ME5E tool proficiencies IDs
  CONFIG.DND5E.toolIds.armorsmithtool =
    "Compendium.fvtt-me5e.items-me5e.Item.fi5seHBSJlL5oezH";
  CONFIG.DND5E.toolIds.chemisttool =
    "Compendium.fvtt-me5e.items-me5e.Item.IRuDN4PHt39s4OMv";
  CONFIG.DND5E.toolIds.hackingtool =
    "Compendium.fvtt-me5e.items-me5e.Item.tjzo96t71HDQoBVT";
  CONFIG.DND5E.toolIds.medicaltool =
    "Compendium.fvtt-me5e.items-me5e.Item.x69e18GsSnjwmYXw";
  CONFIG.DND5E.toolIds.starshipdrive =
    "Compendium.fvtt-me5e.items-me5e.Item.XgQfWGXFkjKw3X8T";
  CONFIG.DND5E.toolIds.starshipews =
    "Compendium.fvtt-me5e.items-me5e.Item.1yiADlMcYaixDzPR";
  CONFIG.DND5E.toolIds.starshiphelm =
    "Compendium.fvtt-me5e.items-me5e.Item.pMmFHFM2ICJxvk4g";
  CONFIG.DND5E.toolIds.starshipnavg =
    "Compendium.fvtt-me5e.items-me5e.Item.z3zCYhwZg8eDFROr";
  CONFIG.DND5E.toolIds.starshipssc =
    "Compendium.fvtt-me5e.items-me5e.Item.KIAoHK6rtipLFmUY";
  CONFIG.DND5E.toolIds.starshipweap =
    "Compendium.fvtt-me5e.items-me5e.Item.nttGDd2AGMe821lm";
  CONFIG.DND5E.toolIds.weaponsmithtool =
    "Compendium.fvtt-me5e.items-me5e.Item.OWvQBq1ylb9FafvH";
});
