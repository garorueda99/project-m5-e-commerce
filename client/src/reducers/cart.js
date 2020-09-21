// shopping cart state

const initialState = {};

// adding items is simple; we should pass in the item ID
// removing the item, maybe harder
// we need to find the index of the item and splice it out

// no. wrong. This doesn't allow for quantity.
// maybe what we want is { "itemId" : action.itemQuantity }

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_ITEM_FROM_CART': {
      let newCart = { ...state };
      delete newCart[action.itemId];
      return newCart;
    }
    case 'UPDATE_CART_QUANTITY': {
      return {
        ...state,
        [action.itemId]: action.itemQuantity,
      };
    }
    case 'CLEAR_CART': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
