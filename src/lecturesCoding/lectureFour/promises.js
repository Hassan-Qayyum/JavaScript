/* 

Promise : These promises are same as we do in our general life.



    1-  Resolve: Promise is fulfilled.
    2-  Reject: Promise is rejected :( 
    
    Syntax: 
    let promise = new Promise(function(resolve,reject)
    {   
        executor( the producing code, "singer")
    });

    Explanation:

    new Promise (executor) ===> resolve(value)/ reject(error)
        i-  resolve(value): state: 'fulfilled', result: value

        let promise = new Promise(function(resolve,reject){
            // the function is executed automatically when the promise is constructed
            // after 1 second, it signals that the job is done with the result "done"/value.

            setTimeout(()=>resolve('done'),1000);
        });
        ii- reject(error): state: 'rejected', result: error
        let promise = new Promise (function(resolve, reject){
            // the function is executed automatically once the promise is constructed
            // after 1 seconds, it signals that job is not done with the result reject/error.
            setTimeout(()=> reject(new Error("Whoops")),1000);
        });
        iii- Pending state: The state where promise is not resolved nor rejected yet.
        
    3-  Promise serves a link btw producing & consuming code e.g.
        i-      .then,  Promise falls in '.then' if it is resolved
        ii-     .catch, Promise falls in '.catch' it is rejected.
        iii.    .finally  

        Producing Code: The code which generates the results.
        Consuming Code: The code which consumes the results.
*/



/*      .then      */ 


/*
let promise = new Promise(function(resolve, reject){
    setTimeout(()=>resolve('done'),1000);  // returns 'done' 
});

promise.then(function(result){
    console.log("Hassan you have " + result + " your job"); // output: Hassan you have done your job
});
 

let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('done'),1000);   // returns 'done'
});
promise.then((result)=>{
    console.log(result); // output: done

});
*/


/*     .catch      */


/* 
let promise = new Promise(function(resolve,reject){
    setTimeout(()=>reject(new Error("Oops")),1000); // returns 'Oops'
});

promise.catch(function(result){
    console.log(result+" Relax you will rise my boy √"); // output: Error: Oops Relaxz you will rise my boy. 
});
*/

/* 
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>reject(new Error("These are really awesome for awesome learning")),3000); // returns 'Oops'
});

promise.catch((result)=>{
    console.log(result); // output: Error: These are really awesome for awesome learning.
});
*/



/* 
Promise Chaining : Use for nested/multiple '.then' 


        new Promise
    resolve(1)|
            .then
    return 2  |
            .then
    return 4  |
            .then
*/

// new Promise ((resolve)=>{
//     setTimeout(()=>resolve(1),1000);
// }).then(result=>{
//     return result * 2;
// }).then(result=>{
//     return result+2;
// }).then(result=>{
//     console.log("Printing Result: ", result);
// });



// /* Note: Following code is not Promise Chaining */
// new aPromise = new Promise ((resolve, reject)=>{
//     setTimeout(()=>resolve(1),1000);
// });

// // 1st Promise
// aPromise.then(result=>{
//     return result; // returns 1
// });

// //2nd Promise
// aPromise.then (result=>{
//     console.log(result*2); // returns 2
// })

// Above 2 promises (1st & 2nd) are independed because these are not in chain.


/*
Promise class methods

    1-  Promise.all:    Please give me all the promises, no matter resolved or rejected.
    2-  Promise.allSettled: First settled all the promises then give me.
    3-  Promise.race: Please give me the promise which is first executed. (Order could be change)
    4-  Promise.any: Please give me the promise which is first executed (It will not take care of rest).    
*/

//  1-  Promise.all => 


/* 
Promise.all([
    new Promise((resolve,reject)=>setTimeout(()=>resolve(1),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>reject(new Error('Error')),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve('Resolved'),1000))
]).then(resolve=>console.log(resolve))
.catch(reject=>console.log(reject+""))

output: Error: Error

Promise.allSettled([
    new Promise((resolve,reject)=>setTimeout(()=>resolve('Done'),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>reject(new Error('Rejected')),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve('allSettled'),1000))

]).then(resolve=> console.log(resolve))
   .catch(reject=>console.log(reject+"SQA")) 

// output: { state: 'fulfilled' value: 'Done'} , Error: Rejected, {state: 'fulfilled', value:'allSettled'}
 Promise.race([
    new Promise((resolve,request)=>setTimeout(()=>resolve('Done'),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>reject(new Error('Rejected')),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve(1),1000))
]).then(resolve=>console.log(resolve)).catch(reject=>console.log(reject))

// output: Done

Promise.any([
    new Promise((resolve,reject)=>setTimeout(()=>resolve('Any'),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>reject(new Error('Oopd')),1000)),
    new Promise((resolve,reject)=>setTimeout(()=>resolve('Oho'),1000))
])

*/


/* Problem with Promises

Why we moved to promises?
Ans: We were facing callback hell/pyramid problem so we moved to promises.

Issue with Promises:
1- Whenever there are multiple/nested .then conditions (Promise Chaining) then it gives the vibes of callback hell/pyramid

Solution: Async Await function



*/