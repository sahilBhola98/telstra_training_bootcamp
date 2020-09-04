const { builtinModules } = require("module");

const sum = (x,y)=>x+y;
const diff = (x,y)=>x-y;
const mul = (x,y)=>x*y;

const pi = 3.14;
const area = r => 2*pi*r;

module.exports={
    sum,diff,mul,pi,area
};