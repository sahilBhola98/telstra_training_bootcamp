// Define a function hireCar() that accepts either
// a. Two arguments - endDate (Date), carType ( 'hatchback' | 'sedan' | 'suv' - defaults to 'sedan')
// b. Three arguments - startDate (Date), endDate, car (all types same like 2 arguments case)
// If its called with 2 arguments, return a Booking object with all details passed, the current date as startDate, price (number), and driverName (string).
// If it is called with 3 arguments, a similar object with details passed is created and returned.
// Define appropriate function overloads.

//solution:

type carType = ("hatchback"|"Sedan"|"Suv");
 type obj = {
   name:string,
   price:number,
   currentDate:Date
 }


function hireCar(endDate:Date,car:carType="Sedan",startDate?:Date):obj{
  console.log(car);
  if(startDate===undefined){
    let bookingObj : obj = {
      name : "abc",
      price: 10000,
      currentDate : new Date()
    }
    return bookingObj;
  }else{
    let bookingObj : obj = {
      name : "abc",
      price: 10000,
      currentDate : startDate
    }
    return bookingObj;
  }
}

console.log(hireCar(new Date(),"Suv",new Date()));
console.log(hireCar(new Date()));
