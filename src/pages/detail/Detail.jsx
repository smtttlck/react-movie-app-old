import React, { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import * as api from "../../api/Api"
import { useParams } from "react-router-dom"
import './Detail.css'

const Detail = () => {

    const [movie, setMovie] = useState()
    const [credits, setCredits] = useState()

    const { info } = useParams()

    const id = info.split("-")[0]
    const category = info.split("-")[1]

    useEffect(() => {
        const get = async () => {            
            setMovie(await api.fetchData((category == "movie") ? "movieDetail" : "tvDetail", id))
            setCredits(await api.fetchData((category == "movie") ? "credits" : "tvCredits", id))
        }
        get()
    }, [])


    return (
        <>
            <Navbar />
            <div className="big-card bg-purple text-white p-5 d-lg-flex flex-lg-row">
                <div className="card-image w-25">
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie?.poster_path}`} alt="..." />
                </div>
                <div className="card-text w-75">
                    <h1>{(category == "movie") ? movie?.title : movie?.name}</h1>
                    <div className="info-group d-flex">
                        <p>
                            {(category == "movie") ? movie?.release_date.split("-").reverse().join("/")
                                                    :movie?.first_air_date.split("-").reverse().join("/")}
                        </p>
                        <p className="mx-3">{movie?.genres.map(value => value.name + " ")}</p>
                    </div>
                    <div className="overview">
                        <h4 className="text-pink">Overview</h4>
                        <p>{movie?.overview}</p>
                    </div>
                    <div className="cast">
                        <h4 className="text-pink mb-3">Top Billed Cast</h4>
                        <div className="actors d-lg-flex justify-content-evenly">
                            {credits?.cast.map((actor, index) => (
                                (index < 6) ?
                                    <div className="actor-card" key={index}>
                                        <a href={`/person/${actor.id}`}>
                                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${actor?.profile_path}`} alt="..." />
                                            <div className="card-text px-1">
                                                <b>{actor.name}</b>
                                                <p>{actor.character}</p>
                                            </div>
                                        </a>
                                    </div>
                                    : ""
                            ))}

                        </div>

                    </div>

                </div>
            </div>



        </>
    )
}

export default Detail