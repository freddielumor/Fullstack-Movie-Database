import { combineReducers } from 'redux'
import moviesReducer from '../reducers/moviesReducer'

export const rootReducer = combineReducers({
  movies: moviesReducer,
})

export type AppState = ReturnType<typeof rootReducer>
