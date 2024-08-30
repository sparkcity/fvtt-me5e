/**
 * Class representing the ME5E system
 */
class Mass {
  static ID = "fvtt-me5e";
  static flagPath = "flags.fvtt-me5e";
/*
static FLAGS = {
SHEILDS_CURRENT: "FLAG_CURRENT_ACTIVE_SHIELDS",
SHIELDS_MAX: "FLAG_CURRENT_SHIELDS_MAX",
SHIELDS_REGEN: "FLAG_CURRENT_SHIELDS_REGEN",
}; 
*/

  /**
   * Logs messages to the console if the debug mode is active or logging is forced.
   * @param {boolean} force - Force the function to log regardless of the debug settings
   * @param {...any} args - Additional arguments to log.
   */
    static log(force, ...args) {
      const shouldLog =
        force ||
        game.modules.get("_dev-mode")?.api?.getPackageDebugValue("fvtt-me5e");
  
      if (shouldLog) {
        console.log("fvtt-me5e", "|", ...args);
      }
    }

   /**
   * Gets the CURRENT SHIELDS for the specified actor.
   *
   * @param {Actor} actor - The actor whose current shields we want to fetch
   * @returns {number} The current Shields of the actor if available, or null otherwise
   */
  static getShieldsForActor(actor) {
    this.log(
      true,
      `Getting CURRENT SHIELDS for actor ${actor.name}(ID: ${actor.id})`
    );
    return actor.getFlag("fvtt-me5e", "FLAG_CURRENT_ACTIVE_SHIELDS");
  }
   /**
   * Gets the current SHIELDS MAX for the specified actor.
   *
   * @param {Actor} actor - The actor whose current shields we want to fetch
   * @returns {number} The current Shields of the actor if available, or null otherwise
   */
    static getShieldsMaxForActor(actor) {
      this.log(
        true,
        `Getting CURRENT SHIELDS MAX for actor ${actor.name}(ID: ${actor.id})`
      );
      return actor.getFlag("fvtt-me5e", "FLAG_CURRENT_SHIELDS_MAX");
    }
   /**
   * Gets the current SHIELDS REGEN for the specified actor.
   *
   * @param {Actor} actor - The actor whose current shields we want to fetch
   * @returns {number} The current Shields of the actor if available, or null otherwise
   */
  static getShieldsRegenForActor(actor) {
    this.log(
      true,
      `Getting CURRENT SHIELDS REGEN for actor ${actor.name}(ID: ${actor.id})`
    );
    return actor.getFlag("fvtt-me5e", "FLAG_CURRENT_SHIELDS_REGEN");
  }
  /**
   * Updates the CURRENT SHIELDS for a specified actor.
   *
   * @param {Actor} actor - The actor whose shields total we want to update
   * @param {number} value - The value to adjust the actor's shields to.
   */
  static updateShieldsForActor(actor, value) {
    this.log(
      true,
      `Setting CURRENT SHIELDS for actor ${actor.name}(ID: ${actor.id}) to ${value}`
    );
    actor.setFlag("fvtt-me5e", "FLAG_CURRENT_ACTIVE_SHIELDS", value);
  }
  /**
   * Updates the SHIELDS MAX for a specified actor.
   *
   * @param {Actor} actor - The actor whose shields total we want to update
   * @param {number} value - The value to adjust the actor's shields to.
   * @returns {Promise} A Promise that resolves when the actor's Current Shields flag is updated.
   */
  static updateShieldsMaxForActor(actor, value) {
    this.log(
      true,
      `Setting CURRENT SHIELDS MAX for actor ${actor.name}(ID: ${actor.id}) to ${value}`
    );
    actor.setFlag("fvtt-me5e", "FLAG_CURRENT_ACTIVE_SHIELDS", value);
  }
  /**
   * Updates the SHIELDS REGEN for a specified actor.
   *
   * @param {Actor} actor - The actor whose shields total we want to update
   * @param {number} value - The value to adjust the actor's shields to.
   * @returns {Promise} A Promise that resolves when the actor's Current Shields flag is updated.
   */
  static updateShieldsRegenForActor(actor, value) {
    this.log(
      true,
      `Setting CURRENT SHIELDS REGENERATION for actor ${actor.name}(ID: ${actor.id}) to ${value}`
    );
    actor.setFlag("fvtt-me5e", "FLAG_CURRENT_ACTIVE_SHIELDS", value);
  }
  /**
   * Initializes shields values for the actor.
   * @param {object} actor - The actor object.
   */
  static initializeShieldValuesForActor(actor) {
    this.log(true, `Initializing module flags for ${actor.name}(ID: ${actor.id})}`);
    this.updateShieldsForActor(actor, 0);
    this.updateShieldsMaxForActor(actor, 0);
    this.updateShieldsRegenForActor(actor, 0);

    this.log(
      true,
      `Fields initialized for actor ${actor.name}(ID: ${actor.id}) as: Shields ${this.getShieldsForActor(
        actor
      )}//Max ${this.getShieldsMaxForActor(
        actor
      )}//Regen ${this.getShieldsRegenForActor(actor)}}`
    );
  }

