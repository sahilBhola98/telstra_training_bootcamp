const express = require("express");
const mongoose = require("mongoose");

const Comment = mongoose.model('Comment');

const path = require("path");
const router = express.Router();



//posting comment

router.post("/articles/:id/comments",(req,res,next)=>{
    const comment = req.body;
    if(!comment){
        const error = new Error("Resource not found");
        error.status = 404;
        return next(error);
    }
    Comment.create(comment,(err,result)=>{
        if(err){
            err.status=500;
            return next(err);
        }
        res.status(200).json(result);
    })
});


module.exports=router;