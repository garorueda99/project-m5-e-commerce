//RELATED WITH ITEMS
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
<<<<<<< HEAD
  itemId
})

export const removeFromCart = (itemId) => ({
  type: 'DELETE_ITEM_FROM_CART',
  itemId
})
=======
  itemId,
});

export const removeFromCart = (itemId) => ({
  type: 'DELETE_ITEM_FROM_CART',
  itemId,
});
>>>>>>> 66f5b61dbd9ca51cac39472fa9adc726dec998fe
