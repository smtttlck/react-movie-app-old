import React, { useEffect, useState } from "react"
import './PeopleList.css'

const PeopleList = ({ people, page }) => {

    const [pageList, setPageList] = useState([])

    useEffect(() => {
        let copyPage = page
        let counter = 7
        for (var i = 0; i < 3; i++) {
            if (copyPage != 1 && pageList.indexOf(copyPage - 1) == -1) {
                pageList.push(copyPage - 1)
                copyPage--
                counter--
            }
        }
        copyPage = parseInt(page)
        for (var i = 0; i < counter; i++) {
            if (copyPage != 501 && pageList.indexOf(copyPage) == -1) {
                pageList.push(copyPage)
                copyPage++
            }
        }
        pageList.sort()

    }, [])

    return (
        <div className="container d-flex flex-wrap">
            {people?.map((person, index) => ( 
                <div className="card m-2 bg-grey text-white" key={index}>
                    <a href={`/person/${person.id}`}>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${person.profile_path}`}
                            alt="..." className="w-100"/>
                        <div className="text p-1">
                            <div className="name">{person.name}</div>
                            <div className="movies">
                                {person?.known_for?.map((movie, index) => movie.title + ((index != person.known_for.length-1) ? ", " : ""))}
                            </div>
                        </div>
                    </a>
                </div>

            ))}

            <nav className="d-flex align-items-center w-100 my-2">
                <ul className="pagination d-flex justify-content-center w-100">
                    <li className={(page != 1) ? "page-item" : "page-item disabled"}>
                        <a className="page-link" href={page - 1}>Previous</a>
                    </li>
                    {pageList.map((value, index) => (
                        <li className="page-item" key={index}>
                            <a className="page-link" href={value}>{value}</a>
                        </li>
                    ))}
                    <li className={(page != 500) ? "page-item" : "page-item disabled"}>
                        <a className="page-link" href={parseInt(page) + 1}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default PeopleList