import mongoose from "mongoose";

const parentSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
    occupation:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    profileImage:{
        type:String
    },
    studentIds:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    }]
})

const Parent=mongoose.models.Parent || mongoose.model("Parent",parentSchema);
export default Parent;