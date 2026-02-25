import { loadConditionTypesEdits } from "./mass-system-edits/condition-types.mjs";
import { loadConsumablesEdits } from "./mass-system-edits/consumables.mjs";
import { loadCurrenciesEdits } from "./mass-system-edits/currencies.mjs";
import { loadEquipmentTypesEdits } from "./mass-system-edits/equipment-types.mjs";
import { loadItemPropertiesEdits } from "./mass-system-edits/item-properties.mjs";
import { loadSkillsEdits } from "./mass-system-edits/skills.mjs";
import { loadSourcebookEdits } from "./mass-system-edits/sourcebooks.mjs";
import { loadSpellSchoolEdits } from "./mass-system-edits/spell-schools.mjs";
import { loadToolProficienciesEdits } from "./mass-system-edits/tool-proficiencies.mjs";
import { loadWeaponIDsEdits } from "./mass-system-edits/weapon-ids.mjs";


Hooks.on("init", async () => {

  console.log("ME5E Module is Active. System edits are loading.");
  loadConditionTypesEdits();
  loadConsumablesEdits();
  loadCurrenciesEdits();
  loadEquipmentTypesEdits();
  loadItemPropertiesEdits();
  loadSkillsEdits();
  loadSourcebookEdits();
  loadSpellSchoolEdits();
  loadToolProficienciesEdits();
  loadWeaponIDsEdits();
  console.log("ME5E Module system edits have been loaded.");

});
