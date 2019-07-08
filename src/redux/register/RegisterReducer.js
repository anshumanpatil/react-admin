import {
  REGISTER_API_CALL_REQUEST,
  REGISTER_API_CALL_SUCCESS,
  REGISTER_API_CALL_FAILURE
} from './constants'


// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function RegisterReducer(state = initialState, action) {
    switch (action.type) {
      case REGISTER_API_CALL_REQUEST:
        return { ...state, fetching: true, error: null };
      case REGISTER_API_CALL_SUCCESS:
        return { ...state, fetching: false, dog: action.dog };
      case REGISTER_API_CALL_FAILURE:
        return { ...state, fetching: false, dog: null, error: action.error };
      default:
        return state;
    }
  }