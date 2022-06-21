import React, {useContext} from 'react'
import { AppContext } from './context'


const Home = () => {
  const data = useContext(AppContext)
  return (
    <h1>Home {data}</h1>
  )
}

export default Home