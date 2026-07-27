import Fee from "../models/feesModel.js";
import Student from "../models/studentModel.js";

export const addFees=async(req,res)=>{
    try {
        const {studentId,className,feeCategory,academicYear,totalFees}=req.body;
         const student=await Student.findById(studentId);
         if(!student){
            return res.status(404).json({success:false,message:"Student not found"});
         }
         if(totalFees<=0){
            return res.status(400).json({
                success:false,message:"total fees must be greater than zero"
            })
         }
         const existingFee=await Fee.findOne({
            studentId,
            academicYear,
            feeCategory
         })
         if(existingFee){
            return res.status(400).json({
                success:false,message:"Fee record already exists"
            })
         }

        const fee=await Fee.create({
            studentId,
            academicYear,
            className,
            feeCategory,
            totalFees,
            paidAmount:0,
            dueAmount:totalFees,
            status:"due"
        });
        return res.status(201).json({
            success:true,message:"Fee record created successfully",fee
        })
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const getAllFees=async(req,res)=>{
    try {
        const fees=await Fee.find()
        .populate({
            path:"studentId",
            populate:{
                path:"userId",
                select:"name email"
            }
        })
        return res.status(200).json({success:true,count:fees.length,fees});
    } catch (error) {
        res.status(500).json({success:false,message:error.message});
    }
}

export const getFeesByStudent=async(req,res)=>{
         try{
            const {studentId}=req.params;
            
        const student= await Student.findById(studentId).populate("userId","name email");
        if(!student){
            return res.status(400).json({success:false,message:"Student not found"})
        }
         
         const fees=await Fee.find({studentId});
        
            
        return res.json({success:true,message:"Student data fetched sucessfully",student,fees})
        }catch(error){
             res.status(500).json({success:false,message:error.message});
        }
}

export const updateFees=async(req,res)=>{
    try{
    const {feeId}=req.params;
    const fee=await Fee.findById(feeId);
    if(!fee){
        return res.status(404).json({success:false,message:"Fees not found"})
    }  
   const {className,academicYear,feeCategory,totalFees}=req.body;
   const updatedDueAmount=totalFees-fee.paidAmount;
   let status;
   if(updatedDueAmount===0){
    status="paid";
   }
   else if(fee.paidAmount===0){
    status="due";
   }else{
    status="partial";
   }
   if(totalFees<fee.paidAmount){
    res.status(200).json({success:true,message:"Total fees cannot be less than paid amount"})
   }
   const updateFee=await Fee.findByIdAndUpdate(
    feeId,
    {
        className,
        academicYear,
        feeCategory,
        totalFees,
        dueAmount:updatedDueAmount,
        status
    },
    {returnDocument:"after"}
   );
   res.status(200).json({success:true,message:"Fee updated successfully",fee:updateFee})
}catch(error){
    res.status(500).json({success:false,message:error.message})
}
}

export const deleteFees=async(req,res)=>{
    try {
    const {feeId}=req.params;
    const fee=await Fee.findById(feeId);
    if(!fee){
        return res.status(404).json({success:false,message:"Fees not found"})
    } 
    await Fee.findByIdAndDelete(feeId);
    return res.status(200).json({success:true,message:"Fee deleted successfully"}) 
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
              }
}

export const payFees=async(req,res)=>{
        try{
            const {feeId}=req.params;
        const {amount,paymentMode,remarks}=req.body;
        const fee=await Fee.findById(feeId);
    if(!fee){
        return res.status(404).json({success:false,message:"Fees record not found"})
    }  
    if(amount<=0){
      return res.status(400).json({success:false,message:"amount must be greater than 0"})
   }
   console.log(amount);
   console.log(fee.dueAmount);
   console.log(fee);
   
   const paymentAmount=Number(amount);
   
   if(paymentAmount>fee.dueAmount){
      return res.status(400).json({success:false,message:"payment amount cannot be greater than due amount"})
   }
   
   const updatedPaidAmount=fee.paidAmount+paymentAmount;
   const updatedDueAmount=fee.totalFees-updatedPaidAmount;
   let status;
   if(updatedDueAmount===0){
    status="paid";
   }
   else if(updatedPaidAmount===0){
    status="due";
   }else{
    status="partial";
   }
   fee.paymentHistory.push({
    amount:paymentAmount,
    paymentMode,
    remarks
   })
   fee.paidAmount=updatedPaidAmount;
   fee.dueAmount=updatedDueAmount;
   fee.status=status;
   await fee.save();
   res.status(200).json({success:true,message:"Payment recorded successfully",fee})
}catch(error){
    res.status(500).json({success:false,message:error.message})
}
}