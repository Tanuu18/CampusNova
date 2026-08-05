import mongoose from "mongoose"

const teacherSchema=new mongoose.Schema({
         userId:{
                 required:true,
                 type:mongoose.Schema.Types.ObjectId,
                 ref:"User",
                 unique:true
                 },
        employeeId:{
            type:String,
            required:true,
            unique:true
        },
        
        designation:{
                type:String,
            required:true
        },
        qualification:{
                type:String,
            required:true
        },
        address:{
               type:String,
            required:true
        },
        experience:{
              type:Number,
            required:true
        },
        subjects:[{
             type:String,
            
        }],
        profileImage:{
               type:String,
           
        }
})

const Teacher=mongoose.models.Teacher || mongoose.model("Teacher",teacherSchema);
export default Teacher;