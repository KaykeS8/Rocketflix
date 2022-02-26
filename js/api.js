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
        const resultMovies = diceJson.results

        const structure = createStructure()
        function createStructure() {
            const { title, overview, poster_path } = resultMovies[count]
            return (`
            <div class="movie_flex">
                <div class="movie_poster">
                    <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="Movie">
                </div>
                <div class="movie_info">
                    <h2 class="movie_title">${title}</h2>
                    <p class="movie_paragraph">${overview}</p>
                </div>
            </div>
            `)
        }

        function insertInTheDom(dom) {
            console.log(dom)
            insertStructure.innerHTML = dom
        } insertInTheDom(structure)

    } catch (erro) {
        console.log(erro)
    }
}

let count = -1
btn.addEventListener("click", () => {
    count++
    console.log(count)
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
