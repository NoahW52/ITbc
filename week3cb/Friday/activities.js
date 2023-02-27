/*
function delay(callbackmessage, delayTime) {
    setTimeout(callbackmessage, delayTime)
}

function message() {
    console.log('Hello World')
    console.log('printed')
}
function message2() {
    console.log('Hello World 2')
    console.log('printed 2')
}

delay(message, 1000)
delay(message2, 2000)
*/
// ----------------------------------------------------------------
/*
function repeat(repeated, delayed) {
    setInterval(repeated, delayed)
}

function message() {
    console.log('hello')
}

repeat(message, 2000)
*/
//------------------------------------------------------------------
/*
let num = [1, 2, 3, 4, 5]

function filter(array, callback) {
    array(callback)
}

function filterArray(array) {
    const newArr = array.filter((num) => {
        //const newArr = array.filter(function(num) { is also the same as line 37
        return num % 2 === 0
    })
    console.log(newArr)
}
filter(filterArray, num)
*/
//-------------------------------------------------------------------
/*
let num = [1, 2, 3, 4, 5]

function map(callback, array) {
    callback(array)
}

function timesTwo(number) {
    const newNumbersArray = number.map((num) => {
        return num *= 2
    })
    console.log(newNumbersArray)
}
map(timesTwo, num)
*/
//-------------------------------------------------------------------

let arrayNumValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function reduce(arrayNumValues, callBackParameter, InitialValue) {
    callBackParameter(arrayNumValues, InitialValue)
}

//reduce(function (accumulator, currentValue) { /* … */ })

function reduceArr(array, Initial) {
    const addedAmount = array.reduce((combined, current) => combined += current, Initial)
    console.log(addedAmount)
}
reduce(arrayNumValues, reduceArr, 10)

