import { Box, Button, IconButton, Modal, TextField} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import { DatosContext } from '../Context/datos/datosContext'
import ClearIcon from '@mui/icons-material/Clear';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:'12px'
    };

const Form = ({children}) => {
    const {actualizarDocentes,edit,borrarData} = useContext(DatosContext);
    const [inputs, setInputs] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        dni: "",
      });
     
      const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
      }
      useEffect(()=>{
        setInputs({
          nombre:edit?.nombre || '',
          apellido:edit?.apellido || '',
          telefono:edit?.telefono || '',
          dni:edit?.dni || '',
        })
      },[edit])
      const handleSubmit = e =>{
        e.preventDefault();
        actualizarDocentes(inputs);
        handleClose();
    }
    const [open,setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false)
    };
  return (
    <>
        <span
        onClick={handleOpen}
        style={{padding:'0',borderRadius:'50%'}}
        >{children}
        </span>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box sx={{
                display:'flex',
                justifyContent:'space-between',
                marginBottom:'15px'
            }}>
                <Title>
                Editar Docente
                </Title>
                <IconButton
                onClick={handleClose}
                 >
                <ClearIcon/>
                </IconButton>
            </Box>
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                gap:'20px'
            }}>
                <Box sx={{
                    display:'flex',
                    gap:'15px',
                    flexDirection:'column',
                }}>
                <TextField 
                id="outlined-basic"
                name='nombre'
                label="Nombre"
                size="small"
                onChange={handleChange}
                variant="outlined"
                value={edit?.nombre || ""}
                fullWidth
                required
                />
                <TextField 
                id="outlined-basic"
                size="small"
                value={edit?.apellido || ""}
                name='apellido'
                label="Apellido" 
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
                />
                </Box>
                
                <Box sx={{
                    display:'flex',
                    gap:'15px'
                }}>
                <TextField 
                id="outlined-basic"
                size="small"
                label="Teléfono"
                value={edit?.telefono || ""}
                name='telefono'
                onChange={handleChange}
                variant="outlined"
                sx={{ width: '25ch' }}
                required
                />
                <TextField 
                id="outlined-basic"
                size="small"
                label="Dni"
                onChange={handleChange}
                name='dni'
                value={edit?.dni || ""}
                variant="outlined"
                sx={{ width: '25ch' }}
                required
                />
                </Box>
                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 2, mb: 2 }}
                 >
                    Enviar
                 </Button>
            </Box>
        </Box>
      </Modal>
    </>
  )
}

export default Form