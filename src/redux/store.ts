import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducer from "./app-reducer"



const bindMiddleware = (middleware: Array<any>) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}



let rootReducer = combineReducers({
    app: appReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunkType<AT extends Action, R = void> = ThunkAction<Promise<R>, AppStateType, unknown, AT>



const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]))



export default store