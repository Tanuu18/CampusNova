import React from 'react'
import StudentNavbar from '../components/Studentnavbar'
import Studentsidebar from '../components/Studentsidebar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import fees from '../data/fees.js'
import students from '../data/students.js'
import Feesummarycard from '../components/feesummarycard.jsx'
import Feeinfocard from '../components/feeinfocard.jsx'
import Paymenthistorycard from '../components/paymenthistorycard.jsx'

function FeeDetails() {

  
  return (
    <div className='studentattendance'>
        <StudentNavbar/><br/>
   
    <Studentsidebar/>
    <Box >
        <Feesummarycard/>
    </Box>
    <Box>
        <Feeinfocard/>
    </Box>
    <Box>
        <Paymenthistorycard/>
    </Box>
    </div>
  )
}

export default FeeDetails