import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { DatosContext } from '../Context/datos/datosContext'
const Form = () => {

    const {actualizarCursos,editCursos,edit,crearCurso} = useContext(DatosContext);
    const [inputs, setInputs] = useState({
        nombre:"",
        semestre:"",
        creditos:"",
      });
    const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
    }
    const handleSubmit = e =>{
        e.preventDefault();
        crearCurso(inputs);
    }
    console.log(inputs);
  return (
    <div className='ml-4 mr-4'>
        <div className='mb-4'>
            <h1 className='text-center text-white bg-green-500'>Formulario de Registro</h1>
        </div>
        <form className='flex flex-col gap-5'>
            <input
            className='p-2 border border-color-slate-500'
            name='nombre'
            onChange={handleChange} 
            type="text"
            required
            placeholder='Nombre' />
            <input 
            type="text"
            name='semestre'
            onChange={handleChange} 
            required
            className='p-2 border border-color-slate-500'
            placeholder='Semestre' />
            <input
            name='creditos'
            type="number"
            onChange={handleChange} 
            required
            className='p-2 border border-color-slate-500'
            placeholder='Creditos' />
            <div>
                <button
                className='bg-blue-500 text-white rounded p-2'
                onClick={handleSubmit}
                >Crear</button>
            </div>
        </form>
    </div>
  )
}

export default Form