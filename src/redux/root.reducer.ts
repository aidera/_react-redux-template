import { combineReducers } from "redux";
import appReducer from "./app/app.reducer";
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
