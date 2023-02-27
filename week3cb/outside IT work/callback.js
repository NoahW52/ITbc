/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function callBackNum(array, callBack) {
    array.forEach(callBack)
}

function newNumPrinter(array) {
    console.log(array)
}

callBackNum(num, newNumPrinter)
*/

//------------Q2-----------------

/*
function supNum(number, callback) {
    callback(number)
}

function squaredNum(number) {
    console.log(number*number)
}

supNum(4, squaredNum)
*/

//------------Q3------------------

//------------Q4------------------
/*
let sentence = 'Hello world you are a silly goose'
function stringCallback(string, callBack) {
    callBack(string)
}

function reverseStr(string) {
    let reverseString = ''
    for(let i = string.length - 1; i >= 0; i--) {
        reverseString += string[i]
    }
    console.log(reverseString)
}
stringCallback(sentence, reverseStr)
*/

//-------------Q5------------------
/*
let stringArray = ['noah', 'jenny', 'alex', 'brandon', 'curran', 'evan']

function strArray(string, callback) {
    callback(string)
}

function UpperString(string) {
    let upperCased = string.map(function(string) {
        return string.toUpperCase()
    })
    console.log(upperCased)
}
strArray(stringArray, UpperString)
*/

//-----------------Q6-------------------------
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function preNum(numbers, callback) {
    callback(numbers)
}

function EvenNum(nums) {
    let newNum = nums.filter(function(num) {
        return num % 2 == 0
    })
    console.log(newNum)
}

preNum(num, EvenNum)
*/

//----------------Q7------------------------
/*
let stringArray = ['noah', 'jenny', 'alex', 'brandon', 'curran', 'evan']

function countingString(strings, counter){
    counter(strings)
}

function OnlyFiveCharacters(str) {
    let newArr = str.filter(function(fiveChar) {
        return fiveChar.length >= 5
    })
    console.log(newArr)
}

countingString(stringArray, OnlyFiveCharacters)
*/

//---------------Q8--------------------------
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function callbackNum(numbers, squared) {
    squared(numbers)
}

function squaredNums(numNum) {
    let newNum = numNum.map(function(numbino) {
        return Math.sqrt(numbino)
    })
    console.log(newNum)
}
callbackNum(num, squaredNums)
*/

//---------------------Q9----------------------
/*
let stringArray = ['noah', 'jenny', 'alex', 'brandon', 'curran', 'evan']

function characterLength(string, lengthOfStrings) {
    lengthOfStrings(string)
}

function findLength(stringLength) {
    let newStringArr = stringLength.map(function(str) {
        return str.length
    })
    console.log(newStringArr)
}
characterLength(stringArray, findLength)
*/

//-----------------------Q10---------------------
/*
let num = [1, 2, 3, 4, 5, 52, 7, 8, 9]

function callbackNum(numbers, bigNumFinder) {
    bigNumFinder(numbers)
}

function onlyBigNum(numNum) {
    let bigNum = numNum[0]
    for (let i = 0; i < numNum.length; i++) {
        if(numNum[i] > bigNum) {
            bigNum = numNum[i]
        }
    }
    console.log(bigNum)
}

callbackNum(num, onlyBigNum)
*/
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function callbackNum(array, getNum) {
    getNum(array)
}

function allNum(allNumbers) {
    console.log(allNumbers)
}

callbackNum(num, allNum)
*/
//---------------Q2--------------
/*
function num(number, int) {
    int(number)
}

function squared(biggerNum) {
    console.log(biggerNum *= biggerNum)
}

num(5, squared)
*/
//----------------Q3--------------------
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function allNum(array, numSum) {
    numSum(array) 
}

function adding(numbers) {
    let sum = numbers.reduce(function(total, allOfNum) {
        return total + allOfNum  
    })
    console.log(sum)
}

allNum(num, adding)
*/
//-----------------Q4--------------------
/*
let string = 'jenny is the love of my life'

function reverseStr(array, reversal) {
    reversal(array)
}

function workToReverse(str) {
    let reverseString = ''
        //The let reverseString = '' is set to put the new reversed string in because we cannot modify the original string directly
    for(let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i]
    }
    console.log(reverseString)
}

reverseStr(string, workToReverse)
*/

//-----------------------Q5---------------------

