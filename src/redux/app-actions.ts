import {BaseThunkType, InferActionsTypes} from './store'



export const SET_INITIAL = 'app/SET_INITIAL'
export const SET_GLOBAL_ERROR = 'app/SET_GLOBAL_ERROR'



export const actions = {
    setInitial: () => ({ type: SET_INITIAL } as const),
    setGlobalError:  (error: string) => ({ type: SET_GLOBAL_ERROR, error } as const)
}
export type ActionTypes = InferActionsTypes<typeof actions>




export const initializeApp = ():BaseThunkType<ActionTypes> => async (dispatch) => {
    dispatch(actions.setInitial())
}