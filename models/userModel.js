import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name field is mendatory"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email field is mendatory"],
        unique:[true,"This email id is already registered"],
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"Password field can't be empty"]
    },
    phone:{
        type:Number,
        required:[true,"Please enter phone number"],
        unique:[true,"This phone number is already registered"]
    }, 
    address:{
        type:String,
        required:[true,"Please enter address"]
    },
    answer:{
        type:String,
        required:true
    }
},{timestamps:true});

export default mongoose.model("users",userSchema);