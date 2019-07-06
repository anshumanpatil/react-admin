import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas";
import { reducer } from "./redux";
import { createStore, applyMiddleware, compose } from "redux";


const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware))
    );
    
    
sagaMiddleware.run(watcherSaga);

export default store;