// Given the following snippet of code, solve the questions that follow.
// ```
// var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
// ```
// * Sort the numbers in the array in increasing order and print the array
// * Sort the array in decreasing order and print the array
// * Add the number 37 to the end of the array using push()
// * Remove the last 2 numbers in the array
// * Remove the numbers at indices 3, 4 (i.e. the 4th and 5th numbers) and insert the strings 'Seven' and 'Eleven' in their place.
// * Use indexOf() to check if 23 belongs to the array or not. Also, check if 41 belongs to the array or not.





//Solution:
 let numbers=[5,11,13,7,2,31,4,19,23,17,29];
 //sort the array in increasing order
 numbers.sort(function(a,b){  //comparing function in sort
   return a-b;
 }); //sort() sorts in ascending and alphatebical order
console.log(numbers);

//decreasing order sorts
numbers.sort(function(a,b){
  return -(a-b);
});
console.log(numbers);

numbers.push(37);
numbers.pop();
numbers.pop();

numbers.splice(3,2,"seven","eleven");
console.log(numbers);


console.log(numbers.indexOf(23));
console.log(numbers.indexOf(41));
