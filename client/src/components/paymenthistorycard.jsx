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

import React from 'react'

function Paymenthistorycard() {

  let idx = 0;

const student = students[idx];

const fee = fees.find((item) => {
    return item.studentId === student.id;
});


  return (
    <Box
      sx={{
   mt:4,
    p:4,
    borderRadius:"30px",
    background:"linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
     backdropFilter:"blur(18px)",
     border:"1px solid rgba(255,255,255,0.20)",
     borderRadius:"25px",
      
     textAlign:"center",
      minHeight:"140px",
     
    ml:"450px",
    width:"900px"
}} >

        <Typography
         variant="h4"
        sx={{
    fontWeight:700,
    mb:3,
    color:"white"
 }}>
Payment History
        </Typography>

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