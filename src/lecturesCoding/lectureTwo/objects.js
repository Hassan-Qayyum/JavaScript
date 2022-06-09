// Objects (Data Type) : Stores data in the key-value pairs.

/////////////////////////////////////////////// Object Creation //////////////////////////////////////////////////

let object = {name:'Hassan',age: '25', online:false}; // (name,age and online) are the keys while ('Hassan',25 & false) are the values.

/////////////////////////////////////////////// Accessing Objects, "dot notation" and "bracket notation". /////////////////////////////////

//  1st:    Dot Notation

/* console.log(object.name); // output: Hassan
console.log(object.age); // output: 25
console.log(object.online); // output: fasle
*/

// 2nd: Bracket Notation

/* 
console.log(object['name']); // outout: Hassan 
console.log(object['age']); //  output: 25
console.log(object['online']); //   output: false
console.log("Bracket Notation: ", object['name']); // output=> Bracket Notation: Hassan


let isOnline = 'online';
console.log(object[isOnline]); // output: false => I simply passed the string 'online' as a key in the object and system displayed the object value againts that key.
*/


/* Important Note: When to use Dot Notation and Bracket Notation?
1- If you exactly know the "key(s)" of an object then use "dot notation".
2- If you're not sure about the key(s) of an object or if data is coming from some sort of API(s) then we use "bracket notation".
*/


//////////////////////////////////////// Objects by Reference /////////////////////////////////

/*  Important Note: Arrays & Objects are stored and copied "by reference". Values are stored in memory and objects are reference to them. */


/* 
let user = {
    name: 'Hassan Qayyum',
    age: 25
};

console.log("Original User: ",user);
let newUser = user; // "user" object is copied with reference.
console.log("Copied with Reference: ",newUser);
console.log(newUser);
*/

/* Drawback of copying object with reference:
1- If you update any of the object property then all objects get updated.
*/



