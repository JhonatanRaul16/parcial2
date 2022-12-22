import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './Context/auth/authContext'
import { DatosContextProvider } from './Context/datos/datosContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DatosContextProvider>
      <App />
      </DatosContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
