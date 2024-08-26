/**
 * Class representing the ME5E system
 */
class Mass {
  /**
   * The unique identifier for the module
   * @type {string}
   */
  static ID = "fvtt-me5e";

  /**
   * Static flag path for the module
   * @type {string}
   */
  static flagPath = `flags.${this.ID}`;

  /**
   * Flags used within the module to maintain state
   * @type {Object}
   */
  static FLAGS = {
    CURRENT_SHIELDS: "currShields",
    SHIELDS_MAX: "maxShields",
    SHIELDS_REGEN: "regenShields",
  };

  /**
   * Mapping of custom Hooks for the modules
   * @type {Object}
   */
  static HOOKS = {
    SHIELDS_CHANGE: `${this.ID}.shieldsChange`,
    SHIELDS_MAX_CHANGE: `${this.ID}.shieldsMaxChange`,
    SHIELDS_REGEN_CHANGE: `${this.ID}.shieldsRegenChange`,
  };

  /**
   * Logs messages to the console if the debug mode is active or logging is forced.
   * @param {boolean} force - Force the function to log regardless of the debug settings
   * @param {...any} args - Additional arguments to log.
   */
  static log(force, ...args) {
    const shouldLog =
      force ||
      game.modules.get("_dev-mode")?.api?.getPackageDebugValue(this.ID);

    if (shouldLog) {
      console.log(this.ID, "|", ...args);
    }
  }

  /**
   * Initialize module Settings
   */
  static initialize() {
    console.log("ME5E module active.");
  }
}

/**
 * Class responsible for managing shields data computations for Actors
 */
class MassData {
  /**
   * Gets the CURRENT SHIELDS for the specified actor.
   *
   * @param {Actor} actor - The actor whose current shields we want to fetch
   * @returns {number} The current Shields of the actor if available, or null otherwise
   */
  static getShieldsForActor(actor) {
    return actor.getFlag(Mass.ID, Mass.FLAGS.CURRENT_SHIELDS);
  }
  /**
   * Gets the current SHIELDS MAX for the specified actor.
   *
   * @param {Actor} actor - The actor whose current shields we want to fetch
   * @returns {number} The current Shields of the actor if available, or null otherwise
   */
  static getShieldsMaxForActor(actor) {
    return actor.getFlag(Mass.ID, Mass.FLAGS.SHIELDS_MAX);
  }
  /**
   * Gets the current SHIELDS REGEN for the specified actor.
   *
   * @param {Actor} actor - The actor whose current shields we want to fetch
   * @returns {number} The current Shields of the actor if available, or null otherwise
   */
  static getShieldsRegenForActor(actor) {
    return actor.getFlag(Mass.ID, Mass.FLAGS.SHIELDS_REGEN);
  }
  /**
   * Updates the CURRENT SHIELDS for a specified actor.
   *
   * @param {Actor} actor - The actor whose shields total we want to update
   * @param {number} value - The value to adjust the actor's shields to.
   * @returns {Promise} A Promise that resolves when the actor's Current Shields flag is updated.
   */
  static updateShieldsForActor(actor, value) {
    Mass.log(
      true,
      `Setting current shields for actor ${actor.name} to ${value}`
    );
    return actor.setFlag(Mass.ID, Mass.FLAGS.CURRENT_SHIELDS, value);
  }
  /**
   * Updates the SHIELDS MAX for a specified actor.
   *
   * @param {Actor} actor - The actor whose shields total we want to update
   * @param {number} value - The value to adjust the actor's shields to.
   * @returns {Promise} A Promise that resolves when the actor's Current Shields flag is updated.
   */
  static updateShieldsMaxForActor(actor, value) {
    Mass.log(
      true,
      `Setting current shields for actor ${actor.name} to ${value}`
    );
    return actor.setFlag(Mass.ID, Mass.FLAGS.CURRENT_SHIELDS, value);
  }
  /**
   * Updates the SHIELDS REGEN for a specified actor.
   *
   * @param {Actor} actor - The actor whose shields total we want to update
   * @param {number} value - The value to adjust the actor's shields to.
   * @returns {Promise} A Promise that resolves when the actor's Current Shields flag is updated.
   */
  static updateShieldsRegenForActor(actor, value) {
    Mass.log(
      true,
      `Setting current shields for actor ${actor.name} to ${value}`
    );
    return actor.setFlag(Mass.ID, Mass.FLAGS.CURRENT_SHIELDS, value);
  }

