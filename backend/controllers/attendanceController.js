import Attendance from "../models/attendanceModel.js";
import Teacher from "../models/teacherModel.js";
import Student from "../models/studentModel.js";

export const markAttendance=async(req,res)=>{
    try {
        const {date,attendance}=req.body;
        const teacher=await Teacher.findOne({
            userId:req.user.id
        })
        if(!teacher){
            return res.status(404).json({success:false,message:"teacher not found"})
        }
          for(const record of attendance){
            const existingAttendance=await Attendance.findOne({
                studentId:record.studentId,
                date
            })
            if(existingAttendance){
                return res.status(409).json({success:false,message:"attendence already marked"})
            }
        }
            for(const record of attendance){ 
                await Attendance.create({
                    studentId:record.studentId,
                    teacherId:teacher._id,
                    date,
                    status:record.status,
                    remarks:record.remarks
                })
            }
            
          res.status(201).json({success:true,message:"attendance marked successfully"});
    } catch (error) {
       return res.status(500).json({success:false,message:error.message})
    }
}

export const getStudentsByFilter=async(req,res)=>{
    try {
        const {academicYear,className,section}=req.query;
        console.log(req.query);
        console.log(academicYear,className,section);
        
        const students=await Student.find({
              
             academicYear,
             className,
             section,
             
        }).populate("userId","name")
        console.log(students);
        
        if(students.length===0){
            return res.status(404).json({
                success:false,message:"No students found"
            })
        }
        return res.json({success:true,message:"students found successfully",students})
    } catch (error) {
         return res.status(500).json({success:false,message:error.message})
    }
}

export const getAttendanceHistory=async(req,res)=>{
    try {
        const {date,academicYear,section,className}=req.query;
        
        
       const students= await Student.find({
            academicYear,
            className,
            section
        })   
      const studentIds= students.map((student)=>student._id);
      
      const attendanceHistory=await Attendance.find({
        studentId:{
            $in:studentIds
        },
        //date
      }).populate({
        path:"studentId",
        populate:{
            path:"userId",
            select:"name"
        }
    })
    
    return res.json({success:true,attendanceHistory})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
    
}

export const updateAttendance=async(req,res)=>{
    try {
        const {date,status,studentId,remarks}=req.body;
        const attendance=await Attendance.findOneAndUpdate(
            {studentId,date},
          {status,remarks},
          {returnDocument:"after"}
        )
        if(!attendance){
            return res.status(404).json({success:false,message:"attendance not found"})
        }
        return res.status(200).json({success:true,message:"Attendance Updated successfully",attendance})
    } catch (error) {
         return res.status(500).json({success:false,message:error.message})
    }
}

export const calculateAttendancePercentage=async(req,res)=>{
    try {
        const {studentId}=req.query;
        const attendance=await Attendance.find({
            studentId
        });
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
        return res.status(200).json({success:true,totalClasses,presentCount,absentCount,attendancePercentage:percentage});
    } catch (error) {
         return res.status(500).json({success:false,message:error.message})
    }
}