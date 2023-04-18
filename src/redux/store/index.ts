import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose } from "redux";
import { createStore } from "redux";
import { reducers } from "../reducers";
import { rootSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware()
// const composedEnchancer = compose
const composedEnchancer = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composedEnchancer( applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
// export const store = createStore(reducers, composedEnchancer(applyMiddleware(sagaMiddleware)))
// export const store = createStore(reducers, applyMiddleware(sagaMiddleware))