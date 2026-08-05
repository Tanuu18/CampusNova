import React from 'react'
import "./Dashboard.css"
import {FaUserGraduate} from "react-icons/fa";
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaMoneyBillWave } from 'react-icons/fa';
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <h1>Dashboard</h1>
        <div className='dashboard-cards'>
            <div className='card'>
                <FaUserGraduate className='card-icon'/>
                <h3>Total Students</h3>
                <p>240</p>
            </div>
             <div className='card'>
                <FaChalkboardTeacher className='card-icon'/>
                <h3>Total Teachers</h3>
                <p>30</p>
            </div>
             <div className='card'>
                <FaUser className="card-icon"/>
                <h3>Total Parent</h3>
                <p>230</p>
            </div>
             <div className='card'>
                <FaMoneyBillWave className='card-icon'/>
                <h3>Total Fees</h3>
                <p>2,40,000</p>
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
