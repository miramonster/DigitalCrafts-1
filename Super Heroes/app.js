const superHeroDiv = document.getElementById("superHeroDiv")
const searchButton = document.getElementById("searchButton")
const searchTextBox = document.getElementById("searchTextBox")
const apikey = '252c9978'

searchButton.onclick = () => GetSearchResults()

function GetSearchResults(){
    let superHero = searchTextBox.value
    let request = new XMLHttpRequest()

    request.open('GET', `http://www.omdbapi.com/?s=${superHero}&apikey=${apikey}`)
    request.send()
    
    request.onload = function() {
        let result = JSON.parse(this.responseText)
        DisplaySearchResults(result.Search)
    }
}

function DisplaySearchResults(results){
    let images = results.map(result => 
        `<div class="search">
        <img src=${result.Poster} class="poster"/>
        <h5>${result.Title} (${result.Year})</h5>
        <button id="moreInfoButton" onclick="GetImdbInfo('${result.imdbID}')">More Info</button>
        <div id="${result.imdbID}InfoDiv"></div>
        </div>`).join('')

    superHeroDiv.innerHTML = images
}

function DisplayImdbInfo(result){    
    let info = 
        `<h5>Metascore: ${result.Metascore}</h5>
        <h5>imdb Rating: ${result.imdbRating}</h5>
        <h5>MPAA Rating: ${result.Rated}</h5>
        <h5>Runtime: ${result.Runtime}</h5>
        `
 
    document.getElementById(`${result.imdbID}InfoDiv`).innerHTML = info    
}

function GetImdbInfo(id){    
    let request = new XMLHttpRequest()
    request.onload = function() {
        let result = JSON.parse(this.responseText)
        console.log(result);
        DisplayImdbInfo(result)
    }

    request.open('GET', `http://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
    request.send()
}