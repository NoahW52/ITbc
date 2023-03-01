const email = document.getElementById('emailBox')
const type = document.getElementById('typeBox')
const size = document.getElementById('sizeBox')
const price = document.getElementById('priceBox')
const orderButton = document.getElementById('orderButton')
const coffeeUL = document.getElementById('coffeeUL')
const emailLookUp = document.getElementById('emailLookUp')
const emailLookupButton = document.getElementById('emailLookButton')
const emailSelect = document.getElementById('emailSelect')
deleteSearch = document.getElementById('emailDelete')
deleteButton = document.getElementById('deleteButton')

orderButton.addEventListener('click', orderCoffee)
emailLookupButton.addEventListener('click', emailOrderFind)
deleteButton.addEventListener('click', deleteEmail)

function display() {
    let request = new XMLHttpRequest()
    request.addEventListener('load', function(){
        console.log(this)
        const parsed = JSON.parse(this.responseText)
        const coffeeArr = parsed.map(function(coffee) {
            return `
            <div>
            <h1>${coffee.email}'s Order</h1>
            <li>${coffee.email}</li>
            <li>${coffee.type}</li>
            <li>${coffee.size}</li>
            <li>${coffee.price}</li>
            </div>
            `
        })
        coffeeUL.innerHTML += coffeeArr.join('')
    })
    request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.send()
}
function orderCoffee() {
    let request = new XMLHttpRequest()

    request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')
    const body = {
        email: email.value,
        type: type.value,
        size: size.value,
        price: price.value
    }

    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(body))
}
function emailOrderFind() {
    let request = new XMLHttpRequest()
    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.responseText)
        const orderForEmail = `
        <h1>${parsed.email}'s Order </h1>
        <div>
        <li>${parsed.email}</li>
        <li>${parsed.type}</li>
        <li>${parsed.size}</li>
        <li>${parsed.price}</li>
        </div>
        `
        emailSelect.innerHTML += orderForEmail
    })
    const user = emailLookUp.value 
    request.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/${user}`)
    request.send()
}
function deleteEmail() {
    let request = new XMLHttpRequest()
    request.addEventListener('load', function() {
        
    })
    const deleteValue = deleteSearch.value
    request.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${deleteValue}`)
    request.send()
}

display()