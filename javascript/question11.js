// Write a function sumArray that calculates and returns the sum of items in an array of numbers that is passed to it, and call it like so.
// var result = sumArray( [ 1, 2, 3, 4 ] );
// console.log( result ); // prints 10

//Solution:

const sumArray=(arr)=>{
    let result=0;
    for(let i=0;i<arr.length;i++){
        result+=arr[i];
    }
    return result;
}

console.log(sumArray([1,2,3,4]));