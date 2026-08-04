import React,{useState} from 'react'
import Box from '@mui/material/Box'
import timetable from '../data/timetable.js'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import SubjectIcon from '@mui/icons-material/Subject';
import AccessTimeIcon from'@mui/icons-material/AccessTime';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function TimeTable() {

  const [open, setOpen] = useState(false);

  return (
    <div className='upcomingeventcard' > 
        <Box sx={{
    height: "500px",
    p: {
    xs: 3,
    md: 4
},
    borderRadius:"40px",

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
    borderLeft: "4px solid #8B5CF6",
}
}} >

          

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

<ScheduleIcon
sx={{
    color:"#C084FC",
    fontSize:32
}}
/>

<Typography
sx={{
    fontWeight:600,
    color:"white",
    fontSize:{
        xs:"20px",
        md:"30px"
    }
}}
>
Today's Timetable
</Typography>

</Box>

<Button
endIcon={<ArrowOutwardIcon />}
sx={{
    color:"#C084FC",
    textTransform:"none",
    fontWeight:600,

    "&:hover":{
        bgcolor:"rgba(255,255,255,.08)",
        transform:"translateY(-2px)"
    }
}} onClick={() => setOpen(true)}
>
View Full
</Button>

</Box>

<Typography
sx={{
    color:"#D1D5DB",
    fontSize:"15px",
    mb:2
}}
>
Your schedule for today
</Typography>

<Divider
sx={{
    mb:2,
    borderColor:"rgba(255,255,255,.12)"
}}
/>
    <List sx={{
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
  }}>
    { timetable.map((timetable)=>{
    return (<ListItem>
        <ListItemButton
  sx={{
    py: 2,
    px: 2,
    borderRadius: "16px",
    transition: "all .3s",

    "&:hover": {
      bgcolor: "rgba(255,255,255,.08)",
      transform: "translateY(-2px)"
    }
  }}
>

  <Box sx={{ width: "100%" }}>

    <Typography
      sx={{
        color: "#C084FC",
        fontWeight: 600,
        fontSize: 14
      }}
    >
      Period {timetable.period}
    </Typography>

    <Typography
      sx={{
        color: "white",
        fontWeight: 700,
        fontSize: 18,
        mt: 0.5
      }}
    >
      {timetable.subject}
    </Typography>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        mt: 1
      }}
    >
      <AccessTimeIcon
        sx={{
          color: "#60A5FA",
          fontSize: 18
        }}
      />

      <Typography
        sx={{
          color: "#D1D5DB",
          fontSize: 14
        }}
      >
        {timetable.time}
      </Typography>

    </Box>

  </Box>

</ListItemButton>
        </ListItem>)
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
      color: "#8B5CF6",
    }}
  >
    🗓 Today's Timetable
  </DialogTitle>

  <DialogContent>
    <List>
      {timetable.map((item) => (
        <ListItem key={item.period} disablePadding>
          <ListItemButton
            sx={{
              py: 2,
              borderRadius: "16px",

              "&:hover": {
                bgcolor: "rgba(139,92,246,.08)",
              },
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#C084FC",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Period {item.period}
              </Typography>

              <Typography
                sx={{
                  mt: 0.5,
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {item.subject}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mt: 1,
                }}
              >
                <AccessTimeIcon
                  sx={{
                    color: "#60A5FA",
                    fontSize: 18,
                  }}
                />

                <Typography color="text.secondary">
                  {item.time}
                </Typography>
              </Box>
            </Box>
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
        borderRadius: "12px",
      }}
    >
      Close
    </Button>
  </DialogActions>
</Dialog>
    
    </div>
  )
}

export default TimeTable