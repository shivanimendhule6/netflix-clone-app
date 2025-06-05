import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { auth} from '../utils/firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PHOTO_URL } from '../utils/constants';
import { LOGIN_BANNER } from '../utils/constants';


const Login = () => {
  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage , SetErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
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
              displayName: name.current.value , photoURL: PHOTO_URL
            }).then(() => {
               const {uid , email ,password, displayName, photoURL } = auth.currentUser;
                dispatch (addUser({uid : uid ,email : email ,password :password ,displayName :displayName  , photoURL:photoURL }));
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
        console.log(user);
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
            <img src={LOGIN_BANNER} alt="banner Image" />
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