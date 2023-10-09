import React, { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import LongList from "../../components/longList/LongList"
import * as api from "../../api/Api"
import { useParams } from "react-router-dom"

const List = () => {

    const [movies, setMovies] = useState()
    
    const {category} = useParams()

    useEffect(() => {
        const get = async () => setMovies(await api.fetchData(category))
        get()
    }, [])

    return (
        <>
            <Navbar />
            <LongList movies={movies?.results} category={category} />
        </>
    )
}

export default List