import React from "react"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark1 w-100 text-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">MOVIES</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-evenly w-75 ms-5">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/list/movies">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/list/tvShows">TV Shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/people/1">People</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar