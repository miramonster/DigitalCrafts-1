const hackerNewsIDUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
const hackerNewsLinkUrlBegin = 'https://hacker-news.firebaseio.com/v0/item/' 
const hackerNewsLinkUrlEnd = '.json?print=pretty'

GetHackerNewsIds()

function GetHackerNewsIds(){
    fetch(hackerNewsIDUrl)
    .then(response => response.json())
    .then(result => GetHackerNewsLinks(result))
}

function GetHackerNewsLinks(hackerNewsIDs){
    console.log(hackerNewsIDs)
    for (let x of hackerNewsIDs){
        fetch(`${hackerNewsLinkUrlBegin}${x}${hackerNewsLinkUrlEnd}`)
        .then(response => response.json())
        .then(result => AddHackerNewsItem(result))
    }
}

function AddHackerNewsItem(hackerNews){
    let hackerNewsDiv = document.getElementById("hackerNewsDiv")
    hackerNewsDiv.innerHTML += `<h3><a href=${hackerNews.url}>${hackerNews.title}</a></h3>`
}
