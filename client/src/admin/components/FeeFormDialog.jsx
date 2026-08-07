import Dialog from "@mui/material/Dialog";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { TextField,MenuItem, FormControl, InputLabel, Select, Button } from "@mui/material";
import React,{useEffect,useState} from 'react'
import api from "../../utils/axios";
import { useLayoutEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const FeeFormDialog = ({open,onClose,fetchFees,selectedFee}) => {
    const [students,setStudents]=useState([]);
    const [snackbarOpen,setSnackbarOpen]=useState(false);
    const [selectedStudent,setSelectedStudent]=useState(null);
    const [snackbarMessage,setSnackbarMessage]=useState("");
    const [snackbarSeverity,setSnackbarSeverity]=useState("success");
    const [formData,setFormData]=useState({
        studentId:"",
        className:"",
        totalFees:"",
        academicYear:"",
        feeCategory:"",
    });
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    }
    const fetchStudents=async()=>{
       try {
        const {data}=await api.get("/api/admin/students");
        
        console.log(data);
        
        if(data.success){
            setStudents(data.students);
        }
        console.log("students",data.students);
        
       } catch (error) {
        console.log(error);
        
    }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(formData);
        
        try {
            let data;
            if(selectedFee){
                const res=await api.put(`/api/fees/updateFees/${selectedFee._id}`,formData)
                
                
                data=res.data;
            }else{
                 const res=await api.post("/api/fees/add",formData);
                  data=res.data;
            }
           
            if(data.success){
                console.log("before");
                
                await fetchFees();
                console.log("after");
                
                setFormData({
                    studentId:"",
                    className:"",
                    totalFees:"",
                    academicYear:"",
                   feeCategory:"",
                })
                onClose();
                setSnackbarMessage(
                    selectedFee?"Fee updated successfully":"Fee added successfully"
                );
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
                
            }
        } catch (error) {
            console.log(error);
            
            setSnackbarMessage( "Something went wrong")
            setSnackbarSeverity("error");
                setSnackbarOpen(true);
                
            
        }

    }
    useEffect(()=>{
       
        if(selectedFee){
            setFormData({
                studentId:selectedFee.studentId._id,
                className:selectedFee.className,
                totalFees:selectedFee.totalFees,
                academicYear:selectedFee.academicYear,
                feeCategory:selectedFee.feeCategory,
            })
        }
         fetchStudents();
    },[selectedFee]);
  return (
    <>
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Add Student Fee</DialogTitle>
        <DialogContent>
           
        
        <Autocomplete 
        options={students} 
        getOptionLabel={(option)=>`${option.userId?.name}
        (Roll${option.rollNo})-${option.className} ${option.section}`}
        isOptionEqualToValue={(option,value)=>option._id===value?._id}
         value={students.find((student)=>student._id===formData.studentId)||null}
         onChange={(event,value)=>{
            console.log("VALUE=",value);
            setSelectedStudent(value);
            
            
            setFormData({
                ...formData,
                studentId:value?value._id:"",
                className:value?value.className:"",
                academicYear:value?value.academicYear:"",
            });
         }}
         renderInput={(params)=>(
            <TextField 
            {...params}
            label="Search Student"
            margin="normal" fullwidth/>
         )}
         />
         {selectedStudent && (
            <Paper elevation={2} sx={{
                p:2,mt:2,borderRadius:2,backgroundColor:"#f8f9fa",border:"1px solid #e0e0e0"
            }}>
                <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                    Student Details
                </Typography>
                <Typography>
                    <strong>Name: </strong> 
                    {selectedStudent.userId?.name}
                </Typography>
                <Typography>
                    <strong>Roll No: </strong> 
                    {selectedStudent.rollNo}
                </Typography>
                <Typography>
                    <strong>Class: </strong> 
                    {selectedStudent.className}
                </Typography>
                <Typography>
                    <strong>Section: </strong> 
                    {selectedStudent.section}
                </Typography>
            </Paper>
         )}
         <TextField fullWidth margin="normal" label="Fee Category" name="feeCategory" 
         value={formData.feeCategory} onChange={handleChange} select>
            <MenuItem value="tution">Tution</MenuItem>
            <MenuItem value="exam">Exam</MenuItem>
            <MenuItem value="transport">Transport</MenuItem>
         </TextField>
          <TextField fullWidth margin="normal" label="Total Fees" name="totalFees" 
         value={formData.totalFees} type="number" onChange={handleChange}/>
         </DialogContent>
         <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit} disabled={!selectedStudent}>
                Add Fee
            </Button>
         </DialogActions>
    </Dialog>
    <Snackbar open={snackbarOpen} autoHideDuration={3000} 
    onClose={()=>setSnackbarOpen(false)} anchorOrigin={{vertical:"top",horizontal:"right"}}>
        <Alert onClose={()=>setSnackbarOpen(false)} 
        severity={snackbarSeverity} variant="filled" sx={{width:"100%"}}>{snackbarMessage}</Alert>
    </Snackbar>
    </>
  )
}
export default FeeFormDialog 
