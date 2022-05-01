const mongoose=require('mongoose');
//const { stringify } = require('nodemon/lib/utils');
const orderSchema=new mongoose.Schema({
   name:{
       type:String,
       required:true
   },
   id:{
    type:String,
    required:true
},
adress:{type:String,
required:true},
country:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
},
district:{
    type:String,
    required:true
},
pincode:{
    type:Number,
    maxlength:6,
    required:true
},
amountToBePaid:{
    type:Number,
    required:true
},
createdAt:{
    type:Date,
    default:Date.now
},
product:{
    type:Array,
    required:true,
}
})
module.exports=new mongoose.model("orders",orderSchema);