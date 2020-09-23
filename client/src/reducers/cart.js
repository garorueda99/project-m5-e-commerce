// shopping cart state
import { postCart, fetchCart } from '../components/helpers/fetch-functions';
const initialState = {};

// adding items is simple; we should pass in the item ID
// removing the item, maybe harder
// we need to find the index of the item and splice it out

// no. wrong. This doesn't allow for quantity.
// maybe what we want is { "itemId" : action.itemQuantity }

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_CART':
      let newCart = async () => {
        return await fetchCart().then((data) => data.cart);
      };
      console.log('CART===>', newCart());
      return { ...newCart };
    case 'DELETE_ITEM_FROM_CART': {
      const newCart = { ...state };
      delete newCart[action.itemId];
      return { ...newCart };
    }
    case 'UPDATE_CART_QUANTITY': {
      postCart({ ...state, [action.itemId]: action.itemQuantity });
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
