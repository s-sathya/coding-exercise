import getData from "../database/db";

/**
 * Fetch and format data based on conditions of sort by and filter by
 * 
 * @param {Object} data from fetch call
 * @param {String} sortByPriceValue constant string from option selected
 * @param {String} filterByStoreValue constant string from option selected
 *
 * @returns {Number} returns filtered data
 */
export default function useFilteredData({
  data = getData.data,
  sortByPriceValue,
  filterByStoreValue,
}) {
  const filteredData =
    filterByStoreValue !== null
      ? data.filter((item) => {
        return item.storeAvailability.some(
          (store) =>
            filterByStoreValue === store.storeId && store.inventory >= 5
        );
      })
      : data;

  switch (sortByPriceValue) {
    case "LOWEST_PRICE":
      return filteredData.sort((item_1, item_2) =>
        parseFloat(item_1.price) > parseFloat(item_2.price) ? 1 : -1
      );
    case "HIGHEST_PRICE":
      return filteredData.sort((item_1, item_2) =>
        parseFloat(item_1.price) > parseFloat(item_2.price) ? -1 : 1
      );
    default:
      return filteredData;
  }
}
