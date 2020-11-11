import {
  GET_MOVIE_LIST_DATA_START,
  GET_MOVIE_LIST_DATA_SUCESS,
  GET_MOVIE_LIST_DATA_ERROR,
  MovieListActionTypes,
} from '../../types/moviesActionTypes'

const initialState = {
  movies: [],
  stage: 'pending',
  error: null,
}

export default function (state = initialState, action: MovieListActionTypes) {
  switch (action.type) {
    case GET_MOVIE_LIST_DATA_START:
      return {
        ...state,
      }
    case GET_MOVIE_LIST_DATA_SUCESS:
      return {
        ...state,
        stage: 'success',
        movies: action.payload,
      }
    case GET_MOVIE_LIST_DATA_ERROR:
      return {
        ...state,
        stage: 'error',
        error: action.payload,
      }
    default:
      return state
  }
}
