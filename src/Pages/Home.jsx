import React, { useContext, useState} from 'react'
import Tables from '../Components/Tables'
import Logo from '../images/logo.png'
import ListItem from '../Components/ListItem'
import CardInfo from '../Components/CardInfo'
import { AppBar, Button, Grid, Paper, Toolbar, Typography } from '@mui/material'
import {  Box } from '@mui/system'
import { AuthContext } from '../Context/auth/authContext'
import { Link } from 'react-router-dom'
import FormCreate from '../Components/FormCreate'
import Swit from '../Components/Swit'
import Alerta from '../Components/Alerta'
const Home = () => {
  const {logout} = useContext(AuthContext);
  return (
    <div className='w-full flex'>
      <div className='flex flex-col h-screen sticky top-0 w-1/5  border-r-2  border-dotted'>
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
        <Box sx={{position:'absolute',bottom:'15px',left:'15px'}}>
          <Swit/>
        </Box>
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
                    <Button color="inherit">
                      <Link onClick={logout} to='/login'>
                       Salir
                      </Link>
                    </Button>
                  </Toolbar>
                </AppBar>
              </Box>
              
            </Grid>
            <Box sx={{padding:'20px',width:'100%'}}>
              <Grid
                item
                xs={12}>
                  <FormCreate>
                    <Button
                    sx={{borderRadius:'10px',
                        backgroundColor:'rgb(238,243,251)',
                        marginBottom:'15px',
                        fontWeight:'500'
                        }}
                    title="+ usuario">Nuevo usuario
                    </Button>
                  </FormCreate> 
              </Grid>
              <Grid
               container
               xs={12}
               spacing={3}
               >
                <Grid 
                item
                xs={8}
                >
                <Paper sx={{p:2,overflowX:'scroll'}} >
                <Tables/>
                </Paper>
              </Grid>
              <Grid
              item
              xs={4}>
                <Paper>
                    <CardInfo/>
                </Paper>
              </Grid>
              </Grid>
              </Box>
          </Grid>
          
      </div>
    </div>
  )
}

export default Home