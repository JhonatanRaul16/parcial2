import { Avatar, Box, Card, CardContent, CardHeader, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Title from './Title'
const CardInfo = () => {
  return (
    <>
     <Card sx={{
      padding:'12px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      }}>
        <Title>Info Usuario</Title>
        <Avatar sx={{ bgcolor:"red",}} aria-label="recipe">
              J
        </Avatar>
        <CardContent sx={{width:"100%"}}>
          <Typography variant="body2" sx={{textAlign:'center', fontWeight:'700'}}>
            Jhon bujaico
          </Typography>
          <Box sx={{textAlign:'left'}}>
          
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PhoneInTalkIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Teléfono" secondary="978456123" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AssignmentIndIcon/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Dni" secondary="78451" />
            </ListItem>
          </List>
          </Box>
         
        </CardContent>
     </Card>
    </>
  )
}

export default CardInfo