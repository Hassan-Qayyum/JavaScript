/* Object constructor: Use for accessing penality of methods
    
1-  Object.keys(objectName) // For getting all the keys of the objects
2-  Object.values (objectName) // For getting all the values of the objects 

*/

const product = {
    id:1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walk in the fore",
    category: "men's clothing",
    image: "Some URL",
    rating: {
        rate: 3.9,
        count: 120
    }
}

//  1-  Object.keys(objectName)

/* console.log(Object.keys(product)); // output: ['id', 'title', 'price','description','category','image','rating' ] => returned all the keys
console.log(Object.keys(product.rating)); // output: ['rate','count']
*/


//  2-  Object.keys(objectName)

// console.log(Object.values(product)); 

/*
output: [1,
"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", 
109.95,
'Your perfect pack for everyday use and walk in the fore',
'men's clothing',
'Some URL',
Oject] => returned all the keys

*/

// console.log(Object.values(product.rating)); // output: [3.9, 120]


//  3-  Object.entries(objectName) => Converts every entry of object into an array

/*
let enteries = Object.entries(product);
console.log(enteries); // output is given below
*/
/* output: [   
  [ 'id', 1 ],
  [ 'title', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' ],
  [ 'price', 109.95 ],
  [
    'description',
    'Your perfect pack for everyday use and walk in the fore'
  ],
  [ 'category', "men's clothing" ],
  [ 'image', 'Some URL' ],
  [ 'rating', { rate: 3.9, count: 120 } ]
 
]*/



//  4-  Object.fromEntries(objectName) => Converts all arays into an object.

/*
let fromEnteries = Object.entries(product);
console.log(Object.fromEntries(fromEnteries)); // output is given below
*/

/* output:    
  { id: 1,
   title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops' ],
   price: 109.95,
  
    description: 'our perfect pack for everyday use and walk in the fore',
    'category': "men's clothing",
    'image': 'Some URL',
    'rating': { rate: 3.9, count: 120 }
 
  }*/ 


  /* Important Note: entries & fromEntries methods of Objects are mostly use for csv file testing */
