import {
  LOGIN_API_CALL_REQUEST,
  LOGIN_API_CALL_SUCCESS,
  LOGIN_API_CALL_FAILURE
} from './constants'
import { takeLatest, call, put } from "redux-saga/effects";
import API from '../../services/API'
import Auth from '../../services/Auth'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* LoginSaga() {
  yield takeLatest(LOGIN_API_CALL_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function loginCall(data) {
  return API.loginCall(data)
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(state) {
  try {
    const response = yield call(loginCall, state.data);

    const success = response.data.success;
    console.log("[workerSaga] response.data", response.data)
    if(success){
      Auth.setToken(response.data.token);
    }
    // dispatch a success action to the store with the user
    yield put({ type: LOGIN_API_CALL_SUCCESS, success, user: response.data.user });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: LOGIN_API_CALL_FAILURE, error: "Not Authorised" });
  }
}