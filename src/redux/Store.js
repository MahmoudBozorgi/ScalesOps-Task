import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./Reducers";
import { rootSaga } from "./RootSaga";

const sagaMiddleWare = createSagaMiddleware();

const Store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default Store;
