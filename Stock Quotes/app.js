const showQuotesButton = document.getElementById("showQuotesButton");
const showQuotesDiv = document.getElementById("showQuotesDiv");
const symbolTextBox = document.getElementById("symbolTextBox");

showQuotesButton.addEventListener("click", function() {
    // store the users stock symbol
    let symbol = symbolTextBox.value;

    // get stock info using symbol
    stock = getStockQuote(symbol);
    
    // set initial stock display info
    showQuotesDiv.innerHTML = `<div><h2>${stock.name}</h2> <h3>${stock.price}</h3></div>`

    // start 2 second timer to update price
    window.setInterval(function () {
        // update stock price
        stock = getStockQuote(symbol);  

        // update stock display info
        showQuotesDiv.innerHTML = `<h2>${stock.name}</h2> <h3>${stock.price}</h3>`
    }, 2000)
})