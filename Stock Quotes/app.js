const showQuotesButton = document.getElementById("showQuotesButton");
const showQuotesDiv = document.getElementById("showQuotesDiv");
const symbolTextBox = document.getElementById("symbolTextBox");

function displayStockQuote(stock){
    showQuotesDiv.innerHTML = `<div><h2>${stock.name}</h2> <h3>${stock.price}</h3></div>`
}

showQuotesButton.addEventListener("click", function() {
    let symbol = symbolTextBox.value;

    displayStockQuote(getStockQuote(symbol));
    
    window.setInterval(function () {
        stock = getStockQuote(symbol);          
        displayStockQuote(getStockQuote(symbol));    
    }, 2000)
})