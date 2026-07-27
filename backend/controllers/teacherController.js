import Teacher from "../models/teacherModel.js";
import User from "../models/userModel.js";


export const getTeacherProfile=async(req,res)=>{
    try {
        const teacher=await Teacher.findOne({userId:req.user.id}).populate("userId","name email phone");
        if(!teacher){
            return res.status(404).json({success:false,message:"teacher not found"});
         }
        return res.status(200).json({success:true,message:"teacher profile fetched successfully",teacher})

    } catch (error) {
         return res.status(500).json({success:false,message:error.message})
    }
}


export const updateTeacherProfile=async(req,res)=>{
    try {
        const {name,phone,email,designation,qualification,address,experience,subjects}=req.body;
          await User.findByIdAndUpdate(req.user.id,{name,phone,email},{returnDocument:"after"});
         const teacher= await Teacher.findOneAndUpdate(
            {
             userId:req.user.id,
          },
          {
            designation,
            qualification,
            address,
            experience, 
            subjects
          },
          {returnDocument:"after"}

        );
        return res.status(200).json({success:true,message:"updated successfully",teacher})
    } catch (error) {
          return res.json({success:false,message:error.message})
    }
}


