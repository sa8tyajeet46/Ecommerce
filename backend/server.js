const express=require('express');
const { default: mongoose } = require('mongoose');
const cors=require('cors');
const Products=require("./Productmodel");
const app=express();
const port=process.env.PORT || 8000;
app.use(express.json());
app.use(cors())
const url="mongodb://localhost:27017/Ecommerce";
mongoose.connect(url).then(()=>console.log("db connected")).catch((err)=>console.log(err));
app.get('/api/products',(req,res)=>{
    res.status(200).json({"message":"product added"});
    res.end();
});
app.post('/api/products/new',(req,res)=>{
    const product=req.body;
    Products.create(product,(err,data)=>{
       if(err)
       res.status(500).send(err);
       else
       res.status(201).send(data);
    })
})
app.get('/api/products/new',(req,res)=>{
    Products.find((err,data)=>{
       if(err)
       res.status(500).send(err);
       else
       res.status(200).send(data);
    })
})
app.listen(port,()=>console.log("server established"));