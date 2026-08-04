import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import students from "../data/students";
import fees from "../data/fees";
import HistoryIcon from "@mui/icons-material/History";
import Divider from "@mui/material/Divider";

import React from 'react'

function Paymenthistorycard({Sidx}) {

  

const student = students[Sidx];

const fee = fees.find((item) => {
    return item.studentId === student.id;
});


  return (
     <Box
   sx={{
    p: {
    xs: 3,
    md: 4
},
    borderRadius:"30px",

    background:
    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",

    backdropFilter:"blur(18px)",

    border:"1px solid rgba(255,255,255,0.20)",

    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",

    color:"white",

    borderLeft: "8px solid #8B5CF6",


    transition: "all 0.3s ease",

    minHeight:"80px",

"&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 30px 60px rgba(0,0,0,.45)",
    border:"1px solid rgba(139,92,246,.6)",
    borderLeft: "10px solid #8B5CF6",
}
}}>

        <Box
sx={{
    display:"flex",
    alignItems:"center",
    gap:1.5
}}
>

<HistoryIcon
sx={{
    color:"#C084FC",
    fontSize:32
}}
/>

<Typography
sx={{
    fontWeight:700,
    color:"white",
    fontSize:{
        xs:"20px",
        md:"30px"
    }
}}
>
Payment History
</Typography>

</Box>

<Typography
sx={{
    color:"#D1D5DB",
    fontSize:15,
    mt:1,
    mb:2,
    display:"flex",
    alignItems:"start"
}}
>
Recent fee payment transactions
</Typography>

<Divider
sx={{
    mb:3,
    borderColor:"rgba(255,255,255,.12)"
}}
/>

        <TableContainer component={Paper} elevation={0}>
          <Table sx={{backgroundColor:"#F1F5F9"}}> 
            <TableHead sx={{
    backgroundColor:"wheat"
}}>

                 <TableRow>
 
                     <TableCell>Date</TableCell>

                     <TableCell>Amount</TableCell>

                      <TableCell>Mode</TableCell>

                     <TableCell>Remark</TableCell>

                </TableRow>

            </TableHead>
            <TableBody>

{fee.paymentHistory.map((payment)=>{
  return <TableRow>

    <TableCell>{payment.date}</TableCell>
    <TableCell>₹{payment.amount.toLocaleString()}</TableCell>
    <TableCell>{payment.mode}</TableCell>
    <TableCell>{payment.remark}</TableCell>

  </TableRow>
})
}

</TableBody>

          </Table>
        </TableContainer>
</Box>



  )
}

export default Paymenthistorycard