  /**
   * Toggles the edit mode for HP.
   * @param {Event} event - The event triggering the edit.
   * @param {boolean} edit - Flag indicating edit mode.
   */
    static _toggleEditHP(event, edit) {
      const target = event.currentTarget.closest(".shields");
      const label = target.querySelector(":scope > .label");
      const input = target.querySelector(":scope > input");
      label.hidden = edit;
      input.hidden = !edit;
      if (edit) {
        input.focus();
      }
    }
    static updateFieldsFromDialog(actor, [values]) {
      let currentShields = this.getShieldsForActor(actor);
      let currentShieldsMax = this.getShieldsMaxForActor(actor);
      let currentShieldsRegen = this.getShieldsRegenForActor(actor);
      console.log()
  
      if (values[0] != currentShields) {
        this.updateShieldsForActor(actor, values[0]);
        this.log(
          true,
          `Updating CURRENT SHIELDS from previous value ${currentShields} to ${values[0]}`
        );
      }
      if (values[1] != currentShieldsMax) {
        this.updateShieldsMaxForActor(actor, values[1]);
        this.log(
          true,
          `Updating SHIELDS MAX from previous value ${currentShieldsMax} to ${values[1]}`
        );
      }
      if (values[2] != currentShieldsRegen) {
        this.updateShieldsRegenForActor(actor, values[2]);
        this.log(
          true,
          `Updating SHIELDS REGEN from previous value ${currentShieldsRegen} to ${values[2]}`
        );
      }
    }
}

///////////////////////////////////////////////////////////////////////

/**
 * Registers a debug flag for the module once the developer mode is ready.
 * This is useful for enabling or disabling debug output conditionally based on the environment.
 */
Hooks.once("devModeReady", ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(Mass.ID);
});

/**
 * Hook that enhances the rendered actor sheet for 5e characters by adding custom shields tracking UI.
 * This function is triggered whenever an actor sheet is rendered in the game.
 *
 * @param {Object} app - The application object representing the actor sheet.
 * @param {HTMLElement[]} html - The HTML element array of the actor sheet.
 * @param {Object} data - The data object associated with the actor.
 */
Hooks.on("renderActorSheet5eCharacter2", (app, [html], data) => {
  const actor = app.document;
  Mass.log(false, `Opened actor sheet for ${actor.name}(ID: ${actor.id})`);

  let currentShields = Mass.getShieldsForActor(actor);
  if (currentShields === undefined) {
    Mass.log(
      true,
      `Module flags were not set for actor ${actor.name}(ID: ${actor.id})`
    );
    Mass.initializeShieldValuesForActor(actor);
  }
  const maxShields = Mass.getShieldsMaxForActor(actor);
  const shieldsRegen = Mass.getShieldsRegenForActor(actor);
  const shieldPerc = (currentShields / maxShields) * 100;
  const currentShieldsFlag = `${Mass.flagPath}.${Mass.FLAGS.SHEILDS_CURRENT}`;

  const shields_interface = `
    <div class="meter-group">
      <div class="label roboto-condensed-upper">
        <span>Shields</span>
        <a id="shieldsConfigButton" class="config-button" data-action="shields" data-tooltip="Shields Config" aria-label="Adjust Shields">
          <i class="fas fa-cog"></i>
        </a>
      </div>
      <div class="meter sectioned hit-points shields">
        <div class="progress hit-points shields" role="meter" aria-valuemin="0" aria-valuenow="${currentShields}" aria-valuemax="${maxShields}" style="--bar-percentage: ${shieldPerc}%">
          <div class="label">
            <span class="value">${currentShields}</span>
            <span class="separator">/</span>
            <span class="max">${maxShields}</span>
          </div>
          <input type="text" name="${currentShieldsFlag}" data-dtype="Number" placeholder="0" value="${currentShields}" hidden="">
        </div>
      </div>
    </div>`;

  const actorSheetLocation = html.querySelector("div.stats > div:nth-child(4)");
  if (actorSheetLocation) {
    actorSheetLocation.insertAdjacentHTML("afterend", shields_interface);
  }

  //////////////////////////shields config dialog
  const shieldsConfigDialog = new foundry.applications.api.DialogV2({
    window: { title: "Shields Config" },
    content: `
  <form>
      <div id="shields-config-dialog-form" class="form-group">
        <table>
          <tr>
            <td><label>Current Shields</label></td>
            <td><input type='number' name='inputCurrentShields' value='0'></input></td>
          </tr>
          <tr>
            <td><label>Max Shields</label></td>
            <td><input type='number' name='inputMaxShields' value='0'></input></td>
          </tr>
            <td><label>Shields Regeneration</label></td>
            <td><input type='number' name='inputRegenShields' value='0'></input></td>
          <tr>
          </tr>
        </table>
      </div>
    </form>
  `,
    buttons: [
      {
        action: "update",
        label: "Update",
        default: true,
        callback: (event, button, dialog) =>
          Mass.updateFieldsFromDialog(actor,[
            button.form.elements.inputCurrentShields.valueAsNumber,
            button.form.elements.inputMaxShields.valueAsNumber,
            button.form.elements.inputRegenShields.valueAsNumber
          ]),
      },
      {
        action: "close",
        label: "Exit",
      },
    ],
  });

  const shieldsBar = html.querySelector("div.progress.hit-points.shields");
  shieldsBar.addEventListener("click", (event) => {
    Mass.log(false, "clicked on shields bar:", event);
    Mass._toggleEditHP(event, true);
  });
  const shieldsBarInput = html.querySelector(
    `input[name="${currentShieldsFlag}"]`
  );
  shieldsBarInput.addEventListener("blur", (event) => {
    Mass.log(false, "focus out of input", event);
    Mass._toggleEditHP(event, false);
  });
  const shieldsConfigButton = html.querySelector(
    "a#shieldsConfigButton.config-button"
  );
  shieldsConfigButton.addEventListener("click", (event) => {
    Mass.log(false, "clicked on shields config button", event);
    shieldsConfigDialog.render(true);
  });
});
