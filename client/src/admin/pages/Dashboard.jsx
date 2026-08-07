import React from 'react'
import "./Dashboard.css"
import {FaUserGraduate} from "react-icons/fa";
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import api from '../../utils/axios';
const Dashboard = () => {
    const [dashboard,setDashboard]=useState({
        totalStudents:0,
        totalTeachers:0,
        totalParents:0,
        totalAdmins:0,
    })

    const fetchStats=async()=>{
        const {data}=await api.get("/api/admin/dashboard");
        if(data.success){
            setDashboard(data.dashboard);
        }
    }
    useEffect(()=>{
        fetchStats();
    },[])
  return (
    <div className='dashboard'>
        <h1>Dashboard</h1>
        <div className='dashboard-cards'>
            <div className='card'>
                <FaUserGraduate className='card-icon'/>
                <h3>Total Students</h3>
                {dashboard.totalStudents}
            </div>
             <div className='card'>
                <FaChalkboardTeacher className='card-icon'/>
                <h3>Total Teachers</h3>
                {dashboard.totalTeachers}
            </div>
             <div className='card'>
                <FaUser className="card-icon"/>
                <h3>Total Parent</h3>
                {dashboard.totalParents}
            </div>
             <div className='card'>
                <FaMoneyBillWave className='card-icon'/>
                <h3>Total Admin</h3>
                {dashboard.totalAdmins}
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
