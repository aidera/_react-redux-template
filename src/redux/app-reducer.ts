import { SET_INITIAL, SET_GLOBAL_ERROR, AppActionsTypes } from "./app-actions";

const initialState = {
  initialized: false,
  globalError: null as string | null,
};
export type AppInitialStateType = typeof initialState;

const appReducer = (
  state = initialState,
  action: AppActionsTypes
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
        globalError: action.error,
      };

    default:
      return state;
  }
};

export default appReducer;
