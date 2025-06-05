import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser , removeUser } from '../utils/userSlice';
import { LOGO_IMG } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      console.log(error)
    });
  }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid , email ,password, displayName, photoURL } = user;
              dispatch (addUser({uid : uid ,email : email ,password :password ,displayName :displayName  , photoURL:photoURL }))
              navigate("/browse");
          } else {
              // User is signed out
              dispatch (removeUser());
              navigate("/");
          }
      });
      return () =>  unsubscribe ();
    },[]) 

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className='w-44' src={LOGO_IMG} alt='logo' />
      { user && <div className="flex p-2 justify-between items-center gap-6">
            <img
              className="hidden md:block w-10 h-10 rounded-4xl"
              alt="usericon"
              src={user?.photoURL}
            />
            <button onClick={handleSignOut} className="font-bold text-white ">
              (Sign Out)
            </button>
        </div>
      }
    </div>
  );
};

export default Header;