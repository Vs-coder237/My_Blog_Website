import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './login.jsx'
import Register from './register.jsx'


const routes = createBrowserRouter([
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/Register',
    element: <Register/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
