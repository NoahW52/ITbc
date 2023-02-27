//---------------------Q2------------------------------
/*
const newParagraph = document.createElement('p')
const contentDiv = document.getElementById('content')

newParagraph.textContent = 'This is the text I would like to show on the page.'
contentDiv.appendChild(newParagraph)

//---------------------Q3------------------------------

const newImageButtonGenerator = document.getElementById('newImageButton')

newImageButtonGenerator.addEventListener('click' function() {
    
})

*/
//--------------------REDOING QUESTIONS ---------------------

const buttonColor = document.getElementById('buttonColor')

buttonColor.addEventListener('click', function() {
    buttonColor.style.color = 'green';
     newParagraph.style.color = 'red'
})

const newParagraph = document.createElement('p')
const contentDiv = document.getElementById('content')

newParagraph.textContent = 'This is the added text I would like to add.'
contentDiv.appendChild(newParagraph)

//---------------Q3---------------------------------------

const imageChanger = document.getElementById('imgChanger')

//---------------Q4---------------------------------------

const ListOfWords = document.getElementById('list')
const unorderedList = document.createElement('li')

function additem() {
    let input = document.getElementById('newItem').value
    let list = document.getElementById('list')
    let newItem = document.createElement('li')
    list.appendChild(newItem)
    document.getElementById('newItem').value = ''
}