Hooks.once("init", () => {
  // Add ME5E 'spellcasting' schools
  CONFIG.DND5E.spellSchools.btc = {
    label: "Biotics",
    icon: "assets\\icons\\ablbiotics.svg",
    fullKey: "biotics",
    reference: "",
  };

  CONFIG.DND5E.spellSchools.cmt = {
    label: "Combat Powers",
    icon: "assets\\icons\\ablcombat.svg",
    fullKey: "combat powers",
    reference: "",
  };

  CONFIG.DND5E.spellSchools.tec = {
    label: "Tech",
    icon: "assets\\icons\\abltech.svg",
    fullKey: "tech",
    reference: "",
  };

  // Adds ME5E as a suggested book when you define the source of an item
  CONFIG.DND5E.sourceBooks.ME5E = "ME5E";

  // Replace unused skills with ME5E ones
  CONFIG.DND5E.skills.arc = {
    label: "ME5E.SkillElectronics",
    ability: "int",
    fullKey: "electronics",
    icon: "",
  };

  CONFIG.DND5E.skills.nat = {
    label: "ME5E.SkillEngineering",
    ability: "int",
    fullKey: "engineering",
    icon: "",
  };

  CONFIG.DND5E.skills.rel = {
    label: "ME5E.SkillScience",
    ability: "int",
    fullKey: "science",
    icon: "",
  };

  CONFIG.DND5E.skills.ani = {
    label: "ME5E.SkillVehicleHandling",
    ability: "dex",
    fullKey: "vehicle handling",
    icon: "",
  };

  // Add ME5E consumables

  CONFIG.DND5E.consumableTypes.suprogram = {
    label: "ME5E.ConsumTypeSUProgram",
  };

  CONFIG.DND5E.consumableTypes.grenade = {
    label: "ME5E.ConsumTypeGrenade",
  };

  CONFIG.DND5E.consumableTypes.narcotic = {
    label: "ME5E.ConsumTypeNarcotic",
  };

  // Add ME5E item properties and push to validProperties so they're available on item sheets
  const me5eItemProps = {
    arc: "Arc",
    bst: "Burst Fire",
    dtp: "Double Tap",
    het: "Heat",
    hip: "Hip Fire",
    snt: "Silent",
    coi: "Recoil",
  };

  for (const [k, v] of Object.entries(me5eItemProps)) {
    CONFIG.DND5E.itemProperties[k] = { label: v };
    CONFIG.DND5E.validProperties.weapon.add(k);
  }

  // Add ME5E currency

  CONFIG.DND5E.currencies = {
    credits: {
      label: "Credits",
      abbreviation: "creds",
      conversion: 1,
    },
  };
  // Add ME5E condition types
  const me5eConditions = {
    indoctrinated: {
      label: "Indoctrinated",
      icon: "assets\\icons\\statusindoctrinated.svg",
    },
    lifted: {
      label: "Lifted",
      icon: "assets\\icons\\statuslifted.svg",
    },
    primed: {
      label: "Primed",
      icon: "assets\\icons\\statusprimed.svg",
    },
    targeting: {
      label: "Targeting",
      icon: "assets\\icons\\statustargeting.svg",
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

  CONFIG.DND5E.miscEquipmentTypes.armormod = "Armor Mod";
  CONFIG.DND5E.miscEquipmentTypes.bodyarmor = "Body Armor";
  CONFIG.DND5E.miscEquipmentTypes.weaponmod = "Weapon Mod";
  CONFIG.DND5E.miscEquipmentTypes.program = "Program";

  // Add ME5E tool categories
  CONFIG.DND5E.toolTypes.starship = "Starship Systems";

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
