// Define an interface IClock with type ('digital' | 'analog'), and a time property (an object) with properties - hours, 
minutes, seconds (all numbers). Your interface also defines a method setTime( hours, minutes, seconds ) that sets the time, 
and getTime() that returns a string representation of the time. Create 2 objects of IClock type - one of type 'digital' and other 
of type 'analog', set the time through setTime() and log the time using getTime().


//Solution
type digital = {

}
type time = {
  hour:number,
  minute:number,
  second:number
};
interface IClock  {
        time : time;
        setTime : setFunc;
        getTime : getFunc;
        type : ('Digital' | 'Analog');
}

type setFunc = (hour:number,minute:number,second:number)=>void;
type getFunc = ()=>string;

const obj1:IClock={
  type:'Analog',
  time:{
    hour:0,
    minute:0,
    second:0
  },
  setTime :function(h,m,s){
    this.time.hour=h;
    this.time.minute=m;
    this.time.second=s;
  },
  getTime :function(){
    return "date is"+this.time.hour+"hours,"+this.time.minute+"minutes"+this.time.second+"seconds";
  }
};
const obj2:IClock={
  type:'Digital',
  time:{
    hour:0,
    minute:0,
    second:0
  },
  setTime :function(h,m,s){
    this.time.hour=h;
    this.time.minute=m;
    this.time.second=s;
  },
  getTime :function(){
    return "date is"+this.time.hour+"hours,"+this.time.minute+"minutes"+this.time.second+"seconds";
  }
}
obj1.setTime(2,5,6);
console.log(obj1.getTime());
console.log(obj2.getTime());
