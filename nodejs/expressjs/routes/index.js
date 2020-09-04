const express = require("express");
const router = express.Router();
//route for home page
//router object has same functions as app object
router.get("/",(req,res)=>{
        res.sendFile(__dirname+"/public/index.html");
});



module.exports=router;