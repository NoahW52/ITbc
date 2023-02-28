//-----------------------Notes------------------------
/*                     Learning Posts

POST is like you're creating something new. New data

for POST you have to tell the server you're sending in JSON using .setRequestHeader

in the .send() function you'll have to stringify (using JSON.stringify(body))

When you get the response from the POST, you'll use the same eventlistener as we've used with GET




//------------------Activity1------------------------

const catButton = document.getElementById('catFact')
const catUL = document.getElementById('catUL')


    function getFact(){
        let request = new XMLHttpRequest
        request.addEventListener('load', function() {
            const parsed = JSON.parse(this.responseText)
            let randoFacts = `
            <li>${parsed.data}</li>
            `   
            catUL.innerHTML = randoFacts
        })
        request.open('GET', 'https://meowfacts.herokuapp.com/')
        request.send()
    }

catButton.addEventListener('click', function() {
    getFact()
})

*/

//--------------------Activity2----------------------

const titleTextBox = document.getElementById('titleTextBox')
const symbolTextBox = document.getElementById('symbolTextBox')
const priceTextBox = document.getElementById('priceTextBox')
const quantityTextBox = document.getElementById('quantityTextBox')
const saveProductButton = document.getElementById('saveProductButton')

const request = new XMLHttpRequest
request.addEventListener('load', function() {
    const result = JSON.parse(response)
})

request.open('GET', 'https://endurable-bead-polo.glitch.me/stocks')
request.send()

/*
const request = new XMLHttpRequest

request.open('POST', 'https://endurable-bead-polo.glitch.me/stocks')
request.send()
*/


