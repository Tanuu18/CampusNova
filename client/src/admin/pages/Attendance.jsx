import React from 'react'
import { useState,useEffect } from 'react'
import api from '../../utils/axios'
import {Card,CardContent} from "@mui/material"
import GroupsIcon from "@mui/icons-material/Groups"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CancelIcon from "@mui/icons-material/Cancel"
import EventBusyIcon from "@mui/icons-material/EventBusy"

import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,TablePagination,Chip,Button,Typography,TextField,MenuItem,Grid} from "@mui/material"
const Attendance = () => {
    const [attendance,setAttendance]=useState([]);
    const [search,setSearch]=useState("");
    const [selectedClass,setSelectedClass]=useState("");
    const [selectedSection,setSelectedSection]=useState("");
    const [selectedDate,setSelectedDate]=useState("");
    const [page,setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState(10);
     
    const filteredAttendance=attendance.filter((item)=>{
          const studentName=item.studentId?.userId?.toLowerCase() || "";
          const matchesSearch=studentName.includes(search.toLowerCase());
          const matchesClass=selectedClass===""||item.studentId?.className===selectedClass;
          const matchesSection=selectedSection===""||item.studentId?.section===selectedSection;
          const matchesDate=selectedDate===""||item.date?.slice(0,10)===selectedDate;
          return (matchesSearch && matchesClass && matchesSection && matchesDate);
            })
    const fetchAttendance=async()=>{
      try {
        const {data}=await api.get("/api/attendance/history");
        if(data.success){
          setAttendance(data.attendanceHistory)
          console.log(data.attendanceHistory);
        }
      } catch (error) {
        console.log(error.response);
        console.log(error.response?.data);
        
        
      }
    }
    const handleChangePage=(event,newPage)=>{
      setPage(newPage);
    };
    const handleChangeRowsPerPage=(event)=>{
      setRowsPerPage(parseInt(event.target.value,10));
      setPage(0);
    }
    const totalRecords=filteredAttendance.length;
    const presentCount=filteredAttendance.filter((item)=>item.status==="present").length;
    const absentCount=filteredAttendance.filter((item)=>item.status==="absent").length;
    const leaveCount=filteredAttendance.filter((item)=>item.status==="leave").length;

    useEffect(()=>{
      fetchAttendance();
    },[])
  return (
    <>
     <div style={{padding:"20px"}}>
       <Typography variant="h5" gutterBottom>Attendance History</Typography>
       <Grid container spacing={2} sx={{mb:3}}>
        <Grid item xs={12} sm={6} md={3} >
           <Card sx={{
            height:150,
            borderRadius:3,
            boxShadow:3,
            transition:"0.3s",
            "&:hover":{
              transform:"translateY(-4px)",
              boxShadow:6,
            },
           }}>
            <CardContent sx={{textAlign:"center"}} >
               <GroupsIcon color="primary" sx={{fontSize:40,mb:1}}/>
              <Typography variant="h4" fontWeight="bold" gutterBottom color='primary.main'>
                Total Records
              </Typography>
              <Typography variant='h5'>
                {totalRecords}
              </Typography>
            </CardContent>
           </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} > 
          <Card sx={{
            width:"100%",
            height:150,
            borderRadius:3,
            boxShadow:3,
            transition:"0.3s",
            "&:hover":{
              transform:"translateY(-4px)",
              boxShadow:6,
            },
           }}>
            <CardContent sx={{textAlign:"center"}}>
               <CheckCircleIcon color='success'  sx={{fontSize:40,mb:1}}/>
              <Typography variant="h4">
                Present
              </Typography>
              <Typography variant='h5' color='success.main'>
                {presentCount}
              </Typography>
            </CardContent>
           </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
          <Card sx={{
            height:150,
            borderRadius:3,
            boxShadow:3,
            transition:"0.3s",
            "&:hover":{
              transform:"translateY(-4px)",
              boxShadow:6,
            },
           }}>
            <CardContent sx={{textAlign:"center"}}>
               <CancelIcon color='error' sx={{fontSize:40,mb:1}}/>
              <Typography variant="h4">
                Absent
              </Typography>
              <Typography variant='h5' color='error.main'>
                {absentCount}
              </Typography>
            </CardContent>
           </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{
            
            borderRadius:3,
            boxShadow:3,
            transition:"0.3s",
            "&:hover":{
              transform:"translateY(-4px)",
              boxShadow:6,
            },
           }}>
            <CardContent sx={{textAlign:"center"}}>
              <EventBusyIcon color='warning' sx={{fontSize:40,mb:1}}/>
              <Typography variant="h4">
                Leave
              </Typography>
              <Typography variant='h5' color='warning.main'>
                {leaveCount}
              </Typography>
            </CardContent>
           </Card>
        </Grid>
       </Grid>
       <Grid container spacing={2} sx={{mb:3}}>
        <Grid item xs={12} md={3}>
            <TextField label="Search Student" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </Grid>
        <Grid item xs={12} md={3}>
            <TextField label="Class" select value={selectedClass} onChange={(e)=>setSelectedClass(e.target.value)}>
              <MenuItem value="8th">8th</MenuItem>
              <MenuItem value="9th">9th</MenuItem>
              <MenuItem value="10th">10th</MenuItem>
              <MenuItem value="11th">11th</MenuItem>
              <MenuItem value="12th">12th</MenuItem>
            </TextField>
        </Grid>
        <Grid item xs={12} md={3}>
            <TextField label="Section" value={selectedSection} onChange={(e)=>setSelectedSection(e.target.value)}/>
        </Grid> 
        <Grid item xs={12} md={3}>
            <TextField  type="date" value={selectedDate} 
            onChange={(e)=>setSelectedDate(e.target.value)} InputLabelProps={{shrink:true}}/>
        </Grid>
       </Grid>
       
       <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Section</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendance.length>0?(filteredAttendance
              .slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
              .map((item)=>(
                <TableRow key={item._id}>
                  <TableCell>{item.studentId?.userId?.name}</TableCell>
                  <TableCell>{item.studentId?.className}</TableCell>
                  <TableCell>{item.studentId?.section}</TableCell>
                  <TableCell>{new Date(item.date).toLocaleDateString("en-GB")}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))
            ):(
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No Attendance Records Found
                </TableCell>
              </TableRow>
            )
          }
            </TableBody>
            
          </Table>
       </TableContainer>
       <TablePagination rowsPerPageOptions={[5,10,25]} component="div" 
       count={filteredAttendance.length} rowsPerPage={rowsPerPage} page={page} 
       onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage}/>
     </div>
    
    </>
  )
}

export default Attendance
