/*
1-  Two objects would be equal if they are same.


let a = {};
let b = a; // b & a are equal objects

console.log( a == b ); // true, both are pointing to same memory location/address


2-  Not Equal Objects
let a = {};
let b = {}; 

console.log (a==b); // false (Becasue they are on different memory locations/addresses therefore they are not equal)

3- How to clone an object?


// sample is an object
*/
import _ from 'lodash'; 

let sample = {
    x: 10,
    y: 20,
    rating: {
        rate: 120,
        count: 2
    }
};


// Sample object contains 3 keys. Now, we will clone sample object.

// 1st method: By applying for loop over an object
/*
let clone = {}; // empty object

// Loop over object
for (let key in sample){
    clone[key] = sample [key]; // performing cloning
}

console.log (clone); // output: it will return same properties of object
clone['x'] = 50; 
clone['y'] = 100;

console.log ("x: ", clone['x'] + ", y: " + clone['y'] );
console.log (clone); // output: return clone object with {x:50, y:100, rating:{ rate: 120 , count: 2}}
console.log (sample); // output: return sample object {x:10, y:20, rating: {rate:120, count:2}}


2nd method: Object.assign()

let clone = Object.assign({}, sample); // {}, sample ==> putting sample keys & values in {} and storing in clone.

console.log  (clone);

/*
Drawback of Object.assign() method

If there is a object inside the object then Object.assign() does not break the reference of that object.

solution: Perform Deep cloning



3rd method: _.cloneDeep()


let clone = _.cloneDeep(sample); // output: { x: 10, y: 20, rating: { rate: 120, count: 2 } }
console.log(clone);


4- Cloning and Merging
*/

let clone = _.cloneDeep({name:'Hassan', age:25, x:25, y:40}, sample);
console.log(clone);
/*
Above line of code is performing cloning but merging data as well e.g. name: 'Hassan', age: 25, x: 25

console.log(clone); // output: name:'Hassan', age: 25, x;10, y:20, rating: {rate:120, count:2}

Note: Merging updates the existing data.



*/




