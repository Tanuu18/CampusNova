import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import HttpsIcon from '@mui/icons-material/Https';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';


export default function LoginForm(){

    let navigate=useNavigate();
    const [ispasswordstate,setispasswordstate]=useState(false);

    const [formdata,setformdata]=useState({email:"" , password:""});

    let changepasswordstate=()=>{
        setispasswordstate(!ispasswordstate);
    }

    let formsubmit=(event)=>{

        event.preventDefault();
        if(formdata.email=="" || formdata.password==""){
            alert("E-Mail or Password can't be empty");
            return;
        }else{
           console.log(formdata);
           navigate("/studentdashboard");
        }
        
        setformdata({
            email:"",
            password:""
        });

    }

    let handleinputchange=(event)=>{
        let fieldname=event.target.name;
        let newvalue=event.target.value;
        
        setformdata((currdata)=>{
            return {...currdata,[fieldname]:newvalue};
        });
         
    }



    
  return (
    <Box 
    sx={{
        width:400,
        mx:"auto",
        mt:2,
        textAlign:"center",
        border:"2px solid black",
        // borderRadius:"15px",
        p:5,
         background:
    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "24px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)"

        
    }} >
        <form onSubmit={formsubmit}  >
        
        <Stack direction="column" spacing={2}  >
            <Typography variant="h3" sx={{
                fontWeight:700,
                fontFamily:"poppins",
                color:"white"

            }}>Login</Typography>
            <br/>
          <TextField name="email" id="email"  label="E-mail" variant="outlined" value={formdata.email} placeholder="Enter mail-id" onChange={handleinputchange} type="email"
                      slotProps={{
                        input:{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <EmailIcon sx={{color:"white"}}/>
                                </InputAdornment>
                     ),
                },
              }} sx={{
                "& .MuiInputLabel-root":{
                    color:"white",
                },
                "& .MuiOutlinedInput-root":{
                    color:"white",
                    

                    "& fieldset":{
                        borderColor:"white",
                    },

                    "&:hover fieldset":{
                        borderColor: "#cbcff1",
                        boxShadow: "0 0 20px rgba(139, 182, 239, 0.72)"
                    },

                    "&.Mui-focused fieldset":{
                        borderColor:"#C4B5FD"
                    }

                }
              }} /> 

               <TextField fullWidth required name='password' id="Password" value={formdata.password}  label="Password" variant="outlined" onChange={handleinputchange} placeholder="Enter Password" type={ispasswordstate==false?"password":"text"}
              slotProps={{
                input:{
                    startAdornment:(
                        <InputAdornment position='start'>
                            <HttpsIcon sx={{color:"white"}}/>
                        </InputAdornment>
                    ),
                    endAdornment:(
                        <InputAdornment position='end'>
                            <IconButton onClick={changepasswordstate}>{ispasswordstate==false?<VisibilityIcon sx={{color:"white"}}/>:<VisibilityOffIcon sx={{color:"white"}}/>}</IconButton>  
                          
                        </InputAdornment>

                    ),
                },
              }} sx={{
                "& .MuiInputLabel-root":{
                    color:"white",
                },
                "& .MuiOutlinedInput-root":{
                    color:"white",
                    

                    "& fieldset":{
                        borderColor:"white",
                    },

                    "&:hover fieldset":{
                        borderColor: "#cbcff1",
                        boxShadow: "0 0 20px rgba(139, 182, 239, 0.72)"
                    },

                    "&.Mui-focused fieldset":{
                        borderColor:"#C4B5FD"
                    }

                }
              }} />
              <br/>

               <Button variant="contained" type='submit' className='loginbutton' sx={{
                borderRadius:"28px",
                backgroundColor:"rgb(54, 14, 133);",
                border:"2px solid white",
                height:"50px"

                }} >Login</Button>

              </Stack>

          </form>    

    </Box>
  );
}
