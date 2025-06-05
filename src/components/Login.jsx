import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { auth} from '../utils/firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage , SetErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick =()=>{
    const message = checkValidateData( email.current.value , password.current.value);
    SetErrorMessage(message);
    if(message) return;
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value , photoURL: "https://avatars.githubusercontent.com/u/173082579?v=4"
            }).then(() => {
               const {uid , email ,password, displayName, photoURL } = auth.currentUser;
                dispatch (addUser({uid : uid ,email : email ,password :password ,displayName :displayName  , photoURL:photoURL }));
               navigate("/browse");
            }).catch((error) => {
              const errorMessage = error.message;
              SetErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + '-' + errorMessage);
        });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        SetErrorMessage(errorCode + '-' + errorMessage);
      });
    }
  };
  const toggleSignInForm =()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
        <div>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg" alt="banner Image" />
        </div>
        <form className='w-3/12 absolute p-12 bg-[#000000d7] my-36 mx-auto right-0 left-0 text-white rounded-lg top-0.5' onSubmit={(e)=>e.preventDefault}>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm && <input ref={name} type="text" name="" placeholder="Full Name" className='p-4 my-4 w-full bg-[#161616b3] border-[0.6px] border-[#625f5fe6] rounded-sm'/>}
          <input ref={email} type="email" name="" placeholder="Email Address" className='p-4 my-4 w-full bg-[#161616b3] border-[0.6px] border-[#625f5fe6] rounded-sm'/>
          <input ref={password} type="password" name="" placeholder="Password" className='p-4 my-4 w-full bg-[#161616b3] border-[0.6px] border-[#625f5fe6] rounded-sm'/>
          <p className='text-red-700 font-bold text-sm'>{errorMessage}</p>
          <button type="button" onClick={handleButtonClick} className='px-4 py-2 my-5 bg-red-700 w-full rounded-sm text-[1rem] font-semibold cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign up Now" : "Already Regestered ? Sign In"} </p>
        </form>
    </div>
  )
}

export default Login;