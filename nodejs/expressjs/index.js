const express = require("express");
const indexRouter = require("./routes/index");
const path = require("path");
const productRouter = require("./routes/product");
//application object
const app = express();
//there are 4 objects in express : express(), app(), route(), res()

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');//here you setting the template for the page set creates key value pair


//now we need set the routes from router to app
app.use("/",(req,res,next)=>{
    console.log("req received at",(new Date()).toTimeString());
    console.log("function2");
    next();
    
    console.log("req received at",(new Date()).toTimeString());
})//this means for any request it will do

//another middleware static file server
app.use(express.static(path.join(__dirname,"public")));
//for handling url encoded data
app.use(express.urlencoded());
//for handling json data
app.use(express.json());
app.use(indexRouter);
app.use(productRouter);
//handling error for unknown request or for error from any middleware
// app.use((req,res,next)=>{
    
// });

//we can also use a middleware use with 4 parameters for error handling 
app.use((err,req,res,next)=>{
    res.status(err.status||500).send();
    next(err);
});


const port = process.env.PORT || 3000; //here environment port then that other wie or operator 3000

app.listen(port , (err)=>{   //to start port listening request for this server
    if(err){
        return console.log(err.message);
    }
    console.log(`server is running on port ${port}....`);
});

