import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import authApi from "../../api/auth.api";

export const SET_IS_AUTH = "auth/SET_IS_AUTH";
export const SET_IS_LOADING = "auth/SET_IS_LOADING";
export const SET_ERROR = "auth/SET_ERROR";

const storageName = "userData";

type SetIsAuthType = {
  type: typeof SET_IS_AUTH;
  status: boolean;
};

export const setIsAuth = (status: boolean): SetIsAuthType => ({
  type: SET_IS_AUTH,
  status,
});

type SetIsLoadingType = {
  type: typeof SET_IS_LOADING;
  status: boolean;
};

export const setIsLoading = (status: boolean): SetIsLoadingType => ({
  type: SET_IS_LOADING,
  status,
});

type SetError = {
  type: typeof SET_ERROR;
  message: string | null;
};

export const setError = (message: string | null): SetError => ({
  type: SET_ERROR,
  message,
});

export type AppActionsTypes = SetIsAuthType | SetIsLoadingType | SetError;

export const login = (
  email: string,
  password: string
): ThunkAction<Promise<void>, any, any, AnyAction> => async (dispatch) => {
  dispatch(setIsLoading(true));

  const response = await authApi.login(email, password);
  if (response.status === 200) {
    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: response.userId, token: response.token })
    );
    dispatch(setIsAuth(true));
  } else {
    dispatch(setError(response.message));
    dispatch(setIsAuth(false));
  }
  dispatch(setIsLoading(false));
};

export const logout = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => async (dispatch) => {
  localStorage.removeItem(storageName);
  dispatch(setIsAuth(false));
};

export const register = (
  name: string,
  email: string,
  password: string
): ThunkAction<Promise<void>, any, any, AnyAction> => async (dispatch) => {
  dispatch(setIsLoading(true));
  const response = await authApi.register(name, email, password);
  if (response.status === 201) {
    await dispatch(login(email, password));
  } else {
    dispatch(setError(response.message));
  }
  dispatch(setIsLoading(false));
};

export const checkAuth = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => async (dispatch) => {
  const userData = localStorage.getItem(storageName);
  if (userData) {
    const userDataObj = JSON.parse(userData);
    if (userDataObj && userDataObj.token) {
      dispatch(setIsAuth(true));
    } else {
      dispatch(setIsAuth(false));
    }
  } else {
    dispatch(setIsAuth(false));
  }
};
