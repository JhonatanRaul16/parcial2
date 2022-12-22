import React, { useContext, useEffect } from 'react'
import { DatosContext } from '../Context/datos/datosContext'
const Table = () => {
    const {cursos,eliminarCursos,editCursos} = useContext(DatosContext);
    
  return (
    
    <table className="w-full text-sm text-left text-gray-500">
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
    </table>
  )
}

export default Table