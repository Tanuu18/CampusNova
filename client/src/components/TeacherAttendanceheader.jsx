import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import EditIcon from "@mui/icons-material/Edit";
import ChecklistIcon from "@mui/icons-material/Checklist";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import teachers from '../data/teachers';

function TeacherAttendanceheader({Tidx}) {

    const [snackbarOpen, setSnackbarOpen] = useState(false);
const [snackbarMessage, setSnackbarMessage] = useState("");
const [severity, setSeverity] = useState("success");
const teacher = teachers[Tidx];

    const [selectedDate, setSelectedDate] = useState(
  new Date().toISOString().split("T")[0]
);

  return (
    <div><Box
  sx={{
    width:"100%",
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


}}
>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 1.5,
    }}
  >
    <CalendarMonthIcon
      sx={{
        color: "#C084FC",
        fontSize: 32,
      }}
    />

    <Typography
      sx={{
        fontWeight: 700,
        fontSize: {
          xs: "22px",
          md: "30px",
        },
      }}
    >
      Attendance

    </Typography>
  </Box>

  <Typography
    sx={{
      color: "#D1D5DB",
      mt: 1,
      mb: 2,
    }}
  >
    Mark attendance for your class.
  </Typography>

  <Divider
    sx={{
      borderColor: "rgba(255,255,255,.12)",
      mb:3
    }}
  />

  <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    mb: 3,
    p: 2,
    borderRadius: "16px",
    bgcolor: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.1)",
  }}
>

  <Box>

    <Typography
      sx={{
        color: "#C4B5FD",
        fontWeight: 700,
      }}
    >
      Class Teacher
    </Typography>

    <Typography
      sx={{
        color: "white",
      }}
    >
      {teacher.name}
    </Typography>

  </Box>

  <Box>

    <Typography
      sx={{
        color: "#C4B5FD",
        fontWeight: 700,
      }}
    >
      Assigned Class
    </Typography>

    <Typography
      sx={{
        color: "white",
      }}
    >
      {teacher.class}-{teacher.section}
    </Typography>

  </Box>

</Box>

  <Grid
  container
  spacing={2}
  justifyContent="flex-end"
  alignItems="center"
>

  <Grid size={{ xs: 12, sm: 4, md: 3 }}>
    <TextField
      type="date"
      fullWidth
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      sx={{
        "& .MuiOutlinedInput-root": {
          color: "white",

          "& fieldset": {
            borderColor: "rgba(255,255,255,.2)",
          },

          "&:hover fieldset": {
            borderColor: "#C4B5FD",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#C4B5FD",
          },
        },

        "& input::-webkit-calendar-picker-indicator": {
          filter: "invert(1)",
          cursor: "pointer",
        },
      }}
    />
  </Grid>

  <Grid>
    <Button
      variant="contained"
      startIcon={<ChecklistIcon />}
      sx={{
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 600,
        px: 3,
      }}
      onClick={() => {
  setSnackbarMessage("Attendance marked successfully.");
  setSeverity("success");
  setSnackbarOpen(true);
}}
    >
      Mark Attendance
    </Button>
  </Grid>

  <Grid>
    <Button
      variant="outlined"
      startIcon={<EditIcon />}
      sx={{
        borderRadius: "12px",
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        color: "white",
        borderColor: "rgba(255,255,255,.3)",

        "&:hover": {
          borderColor: "#C4B5FD",
        },
      }}
      onClick={() => {
  setSnackbarMessage("Attendance updated successfully.");
  setSeverity("success");
  setSnackbarOpen(true);
}}
    >
      Update Attendance
    </Button>
  </Grid>

</Grid>

<Snackbar
  open={snackbarOpen}
  autoHideDuration={3000}
  onClose={() => setSnackbarOpen(false)}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "right",
  }}
>
  <Alert
    onClose={() => setSnackbarOpen(false)}
    severity={severity}
    variant="filled"
    sx={{ width: "100%" }}
  >
    {snackbarMessage}
  </Alert>
</Snackbar>
  
  </Box>
  </div>
  )
}

export default TeacherAttendanceheader