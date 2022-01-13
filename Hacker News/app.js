const hackerNewsIDUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
const hackerNewsLinkUrlBegin = 'https://hacker-news.firebaseio.com/v0/item/' 
const hackerNewsLinkUrlEnd = '.json?print=pretty'

// TODO STILL: Convert to using ASYNC functions instead

GetHackerNewsIds()

function GetHackerNewsIds(){
    fetch(hackerNewsIDUrl)
    .then(response => response.json())
    .then(result => GetHackerNewsLinks(result))
}

function GetHackerNewsLinks(hackerNewsIDs){
    for (let hackerNewsID of hackerNewsIDs){
        fetch(`${hackerNewsLinkUrlBegin}${hackerNewsID}${hackerNewsLinkUrlEnd}`)
        .then(response => response.json())
        .then(result => AddHackerNewsItem(result))
    }
}

function AddHackerNewsItem(hackerNews){
    let hackerNewsDiv = document.getElementById("hackerNewsDiv")
    hackerNewsDiv.innerHTML += `<h3><a href=${hackerNews.url}>${hackerNews.title}</a> by ${hackerNews.by} (${ConvertTime(hackerNews.time)})</h3>`
}

function ConvertTime(unixTime){
    return new Date(unixTime * 1000)
}
