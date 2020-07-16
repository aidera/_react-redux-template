// import { put, call, takeEvery, all } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
// import authApi from "../../api/auth.api";
// import {
//   AuthActionsReturnTypes,
//   login,
//   setError,
//   setIsAuth,
//   setIsLoading,
//   LoginReturnType,
// } from "./auth.actions";
// import { LOGIN, REGISTER } from "./auth.types";
//
// const storageName = "userData";
//
// export function* loginWorker(action: LoginReturnType): SagaIterator {
//   yield put(setIsLoading(true));
//   try {
//     const response = yield call(
//       authApi.login,
//       action.payload.email,
//       action.payload.password
//     );
//     if (response.status === 200) {
//       localStorage.setItem(
//         storageName,
//         JSON.stringify({ userId: response.userId, token: response.token })
//       );
//       yield put(setIsAuth(true));
//     } else {
//       yield put(setError(response.message));
//       yield put(setIsAuth(false));
//     }
//     yield put(setIsLoading(false));
//   } catch (e) {
//     yield put(setError(e));
//   }
// }
//
// export function* registerWorker(action: LoginReturnType): SagaIterator {
//   yield console.log(action);
//   try {
//     yield put(setIsLoading(true));
//     const response = yield call(authApi.register, action.payload);
//     if (response.status === 200) {
//       yield put(
//         login({
//           email: action.payload.email,
//           password: action.payload.password,
//         })
//       );
//     } else {
//       yield put(setError(response.message));
//       yield put(setIsAuth(false));
//     }
//     yield put(setIsLoading(false));
//   } catch (e) {
//     yield put(setError(e));
//   }
// }

export default function* authSaga(): SagaIterator {
  // yield all([
  //   takeEvery(LOGIN, loginWorker),
  //   takeEvery(REGISTER, registerWorker),
  // ]);
}

/* THUNK */
// export const login = (
//   email: string,
//   password: string
// ): ThunkAction<Promise<void>, any, any, AnyAction> => async (dispatch) => {
//   dispatch(setIsLoading(true));
//
//   const response = await authApi.login(email, password);
//   if (response.status === 200) {
//     localStorage.setItem(
//       storageName,
//       JSON.stringify({ userId: response.userId, token: response.token })
//     );
//     dispatch(setIsAuth(true));
//   } else {
//     dispatch(setError(response.message));
//     dispatch(setIsAuth(false));
//   }
//   dispatch(setIsLoading(false));
// };
//
// export const logout = (): ThunkAction<
//   Promise<void>,
//   any,
//   any,
//   AnyAction
//   > => async (dispatch) => {
//   localStorage.removeItem(storageName);
//   dispatch(setIsAuth(false));
// };
//
// export const register = (
//   name: string,
//   email: string,
//   password: string
// ): ThunkAction<Promise<void>, any, any, AnyAction> => async (dispatch) => {
//   dispatch(setIsLoading(true));
//   const response = await authApi.register(name, email, password);
//   if (response.status === 201) {
//     await dispatch(login(email, password));
//   } else {
//     dispatch(setError(response.message));
//   }
//   dispatch(setIsLoading(false));
// };
//
// export const checkAuth = (): ThunkAction<
//   Promise<void>,
//   any,
//   any,
//   AnyAction
//   > => async (dispatch) => {
//   const userData = localStorage.getItem(storageName);
//   if (userData) {
//     const userDataObj = JSON.parse(userData);
//     if (userDataObj && userDataObj.token) {
//       dispatch(setIsAuth(true));
//     } else {
//       dispatch(setIsAuth(false));
//     }
//   } else {
//     dispatch(setIsAuth(false));
//   }
// };
