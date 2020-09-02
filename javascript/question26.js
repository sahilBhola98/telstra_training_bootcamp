// Given the following string, solve the questions that follow.
// ```
// var quote = 'With great power comes great responsibility';
// ```
// * Create a string from the given string (quote) by replacing 'responsibility' with 'electricity bill'
// * Print the index of the first occurence of the word 'great'
// * Print the first 10 letters of the string




//Solution:
let quote = 'With great power comes great responsibility';
console.log(quote.slice(0,10)); //first 10

let quotes = quote.replace("responsibility" , "electricity bill");
console.log(quotes);

console.log(quote.indexOf("great"));
