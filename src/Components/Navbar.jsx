import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { AuthContext } from '../Context/auth/authContext'
const Navbar = () => {
  const {logout} = useContext(AuthContext);
  return (
    <div className='flex items-center justify-between p-2 gap-10 bg-green-600 text-white font-medium'>
        <div className='flex items-center  gap-10'>
          <div className='p-2 bg-white rounded'>
            <img src={Logo} alt="" className='w-12'/>
          </div>
          <div>
            <Link className='p-2' to="/">
              Dashboard
            </Link>
          </div>
          <div>
            <Link className='p-2' to="/asistencia">
              Asistencia
            </Link>
          </div>
        </div>
      <div className='flex items-center  gap-10'>
        <Link className='p-2 text-green-500 bg-white rounded ' onClick={logout} to="/login">
            Logout
        </Link>
      </div>
    </div>
  )
}

export default Navbar