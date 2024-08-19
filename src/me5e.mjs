Hooks.once("init", () => {
  // Add ME5E 'spellcasting' schools
  CONFIG.DND5E.spellSchools.btc = {
    label: "ME5E.SpSchBiotics",
    icon: "assets\\icons\\ablbiotics.svg",
    fullKey: "biotics",
    reference: "",
  };

  CONFIG.DND5E.spellSchools.cmt = {
    label: "ME5E.SpSchCombat",
    icon: "assets\\icons\\ablcombat.svg",
    fullKey: "combat powers",
    reference: "",
  };

  CONFIG.DND5E.spellSchools.tec = {
    label: "ME5E.SpSchTech",
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

  // Add ME5E misc equipment types

  CONFIG.DND5E.miscEquipmentTypes.program = {
    label: "ME5E.EquipTypeProgram",
  };
  CONFIG.DND5E.miscEquipmentTypes.armormod = {
    label: "ME5E.EquipTypeArmorMod",
  };
  CONFIG.DND5E.miscEquipmentTypes.bodymod = {
    label: "ME5E.EquipTypeBodyArmor",
  };
  CONFIG.DND5E.miscEquipmentTypes.weaponmod = {
    label: "ME5E.EquipTypeWeaponMod",
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

  // Add ME5E weapon types

  CONFIG.DND5E.weaponTypes.assaultrifle = {
    label: "ME5E.WeaponTypeAssault",
  };
  CONFIG.DND5E.weaponTypes.heavypistol = {
    label: "ME5E.WeaponTypeHeavyPistol",
  };
  CONFIG.DND5E.weaponTypes.submachinegun = {
    label: "ME5E.WeaponTypeSMG",
  };
  CONFIG.DND5E.weaponTypes.shotgun = {
    label: "ME5E.WeaponTypeShotgun",
  };
  CONFIG.DND5E.weaponTypes.sniperrifle = {
    label: "ME5E.WeaponTypeSniper",
  };
  CONFIG.DND5E.weaponTypes.heavyweapon = {
    label: "ME5E.WeaponTypeHeavy",
  };

  // Add ME5E weapon properties

  CONFIG.DND5E.itemProperties.arc = {
    label: "ME5E.WeaponPropArc",
  };
  CONFIG.DND5E.itemProperties.bst = {
    label: "ME5E.WeaponPropBurst",
  };
  CONFIG.DND5E.itemProperties.dtp = {
    label: "ME5E.WeaponPropDouble",
  };
  CONFIG.DND5E.itemProperties.het = {
    label: "ME5E.WeaponPropHeat",
  };
  CONFIG.DND5E.itemProperties.hip = {
    label: "ME5E.WeaponPropHip",
  };
  CONFIG.DND5E.itemProperties.snt = {
    label: "ME5E.WeaponPropSilent",
  };
  CONFIG.DND5E.itemProperties.coi = {
    label: "ME5E.WeaponPropRecoil",
  };

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

  // Add ME5E tool types
  CONFIG.DND5E.toolTypes.star = {
    label: "ME5E.ToolTypeCatStar",
  };
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
DND5E.toolProficiencies["wswb"] = "Weaponsmith's Workbench"; */
