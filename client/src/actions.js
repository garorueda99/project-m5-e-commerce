//RELATED WITH ITEMS
export const requestItems = (query) => ({
  type: 'REQUEST_ITEMS',
  query,
});

export const receiveItemsInfo = (payload) => ({
  type: 'RECEIVE_ITEMS_INFO',
  ...payload,
});

//RELATED WITH MODAL
export const triggerModal = (title, message) => ({
  type: 'TRIGGER_MODAL',
  title,
  message,
});

export const closeModal = () => ({
  type: 'CLOSE_MODAL',
});

// Cart related stuff
export const addToCart = (itemId) => ({
  type: 'ADD_ITEM_TO_CART',
  itemId
})

export const removeFromCart = (itemId) => ({
  type: 'DELETE_ITEM_FROM_CART',
  itemId
})