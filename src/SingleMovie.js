import React from 'react'
import {useParams} from "react-router-dom"

const SingleMovie = () => {
  const { id } = useParams();
  return (
    <div> 
      Our Single movie {id}
    </div>
  )
}

export default SingleMovie