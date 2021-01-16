import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieList } from '../../redux/actions/moviesActions'
import {
  movieListSelector,
  movieListStageSelector,
} from '../../redux/selectors'
import { AllMovies } from '../../types/movies'

interface IMovieListProps {}

export const MovieList: React.FC<IMovieListProps> = () => {
  const dispatch = useDispatch()
  const allMoviesData = useSelector(movieListSelector)
  const stage = useSelector(movieListStageSelector)

  React.useEffect(() => {
    dispatch(getMovieList())
  }, [])

  if (stage === 'pending') return <p>Loading...</p>

  console.log({ allMoviesData })

  return (
    <>
      <h1>Movie List</h1>

      {allMoviesData.map((movie: AllMovies) => {
        return (
          <div key={movie.id}>
            <p>{movie.title}</p>
          </div>
        )
      })}
    </>
  )
}

export default MovieList
