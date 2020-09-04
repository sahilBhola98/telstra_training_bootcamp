const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req,res)=>{
    const obj = url.parse(req.url,true);
    let route = obj.pathname;
    switch(route){
        case '/index.html' : const home = path.join(__dirname,"index.html");
                    fs.readFile(home,'utf8',function(err,contents){
                        if(err){ 
                            res.statusCode=500;
                            console.log(err.message);
                        }
                        res.setHeader('Content-Type','text/html');
                        res.end(contents);
                    });
                    break;
        case '/contact.html'     :    const contact = path.join(__dirname,"contact.html");
        fs.readFile(contact,'utf8',function(err,contents){
            if(err){ 
                res.statusCode=500;
                console.log(err.message);
            }
            res.setHeader('Content-Type','text/html');
            res.end(contents);
        });
        break; 
        default : const page = path.join(__dirname,'homepage.html');
            fs.readFile(page,'utf8',function(err,contents){
            if(err){ 
                res.statusCode=500;
                console.log(err.message);
            }
            res.setHeader('Content-Type','text/html');
            res.end(contents);
            });
    }
});

server.listen(3000 , (err)=>{
    if(err){
        console.log("error occured please check");
        return;
    }
    console.log("server is running...")
})