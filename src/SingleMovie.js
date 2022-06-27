import React, {useState, useEffect} from 'react'
import {useParams, NavLink} from "react-router-dom"
import { useGlobalContext } from './context';


const SingleMovie = () => {
  const {isLoading, setIsLoading, API_URL} =useGlobalContext()
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(()=>{
  fetchSingleMovie(`${API_URL}&i=${id}`)

  }, [])

  const fetchSingleMovie = async(url) => {

    setIsLoading(true)
    try {
    const response = await fetch(url);
    const data = await response.json()
    setIsLoading(false)
    setMovie(data)
  
    } catch (error) {
      
      console.log(error);
    }
    
  }

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
      <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
   
  )
};



export default SingleMovie