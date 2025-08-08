import React from 'react'

function Register() {
  return (
    <div className='flex items-center justify-center w-full h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-purple-500'>
       <div className=' w-[330px] px-8 py-8 bg-white rounded-xl flex flex-col gap-6 '>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-[Pacifico] text-purple-500 font-medium'>Register</h1>
          <a className='px-3 py-2 text-md bg-purple-100 rounded-lg hover:text-white hover:bg-purple-500 font-medium font-[Outfit] transition-all duration-300 hover:scale-102' href="">Login</a>
        </div>
        <form action="" className='flex flex-col gap-2 w-full items-center'>
          <div className="text-area flex flex-col gap-2">
            <label htmlFor="email" className='text-lg font-medium font-[Outfit] '>Email : </label>
            <input type="text" placeholder='Enter email...' className='w-full  bg-gray-300 px-5 py-2 outline-none rounded-lg border-2 border-gray-500 hover:border-purple-500 '  />
          </div>
          <div className="text-area  flex flex-col gap-2  justify-items-start">
            <label htmlFor="username" className='text-lg font-medium font-[Outfit]'>Username : </label>
            <input type="text" placeholder='Enter username...' className='w-full  bg-gray-300 px-5 py-2 outline-none rounded-lg border-2 border-gray-500 hover:border-purple-500 ' />
          </div>
          <div className="text-area  flex flex-col gap-2">
            <label htmlFor="password" className='text-lg font-medium font-[Outfit]'>Password : </label>
            <input type="text" placeholder='Enter password...' className='w-full  bg-gray-300 px-5 py-2 outline-none rounded-lg border-2 border-gray-500 hover:border-purple-500 ' />
          </div>
          <button type='submit' className='px-5 py-2 cursor-pointer rounded-lg text-white bg-purple-500 w-fit justify-items-center'>submit</button>
        </form>
       </div>
    </div>
  )
}

export default Register
