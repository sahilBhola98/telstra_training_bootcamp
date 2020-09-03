// Write a function _sumArray()_ that calculates sum of items in an array of numbers and returns it. Type the function arguments and return value inline.
// ```
// let result = sumArray( [ 1, 2, 3, 4 ] );
// console.log( result ); // 10



//Solution

const sum : (arr:number[]) => number = function func(arr){
  let result =0;
  for(let i =0;i<arr.length;i++)
  {result+=arr[i];
  }
  return result;
}
console.log(sum([1,2,3,4]));
export{};
