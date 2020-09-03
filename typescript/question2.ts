// Write a function _squareEach()_ that creates a new array with squares of numbers in a supplied array, and returns it. Type the function separately and assign the type to the function.
// ```
// let result = squareEach( [ 1, 2, 3, 4 ] );
// console.log( result ); // [ 1, 4, 9, 16 ]
// ```




type func = (arr:number[]) => number[];

const square : func = function func(arr){
  let result=[];
  for(let i=0;i<arr.length;i++){
    result.push(arr[i]*arr[i]);
  }
  return result;
}

console.log(square([1,2,3,4]));
