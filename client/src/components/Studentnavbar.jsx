import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo2 from "../assets/logo2.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';


const pages = [{title:'Home' , path:"/"},{title:'About Us' , path:'/'},{title:<NotificationsIcon sx={{color:"yellow"}}/>, path:"/"}];
const settings = ['Profile', 'Dashboard', 'Logout'];

function StudentNavbar({ sidebarOpen, setSidebarOpen }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let navigate=useNavigate();

  return (
    <AppBar position="fixed" sx={{backgroundColor:"#111827",boxShadow: "0 4px 20px rgba(91, 101, 192, 0.35)"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          
          <img
  src={logo2}
  alt="CampusNova"
  style={{
    height: 45,
    width: 45,
    mr: {
  xs: 1,
  md: 2
}
  }} 
/>

<Box sx={{ mr: { xs: 1, md: 2 } }} /> &nbsp;&nbsp;
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display:{
    xs:"none",
    md:"flex"
},
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }} 
          >
            Campus<span className='nova'>Nova</span>
          </Typography>

         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
    size="large"
    color="inherit"
    onClick={() => setSidebarOpen(true)}
>
    <MenuIcon />
</IconButton>
            
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:"flex-end"}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>navigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' ,mx:4}}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,mx:4}}>
               <AccountCircleIcon sx={{color:"white", height:35,width:35}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default StudentNavbar;
