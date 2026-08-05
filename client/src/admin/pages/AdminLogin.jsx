import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React,{useState,useEffect} from 'react'
import api from "../../utils/axios";
import { useNavigate } from "react-router-dom";
// const BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
// console.log(BACKEND_URL);
const AdminLogin = () => {
  const navigate=useNavigate();
    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })
    const handleChange=(e)=>{
          setFormData({
            ...formData,
            [e.target.name]:e.target.value,
          })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await api.post("/api/user/admin/login",formData);
            console.log(response.data);
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("role",response.data.role);
            navigate("/admin");
        } catch (error) {
            console.log(error.response.data);
        }
        setFormData({
        email:"",
        password:"",
        })
    }
    useEffect(()=>{
      const token=localStorage.getItem("token");
      if(token){
        navigate("/admin");
      }
    },[]);
  return (
    <div>
      <form onSubmit={handleSubmit} style={{
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        width:"400px",
        margin:"80px auto"
      }}>
    <TextField label="Email" name="email" value={formData.email} onChange={handleChange}/>
    <TextField label="Password" name="password" value={formData.password} onChange={handleChange}/>
    <Button variant="contained" type="submit">Login</Button>
</form>
    </div>
  )
}

export default AdminLogin

