import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Button from "@mui/material/Button";

import students from "../data/students";
import teachers from "../data/teachers";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function TeacherAttendenceMark({Tidx}) {

    const teacher = teachers[Tidx];

    const classStudents = students.filter((student) => {
    return (
        student.class === teacher.class &&
        student.section === teacher.section
    );
});

const [attendanceStatus, setAttendanceStatus] = useState({});

const handleAttendanceChange = (studentId, status) => {

    setAttendanceStatus((prev) => ({

        ...prev,

        [studentId]: status,

    }));

};

  return (
    <div>

        <Box
  sx={{
    width:"100%",
    p: {
    xs: 3,
    md: 4
},
mt:4,
    borderRadius:"30px",

    background:
    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",

    backdropFilter:"blur(18px)",

    border:"1px solid rgba(255,255,255,0.20)",

    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",

    color:"white",

    borderLeft: "8px solid #8B5CF6",


    transition: "all 0.3s ease",


}}>
       <TableContainer
  component={Paper}
  sx={{
    bgcolor: "transparent",
    backdropFilter: "blur(18px)",
    borderRadius: "24px",
    border: "1px solid rgba(255,255,255,.15)",
     mt: 1,
    height: "600px",
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
    <Table >
        <TableHead>
            <TableRow>
                <TableCell
sx={{
    color:"#C4B5FD",
    fontWeight:700,
    fontSize:16,
    textAlign:"center"
}}
>
Roll No
</TableCell>

<TableCell
sx={{
    color:"#C4B5FD",
    fontWeight:700,
    fontSize:16,
   
}}
>
Student
</TableCell>

<TableCell
sx={{
    color:"#C4B5FD",
    fontWeight:700,
    fontSize:16,
  
}}
>
Attendance
</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>

{classStudents.map((student)=>{

    return(

        <TableRow
        key={student.id}
        
        >

            <TableCell
sx={{
    color:"white",
    textAlign:"center",
    borderBottom: "1px solid rgba(255,255,255,.08)"
}}
>

{student.rollNo}

</TableCell>

<TableCell sx={{borderBottom: "1px solid rgba(255,255,255,.08)"}}>

    <Box
sx={{
display:"flex",
alignContent:"center",
gap:2,

}}
>
    <Avatar
sx={{
bgcolor:"#8B5CF6",

}}
>

{student.name.charAt(0)}

</Avatar>
<Typography
sx={{
color:"white",
fontWeight:600,

}}
>

{student.name}

</Typography>
</Box>
</TableCell>

<TableCell
  sx={{
    borderBottom: "1px solid rgba(255,255,255,.08)",
  }}
>

<RadioGroup
  row
  value={attendanceStatus[student.id] || ""}
  onChange={(e) =>
    handleAttendanceChange(student.id, e.target.value)
  }
>

<FormControlLabel
  value="Present"
  control={
    <Radio
      sx={{
        color: "#22C55E",

        "&.Mui-checked": {
          color: "#22C55E",
        },
      }}
    />
  }
  label="Present"
  sx={{
    "& .MuiFormControlLabel-label": {
      color: "white",
    },
  }}
/>

<FormControlLabel
  value="Absent"
  control={
    <Radio
      sx={{
        color: "#EF4444",

        "&.Mui-checked": {
          color: "#EF4444",
        },
      }}
    />
  }
  label="Absent"
  sx={{
    "& .MuiFormControlLabel-label": {
      color: "white",
    },
  }}
/>

<FormControlLabel
  value="Leave"
  control={
    <Radio
      sx={{
        color: "#F59E0B",

        "&.Mui-checked": {
          color: "#F59E0B",
        },
      }}
    />
  }
  label="Leave"
  sx={{
    "& .MuiFormControlLabel-label": {
      color: "white",
    },
  }}
/>

</RadioGroup>

</TableCell>

        </TableRow>

    )

})}

</TableBody>
    </Table>
</TableContainer>


</Box>

    </div>
  )
}

export default TeacherAttendenceMark