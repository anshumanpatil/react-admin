import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import { LoginSaga } from "./login/LoginSaga";
import { RegisterSaga } from "./register/RegisterSaga";

import { LoginReducer } from "./login/LoginReducer";
import { RegisterReducer } from "./register/RegisterReducer";

const reducer = combineReducers({
    login: LoginReducer,
    register: RegisterReducer
})


const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
        compose(applyMiddleware(sagaMiddleware))
    );
    
    
sagaMiddleware.run(LoginSaga);

export default store;