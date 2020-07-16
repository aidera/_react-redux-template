import {
  LOGIN,
  REGISTER,
  SET_ERROR,
  SET_IS_AUTH,
  SET_IS_LOADING,
} from "./auth.types";

export const setIsAuth = (payload: boolean) =>
  ({
    type: SET_IS_AUTH,
    payload,
  } as const);
export type SetIsAuthReturnType = ReturnType<typeof setIsAuth>;

export const setIsLoading = (payload: boolean) =>
  ({
    type: SET_IS_LOADING,
    payload,
  } as const);
export type SetIsLoadingReturnType = ReturnType<typeof setIsLoading>;

export const setError = (payload: string | null) =>
  ({
    type: SET_ERROR,
    payload,
  } as const);
export type SetErrorReturnType = ReturnType<typeof setError>;

export const login = (payload: { email: string; password: string }) =>
  ({
    type: LOGIN,
    payload,
  } as const);
export type LoginReturnType = ReturnType<typeof setError>;

export const register = (payload: {
  name: string;
  email: string;
  password: string;
}) =>
  ({
    type: REGISTER,
    payload,
  } as const);
export type RegisterReturnType = ReturnType<typeof setError>;

export type AuthActionsReturnTypes =
  | SetIsAuthReturnType
  | SetIsLoadingReturnType
  | SetErrorReturnType
  | LoginReturnType
  | RegisterReturnType;
