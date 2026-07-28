import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import google from './assets/google.svg'
import facebook from './assets/facebook.svg'

function Login() {
  const navigate = useNavigate()

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center bg-blue-400'>
        <div className='w-110 h-200 bg-white rounded-2xl'>
          <div className='flex justify-center items-center mt-10'>
            <div class="flex flex-col gap-1"> 
              <span class="font-serif text-9xl font-bold tracking-tight leading-none text-gray-900 dark:text-white">bloggy</span> 
              <div class="w-37 h-1.5 bg-amber-400 rounded-full"></div>
            </div>
          </div>

          <p className='text-2xl font-bold ml-3 mt-10'>Let's Get SignIn.!</p>
          <p className='text-[16px] font-bold m-3 mt-3 opacity-35'>Login to your account to continue your discoveries</p>

          <form action="" className='flex flex-col gap-6 m-3'>
            <div>
              <label className="block mb-2 font-bold text-gray-700" htmlFor='email'>Email Address</label>
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <i className="fa-solid fa-envelope text-gray-400"></i>
                <input type="email" placeholder="example@gmail.com" class="ml-3 w-full outline-none bg-transparent"/>
              </div>
            </div>

            <div>
              <label className="block mb-2 font-bold text-gray-700" htmlFor='email'>Password</label>
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <i class="fa-solid fa-lock text-gray-400"></i>
                <input type="password" placeholder=".................." class="ml-3 w-full outline-none bg-transparent"/>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2">
                <input type="checkbox"/>
                <span className="text-gray-600">
                  Remember me
                </span>
              </label>

              <a href="#" className="text-indigo-600 hover:underline text-sm"> Forgot password </a>
            </div>

            <button className="w-[90%] bg-indigo-600 hover:scale-95 cursor-pointer text-white py-3 rounded-xl font-semibold transition m-auto"> Login </button>
          </form>

          <div className='flex items-center justify-center gap-3 mt-6'>
            <hr className='h-0.5 w-[30%]'/>
            <p className='text-center font-bold text-[15px]'>Or Continue With</p>
            <hr className='h-0.5 w-[30%]'/>
          </div>

          <div className='flex items-center justify-center gap-10 mt-10'>
            <button className='flex items-center justify-center bg-amber-100 w-12 h-12 rounded-full'><img src={google} alt="Google icon" className='w-6 h-6'/></button>
            <button className='flex items-center justify-center bg-amber-100 w-12 h-12 rounded-full'><img src={facebook} alt="Google icon" className='w-6 h-6'/></button>
          </div>

          

          <div className="text-center mt-5">
            <span className="text-gray-600">Don't have an account?</span>
            <button onClick={() => navigate("/Register")} className="text-indigo-600 font-semibold hover:underline m-3 cursor-pointer">Create Account</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
