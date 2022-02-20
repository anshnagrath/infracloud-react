import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { mainReducer } from "../modules/App/mainReducer";
import AppContext from "../helpers/context";
import { mainSaga } from "../modules/App/mainSaga";

const sagaMiddleware = createSagaMiddleware( );

const middleware = [sagaMiddleware];

const store = createStore(
    mainReducer,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(mainSaga);

export default store;
