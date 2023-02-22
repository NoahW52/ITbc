///////////////////////notes//////////////////
/*
.setInterval and .clearInterval are functions within the the window Object
    ex: window.setInterval / window.clearInterval

const counter = document.getElementById('counterHead')
const timerBtn = document.getElementById('timerButton')
const textBox = document.getElementById('textBox')

timerBtn.addEventListener('click', function() {

    let counter = 10 
let intervalId = window.setInterval(function() {
    counter--
    if(counter <=0) {
        window.clearInterval(intervalId)
        document.body.style.backgroundColor = 'red'
    } else {
        counterHead.innerHTML = counter
    }
}, 1000)
})


function showQuotes() {
    const symbol = document.getElementById('symbol').value
    let output = document.getElementById('quotes')
}
output.innerHTML += ""

setInterval(() => {
    let stock = getStockQuote(symbol);
    output.innerHTML += `<p>${stock.name}: $${stock.price}</p>`;
  }, 2000);
}

// Add event listener to button
document.getElementById("showQuotesBtn").addEventListener("click", showQuotes);

*/

//Use this.value to filter articles
//news.article.filter to pass the this.value to filter articles by source name