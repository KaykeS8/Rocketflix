export const API_KEY = 'api_key=73624e3055ddf320c075b1b978a0224b';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const language = 'language=pt-BR';

const btn = document.querySelector('.btn')
const insertStructure = document.querySelector('.movie-fetch')

export const basicFecth = async (endpoint) => {
    try {
        const url = `${BASE_URL}${endpoint}&${API_KEY}&${language}`
        const request = await fetch(url)
        const diceJson = await request.json()

        const arrayMovies = diceJson.results

        console.log(url)

        const nameMoviesAll = arrayMovies.map(element => {
            const { title, overview, poster_path } = element
            return [
                title,
                overview,
                poster_path
            ]
        });

        console.log(nameMoviesAll)
        return nameMoviesAll

        function createMovieStructure() {
            return nameMoviesAll.map((item) => {
                console.log(item)
            })
        }

    } catch (erro) {
        console.log(erro)
    }
}


btn.addEventListener("click", () => {
    basicFecth('/discover/movie?width_genres=288')
})





//  items: await basicFecth(`/discover/tv?with_network=213&${language}&${API_KEY}`)
//  items: await basicFecth(`/trending/all/week?${language}&${API_KEY}`)
//  items: await basicFecth(`/movie/top_rated?${language}&${API_KEY}`)
//  items: await basicFecth(`/discover/movie?width_genres=288${language}&${API_KEY}`)
//  items: await basicFecth(`/discover/movie?width_genres=35${language}&${API_KEY}`)
//  items: await basicFecth(`/discover/movie?width_genres=27${language}&${API_KEY}`)
//  items: await basicFecth(`/discover/movie?width_genres=10749${language}&${API_KEY}`)
//  items: await basicFecth(`/discover/movie?width_genres=99${language}&${API_KEY}`)
