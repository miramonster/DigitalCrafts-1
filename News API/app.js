const newsFeed = document.getElementById("news");
const sourcesDropDown = document.getElementById("sourcesDropDown");
const showAllButton = document.getElementById("showAllButton");

function DisplayNewsArticles(articles){
    newsFeed.innerHTML = articles.map(article => 
        `<div class='news_feed'>
        <img src='${article.urlToImage}' class='news_image'></img>
        <h2>${article.title}</h2>    
        <h3>by ${article.author}</h4>
        <h4>published: ${article.publishedAt}</h4>
        <a href='${article.url}'>Link to news</a>
        <p>${article.description}</p>
        <br>
        </div>`).join('')
}

showAllButton.addEventListener("click", () => DisplayNewsArticles(news.articles))
sourcesDropDown.addEventListener("change", () => DisplayNewsArticles(news.articles.filter(article => article.source.id == sourcesDropDown.value)))

sourcesDropDown.innerHTML = sources.sources.map(function(source){
    if (news.articles.filter(article => article.source.id == source.id).length > 0) return `<option>${source.id}</option>`    
})

DisplayNewsArticles(news.articles)