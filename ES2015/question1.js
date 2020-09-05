let iphone11 = {
  name : 'iphone11',
  manufacturer : 'Apple',
  price : 699,
  specs : {
    color : 'white',
    memory : {
      value : 128,
      unit : 'MB'
    },
    camera : {
      front : ' 12 MP Wide',
      rear : '12 MP Ultra Wide'
    },
    availableColors : ['Black','Green','Yellow','Purple','Red','Yellow']
  },
  calculatedDiscountedPrice : function(percentage){
    return this.price*(100-percentage)/100;
  }
}
let shallowCopy = {
  ...iphone11
}
let deepCopy = {
  ...iphone11,
  specs : {
    ...iphone11.specs,
    memory : {...iphone11.specs.memory},
    camera : {...iphone11.specs.camera},
    availableColors : [...iphone11.specs.availableColors]
  }
}
iphone11.name="jane";
iphone11.specs.camera="24MP short it is";
console.log(shallowCopy);
console.log(deepCopy);


//48 Shallow deep copy
