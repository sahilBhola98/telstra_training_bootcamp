//45 bindinf function

const iphone11 = {
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
const { name , manufacturer:brand , specs : {memory : { value : ram} }, specs : {camera : {rear:rearCamera } }, specs : { availableColors : [, Secondcolor]} } = iphone11;

console.log(name,brand,ram,rearCamera,Secondcolor);



function printPhoneDetails(){
  const {calculatedDiscountedPrice:func} = this;
  const price = func.call(this,10);
  console.log("discounted price at 10 % is " + price);
}
printPhoneDetails.call(iphone11);

