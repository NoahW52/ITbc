//-----------------NOTES------------------------------
/*
You can only use AWAIT within an async function

async function fetchProduct() {
    const response = await fetch('https://api.escuelajs.co/api/v1/products')
    const products = await response.json()
    return products

    ---------------------------------------------
   | THESE WILL BOTH RETURN THE SAME EXACT THING |
    ---------------------------------------------
    
function fetchProduct() {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(products => {
    }

*/


const recipes = document.getElementById('recipes')

fetch('https://food2fork.ca/api/recipe/search/?page=3&query=', {
    method: 'GET',
    headers: {
        'authorization': 'Token 9c8b06d329136da358c2d00e76946b0111ce2c48'
    }
})
.then(Response => Response.json())
.then(recipes => {
    console.log(recipes)
})