import {
  AppActionsReturnTypes,
} from "./app.actions";
import { SET_INITIAL, SET_GLOBAL_ERROR } from "./app.types";

const initialState = {
  initialized: false,
  globalError: null as string | null,
};
export type AppInitialStateType = typeof initialState;

const appReducer = (
  state = initialState,
  action: AppActionsReturnTypes
): AppInitialStateType => {
  switch (action.type) {
    case SET_INITIAL:
      return {
        ...state,
        initialized: true,
      };

    case SET_GLOBAL_ERROR:
      return {
        ...state,
        globalError: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
