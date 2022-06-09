////////////////// Variables//////////////////////////////////////



//First Example

/* 

var basic = "Hello";
basic = 10;

console.log("This is the updated value", basic);  // This is the updated value 10

// Second Example

var number=10;

function num(){
    var number= "Hello";
}

console.log(number); // 10

// Third Example

if (true){
    var number = "Hello";
}

console.log(number); // Hello  ==> number variable has redefined from 10 to Hello

*/

//////////////////////////////////////////////////////////////////////


//Let

// First Example

/*

let second = "Hello";
second = 10;

console.log("This is the updated value", second); // This is the updated value 10

// Second Example


function num(){
    let second = "Hello";
}

console.log(second); // 10

// Third Example

if (true){
    let second = "Hello";
}

console.log(seond); // error: second is not defined.

*/ 

/////////////////////////////////////////////////////////////


// Constant


// First Example

/*

const third = "Testing constant";
third = 10; // TypeError: Assignment to constant variable. ==> we cannot update the value of the const variable because it is constant.

console.log("This is the updated value", third); // This is the updated value Testing constant

// Second Example


function num(){
    let third = "Hello";
}

console.log(third); // Testing constant

// Third Example

if (true){
    let third = "Hello";
}

console.log(third); // Testing constant

*/


// ////////////////////// Data Types //////////////////////////

// 1- number 2- bigint 3- string 4- boolean 5- null 6- undefined 7- Symbel 8- Object

/*
console.log (typeof 1); // number
console.log (typeof 10n); // bigint
console.log (typeof "foo"); // string
console.log (typeof true); // boolean
console.log (typeof undefined); // undefined
console.log (typeof null); // object
console.log (typeof Symbol("id")); // symbol
*/

////////////////////// typeof Operator //////////////////////////

/*

console.log (typeof 1); // number
console.log (typeof 10n); // bigint
console.log (typeof "foo"); // string
console.log (typeof true); // boolean
console.log (typeof undefined); // undefined
console.log (typeof null); // object
console.log (typeof Symbol("id")); // symbol

var number = 10;
var string = "Hassan Qayyum";

console.log (typeof(number)); // number
console.log (typeof number); // number

console.log (typeof(string)); // string 
console.log (typeof string); // string

*/

////////////////////// primitiveMethods //////////////////////////

/*

let str= "Hello";
console.log("UC:", str.toUpperCase()); // UC: HELLO
console.log("Length:", str.length); // Length: 5
console.log("Includes:", str.includes("o")); // Includes: true

let n = 1.23456
console.log("Fixed:", n.toFixed(2)); // 1.23

*/

////////////////////// scriptTag //////////////////////////

// Go to index.html file and index.js file for further information


////////////////////// conditionals ///////////////////////

///////////////////// IF ELSE ////////////////////////////

// Falsy: false, 0, -0, on, "", null, undefined, and NaN

/*

let a = 1;
let b = 0;

if (a && b){
    console.log ("If condition");
}


else if (a || b){
    console.log ("Else If condition");
}

else{
    console.log("else condition")
}

*/

///////////////////////// TERNARY  //////////////////////////////////

/*

let isBirthday = true;
let wish = isBirthday ? "Wish you very happy birthday" : "Good Morning";
console.log (wish);  // Wish you very happy birthday

*/


////////////////////////// Switch /////////////////////////////////

/*

const weather = "rainy";

switch (weather.toUpperCase()){
    case "sunny": console.log ("Hot Weather"); break;
    case "RAINY": console.log ("Its a Rainy Weather"); break;
    default: console.log ("Sorry"); break;
} // It is a Rainy Weather

*/


////////////////////////// Loops  //////////////////////////////////

// For Loop



// First Example 

/*

let a = 5;


for (let i= 1; i<=a; i++){
    if (i===a){
        var b =  i;
        var c = b;
    }
}
console.log ("i:", c) // 5
*/

// Second Example

/*

for (let i=1; i<=a; i++){
    if (i===a){
        continue;
        console.log("I am leaving index 5 and moving down");

    }

    console.log ("Indexes from 1 to 4:", i);
}

*/

/////////////////////////// Do While Loop ////////////////////

// First Example

/*

let j=0;

do {
    console.log ("Just Printing", j);
    j++;
} while (j<=5); // 0 1 2 3 4 5 

*/

/////////////////////////// While Loop ////////////////////

// First Example

/*

let j=0;

while (j<=5) {
    console.log ("Just Printing", j);
    j++;
}  // 0 1 2 3 4 5 

*/

