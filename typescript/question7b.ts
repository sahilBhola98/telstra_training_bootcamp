// Define a function log() that accepts either
// a. One argument - message (string)
// b. Two arguments - format ( 'standard' | 'verbose' ) and message (string)
// If its called with one argument, it simply prints the message. If it is called with 2 arguments it prints the message if format is 'standard', and prints the message with current date if format is 'verbose'
// Define appropriate function overloads.



type format = "standard" | "verbose";
function log(variable:string , Format?:format):void{
  if(Format==="standard"){
  console.log(variable);
  }
  else if(Format==="verbose"){
      let date = new Date();
      console.log(variable+" "+date.getDate());
  }else{
      console.log(variable);
  }
}


log("Hello");
log("hello","standard");
log("hello","verbose");
