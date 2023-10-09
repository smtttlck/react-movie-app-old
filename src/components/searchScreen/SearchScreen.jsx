import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

const SearchScreen = () => {

    const inputRef = useRef()
    const optionRef = useRef()

    const navigate = useNavigate()

    return (
        <div className="search text-pink w-100 p-5"
            style={{
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/01/03/01/17/film-3057394_1280.jpg)',
                backgroundSize: "cover", height: '350px,'
            }}>
            <h3>Welcome</h3>
            <h4>Movies to discover. Explore now.</h4>
            <div id="search-bar" className="input-group w-100">
                <input type="search" className="form-control w-75" placeholder="Search movie" 
                        aria-label="Search" ref={inputRef} />
                <select className="form-select category-select" ref={optionRef}>
                    <option value={"movies"}>Movie</option>
                    <option value="tv">Tv Show</option>
                </select>
                <button type="button" className="mini-button btn bg-ping text-white"
                        onClick={() => navigate(`/searchList/${inputRef.current.value+"-"+optionRef.current.value}`)}>
                    Search</button>
            </div>
        </div>
    )
}

export default SearchScreen