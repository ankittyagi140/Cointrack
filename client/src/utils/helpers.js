export const helpers = {
  sortTopGainerCoins: function (coins) {
    return coins
      .sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      )
      .slice(0, 7);
  },
  sortTopLoosersCoins: function (coins) {
    return coins
      .sort(
        (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
      )
      .slice(0, 7);
  },
  priceConversion: function (price) {
    return;
  },
  localStorageSet: function (item, value) {
    localStorage.setItem(item, value);
  },
  localStorageGet: function (item) {
    return localStorage.getItem(item);
  },
};
