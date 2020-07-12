import {
  SET_IS_AUTH,
  SET_IS_LOADING,
  SET_ERROR,
  AppActionsTypes,
} from "./auth.actions";

const initialState = {
  isAuth: false,
  isLoading: false,
  error: null as string | null,
};
export type AppInitialStateType = typeof initialState;

const authReducer = (
  state = initialState,
  action: AppActionsTypes
): AppInitialStateType => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };

    case SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.status,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.message,
      };

    default:
      return state;
  }
};

export default authReducer;
