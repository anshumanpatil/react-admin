import {
  LOGIN_API_CALL_REQUEST,
  LOGIN_API_CALL_SUCCESS,
  LOGIN_API_CALL_FAILURE
} from './constants'


// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function LoginReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_API_CALL_REQUEST:
        return { ...state, fetching: true, error: null };
      case LOGIN_API_CALL_SUCCESS:
        return { ...state, fetching: false, dog: action.dog };
      case LOGIN_API_CALL_FAILURE:
        return { ...state, fetching: false, dog: null, error: action.error };
      default:
        return state;
    }
  }