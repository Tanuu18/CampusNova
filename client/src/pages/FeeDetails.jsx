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
import Toolbar from '@mui/material/Toolbar'

function FeeDetails({Sidx}) {

  
  return (
    <div className='studentattendance'>
        <StudentNavbar/><br/>
   
    <Studentsidebar/>
    <Toolbar/>
    <Box
sx={{
    ml:{
        xs:2,
        sm:2,
        md:"320px"
    },

    mr:{
        xs:2,
        sm:2,
        md:4
    },

    mt:{
        xs:5,
        md:5
    }
}}
>
    <Feesummarycard Sidx={Sidx}/>
</Box>

<Box
sx={{
    ml:{
        xs:2,
        sm:2,
        md:"320px"
    },

    mr:{
        xs:2,
        sm:2,
        md:4
    },

    mt:4
}}
>
    <Feeinfocard Sidx={Sidx}/>
</Box>

<Box
sx={{
    ml:{
        xs:2,
        sm:2,
        md:"320px"
    },

    mr:{
        xs:2,
        sm:2,
        md:4
    },

    mt:4,
    mb:4
}}
>
    <Paymenthistorycard Sidx={Sidx}/>
</Box>
    </div>
  )
}

export default FeeDetails