import { Backdrop, Button, CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import Lottie from "lottie-react";
import Load from  "../assets/load.json";
const Spin = () => {
    const [open,setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }
    const handleToggle = () => {
        setOpen(!open);
    }
  return (
    <div>
        <Button onClick={handleToggle}>
            xd
        </Button>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor:"rgba(255,255,255,0.8)"}}
        open={open}
        onClick={handleClose}
        >
        <Lottie animationData={Load}/>
        </Backdrop>
    </div>
  )
}

export default Spin