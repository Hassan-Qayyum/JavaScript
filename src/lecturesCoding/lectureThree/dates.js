/*
1- Dates are used for Time Span 
e.g. Token will get expired after 1 day or 2 days etc. 
*/

// Stop Watch in javaScript

/*
1- Current Date 2- Current Time, 3- Current Day, 4- Current Month, 5- Current Year
*/

const date = new Date();

console.log(date.getDate()); // output: 22 => current date.
console.log(date.getTime()); // output: 1632317614451 => time in miliscond
console.log(date.getMonth()); // output: 8 => it has month from (0-11) therefore it is showing 8 for september 
console.log (date.toDateString()); // output: Wed Sep 22 2021
console.log(date.toISOString()); // output(we mostly use it for data bases): 2021-09-22T13:43:14.810Z
console.log(date.toLocaleDateString()); // output: 22/09/2021
