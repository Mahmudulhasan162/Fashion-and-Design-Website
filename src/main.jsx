import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Route/Router.jsx'
import AuthProvider from './Components/Firebase/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={Router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
