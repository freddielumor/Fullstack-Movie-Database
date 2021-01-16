import { apiKey } from './clientKeys'

export const MOVIE_LIST_ENDPOINT = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`
export const MOVIE_SEARCH_ENDPOINT = 'https://api.themoviedb.org/3/search/movie'
