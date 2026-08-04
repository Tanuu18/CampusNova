import React from 'react'
import logo from "../assets/logo.png"
import Navbar from '../components/navbar';
import "../css/home.css"
import bgimage2 from "../assets/bgimage2.png";
import Grid from '@mui/material/Grid';
import LoginForm from '../components/LoginForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import school from "../assets/school.png";
import LoginAs_2 from '../components/LoginAs_2';

export default function Studentlogin(){
  return (
    <div className="homepage">
        <Navbar/>
    
    <Grid container>

        <Grid size={{xs:12,md:7}}>
            <Box sx={{
                display:"flex",
                justifyContent:{xs:"center",md:"flex-start"},
                marginLeft:{xs:0,md:10,sm:10}, 
              

            }}>
                <Stack>
                    <img src={school} alt='School Image' className='schoolpic'></img>


                <Stack>
                <h1 className='hero-title'>Smart <span>School</span> Management <span>System</span></h1><br/>
                <p className='para'>An all-in-one school management platform designed to streamline student records, attendance, examinations, fees, timetables, faculty management, and communication with efficiency and security.</p>
                </Stack>
                </Stack>
            </Box>
            
        </Grid>
        <Grid size={{xs:12,md:5}} >
            <Box sx={{
                display:"flex",
                justifyContent:{md:"flex-end",xs:"center",sm:"center"},
                marginTop:10,
                marginLeft:10,
                marginRight:5
            
            }}>
            <Stack>
            <LoginForm loginpath="/studentdashboard" role="Student"/>
            <LoginAs_2/>
            </Stack>
            </Box>
        </Grid>

    </Grid>
    </div>
  );
}

