import React from 'react'
import  { useState,useEffect } from 'react'
import "./TeacherForm.css"
import api from '../../utils/axios';
import Dialog from "@mui/material/Dialog";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from   "@mui/icons-material/Email";
import LockIcon from   "@mui/icons-material/Lock";
import PhoneIcon from   "@mui/icons-material/Phone";
import BadgeIcon from   "@mui/icons-material/Badge";
import SchoolIcon from   "@mui/icons-material/School";
import CalendarMonthIcon from   "@mui/icons-material/CalendarMonth";
const TeacherForm = ({open,handleClose,selectedTeacher,fetchTeachers}) => {
    const [formData,setFormData]=useState({
            name:"",
            email:"",
            password:"",
            phone:"",
            address:"",
            employeeId:"",
            designation:"",
            qualification:"",
            experience:"",
        })
        const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            if(selectedTeacher){
                console.log(selectedTeacher.userId._id);
                console.log(formData);
                
                await api.put(`/api/admin/teacher/${selectedTeacher.userId._id}`,formData)
                console.log("updated");
                await fetchTeachers();   
            }else{
                console.log(formData);
                
                await api.post("/api/admin/teacher",formData);
            }
            
            await fetchTeachers();
        } catch (error) {
            console.log(error);
            
        }
        handleClose();
       setFormData({ 
            name:"",
            email:"",
            password:"",
            phone:"",
            address:"",
            employeeId:"",
            designation:"",
            qualification:"",
            experience:"",
        })
    }
    useEffect(()=>{
            if(selectedTeacher){
                setFormData({
                    name:selectedTeacher.userId?.name || "",
                    email:selectedTeacher.userId?.email || "",
                    password:"",
                    phone:selectedTeacher.userId?.phone || "",
                    address:selectedTeacher.address || "",
                    employeeId:selectedTeacher.employeeId || "",
                    designation:selectedTeacher.designation || "",
                    qualification:selectedTeacher.qualification || "",
                    experience:selectedTeacher.experience || ""
                });
            }
        },[selectedTeacher]);
  return (
   <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>{selectedTeacher?"Edit":"Add Teacher"}</DialogTitle>
        <DialogContent>
            <TextField label="Teacher Name"
            name="name" value={formData.name}
             onChange={handleChange} 
             slotProps={{
                input:{
                    startAdornment:(
                    <InputAdornment position='start'>
                        <PersonIcon/>
                    </InputAdornment>
                )
                }
             }}
             fullWidth margin="normal"/>
            <TextField label="Email"
            name="email" value={formData.email} 
            onChange={handleChange} 
            slotProps={{
                input:{
                    startAdornment:(
                    <InputAdornment position='start'>
                        <EmailIcon/>
                    </InputAdornment>
                )
                }
             }}
            type="email" fullWidth margin="normal"/>
            <TextField label="Password" 
            name="password" value={formData.password}
             onChange={handleChange} 
             slotProps={{
                input:{
                    startAdornment:(
                    <InputAdornment position='start'>
                        <LockIcon/>
                    </InputAdornment>
                )
                }
             }}
             type="password" fullWidth margin="normal"/>
            <TextField label="Employee ID"
             name="employeeId" 
             value={formData.employeeId} 
             onChange={handleChange}
               fullWidth margin="normal"/>
               <TextField label="Phone" name="phone" 
            value={formData.phone} onChange={handleChange} 
            fullWidth margin="normal"/>
            <TextField label="Designation" name="designation" 
            value={formData.designation} onChange={handleChange} 
            fullWidth margin="normal"/>
            <TextField label="Qualification" name="qualification" 
            value={formData.qualification} onChange={handleChange} 
            fullWidth margin="normal"/>
            <TextField label="Experience" name="experience" 
            value={formData.experience} onChange={handleChange} 
            fullWidth margin="normal"/>
            <TextField label="Address" name="address" 
            value={formData.address} onChange={handleChange} 
            fullWidth margin="normal"/>
        </DialogContent> 
        <DialogActions> 
            <Button type="submit" variant="contained">{selectedTeacher?"Edit":"Submit"}</Button>
            <Button  color="error" onClick={handleClose}>Cancel</Button>
        </DialogActions> 
        </form>
   </Dialog>
  )
}

export default TeacherForm
