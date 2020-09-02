//14. Write a function that accepts another function and calls the accepted function.


//Solution:
function func(newfunc){
  console.log("here is the new function call");
  newfunc();
}

function square(){
  console.log("this is square");
}

func(square);
