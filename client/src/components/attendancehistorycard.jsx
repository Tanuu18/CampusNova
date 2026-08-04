import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import attendance from "../data/attendance";
import students from "../data/students";

import React,{useState} from 'react'
import ListItemButton from "@mui/material/ListItemButton";
import HistoryIcon from "@mui/icons-material/History";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function Attendancehistorycard({Sidx}) {

    const [open, setOpen] = useState(false);

    const student = students[Sidx];

       const studentAttendance = attendance.filter((item)=>{
    return item.studentId === student.id;
     });

   return(

    <>
       <Box sx={{
        height:"500px",
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
Attendance History
</Typography>

</Box>

<Button
endIcon={<ArrowOutwardIcon />}
sx={{
    color:"#C084FC",
    textTransform:"none",
    fontWeight:600
}} onClick={()=>setOpen(true)}
>
View All
</Button>

</Box>

<Typography
sx={{
    color:"#D1D5DB",
    fontSize:15,
    mt:1,
    mb:2
}}
>
Your recent attendance records
</Typography>

<Divider
sx={{
    mb:2,
    borderColor:"rgba(255,255,255,.12)"
}}
/>

        <List sx={{
    py:2,
    px:2,
    borderRadius:"16px",

    transition:"all .3s",

    
    mt: 1,
    height: "320px",
    overflowY: "auto",

    "&::-webkit-scrollbar": {
      width: "6px",
    },

    "&::-webkit-scrollbar-thumb": {
      background: "#8B5CF6",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },

    "&:hover":{
        bgcolor:"rgba(255,255,255,.08)",
        transform:"translateY(-2px)"
    }

}}>
           { studentAttendance.map((item)=>{
              return  <ListItem>
                  
                    <ListItemIcon><CalendarMonthIcon/></ListItemIcon>
                    <Box sx={{flex:1}}>

<Typography
sx={{
    color:"white",
    fontWeight:600,
    fontSize:18
}}
>
{item.date}
</Typography>

<Typography
sx={{
    color:item.status==="Present" ? "#4ADE80" : "#F87171",
    fontSize:15,
    mt:.5
}}
>
{item.status}
</Typography>

</Box>
                    <ListItemButton>{item.status==="Present"
 ? <CheckCircleIcon sx={{color:"#4ADE80",fontSize:30}}/>
 : <CancelIcon sx={{color:"#F87171",fontSize:30}}/>
}</ListItemButton>
                    
                </ListItem>
            })}
        </List>


       </Box>

       <Dialog
  open={open}
  onClose={() => setOpen(false)}
  maxWidth="md"
  fullWidth
>
  <DialogTitle
    sx={{
      fontSize: "28px",
      fontWeight: 700,
      color: "#8B5CF6"
    }}
  >
    📜 Attendance History
  </DialogTitle>

  <DialogContent>

    <List>

      {studentAttendance.map((item) => (

        <ListItem key={item.id} disablePadding>

          <ListItemButton
            sx={{
              py: 2,
              borderRadius: "16px",

              "&:hover": {
                bgcolor: "rgba(139,92,246,.08)"
              }
            }}
          >

            <ListItemIcon>
              <CalendarMonthIcon sx={{ color: "#C084FC" }} />
            </ListItemIcon>

            <Box sx={{ flex: 1 }}>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 18
                }}
              >
                {item.date}
              </Typography>

              <Typography
                sx={{
                  color:
                    item.status === "Present"
                      ? "#22C55E"
                      : "#EF4444"
                }}
              >
                {item.status}
              </Typography>

            </Box>

            {item.status === "Present"
              ? (
                <CheckCircleIcon
                  sx={{
                    color: "#22C55E",
                    fontSize: 28
                  }}
                />
              )
              : (
                <CancelIcon
                  sx={{
                    color: "#EF4444",
                    fontSize: 28
                  }}
                />
              )}

          </ListItemButton>

        </ListItem>

      ))}

    </List>

  </DialogContent>

  <DialogActions>

    <Button
      variant="contained"
      onClick={() => setOpen(false)}
      sx={{
        borderRadius: "12px"
      }}
    >
      Close
    </Button>

  </DialogActions>

</Dialog>

</>
   );
}

export default Attendancehistorycard