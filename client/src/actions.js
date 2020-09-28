// RELATED WITH ITEMS
export const requestItems = (query) => ({
  type: 'REQUEST_ITEMS',
  query,
});

export const receiveItemsInfo = (payload) => ({
  type: 'RECEIVE_ITEMS_INFO',
  ...payload,
});

export const changePageItems = () => ({
  type: 'CHANGE_TO_NEXT_PAGE_ITEMS',
});

export const changePageSize = (newPageSize) => ({
  type: 'CHANGE_PAGE_SIZE',
  newPageSize,
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

export const updateItemQuantity = (data, itemQuantity) => {
  return {
    type: 'UPDATE_CART_QUANTITY',
    data,
    itemQuantity,
  };
};

export const loadArticle = (data) => {
  return {
    type: 'LOAD_ARTICLE',
    data,
  };
};

export const removeItemFromCart = (itemId) => {
  return {
    type: 'DELETE_ITEM_FROM_CART',
    itemId,
  };
};

export const removeAllFromCart = () => {
  return {
    type: 'DELETE_ALL_FROM_CART',
  };
};

export const purchaseCart = () => {
  return {
    type: 'PURCHASE_CART',
  };
};

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const loadCart = (payload) => ({
  type: 'LOAD_CART',
  ...payload,
});
