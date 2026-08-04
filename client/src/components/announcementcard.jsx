import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import students from '../data/students.js';
import Stack from '@mui/material/Stack';
import announcements from '../data/announcements.js';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import "../css/cards.css";
import Divider from '@mui/material/Divider';
import CampaignIcon from "@mui/icons-material/Campaign";
import Button from '@mui/material/Button';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function Announcementcard() {


    const[open,setopen]=useState(false);

  return (
    <>

         <Box sx={{
    height: "500px",
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
    borderLeft: "4px solid #8B5CF6",
}
}} >
  
   
   
    <Box
   sx={{
        display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    mb:2,
    width:"100%"
}}>

    <Box
    sx={{
    display:"flex",
    alignItems:"center",
    gap:1.5
}}>
    <CampaignIcon
    sx={{
        color:"#cfa6f6",
        fontSize:32
    }}/>

    <Typography
    sx={{
        fontWeight:700,
        color:"white",
        fontSize: {
    xs: "20px",
    md: "30px"
     },
    }}
    >
        Announcements
    </Typography>
    </Box>
    <Button
  endIcon={<ArrowOutwardIcon />}
  sx={{
    color: "#c693f6",
    textTransform: "none",
    fontWeight: 600,
    "&:hover":{
        bgcolor:"rgba(255,255,255,.08)",
        transform:"translateY(-2px)"
    }
  }} onClick={()=>setopen(true)}
>
  View All
</Button>
</Box>
    <Typography
    sx={{
    color:"#D1D5DB",
    fontSize:"15px",
    mb:2
   }}>
Latest updates from your school
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
    { announcements.map((announce)=>{
    return <ListItem>
        <ListItemButton
            sx={{
    py:2,
    px:2,
    borderRadius:"16px",

    transition:"all .3s",

    "&:hover":{
        bgcolor:"rgba(255,255,255,.08)",
        transform:"translateY(-2px)"
    }
               }}>
            <ListItemIcon sx={{minWidth:"56px"}}>
                <Box
                    sx={{
                        
    width:46,
    height:46,
    borderRadius:"50%",
   bgcolor:"rgba(192,132,252,.20)",

    display:"flex",
    alignItems:"center",
    justifyContent:"center"
                        }}>

               <CampaignIcon
             sx={{
    color:"#C084FC",
      fontSize:26
                 }}/>
              </Box></ListItemIcon>

              
            <ListItemText
  primary={
    <Typography
      sx={{
        fontSize: "20px",
        fontWeight: 700,
        color: "white"
      }}
    >
      {announce.title}
    </Typography>
  }
  secondary={
    <Typography
      sx={{
        fontSize: "15px",
        color: "#D1D5DB",
        mt: 0.5
      }}
    >
      {announce.description}
    </Typography>
  }
/>
        </ListItemButton>
        </ListItem>
    })}
    
    </List>
    </Box>

    <Dialog
  open={open}
  onClose={() => setopen(false)}
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
  📢 All Announcements
</DialogTitle>

<DialogContent>
    <List>
  {announcements.map((announce) => (
    <ListItem key={announce.id}>
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
          <CampaignIcon sx={{ color: "#8B5CF6" }} />
        </ListItemIcon>

        <ListItemText
          primary={
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: 18
              }}
            >
              {announce.title}
            </Typography>
          }
          secondary={
            <Typography
              sx={{
                mt: .5,
                color: "text.secondary"
              }}
            >
              {announce.description}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>
</DialogContent>
<DialogActions>

<Button
variant="contained"
onClick={() => setopen(false)}
sx={{
    borderRadius:"12px"
}}
>
Close
</Button>

</DialogActions>
</Dialog>
    
   </>
    
  )
}

export default Announcementcard;