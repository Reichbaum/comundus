import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {tripsReducer } from './tripsReducer'
import {postsReducer} from './postsReducer'

const rootReducer = combineReducers({
  tripsPage: tripsReducer,
  posts: postsReducer
  }
)
type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>

export type InferActionsType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export type ThunkActionType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reduxStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default reduxStore