// Write a function _sumArray_ that works like so.
// ```
// console.log( sumArray( [ 1, 2, 3 ], square ) ); // prints 14
// console.log( sumArray( [ 1, 2, 3 ], cube ) ); // prints 36
// ```

//solution

function sumArray(arr,transform){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=transform(arr[i]);
  }
  return sum;
}

const square=x=>x*x;
const cube=x=>x*x*x;

console.log(sumArray([1,2,3],square));
console.log(sumArray([1,2,3],cube));
