//This handles the error for the modal component

const initialState = {
  filters: { query_result_maxqty: 8 },
  result: [],
  totalFound: null,
  nextIndex: null,
  status: 'idle',
  selectedItems: null,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ITEMS':
      return {
        ...state,
        status: 'loading',
      };
    case 'RECEIVE_ITEMS_INFO':
      return {
        ...state,
        result: action.result,
        nextIndex: action.nextIndex,
        totalFound: action.totalFound,
        status: 'idle',
      };
    default: {
      return state;
    }
  }
}
