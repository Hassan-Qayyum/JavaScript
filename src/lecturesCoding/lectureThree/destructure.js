/*
    Destructure

    It helps to access array and object elements
*/

const fruits = ['Apple','Banana','Mango','Grapes','Guava', 'Peach'];

/*
    Destructure Array:

    There are 2 methods to destructure array 

*/ 

// First Method:

/* const [Apple,,Mango, Grapes] = fruits;  // Apple[first index],Mango [Third index], Grapes[Fourth index] are indexes of fruits array
   console.log([Apple,,Mango, Grapes] ); // output: ['Apple', <1 empty item>, 'Mango','Grapes'] 
*/

// Second Method:

/*
const [Apple,,,...rest]= fruits;
console.log([Apple,,,...rest]); // output: ['Apple',<2 empty items>, 'Grapes','Guava','Peach']
*/

// Important Note: The places where we put ,, these commas they indicate that miss these indexes 

/*
    Destructure Object:
*/ 

const user = {
    name: 'Hassan',
    skills:{
        tech: ["JS", "REACT", "VUE", "NODE"]
    }
};

const { name, skills: {tech}} = user; 

console.log({name,skills:tech}); // {name: 'Hassan', skills: ["JS", "REACT","VUE","NODE"]}

