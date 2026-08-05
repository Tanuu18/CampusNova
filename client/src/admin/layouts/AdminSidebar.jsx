import React from 'react'
import "./AdminSidebar.css"
import {MdDashboard} from "react-icons/md";
import {FaUserGraduate} from "react-icons/fa";
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaClipboardCheck } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';
import {IoSettingsSharp} from "react-icons/io5";
import { NavLink } from 'react-router-dom';
function AdminSidebar() {
  return (
    <div className="admin-sidebar">
       <h2>CampusNova</h2>
       <ul>
        <li>
        <NavLink to="/admin" end className={({isActive})=>(isActive?"active":"")}>
        
            <MdDashboard/>
           <span>Dashboard</span>
            
            </NavLink>
            </li>
        <li>
            <NavLink to="/admin/students"  className={({isActive})=>(isActive?"active":"")}>
            <FaUserGraduate/>
          <span> Students</span> 
          </NavLink>
            </li>
        <li>
             <NavLink to="/admin/teachers"  className={({isActive})=>(isActive?"active":"")}>
            <FaChalkboardTeacher/>
           <span> Teachers</span>
           </NavLink>
            </li>
        <li>
             <NavLink to="/admin/parents"  className={({isActive})=>(isActive?"active":"")}>
            <FaUser/>
            <span>Parents</span>
            </NavLink>
            </li>

        <li>
            <NavLink to="/admin/attendance"  className={({isActive})=>(isActive?"active":"")}>
            <FaClipboardCheck/>
            <span>Attendance</span>
            </NavLink>
            </li>
        <li>
            <NavLink to="/admin/fees"  className={({isActive})=>(isActive?"active":"")}>
            <FaMoneyBillWave/>
            <span>Fees</span>
            </NavLink>
            </li>
        <li>
            <NavLink to="/admin/setting"  className={({isActive})=>(isActive?"active":"")}>
            <IoSettingsSharp/>
           <span> Settings</span>
           </NavLink>
            </li>
       </ul>
    </div>
  )
}

export default AdminSidebar
