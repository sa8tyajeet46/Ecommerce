const { default: mongoose } = require("mongoose");

const productSchema=new mongoose.Schema({
    name:
    {type:String,
       required:true,
       trim:true
    }

,
    description:{
        type:String,
        required:[true,"add description"],
    },
    rating:{
        type:Number,
        default:0
    },
    Price:{
        type:Number,
        requied:[true,"add price"],
        maxlength:[8,"maxlength can't exceed 8 characters"]
    },
    images:[
        {
        product_id:{
            type:String,
            required:true
        },url:{
            type:String,
            required:true
        }
    }
    ],
    reviews:[{
        name:{
            type:String,
            required:true
        },
    comment:{
        type:String,
        required:true
    },
    Rating:{
        type:Number,
        default:0
    }
    }],
    numofrating:{
        type:Number,
        default:0
    },
    Category:{
        type:String,
        reuired:true,
    },
    stock:{
        type:Number,
        default:0,
    }  ,
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=new mongoose.model("products",productSchema);