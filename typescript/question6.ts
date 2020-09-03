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

type newType = (x:number)=>number;

function exponentFactory(x:number):newType{
  let transform;
  switch(x){
    case 2 : transform=(x:number)=>x*x;
              break;
    case 3 : transform=(x:number)=>x*x*x;
                break;
    default : transform = (x:number)=>x;
  }
  return transform;
}

let fn:newType;
fn=exponentFactory(2);
console.log( fn( 5 ) );

fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;

fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;
