import { Avatar, Box, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { DatosContext } from '../Context/datos/datosContext'
import Lottie from "lottie-react";
import User from "../assets/userinfo.json"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Title from './Title'
const CardInfo = () => {
  const colors = ["red","green","blue","orange","pink","lightblue","purple"];
  const aleatorio = colors[Math.floor(Math.random() * colors.length)]
  const {edit} = useContext(DatosContext);
  const letter = edit?.nombre.charAt(0).toUpperCase();
  return (
    <>
    {
      edit ? 
      <Card sx={{
        padding:'12px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        }}>
          <Title>Info Usuario</Title>
          <Avatar sx={{ bgcolor:`${aleatorio}`}} aria-label="recipe">
                {letter}
          </Avatar>
          <CardContent sx={{width:"100%"}}>
            <Typography variant="body2" sx={{textAlign:'center', fontWeight:'700'}}>
              {edit.nombre} {edit.apellido}
            </Typography>
            <Box sx={{textAlign:'left'}}>
            
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneInTalkIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Teléfono" secondary={edit.telefono} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <AssignmentIndIcon/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Dni" secondary={edit.dni} />
              </ListItem>
            </List>
            </Box>
           
          </CardContent>
       </Card>
       :
       <>
       <Title><Box sx={{textAlign:'center',padding:'12px'}}>Info Usuario</Box></Title>
       <Lottie animationData={User} style={{height:'100%'}}></Lottie>
       </>
       
    }
    
    </>
  )
}

export default CardInfo