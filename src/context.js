import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const API_URL = `https://www.omdbapi.com/?apikey=d1c5a748&s=titanic`


const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show: false, msg: ""})

    const getMovies = async(url) =>{
        try {
            const response = await fetch(url);
            const data = await response.json();
            if(data.Response === "True"){

                setIsLoading(false);
                setMovie(data.Search)
            }else{
                setIsError({
                    show: true,
                    msg: data.error
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getMovies(API_URL);
    }, [])

    return <AppContext.Provider value={{isLoading, isError, movie}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppProvider, AppContext, useGlobalContext}