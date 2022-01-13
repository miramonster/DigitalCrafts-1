const hackerNewsIDUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
const hackerNewsLinkUrlBegin = 'https://hacker-news.firebaseio.com/v0/item/' 
const hackerNewsLinkUrlEnd = '.json?print=pretty'

GetHackerNewsLinks()

function GetHackerNewsIds(){
    fetch(hackerNewsIDUrl)
    .then(response => response.json())
    .then(result => GetHackerNewsLinks(result))
}

function GetHackerNewsLinks(hackerNewsIDs){
    fetch(`${hackerNewsLinkUrlBegin}${29923736}${hackerNewsLinkUrlEnd}`)
    .then(response => response.json())
    .then(result => AddHackerNewsItem(result))
}

function AddHackerNewsItem(hackerNews){
    let hackerNewsDiv = document.getElementById("hackerNewsDiv")
    hackerNewsDiv.innerHTML += `<a href=${hackerNews.url}>${hackerNews.title}</a>`
}
