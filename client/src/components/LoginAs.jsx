import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

function LoginAs() {

    const navigate=useNavigate();
  return (
    <Box 
     sx={{
        width:400,
        mx:"auto",
        mt:2,
        textAlign:"center",
        border:"2px solid black",
        p:5,
         background:
    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "24px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)"

        
    }}>

        <Typography variant="h3" sx={{
                fontWeight:700,
                fontFamily:"poppins",
                color:"white"

            }}>Login As</Typography>

        <Grid container sx={{mt:5}}>

            <Grid size={{xs:12,md:6}}>
                 <Button variant="contained" type='submit' className='loginbutton' sx={{
                borderRadius:"28px",
                backgroundColor:"rgb(54, 14, 133);",
                border:"2px solid white",
                height:"50px",
                width:"120px",

                transition:"all 0.2s ease",

               "&:hover":{
                  backgroundColor:"rgb(54, 14, 133)",   // color same rahega
                  boxShadow:" 0 0 20px rgb(132, 220, 236)",
                  transform:"translateY(-2px)"
                }

                }} onClick={()=>navigate("/studentlogin")}>Student</Button>
            </Grid>
            <Grid size={{xs:12,md:6}}>
                 <Button variant="contained" type='submit' className='loginbutton' sx={{
                borderRadius:"28px",
                backgroundColor:"rgb(54, 14, 133);",
                border:"2px solid white",
                height:"50px",
                width:"120px",

                transition:"all 0.2s ease",

               "&:hover":{
                  backgroundColor:"rgb(54, 14, 133)",   // color same rahega
                  boxShadow:" 0 0 20px rgb(132, 220, 236)",
                  transform:"translateY(-2px)"
                }

                }} onClick={()=>navigate("/teacherlogin")}>Teacher</Button>
            </Grid>



        </Grid>

         <Grid container sx={{mt:5}}>

            <Grid size={{xs:12,md:6}}>
                 <Button variant="contained" type='submit' className='loginbutton' sx={{
                borderRadius:"28px",
                backgroundColor:"rgb(54, 14, 133);",
                border:"2px solid white",
                height:"50px",
                width:"120px",

                transition:"all 0.2s ease",

               "&:hover":{
                  backgroundColor:"rgb(54, 14, 133)",   // color same rahega
                  boxShadow:" 0 0 20px rgb(132, 220, 236)",
                  transform:"translateY(-2px)"
                }

                }} onClick={()=>navigate("/adminlogin")}>Admin</Button>
            </Grid>
            <Grid size={{xs:12,md:6}}>
                 <Button variant="contained" type='submit' className='loginbutton' sx={{
                borderRadius:"28px",
                backgroundColor:"rgb(54, 14, 133);",
                border:"2px solid white",
                height:"50px",
                width:"120px",

                transition:"all 0.2s ease",

               "&:hover":{
                  backgroundColor:"rgb(54, 14, 133)",   // color same rahega
                  boxShadow:" 0 0 20px rgb(132, 220, 236)",
                  transform:"translateY(-2px)"
                }

                }} onClick={()=>navigate("/parentlogin")}>Parent</Button>
            </Grid>



        </Grid>

    </Box>
  )
}

export default LoginAs