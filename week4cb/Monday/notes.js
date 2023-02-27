//JSON - javascript object notation
/*
the key or attribute must always within double quotes: "name": John

to add parameters to your api you'll add them at the of the api key with an = sign and the name of the parameter

api's are a lot of reading to find the correct formatting of the url to find the specific details you are looking for 

XMLHttpRequest() is how we will be retreiving our api's 

        EX: let request = new XMLHttpRequest()
        request.addEventListener('load', function() {
            console.log()
        })
            request.open('GET', 'This will be the link to our api')
            request.send()

JSON.parse() takes in a valid JSON string and returns an object
        This is what will give us our api as an ordered object that we can now call back to
*/

//----------------------------------Activity1---------------------------------------------
/*
            //This one requires to have a ul in the HTML with an id of "dogUl"

const dogUl = document.getElementById('dogUl')

let request = new XMLHttpRequest()
request.addEventListener('load', function() {
    console.log(this)

    const result = JSON.parse(this.responseText)
    const dogs = result
    const dogItems = dogs.map(function(dog) {
        return `<li>${dog.fact}</li>`
    })
    dogUl.innerHTML = dogItems
})

request.open('GET', 'https://island-bramble.glitch.me/dog-facts')
request.send()
*/
//-----------------------------------Activity2------------------------------------------
/*
const dogButton = document.getElementById('dogButton')
const image = document.getElementById('img')

dogButton.addEventListener('click', function() {
    getDogInfo()
})

function getDogInfo() {
    const request = new XMLHttpRequest()

    request.addEventListener('load', function() {
    const parsed = JSON.parse(this.response)
    image.setAttribute('src', parsed.message)
    })

    request.open('GET', 'https://dog.ceo/api/breeds/image/random')
    request.send()
}
*/