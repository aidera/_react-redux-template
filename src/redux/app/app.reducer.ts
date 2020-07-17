import { AppActionsReturnTypes } from "./app.actions";
import { SET_INITIAL } from "./app.types";

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

    default:
      return state;
  }
};

export default appReducer;
