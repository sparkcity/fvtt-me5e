/* 
Hooks.on("renderActorSheet", (app, html, data) => {
  const stats_tracking = html.find("div.stats");
  const flags = data.actor.flags.me5e || {};

  stats_tracking.append(`
    <div class="meter-group">
      <div class="label roboto-condensed-upper">
        <span>Shields</span>
      </div>
      <div class="meter sectioned shields">
        <div class="progress shields" role="meter" aria-valuemin="0" aria-valuenow="0" aria-valuemax="0" style="--bar-percentage: 0%">
          <div class="label">
            <span class="value">0</span>
            <span class="separator">/</span>
            <span class="max">0</span>
          </div>
          <input type="text" name="flags.me5e.shields" data-dtype="Number" placeholder="0" value="${
            flags.shields ?? 0
          }" hidden="">
        </div>
      </div>
    </div>
  `);
}); 
*/
