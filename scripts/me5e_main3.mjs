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
    SHEILDS_CURRENT: "FLAG_CURRENT_ACTIVE_SHIELDS",
    SHIELDS_MAX: "FLAG_CURRENT_SHIELDS_MAX",
    SHIELDS_REGEN: "FLAG_CURRENT_SHIELDS_REGEN",
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
    return actor.getFlag(Mass.ID, Mass.FLAGS.SHIELDS_CURRENT);
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
   */
  static updateShieldsForActor(actor, value) {
    Mass.log(
      true,
      `Setting CURRENT SHIELDS for actor ${actor.name} to ${value}`
    );
    actor.setFlag(Mass.ID, Mass.FLAGS.SHIELDS_CURRENT, value);
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
      `Setting CURRENT SHIELDS MAX for actor ${actor.name} to ${value}`
    );
    actor.setFlag(Mass.ID, Mass.FLAGS.SHIELDS_CURRENT, value);
    Mass.log(
      true,
      `Confirming CURRENT SHIELDS MAX for actor ${actor.name} set to: `
    );
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
      `Setting CURRENT SHIELDS REGENERATION for actor ${actor.name} to ${value}`
    );
    actor.setFlag(Mass.ID, Mass.FLAGS.SHIELDS_CURRENT, value);
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
    Mass.log(true, `Initializing module flags for ${actor.name}}`);
    MassData.updateShieldsForActor(actor, 0);
    MassData.updateShieldsMaxForActor(actor, 0);
    MassData.updateShieldsRegenForActor(actor, 0);

    Mass.log(
      true,
      `Fields initialized as Shields ${MassData.getShieldsForActor(
        actor
      )}/Max ${MassData.getShieldsMaxForActor(
        actor
      )}/Regen ${MassData.getShieldsRegenForActor(actor)}}`
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
  console.log(actor);
  Mass.log(true, `Opened actor sheet for ${actor.name}`);

  let currentShields = MassData.getShieldsForActor(actor);
  if (currentShields === undefined) {
    Mass.log(
      true,
      `Module flags were not set for actor ${actor.name}(ID: ${actor.id})`
    );
    MassConfig.initializeShieldValuesForActor(actor);
  }
  const maxShields = MassData.getShieldsMaxForActor(actor);
  const shieldsRegen = MassData.getShieldsRegenForActor(actor);
  const shieldPerc = (currentShields / maxShields) * 100;
  const currentShieldsFlag = `${Mass.flagPath}.${Mass.FLAGS.SHIELDS_CURRENT}`;

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
    submit: (result) => {
      console.log(result);
      if (result == "close") {
        console.log("shieldsConfigDialog pop-up manually closed.");
      } else {
      }
    },
  });
  //////////////////////////callback for dialog box
  function updateFieldsFromDialog([values]) {
    let currentShields = MassData.getShieldsForActor(actor);
    let currentShieldsMax = MassData.getShieldsMaxForActor(actor);
    let currentShieldsRegen = MassData.getShieldsRegenForActor(actor);

    if (values[0] != currentShields) {
      MassData.updateShieldsForActor(actor, shieldsFieldInput);
      Mass.log(
        true,
        `Updating CURRENT SHIELDS from previous value ${currentShields} to ${shieldsFieldInput}`
      );
    } else if (values[1] != currentShieldsMax) {
      MassData.updateShieldsMaxForActor(actor, shieldsMaxFieldInput);
      Mass.log(
        true,
        `Updating SHIELDS MAX from previous value ${currentShieldsMax} to ${shieldsMaxFieldInput}`
      );
    } else if (values[2] != currentShieldsRegen) {
      MassData.updateShieldsRegenForActor(actor, shieldsRegenFieldInput);
      Mass.log(
        true,
        `Updating SHIELDS REGEN from previous value ${currentShieldsRegen} to ${shieldsRegenFieldInput}`
      );
    }
  }

  //////////////////////////add event listener to shields bar
  const shieldsBar = html.querySelector("div.progress.hit-points.shields");
  shieldsBar.addEventListener("click", (event) => {
    Mass.log(false, "clicked on shields bar:", event);
    MassConfig._toggleEditHP(event, true);
  });
  const shieldsBarInput = html.querySelector(
    `input[name="${currentShieldsFlag}"]`
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
