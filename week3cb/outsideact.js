//Q1
/*
const btnclr = document.getElementById('Q1')
btnclr.addEventListener('click', function() {
    btnclr.setAttribute('style', 'background-color: red')
})

//Q2

const existElm = document.getElementById('bodybody')
const newP = document.createElement('p')
newP.textContent = 'This is my paragraph and i am typing it out.'
existElm.insertAdjacentElement("afterend", newP)
*/
//Q3

const body = document.getElementById('bodybody')

const imgBtn = document.createElement('button')
imgBtn.innerHTML = 'Click to generate new ball pic'
const rndImg = document.createElement('img')

body.appendChild(imgBtn)
body.appendChild(rndImg)

imgBtn.addEventListener('click', function() {
    rndImg.setAttribute('src', 'https://picsum.photos/200/300')
})