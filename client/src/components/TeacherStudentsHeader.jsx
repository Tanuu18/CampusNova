import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import PeopleIcon from "@mui/icons-material/People";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import students from '../data/students';
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import attendance from "../data/attendance";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Tooltip from '@mui/material/Tooltip';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";

function TeacherStudentsHeader() {


    const [selectedClass, setSelectedClass] = useState("All");
    const [selectedSection, setSelectedSection] = useState("All");
    const [open, setOpen] = useState(false);
const [selectedStudent, setSelectedStudent] = useState(null);

const getAttendancePercentage = (studentId) => {
  const studentAttendance = attendance.filter(
    (record) => record.studentId === studentId
  );

  if (studentAttendance.length === 0) return 0;

  const presentDays = studentAttendance.filter(
    (record) => record.status === "Present"
  ).length;

  return Math.round((presentDays / studentAttendance.length) * 100);
};

const handleOpen = (student) => {
    setSelectedStudent(student);
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
    setSelectedStudent(null);
};

    const[search,setsearch]=useState("");

    let handleinputchange=(event)=>{

        setsearch(event.target.value);
        console.log(event.target.value);
    }

    const filteredStudents = students.filter((student) => {

    const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.rollNo.includes(search);

    const matchesClass =
        selectedClass === "All" ||
        student.class === selectedClass;

    const matchesSection =
        selectedSection === "All" ||
        student.section === selectedSection;

    return (
        matchesSearch &&
        matchesClass &&
        matchesSection
    );

});

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
    <PeopleIcon
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
      Students
    </Typography>
  </Box>

  <Typography
    sx={{
      color: "#D1D5DB",
      mt: 1,
      mb: 2,
    }}
  >
    View and manage students assigned to your classes.
  </Typography>

  <Divider
    sx={{
      borderColor: "rgba(255,255,255,.12)",
      mb:3
    }}
  />

  <Grid container spacing={2}>


    <Grid size={{ xs: 12, md: 6 }}>

  <TextField fullWidth name="search" id="search"  label="Search Students" variant="outlined" value={search} placeholder='Search Students by name...' onChange={handleinputchange} 
  slotProps={{
                        input:{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <SearchIcon sx={{color:"white"}}/>
                                </InputAdornment>
                     ),
                },
              }} sx={{
                "& .MuiInputLabel-root":{
                    color:"white",
                },
                "& .MuiOutlinedInput-root":{
                    color:"white",
                    borderRadius: "16px",
                    

                    "& fieldset":{
                        borderColor:"white",
                    },
                    "&:hover fieldset":{
                        borderColor: "#cbcff1",
                        boxShadow: "0 0 18px rgba(192,132,252,.35)"
                    },

                    "&.Mui-focused fieldset":{
                        borderColor:"#C4B5FD",
                        
                    }

                },
                "& .MuiInputLabel-root.Mui-focused": {
                     color: "#C4B5FD",
                   },
              }} />


              </Grid>

              <Grid size={{ xs: 6, md: 3 }}>

                <FormControl fullWidth sx={{
                "& .MuiInputLabel-root":{
                    color:"white",
                },
                "& .MuiOutlinedInput-root":{
                    color:"white",
                    borderRadius: "16px",
                    

                    "& fieldset":{
                        borderColor:"white",
                    },
                  "&:hover fieldset":{
                        borderColor: "#cbcff1",
                        boxShadow: "0 0 18px rgba(192,132,252,.35)"
                    },

                    "&.Mui-focused fieldset":{
                        borderColor:"#C4B5FD",
                        
                    }

                },
                "& .MuiInputLabel-root.Mui-focused": {
                     color: "#C4B5FD",
                   },
              }}>

                    <InputLabel>
                       Class
                    </InputLabel>

                    <Select
                        value={selectedClass}
                        label="Class"
                         onChange={(e)=>setSelectedClass(e.target.value)}>


                            <MenuItem value="All">All Classes</MenuItem>

                            <MenuItem value="10">Class 10</MenuItem>

                            <MenuItem value="9">Class 9</MenuItem>

                            <MenuItem value="8">Class 8</MenuItem>

                         </Select>

                </FormControl>

              </Grid>


              <Grid size={{ xs: 6, md: 3 }}>


                 <FormControl fullWidth sx={{
                "& .MuiInputLabel-root":{
                    color:"white",
                },
                "& .MuiOutlinedInput-root":{
                    color:"white",
                    borderRadius: "16px",
                    

                    "& fieldset":{
                        borderColor:"white",
                    },

                    "&:hover fieldset":{
                        borderColor: "#cbcff1",
                        boxShadow: "0 0 18px rgba(192,132,252,.35)"
                    },

                    "&.Mui-focused fieldset":{
                        borderColor:"#C4B5FD",
                        
                    }

                },
                "& .MuiInputLabel-root.Mui-focused": {
                     color: "#C4B5FD",
                   },
              }}>

                    <InputLabel>
                       Section
                    </InputLabel>

                    <Select
                        value={selectedSection}
                        label="Class"
                         onChange={(e)=>setSelectedSection(e.target.value)}>


                            <MenuItem value="All">All Sections</MenuItem>

                            <MenuItem value="A">Section A</MenuItem>

                            <MenuItem value="B">Section B</MenuItem>

                            <MenuItem value="C">Section C</MenuItem>

                         </Select>

                </FormControl>

              </Grid>

    </Grid>

    <Box sx={{ mt: 4 }}>

        <TableContainer component={Paper} sx={{
    bgcolor:"transparent",
    backdropFilter:"blur(18px)",
    borderRadius:"24px",
    border:"1px solid rgba(255,255,255,.15)"
}}>
        <Table>
            <TableHead sx={{
    bgcolor: "rgba(139,92,246,.15)"
  }}>
                <TableRow>
                    <TableCell sx={{
                            color:"#C4B5FD",
                            fontWeight:700,
                            fontSize:16, 
                            borderBottom:"1px solid rgba(255,255,255,.12)"
                            }}>
                    Roll No
                   </TableCell>
                   <TableCell sx={{
                            color:"#C4B5FD",
                            fontWeight:700,
                            fontSize:16, 
                            borderBottom:"1px solid rgba(255,255,255,.12)"
                            }}>
                    Student
                   </TableCell>
                   <TableCell sx={{
                            color:"#C4B5FD",
                            fontWeight:700,
                            fontSize:16, 
                            borderBottom:"1px solid rgba(255,255,255,.12)"
                            }}>
                    Class
                   </TableCell>
                   <TableCell sx={{
                            color:"#C4B5FD",
                            fontWeight:700,
                            fontSize:16, 
                            borderBottom:"1px solid rgba(255,255,255,.12)"
                            }}>
                    Attendance
                   </TableCell>
                   <TableCell sx={{
                            color:"#C4B5FD",
                            fontWeight:700,
                            fontSize:16, 
                            borderBottom:"1px solid rgba(255,255,255,.12)"
                            }}>
                    Status
                   </TableCell>
                   <TableCell sx={{
                            color:"#C4B5FD",
                            fontWeight:700,
                            fontSize:16, 
                            borderBottom:"1px solid rgba(255,255,255,.12)"
                            }}>
                    Actions
                   </TableCell>
                </TableRow>
            </TableHead>

            <TableBody>

                {filteredStudents.map((student) => {


const studentAttendance = attendance.filter(
  (record) => record.studentId === student.id
);

const presentDays = studentAttendance.filter(
  (record) => record.status === "Present"
).length;

const attendancePercentage = Math.round(
  (presentDays / studentAttendance.length) * 100
);
                    return(

                    <TableRow key={student.id}>

                        

                        <TableCell sx={{ color: "white",borderBottom: "1px solid rgba(255,255,255,.08)",}}>
                            <Typography sx={{ fontWeight:600, color:"white"}}>
                               {student.rollNo}
                                </Typography>
                        </TableCell>

                        <TableCell sx={{ color: "white",borderBottom: "1px solid rgba(255,255,255,.08)",}}>
                            <Box sx={{display:"flex",alignItems:"center", gap:2}}>
                                <Avatar sx={{ bgcolor:"#8B5CF6", width:40, height:40}}>{student.name.charAt(0)}</Avatar>
                                <Typography sx={{ fontWeight:600, color:"white"}}>
                               {student.name}
                                </Typography>
                            </Box>
                        </TableCell>

                        <TableCell sx={{ color: "white",borderBottom: "1px solid rgba(255,255,255,.08)",}}> 
                            <Chip label={`${student.class}-${student.section}`} sx={{
                             bgcolor: "rgba(192,132,252,.18)",
                             color: "#f4f3fa",
                             fontWeight: 600,
                            }}></Chip>


                        </TableCell>

                        <TableCell sx={{ borderBottom: "1px solid rgba(255,255,255,.08)",}}>

                             <Chip
                               label={`${attendancePercentage}%`}
      color={
      attendancePercentage >= 75
        ? "success"
        : attendancePercentage >= 50
        ? "warning"
        : "error"
    }
    variant="filled"
  />
                        </TableCell>

                        <TableCell sx={{borderBottom: "1px solid rgba(255,255,255,.08)",}}>

                            <Chip 
    label={
  attendancePercentage >= 90
    ? "Excellent"
    : attendancePercentage >= 75
    ? "Good"
    : "At Risk"
}   
color={
  attendancePercentage >= 90
    ? "success"
    : attendancePercentage >= 75
    ? "success"
    : "warning"
}></Chip>


                        </TableCell>

                        <TableCell
  sx={{
    borderBottom: "1px solid rgba(255,255,255,.08)",
  }}
>
  <Tooltip title="View Student">
    <IconButton
      sx={{
        color: "#60A5FA",

        "&:hover": {
          bgcolor: "rgba(96,165,250,.15)",
        },
      }}
    >
      <VisibilityIcon onClick={() => handleOpen(student)} />
    </IconButton>
  </Tooltip>
</TableCell>
                    </TableRow>

                  );

})}
            </TableBody>
        </Table>

       </TableContainer>
    </Box>
