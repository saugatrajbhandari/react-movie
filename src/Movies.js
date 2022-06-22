import React from 'react'
import { useGlobalContext } from './context'

const Movies = () => {
  const {movie} = useGlobalContext();
  console.log(movie);
  return (
    <>
      <h1>Movies</h1>
      {
        movie.map((currMovie) => {return(
          <div>
            <h1>{currMovie.Title}</h1>
          </div>
        )})
      }

    </>
  )
}

export default Movies