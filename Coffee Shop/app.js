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
let url = 'https://troubled-peaceful-hell.glitch.me/orders'

// small class for the coffees
class CoffeeDrink {
    constructor(name, smallPrice, mediumPrice, largePrice) {
        this.name = name
        this.smallPrice = smallPrice
        this.mediumPrice = mediumPrice
        this.largePrice = largePrice
    }
}

// create a couple coffees to sell
let coffees = []
coffees.push(new CoffeeDrink("Black Coffee", 1, 1.5, 2))
coffees.push(new CoffeeDrink("Sugar & Cream", 2, 2.5, 3))
coffees.push(new CoffeeDrink("Mocha", 3, 3.5, 4))

// create out coffee selector elements dynamically from the coffee objects
for (let coffee of coffees)
    document.getElementById("coffeeSelect")
            .innerHTML += `<option>${coffee.name}</option>`

// returns all the orders
function getAllOrders() {
    let request = new XMLHttpRequest()
    request.onload = () => displayAllOrders(request.responseText)
    request.open('GET', url)
    request.send();
}

// displays all the orders
function displayAllOrders(result) {
    let orders = JSON.parse(result)
    let viewOrdersDiv = document.getElementById("viewOrders")
    viewOrdersDiv.innerHTML = orders.map((order) =>
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
    request.open('GET', `${url}/${email}`)
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
    request.open('DELETE', `${url}/${email}`)
    request.send()
}

// adds an order
function addOrder() {    
    if (!document.getElementById("addOrderEmailTextBox").checkValidity())  return

    let request = new XMLHttpRequest()
    request.onload = () => getAllOrders()
    request.open('POST', url)
    request.setRequestHeader('Content-Type', 'application/json')
    const [coffeeType, price, size, email] = getNewOrderInfo()
    const body = {
        email: email,
        type: coffeeType,
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

    // price from combination of type and size
    switch (type){
        case "Black":
            switch(size){
                case "Small":
                    price = 1;
                    break;
                case "Medium":
                    price = 1.5;
                    break;
                case "Large":
                    price = 2.0;
                    break;
            }
            break;
        case "Cream & Sugar":
            switch(size){
                case "Small":
                    price = 1.50;
                    break;
                case "Medium":
                    price = 2.0;
                    break;
                case "Large":
                    price = 2.50;
                    break;
            }
            break;
        case "Mocha":
            switch(size){
                case "Small":
                    price = 1;
                    break;
                case "Medium":
                    price = 1.5;
                    break;
                case "Large":
                    price = 2.0;
                    break;
            }
            break;
    }

    return [type, price, size, email]
}