/* Important Note:

For Loop: In general, you should use a for loop when you know how many times the
loop should urn.

While Loop: If you want the loop to break based on a condition other than the
number of times it runs, you should use a while loop.
*/


///////////////////// Function Scope /////////////////////////

/*

function understandingScope(){
    var a = "I am function scoped";
    console.log ("inside", a);
}

understandingScope();
console.log("Outside the function", a); // ReferenceError: a is not defined

*/

///////////////////// Global Scope /////////////////////////

/*

var b = "I'm global";
function understandingScope(){
    var a = "I am function scoped";
    console.log ("inside", a + " " + b);
}

understandingScope(); // I am function scoped I'm global

*/

///////////////////// Block Scope /////////////////////////

/*
if (true){
    // let z = " A let variable inside";
    // const z= "A const variable inside";
    var z = "A variable inside";
    console.log ("inside", z);
}
console.log ("outside:", z); // ReferenceError(for let & const): z is not defined

*/

///////////////////// Functions /////////////////////////

//  1-  Simple Function

/*

function understandingFunction(){

    // function body 

}

*/



//  2-  overShadow Variable concept : If there are global and local variables (with the same name) then inside the function local variable will be
//  preferable over global variable


/*

let a = 10;  // Global Scope Variable
function understandingFunction(firstParameter, randomNumber){


    let a = 30; // Local Scope Variable
    console.log ("inside:",a); // 30 output
}

understandingFunction("Hello");
console.log("Outside:", a); // 10 output

*/


/*

var a = 10;  // Global Scope Variable

function understandingFunction(firstParameter, randomNumber){


    a = 30; // Local Scope Variable

    console.log ("inside:",a); // 30 output
}

understandingFunction("Hello");
console.log("Outside:", a); // 30 output

*/



//  3-  How to use function variables outside? : Function variables cannot be use outside the function scope but with the return keyword.

/*
function understandingFunction(randomString){


    var a = 30; 
    let b =  "inside: "+ a + " " + randomString; // inside: 30 Hassan
    console.log(b);
    return b;
}

let c = understandingFunction("Return")
console.log ("outside: ",c);
*/

// 4- Parameters inside the function

/*
function understandingFunction(firstParameter, randomNumber){
    console.log(firstParameter + " " + randomNumber);
}
understandingFunction(); // undefined undefined
understandingFunction("Hello"); // Hello undefined
understandingFunction("Hello", "World"); // Hello World
*/

// 5- Default Parameters

/*

function understandingFunction(firstParameter, randomNumber = "World"){
    console.log(firstParameter + " " + randomNumber);
}
understandingFunction(); // undefined World
understandingFunction("Hello"); // Hello World
understandingFunction("Hello", "Guys"); // Hello Guys ==> "Guys" overide the "World"

*/

// 6- Function Declaration vs Function Expression

//  i-  Function Declaration Example

/*

understandingFunction("Hassan"); // Hi Hassan  ==> In JS Function can be called before initialization because JS stores complete function as it is in the memory before execution.
function understandingFunction(firstParameter){

    console.log("Hi:", firstParameter);
}

//  ii-  Function Expression Example

console.log(sayHi); // Refrence Error: Cannot access sayHi before initialization ===> JS is treating "sayHi" as a variable therefore it cannot be access before defination/ initialization

let sayHi = function (firstParameter){

    console.log("Hi:", firstParameter);
}

*/


// 7- Callback Functions :  You can pass function as a value inside the other function

/*
function callBack(firstParameter, yes, no){
    if (firstParameter.includes("Default")){
        return yes;
    }
    else{
        return no;
    }
}

function callingFirstFunction(){
    console.log("First Function");
}

function callingSecondFunction(){
    console.log("Second Function");
}

callBack("Default:", callingFirstFunction(),callingSecondFunction()); // First Function Second Function

*/

//  8-  Arrow Functions: There are also callBack functions and used to precise the code.

/* function normalFunction(firstParameter){
    console.log("Printing normalFunction");
}

let arrowFunction = (name) => name; // The things which normalFunction is doing in three lines arrow function did in 1 line.
let arrowFunction = (name) => {             // We can even use BLOCK {} with Arrow Function
    console.log("Printing arrowFunction");
};

*/

//  9- iife (Immediatly Invked Function Expression): Such functions get called immediatly right after definition

/* (function(){        // Why need of iife function? : To avoid conflict of "function names" / Whenever there is a immediate need of a function call
    console.log("Printing iife function");
})();

*/
