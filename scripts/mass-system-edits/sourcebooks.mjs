export const loadSourcebookEdits = function () {
  CONFIG.DND5E.sourceBooks ??= {};

  CONFIG.DND5E.sourceBooks = {
    ...CONFIG.DND5E.sourceBooks,
    ME5E: "ME5E 1.4.4"
  };
};