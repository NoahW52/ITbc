const addMovieButton = document.getElementById('addMovieButton')
const inputTitleTextBox = document.getElementById('inputTitleTextBox')
const inputYearTextBox = document.getElementById('inputYearTextBox')
const inputPosterTextBox = document.getElementById('inputPosterTextBox')
const movieList = document.getElementById('movieList')
let movieArr = movies.Search
console.log(movieArr)

function displayMovies() {
    const display = movieArr.map(function(movieDesc) {
            return `
                <h1>${movieDesc.Title}</h1>
                <div>${movieDesc.Year}</div>
                <img src = "${movieDesc.Poster}" />
                <button id="deleteButton" onClick="deleteMovie('${movieDesc.Title}')">Delete</button>
            `
        })
        movieList.innerHTML = display.join(" ")
    }
addMovieButton.addEventListener('click', addMovie)

function addMovie() {
    let newMovie = {
        Title: `${inputTitleTextBox.value}`,
        Year: `${inputYearTextBox.value}`,
        Poster: `${inputPosterTextBox.value}`
    }
    movieArr.unshift(newMovie)
    //.unshift adds to the beginning of the array
    displayMovies()
}

function deleteMovie(title) {
    //title is just a placeholder in line 32
    //title is practically the same as movieDesc.Title in line 15, but movieDesc.Title is a local variable within the displayMovies function
    const filteredMovies = movieArr.filter((movie) => {
        //the movie parameter represents every movie in the movieArr array. movie is pretty much an index, so filter will itterate through that prameter
        return movie.Title !== title
    })
    movieArr = filteredMovies
    displayMovies()
}

displayMovies()