import { SET_INITIAL, SET_GLOBAL_ERROR, ActionTypes } from "./app-actions";



let initialState = {
    initialized: false,
    globalError: null as string | null
}
export type InitialStateType = typeof initialState



const appReducer = (state = initialState, action: ActionTypes): InitialStateType => {

    switch (action.type) {

        case SET_INITIAL:
            return {
                ...state,
                initialized: true
            };

        case SET_GLOBAL_ERROR:
            return {
                ...state,
                globalError: action.error
            };

        default:
            return state;

    }
}



export default appReducer