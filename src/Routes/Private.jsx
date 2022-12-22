import React, { useContext } from 'react'
import {Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/auth/authContext'
const Private = ({children}) => {
    const {isLogin} = useContext(AuthContext);
  return (
    isLogin ? children : <Navigate to="/login"/>
  )
}

export default Private