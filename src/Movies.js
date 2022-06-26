import React from 'react'
import { useGlobalContext } from './context'

const Movies = () => {
  const {movie} = useGlobalContext();
  return (
    <>
      <h1>Movies</h1>
      {
        movie.map((currMovie, index) => {return(
          <div key={index}>
            <h1>{currMovie.Title}</h1>
          </div>
        )})
      }

    </>
  )
}

export default Movies