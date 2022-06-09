/*
Task One

Reverse a string - Make a function that takes in a string as a parameter and returns the
string in reverse.
Eg: “Hello” will be returned as “olleH”
Note: Do not use builtin methods
*/




function givenString(str="Hello"){
    let reverseString= '';

    for(let i =(str.length)-1; i>=0; i--){
        reverseString = reverseString + str[i];
    } 
    return reverseString;
}


console.log(givenString());

/*
Task Two

Write a program that loops from 1 to 99 and logs “TWO” if the number is a multiple of 2
OR logs “FIVE” if it’s a multiple of 5 OR logs “BOTH” if it’s a multiple of both 2 and 5.
If it’s none of the above, log the number as it is.
(A multiple of a 2 means a number that is divisible by 2, eg: 2, 4, 6, ...)

*/


for (let i=1; i<100;i++){
    
    switch(true){
        case i%2==0 && i%5==0: console.log("BOTH: ", i); break;
        case i%2==0: console.log("TWO: ", i); break;
        case i%5==0: console.log("Five: ", i); break;
        default: console.log("Number: ", i); break;
    }
}
