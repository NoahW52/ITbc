const movieList = document.getElementById('movieList')
const movieImage = document.getElementById('movieImage')

function generateMovieList() {

const request = new XMLHttpRequest
request.addEventListener('load', function() {
    const parsed = JSON.parse(this.response)
    const moviesArr = parsed.Search
    allMovies = moviesArr.map(function(m) {
    //or .map((m) => {
        return `
        <div>
            <a onclick="generateCard('${m.imdbID}')">
            <img src="${m.Poster}" id="poster">
            <p id= "title">${m.Title}"</p>
            </a>
        </div>
        `
    })
    movieList.innerHTML = allMovies
})
request.open('GET', 'https://www.omdbapi.com/?s=batman&apikey=a8e1ed9f')
request.send()
}

function generateCard(imdbID) {
    const request = new XMLHttpRequest()

    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.response)

    const movie = `
        <div class="bigCard">
            <div class="main">
                <h1 class="bigTitle">${parsed.Title}</h1>
                <img src="${parsed.Poster} class="bigPoster">
            </div>
            <div class="info">
                <p>Year: ${parsed.Year}</p>
                <p>Rated: ${parsed.Rated}</p>
                <p>Released: ${parsed.Released}</p>
                <p>${parsed.Director}</p>
            </div>
        </div>
        `;
        movieImage.innerHTML = movie
    })
    let id = imdbID
    request.open('GET', `https://www.omdbapi.com/?i=${id}&apikey=a8e1ed9f`)
    request.send()
}

generateMovieList()