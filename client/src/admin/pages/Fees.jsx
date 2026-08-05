import React, { useEffect } from 'react'
import { useState } from 'react';
import Dialog from "@mui/material/Dialog";
//import "./Fees.css"
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,TablePagination,Chip,Button,Stack, Typography, Box, DialogTitle, DialogContent, DialogActions, TextField, MenuItem} from "@mui/material"
import api from '../../utils/axios';
import RecordPaymentDialog from '../components/RecordPaymentDialog';
import FeeFormDialog from '../components/FeeFormDialog';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PaymentIcon from "@mui/icons-material/Payment";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';
import Receipt from '../components/Receipt';
const Fees = () => {
  const [fees,setFees]=useState([]);
  const [page,setPage]=useState(0);
  const [rowsPerPage,setRowsPerPage]=useState(10);
  const [openPayment,setOpenPayment]=useState(false);
  const [selectedFee,setSelectedFee]=useState(null);
  const [openFeeForm,setOpenFeeForm]=useState(false);
  const [openDelete,setOpenDelete]=useState(false);
  const [deleteFeeId,setDeleteFeeId]=useState(null);
  const [search,setSearch]=useState("");
  const [selectedClass,setSelectedClass]=useState("");
  const [selectedSection,setSelectedSection]=useState("");
  const [selectedStatus,setSelectedStatus]=useState("");
  const [selectedAcademicYear,setSelectedAcademicYear]=useState("");
  
  const fetchFees=async()=>{
     try {
      const {data}= await api.get("/api/fees/show");
        if(data.success){
          setFees(data.fees);
        }
     } catch (error) {
       console.log(error);
       
     }
    }
    
    const handleDelete=async(feeId)=>{
      
      try {
         await api.delete(`/api/fees/${feeId}`);
         fetchFees();
         alert("Fee deleted successfully");
      } catch (error) {
        console.log(error);
        
      }
    }
    useEffect(()=>{
  fetchFees();
},[]);
console.log(fees);

  return (
    <>
    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", mb:2, mt:3}}>
      <Typography variant="h5" fontWeight="bold">
        Fees Management
      </Typography>
      <Button variant="contained"
      onClick={()=>{
        setSelectedFee(null);
        setOpenFeeForm(true)}}
      >Add Fees</Button>
   </Box>
   <Box sx={{
    display:"flex",
    gap:2,
    alignItems:"center",
    flexWrap:"wrap",
    mb:3,
    p:2,
    borderRadius:2,
    backgroundColor:"#fafafa",
    boxShadow:2,
   }}>
    <TextField sx={{width:300}} placeholder='Search Student..' value={search} 
    onChange={(e)=>setSearch(e.target.value)} 
    sx={{mt:2,mb:2}}
    slotProps={{
        input:{
        startAdornment:(
        <InputAdornment position='start'>
                <SearchIcon/>
        </InputAdornment>
                    )
                    }
                 }}
                 />
          <TextField select label="Class" value={selectedClass} onChange={(e)=>setSelectedClass(e.target.value)}
          sx={{minWidth:180,ml:2}}>
            <MenuItem value="">All Classes</MenuItem>
            <MenuItem value="9th">9th</MenuItem>
            <MenuItem value="10th">10th</MenuItem>
            <MenuItem value="11th">11th</MenuItem>
            <MenuItem value="12th">12th</MenuItem>
          </TextField>
           <TextField select label="Section" value={selectedSection} onChange={(e)=>setSelectedSection(e.target.value)}
          sx={{minWidth:150,ml:2}}>
            <MenuItem value="">All Section</MenuItem>
            <MenuItem value="A">A</MenuItem>
            <MenuItem value="B">B</MenuItem>
            <MenuItem value="C">C</MenuItem>
            <MenuItem value="D">D</MenuItem>
          </TextField>
          <TextField select label="Academic Year" value={selectedAcademicYear} onChange={(e)=>setSelectedAcademicYear(e.target.value)}
          sx={{minWidth:150,ml:2}}>
            <MenuItem value="">All Years</MenuItem>
            <MenuItem value="2025-26">2025-26</MenuItem>
            <MenuItem value="2026-27">2026-27</MenuItem>
            <MenuItem value="2027-28">2027-28</MenuItem>
            
          </TextField>
           <Button sx={{height:56,
            minWidth:120, 
           }}
           variant='outlined' color="error" onClick={()=>{
            setSearch("");
            setSelectedClass("");
            setSelectedSection("");
            setSelectedAcademicYear("");
           }}>Reset</Button>
            </Box>
    <TableContainer component={Paper}
    sx={{
      mt:2,borderRadius:3,boxShadow:3,
    }}
    >
    <Table >
       <TableHead sx={{backgroundColor:"#1976d2"}}>
        <TableRow>
          <TableCell sx={{color:"white",fontWeight:"bold"}}>Student</TableCell>
          <TableCell sx={{color:"white",fontWeight:"bold"}}>Class</TableCell>
           <TableCell sx={{color:"white",fontWeight:"bold"}}>Section</TableCell>
          <TableCell sx={{color:"white",fontWeight:"bold"}}>Total Fees</TableCell>
          <TableCell sx={{color:"white",fontWeight:"bold"}}>Paid</TableCell>
          <TableCell sx={{color:"white",fontWeight:"bold"}}>Due</TableCell>
          <TableCell sx={{color:"white",fontWeight:"bold"}}>Fee Category</TableCell>
          <TableCell sx={{color:"white",fontWeight:"bold"}}>Status</TableCell>
          <TableCell  sx={{color:"white",fontWeight:"bold"}}>Actions</TableCell>
        </TableRow>
       </TableHead>
       <TableBody>
        
          {fees
          .filter((fee)=>{
            const matchSearch=fee.studentId?.userId?.name
          ?.toLowerCase()
        .includes(search.toLowerCase());
        const matchClass=selectedClass==""||fee.className===selectedClass;
        const matchSection=selectedSection===""|| fee.studentId?.section===selectedSection;
        const matchAcademicYear=selectedAcademicYear===""||fee.academicYear===selectedAcademicYear;
        return matchSearch && matchClass && matchSection && matchAcademicYear;
      })
      .slice(
            page*rowsPerPage,
            page*rowsPerPage+rowsPerPage
          )
            .map((fee)=>(
            <TableRow key={fee._id}>
              <TableCell>{fee.studentId?.userId?.name}</TableCell>
              <TableCell>{fee.className}</TableCell>
              <TableCell>{fee.studentId?.section}</TableCell>
              <TableCell>&#8377;{Number(fee.totalFees).toLocaleString("en-IN")}</TableCell>
              <TableCell>&#8377;{Number(fee.paidAmount).toLocaleString("en-IN")}</TableCell>
              <TableCell>&#8377;{Number(fee.dueAmount).toLocaleString("en-IN")}</TableCell>
              <TableCell><Chip label={fee.feeCategory} 
              color={
                fee.feeCategory==="tution"?"primary":fee.feeCategory==="exam"?"warning"
                :fee.feeCategory==="transport"?"secondary":"default"} size='small'/>
                
                </TableCell>
              <TableCell><Chip 
              label={fee.status}
              color={
                fee.status==="paid"?"success":fee.status==="partial"?"warning":"error"}size="small"/>
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button variant="contained" color="primary" startIcon={<EditIcon/>}
                    onClick={()=>{setSelectedFee(fee);
                      setOpenFeeForm(true);
                    }}
                     size="small">Edit</Button>
                    <Button onClick={()=>{setDeleteFeeId(fee._id);setOpenDelete(true);}} 
                    startIcon={<DeleteIcon/>} 
                    variant="contained" color="error" size="small">Delete</Button>
                    <Button variant="contained" 
                    color="success" 
                    size="small"
                    startIcon={<PaymentIcon/>}
                    onClick={()=>{setSelectedFee(fee);setOpenPayment(true);}}>Record Payment</Button>
                    <Receipt fee={fee}/>
                  </Stack>
                </TableCell>
            </TableRow>
          ))}
        
       </TableBody>
    </Table>
    </TableContainer>
    <TablePagination
  component="div"
  count={fees.filter((fee) => {
    const matchSearch = fee.studentId?.userId?.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchClass =
      selectedClass === "" || fee.className === selectedClass;

    const matchSection =
      selectedSection === "" ||
      fee.studentId?.section === selectedSection;

    const matchAcademicYear =
      selectedAcademicYear === "" ||
      fee.academicYear === selectedAcademicYear;

    return (
      matchSearch &&
      matchClass &&
      matchSection &&
      matchAcademicYear
    );
  }).length}
  page={page}
  rowsPerPage={rowsPerPage}
  onPageChange={(event, newPage) => setPage(newPage)}
  onRowsPerPageChange={(event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }}
  rowsPerPageOptions={[5, 10, 25]}
/>

    <RecordPaymentDialog open={openPayment} onClose={()=>setOpenPayment(false)} 
    fee={selectedFee} fetchFees={fetchFees} />
    <Dialog open={openDelete} onClose={()=>setOpenDelete(false)}>
      <DialogTitle>Delete Fee Record</DialogTitle>
      <DialogContent>
        Are you sure you want to delete this fee record?
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>setOpenDelete(false)}>Cancel</Button>
        <Button color="error" variant="contained" onClick={()=>{
          handleDelete(deleteFeeId);
          setOpenDelete(false);
        }}>Delete</Button>
      </DialogActions>
    </Dialog>
    <FeeFormDialog open={openFeeForm} onClose={()=>setOpenFeeForm(false)} 
    selectedFee={selectedFee}
    fetchFees={fetchFees}/>
    </>
  ) 
}

export default Fees
