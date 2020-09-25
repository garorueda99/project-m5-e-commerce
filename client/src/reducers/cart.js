// shopping cart state
import { postCart } from '../components/helpers/fetch-functions';
const initialState = { id: null, indexes: {}, status: 'empty', articles: [] };

// adding items is simple; we should pass in the item ID
// removing the item, maybe harder
// we need to find the index of the item and splice it out

// no. wrong. This doesn't allow for quantity.
// maybe what we want is { "itemId" : action.itemQuantity }

export default function itemsReducer(state = initialState, action) {
  const { id, indexes, status, articles } = action;
  switch (action.type) {
    case 'LOAD_CART':
      return { ...state, id, indexes, status, articles };
    case 'DELETE_ITEM_FROM_CART': {
      const newCart = { ...state };
      delete newCart[action.itemId];
      return { ...newCart };
    }
    case 'UPDATE_CART_QUANTITY': {
      // postCart({ ...state, [action.itemId]: action.itemQuantity });
      console.log(state);
      const { _id } = action.data;
      return {
        ...state,
        indexes: { ...state.indexes, [_id]: action.itemQuantity },
        articles: [...state.articles, action.data],
        status: 'pending',
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
