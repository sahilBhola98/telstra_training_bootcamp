let result=[0];
let expression="";
let num = document.querySelectorAll(".btn-number");
let onNumberPress=function(event){
    expression=expression+this.innerText;
    document.querySelector("input").value=this.innerText;
}
for(let i=0;i<num.length;i++){
    num[i].addEventListener("click",onNumberPress);
}
let onOperatorPress=function(event){
    expression=expression+this.innerText;
}
let obj = document.querySelectorAll(".btn-op");
for(let i=0;i<obj.length;i++){
    obj[i].addEventListener("click",onNumberPress);
}
let result1=0;
document.querySelector(".btn-eval").addEventListener("click",function(){
    console.log(expression);
result1=eval(expression);
document.querySelector("input").value=result1;
expression="";
result.push(result1);
});

let onRecallPress = function(event){
    if(result.length===0){
        document.querySelector("input").value=0;
        return;
    }
    document.querySelector("input").value=result[result.length-1];
    result.pop();

}
document.querySelector(".btn-recall").addEventListener("click",onRecallPress);

let onCancelPress=function(event){
    alert("it will recall");
    alert(result);
    document.querySelector("input").value=result[result.length-2];
    //expression="";
}

document.querySelector(".btn-cancel").addEventListener("click",onCancelPress);


