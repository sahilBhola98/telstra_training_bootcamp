require("./Data/init");
const express = require("express");
const articleRouter = require('./Routes/Article');
const commentRouter = require('./Routes/Comment');
const { use } = require("./Routes/Article");
//requiring application object
const app = express();

//homepage route
app.get("/",function(req,res){
    res.send("<h1>Welcome to the BLOG API server");
})
app.use(express.json());
app/use(cors());
app.use("/articles",articleRouter);
app.use(commentRouter);
//handling dedault error
app.use((err,req,res,next)=>{
    res.status(err.status || 500).send("Internal Server Error");
})




//listening to port
const PORT = process.env.PORT || 4201;
app.listen(PORT , (err)=>{
    if(err){
        return console.log(err.message);
    }
    console.log(`The server is running on port ${PORT}`);
})

