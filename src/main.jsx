import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { routers } from './Routers/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <AuthProvider>
      <RouterProvider router={routers}>
    <App />
    </RouterProvider>
  
    </AuthProvider>
  </React.StrictMode>,
)
