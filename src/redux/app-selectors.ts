import { AppStateType } from "./root-reducer";

export const getInitialized = (state: AppStateType) => {
  return state.app.initialized;
};

export const getGlobalError = (state: AppStateType) => {
  return state.app.globalError;
};
