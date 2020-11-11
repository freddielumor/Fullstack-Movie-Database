import { Dispatch } from 'redux'
import fetchData from '../../utils/fetchData'
import { MOVIE_LIST_ENDPOINT } from '../../utils/apiConfig'
import {
  GET_MOVIE_LIST_DATA_START,
  GET_MOVIE_LIST_DATA_SUCESS,
  GET_MOVIE_LIST_DATA_ERROR,
} from '../../types/moviesActionTypes'
import { AllMovies } from '../../types/movies'
import { AppActions } from '../../types/appActionTypes'

export const getMovieListStart = (): AppActions => {
  return {
    type: GET_MOVIE_LIST_DATA_START,
  }
}

export const getMovieListSucess = (payload: AllMovies[]): AppActions => {
  return {
    type: GET_MOVIE_LIST_DATA_SUCESS,
    payload,
  }
}

export const getMovieListError = (payload: string): AppActions => {
  return {
    type: GET_MOVIE_LIST_DATA_ERROR,
    payload,
  }
}

export function getMovieList() {
  return async (dispatch: Dispatch<AppActions>) => {
    dispatch(getMovieListStart())

    try {
      const response = await fetchData(MOVIE_LIST_ENDPOINT)
      dispatch(getMovieListSucess(response.data.results))
    } catch (error) {
      dispatch(getMovieListError(error.message))
    }
  }
}
