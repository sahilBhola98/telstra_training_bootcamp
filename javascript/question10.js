// Write a function that logs "Good morning", "Good afternoon", "Good evening", or "Good night" based on the hour of the day, and call it.
// 5 <= hour < 12: "Good morning"
// 12 <= hour < 16: "Good afternoon"
// 16 <= hour < 20: "Good evening"
// Otherwise, "Good night"
// Note: The hour can be obtained by using this statement

//Solution:


let hour = (new Date()).getHours();

function message(hour){
    if(hour>=5&&hour<12){
        console.log("Good Morning");
    }
    else if(hour>=12&&hour<16){
        console.log("Good Afternoon");
    }else if(hour>=16&&hour<20){
        console.log("Good Evening");
    }else{
        console.log("Good Night");
    }
}

message(hour);