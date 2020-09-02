// Declare a function _sum_ that accepts 2 numbers _x_ and _y_, and returns their sum.
// * Use bind() to create a new function where x is bound to 10, and the context is unchanged. Call the bound function with a value for y, and log the result.
// * Use bind() to create a new function where x is bound to 10, and y to 20 (context is unchanged). Call the bound function, and log the result.



//Solution:
function sum(x,y){
  return x+y;
}
let newsum=sum.bind({},10);
console.log(newsum(y=5));

let nwsum = sum.bind({},10,20);
console.log(nwsum());