</Box>

<Dialog
    open={open}
    onClose={handleClose}
    maxWidth="md"
    fullWidth
    PaperProps={{
        sx:{
            borderRadius:"28px",
            overflow:"hidden",
            background:
            "linear-gradient(135deg,#111827,#1F2937)",
            color:"white",
            border:"1px solid rgba(255,255,255,.12)"
        }
    }}
>

<DialogTitle
sx={{
    background:
    "linear-gradient(90deg,#7C3AED,#8B5CF6)",
    color:"white",
    fontWeight:700,
    fontSize:26,
    textAlign:"center",
    py:2.5
}}
>

Student Profile

</DialogTitle>

<DialogContent sx={{p:4}}>

<Box
sx={{
display:"flex",
flexDirection:"column",
alignItems:"center",
mb:4
}}
>

<Avatar
sx={{
width:100,
height:100,
fontSize:40,
bgcolor:"#A855F7",
mb:2,
mt:2,
boxShadow:"0 0 25px rgba(168,85,247,.45)"
}}
>
{selectedStudent?.name?.charAt(0)}
</Avatar>

<Typography
fontSize={28}
fontWeight={700}
>

{selectedStudent?.name}

</Typography>

<Typography
sx={{
color:"#CBD5E1"
}}
>

Roll No : {selectedStudent?.rollNo}

