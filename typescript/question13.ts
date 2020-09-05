type shortN = string;

interface fullN {
  manufacturer : string;
  product : string;
}
interface Item<T> {
  id : number;
  name : T;
  getName : () => string
}

class ShortName implements Item<shortN>{
  constructor(public id : number,public name:shortN){
    this.name=name;
  }
  getName(){
    return this.name;
  }
}
class LongName implements Item<fullN>{
  constructor(public id : number,public name:fullN){
    this.name=name;
  }
  getName(){
    return this.name.manufacturer+this.name.product;
  }
}

function printItems1<T>(arr:Item<T>[]){
  for(let i=0;i<arr.length;i++)
  console.log(arr[i]);
}
let obj : Item<fullN> = {
  id : 12121,
  name : {
    manufacturer : "xyz",
    product : "abc"
  },
  getName : function(){
    return this.name.manufacturer +" "+ this.name.product;
  }
}


console.log(obj.getName());
console.log(obj);
