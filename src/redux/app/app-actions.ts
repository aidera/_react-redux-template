import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export const SET_INITIAL = "app/SET_INITIAL";
export const SET_GLOBAL_ERROR = "app/SET_GLOBAL_ERROR";

type SetInitialType = {
  type: typeof SET_INITIAL;
};

export const setInitial = (): SetInitialType => ({ type: SET_INITIAL });

type SetGlobalError = {
  type: typeof SET_GLOBAL_ERROR;
  error: string;
};

export const setGlobalError = (error: string): SetGlobalError =>
  ({ type: SET_GLOBAL_ERROR, error } as const);

export type AppActionsTypes = SetInitialType | SetGlobalError;

export const initializeApp = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => async (dispatch) => {
  dispatch(setInitial());
};