</Typography>

</Box>

<Divider sx={{mb:3}}/>

<Typography
sx={{
fontWeight:700,
fontSize:20,
color:"#C4B5FD",
mb:2
}}
>

Academic Information

</Typography>

<Grid container spacing={3}>

<Grid size={{xs:6}}>

<Box>

<SchoolIcon sx={{color:"#A78BFA"}}/>

<Typography color="#94A3B8">
Class
</Typography>

<Typography fontWeight={700}>
{selectedStudent?.class}-{selectedStudent?.section}
</Typography>

</Box>

</Grid>

<Grid size={{xs:6}}>

<Box>

<BadgeIcon sx={{color:"#A78BFA"}}/>

<Typography color="#94A3B8">
Student ID
</Typography>

<Typography fontWeight={700}>
#{selectedStudent?.id}
</Typography>

</Box>

</Grid>

<Grid size={{xs:6}}>

<Box>

<Typography color="#94A3B8">
Attendance
</Typography>

<Chip
label={`${getAttendancePercentage(selectedStudent?.id)}%`}
color={
getAttendancePercentage(selectedStudent?.id)>=90
?"success"
:getAttendancePercentage(selectedStudent?.id)>=75
?"warning"
:"error"
}
sx={{mt:1}}
/>

</Box>

</Grid>

