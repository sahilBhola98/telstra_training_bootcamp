Declare a function _foo_ and log its context.
* Use bind() to create a new function where the context is the object { x: 1 } instead
* Call the bound function



//Solution:
function foo(){
  console.log(this);
};
foo();

const bar = foo.bind({x:1});
bar();

foo();
