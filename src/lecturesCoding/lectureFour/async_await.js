/*
Async Await : Special syntax to work with promises in a more comfortable fashion.

async: The word 'async' before function indicates that "a function always returns a promise".
async function iAmAsync(){
    return 1;
}

await: works only inside async functions. (await will give syntax error inside non-async function)

*/
/*
async function asyncFunction(){
    let promise = Promise.resolve(1);
    let result = await promise;
    console.log(result);
}
asyncFunction();

function no_asyncFunction(){
    let promise = Promise.resolve(); 
    let result = await promise; // syntax error because await is in non-async function.
    console.log(result);
}
*/

/*
Asynchronous Function gives "try" and "catch" instead of .catch .

    i-  try: if everything is working absolutly fine then keep executing
    ii- catch: if some error comes in then you have to execute and handle the errors.
*/
/* import fetch from "node-fetch";
console.log("Top Most");
async function Hassan(){
    console.log("In function top most");
    let response  = await fetch('https://api.github.com/users');
    console.log("After first await and before second await");
    let users = await response.json();
    console.log("Executing after second await");
    return users;
    return 'harry';
}

console.log("Execution before function call");
console.log(Hassan());
console.log("Resolving the promise");
Hassan().then(data=>console.log("Promise Resolved",data));
console.log("calling after resolving promise"); */

export const name ='Hassam'