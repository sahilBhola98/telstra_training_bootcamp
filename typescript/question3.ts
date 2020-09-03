// Write a function _contains()_ that accepts an array that can have any primitive value, and another primitive value as the second argument, and returns true if the second argument appears in the array, and false otherwise.
// ```
// console.log( contains( [ 1, 'hello', 3, true ], 3 ) ); // prints true
// console.log( contains( [ 1, 'hello', 3, true ], 5 ) ); // prints false
// ```


//Solution:

const contains : (arr:any[],item:any)=>boolean=function func(arr,item){
  return arr.includes(item);
}

console.log(contains([1,"hello",true,3],"hello"));
