//1 questioon rest operator
function sum(...x){
  let sum=0;
  x.forEach(function(item){
    sum=sum+item;
  })
  return sum;
}
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5,6));
