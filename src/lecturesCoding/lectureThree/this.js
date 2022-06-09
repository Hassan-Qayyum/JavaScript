/* 'this' keyword:  It is an explicit refrence. 


We will use "this" in 3 cases

'this' definition: it is an object of which function/property is property of.
In simple words 'this' is the reference to the left side variable of the '.' (dot operator) operation.
*/

/*
const user = {
    firstName: "Hassan",
    lastName: "Qayyum",
    getName: function (str1 = " ", str2 =" "){    // In objects we can even write the functions
        // console.log("Inside Methood", this); // output: it will return entire object.
        return this.firstName + str1 + str2 +this.lastName;
    }
    
};

console.log("Result: ",user.getName()); // here we are invoking/calling getName() function (which is not a normal one). Here (user.getName()) user is a 'this'

const getNameFunc = user.getName;
console.log(getNameFunc()); // output: TypeError: Cannot read property 'firstName' of undefined.
*/

/* Type Erro Reason: 
Reason: JS is not able to transpiled(convert) the 'this' keyword (we used in user object) in above line.
*/

/*Important Note**: 

1- In JS, 'this' is a global object (window) for function invoking/calling.
2- console.log(window.getNameFunc()); // output: window is undefined.
3- We defined the window property inside the object like following:

const user = { firstName: "Hassan", lastName: "Qayyum", getName: function( str1 = " ", str2=" "){
return window.firstName + window.lastName + str1 + str2;
}};

const getNameFunc = user.getName;
console.log(window.getNameFunc()); // output: 'window' is undefined.

*/

/*  Solution: Binding

Bind Definaton: It returns a new function in which 'this' is available.

*/

const user = {
    firstName: "Hassan",
    lastName: "Qayyum",
    getName: function (str1 = " ", str2 =" "){    // In objects we can even write the functions
        return this.firstName + str1 + str2 + this.lastName;
    }
    
};

const getNameFunc = user.getName; // 'user' is the 'this' reference of user object.  

// console.log(getNameFunc()); // output: undefined undefined

const bindGetName = getNameFunc.bind(user);
console.log(bindGetName()); // output: Hassan Qayyum


/* Problem: Suppose you have to pass parameters in above method?

Solution: For passing parameters there are 2 METHODS in JS

1- call
2- apply

Note: Unlike bind (which returns a new function), call and apply directly call the function and returns the result. 


1- call Method

const callResult = getNameFunc.call(user, 'SQA','E');
console.log(callResult); // output: HassanSQAEQayyum

2- apply Method

const applyResult = getNameFunc.apply(user, ['SQA','E']);
console.log(applyResult); // output: HassanSQAEQayyum

What is the differece btw "call Method" vs "apply Method"?

Ans: The only difference is "call Method" takes argument(s) just like normal function,
while "apply Method" takes an array of arguments.

*/



/*      Functions in Objects


    1-  Simple Function

    const product = {
        name: 'Football',
        getProductDetails () {  // previously we were used to write like getProductDetails: function (){}
            return this.name; // Football
        }
    }

    console.log( product.getProductDetails()); // output: Football


    2-  Arrow Function

    const product = {
        name: 'Football',
        getProductDetails: ()=>{
            return this.name; // Football
        }
    }

    console.log(product.getProductDetails()); // output: undefined ('this' does not work in arrow functions)


    Note: It is not recommended to use 'this' in arrow functions because binding of 'this' with arrow function(s) is very complex 

*/