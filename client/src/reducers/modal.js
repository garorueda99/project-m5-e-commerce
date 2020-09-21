// This handles the error for the modal component

const initialState = {
  status: 'idle',
  title: null,
  message: null,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case 'TRIGGER_MODAL':
      return {
        ...state,
        status: 'active',
        title: action.title,
        message: action.message,
      };
    case 'CLOSE_MODAL':
      return initialState;
    default: {
      return state;
    }
  }
}
