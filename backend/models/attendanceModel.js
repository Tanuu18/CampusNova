import mongoose from 'mongoose';

const attendanceSchema=new mongoose.Schema({
    studentId:{
         type:mongoose.Schema.Types.ObjectId,
            ref:"Student",
            required:true
            
    },
    teacherId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"Teacher",
          required:true
          
    },
    date:{
        type:Date,
            default:Date.now,
    },
    
    status:{
        type:String,
       enum:["Absent","Present","Late"],
       required:true
    },
   remarks:{
       type:String,
       trim:true
    },  
},
    {
        timestamps:true
    }
)
attendanceSchema.index(
    {studentId:1,date:1},//one student can have only single attendance record on one date and single student
    {unique:true}
);


const Attendance=mongoose.models.Attendance || mongoose.model("Attendance",attendanceSchema);
export default Attendance