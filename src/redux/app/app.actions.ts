import { INITIALIZE, SET_INITIAL } from "./app.types";

export const setInitial = () => ({ type: SET_INITIAL } as const);
export type SetInitialReturnType = ReturnType<typeof setInitial>;

export const initializeApp = () =>
  ({
    type: INITIALIZE,
  } as const);
export type InitializeAppReturnType = ReturnType<typeof initializeApp>;

export type AppActionsReturnTypes =
  | SetInitialReturnType
  | InitializeAppReturnType;
