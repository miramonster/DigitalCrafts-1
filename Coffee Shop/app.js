// html elements
let addOrderButton = document.getElementById("addOrderButton")
let showAllButton = document.getElementById("showAllOrdersButton")
let findOrderButton = document.getElementById("findOrderButton")
let selectedCoffee = document.getElementById("coffeeSelect")
let findOrderTextBox = document.getElementById("findOrderByEmailTextBox")
let selectedSizes = document.querySelectorAll("input[name='size']")

// event handlers
addOrderButton.onclick = () => addOrder()
showAllButton.onclick = () => getAllOrders()
findOrderButton.onclick = () => getOrderByEmail(findOrderTextBox.value)

// api url
let apiUrl = 'https://troubled-peaceful-hell.glitch.me/orders'

// small class for the coffees
class Coffee {
    constructor(type, smallPrice, mediumPrice, largePrice) {
        this.type = type
        this.smallPrice = smallPrice
        this.mediumPrice = mediumPrice
        this.largePrice = largePrice
    }

    // returns the price based on the drink size given
    getPrice (drinkSize){
        switch (drinkSize){
            case "Small":
                return this.smallPrice
            case "Medium":
                return this.mediumPrice
            case "Large":
                return this.largePrice
        }
    }
}

// create a couple coffees to sell
let coffees = []
coffees.push(new Coffee("Black Coffee", 1, 1.5, 2))
coffees.push(new Coffee("Sugar & Cream", 2, 2.5, 3))
coffees.push(new Coffee("Mocha", 3, 3.5, 4))

// create the coffee selector elements dynamically from the coffee objects
for (let coffee of coffees)
    document.getElementById("coffeeSelect")
            .innerHTML += `<option>${coffee.type}</option>`

// returns all the orders
function getAllOrders() {
    let request = new XMLHttpRequest()
    request.onload = () => displayAllOrders(request.responseText)
    request.open('GET', apiUrl)
    request.send();
}

// displays all the orders
function displayAllOrders(result) {
    let orders = JSON.parse(result)
    let viewOrdersDiv = document.getElementById("viewOrdersDiv")
    viewOrdersDiv.innerHTML = orders.map(order =>
        `<ul style="list-style-type: none;">
        <li>${order.email}</li>
        <li>${order.type}</li>
        <li>${order.size}</li>
        <li>$${order.price}</li>
        <button id="deleteButton" onclick="deleteOrder('${order.email}')">Delete Order</button>
        </ul>`).join('')
}

// return a single order using an email
function getOrderByEmail(email) {
    if (!findOrderTextBox.checkValidity()) return
    findOrderTextBox.value = ""
    let request = new XMLHttpRequest()
    request.onload = () => displaySingleOrder(request.responseText)
    request.open('GET', `${apiUrl}/${email}`)
    request.send();
}

// displays a single order
function displaySingleOrder(result) {
    let order = JSON.parse(result)
    let viewOrdersDiv = document.getElementById("viewOrders")
    viewOrdersDiv.innerHTML =
        `<ul style="list-style-type: none;">
            <li>${order.email}</li>
            <li>${order.type}</li>
            <li>${order.size}</li>
            <li>$${order.price}</li>            
            <button id="deleteButton" onclick="deleteOrder('${order.email}')">Delete Order</button>
        </ul>`
}

// deletes an order using an email
function deleteOrder(email) {
    let request = new XMLHttpRequest()
    request.onload = () => getAllOrders()
    request.open('DELETE', `${apiUrl}/${email}`)
    request.send()
}

// adds an order
function addOrder() {    
    if (!document.getElementById("addOrderEmailTextBox").checkValidity())  return

    let request = new XMLHttpRequest()
    request.onload = () => getAllOrders()
    request.open('POST', apiUrl)
    request.setRequestHeader('Content-Type', 'application/json')
    const [type, price, size, email] = getNewOrderInfo()
    const body = {
        email: email,
        type: type,
        size: size,
        price: price,
    }
    request.send(JSON.stringify(body))
}

// gets new order info from the html form
function getNewOrderInfo() {
    let type = ""
    let price = 0;
    let size = ""
    let email = ""

    // coffee type from dropdown
    type = document.getElementById("coffeeSelect").value

    // email 
    email = document.getElementById("addOrderEmailTextBox").value

    // size from radio buttons
    for (const selectedSize of selectedSizes) 
        if (selectedSize.checked)
            size = selectedSize.value

    // filter to correct coffee and get the price using the drink size
    let coffee = coffees.filter(c => c.type === type)    
    price = coffee.getPrice(size)    

    return [type, price, size, email]
}