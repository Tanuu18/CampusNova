import Parent from "../models/parentModel.js";
import User from "../models/userModel.js";

export const getParentProfile=async(req,res)=>{
    try {
    const parent=await Parent.findOne({userId:req.user.id}).populate("userId","name email phone");
            if(!parent){
                return res.status(404).json({success:false,message:"parent not found"});
             }
            return res.status(200).json({success:true,message:"parent profile fetched successfully",
                parent})
    
        } catch (error) {
             return res.status(500).json({success:false,message:error.message})
        }
}

export const updateParentProfile=async(req,res)=>{
    try {
        const {name,phone,email,address,occupation}=req.body;
          await User.findByIdAndUpdate(req.user.id,{name,phone,email},{returnDocument:"after"});
          const parent=await Parent.findOneAndUpdate(
            {
             userId:req.user.id,
          },
          {
           occupation,
           address
          },
          {returnDocument:"after"}

        );
        return res.status(200).json({success:true,message:"updated successfully",parent})
    } catch (error) {
          return res.json({success:false,message:error.message})
    }
}

