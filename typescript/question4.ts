// Write a function _map()_ that accepts an array as the first argument, and another function as the second argument. The second argument is a function that accepts an item of the array and returns some value. The _map()_ functions applies the passed function (second argument) on each item of the passed array (first argument) in the order they appear in the array, and groups the results into an array and returns it.
// ```
// function square( x ) { return x * x };
// function cube( x ) { return x * x * x };
//
// console.log( map( [ 1, 2, 3, 4 ], square ) ); // prints [ 1, 4, 9, 16 ]
// console.log( map( [ 1, 2, 3, 4 ], cube ) ); // prints [ 1, 8, 27, 64 ]

//Solution:
type newType = (item:number)=>number;
const map : (arr:number[],func:newType)=>number[]=function sum(arr,func){
  let result : number[]=[];
  for(let i=0;i<arr.length;i++){
    result.push(func(arr[i]));
  }
  return result;
}

const square : newType = x => x*x;
const cube : newType = x => x*x*x;

console.log(map([1,2,3,4],square));
console.log(map([1,2,3,4],cube));
