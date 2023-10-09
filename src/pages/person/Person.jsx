import React, { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import * as api from "../../api/Api"
import { useParams } from "react-router-dom"
import '../detail/Detail.css'

const Person = () => {

    const { actorId } = useParams()

    const [actor, setActor] = useState()
    const [actorMovies, setActorMovies] = useState()

    useEffect(() => {
        const get = async () => {
            setActor(await api.fetchData("person", actorId))
            setActorMovies(await api.fetchData("person_movies", actorId))
        }
        get()
    }, [])

    const ageCalculater = dateString => {
        if (dateString != undefined) {
            const date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = String(date).split(" ")[2]
            const actorDate = dateString.split("-")

            let age = year - actorDate[0]
            if (month < actorDate[1])
                age--
            else if (actorDate[1] == month && day < actorDate[2])
                age--

            return age
        }
    }

    return (
        <>
            <Navbar />
            <div className="big-card bg-purple text-white p-5 d-lg-flex flex-lg-row">
                <div className="card-image w-25">
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${actor?.profile_path}`} alt="..." />
                    <div className="personal-info m-2">
                        <div className="info-group">
                            <h5 className="text-pink">Known For</h5>
                            <p>{actor?.known_for_department}</p>
                        </div>
                        <div className="info-group">
                            <h5 className="text-pink">Gender</h5>
                            <p>{(actor?.gender == 1) ? "Female" : "Male"}</p>
                        </div>
                        <div className="info-group">
                            <h5 className="text-pink">Birthday</h5>
                            <p>{`${actor?.birthday} (${ageCalculater(actor?.birthday)} years old)`}</p>
                        </div>
                        <div className="info-group">
                            <h5 className="text-pink">Place of Birth</h5>
                            <p>{actor?.place_of_birth}</p>
                        </div>
                    </div>
                </div>
                <div className="card-text w-75">
                    <h1>{actor?.name}</h1>
                    <div className="biography">
                        <h4 className="text-pink">Biography</h4>
                        <p>{actor?.biography}</p>
                    </div>
                    <div className="cast">
                        <h4 className="text-pink mb-3">Known For</h4>
                        <div className="actors d-lg-flex justify-content-evenly">
                            {actorMovies?.cast?.map((actor, index) => (
                                (index < 6) ?
                                    <div className="actor-card" key={index}>
                                        <a href={`/detail/${actor.id}-${(actor.media_type)=="movie" ? "movie" : "tv"}`}>
                                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${actor?.poster_path}`} alt="..." />
                                            <div className="card-text px-1">
                                                <b>{(actor.media_type)=="movie" ? actor.title : actor.name}</b>
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

export default Person