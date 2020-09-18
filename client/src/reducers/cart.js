// shopping cart state

const initialState = [];

// adding items is simple; we should pass in the item ID
// removing the item, maybe harder
// we need to find the index of the item and splice it out

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return [...state, action.itemId];
    case 'DELETE_ITEM_FROM_CART':
      let itemIdxHolder = state.indexOf(action.itemId);
      if (itemIdxHolder === -1) {
        return state;
      } else {
        let stateHolder = state;
        stateHolder.splice(itemIdxHolder, 1);
        return stateHolder;
      }
    default: {
      return state;
    }
  }
}
