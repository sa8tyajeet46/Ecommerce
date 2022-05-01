const express=require('express');
const { default: mongoose } = require('mongoose');
const cors=require('cors');
const auth=require('./Usermodel');
const Products=require("./Productmodel");
const Orders=require("./orderSchema");
const apiFeaturekey = require('./ApiFeatureKey');
const bcrypt = require('bcryptjs/dist/bcrypt');
const jwt = require('jsonwebtoken');
const app=express();
const cookieParser=require('cookie-parser');
const port=process.env.PORT || 8000;
const path=require("path")
app.use(express.json());
app.use(cors())
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"../frontend/build")));
const url="mongodb://satyajeet:TeriMaKiChut@cluster0-shard-00-00.t68qz.mongodb.net:27017,cluster0-shard-00-01.t68qz.mongodb.net:27017,cluster0-shard-00-02.t68qz.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=atlas-ii87ee-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(url).then(()=>console.log("db connected")).catch((err)=>console.log(err));
const checkRole=(...roles)=>{
   return (req,res,next)=>{
      if(!roles.includes(req.user.role))
      {
         return res.status(403).send({"msg":`${req.user.role} cannot use this route`,"sucess":"false"});
      }
      next();
   }
}
const getJWTToken=async(data)=>{
   const token=await jwt.sign({id:data._id},"secret",{ expiresIn: '5d'});
   return token;

}
const sendToken=async (user,satuscode,res)=>{
   const token=await getJWTToken(user);
   const options={
      expires:new Date(Date.now()+process.env.cookieexpire*24*60*60*1000),
      httpOnly:true,
   };
   res.status(satuscode).cookie("token",token,options).json({
      sucess:true,
      user,
      token,
   })
}
const isauthenticated=async(req,res,next)=>{
   const {token}=req.cookies;
  // console.log(token);
   if(!token)
   return res.status(404).send({"sucess":"false"});
  //console.log(token);
   const decodedData=jwt.verify(token,"secret");
   req.user =await auth.findById(decodedData.id);
   next();
}
app.post('/order/new',(req,res)=>{
   const order=req.body;
   Orders.create(order,(err,data)=>{
      if(err)
      res.status(500).send(err);
      else
      res.status(201).send(data);
   })
})
app.get('/me',isauthenticated,(req,res)=>{
   if(req.user)
   res.status(200).send({"sucess":"true","user":req.user});
})
app.post('/api/products/new',isauthenticated,checkRole("admin"),(req,res)=>{
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
  {      res.status(200).send({"sucess":"true","product":product});
       // console.log(req.cookies);
}
        else
        {
         res.status(500).send({"sucess":"false"});
        }
}
       )
       app.get('/logout',async (req,res)=>{
       res.cookie("token",null,{
          expires:new Date(Date.now()),
          httpOnly:true
       })
       res.status(200).send({sucess:true,message:"logged out"});
       })
       app.post('/register',async(req,res)=>{
          const {name,email,password}=req.body;
          auth.create({name,email,password},(err,data)=>{    
               if(err)
          res.status(500).send(err);
          else
          {
            sendToken(data,201,res);
          }
          })
       })
app.get('/api/product/:id',(req,res)=>{
   Products.find({"_id":req.params.id},(err,data)=>{
    if(err)
    res.status(500).send({"sucess":"false"});
    else
    res.status(200).send({"sucess":"true","product":data});
   })
})
app.post('/login',async(req,res)=>{
   const {email,password}=req.body;
   if(!email|| !password){
res.status(500).send({"sucess":"false","msg":"enter email and password"});
   }
else{
 const user=await auth.findOne({email}).select("+password");
 if(!user){
    res.status(500).send({"sucess":"false","msg":"incorrect email and password"});
 }
 else
 {
    const isPasswordMatched=await bcrypt.compare(password,user.password);
    if(isPasswordMatched)
    {
     sendToken(user,200,res);
    }
 else
 res.status(401).send({"sucess":"false","msg":"invalid credentials"})
 }
}
   
})
app.get('/api/delete/:id',isauthenticated,checkRole("admin"),(req,res)=>{
    Products.deleteOne({"_id":req.params.id},(err,data)=>{
     if(err)
     res.status(500).send("product not found");
     else
     res.status(200).send(data);
    })
 })
 app.put('/api/update/:id',isauthenticated,checkRole("admin"),(req,res)=>{
    Products.updateOne({"_id":req.params.id},{$set:req.body},(err,data)=>{
     if(err)
     res.status(500).send({"sucess":"false"});
     else
     res.status(200).send(data);
    })
 })
app.listen(port,()=>console.log("server established"));