import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { DatosContext } from '../Context/datos/datosContext'
import Title from './Title';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Form from './Form';
  
const Tables = () => {
    const {docentes,eliminarDocentes,showDocentes} = useContext(DatosContext);
  return (
    <>
    <Title>Lista de docentes</Title>
        <Table sx={{minWidth:750}}>
            <TableHead>
            <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>Dni</TableCell>
                <TableCell>Acción</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {docentes.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell>{row.apellido}</TableCell>
              <TableCell>{row.telefono}</TableCell>
              <TableCell>{row.dni}</TableCell>
              <TableCell sx={{display:'flex',gap:"5px"}}>
                <IconButton aria-label='ver' color='primary' onClick={()=>showDocentes(row.id)}>
                    <VisibilityIcon />
                </IconButton>
                <IconButton aria-label='editar' color='success' onClick={()=>showDocentes(row.id)} >
                    <Form>
                     <EditIcon/>
                    </Form>
                </IconButton>
                <IconButton aria-label='error' color='error' onClick={()=>eliminarDocentes(row.id)}>
                    <DeleteIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
            </TableBody>
        </Table>
    </>
  )
}

export default Tables