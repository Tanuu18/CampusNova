import React, { useEffect,useState } from 'react'
import ParentForm from '../components/ParentForm'
import api from '../../utils/axios';
import {Table,TableBody,TableCell,TableContainer,Paper,Card,CardContent,IconButton,
    TableHead,TableRow,TablePagination,Chip,Button,Stack, Typography, 
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
    const [rowsPerPage,setRowsPerPage]=useState(10);

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
    useEffect(()=>{
       fetchParents();
    },[])
  return (
    <>
    <Box>
        <Typography variant="h5" gutterBottom>
            Parents
        </Typography>
        <Card sx={{mb:3}}>
            <CardContent>
                <Typography variant="h6">
                    Total Parents : {parents.length}
                </Typography>
            </CardContent>
        </Card>
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            mb:2,
        }}>
            <TextField label="Search Parent" value={search} 
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
                    {parents.map((parent)=>(
                        <TableRow key={parent._id}>
                                <TableCell>{parent.userId?.name}</TableCell>
                                <TableCell>{parent.userId?.email}</TableCell>
                                <TableCell>{parent.userId?.phone}</TableCell>
                                <TableCell>{parent.occupation}</TableCell>
                                <TableCell>
                                    {parent.studentIds?.length || 0}
                                </TableCell>
                                <TableCell>
                                    <IconButton color="primary">
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton color="primary">
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        
    </Box>
     <ParentForm open={open} onClose={()=>setOpen(false)} 
        fetchParents={fetchParents} selectedParent={selectedParent}/>
    </>
  )
}

export default Parent
