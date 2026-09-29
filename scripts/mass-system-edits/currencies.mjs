export const loadCurrenciesEdits = function () {
  CONFIG.DND5E.currencies ??= {};

  CONFIG.DND5E.currencies = {
    ...CONFIG.DND5E.currencies,
    credits: {
      label: "ME5E.currencies.currency",
      abbreviation: "ȼ",
      conversion: 1,
      icon: "modules/fvtt-me5e/assets/icons/digital_currency.webp"
    }
  };
};