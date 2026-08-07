import User from "../models/userModel.js";
import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";
import Parent from "../models/parentModel.js";
import bcrypt from "bcryptjs";

export const adminDashboard=async(req,res)=>{
   try {
    const totalStudents=await Student.countDocuments();
    const totalTeachers=await Teacher.countDocuments();
    const totalParents=await Parent.countDocuments();
    const totalAdmins=await User.countDocuments({role:"admin"});
     

    return res.status(200).json({
        success:true,
        dashboard:{
            totalStudents,
            totalTeachers,
            totalParents,
            totalAdmins
        }
    })
   } catch (error) {
       return res.status(500).json({ success: false, message: error.message })
   }
}
export const getAllStudents=async(req,res)=>{
   try {
    const students=await Student.find({

    }).populate("userId","name email phone")
    return res.status(200).json({success:true,students:students})
   } catch (error) {
       return res.status(500).json({ success: false, message: error.message })
   }
}

export const addStudentByAdmin=async(req,res)=>{
    try {
        const {name,email,password,phone,rollNo,className,section,academicYear}=req.body;
        const isEmail = await User.findOne({ email });
        if (isEmail) {
            return res.json({ success: false, message: "user already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role:"student"
        })
            const student = await Student.create({
                userId: user._id,
                rollNo,
                className,
                section,
                academicYear,
            });
        return res.status(201).json({ success: true, message: "student added successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
     

export const updateStudentProfileByAdmin=async(req,res)=>{
        try { 
            const {id}=req.params;
            const {name,email,phone,className,section,academicYear,rollNo}=req.body;
          await User.findByIdAndUpdate(id,{name,email,phone},{returnDocument:"after"});
       const student =  await Student.findOneAndUpdate(
            {
             userId:id,
          },
          {
            className,
            section,
            academicYear,
            rollNo
          },
          {returnDocument:"after"}

        );
        return res.status(200).json({success:true,message:"updated successfully",student})
    }catch(error){
           return res.json({success:false,message:error.message})
        }
}
export const deleteByAdmin=async(req,res)=>{
    try{
    const {id}=req.params;
    await Student.findOneAndDelete({
        userId:id
    });
    await User.findByIdAndDelete(id);
    return res.status(200).json({success:true,message:"Student deleted successfully"});
}catch(error){
 
}
}
//teacher controller
export const getAllTeacher=async(req,res)=>{
   try {
    const teachers=await Teacher.find({

    }).populate("userId","name email phone")
    return res.status(200).json({success:true,teachers:teachers})
   } catch (error) {
       return res.status(500).json({ success: false, message: error.message })
   }
}

export const addTeacherByAdmin=async(req,res)=>{
    console.log(req.body);
    
    try {
        const {name,email,password,phone,employeeId,designation,qualification,
            address,experience,subjects}=req.body;
        const isEmail = await User.findOne({ email });
        if (isEmail) {
            return res.json({ success: false, message: "user already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role:"teacher"
        })
        
            const teacher = await Teacher.create({
                userId: user._id,
                employeeId,
               
                designation,
                qualification,
                address,
                experience,
                subjects
            });
          
        return res.status(201).json({ success: true, message: "teacher added successfully" })
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({ success: false, message: error.message })
    }
}
     

export const updateTeacherProfileByAdmin=async(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    
    
        try { 
            const {id}=req.params;
            const {name,email,phone,employeeId,designation,qualification,address,experience,subjects}=req.body;
          await User.findByIdAndUpdate(id,{name,email,phone},{returnDocument:"after"});
       const teacher =  await Teacher.findOneAndUpdate(
            {
             userId:id,
          },
          {
            employeeId,
            designation,
            qualification,
            address,
            experience,
            subjects
          },
          {returnDocument:"after"}

        );
        return res.status(200).json({success:true,message:"updated successfully",teacher})
    }catch(error){
           return res.json({success:false,message:error.message})
        }
}


export const deleteTeacherByAdmin=async(req,res)=>{
    try{
    const {id}=req.params;
    await Teacher.findOneAndDelete({
        userId:id
    });     
    await User.findByIdAndDelete(id);
    return res.status(200).json({success:true,message:"Teacher deleted successfully"});
}catch(error){
    return res.json({success:false,message:error.message});
}
}
//parent 

export const getAllParent=async(req,res)=>{
   try {
    const parents=await Parent.find({})
    .populate("userId","name email phone")
    .populate({
        path:"studentIds",
       populate:{
           path:"userId",
           select:"name"
       }})
    return res.status(200).json({success:true,parents:parents}) 
   } catch (error) {
       return res.status(500).json({ success: false, message: error.message })
   }
}

export const addParentByAdmin=async(req,res)=>{
    try {
        const {name,email,password,phone,occupation,address,studentIds}=req.body;
        const isEmail = await User.findOne({ email });
        if (isEmail) {
            return res.json({ success: false, message: "user already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role:"parent"
        })
        
            const parent = await Parent.create({
                userId: user._id,
                occupation,
                address,
                studentIds
            });
          
        return res.status(201).json({ success: true, message: "parent added successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}
     

export const updateParentProfileByAdmin=async(req,res)=>{
        try { 
            const {id}=req.params;
            const {name,email,phone,address,occupation,studentIds}=req.body;
          await User.findByIdAndUpdate(id,{name,email,phone},{returnDocument:"after"});
       const parent =  await Parent.findOneAndUpdate(
            {
             userId:id,
          },
          {
           occupation,
            address,
            studentIds
          },
          {returnDocument:"after"}

        );
        return res.status(200).json({success:true,message:"updated successfully",parent})
    }catch(error){
           return res.json({success:false,message:error.message})
        }
}


export const deleteParentByAdmin=async(req,res)=>{
    try{
    const {id}=req.params;
    await Parent.findOneAndDelete({
        userId:id
    });
    await User.findByIdAndDelete(id);
    return res.status(200).json({success:true,message:"Parent deleted successfully"});
}catch(error){
    return res.json({success:false,message:error.message});
}
}
