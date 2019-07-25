import {
  LOGIN_API_CALL_REQUEST,
  LOGIN_API_CALL_SUCCESS,
  LOGIN_API_CALL_FAILURE
} from './constants'


// reducer with initial state
const initialState = {
  fetching: false,
  success: false,
  error: null
};

export function LoginReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_API_CALL_REQUEST:
        return { ...state, fetching: true, error: null, data: action.data };
      case LOGIN_API_CALL_SUCCESS:
        return { ...state, fetching: false, success: action.success, user: action.user };
      case LOGIN_API_CALL_FAILURE:
        return { ...state, fetching: false, success: false, error: action.error, user: null };
      default:
        return state;
    }
  }