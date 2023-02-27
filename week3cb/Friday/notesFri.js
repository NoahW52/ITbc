const counterHeading = document.getElementById('counterHeading')
const incrementCounterButton = document.getElementById('incrementCounterButton')
const registerForm = document.getElementById('registerForm')


function performGreeting() {
    return "HELLO"

}

console.log(performGreeting())

registerForm.addEventListener('submit', (event) => {
    console.log('SUBMIT FIRED')
    // This prevents the form from being submitted 
    console.log(event.preventDefault())

})


let counter = 0 

incrementCounterButton.addEventListener('click', () => {
    counter++
    counterHeading.innerHTML = counter 
})



const firstName = 'John'
const lastName = 'Doe'
const counterHeading = document.getElementById('counterHeading')
// The counter value is 99
//counterHeading.innerHTML = `the counter value is ${counter}` 
// setInterval 
function add(a, b) {
}
add(4,5)
function greet(name) {
}
greet('Mary')
function openBankAccount(accountNo, balance) {
}
openBankAccount('123', 100)
function incrementCounter(counterCallback) {
    let counter = 0    
    setInterval(function(){ 
        counter++
        counterCallback(counter)
        //console.log(counter)
    }, 2000)
}
// how to call incrementCounter function 
incrementCounter(function(ctr) {
    console.log(ctr)
})
function foo(a, b, c) {
    c() 
}
foo(10, 34, function() {
})





function loadProducts(fetchProductsCallback) {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(products => {
        fetchProductsCallback(products)
    })
}
loadProducts(function(allProducts) {
    console.log(allProducts)
})
