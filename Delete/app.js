const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener('click', () => deleteUser())

function deleteUser (){
    let request = new XMLHttpRequest()
    request.addEventListener('load', function () {
        console.log(request.status)
    })
    request.open('DELETE', 'https://reqres.in/api/users/2')
    request.send()
}