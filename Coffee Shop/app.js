function GetOrders(){
    let request = new XMLHttpRequest()
    request.addEventListener('load', function () {
        let result = request.responseText
        DisplayOrders(result)
    })
    request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.send();

}

function DisplayOrders(result) {
    let orders = JSON.parse(result)

    let html = orders.map((order) =>
        `<ul>
            <li>${order.email}</li>
            <li>${order.type}</li>
            <li>${order.size}</li>
            <li>$${order.price}</li>
        </ul>`).join('')

    let div = document.getElementById("viewOrders")
    div.innerHTML = html
    console.log(orders)
}

function AddOrder() {

}

GetOrders()
