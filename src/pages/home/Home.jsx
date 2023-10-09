import React, { useEffect, useRef, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import SearchScreen from "../../components/searchScreen/SearchScreen"
import ShortList from "../../components/shortList/ShortList"
import * as api from "../../api/Api"

const Home = () => {

    const [movies, setMovies] = useState()
    const [category, setCategory] = useState("movies")

    const movieRef = useRef()
    const tvRef = useRef()

    useEffect(() => {
        const get = async () => setMovies(await api.fetchData(category))
        get()
    }, [category])


    const changeCategory = newCategory => {
        setCategory(newCategory)
        if(newCategory != "movies") {
            movieRef.current.classList.remove("mini-button2")
            movieRef.current.classList.add("mini-button3")
            tvRef.current.classList.remove("mini-button3")
            tvRef.current.classList.add("mini-button2")            
        }
        else {
            tvRef.current.classList.remove("mini-button2")
            tvRef.current.classList.add("mini-button3")
            movieRef.current.classList.remove("mini-button3")
            movieRef.current.classList.add("mini-button2")            
        }
    }

    return (
        <>
            <Navbar />
            <SearchScreen />
            <div className="trending">
                <h2 className="text-pink m-4">Trending</h2>
                <div className="buttons d-flex justify-content-center">
                    <button ref={movieRef} className="btn mini-button2 text-white" onClick={() => changeCategory("movies")}>
                        <h5>Movies</h5>
                    </button>
                    <button ref={tvRef} className="btn mini-button3 text-white" onClick={() => changeCategory("tv")}>
                        <h5>Tv Shows</h5>
                    </button>
                </div>                
                <ShortList movies={movies?.results.slice(0,9)} category={category} />
            </div>
        </>
    )
}

export default Home