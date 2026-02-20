Hooks.on("init", async () => {
  // Add ME5E 'spellcasting' schools
  CONFIG.DND5E.spellSchools.btc = {
    label: "ME5E.spellSchools.spSchBiotics",
    icon: "modules/fvtt-me5e/assets/icons/spellschool-biotics.webp",
    fullKey: "biotics",
    reference: "",
  };

  CONFIG.DND5E.spellSchools.cmt = {
    label: "ME5E.spellSchools.spSchCombat",
    icon: "modules/fvtt-me5e/assets/icons/spellschool-combatpowers.webp",
    fullKey: "combat powers",
    reference: "",
  };

  CONFIG.DND5E.spellSchools.tec = {
    label: "ME5E.spellSchools.spSchTech",
    icon: "modules/fvtt-me5e/assets/icons/spellschool-tech.webp",
    fullKey: "tech",
    reference: "",
  };

  // Adds ME5E as a suggested book when you define the source of an item
  CONFIG.DND5E.sourceBooks.ME5E = "ME5E 1.4.4";

  // Replace unused skills with ME5E ones
  CONFIG.DND5E.skills.arc = {
    label: "ME5E.skills.skillElectronics",
    ability: "int",
    fullKey: "electronics",
    icon: "",
  };

  CONFIG.DND5E.skills.nat = {
    label: "ME5E.skills.skillEngineering",
    ability: "int",
    fullKey: "engineering",
    icon: "",
  };

  CONFIG.DND5E.skills.rel = {
    label: "ME5E.skills.skillScience",
    ability: "int",
    fullKey: "science",
    icon: "",
  };

  CONFIG.DND5E.skills.ani = {
    label: "ME5E.skills.skillVehicleHandling",
    ability: "dex",
    fullKey: "vehicle handling",
    icon: "",
  };

  // Add ME5E consumables

  CONFIG.DND5E.consumableTypes.suprogram = {
    label: "ME5E.consumableTypes.consumTypeSUProgram",
  };

  CONFIG.DND5E.consumableTypes.grenade = {
    label: "ME5E.consumableTypes.consumTypeGrenade",
  };

  CONFIG.DND5E.consumableTypes.narcotic = {
    label: "ME5E.consumableTypes.consumTypeNarcotic",
  };

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
      label: "ME5E.currencies.currency",
      abbreviation: "ȼ",
      conversion: 1,
    },
  };
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
    CONFIG.DND5E.equipmentTypes.armormod = 
      "ME5E.equipmentTypes.equipTypeArmorMod"
    ;
  CONFIG.DND5E.miscEquipmentTypes.weaponmod =
    CONFIG.DND5E.equipmentTypes.weaponmod = 
      "ME5E.equipmentTypes.equipTypeWeaponMod"
    ;
  CONFIG.DND5E.miscEquipmentTypes.program =
    CONFIG.DND5E.equipmentTypes.program = 
      "ME5E.equipmentTypes.equipTypeProgram"
    ;

  //Add ME5E tool proficiencies IDs
  CONFIG.DND5E.tools.armorsmithtool = {
    ability: "str",
    id: "Compendium.fvtt-me5e.items-me5e.Item.uIWoT538izRmqwn1",
  };
  CONFIG.DND5E.tools.chemisttool = {
    ability: "int",
    id: "Compendium.fvtt-me5e.items-me5e.Item.xeMqplvKJd4A6kZj",
  };
  CONFIG.DND5E.tools.hackingtool = {
    ability: "int",
    id: "Compendium.fvtt-me5e.items-me5e.Item.HdFPeEBqhcBf23GB",
  };
  CONFIG.DND5E.tools.medicalkit = {
    ability: "wis",
    id: "Compendium.fvtt-me5e.items-me5e.Item.7YHgyhstCc5N0yrP",
  };
  CONFIG.DND5E.tools.starshipdrive = {
    ability: "int",
    id: "Compendium.fvtt-me5e.items-me5e.Item.KyzvRcvSDsRgcdEt",
  };
  CONFIG.DND5E.tools.starshipews = {
    ability: "int",
    id: "Compendium.fvtt-me5e.items-me5e.Item.GMZIM5l7RQavA5GO",
  };
  CONFIG.DND5E.tools.starshiphelm = {
    ability: "dex",
    id: "Compendium.fvtt-me5e.items-me5e.Item.7yMf0Cn4vyeRfmIv",
  };
  CONFIG.DND5E.tools.starshipnavg = {
    ability: "int",
    id: "Compendium.fvtt-me5e.items-me5e.Item.HVMudEYQqsCco6r1",
  };
  CONFIG.DND5E.tools.starshipssc = {
    ability: "cha",
    id: "Compendium.fvtt-me5e.items-me5e.Item.rt81MMN7d5PpJpoq",
  };
  CONFIG.DND5E.tools.starshipweap = {
    ability: "int",
    id: "Compendium.fvtt-me5e.items-me5e.Item.l5wgTufkWrUoeUbB",
  };
  CONFIG.DND5E.tools.weaponsmithtool = {
    ability: "str",
    id: "Compendium.fvtt-me5e.items-me5e.Item.eoVvYl7jYbiBwBJK",
  };
});
