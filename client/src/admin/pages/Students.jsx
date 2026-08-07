import React from 'react'
import { useState,useEffect } from 'react';
import "./Students.css"
import StudentForm from '../components/StudentForm';
import api from '../../utils/axios';
import {Table,TableBody,TableCell,TableContainer,Paper,Card,CardContent,IconButton,
    TableHead,TableRow,TablePagination,Chip,Button,Stack, Typography, Dialog,
    Box, DialogTitle, DialogContent, DialogActions, TextField, MenuItem} from "@mui/material"
const Students = () => {
  const [open,setOpen]=useState(false);
  const [students,setStudents]=useState([]);
  const [search,setSearch]=useState("");
  const [selectedStudent,setSelectedStudent]=useState(null);
  const [page,setPage]=useState(0);
        const [rowsPerPage,setRowsPerPage]=useState(5);
           const [openDelete,setOpenDelete]=useState(false);
                  const [deleteStudentId,setDeleteStudentId]=useState(null);
  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
  } 
  const handleEdit=(student)=>{
    setSelectedStudent(student);
    setOpen(true)
  }
   const fetchStudents=async()=>{
    try {
      const response=await api.get("/api/admin/students");
      console.log(response.data);
      console.log(response.data.students);
      setStudents(response.data.students);
    } catch (error) {
      console.log(error);
      
    }
   }
    const filteredStudents=students.filter((student)=>{
        return (
            (student.userId?.name||"").toLowerCase().includes(search.toLowerCase())
        )
    })
   const handleDelete=async(id)=>{
   
    try {
      await api.delete(`/api/admin/delete/student/${id}`);
      await fetchStudents();
    } catch (error) {
      console.log(error);
      
    }
   }
   useEffect(()=>{
    fetchStudents();
   },[]);
  return (
    <div className='students'>
      <div className="students-header">
        <h1>Students</h1>
        <button onClick={handleOpen}>Add Student</button>
      </div>
      <div className="student-search">
        <input type="text" placeholder='search student' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </div>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Section</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         { 
         filteredStudents
         .slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
         .map((student)=>(
            <tr key={student._id}>
            <td>{student.userId?.name}</td>
            <td>{student.rollNo}</td>
            <td>{student.className}</td>
            <td>{student.section}</td>
            <td>{student.userId?.email}</td>
            <td>
              <button onClick={()=>handleEdit(student)}>Edit</button>
              <button onClick={()=>{setDeleteStudentId(student.userId._id);
                setOpenDelete(true);
              }}>Delete</button>
            </td>
          </tr>
          ))
          }  
        </tbody>
      </table>
       <TablePagination 
            sx={{
            color:"white",
            "& .MuiTablePagination-selectLabel":{
              color:"white",
            },
            "& .MuiTablePagination-displayRows":{
              color:"white",
            },
            "& .MuiSvgIcon-root":{
              color:"white",
            },
            "& .MuiIconButton-root":{
              color:"white",
            },
          }}
           rowsPerPageOptions={[5,10,25]}
               component="div"
               count={filteredStudents.length}
               page={page}
               onPageChange={(event,newPage)=>setPage(newPage)}
               rowsPerPage={rowsPerPage}
               onRowsPerPageChange={(event)=>{setRowsPerPage(parseInt(event.target.value,10));
                setPage(0);
               }}
               />
               <Dialog 
    open={openDelete} 
    onClose={()=>setOpenDelete(false)}>
          <DialogTitle>Delete Teacher</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this  record?
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setOpenDelete(false)}>Cancel</Button>
            <Button color="error" variant="contained" onClick={()=>{
              handleDelete(deleteStudentId);
              setOpenDelete(false);
            }}>Delete</Button>
          </DialogActions>
        </Dialog>
       <StudentForm open={open} handleClose={handleClose} fetchStudents={fetchStudents} selectedStudent={selectedStudent}/>
    </div>
  )
}
export default Students
