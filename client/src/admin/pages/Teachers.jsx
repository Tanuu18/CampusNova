
import React from 'react'
import { useState ,useEffect} from 'react'
import api from '../../utils/axios'
import "./Teachers.css"
import TeacherForm from '../components/TeacherForm'
import {Table,TableBody,TableCell,TableContainer,Paper,Card,CardContent,IconButton,
    TableHead,TableRow,TablePagination,Chip,Button,Stack, Typography, Dialog,
    Box, DialogTitle, DialogContent, DialogActions, TextField, MenuItem} from "@mui/material"

const Teachers = () => {
  const [selectedTeacher,setSelectedTeacher]=useState(null);
  const [open,setOpen]=useState(false);
   const [search,setSearch]=useState("");
  const [teachers,setTeachers]=useState([]);
  const [page,setPage]=useState(0);
      const [rowsPerPage,setRowsPerPage]=useState(5);
      const [openDelete,setOpenDelete]=useState(false);
          const [deleteTeacherId,setDeleteTeacherId]=useState(null);
  
  const handleOpen=()=>{
    setOpen(true);
  }
  const handleClose=()=>{
    setOpen(false);
    setSelectedTeacher(null);
  }
  const handleEdit=(teacher)=>{
    setSelectedTeacher(teacher);
    setOpen(true);
  }
  
  const fetchTeachers=async()=>{
    try {
      const response=await api.get("/api/admin/teachers");
      console.log(response.data);
      setTeachers(response.data.teachers);
    } catch (error) {
      console.log(error);
      
    }
   }
   const handleDelete=async(id)=>{
    console.log(id);
    try {
      await api.delete(`/api/admin/delete/teacher/${id}`);
      await fetchTeachers();
    } catch (error) {
      console.log(error);
    }
   }
   const filteredTeachers=teachers.filter((teacher)=>{
        return (
            (teacher.userId?.name||"").toLowerCase().includes(search.toLowerCase())
        )
    })
   useEffect(()=>{
    fetchTeachers();
   },[]);
  return (
    <div className="teachers">
      <div className='teachers-header'>
          <h1>Teachers</h1>
          <Button onClick={handleOpen} variant="contained">Add Teachers</Button>
      </div>
      <div className="teacher-search">
        <input type="text" placeholder='Search Teacher' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      </div>
       <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Designation</th>
            <th>Qualification</th>
            <th>Email</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
         { 
         filteredTeachers
         .slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
         .map((teacher)=>(
            <tr key={teacher._id}>
            <td>{teacher.userId?.name}</td>
            <td>{teacher.employeeId}</td>
            <td>{teacher.designation}</td>
            <td>{teacher.qualification}</td>
            <td>{teacher.userId?.email}</td>
            <td>{teacher.experience}</td>
            
            <td>
              <button onClick={()=>handleEdit(teacher)}>Edit</button>
              <button onClick={()=>{setDeleteTeacherId(teacher.userId._id);setOpenDelete(true);}} >Delete</button>
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
         count={filteredTeachers.length}
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
              handleDelete(deleteTeacherId);
              setOpenDelete(false);
            }}>Delete</Button>
          </DialogActions>
        </Dialog>
      <TeacherForm open={open} handleClose={handleClose} fetchTeachers={fetchTeachers} selectedTeacher={selectedTeacher}/>
    </div>
  )
}

export default Teachers
