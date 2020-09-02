// Write a function _addTo_ that accepts a number x. addTo() returns a function that accepts a number y and returns the sum of x and y. Call the addTo() function few times, and then the returned function, and log the result.
// _Example_:
// ```
// var addTo10 = addTo( 10 );
// console.log( addTo10( 5 ) ); // prints 15
// console.log( addTo10( 7 ) ); // prints 17
//
// var addTo20 = addTo( 20 );
// console.log( addTo20( 5 ) ); // prints 25
// console.log( addTo20( 7 ) ); // prints 27
// ```

//Solution:
function addTo(x){
  return function(y){
    return x+y;
  }
}

let addto10 = addTo(10);
console.log(addto10(5));
console.log(addto10(7));

let addto20 = addTo(20);
console.log(addto20(5));
console.log(addto20(7));
