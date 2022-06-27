import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'

const Movies = () => {
  const {movie} = useGlobalContext();
  return (
    <>

      <h1>Movies</h1>
      {
       

      <section className='movie-page'>
        <div class="container grid grid-4-col">

        {
        movie.map((currMovie) => {
          const {imdbID, Title, Poster} = currMovie;
          const movieName = Title.slice(0, 15);
          return <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className='card'>
              <div className='card-info'>
                <h2>{movieName}{Title.length > 15 && (<span>....</span>)}</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
          </NavLink>
          
        })

      }

        </div>
      </section>

    </>
  )
}

export default Movies