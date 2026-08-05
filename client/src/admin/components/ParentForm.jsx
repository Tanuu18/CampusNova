import React from 'react'
import api from '../../utils/axios';
import { useEffect,useState } from 'react';
import { Autocomplete,TextField } from '@mui/material';
const ParentForm = () => {
    const [students,setStudents]=useState([]);
    const [selectedStudents,setSelectedStudents]=useState([]);

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
        console.log("fetch called");
        fetchStudents();
        console.log(students);
    },[]);
  return (
    <>
           
        <Autocomplete multiple 
    options={students} 
    value={selectedStudents}
    getOptionLabel={(option)=>option.userId?.name||""}
    isOptionEqualToValue={(option,value)=>option._id===value._id}
     onChange={(event,newValue)=>{
        setSelectedStudents(newValue);
    }}
    renderInput={(params)=>(
        <TextField{...params} label="Select Students" 
        placeholder='Choose Students'/>
    )}
      />
         

    
    </>
  )
}

export default ParentForm
