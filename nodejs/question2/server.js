const http = require("http");
const url = require("url");

const server = http.createServer(function(req,res){
    res.write("Hello please o some calculations through path");
    const obj = url.parse(req.url,true);
    console.log(obj);
    console.log(req.url);
    console.log(url.parse(req.url,true));
    let n1 = parseInt(obj.query.x);
    let n2 = parseInt(obj.query.y);

    const pathn = obj.pathname;
    let result=0;
    if(pathn.includes("add")){
        result=n1+n2;
    }else if(pathn.includes("multiply")){
        result=n1*n2;
    }
    res.end(result.toString());
    

    

})
const PORT = 3000;
server.listen(3000 , (err)=>{
    if(err)
    return console.log("Error fail");
    console.log("server is running....");
});