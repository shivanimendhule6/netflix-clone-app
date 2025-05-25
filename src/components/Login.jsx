import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm , setIsSignInForm]= useState(true);
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg" alt="" srcset="" />
        </div>
        <form className='w-3/12 absolute p-12 bg-[#000000d7] my-36 mx-auto right-0 left-0 text-white rounded-lg top-0.5'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {isSignInForm && <input type="text" name="" placeholder="Full Name" className='p-4 my-4 w-full bg-[#161616b3] border-[0.6px] border-[#625f5fe6] rounded-sm'/>}
          <input type="email" name="" placeholder="Email Address" className='p-4 my-4 w-full bg-[#161616b3] border-[0.6px] border-[#625f5fe6] rounded-sm'/>
          <input type="password" name="" placeholder="Password" className='p-4 my-4 w-full bg-[#161616b3] border-[0.6px] border-[#625f5fe6] rounded-sm'/>
          <button type="button" className='px-4 py-2 my-5 bg-red-700 w-full rounded-sm text-[1rem] font-semibold cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign up Now" : "Already Regestered ? Sign In"} </p>
        </form>
    </div>
  )
}

export default Login