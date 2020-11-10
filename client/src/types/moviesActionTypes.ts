import { AllMovies } from './movies'

// All Movie Types
export const GET_MOVIE_LIST_DATA_START = 'GET_MOVIE_LIST_DATA_START'
export const GET_MOVIE_LIST_DATA_SUCESS = 'GET_MOVIE_LIST_DATA_SUCESS'
export const GET_MOVIE_LIST_DATA_ERROR = 'GET_MOVIE_LIST_DATA_ERROR'

export interface GetMovieListDataPendingAction {
  type: typeof GET_MOVIE_LIST_DATA_START
}

export interface GetMovieListDataSuccessAction {
  type: typeof GET_MOVIE_LIST_DATA_SUCESS
  payload: AllMovies[]
}

export interface GetMovieListDataErrorAction {
  type: typeof GET_MOVIE_LIST_DATA_ERROR
  payload: string
}

export type MovieListActionTypes =
  | GetMovieListDataPendingAction
  | GetMovieListDataSuccessAction
  | GetMovieListDataErrorAction
