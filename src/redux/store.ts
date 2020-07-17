import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware: Array<any>) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));

sagaMiddleware.run(rootSaga);

export default store;
