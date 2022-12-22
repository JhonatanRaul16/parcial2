import React, { useContext } from 'react';
import {Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/auth/authContext';
const Public = ({children}) => {
    const {isLogin} = useContext(AuthContext);
  return (
    !isLogin ? children : <Navigate to="/"/> 
  )
}

export default Public