  /**
   * Updates the shields flags for a specified actor with the provided data.
   *
   * @param {Actor} actor - The actor whose shields flags we want to update
   * @param {Object} updateData - The data to update the actor flags with
   */
  static async updateShieldsFlagsForActor(actor, updateData) {
    const prevShields = MassData.getShieldsForActor(actor);
    await actor.update({
      [Mass.flagPath]: updateData,
    });
    const newShields = MassData.getShieldsForActor(actor);
    // Trigger a custom Hook in case there was a change in the current shields
    if (prevShields != newShields) {
      Hooks.callAll(
        Mass.HOOKS.SHIELDS_CHANGE,
        {
          prevShields,
          newShields,
        },
        actor
      );
    }
  }
  /**
   * Updates the shields flags for a specified actor with the provided data.
   *
   * @param {Actor} actor - The actor whose shields flags we want to update
   * @param {Object} updateData - The data to update the actor flags with
   */
  static async updateShieldsMaxFlagsForActor(actor, updateData) {
    const prevShields = MassData.getShieldsForActor(actor);
    await actor.update({
      [Mass.flagPath]: updateData,
    });
    const newShields = MassData.getShieldsForActor(actor);
    // Trigger a custom Hook in case there was a change in the current shields
    if (prevShields != newShields) {
      Hooks.callAll(
        Mass.HOOKS.SHIELDS_MAX_CHANGE,
        {
          prevShields,
          newShields,
        },
        actor
      );
    }
  }
  /**
   * Updates the shields flags for a specified actor with the provided data.
   *
   * @param {Actor} actor - The actor whose shields flags we want to update
   * @param {Object} updateData - The data to update the actor flags with
   */
  static async updateShieldsRegenFlagsForActor(actor, updateData) {
    const prevShields = MassData.getShieldsRegenForActor(actor);
    await actor.update({
      [Mass.flagPath]: updateData,
    });
    const newShields = MassData.getShieldsRegenForActor(actor);
    // Trigger a custom Hook in case there was a change in the current shields
    if (prevShields != newShields) {
      Hooks.callAll(
        Mass.HOOKS.SHIELDS_REGEN_CHANGE,
        {
          prevShields,
          newShields,
        },
        actor
      );
    }
  }
}

/**
 * Class representing the configuration for the module.
 */
class MassConfig {
  /**
   * Initializes shields values for the actor.
   * @param {object} actor - The actor object.
   */
  static initializeShieldValuesForActor(actor) {
    Mass.log(true, "Initializing module flags");
    const actorShields = {
      [Mass.FLAGS.CURRENT_SHIELDS]: 5,
    };
    MassData.updateShieldsMaxForActor(actor, 5);
    MassData.updateShieldsRegenForActor(actor, 5);
    MassData.updateShieldsFlagsForActor(actor, actorShields);
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
}

/**
 * Once the game has initialized, set up our module
 */
Hooks.once("init", () => {
  Mass.initialize();
});

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
Hooks.on("renderActorSheet5eCharacter", (app, [html], data) => {
  const actor = app.document;
  Mass.log(true, `Opened actor sheet for ${actor.name}`);

  let currShields = MassData.getShieldsForActor(actor);
  if (currShields === undefined) {
    Mass.log(
      true,
      `Module flags were not set for actor ${actor.name}(ID: ${actor.id})`
    );
    MassConfig.initializeShieldValuesForActor(actor);
  }

  const maxShields = Mass.FLAGS.SHIELDS_MAX;
  const shieldsRegen = Mass.FLAGS.SHIELDS_REGEN;
  const sanPerc = (currShields / maxShields) * 100;
  const currShieldsFlag = `${Mass.flagPath}.${Mass.FLAGS.CURRENT_SHIELDS}`;

  const shields_interface = `
    <div class="meter-group">
      <div class="label roboto-condensed-upper">
        <span>Shields</span>
        <a id="shieldsConfigButton" class="config-button" data-action="shields" data-tooltip="Shields Config" aria-label="Adjust Shields">
          <i class="fas fa-cog"></i>
        </a>
      </div>
      <div class="meter sectioned hit-points shields">
        <div class="progress hit-points shields" role="meter" aria-valuemin="0" aria-valuenow="${currShields}" aria-valuemax="${maxShields}" style="--bar-percentage: ${sanPerc}%">
          <div class="label">
            <span class="value">${currShields}</span>
            <span class="separator">/</span>
            <span class="max">${maxShields}</span>
          </div>
          <input type="text" name="${currShieldsFlag}" data-dtype="Number" placeholder="0" value="${currShields}" hidden="">
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
          updateFieldsFromDialog[
            (button.form.elements.inputCurrentShields.valueAsNumber,
            button.form.elements.inputMaxShields.valueAsNumber,
            button.form.elements.inputRegenShields.valueAsNumber)
          ],
      },
      {
        action: "close",
        label: "Exit",
      },
    ],
  });
  //////////////////////////callback for dialog box
  function updateFieldsFromDialog([values]) {
    if (values[0] != Mass.FLAGS.CURRENT_SHIELDS) {
      MassData.updateShieldsForActor(actor, shieldsFieldInput);
    }
    if (values[1] != Mass.FLAGS.SHIELDS_MAX) {
      MassData.updateShieldsMaxForActor(actor, shieldsMaxFieldInput);
    }
    if (values[2] != Mass.FLAGS.SHIELDS_REGEN) {
      MassData.updateShieldsRegenForActor(actor, shieldsRegenFieldInput);
    }
  }

  //////////////////////////add event listener to shields bar
  const shieldsBar = html.querySelector("div.progress.hit-points.shields");
  shieldsBar.addEventListener("click", (event) => {
    Mass.log(false, "clicked on shields bar:", event);
    MassConfig._toggleEditHP(event, true);
  });
  const shieldsBarInput = html.querySelector(
    `input[name="${currShieldsFlag}"]`
  );
  shieldsBarInput.addEventListener("blur", (event) => {
    Mass.log(false, "focus out of input", event);
    MassConfig._toggleEditHP(event, false);
  });
  const shieldsConfigButton = html.querySelector(
    "a#shieldsConfigButton.config-button"
  );
  shieldsConfigButton.addEventListener("click", (event) => {
    Mass.log(false, "clicked on shields config button", event);
    shieldsConfigDialog.render(true);
  });
});
