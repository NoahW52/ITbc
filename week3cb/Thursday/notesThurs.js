// learning breakpoints within googlechrome developer tools
/*
in the sources section of the google chrome developer tools you can set the breakpoints to break down your code line by line and try to debug it

watch videos on how to properly debug code in the google chrome developer tools

to call a function you just need to call the variable name

you only need callback functions when time is involved

.innerHTML is how you'll display your code on the actual screen and not just the terminal


*/

// getCounter updates the counter variable every second
function getCounter(counterUpdated) {
	
    let counter = 0 
      window.setInterval(function() {
       counter++
       counterUpdated(counter)

    },1000)
  
}

function updatedCounter(theCount) {
    console.log(theCount())
}

// The getCounter function is called here but how do we get the value of the updated counter
// pass a callback function to the getCounter function below and get the updated counter value and then display it on the console 
getCounter(function() {
    console.log(count)
}) 

console.log(getCounter())