import React, { useState,useEffect } from 'react'
import "./StudentForm.css"
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


const StudentForm = ({open,handleClose,fetchStudents,selectedStudent}) => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        rollNo:"",
        className:"",
        section:"",
        academicYear:""
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
            if(selectedStudent){
                await api.put(`/api/admin/student/${selectedStudent.userId._id}`,formData)
                console.log("updated");
                await fetchStudents();
            }else{
                await api.post("/api/admin/student",formData);
            }
            
            await fetchStudents();
        } catch (error) {
            console.log(error);
            
        }
        handleClose();
       setFormData({ name:"",
        email:"",
        password:"",
        phone:"",
        rollNo:"",
        className:"",
        section:"",
        academicYear:""})
    }
    useEffect(()=>{
        if(selectedStudent){
            setFormData({
                name:selectedStudent.userId?.name || "",
                email:selectedStudent.userId?.email || "",
                password:"",
                phone:selectedStudent.userId?.phone || "",
                rollNo:selectedStudent.rollNo || "",
                className:selectedStudent.className || "",
                section:selectedStudent.section || "",
                academicYear:selectedStudent.academicYear || ""
            });
        }
    },[selectedStudent]);
  return (
    
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <form onSubmit={handleSubmit}>
        <DialogTitle>{selectedStudent?"Edit":"Add Student"}</DialogTitle>
        <DialogContent>
            <TextField label="Student Name"
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
            <TextField label="Contact"
             name="phone" 
             value={formData.phone} 
             onChange={handleChange}
             slotProps={{
                input:{
                    startAdornment:(
                    <InputAdornment position='start'>
                        <PhoneIcon/>
                    </InputAdornment>
                )
                }
             }}
               fullWidth margin="normal"/>
            <TextField label="Roll Number" name="rollNo" 
            value={formData.rollNo} onChange={handleChange} 
            fullWidth margin="normal"/>
            <FormControl fullWidth margin="normal">
            <InputLabel>Class</InputLabel>
            <Select label="Class" name="className"
             value={formData.className} onChange={handleChange} > 
                <MenuItem value="6th">6th</MenuItem>
                <MenuItem value="7th">7th</MenuItem>
                <MenuItem value="8th">8th</MenuItem>
                <MenuItem value="9th">9th</MenuItem>
                <MenuItem value="10th">10th</MenuItem>
                <MenuItem value="11th">11th</MenuItem>
                <MenuItem value="12th">12th</MenuItem>
            </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
                <InputLabel>Section</InputLabel>
                 <Select label="Section" name="section" value={formData.section} onChange={handleChange}>
                <MenuItem value="A">A</MenuItem>
                <MenuItem value="B">B</MenuItem>
                <MenuItem value="C">C</MenuItem>
                <MenuItem value="D">D</MenuItem>
            </Select>
            </FormControl>
            <FormControl fullWidth margin="normal" >
                <InputLabel>Academic Year</InputLabel>
                 <Select label="Academic Year" name="academicYear"
                  value={formData.academicYear}   onChange={handleChange}>
                <MenuItem value="2025-26">2025-26</MenuItem>
                <MenuItem value="2026-27">2026-27</MenuItem>
                <MenuItem value="2027-28">2027-28</MenuItem>
                
            </Select>
            </FormControl>
           
        </DialogContent>
        <DialogActions>
            <Button type="submit" variant="contained">{selectedStudent?"Edit":"Submit"}</Button>
            <Button  color="error"  onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </form>
    </Dialog> 
    
  )
}

export default StudentForm 
