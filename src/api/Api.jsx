

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDMwYWM5N2VmZDVhNmVjZDJlMjdkZTIzZTAwNjcyNSIsInN1YiI6IjY1MDJlNzY0ZTBjYTdmMDEyZWI5ZDIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WrZ1nEvB8N_aA9d9PSksS8x00LxLB6qCdA5X7rmkF40'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + apiKey
    }
};

export const fetchData = async (option, id) => {
    let url
    switch (option) {
        case "people": // populer people
            url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${id}`
            break
        case "person": // person detail
            url = `https://api.themoviedb.org/3/person/${id}?language=en-US`
            break
        case "person_movies": // person movies
            url = `https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US`
            break
        case "movies": // movies
            url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
            break
        case "movieDetail": // movie detail
            url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
            break
        case "search-movies": // search movie
            url = `https://api.themoviedb.org/3/search/movie?query=${id}&include_adult=false&language=en-US&page=1`
            break
        case "credits": // movie credits
            url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`
            break
        case "tvDetail": // tv show detail
            url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`
            break
        case "tvCredits": // tv show credits
            url = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`
            break
        case "search-tv": // search tv show
            url = `https://api.themoviedb.org/3/search/tv?query=${id}&include_adult=false&language=en-US&page=1`
            break
        default: // tv shows
            url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US'
            break
    }
    return await fetch(url, options)
                    .then(response => response.json())
                    .catch(err => console.error(err))
}
