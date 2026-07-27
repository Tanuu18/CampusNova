import Attendance from "../models/attendanceModel.js";
import Fee from "../models/feesModel.js";
import Student from "../models/studentModel.js"
import User from "../models/userModel.js";

 export const getStudentProfile=async(req,res)=>{
    try {
         const student=await Student.findOne({userId:req.user.id}).populate("userId","name email phone") ;
         if(!student){
            return res.status(404).json({success:false,message:"student not found"});
         }
        return res.status(200).json({success:true,message:"Student profile fetched successfully",student})

    } catch (error) {
        return res.json({success:false,message:error.message});  
    }
}       

export const updateStudentProfile=async(req,res)=>{
        try { 
         const {name,phone,className,section,academicYear}=req.body;
          await User.findByIdAndUpdate(req.user.id,{name,phone},{returnDocument:"after"});
       const student =  await Student.findOneAndUpdate(
            {
             userId:req.user.id,
          },
          {
            className,
            section,
            academicYear,
            
          },
          {returnDocument:"after"}

        );
        return res.status(200).json({success:true,message:"updated successfully",student})
    }catch(error){
           return res.json({success:false,message:error.message})
        }
}

export const getMyAttendancePercentage=async(req,res)=>{
   try {
      const userId=req.user.id;
      const student=await Student.findOne({
         userId,  
      })
      if(!student){
         return res.status(404).json({success:false,message:"student not found"});
      }
      const attendance=await Attendance.find({
         studentId:student._id
      })
      const totalClasses=attendance.length;
        const presentStudents=attendance.filter(record=>record.status==="Present");
        const presentCount=presentStudents.length;
        if(totalClasses===0){
           return  res.json({success:true,totalClasses:0,
            presentCount:0,
            attendancePercentage:0
           })
        }
        const absentCount=totalClasses-presentCount;
        const percentage=((presentCount/totalClasses)*100).toFixed(2);
        return res.status(200).json({success:true,totalClasses,presentCount,absentCount,attendancePercentage:percentage})
   } catch (error) {
      return res.status(500).json({success:false,message:error.message})
   }
}

export const getMyAttendance=async(req,res)=>{
   try {
      const userId=req.user.id;
      const student=await Student.findOne({
         userId
      })
      if(!student){
         return res.status(404).json({success:false,message:"student not found"});
      }
      const attendance=await Attendance.find({
         studentId:student._id
      }).select("date status remarks -_id").sort({date:-1});
     
      res.status(200).json({success:true,attendance});
   } catch (error) {
      return res.status(500).json({success:false,message:error.message})
   }
}

export const getMyFees=async(req,res)=>{
   try {
      const userId=req.user.id;
      const student=await Student.findOne({
         userId
      })
      if(!student){
         return res.status(404).json({success:false,message:"student not found"});
      }
      const fee=await Fee.find({studentId:student._id}).populate("userId","name phone email");
     if(fee.length===0){
      return res.status(404).json({success:false,message:"No fee record found"})
     }
      return res.json({success:true,message:"Fees record fetched successfully",fee})
   } catch (error) {
       return res.status(500).json({success:false,message:error.message})
   }
}