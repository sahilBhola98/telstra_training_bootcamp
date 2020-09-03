// Write a function filter() that accepts an array and another function f (which returns a boolean value). The filter function should work like so...
// ```
// function isOdd( x ) {
//     return x % 2 === 1;
// }
// let filteredList = filter( [ 1, 2, 3, 4, 5, 6, 7, 8 ], isOdd ); // [ 1, 3, 5, 7 ]
// ```


function isOdd(x:number):boolean{
  if(x%2===0)
  return false;
  else
  return true;
}
type obj = (x:number)=>boolean;
const filter : (arr:number[],func:obj)=>number[]=function func(arr,isOdd){
let result=[];
for(let i=0;i<arr.length;i++){
  if(isOdd(arr[i]))
  result.push(arr[i]);
}
return result;
}

console.log(filter([1,2,3,4,5,6,7,8],isOdd));
