const express = require("express");
const router = express.Router();
//route for home page
//router object has same functions as app object
router.get("/",(req,res)=>{
    console.log("function1");
    res.send("<h1 style='color:magenta'>Hello User welcome to this express server</h1>");
});

router.get("/",(req,res)=>{
console.log("function3");
res.end("hrloo");
}); 


module.exports=router;