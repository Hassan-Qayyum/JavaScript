// 3rd Assignment

// const { group } = require("console");

/*  Question no 1
    Using the following endpoint: https://jsonplaceholder.typicode.com/posts
    Make a function that would log an object with the number of posts of each individual user:
    Eg: { user1: 6, user2: 10, …. user10: 3 } 
    USE .then .catch

    Question no 2
    Using the same endpoint as above, log those titles in all caps that are less than 31 characters. 
    USE async / await

    Question no 3
    Throw custom errors and handle them in both use cases.
*/


import fetch from "node-fetch"; 


function usecaseOne() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then((response) => {
           reduceMethod(response);
        })
        .catch(error => console.log("Error " + error))
}

function reduceMethod(response) {

    let countedOccurences  = response.reduce((acc, curr) => {
        let userId = curr.userId;
        if (acc[userId]){
            acc[userId] = ++acc[userId];
        }
        else{ 
            acc[userId] = 1;
        }
        return acc;
    }, {})
    let finalObject = {}
    for (let key in countedOccurences){
        finalObject ['user'+key] = countedOccurences[key]
    }
    console.log("usecaseOne: ", finalObject);
            
}
usecaseOne();


async function usecaseTwo(){
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    let allCapsTitles = data.filter(response=> (response.title).length<31).map(response=> (response.title).toUpperCase());
    console.log("usecaseTwo: ", allCapsTitles);
    }
    catch(error){
        console.log("Error " + error); 
    }
}

usecaseTwo();



/* Important Note:  usecaseOne & usecaseTwo both are already handling errors, but usecaseThree is throwing and handling custom errors to fulfill the requiremnet */


function usecaseThree(){
    customError();
    asynCustomError();
}
function customError (){
    fetch("https://jsonplaceholder.typicos")
    .then(response=>response.json())
    .catch(error=> console.log("usecaseThree ---- customError() { Something went wrong }  : ==> " + error)) // output: usecaseThree ---- customError() { Something went wrong }  : ==> FetchError: request to https://jsonplaceholder.typicos/ failed

}

async function asynCustomError(){

    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        let allCapsTitles = data.filter(response=> (response.title).length<31).map(response=> (response.title).toUpperCase());
        console.log(Titles);
        }
    catch(error){
        console.log("usecaseThree ---- asynCustomError() { Something went wrong }  : ==> " + error); // output: usecaseThree ---- asynCustomError() { Something went wrong }  : ==> ReferenceError: Titles is not defined
    }
}

usecaseThree();
