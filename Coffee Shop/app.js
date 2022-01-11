// gets all orders
function getAllOrders() {
    let request = new XMLHttpRequest()
    request.onload = () => displayAllOrders(request.responseText)
    request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.send();
}

// gets order by email
function getOrderByEmail(email) {
    // TODO: validity check on email for order search
    findOrderTextBox.value = ""
    request.onload = () => displaySingleOrder(request.responseText)
    request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders/${email}')
    request.send();
}

// displays a single order
function displaySingleOrder(result) {
    let order = JSON.parse(result)
    let html =
        `<ul>
            <li>${order.email}</li>
            <li>${order.type}</li>
            <li>${order.size}</li>
            <li>$${order.price}</li>
            <button id="deleteButton" onclick="deleteOrder('${order.email}')">Delete Order</button>
        </ul>`
    let div = document.getElementById("viewOrders")
    div.innerHTML = html
}

// displays all orders
function displayAllOrders(result) {
    let orders = JSON.parse(result)
    let html = orders.map((order) =>
        `<ul>
            <li>${order.email}</li>
            <li>${order.type}</li>
            <li>${order.size}</li>
            <li>$${order.price}</li>
            <button id="deleteButton" onclick="deleteOrder('${order.email}')">Delete Order</button>
        </ul>`).join('')
    let div = document.getElementById("viewOrders")
    div.innerHTML = html
}

// deletes an order
function deleteOrder(email) {
    let request = new XMLHttpRequest()
    request.onload = () => getAllOrders()
    request.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${email}`)
    request.send()
}

// adds an order
function addOrder() {
    let request = new XMLHttpRequest()
    request.onload = () => getAllOrders()
    request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')
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

// gets new order info from form
function getNewOrderInfo() {
    let type = ""
    let price = 1;
    let size = ""
    let email = ""

    // type and price
    switch (selectedCoffee.value) {
        case "Black - $1.00":
            type = "Black"
            price = 1
            break;
        case "Sugar - $1.50":
            type = "Sugar"
            price = 1.5
            break;
        case "Cream - $1.50":
            type = "Cream"
            price = 1.5
            break;
        case "Sugar & Cream - $2.00":
            type = "Sugar & Cream"
            price = 2.0
            break;
    }

    // size
    for (const selectedSize of selectedSizes) 
        if (selectedSize.checked) 
            size = selectedSize.value

    // email
    email = document.getElementById("emailTextBox").value

    return [type, parseFloat(price), size, email]
}

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
findOrderButton.onclick = () => getAllOrders(findOrderTextBox.value)