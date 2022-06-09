// Array Initialization

// const user = ["Hassan","Qayyum",22,false]; // In JS we mostly use Const until unless we have to update value (Then we will use let)

// Indexing 

/* user [0] // Output: Hassan
user [2] // Output: 22

user[1] = "Cheema"; */ // It will update Qayyum with Cheema in user Array.

// user = ["1",2,3,4]; // TypeError: Assignment to constant variable (We can update an index element of const array but cannot update entire const array)

/* function firstTask(){
    let user = [1,2,3,4,5];
    let divisbleByTwoIndex = 0;
    let divisbleByFiveIndex = 0;

    let divisbleByTwo = [divisbleByTwoIndex];
    let divisbleByFive = [divisbleByFiveIndex];

    for (let i=0; i<=user.length; i++){
        if(user[i]%2==0){
            divisbleByTwo [divisbleByTwoIndex] = user[i]; 
            divisbleByTwoIndex++;
        }
        else if(user[i]%5==0){
            divisbleByFive [divisbleByFiveIndex] = user[i]; 
            divisbleByFiveIndex++;
        }
        else{
            continue;
        }
    }
    // console.log("Array of Divideable by Two:", divisbleByTwo);
    // console.log("Array of Divideable by Five: ", divisbleByFive);

    printArrays(divisbleByTwo,divisbleByFive);
    

}

firstTask();

function printArrays(firstArray, secondArray){
    console.log("Printing firstArray: ", firstArray);
    console.log("Printing secondArray: ", secondArray);
} */


