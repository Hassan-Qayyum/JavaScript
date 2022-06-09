// Array Methods


//  1-  unshift: Use to add value at the first index of the Array

/* const testArray = ['First','Class',0,true];
const updatedArray = testArray.unshift('Hassan');
console.log(testArray); // ['First', 'Class', 0, true, 'Hassan' ]
console.log(updatedArray); // output: 5 */
 


//  2-  shift: Use to remove value from the 1st index of the Array


/* const testArray = ['Hassan','First','Class',0,true];
const updatedArray = testArray.shift();
console.log(testArray); // ['First', 'Class', 0, true]
console.log(updatedArray);  */// output: First


//  3-  push: Use to add value at the end index of the Array

/* const testArray = ['First','Class',0,true];
const updatedArray = testArray.push('Hassan');
console.log(testArray); // ['First', 'Class', 0, true, 'Hassan' ]
console.log(updatedArray); // output: 5
 
*/


//  4-  pop: Use to remove value from the end index of the Array

/* 
const testArray = ['First','Class',0,true];
const updatedArray = testArray.pop();
console.log(testArray); // ['First', 'Class', 0]
console.log(updatedArray); // output: true
*/

//  5-  Slice(Does not change the original array):  Takes starting and ending points of array and returns all the values between that range (excluding ending point).

//First Example

/* const test = ['Hassan','Qayyum', 1, true];
console.log(test.slice(0,3)); // output: ['Hassan'.'Qayyum',1]

//Second Example

const test = ['Hassan','Qayyum',1,true];
const testOne = test.slice(-1); // It brings value of last index ==> true
console.log(testOne[0]); // output: true


// Third Example

const test = ['Hassan','Qayyum',1,true]
console.log (test.slice(1)); // output: ['Qayyum',1,true] */


//  6-  Splice (Changes the Orginal Array):  Takes "index" as first argument, "0" (false statement) => (does not delete anything) or "1,2,3...." (true statement) => (does deletion of arguments upto given numnber) as second argument and "newitem(s)" (which needs to insert/update) as third argument.

////////////////////////////////////////////////////  1st Example -  Simple Splice  /////////////////////////////////////////////////////////////

/* const test = ['Hassan','Qayyum', 1, true];
console.log(test.splice(3,0)); // output: [] ==> Why empty string? Please read the following note.
console.log(test); */

// Important Note: In above exqmple splice has "3rd index" and "0" (false => not deleting anything) which means splice will not delete anything at the "3rd index", and also will not insert anything because we are not giving the "third argument" (newitem) which needs to be insert or update. 


////////////////////////////////////////////////////  2nd Example -  Splice Deletion ////////////////////////////////////////////////////////////

/* const test = ['Hassan','Qayyum', 1, true];
console.log(test.splice(3,1)); // output: ['true'] => splice has "3rd index" and "1 (true statemnet)=> delete 1 argument at index 3" , which means splice will delete 3rd index element (in our case [true]).
console.log(test); */

/* const test = ['Hassan','Qayyum', 1, true];
console.log(test.splice(1,3)); // output: ['Qayyumn,1, true'] => splice has "1st index" and "3 arguments count deletion from 1st index to ownward ()=> which means splice will delete arguments from 1st index to ownward 3rd index. (in our case ['Qayyum',1,true]).
console.log(test); */ // output: ['Hassan'] ==> in above splice we gave 1st index and 3 arguments count for deletion. It deleted all the arguments from the 1st index to onward 3rd index. 


////////////////////////////////////////////////////  3rd Example -  Splice Deletion & Insertion  ////////////////////////////////////////////////

/* const test = ['Hassan','Qayyum', 1, true];
console.log(test.splice(3,1,'SQAE')); // output: ['true'] => splice has "3rd index" and "1 (true statemnet)=> delete 1 argument at index 3" , which means splice will delete 3rd index element (in our case [true]).
console.log(test); // output: ['Hassan','Qayyum', 1, 'SQAE'] => splice has deleted the 3rd element and updated it with the newitem insertion "SQAE".
 */

////////////////////////////////////////////////////  4th Example -  Splice Insertion Without Deletion  ////////////////////////////////////////////////

/* const test = ['Hassan','Qayyum', 1, true];
console.log(test.splice(3,0,'SQAE')); // output: [] => splice has "3rd index" and "0 (false statemnet)" , which means splice will not delete 3rd index element (in our case [true]).
console.log(test); // output: ['Hassan','Qayyum', 1, 'SQAE','true'] => splice has inserted the newitem at the 3rd index and move the 3rd index element at adjacent. */


/* const test = ['Hassan','Qayyum', 1, true];
console.log(test.splice(3,0,'SQAE','Senior Resource','2021')); // output: [] => splice has "3rd index" and "0 (false statemnet)" , which means splice will not delete 3rd index element (in our case [true]).
console.log(test); // output: ['Hassan','Qayyum', 1, 'SQAE','true'] => splice has inserted the newitem(s) from the 3rd index to onward and move the previous 3rd index element at the last index of array. */