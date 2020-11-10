import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  movies: () => 1,
})

export type AppState = ReturnType<typeof rootReducer>
