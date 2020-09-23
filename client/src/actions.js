// RELATED WITH ITEMS
export const requestItems = (query) => ({
  type: 'REQUEST_ITEMS',
  query,
});

export const receiveItemsInfo = (payload) => ({
  type: 'RECEIVE_ITEMS_INFO',
  ...payload,
});

export const nextPageItems = () => ({
  type: 'CHANGE_TO_NEXT_PAGE_ITEMS',
});

// RELATED WITH MODAL
export const triggerModal = (title, message) => ({
  type: 'TRIGGER_MODAL',
  title,
  message,
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});

// Cart related stuff
export const addItemToCart = (itemId, itemQuantity) => ({
  type: 'ADD_ITEM_TO_CART',
  itemId,
  itemQuantity,
});

export const removeFromCart = (itemId) => ({
  type: 'DELETE_ITEM_FROM_CART',
  itemId,
});

export const updateItemQuantity = (itemId, itemQuantity) => {
  return {
    type: 'UPDATE_CART_QUANTITY',
    itemId,
    itemQuantity,
  };
};

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const loadCart = (cart) => ({
  type: 'LOAD_CART',
  cart,
});
