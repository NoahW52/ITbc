const emailTextBox = document.getElementById('emailTextBox')
const typeTextBox = document.getElementById('typeTextBox')
const sizeTextBox = document.getElementById('sizeTextBox')
const priceTextBox = document.getElementById('priceTextBox')
const addCoffeeButton = document.getElementById('add')
const coffeeUL = document.getElementById('coffeeUL')
const allOrders = document.getElementById('allOrders')
const emailLook = document.getElementById('emailLook')
const emailButton = document.getElementById('emailButton')
const selectedEmail = document.getElementById('selectedEmail')
const deleteSearch = document.getElementById('deleteSearch')
const deleteBttn = document.getElementById('deleteBttn')

function display() {
    let request = new XMLHttpRequest()
    request.addEventListener('load', function() {
        console.log(this)
        const parsed = JSON.parse(this.responseText)
        const coffeeDetail = parsed.map(function(coffee) {
            return ` <div>
            <h1>${coffee.email}'s Order</h1>
            <li>${coffee.email}</li>
            <li>${coffee.type}</li>
            <li>${coffee.size}</li>
            <li>${coffee.price}</li>
            </div>
            `
        })
        coffeeUL.innerHTML = coffeeDetail.join('')
    })
    request.open('GET', 'https://troubled-peaceful-hell.glitch.me/orders')
    request.send()
}
function createOrder() {
    const request = new XMLHttpRequest()

    request.open('POST', 'https://troubled-peaceful-hell.glitch.me/orders')
    const body = {
        email: emailTextBox.value,
        type: typeTextBox.value,
        size: sizeTextBox.value,
        price: parseFloat(priceTextBox.value)
    }
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(body))
}

function emailLookUp() {
    const request = new XMLHttpRequest()
    request.addEventListener('load', function() {
        const parsed = JSON.parse(this.response)
        const orderByEmail = `
            <h1>${parsed.email}'s Order </h1>
            <div>
            <li>${parsed.email}</li>
            <li>${parsed.type}</li>
            <li>${parsed.size}</li>
            <li>${parsed.price}</li>
            </div>
            `

        selectedEmail.innerHTML += orderByEmail
    })
    let user = emailLook.value
    request.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/${user}`)
    request.send()
}

function deleteByEmail() {
    let request = new XMLHttpRequest()
    request.addEventListener('load', function() {
        console.log(this.response)
    })
    const deleteValue = deleteSearch.value
    request.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${deleteValue}`)
    request.send()
}

deleteBttn.addEventListener('click', deleteByEmail)
emailButton.addEventListener('click', emailLookUp)
addCoffeeButton.addEventListener('click', createOrder)
display()


