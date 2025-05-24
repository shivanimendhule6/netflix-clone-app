import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
       <div>
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg" alt="" srcset="" />
       </div>
       <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type="email" name="" placeholder="Email Address" className='p-4 my-04 w-full bg-grey-700'/>
        <input type="password" name="" id="" placeholder="Password" className='p-4 my-04 w-full bg-grey-700'/>
        <button type="button" className='p-4 my-6 bg-red-700 w-full rounded-lg'>Sign In</button>
       </form>
    </div>
  )
}

export default Login