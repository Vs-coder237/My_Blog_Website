import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../login'

function Home() {
    const navigate = useNavigate()
  return (
    <>
        <h1>Welcome Home</h1>
        <button onClick={() => navigate('/Login')} className='bg-amber-100 cursor-pointer transition-all hover:scale-95'> Go to the login Page</button>
    </>
  )
}

export default Home