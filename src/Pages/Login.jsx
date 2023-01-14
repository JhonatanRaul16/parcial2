import React, { useState,useEffect, useContext} from 'react';
import Logo from '../images/logo.png';
import {AuthContext} from '../Context/auth/authContext';
import { useNavigate } from 'react-router';
import { Avatar, Box, Button,  Grid, Link,  Paper, TextField, Typography } from '@mui/material';
import Lottie from "lottie-react";
import Uno from "../assets/uno.json"
const Login = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        username:"",
        password:"",
      });

      const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        login(inputs);
        navigate("/");
      } 

  return (
    <div>
        <Grid
        container
        sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}
        >
            <Grid 
            item
            xs={false}
            sm={4}
            md={7}
            sx={{height:'100vh'}}
            >
                <Lottie animationData={Uno} style={{height:'100%'}}></Lottie>
            </Grid>
            <Grid 
            item 
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            >
            <Box
            sx={{
                my:8,
                mx:10,
                display:'flex',
                gap:'20px',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <Box sx={{width:'80px'}}>
                    <img src={Logo} alt="" />
                </Box>
                <Typography 
                component="h1" 
                variant='h5'
                color="blue" 
                fontWeight="bold"
                >
                    INICIAR SESIÓN
                </Typography>
                 <TextField 
                    id="outlined-basic" 
                    label="Usuario"
                    fullWidth
                    name="username"
                    variant="outlined"
                    onChange={handleChange}
                    autoFocus
                    required
                />
                
                <TextField
                    id="outlined-password-input"
                    label="Contraseña"
                    fullWidth
                    type="password"
                    
                    autoComplete="current-password"
                    onChange={handleChange}
                    required
                 />
                 <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 3, mb: 2 }}
                 >
                    Ingresar
                 </Button>
                 <Grid 
                  container
                  spacing={2}>
                    <Grid item xs sx={{
                        textAlign:'center'
                    }} >
                        <Link href='' variant='body2'>
                         Olvido su contraseña
                        </Link>
                    </Grid>
                    <Grid item xs sx={{
                        textAlign:'center'
                    }}>
                        <Link href='' variant='body2'>
                            Registrase
                        </Link>
                    </Grid>
                 </Grid>
            </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default Login