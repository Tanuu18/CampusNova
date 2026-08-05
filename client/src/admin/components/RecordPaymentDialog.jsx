import React, { useState } from 'react'
import Dialog from "@mui/material/Dialog";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { TextField,MenuItem } from '@mui/material';
import api from '../../utils/axios';

const RecordPaymentDialog = ({open,onClose,fee,fetchFees}) => {
    const [amount,setAmount]=useState("");
    const [paymentMethod,setPaymentMethod]=useState("Cash");
    const handleRecordPayment=async()=>{
        try {
            const {data}=await api.post(`/api/fees/pay/${fee._id}`,
                {amount,paymentMode:paymentMethod,remarks:"",});
            console.log(data);
            await fetchFees();
            onClose();
        } catch (error) {
            console.log(error.response?.data);
            
        }
    }
  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Record Payment</DialogTitle>
        <DialogContent>
            <p>Student:{fee?.studentId?.userId?.name}</p>
            <p>Total Fee: {fee?.totalFees}</p>
            <p>Paid: {fee?.paidAmount}</p>
            <p>Due:{fee?.dueAmount}</p>
        </DialogContent>  
        <TextField label="Amount" fullWidth margin="normal" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <TextField select label="Payment Method" fullWidth margin="normal"
        onChange={(e)=>setPaymentMethod(e.target.value)} value={paymentMethod} defaultValue="Cash">
            <MenuItem value="cash">cash</MenuItem>
            <MenuItem value="upi">upi</MenuItem>
            <MenuItem value="card">card</MenuItem> 
            <MenuItem value="bank transfer">net banking</MenuItem> 
        </TextField>            
        <DialogActions>                
            <Button onClick={onClose}>cancel</Button>   
            <Button variant='contained' color="success" onClick={handleRecordPayment}>Record</Button>
        </DialogActions>
    </Dialog>
  )
}

export default RecordPaymentDialog
