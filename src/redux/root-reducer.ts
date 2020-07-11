import { combineReducers } from "redux";
import appReducer from "./app/app-reducer";

const rootReducer = combineReducers({
  app: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
