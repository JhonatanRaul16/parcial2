import React, { useState,useEffect, useContext} from 'react';
import Fondo from '../images/descarga.jfif';
import Logo from '../images/logo.png';
import {AuthContext} from '../Context/auth/authContext';
import { useNavigate } from 'react-router';
import { Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import { width } from '@mui/system';

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
    <div className='h-screen w-full flex'>
        <Grid
        container
        spacing={2}
        sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}
        >
            <Grid 
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                background: 'linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(https://d500.epimg.net/cincodias/imagenes/2021/09/01/autonomos/1630526591_733817_1630910738_noticia_normal.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >
                <Box
                sx={{
                    display:'flex',
                    width:'100%',
                    height:'100%',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                <Box
                sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    flexDirection:'column'
                }}>
                    <img src={Logo} alt="" />
                    <Typography 
                    color="white" 
                    fontWeight="bold" 
                    variant='h2'>
                        Asistencia FIS
                    </Typography>
                    <Typography
                    variant='p'
                    color="white"
                    textAlign="center"
                    fontWeight="bold">
                     El sistema para control de docentes para <br />
                     la FIS
                    </Typography>
                </Box>
                </Box>
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
                mx:4,
                display:'flex',
                gap:'20px',
                flexDirection:'column',
                alignItems:'center'
            }}>
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
                    name='password'
                    autoComplete="current-password"
                    onChange={handleChange}
                    autoFocus
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