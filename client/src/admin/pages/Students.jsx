import React from 'react'
import { useState,useEffect } from 'react';
import "./Students.css"
import StudentForm from '../components/StudentForm';
import api from '../../utils/axios';

const Students = () => {
  const [open,setOpen]=useState(false);
  const [students,setStudents]=useState([]);
  const [selectedStudent,setSelectedStudent]=useState(null);
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
      setStudents(response.data.students);
    } catch (error) {
      console.log(error);
      
    }
   }
   const handleDelete=async(id)=>{
    const confirmDelete=window.confirm("Are you sure you want to delete this student?");
    if(!confirmDelete) return;
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
        <input type="text" placeholder='search student'/>
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
         students.map((student)=>(
            <tr key={student._id}>
            <td>{student.userId?.name}</td>
            <td>{student.rollNo}</td>
            <td>{student.className}</td>
            <td>{student.section}</td>
            <td>{student.userId?.email}</td>
            <td>
              <button onClick={()=>handleEdit(student)}>Edit</button>
              <button onClick={()=>handleDelete(student.userId._id)}>Delete</button>
            </td>
          </tr>
          ))
          }  
        </tbody>
      </table>
       <StudentForm open={open} handleClose={handleClose} fetchStudents={fetchStudents} selectedStudent={selectedStudent}/>
    </div>
  )
}

export default Students
