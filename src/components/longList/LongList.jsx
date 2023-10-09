import React from "react"
import '../shortList/ShortList.css'
import starIcon from "../../assets/icon/star.png"

const LongList = ({ movies, category }) => {

    const dateFormat = data => {
        var date = data.split("-")
        return date[1]+"/"+date[2]+"/"+date[0]
    }

    return (
        <div className="d-flex">
            <div className="w-25 text-white ms-2">
                <ul className="list-unstyled ps-0 text-white">
                    <li className="my-2 border rounded">
                        <div className="btn btn-toggle  -center rounded collapsed text-white w-100"
                            data-bs-toggle="collapse" role="button" data-bs-target="#sort-collapse">
                            <h5>Sort</h5>
                        </div>
                        <div className="collapse p-3" id="sort-collapse">
                            <p>Sort Results By</p>
                            <select className="form-select mb-2" aria-label="Default select example">
                                <option defaultValue="2">Title Descending</option>
                                <option value="2">Title Ascending</option>
                                <option value="2">Rating Descending</option>
                                <option value="2">Rating Ascending</option>
                                <option value="2">Release Date Descending</option>
                                <option value="2">Release Date Ascending</option>
                            </select>
                        </div>
                    </li>
                    <li className="my-2 border rounded">
                        <div className="btn btn-toggle align-items-center rounded collapsed text-white w-100"
                            data-bs-toggle="collapse" role="button" data-bs-target="#category-collapse">
                            <h5>Category</h5>
                        </div>
                        <div className="collapse p-3" id="category-collapse">
                            <p>Select Category</p>
                            <select className="form-select mb-2" aria-label="Default select example">
                                <option defaultValue="2">Action</option>
                                <option value="2">Comedy</option>
                                <option value="2">Drama</option>
                                <option value="2">Fantasy</option>
                                <option value="2">Horror</option>
                                <option value="2">War</option>
                            </select>
                        </div>
                    </li>
                    <li className="my-2 border rounded">
                        <div className="btn btn-toggle align-items-center rounded collapsed text-white w-100"
                            data-bs-toggle="collapse" role="button" data-bs-target="#rating-collapse">
                            <h5>Rating</h5>
                        </div>
                        <div className="collapse p-3" id="rating-collapse">
                            <p>Select Rating Range</p>
                            <form className="multi-range-field">
                                <input className="multi-range w-100" style={{accentColor: "#F73D93"}} type="range" />
                            </form>
                        </div>
                    </li>
                    <li className="my-2 border rounded">
                        <div className="btn btn-toggle align-items-center rounded collapsed text-white w-100"
                            data-bs-toggle="collapse" role="button" data-bs-target="#keywords-collapse">
                            <h5>Keywords</h5>
                        </div>
                        <div className="collapse p-3" id="keywords-collapse">
                            <input className="input-group-text w-100" type="text" placeholder="Filter by keywords..." />
                        </div>
                    </li>
                </ul>
                <button type="button" className="mini-button btn bg-ping text-white w-100">
                    Search
                </button>
            </div>
            <div className="d-flex flex-wrap my-2 w-75">
                {movies?.map((movie, index) => (
                    <div className="movie-card bg-grey m-4" key={index}>
                        <a href={`/detail/${(category=="movies") ? `${movie.id}-movie` : `${movie.id}-tv`}`}>
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                alt="..." className="h-75" />
                            <div className="info h-25 text-white px-2">
                                <div className="rating d-flex align-items-center">
                                    <img className="icon me-1" src={starIcon} />
                                    {String(movie.vote_average).slice(0, 3)}
                                </div>
                                <div className="name">
                                    {(category=="movies") ? movie.title : movie.name}
                                    </div>
                                <em className="date">
                                    {dateFormat((category=="movies") ? movie.release_date : movie.first_air_date)}
                                </em>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LongList