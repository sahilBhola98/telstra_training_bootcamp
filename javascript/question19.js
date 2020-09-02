// Create 2 objects (that represents 2 persons, say John and Jane), each with 2 properties - name (a string), and age (a number).
// * Print John's age.
// * Increase Jane's age and print the Jane object.
// * Add an address property to John and set it to an object with "first line" and "city" as properties (the values for these properties also need to be set).
// * Print John's city name
// * Add a new property spouseName to each object. Set John's spouseName property to Jane object, and Jane's spouseName property to John object
// * Add an emailids property to Jane. Set it to an array with 2 strings representing Jane's email ids.
// * Print the second email id of Jane.
// * Change the second email id of Jane and print it.
// * Add a third email id for Jane and print the Jane object.
// * Add a method celebrateBirthday() on John that adds 1 to the John's age. Call it on John to increase John's age.
// * Add a method celebrateBirthday() on Jane that adds 1 to the Jane's age. Call it on Jane to increase Jane's age.
// * Wouldn't it be nice to have a single celebrateBirthday() method shared by both John and Jane objects? Declare celebrateBirthday() as a global function and set it up as a method on both John and Jane objects. Call it to check it increases the age.

//Solution:
let john = {
  name : "john",
  age : 33
};
let jane={
  name : "jane",
  age:28
};

//john age
console.log(john.age);

//jane age increase
jane.age++;
console.log(jane);

//address property john
john.address={
  city:"DELHI"
};

console.log(john.address.city);
//creating spusename
john.spouseName="jane";
jane.spouseName="john";

//email id
jane.emailid=["jane.com","jane1.com"];

console.log(jane.emailid[1]);

//changing emil id
jane.emailid[1]="jane2.com";

//third emailid
jane.emailid.push("jane3.com");
console.log(jane);

//adding celebratebirthday
let celebrate = function(){
  this.age++;
}
celebrate.call(john);
celebrate.call(jane);

 console.log(john.age);
 console.log(jane.age);
