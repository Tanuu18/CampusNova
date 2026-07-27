import React from 'react'
import StudentNavbar from '../components/Studentnavbar'
import Studentsidebar from '../components/Studentsidebar'


function InProgress() {
  return (
    <div>
      <StudentNavbar/><br/>
   
    <Studentsidebar/>
      <h1 style={{textAlign:"center",marginTop:"300px",marginLeft:"250px"}}>In Progress...</h1>
    </div>
  );
}

export default InProgress