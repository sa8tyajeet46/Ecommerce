const bcrypt = require("bcryptjs");
const { default: mongoose } = require("mongoose");
//const { stringify } = require("nodemon/lib/utils");
const validator=require("validator");
const authSchema=new mongoose.Schema({
    name:{
        type:String,
        minlength:[4,"character must be more than 4"],
        required:[true,"name cannot be mty"]        
    },
    password:{
        type:String,
        select:false,
        minlength:[4,"character must be more than 4"],
        required:true
    },
    email:{
        type:String,
        unique:[true,"already in use"],
        validate:[validator.isEmail,"enter a valid email"],
        required:true
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
})
authSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
})
module.exports=mongoose.model("auth",authSchema);