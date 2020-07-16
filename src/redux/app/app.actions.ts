import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { SET_GLOBAL_ERROR, SET_INITIAL } from "./app.types";

export const setInitial = () => ({ type: SET_INITIAL } as const);
export type SetInitialReturnType = ReturnType<typeof setInitial>;

export const setGlobalError = (payload: string) =>
  ({
    type: SET_GLOBAL_ERROR,
    payload,
  } as const);
export type SetGlobalErrorReturnType = ReturnType<typeof setGlobalError>;

export type AppActionsReturnTypes =
  | SetInitialReturnType
  | SetGlobalErrorReturnType;

export const initializeApp = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => async (dispatch) => {
  dispatch(setInitial());
};
