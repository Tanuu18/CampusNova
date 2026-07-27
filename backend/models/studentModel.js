import mongoose from "mongoose"

const studentSchema=new mongoose.Schema({
          userId:{
              required:true,
              type:mongoose.Schema.Types.ObjectId,
              ref:"User",
              unique:true
          },
         rollNo:{
           type:String,
           required:true,
           unique:true,
           trim:true
          },
          
          academicYear:{
               type:String,
            required:true
          },
          className:{
             type:String,
             required:true
          },
          section:{
             type:String,
             required:true
          },
          admissionDate:{
            type:Date,
            default:Date.now,
          }
},
          {
            timestamps:true,
          }

)

const Student=mongoose.models.Student || mongoose.model("Student",studentSchema);
export default Student;