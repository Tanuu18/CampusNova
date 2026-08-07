import React, { useEffect,useState } from 'react'
import ParentForm from '../components/ParentForm'
import api from '../../utils/axios';
import {Table,TableBody,TableCell,TableContainer,Paper,Card,CardContent,IconButton,
    TableHead,TableRow,TablePagination,Chip,Button,Stack, Typography, Dialog,
    Box, DialogTitle, DialogContent, DialogActions, TextField, MenuItem} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Parent = () => {
    const [parents,setParents]=useState([]);
    const [open,setOpen]=useState(false);
    const [selectedParent,setSelectedParent]=useState(null);
    const [search,setSearch]=useState("");
    const [page,setPage]=useState(0);
    const [rowsPerPage,setRowsPerPage]=useState(5);
    const [openDelete,setOpenDelete]=useState(false);
    const [deleteParentId,setDeleteParentId]=useState(null);
    const fetchParents=async()=>{
        try {
           
            const {data}=await api.get("/api/admin/parents");
           
            if(data.success){
                setParents(data.parents);
            }
        } catch (error) {
            console.log(error);
            console.log(error.response?.data);
            
        }
    }
    const handleEdit=(parent)=>{
        setSelectedParent(parent);
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
        setSelectedParent(null);
    }
    const handleDelete=async(id)=>{
      
      try {
         await api.delete(`/api/admin/delete/parent/${id}`);
        await fetchParents();
         
      } catch (error) {
        console.log(error);
        
      }
    }
    const filteredParents=parents.filter((parent)=>{
        return (
            (parent.userId?.name||"").toLowerCase().includes(search.toLowerCase())
        )
    })
    useEffect(()=>{
       fetchParents();
    },[])
  return (
    <>
    <Box>
        <Typography variant="h5" color="primary" gutterBottom>
            Parents
        </Typography>
        <Card sx={{mb:3}}>
            <CardContent>
                <Typography variant="h6">
                    Total Parents : {filteredParents.length}
                </Typography>
            </CardContent>
        </Card>
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            mb:2,
        }}>
            <TextField label="Search Parent" value={search} sx={{
            backgroundColor:"white",
            borderRadius:1,
        }}
            onChange={(e)=>setSearch(e.target.value)}/>
           <Button variant="contained" 
           startIcon={<AddIcon/>}
           onClick={()=>{setOpen(true);setSelectedParent(null);}}>Add Parent</Button>
        </Box>
        <TableContainer component={Paper}>   
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Occupation</TableCell>
                        <TableCell>Students</TableCell>
                        <TableCell>Actions</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredParents
                    .slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage)
                    .map((parent)=>(
                        <TableRow key={parent._id}>
                                <TableCell>{parent.userId?.name}</TableCell>
                                <TableCell>{parent.userId?.email}</TableCell>
                                <TableCell>{parent.userId?.phone}</TableCell>
                                <TableCell>{parent.occupation}</TableCell>
                                <TableCell>
                                    {parent.studentIds?.length?parent.studentIds.map((student)=>student.userId?.name).join(","):"No Students" }
                                </TableCell>
                                <TableCell>
                                    <IconButton color="primary" onClick={()=>handleEdit(parent)}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton color="error" onClick={()=>{
                                        setDeleteParentId(parent.userId._id);
                                        setOpenDelete(true);
                                        }}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
        sx={{
      color:"white",
      "& .MuiTablePagination-selectLabel":{
        color:"white",
      },
      "& .MuiTablePagination-displayRows":{
        color:"white",
      },
      "& .MuiSvgIcon-root":{
        color:"white",
      },
      "& .MuiIconButton-root":{
        color:"white",
      },
    }}
      rowsPerPageOptions={[5,10,25]}
         component="div"
         count={filteredParents.length}
         page={page}
         onPageChange={(event,newPage)=>setPage(newPage)}
         rowsPerPage={rowsPerPage}
         onRowsPerPageChange={(event)=>{setRowsPerPage(parseInt(event.target.value,10));
          setPage(0);
         }}
         
         />
    </Box>
    <Dialog 
    open={openDelete} 
    onClose={()=>setOpenDelete(false)}>
          <DialogTitle>Delete Parent</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this  record?
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>setOpenDelete(false)}>Cancel</Button>
            <Button color="error" variant="contained" onClick={()=>{
              handleDelete(deleteParentId);
              setOpenDelete(false);
            }}>Delete</Button>
          </DialogActions>
        </Dialog>
     <ParentForm open={open} onClose={handleClose} 
        fetchParents={fetchParents} selectedParent={selectedParent}/>
    </>
  )
}

export default Parent
