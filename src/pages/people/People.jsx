import React, { useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar"
import * as api from "../../api/Api"
import PeopleList from "../../components/peopleList/PeopleList"
import { useParams } from "react-router-dom"

const People = () => {

    const [people, setPeople] = useState()

    const {page} = useParams()

    useEffect(() => {
        const get = async() => setPeople(await api.fetchData("people", page))
        get()
    }, [])

    return (
        <>
            <Navbar />
            <h2 className="text-pink m-4">Populer People</h2>
            <PeopleList people={people?.results} page={page} />

        </>
    )
}

export default People