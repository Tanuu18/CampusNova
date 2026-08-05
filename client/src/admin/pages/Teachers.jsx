import Button from '@mui/material/Button'
import React from 'react'
import { useState ,useEffect} from 'react'
import api from '../../utils/axios'
import "./Teachers.css"
import TeacherForm from '../components/TeacherForm'
const Teachers = () => {
  const [selectedTeacher,setSelectedTeacher]=useState(null);
  const [open,setOpen]=useState(false);
  const [teachers,setTeachers]=useState([]);
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
    
    const confirmDelete=window.confirm("Are you sure you want to delete this teacher?");
    if(!confirmDelete) return;
    try {
      await api.delete(`/api/admin/delete/teacher/${id}`);
      await fetchTeachers();
    } catch (error) {
      console.log(error);
    }
   }
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
        <input type="text" placeholder='search student'/>
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
         teachers.map((teacher)=>(
            <tr key={teacher._id}>
            <td>{teacher.userId?.name}</td>
            <td>{teacher.employeeId}</td>
            <td>{teacher.designation}</td>
            <td>{teacher.qualification}</td>
            <td>{teacher.userId?.email}</td>
            <td>{teacher.experience}</td>
            
            <td>
              <button onClick={()=>handleEdit(teacher)}>Edit</button>
              <button onClick={()=>teacher.userId && handleDelete(teacher.userId._id)} >Delete</button>
            </td>
          </tr>
          ))
          }  
        </tbody>
      </table>
      <TeacherForm open={open} handleClose={handleClose} fetchTeachers={fetchTeachers} selectedTeacher={selectedTeacher}/>
    </div>
  )
}

export default Teachers
