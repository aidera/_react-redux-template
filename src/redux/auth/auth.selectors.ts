import { AppStateType } from "../root.reducer";

export const getIsAuth = (state: AppStateType) => {
  return state.auth.isAuth;
};

export const getIsLoading = (state: AppStateType) => {
  return state.auth.isLoading;
};

export const getError = (state: AppStateType) => {
  return state.auth.error;
};
