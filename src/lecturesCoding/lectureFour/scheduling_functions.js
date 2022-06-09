/* 

1- scheduling a call: Execute a function after a certain time.

Why scheduling?
Ans: To achieve asynchronous behavior. (js is signle threaded synchronous language)



Two ways of scheduling a call

    i-  setTimeout (Takes time in miliseconds): Execute a function only one time after a certain time.
    ii- setInterval(Takes time in milisconds): Execute a function repeadtedly after specific time interval.
*/

//  1-  setTimeout

/*
function sayTimeOut(){
    console.log("Printing simple Time out");
}

setTimeout (sayTimeOut,1000); // output (after 5 seconds of wait): Printing Something

function sayTimeOutParameters (firstParameter, secondParameter){
    console.log("Printing Argument Time out:", firstParameter, secondParameter);
}

setTimeout(sayTimeOutParameters,1000,'first','second');

*/

//  2-  setInterval

function showTime(){
    // returns time
    let time = new Date().toLocaleDateString();
    console.log(time);
    
}
let display = setInterval(showTime,5000);
clearInterval(display); // If this line will remain commented then showTime() will keep executing after each 5 seconds


// Run specific number of intervals and then clear out the Interval

function showSetInterval(){
    // returns time
    let time = new Date().toLocaleDateString();
    console.log(time);
    
}

let stopInterval = setInterval(showSetInterval, 5000);

function clearIntervalCondition(parameter){
    for (let i=0; i<=4;i++){
        if(i==4){
            console.log("Executine clearInterval: ", parameter);
            clearInterval(parameter);

        }
        else{
            console.log("Printing values: ",i);
        }
    }
}
clearIntervalCondition(stopInterval);


