const hackerNewsIDUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
const hackerNewsLinkUrlBegin = 'https://hacker-news.firebaseio.com/v0/item/' 
const hackerNewsLinkUrlEnd = '.json?print=pretty'

// TODO STILL: Convert to using ASYNC functions instead

GetHackerNewsIds()

// return the hacker news item IDs
function GetHackerNewsIds(){
    fetch(hackerNewsIDUrl)
    .then(response => response.json())
    .then(result => GetAllHackerNewsItems(result))
}

// return all the hacker news items using IDs
async function GetAllHackerNewsItems(hackerNewsIDs){
    let data = []    
    for (let hackerNewsID of hackerNewsIDs){
        data.push(fetch(`${hackerNewsLinkUrlBegin}${hackerNewsID}${hackerNewsLinkUrlEnd}`))
    }    
    Promise.allSettled(data).then(response => response.forEach(result => DisplayHackerNewsItem(result.value.json())))
}

// add a hacker news item to the feed
function DisplayHackerNewsItem(hackerNew){
    hackerNew.then(hackerNews => {
    let hackerNewsDiv = document.getElementById("hackerNewsDiv")
    hackerNewsDiv.innerHTML += `<h3><a href=${hackerNews.url}>${hackerNews.title}</a> by ${hackerNews.by} (${ConvertTime(hackerNews.time)})</h3>`
    })
}

// convert hacker news unix time to readable date and time
function ConvertTime(unixTime){
    return new Date(unixTime * 1000)
}
