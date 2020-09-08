const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
    author : {
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    abstract : {
        type : String,
        required : true
    },
    body:{
        type:String,
        required:true
    },
    imageUrl : String,
    createdAt : Date
})
mongoose.model('Article',articleSchema);