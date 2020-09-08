const express = require("express");
const url=require("url");
const path = require("path");
const mongoose = require("mongoose");
const Article = mongoose.model('Article');
const Comment = mongoose.model('Comment');

const router = express.Router();

//getting articles
router.get("/",function(req,res,next){
    const urlp = url.parse(req.url)
    if(req.query.include==="comments"){
        Comment.find().exec((err,results)=>{
            if(err){
                err.status=500;
                return next(err);
            }
            res.status(200).json(results);
        })
    }else{
        Article.find().exec((err,results)=>{
            if(err){
                err.status=500;
                return next(err);
            }
            res.set('Content-Type', 'text/plain');  
            res.status(200).json(results);
        })
    }
    
 });
//geting articles with id
 router.get("/:id",(req,res,next)=>{
    const id = req.params.id;
    Article.findById(id,(err,results)=>{
        if(err){
            err.status=404;
            return next(err);
        }
        res.status(200).json(results);
    })
})

//posting article 
router.post("/",function(req,res,next){
    const article = req.body;
    console.log(req.body);
    if(!article){
        
        const err = new Error("Resource not found");
        err.status = 404;
        return next(err);
    }
    Article
        .create(article,(err,result)=>{
        if(err){
            console.log(err);
            err.status=500;
            return next(err);
        }
        res.status(201).json(result);
    });  
})
//updating article with id
router.patch("/:id",(req,res,next)=>{
    const id = req.params.id;
    const article = req.body;
    if(!article){
        const err = new Error("resource not found");
        err.status=404;
        return next(err);
    }
    Article.findByIdAndUpdate(id,{$set:article}).exec((err , newArticle)=>{
        if(err){
            console.log(err.message);
            err.status=500;
            return next(err);
        }
        
        res.status(200).json(newArticle);
    })
})
//deleting the article
router.delete("/:id",(req,res,next)=>{
    const id = req.params.id;
    Article.findByIdAndRemove(id).exec((err,result)=>{
        if(err){
            err.status=500;
            return next(err);
        }
        res.status(204).send("Deleted");
    })
})


module.exports=router;