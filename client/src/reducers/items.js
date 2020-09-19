//This handles the error for the modal component

const initialState = {
  filters: null,
  nextIndex: 0,
  pageSize: 9,
  result: [],
  totalFound: null,
  status: 'idle',
  selectedItems: null,
};

initialState.filters = `query_result_maxqty=${initialState.pageSize}`;

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
        totalFound: action.totalFound,
        status: 'idle',
      };
    case 'CHANGE_TO_NEXT_PAGE_ITEMS':
      return {
        ...state,
        nextIndex: state.nextIndex + state.pageSize,
        status: 'loading',
      };

    default: {
      return state;
    }
  }
}
