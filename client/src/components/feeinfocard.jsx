import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import students from "../data/students";
import fees from "../data/fees";

function Feeinfocard() {

      const student = students[0];

    const fee = fees.find((item)=>{
    return item.studentId===student.id;
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
}}>
  
  <Typography
              variant="h4"
              sx={{
              fontWeight:700,
              color:"white"
             }}>
Fee Details
</Typography>

<Grid container spacing={3} sx={{mt:6}}>

        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:600,color:"white"}}>
            Academic Year
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:700}}>
            {fee.academicYear}
          </Typography>
        </Grid>


        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:600,color:"white"}}>
            Fee Category
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:700}}>
            {fee.feeCategory}
          </Typography>
        </Grid>


        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:600,color:"white"}}>
            Total Fees
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:700}}>
            ₹{fee.totalFees.toLocaleString()}
          </Typography>
        </Grid>


        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:600,color:"white"}}>
            Paid Amount
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:700,color:"#10B981"}}>
            ₹{fee.paidAmount.toLocaleString()}
          </Typography>
        </Grid>


        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:600,color:"white"}}>
            Due Amount
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:700,color:"#EF4444"}}>
            ₹{fee.dueAmount.toLocaleString()}
          </Typography>
        </Grid>


        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:600,color:"white"}}>
            Status
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography
            sx={{
              fontWeight:700,
              color:
                fee.status==="Paid"
                ? "#10B981"
                : fee.status==="Partial"
                ? "#F59E0B"
                : "#EF4444"
            }}
          >
            {fee.status}
          </Typography>
        </Grid>

      </Grid>


</Box>
  );
}

export default Feeinfocard