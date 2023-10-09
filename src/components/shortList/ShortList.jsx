import React, {  useState } from "react"
import '../shortList/ShortList'
import starIcon from "../../assets/icon/star.png"

const ShortList = ({ movies, category }) => {

    const [counter, setCounter] = useState(4)

    const changeMovies = flag => {
            const buttons = document.querySelectorAll(".move-btn")
            buttons.forEach(button => button.setAttribute("disabled", ""))
            setTimeout(() => {buttons.forEach(button => button.removeAttribute("disabled"))}, 1000)

            let movieDivs = document.querySelectorAll(".movie-card")
            if(flag) {
                movieDivs[counter].classList.add("active")
                setCounter(counter + 1)
            }
            else {
                setTimeout(() => {
                    movieDivs[counter - 4].classList.add("active")
                    movieDivs[counter - 1].classList.remove("active")
                    setCounter(counter - 1)
                    }, 650)
            }
    }

    const dateFormat = data => {
        if(data!=undefined) {
            var date = data.split("-")
            return date[1]+"/"+date[2]+"/"+date[0]
        }
    }

    return (
        <div className="d-flex flex-wrap my-2">
            <div id="carousel1" className="carousel slide w-100" data-bs-interval="false">
                <div className="carousel-inner d-flex justify-content-center">
                    {movies?.map((movie, index) => (
                        <div className={(index < 4) ? "movie-card carousel-item active bg-grey m-4"
                            : "movie-card carousel-item bg-grey m-4"} key={index}>
                            <a href={`/detail/${movie.id}-movie`}>
                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                    alt="..." className="h-75" />
                                <div className="info h-25 text-white px-2">
                                    <div className="rating d-flex align-items-center">
                                        <img className="icon me-1" src={starIcon} />
                                        {String(movie.vote_average).slice(0, 3)}
                                    </div>
                                    <div className="name">{(category=="movies") ? movie.title : movie.name}</div>
                                    <em className="date">{dateFormat((category=="movies") ? movie.release_date : movie.first_air_date)}</em>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {(counter != 4) ? (
                    <button className="carousel-control-prev move-btn" type="button" data-bs-target="#carousel1" 
                        data-bs-slide="prev" onClick={() => changeMovies(false)}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                ) : (" ")}
                {(counter != movies?.length) ? (
                    <button className="carousel-control-next move-btn" type="button" data-bs-target="#carousel1"
                        data-bs-slide="next" onClick={() => changeMovies(true)}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                ) : (" ")}

            </div >


        </div>
    )
}

export default ShortList