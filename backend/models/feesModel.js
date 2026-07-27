import mongoose from "mongoose";

const paymentSchema=new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    paymentDate:{
        type:Date,
        default:Date.now,
    },
    paymentMode:{
        type:String,
        enum:["cash","upi","card","net banking"],
        required:true
    },
    remarks:{
        type:String,
        default:""
    }
}, 

{_id:false} 
);
  
const feeSchema=new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true,
    },
    academicYear:{
        type:String,
        required:true
    },
    className:{
        type:String,
        required:true
    },
    feeCategory:{
        type:String,
         enum:["tution","transport","exam","hostel","library","other"],
         required:true
    },
    totalFees:{
        type:Number,
        required:true
    },
    paidAmount:{
        type:Number,
        default:0
    },
    dueAmount:{
         type:Number,
        required:true
    },
    status:{
        type:String,
        enum:["paid","partial","due"],
        default:"due"
    },
    paymentHistory:[paymentSchema],
},
{
    timestamps:true,
}
);

const Fee  =  mongoose.models.Fee || mongoose.model("Fee",feeSchema);
export default Fee;