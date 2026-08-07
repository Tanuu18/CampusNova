import React from 'react'
import api from '../../utils/axios';
import { useEffect,useState } from 'react';
import { Autocomplete,TextField,Button } from '@mui/material';
import Dialog from "@mui/material/Dialog";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useLayoutEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const ParentForm = ({open,onClose,fetchParents,selectedParent}) => {
    const [students,setStudents]=useState([]);
    const [selectedStudents,setSelectedStudents]=useState([]);
    const [page,setPage]=useState(0);
      const [rowsPerPage,setRowsPerPage]=useState(10);
        const [snackbarOpen,setSnackbarOpen]=useState(false);
        const [snackbarMessage,setSnackbarMessage]=useState("");
        const [snackbarSeverity,setSnackbarSeverity]=useState("success");
        const [formData,setFormData]=useState({ 
            name:"",
            email:"",
            password:"",
            phone:"",
            address:"",
            occupation:"",
            studentIds:[],
        });
        const handleChange=(e)=>{
            setFormData({
                ...formData,
                [e.target.name]:e.target.value,
            });
        }
     const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(selectedStudents);
       
        console.log(formData);
          try {
            const payload={
                ...formData,studentIds:selectedStudents.map(student=>student._id)
            };
            console.log(payload);
            
            let data;
            if(selectedParent){
                const res=await api.put(`/api/admin/parent/${selectedParent._id}`,payload)
                data=res.data;
            }else{
                 const res=await api.post("/api/admin/parent",payload);
                  data=res.data;
            }
           
            if(data.success){
                await fetchParents();
                setFormData({
                    name:"",
                    email:"",
                    password:"",
                    phone:"",
                    address:"",
                    occupation:"",
                    studentIds:[],
                });
                setSelectedStudents([]);
                onClose();
                setSnackbarMessage(
                    selectedParent?"Parent updated successfully":"Parent added successfully"
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
        if(selectedParent){
            setFormData({
                name:selectedParent.userId?.name || "",
                email:selectedParent.userId?.email||"",
                password:selectedParent.userId?.password||"",
                phone:selectedParent.userId?.phone||"",
                address:selectedParent.address,
                occupation:selectedParent.occupation||"",
                studentIds:selectedParent.studentIds||[],
            });
            setSelectedStudents(selectedParent.studentIds||[]);
        }else{
            setFormData({
                    name:"",
                    email:"",
                    password:"",
                    phone:"",
                    address:"",
                    occupation:"",
                    studentIds:[],
            });
            setSelectedStudents([]);
        }
         fetchStudents();
    },[selectedParent]);
    const fetchStudents=async()=>{
        try {
            const {data}=await api.get("/api/admin/students");
            console.log(data);
            
            if(data.success){
                setStudents(data.students);
            }
            console.log(data.students);
            
        } catch (error) {
            console.log(error);
             console.log(error.response?.data);
        }
    }
    useEffect(()=>{
        fetchStudents();
        
    },[]);
  return (
    <>
     <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
                   <DialogTitle>{selectedParent?"Update Parent":"Add Parent"}</DialogTitle>
                   <DialogContent>
                      
        <Autocomplete multiple 
        sx={{
            backgroundColor:"white",  
            borderRadius:1,
        }}

    options={students} 
    value={selectedStudents}
    getOptionLabel={(option)=>`${option.userId?.name}-${option.className}-${option.rollNo}-${option.section}`||""}
    filterOptions={(options,state)=>{
       
        return options.filter((student)=>{
            return (
                (student.userId?.name||"").toLowerCase().includes(state.inputValue.toLowerCase()) || 
               String(student.rollNo||"").toLowerCase().includes(state.inputValue.toLowerCase()) || 
                student.className?.toLowerCase().includes(state.inputValue.toLowerCase()) || 
                student.section?.toLowerCase().includes(state.inputValue.toLowerCase()) 
            );
        });
    }}
    isOptionEqualToValue={(option,value)=>option._id===value._id}
     onChange={(event,newValue)=>{
        setSelectedStudents(newValue);
    }}
    renderInput={(params)=>(
        <TextField{...params} label="Select Students" 
        placeholder='Choose Students'/>
    )}
      />
         <TextField fullWidth margin="normal" label="Name" name="name" 
         value={formData.name} onChange={handleChange}/>
         <TextField fullWidth margin="normal" label="Email" name="email" 
         value={formData.email} onChange={handleChange}/>
         <TextField fullWidth margin="normal" label="Password" name="password" 
         value={formData.password} onChange={handleChange}/>
         <TextField fullWidth margin="normal" label="Phone" name="phone" 
         value={formData.phone} onChange={handleChange}/>
         <TextField fullWidth margin="normal" label="Address" name="address" 
         value={formData.address} onChange={handleChange}/>
         <TextField fullWidth margin="normal" label="Occupation" name="occupation" 
         value={formData.occupation} onChange={handleChange}/>
         </DialogContent>
         <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit} >{selectedParent?"Update Parent":"Save Parent"}
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

export default ParentForm
