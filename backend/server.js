const express=require('express');
const { default: mongoose } = require('mongoose');
const cors=require('cors');
const Products=require("./Productmodel");
const apiFeaturekey = require('./ApiFeatureKey');
const app=express();
const port=process.env.PORT || 8000;
app.use(express.json());
app.use(cors())
const url="mongodb://localhost:27017/Ecommerce";
mongoose.connect(url).then(()=>console.log("db connected")).catch((err)=>console.log(err));
app.post('/api/products/new',(req,res)=>{
    const product=req.body;
    Products.create(product,(err,data)=>{
       if(err)
       res.status(500).send(err);
       else
       res.status(201).send(data);
    })
})
app.get('/api/products',async (req,res)=>{
   const product=await new apiFeaturekey(Products.find(),req.query).search().query;
        if(product)
        res.status(200).send({"sucess":"true","product":product});
        else
        {
         res.status(500).send({"sucess":"false"});
        }
}
       )
app.get('/api/product/:id',(req,res)=>{
   Products.find({"_id":req.params.id},(err,data)=>{
    if(err)
    res.status(500).send({"sucess":"false"});
    else
    res.status(200).send({"sucess":"true","product":data});
   })
})
app.get('/api/delete/:id',(req,res)=>{
    Products.deleteOne({"_id":req.params.id},(err,data)=>{
     if(err)
     res.status(500).send("product not found");
     else
     res.status(200).send(data);
    })
 })
 app.put('/api/update/:id',(req,res)=>{
    Products.updateOne({"_id":req.params.id},{$set:req.body},(err,data)=>{
     if(err)
     res.status(500).send({"sucess":"false"});
     else
     res.status(200).send(data);
    })
 })
app.listen(port,()=>console.log("server established"));