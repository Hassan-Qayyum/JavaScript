
/* 
1- rest operator came after 2015
2- rest operator can be used as spread operator.
3- But usage of rest and spread operator is different.
*/


/*
    Spread Operation (use for cloning): 

1- It spreads out array/object.
2- It basically spreads the properties of array/object one by one.
3- It brings first level properties not nested properties (e.g. it does not break the reference of an object inside the object)
*/

//cloning & merging (For Paractice)
/*

let obj = {'id':1, 'name':'Hassan','age':25, 'address': {'House':"House#6,Street#1, Jia Musa Shahdare Lahore", 'City':"Lahore"}};
let firstCloneMethod = {};
for (let key in obj){
    firstCloneMethod[key] = obj [key];
}

console.log(firstCloneMethod);

let secondCloneMethod = Object.assign({},obj);
console.log(secondCloneMethod);

*/

const product = {
    id: 1,
    title: "SQAE - Automation",
    price: 109.95,
    description: "Roles & Responsibilities to Assure the Softwares Quality",
    category: "IT",
    rating: {
        totalExperience: 2.9,
        feedback: "5 *****"
    }
}

const newProduct = { ... product}; 
console.log(newProduct);

/*
Problem: Spread is not breaking the reference of rating object (rating object is inside the product object) in this line of code.
Solution: Inside the product object, Spread the rating object as well
*/

const newProd = {... product, rating:{...product.rating}};
console.log(newProd); // Now reference of every property inside the object has been broken by Spread.

/*

Real Time Example: find all those products who have price greater than 100

const products = products.map((product,index)=> {
    if (product.price>100){
        return {
            ... product,
            rating: {
                .... product.rating
            }
        }
    }
})

Above saved our alot of time, we didn't return the object(s) like:
return {
    id: product.id,
    price: product.price,
    rating:{
        rate: product.rate,
        count: product.count
    }
} 

instead we simply spread the object like ... product and its nested object like rating:{...product.rating}


DrawBack of Spread: Spread is not recommended for nested objects cloning
Reason: If there are nested objects then you have to spread each object indvidually, which is not a good practice.
*/


/*
    Rest Operation

    Usage of Rest Operator:
    1-  When we are not sure about the function arguments(How many arguments it is taking).
    2- rest returns arguments of array.
    3-  When we have to find the function arguments(How many arguments are in it.).

*/

// 1- In below example we are not sure about the arguments which learningRestOperator is taking.

let learningRestOperator = (x,y,z, ...rest)=>{
    console.log(x,y,z,rest); // output: x,y,z [rest1,rest2,....]
    console.log(rest); // output: [4,5,6,7,'Hassan','Qayyum']
    console.log(rest.find(test=> rest[0])); 
}
learningRestOperator(1,2,3,4,5,6,7,'Hassan','Qayyum'); // User may add any number of arguments

/* 2- rest is returning array of arguments in the above example.
console.log(rest); // [4,5,6,7,'Hassan','Qayyum']
*/


// 3- Find total rest arguments

let findTotalRestArguments = (x,y,z,...rest)=>{
    console.log(rest.length); // output: 5 (Finding total rest arguments)
    console.log(rest); // output: [4,5,6,'Hassan','Qayyum]
}
findTotalRestArguments(1,2,3,4,5,6,'Hassan','Qayyum');
