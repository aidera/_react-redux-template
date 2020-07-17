import { AppStateType } from "../root.reducer";

export const getInitialized = (state: AppStateType): boolean => {
  return state.app.initialized;
};
