import React ,{useState}from 'react'
import Box from '@mui/material/Box'
import upcomingEvents from '../data/upcomingevents.js'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import EventIcon from "@mui/icons-material/Event";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function Upcomingeventcard() {

  const [open, setOpen] = useState(false);

  return (
    <div className='upcomingeventcard' > 
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
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5
      }}
    >
      <EventIcon
        sx={{
          color: "#C084FC",
          fontSize: 32
        }}
      />

      <Typography
        sx={{
          fontWeight: 700,
          color: "white",
          fontSize: {
            xs: "20px",
            md: "30px"
          }
        }}
      >
        Upcoming Events
      </Typography>

    </Box>

    <Button
  endIcon={<ArrowOutwardIcon />}
  sx={{
    color: "#C084FC",
    textTransform: "none",
    fontWeight: 600,
    "&:hover": {
      bgcolor: "rgba(255,255,255,.08)",
      transform: "translateY(-2px)"
    }
  }}
  onClick={() => setOpen(true)}
>
  View All
</Button>

  </Box>

  <Typography
    sx={{
      color: "#D1D5DB",
      fontSize: "15px",
      mb: 2
    }}
  >
    Don't miss your upcoming events
  </Typography>

  <Divider
    sx={{
      mb: 2,
      borderColor: "rgba(255,255,255,.12)"
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
    { upcomingEvents.map((Events)=>{
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
        fontWeight: 700,
        fontSize: 18,
        color: "white"
      }}
    >
      {Events.title}
    </Typography>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mt: 1
      }}
    >

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5
        }}
      >
        <DateRangeIcon
          sx={{
            color: "#C084FC",
            fontSize: 18
          }}
        />

        <Typography
          sx={{
            color: "#D1D5DB",
            fontSize: 14
          }}
        >
          {Events.date}
        </Typography>

      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5
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
          {Events.time}
        </Typography>

      </Box>

    </Box>

  </Box>

</ListItemButton>
       
       <Divider
  sx={{
    borderColor: "rgba(255,255,255,.08)"
  }}
/>

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
      color: "#8B5CF6"
    }}
  >
    📅 All Upcoming Events
  </DialogTitle>

  <DialogContent>

    <List>
      {upcomingEvents.map((event) => (
        <ListItem key={event.id} disablePadding>

          <ListItemButton
            sx={{
              py: 2,
              borderRadius: "16px",

              "&:hover": {
                bgcolor: "rgba(139,92,246,.08)"
              }
            }}
          >

            <Box sx={{ width: "100%" }}>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 18
                }}
              >
                {event.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  mt: 1
                }}
              >

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: .5
                  }}
                >
                  <DateRangeIcon
                    sx={{
                      color: "#8B5CF6",
                      fontSize: 18
                    }}
                  />

                  <Typography color="text.secondary">
                    {event.date}
                  </Typography>

                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: .5
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      color: "#60A5FA",
                      fontSize: 18
                    }}
                  />

                  <Typography color="text.secondary">
                    {event.time}
                  </Typography>

                </Box>

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
        borderRadius: "12px"
      }}
    >
      Close
    </Button>

  </DialogActions>

</Dialog>
    
    </div>
  )
}

export default Upcomingeventcard