const express = require("express");
const router = express.Router();
//route for home page
//router object has same functions as app object

const data = require("../data/seed.json");
const e = require("express");
let nextId = 6;
router.get("/products",(req,res)=>{
//  path is wrt views folder ejs extemsion is unnecessary
        if(req.query.format==="json"){
            res.json(data.products);
        }else{
            res.render('product',data); //fetch product tempalate
        }
       
        
});
router.get("/products/:id",(req,res)=>  {
    const id = parseInt(req.params.id);
    res.write(`<h1>I need to send send products of id = ${req.params.id} </h1>`)
    const product = data.products.find(product=>product.id===id);
    res.json(product);
})

router.post("/products",(req,res)=>{
   const product = 
   {
       ...req.body,
       id:nextId
};
   data.products.push(product);
   nextId++; 
   res.json(product);//convert to json and send
});

module.exports=router;