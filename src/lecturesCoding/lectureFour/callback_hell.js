/* Important Concepts

1- callback Functions

Definition: We pass result of the 1st function in the second function as an argument. And this process continues.

2- callback Hell/ Pyramid Doom

Definition: If there are 4 or more nested callback functions then tracking and maintaince of those become very complex and difficult.
This is called callback hell/pyramid.

*/



/*  callback Functions */

/* function firstFunc(){
    console.log("Printing First Function");
    setTimeout(secondFunc,1000);
}

function secondFunc(){
    console.log("Printing Second Function");
}

setTimeout(firstFunc,1000); */

