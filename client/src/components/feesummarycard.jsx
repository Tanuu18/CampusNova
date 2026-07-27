import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import fees from '../data/fees.js'
import students from '../data/students.js'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import VerifiedIcon from '@mui/icons-material/Verified';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CancelIcon from '@mui/icons-material/Cancel';
import Button from '@mui/material/Button'


function Feesummarycard() {

    let idx=2;
  const student = students[idx];

  const fee = fees.find((item) => {
    return item.studentId === student.id;
});

  return (
    <Grid container spacing={2} sx={{ml:"310px"}}>
        <Grid size={{xs:12, sm:6, md:3}}>
            <Box
               sx={{
                   background:"linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
                   backdropFilter:"blur(18px)",
                    border:"1px solid rgba(255,255,255,0.20)",
                     borderRadius:"25px",
                      p:3,
                     textAlign:"center",
                      minHeight:"140px",
                      mt:"80px"
                   }}>

                    <Typography variant="h5" sx={{color:"white"}}>
                    Total Fees
                   </Typography>

                   <Typography
                   variant="h4"
                   sx={{
                     mt:2,
                     fontWeight:700,
                     color:"white"
                    }}>                  
                     ₹{fee.totalFees.toLocaleString()} &nbsp; <AccountBalanceWalletIcon sx={{
                                        fontSize:40,
                                    color:"#A78BFA"}}/>
                   </Typography>

                   </Box>
        </Grid>
        <Grid size={{xs:12, sm:6, md:3}}>
            <Box
               sx={{
                   background:"linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
                   backdropFilter:"blur(18px)",
                    border:"1px solid rgba(255,255,255,0.20)",
                     borderRadius:"25px",
                      p:3,
                     textAlign:"center",
                      minHeight:"140px",
                      mt:"80px"
                   }}>

                    <Typography variant="h5" sx={{color:"white"}}>
                    Paid 
                   </Typography>

                   <Typography
                   variant="h4"
                   sx={{
                     mt:2,
                     fontWeight:700,
                     color:"white"
                    }}>                  
                     ₹{fee.paidAmount.toLocaleString()} &nbsp;<CheckCircleIcon sx={{
                                                                                  fontSize:40,
                                                                                    color:"#10B981"
                                                                                   }}/>
                   </Typography>
                    
                   </Box>
        </Grid>
        <Grid size={{xs:12, sm:6, md:3}}>
            <Box
               sx={{
                   background:"linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
                   backdropFilter:"blur(18px)",
                    border:"1px solid rgba(255,255,255,0.20)",
                     borderRadius:"25px",
                      p:3,
                     textAlign:"center",
                      minHeight:"140px",
                      mt:"80px"
                   }}>

                    <Typography variant="h5" sx={{color:"white"}}>
                    Due 
                   </Typography>

                   <Typography
                   variant="h4"
                   sx={{
                     mt:2,
                     fontWeight:700,
                     color:"white"
                    }}>                  
                     ₹{fee.dueAmount.toLocaleString()} &nbsp;<WarningAmberIcon sx={{
                                                                            fontSize:40,
                                                                           color:"#F59E0B"
                                                                           }}/>
                   </Typography><br/>
                   <Button variant="contained">
                    Pay Now
                    </Button>
                    
                   </Box>
        </Grid>
        <Grid size={{xs:12, sm:6, md:3}}>
            <Box
               sx={{
                   background:"linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
                   backdropFilter:"blur(18px)",
                    border:"1px solid rgba(255,255,255,0.20)",
                     borderRadius:"25px",
                      p:3,
                     textAlign:"center",
                      minHeight:"140px",
                      mt:"80px"
                   }}>

                    <Typography variant="h5" sx={{color:"white"}}>
                    Status 
                   </Typography>

                   <Typography
                   variant="h4"
                   sx={{
                     mt:2,
                     fontWeight:700,
                     color:"white"
                    }}>                  
                     {fee.status.toLocaleString()} &nbsp; {
fee.status === "Paid" ? (
    <VerifiedIcon sx={{ fontSize:40, color:"#10B981" }} />
) : fee.status === "Partial" ? (
    <PendingActionsIcon sx={{ fontSize:40, color:"#F59E0B" }} />
) : (
    <CancelIconIcon sx={{ fontSize:40, color:"#EF4444" }} />
)
}
                   </Typography>
                    
                   </Box>
        </Grid>
    </Grid>
  )
}

export default Feesummarycard
