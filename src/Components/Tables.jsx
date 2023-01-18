import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { DatosContext } from '../Context/datos/datosContext'
import Title from './Title';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Form from './Form';
  
const Tables = () => {
    /* const {cursos,eliminarDocentes,editCursos} = useContext(DatosContext); */
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
                <IconButton aria-label='editar' color='success' >
                    <Form editar={"Editar Docente"}>
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
   /*  <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-xs text-white uppercase bg-green-500 ">
        <tr>
            <th  className="py-1 px-3 text-center">
             Nombre
            </th>
            <th  className="py-1 px-3 text-center">
             Semestre
            </th>
            <th  className="py-1 px-3 text-center">
             Creditos
            </th>
            <th  className="py-1 px-3 text-center">
             Accion
            </th>
        </tr>
    </thead>
    <tbody>
        {
            cursos.map(curso => {
                return(
                    <tr key={curso.id} className="bg-white border-b">
                        <th className="py-1 px-3 font-medium text-gray-900">
                            {curso.nombre}
                        </th>
                        <td className="py-1 px-3 text-center">
                            {curso.semestre}
                        </td>
                        <td className="py-1 px-3 text-center">
                            {curso.creditos}
                        </td>
                        <td className="text-center">
                            <div className='flex items-center justify-center gap-4'>
                                <button 
                                className='bg-red-500 text-white rounded p-2'
                                onClick={()=>eliminarCursos(curso.id)}
                                >Delete</button>
                                <button
                                className='bg-blue-500 text-white rounded p-2'
                                onClick={()=>editCursos(curso.id)}
                                >Edit</button>
                            </div>
                        </td>
                    </tr>
                )
            })
        }
    </tbody>
    </table> */
  )
}

export default Tables