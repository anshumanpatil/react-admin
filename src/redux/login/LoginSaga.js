import {
  LOGIN_API_CALL_REQUEST,
  LOGIN_API_CALL_SUCCESS,
  LOGIN_API_CALL_FAILURE
} from './constants'
import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* LoginSaga() {
  yield takeLatest(LOGIN_API_CALL_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog(data) {
  return axios({
    method: "post",
    url: "http://localhost:4000/users",
    data
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(state) {
  try {
    const response = yield call(fetchDog, state.data);

    const success = response.data.success;
    console.log("response.dataresponse.dataresponse.dataresponse.dataresponse.data", success)

    // dispatch a success action to the store with the new dog
    yield put({ type: LOGIN_API_CALL_SUCCESS, success });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: LOGIN_API_CALL_FAILURE, error });
  }
}