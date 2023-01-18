import { Alert } from '@mui/material'
import React from 'react'

const Alerta = ({children}) => {
  return (
    <>
     <Alert severity="success" variant="outlined" sx={{marginBottom:'10px',width:'250px',position:'absolute'}}>{children}</Alert>    
    </>
  )
}

export default Alerta