<Grid size={{xs:6}}>

<Box>

<Typography color="#94A3B8">
Status
</Typography>

<Chip
label={
getAttendancePercentage(selectedStudent?.id)>=90
?"Excellent"
:getAttendancePercentage(selectedStudent?.id)>=75
?"Good"
:"At Risk"
}
color={
getAttendancePercentage(selectedStudent?.id)>=90
?"success"
:getAttendancePercentage(selectedStudent?.id)>=75
?"success"
:"warning"
}
sx={{mt:1}}
/>

</Box>

</Grid>

</Grid>

<Divider sx={{my:4}}/>

<Typography
sx={{
fontWeight:700,
fontSize:20,
color:"#C4B5FD",
mb:2
}}
>

Contact Information

</Typography>

<Grid container spacing={3}>

<Grid size={{xs:12}}>

<Box sx={{display:"flex",alignItems:"center",gap:2}}>

<EmailIcon sx={{color:"#60A5FA"}}/>

<Box>

<Typography color="#94A3B8">
Email
</Typography>

<Typography fontWeight={600}>
{selectedStudent?.email}
</Typography>

</Box>

</Box>

</Grid>

<Grid size={{xs:6}}>

<Box sx={{display:"flex",gap:2}}>

<PhoneIcon sx={{color:"#10B981"}}/>

<Box>

<Typography color="#94A3B8">
Phone
</Typography>

<Typography fontWeight={600}>
{selectedStudent?.phone}
</Typography>

</Box>

</Box>

</Grid>

<Grid size={{xs:6}}>

<Box sx={{display:"flex",gap:2}}>

<PersonIcon sx={{color:"#F59E0B"}}/>

<Box>

<Typography color="#94A3B8">
Guardian
</Typography>

<Typography fontWeight={600}>
{selectedStudent?.guardianName}
</Typography>

</Box>

</Box>

</Grid>

<Grid size={{xs:12}}>

<Box sx={{display:"flex",gap:2}}>

<PhoneIcon sx={{color:"#EF4444"}}/>

<Box>

<Typography color="#94A3B8">
Guardian Phone
</Typography>

<Typography fontWeight={600}>
{selectedStudent?.guardianPhone}
</Typography>

</Box>

</Box>

</Grid>

</Grid>

</DialogContent>

<DialogActions
sx={{
p:3,
justifyContent:"center"
}}
>

<Button
variant="contained"
onClick={handleClose}
sx={{
px:5,
py:1.2,
borderRadius:"12px",
background:"#8B5CF6",
fontWeight:700,

"&:hover":{
background:"#7C3AED"
}
}}
>

Close

</Button>

</DialogActions>

</Dialog>

</div>
  )
}

export default TeacherStudentsHeader