import React, { useState,useEffect, useContext} from 'react';
import Fondo from '../images/descarga.jfif';
import Logo from '../images/logo.png';
import {AuthContext} from '../Context/auth/authContext';
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        email:"",
        password:"",
        device_name:"web"
      });
      const handleChange = e =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        login(inputs);
        navigate("/");
      } 

  return (
    <div className='h-screen w-full flex'>
        <div className='w-2/5'>
            <div className='px-8'>
            <p className='text-center mt-8 font-bold text-2xl text-blue-500'>INICIAR SESIÓN</p>
            <form className='mt-8'>
                <div className="mb-6 w-full flex items-center justify-center">
                    <input 
                    type="text" 
                    name='email' 
                    className="bg-gray-50 w-2/3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Correo electronico"
                    onChange={handleChange} 
                    required/>
                </div>
                <div className="mb-6 w-full flex items-center justify-center">
                    <input 
                    type="password" 
                    name='password' 
                    className="bg-gray-50 w-2/3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder='Contraseña'
                    onChange={handleChange}
                    required/>
                </div>
                <div className='w-full flex  items-center justify-center'>
                    <button onClick={handleSubmit}  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">Ingresar</button>  
                </div>     
            </form>
            </div>
        </div>
        <div className='w-3/5'>
            <div className='w-full h-full relative'>
                <img src={Fondo} className='w-full h-full' alt="" />
                <div className='absolute top-32  flex flex-col'>
                    <img src={Logo} alt="" />
                    <p className='text-center text-white'>ASISTENCIA FIS</p>
                    <p className='text-center text-white'>Sistema para el control de asistencia para <br />la FIS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login