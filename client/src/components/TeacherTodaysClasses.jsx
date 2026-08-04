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
import MenuBookIcon from "@mui/icons-material/MenuBook";
import teacherTimetable from '../data/teachertimetable.js';
import teachers from '../data/teachers.js';

function TeacherTodaysClasses({Tidx}) {
    
    
    const teacher = teachers[Tidx];

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
});

const todaysclasses = teacherTimetable.filter(
  (item) =>
    item.teacherId === teacher.id  &&
    item.day.toLowerCase() === today.toLowerCase()
);

  const [open, setOpen] = useState(false);

  return (
    <div className='upcomingeventcard' > 
        <Box sx={{
    height: "500px",
    p: {
    xs: 3,
    md: 4
},
    mt:{
        xs:5,
        md:5
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

<MenuBookIcon
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
Today's Classes
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
Your teaching schedule for today
</Typography>

<Divider
sx={{
    mb:2,
    borderColor:"rgba(255,255,255,.12)"
}}
/>


   <List
  sx={{
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
  }}
>
  {todaysclasses.length > 0 ? (
    todaysclasses.map((cls) => (
      <ListItem key={cls.id} disablePadding>
        <ListItemButton
          sx={{
            py: 2,
            borderRadius: "16px",

            "&:hover": {
              bgcolor: "rgba(255,255,255,.08)",
              transform: "translateY(-2px)",
            },
          }}
        >
          <ListItemIcon>
            <MenuBookIcon
              sx={{
                color: "#C084FC",
              }}
            />
          </ListItemIcon>

          <ListItemText
            primary={
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {cls.subject}
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  color: "#CBD5E1",
                  mt: 0.5,
                }}
              >
                Grade {cls.class}-{cls.section}
                <br />
                {cls.time} • {cls.room}
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
    ))
  ) : (
    <Box
      sx={{
        py: 8,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "#CBD5E1",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        📚 No Classes Scheduled Today
      </Typography>

      <Typography
        sx={{
          color: "#94A3B8",
          mt: 1,
        }}
      >
        {today === "Sunday"
          ? "It's Sunday. Enjoy your weekend! 🎉"
          : "Enjoy your free schedule!"}
      </Typography>
    </Box>
  )}
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
      {teacherTimetable.filter((item) => item.teacherId === teacher.id).map((item) => (
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

  <Typography
    sx={{
      color: "#64748B",
      mt: 0.5,
      fontSize: 15,
    }}
  >
    Grade {item.class}-{item.section}
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

  <Typography
    sx={{
      color: "#10B981",
      fontSize: 14,
      mt: 0.5,
      fontWeight: 600,
    }}
  >
    📍 {item.room}
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

export default TeacherTodaysClasses