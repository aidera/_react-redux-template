import { INITIALIZE, SET_GLOBAL_ERROR, SET_INITIAL } from "./app.types";

export const setInitial = () => ({ type: SET_INITIAL } as const);
export type SetInitialReturnType = ReturnType<typeof setInitial>;

export const setGlobalError = (payload: string) =>
  ({
    type: SET_GLOBAL_ERROR,
    payload,
  } as const);
export type SetGlobalErrorReturnType = ReturnType<typeof setGlobalError>;

export const initializeApp = () =>
  ({
    type: INITIALIZE,
  } as const);
export type InitializeAppReturnType = ReturnType<typeof initializeApp>;

export type AppActionsReturnTypes =
  | SetInitialReturnType
  | SetGlobalErrorReturnType
  | InitializeAppReturnType;
