Hooks.once("init", () => {
  // Add ME5E 'spellcasting' schools
  CONFIG.DND5E.spellSchools.btc = {
    label: "hBiotics",
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

  // Add ME5E weapon properties
  foundry.utils.mergeObject(CONFIG.DND5E.itemProperties, {
    arc: { label: "Arc" },
    bst: { label: "Burst Fire" },
    dtp: { label: "Double Tap" },
    het: { label: "Heat" },
    hip: { label: "Hip Fire" },
    snt: { label: "Silent" },
    coi: { label: "Recoil" },
  });

  // Add ME5E currency

  CONFIG.DND5E.currencies = {
    pp: {
      label: "ME5E.Currency",
      abbreviation: "C",
      conversion: 0.1,
    },
  };

  // Add ME5E condition types

  CONFIG.DND5E.conditionTypes.indoctrinated = {
    label: "ME5E.CondTypeIndoc",
    icon: "assets\\icons\\statusindoctrinated.svg",
    pseudo: true,
  };
  CONFIG.DND5E.conditionTypes.lifted = {
    label: "ME5E.CondTypeLift",
    icon: "assets\\icons\\statuslifted.svg",
    pseudo: true,
  };
  CONFIG.DND5E.conditionTypes.primed = {
    label: "ME5E.CondTypePrime",
    icon: "assets\\icons\\statusprimed.svg",
    pseudo: true,
  };
  CONFIG.DND5E.conditionTypes.targeting = {
    label: "ME5E.CondTypeTarget",
    icon: "assets\\icons\\statustargeting.svg",
    pseudo: true,
  };

  // Add ME5E weapon IDs
  CONFIG.DND5E.weaponIds.assaultr = "2i9xfag1ztMVwomC";
  CONFIG.DND5E.weaponIds.heavyp = "QBOx8pTvTIvZknD7";
  CONFIG.DND5E.weaponIds.smg = "off175x9LLykWjz6";
  CONFIG.DND5E.weaponIds.shotgun = "pf5CuxCVkC1hHD5A";
  CONFIG.DND5E.weaponIds.sniperr = "dliOzyRmjOHuLVCx";
  CONFIG.DND5E.weaponIds.heavyw = "it7NrU6lg2OrQF0S";
});

Hooks.once("setup", () => {
  // Add ME5E misc equipment types
  foundry.utils.mergeObject(CONFIG.DND5E.miscEquipmentTypes, {
    armormod: { label: "Armor Mod" },
    bodyarmor: { label: "Body Armor" },
    weaponmod: { label: "Weapon Mod" },
    program: { label: "Program" },
  });

  // Add ME5E weapon types
  foundry.utils.mergeObject(CONFIG.DND5E.weaponTypes, {
    assaultr: { label: "Assault Rifle" },
    heavyp: { label: "Heavy Pistol" },
    smg: { label: "Submachine Gun" },
    shotgun: { label: "Shotgun" },
    sniperr: { label: "Sniper Rifle" },
  });

  // Add ME5E weapon types
  foundry.utils.mergeObject(CONFIG.DND5E.toolTypes, {
    starship: { label: "Starship" },
  });
});

/* 

DND5E.toolProficiencies["herb"] = "Chemist's Supplies";
DND5E.toolProficiencies["navg"] = "Starship System (Navigation)";
DND5E.toolProficiencies["pois"] = "Brewer's Supplies"
DND5E.toolProficiencies["aswb"] = "Armorsmith's Workbench";
DND5E.toolProficiencies["cook"] = "Cook's Utensils";
DND5E.toolProficiencies["h4ck"] = "Hacking Tools";
DND5E.toolProficiencies["mdcn"] = "Medical Kit";
DND5E.toolProficiencies["pntr"] = "Painter's Supplies";
DND5E.toolProficiencies["ssdr"] = "Starship Systems (Drive)";
DND5E.toolProficiencies["sshe"] = "Starship Systems (Helm)";
DND5E.toolProficiencies["sssc"] = "Starship Systems (SSC)";
DND5E.toolProficiencies["ssew"] = "Starship Systems (EWS)";
DND5E.toolProficiencies["sswp"] = "Starship Systems (Weapons)";
DND5E.toolProficiencies["tail"] = "Tailor's Tools";
DND5E.toolProficiencies["tink"] = "Tinker's Tools";
DND5E.toolProficiencies["wswb"] = "Weaponsmith's Workbench"; 


  // Update weapon type map
  CONFIG.DND5E.weaponTypeMap.assaultr;
  ("ranged");
  CONFIG.DND5E.weaponTypeMap.heavyp;
  ("ranged");
  CONFIG.DND5E.weaponTypeMap.smg;
  ("ranged");
  CONFIG.DND5E.weaponTypeMap.shotgun;
  ("ranged");
  CONFIG.DND5E.weaponTypeMap.sniperr;
  ("ranged");
  CONFIG.DND5E.weaponTypeMap.heavyw;
  ("ranged");
  // Update weapon prof map
  CONFIG.DND5E.weaponProficienciesMap.assaultr;
  ("sim");
  CONFIG.DND5E.weaponProficienciesMap.heavyp;
  ("sim");
  CONFIG.DND5E.weaponProficienciesMap.smg;
  ("sim");
  CONFIG.DND5E.weaponProficienciesMap.shotgun;
  ("sim");
  CONFIG.DND5E.weaponProficienciesMap.sniperr;
  ("sim");
  CONFIG.DND5E.weaponProficienciesMap.heavyw;
  ("sim");
  };*/
