import mongoose,{Schema} from "mongoose";

const productSchema = new Schema ({
    name:{
        type: String,
        required : true,
        unique:true,
        trim: true
    },
    price:{
        type:Number,
        required:true,
        trim:true,
        default:0
    },
    brand:{
        type: String,
        required: true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    rating:{
        type:Number,
        default: 5,
    },
    image:{
     type:String,
     required:true
    }

},{timestamps:true});

export const Product = mongoose.model("Product",productSchema);


