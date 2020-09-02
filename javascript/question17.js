// Write a function _exponentFactory_ that accepts a number, say x. Define 2 functions _square_ and _cube_ within it (which accept a number each, and return the square and cube respectively). If x is 2, exponentFactory returns the square function, if 3 it returns the cube function. For any other input it returns a function that returns the number it accepts as such. Call the exponentFactory() function and then the returned function, and log the result.
// _Example_:
// ```
// var fn;
//
// fn = exponentFactory( 2 );
// console.log( fn( 5 ) ); // prints 25;
//
// fn = exponentFactory( 3 );
// console.log( fn( 5 ) ); // prints 125;
//
// fn = exponentFactory( 4 );
// console.log( fn( 5 ) ); // prints 5;
// ```


//solution:
function exponentFactory(num){
  let transform;
  switch(num){
    case 2 :  transform=function(n){
      return n*n;
    }
    break;
    case 3 : transform=function(n){
      return n*n*n;
    }
    break;
    default: transform=function(n){
      return n;
    }
  }
  return transform;
}

let fn;
fn=exponentFactory(2);
console.log(fn(5));

fn=exponentFactory(3);
console.log(fn(5));

fn=exponentFactory(7);
console.log(fn(4));
