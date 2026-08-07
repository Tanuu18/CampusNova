import User from "../models/userModel.js";
import Student from "../models/studentModel.js";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import Teacher from "../models/teacherModel.js";
import Parent from "../models/parentModel.js";


const loginUser = async (req, res) => {
    try {

        const { email, password ,role} = req.body;
        const exists = await User.findOne({ email });
        if (!exists) {
            return res.json({ success: false, message: "user does not exist" });
        }
        const isMatch = await bcrypt.compare(password, exists.password);
        if (!isMatch) {
            return res.json({
                success: false, message: "Invalid Credentials"
            });
        }
        if(role && exists.role!=role){
            return res.status(403).json({success:false,message:"Access Denied"})
         }

        const token = jwt.sign({ id: exists._id, role: exists.role }, process.env.JWT_SECRET, 
            { expiresIn: "7d" })
        return res.status(200).json({
            success: true, message: "Login successful", token,role:exists.role
        });
         
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }


}

// const registerUser = async (req, res) => {
//     try {
//         const { name, rollNo, className, section,subject,academicYear, phone, email, password, role,
//             department, designation, qualification, experience, subjects, employeeId,
//             occupation,address,studentIds
//         } = req.body;

//         const isEmail = await User.findOne({ email });
//         if (isEmail) {
//             return res.json({ success: false, message: "user already exists" });
//         }
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const user = await User.create({
//             name,
//             email,
//             password: hashedPassword,
//             phone,
//             role,
//         })

//         if (role === "student") {
//             const student = await Student.create({
//                 userId: user._id,
//                 rollNo,
//                 className,
//                 section,
//                 subject,
//                 academicYear,
//             });
//         }
//         else if (role === "teacher") {
//             const teacher = await Teacher.create({
//                 userId: user._id,
//                 department,
//                 employeeId,
//                 designation,
//                 qualification,
//                 address,
//                 experience,
//                 subjects
//             });
//         }
//         else if(role==="parent"){
//             console.log("parent block");
            
//             const parent=await Parent.create({
//                 userId:user._id,
//                 occupation,
//                 address,
//                 studentIds
//             });
//             console.log("parent created");
            
//         }
//         return res.status(201).json({ success: true, message: "user registered successfully" })
//     } catch (error) {
//         return res.status(500).json({ success: false, message: error.message })
//     }
// }

const registerAdmin=async(req,res)=>{
    try{
        const adminExists=await User.findOne({
        role:"admin"
    }) 
    if(adminExists){
        return res.status(409).json({success:false,message:"Admin already exists"})
    }
    const {name,email,password,phone}=req.body;
    const isEmail = await User.findOne({ email });
        if (isEmail) {
            return res.status(409).json({ success: false, message: "email already exists" });
        }
     const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const admin = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            role:"admin"
        })
      return res.status(201).json({success:true,message:"Admin registered successfully",
        admin:{
            id:admin._id,
            name:admin.name,
            email:admin.email,
            role:admin.role
        }})
}catch(error){
       return res.status(500).json({ success: false, message: error.message })
}

}
const changePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword, confirmPassword } = req.body;
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ success: false, message: "user not found" });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "old password is incorrect" })
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ success: false, message: "new password and confirm password do not match" });
        }
        const hashedpassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedpassword;
        await user.save();
        return res.status(200).json({ success: true, message: "your password has been changed successfully" })

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }
}

export {  loginUser, changePassword,registerAdmin };