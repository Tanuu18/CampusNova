import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import students from "../data/students";
import fees from "../data/fees";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function Feeinfocard({Sidx}) {

      const student = students[Sidx];

    const fee = fees.find((item)=>{
    return item.studentId===student.id;
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
    justifyContent:"space-between",
    alignItems:"center"
}}
>

<Box
sx={{
    display:"flex",
    alignItems:"center",
    gap:1.5
}}
>

<ReceiptLongIcon
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
Fee Details
</Typography>

</Box>



</Box>

<Typography
sx={{
    color:"#D1D5DB",
    fontSize:15,
    mt:1,
    mb:2
}}
>
Complete overview of your academic fee
</Typography>


<Divider
sx={{
    my:3,
    borderColor:"rgba(255,255,255,.12)"
}}
/>


<Grid
  container
  spacing={2}
  rowSpacing={2.5}
  sx={{mt:6}}
>

        <Grid size={{xs:6}}>
          <Typography sx={{
    color:"#94A3B8",
    fontWeight:600,
    fontSize:15
}}>
            Academic Year
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography
sx={{
    fontWeight:700,
    fontSize:18,
    color:"white"
}}
>
            {fee.academicYear}
          </Typography>
        </Grid>

        


        <Grid size={{xs:6}}>
          <Typography sx={{
    color:"#94A3B8",
    fontWeight:600,
    fontSize:15
}}>
            Fee Category
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
         <Typography
sx={{
    fontWeight:700,
    fontSize:18,
    color:"white"
}}
>
            {fee.feeCategory}
          </Typography>
        </Grid>

        


        <Grid size={{xs:6}}>
          <Typography sx={{
    color:"#94A3B8",
    fontWeight:600,
    fontSize:15
}}>
            Total Fees
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography
sx={{
    fontWeight:700,
    fontSize:18,
    color:"white"
}}
>
            ₹{fee.totalFees.toLocaleString()}
          </Typography>
        </Grid>

       


        <Grid size={{xs:6}}>
          <Typography sx={{
    color:"#94A3B8",
    fontWeight:600,
    fontSize:15
}}>
            Paid Amount
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:700,color:"#10B981",fontSize:18}}>
            ₹{fee.paidAmount.toLocaleString()}
          </Typography>
        </Grid>

       


        <Grid size={{xs:6}}>
          <Typography sx={{
    color:"#94A3B8",
    fontWeight:600,
    fontSize:15
}}>
            Due Amount
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography sx={{fontWeight:700,color:"#EF4444",fontSize:18}}>
            ₹{fee.dueAmount.toLocaleString()}
          </Typography>
        </Grid>

        


        <Grid size={{xs:6}}>
          <Typography sx={{
    color:"#94A3B8",
    fontWeight:600,
    fontSize:15
}}>
            Status
          </Typography>
        </Grid>

        <Grid size={{xs:6}}>
          <Typography
            sx={{
              fontWeight:700,
              fontSize:18,
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