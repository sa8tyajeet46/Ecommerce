const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express();
const port=process.env.PORT || 8000;
app.use(express.json());
const url="mongodb://localhost:27017/Ecommerce";
mongoose.connect(url).then(()=>console.log("db connected")).catch((err)=>console.log(err));
app.get('/api/products',(req,res)=>{
    res.status(200).json({"message":"product added"});
    res.end();
});
app.listen(port,()=>console.log("server established"));