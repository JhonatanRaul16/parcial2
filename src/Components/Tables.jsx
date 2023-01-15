import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { DatosContext } from '../Context/datos/datosContext'
import Title from './Title';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
const Tables = () => {
    const {cursos,eliminarCursos,editCursos} = useContext(DatosContext);
    
  return (
    <>
    <Title>Lista de docentes</Title>
        <Table sx={{minWidth:750}}>
            <TableHead>
            <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>telefono</TableCell>
                <TableCell>Acción</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell sx={{display:'flex',gap:"5px"}}>
                <IconButton aria-label='ver' color='primary'>
                    <VisibilityIcon />
                </IconButton>
                <IconButton aria-label='editar' color='success' >
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label='error' color='error'>
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