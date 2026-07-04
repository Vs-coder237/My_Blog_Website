import { useState } from 'react'


function Register() {

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center bg-blue-400'>
        <div className='w-110 h-200 bg-white rounded-2xl'>
          <div className='flex justify-center items-center mt-5'>
            <div class="flex flex-col gap-1"> 
              <span class="font-serif text-8xl font-bold tracking-tight text-gray-900 dark:text-white">bloggy</span> 
              <div class="w-30 h-1.5 bg-amber-400 rounded-full"></div>
            </div>
          </div>

          <p className='text-2xl font-bold ml-3 mt-5'>Getting Started.!</p>
          <p className='text-[16px] font-bold m-3 mt-1 opacity-35'>Create an Account to Start your Discoveries</p>

          <form action="" className='flex flex-col gap-3 m-3'>
            
            <div>
              <label className="block mb-2 font-bold text-gray-700" htmlFor='email'>Name</label>
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <i class="fa-solid fa-user text-gray-400"></i>
                <input type="email" placeholder="Enter Full Name" class="ml-3 w-full outline-none bg-transparent"/>
              </div>
            </div>
            
            <div>
              <label className="block mb-2 font-bold text-gray-700" htmlFor='email'>Email Address</label>
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <i class="fa-solid fa-envelope text-gray-400"></i>
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

            <div>
              <label className="block mb-2 font-bold text-gray-700" htmlFor='email'>Confirm Password</label>
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-500">
                <i class="fa-solid fa-lock text-gray-400"></i>
                <input type="password" placeholder=".................." class="ml-3 w-full outline-none bg-transparent"/>
              </div>
            </div>

            {/* <div className="flex justify-between items-center">
              <label className="flex items-center gap-2">
                <input type="checkbox"/>
                <span className="text-gray-600">
                  Remember me
                </span>
              </label>

              <a href="#" className="text-indigo-600 hover:underline text-sm"> Forgot password </a>
            </div> */}

            <button className="w-[50%] bg-indigo-600 hover:scale-95 cursor-pointer text-white py-3 rounded-xl font-semibold transition m-auto mt-4"> Register </button>
          </form>

          <div className='flex items-center justify-center gap-3 mt-4'>
            <hr className='h-0.5 w-[30%]'/>
            <p className='text-center font-bold text-[15px]'>Or Continue With</p>
            <hr className='h-0.5 w-[30%]'/>
          </div>

          <div>
            <a href=""><i class="fa-solid fa-google text-gray-400"></i></a>
          </div>

          

          <div className="text-center mt-6">
            <span className="text-gray-600">Already Have an Account?</span>
            <a href="#" className="text-indigo-600 font-semibold hover:underline m-3">Login</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
