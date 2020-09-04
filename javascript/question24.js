let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
days.forEach(function(item){
    console.log(item);
})

let arr = days.map(item=>item.length);
console.log(arr);

let newarr = days.filter(item=>item.length===6);
console.log(newarr);
  
let newarr1 = days.filter(item=>/[S-Z]/.test(item.substring(0,1)));

console.log("this is new arr"+newarr1);