import React, { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import LongList from "../../components/longList/LongList"
import * as api from "../../api/Api"
import { useParams } from "react-router-dom"

const SearchList = () => {

    const [movies, setMovies] = useState()
    
    const {info} = useParams()

    useEffect(() => {
        const get = async () => setMovies(await api.fetchData("search-"+info.split("-")[1], info.split("-")[0]))
        get()
    }, [])

    return (
        <>
            <Navbar />
            <h4 className="text-pink m-4">Search results for "{info.split("-")[0]}"</h4>
            <LongList movies={movies?.results} category={info.split("-")[1]} />
        </>
    )
}

export default SearchList