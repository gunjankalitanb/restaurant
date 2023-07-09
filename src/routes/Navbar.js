import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './styles/navbar.css';
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = ( )=> {
    setMobileOpen(!mobileOpen)

  }
  const drawer = (
    <Box onClick = {handleDrawerToggle} sx = {{textAlign:'center'}}>

<Typography 
          color={'Highlight'} variant='h6' component="div" sx={{flexGrow:1, my:2}}>
            <RamenDiningIcon></RamenDiningIcon>
            RESTAURANT_NAME
          </Typography>
{/* Divider betwen rest. name and home */}
     <Divider />    
    <ul className='mobile-navigation'>
      <li>
          <Link to={'/'}>Home</Link>
      </li>
      <li>
      <Link to={'/about'}>About</Link>
      </li>
      <li>
      <Link to={'/contact'}>Contact</Link>
      </li>
    </ul>
       

    </Box>
  )
  return (

    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor: "#333"}}>
          <Toolbar>
            <IconButton
             color='inherit'
              aria-label='open drawer'
               edge="start" 
               sx={{mr:2,
                 display: { sm: 'none'},
          }}
          onClick={handleDrawerToggle}
          >
           <DragHandleIcon />
            </IconButton>
          <Typography 
          color={'Highlight'} variant='h6' component="div" sx={{flexGrow:1}}>
            <RamenDiningIcon></RamenDiningIcon>
            RESTAURANT_NAME
          </Typography>

          <Box sx ={{display:{xs: "none", sm:"block"}}}>
    <ul className='navigation-menu'>
      <li>
          <Link to={'/'}>Home</Link>
      </li>
      <li>
      <Link to={'/about'}>About</Link>
      </li>
      <li>
      <Link to={'/contact'}>Contact</Link>
      </li>
    </ul>
          </Box>
          </Toolbar>
         
        </AppBar>

        <Box component="nav">
          <Drawer variant='temporary' open={mobileOpen} 
          
          onClose={handleDrawerToggle}
          sx={{display: {
            xs: "block",
            sm: "none"
          },
          "& .MuiDrawer-paper":{
            boxSizing:'border-box',
            width: '240px',
          }
        }}
          >
            {drawer}
          </Drawer>
        
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      </Box>
    </>
  )
}

export default Navbar;



















// <div className="navbar">
//       <div className="navbar-left">RESTAURANT_NAME</div>
//       <div className="navbar-right">
//         <a href="/about" className="nav-link">About</a>
//         <a href="/contact" className="nav-link">Contact</a>
//       </div>
//     </div>