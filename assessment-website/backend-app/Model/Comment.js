const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
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
    createdAt : Date,
    comment : [
        {
        commenter : {
            type : String,
            required:true
        },
        title:String,
        comment:{
            type:String,
            required:true
        },
        createdAt : Date
    }
]
})
mongoose.model('Comment',commentSchema);