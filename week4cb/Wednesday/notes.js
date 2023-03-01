//--------------NOTES--------------------------
/*           LEARNING PROMISES

A promise uses callbacks

let promise = new Promise(function(resolve, reject) {
    resolve()
}) -> it takes in 2 parameters

Promise is always capitalized

promise.then(function() {
    })

using a fetch to get an api it will return a promise that is pending

we'll use .then to retreive the data from the api

we will always be using response.json to retreive the data

without specification, fetch will always return as a 'GET'

going to at least use .then twice in fetch 

//--------------------------Azam's code-------------------------------

const stocksUL = document.getElementById('stocksUL')

// CREATE A PROMISE 

let promise = new Promise(function(resolve, reject) {
    resolve() // promise has been fulfilled 
    // reject // promise has been rejected 
})

promise.then(() => {
    // resolving the promise 
}).catch((error) => {
    // rejection 
}) 


// https://endurable-bead-polo.glitch.me/stocks

// axios 

// by default GET 


fetch('https://endurable-bead-polo.glitch.me/stocks')
.then(response => response.json())
.then(stocks => {

    const stockItems = stocks.map(stock => {
        return `<li>${stock.symbol}</li>`
    })

    stocksUL.innerHTML = stockItems.join('')

})
//--------------------------------------------------------------------

*/
/*
const productUL = document.getElementById('productUL')

fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(products => {
    
    const productItems = products.map(function(product) {
        return `
        <li>${product.title}</li>
        <li>${product.description}</li>
        <img src='${product.images}'/>
        `
    })
    productUL.innerHTML = productItems.join('')
})
*/
const coffeeUL = document.getElementById('coffeeUL')
const emailBox = document.getElementById('emailBox')
const typeBox = document.getElementById('typeBox')
const sizeInput = document.getElementById('inputSize')
const priceBox = document.getElementById('priceBox')
const enterButton = document.getElementById('enterButton')

fetch('https://troubled-peaceful-hell.glitch.me/orders')
.then(response => response.json())
.then(coffees => {
    const coffeeMake = coffees.map(function(coffee) {
        return `
        <li>${coffee.email}</li>
        <li>${coffee.type}</li>
        <li>${coffee.size}</li>
        <li>${coffee.price}</li>
        `
    }) 
    coffeeUL.innerHTML = coffeeMake.join('')
})

function addOrder() {
const body = {
    email: email.value,
    type: type.value,
    size: size.value,
    price: price.value
}

fetch('https://troubled-peaceful-hell.glitch.me/orders', {
    method: 'POST',
    headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})

}
enterButton.addEventListener('click', addOrder)
    


//---------------------------------------------------------------



//--------------LEARNING HOW TO USE POST-----------------
/*
 in your fetch you'll have to use a second argument in the fetch parameters and make it an object to specify anything other than GET in your fetch statement
            EX: fetch('https://troubled-peaceful-hell.glitch.me/orders', {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                })
*/

