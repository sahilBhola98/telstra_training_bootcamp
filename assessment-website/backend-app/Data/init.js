const mongoose = require("mongoose");
require("../Model/Article");
require("../Model/Comment");

mongoose.connect("mongodb://localhost/blogdata",{useNewUrlParser:true});
const connection = mongoose.connection;

connection.on('error',(err)=>{
    console.error.bind(console,'connection error:',err.message);
    process.exit(0);
})

connection.on('open',()=>{
    console.log("connected to database");
})
