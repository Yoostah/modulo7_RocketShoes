export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}
export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE_SUCCESS',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/CHANGE_AMOUNT_REQUEST',
    id,
    amount,
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/CHANGE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
