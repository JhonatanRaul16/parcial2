import React from 'react'
import Tables from '../Components/Tables'
import Form from '../Components/Form'
import Logo from '../images/logo.png'
import ListItem from '../Components/ListItem'
import { AppBar, Button, Divider, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import Navbar from '../Components/Navbar'
const Home = () => {
  
  return (
    <div className='w-full flex'>
      <div className='flex flex-col h-screen w-1/5'>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          gap:'15px',
          margin:'5px auto',
          width:'90%',
          backgroundColor:'rgba(145, 158, 171, 0.12)',
          padding:'16px 20px',
          borderRadius:'12px'
        }}>
         <img src={Logo} alt="" style={{width:'40px'}}/>
         <Typography 
                variant='span' 
                color="blue" 
                fontWeight="bold">
            FIS
         </Typography>
        </Box>
        <Box sx={{padding:'8px 16px',color:'rgb(99, 115, 129)',fontSize:'11px',fontWeight:'bold'}}>
          GENERAL
        </Box>
        <ListItem/>
      </div>
      <div className='flex w-4/5 '>
          <Grid
          container
          xs={12}
          >
            <Grid 
            item
            xs={12}>
              
              <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" sx={{backgroundColor:"rgb(238,243,251)",color:'blue',boxShadow:'none'}}>
                  <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      Dashboard
                    </Typography>
                    <Button color="inherit">Salir</Button>
                  </Toolbar>
                </AppBar>
              </Box>
              
            </Grid>
            <Grid 
            item
            xs={10}>
              <Paper sx={{p:2}} >
               <Tables/>
              </Paper>
            </Grid>
          </Grid>
      </div>
    </div>
  )
}

export default Home