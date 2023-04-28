/**
 * Returns formatted string from an input float
 * 
 * @param {Float} price 
 * @returns {String} returns formatted price
 */
export const formatPrice = (price = 0) => {
  const roundedPrice = Math.round(price * 100) / 100;

  return `$ ${roundedPrice}`;
}