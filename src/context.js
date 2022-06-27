import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`


const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show: false, msg: ""})
    const [query, setQuery] = useState("titanic");

    const getMovies = async(url) =>{
        try {
            const response = await fetch(`${url}&s=${query}`);
            const data = await response.json();
            if(data.Response === "True"){

                setIsLoading(false);
                setIsError({
                    show: false,
                    msg: ""
                })
                setMovie(data.Search)
            }else{
                setIsError({
                    show: true,
                    msg: data.Error
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const timeOut = setTimeout(() => {
            getMovies(API_URL);
        }, 800);

        return () => clearTimeout(timeOut)

    }, [query])

    return <AppContext.Provider value={{isLoading, isError, movie, query, setQuery}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppProvider, AppContext, useGlobalContext}

