// Define a function _push()_ that accepts 2 arguments
// * first argument is an array of numbers
// * second is either a number or an array of numbers
// If second argument is a number, the function adds the number to the end of the array. If second argument is an array of numbers, the items of the array are pushed to the end of the array.
// Your function push() should return the array (first argument it accepts).
// _Tip_: You may use the spread operator to simplify your logic
//


//solution:
const push1 : (arr:number[] , num : number | number[])=> number[]=function func(arr,number){
if(typeof(number)==="object")
arr.push(...number);
else
arr.push(number);
return arr;
}

console.log(push1([1,2,3,4],6));
console.log(push1([1,2,3,4],[5,6,7]));
