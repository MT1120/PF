import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

import { useFirebase } from '../firebaseContext'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Form({ setIsLogin }) {
  const [user, setUser] = useState();
  const { auth } = useFirebase();
  const navigate = useNavigate();
  const location = useLocation();
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPassValue, setInputPassValue] = useState('');

  const handleInputEmailChange = (event) => {
    setInputEmailValue(event.target.value);
  };
  const handleInputPassChange = (event) => {
    setInputPassValue(event.target.value);
  };
  const from = location.state?.from?.pathname || "/loginH";
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });


    return () => unsubscribe();
  }, [auth]);
  const logued= ()=>{
    setIsLogin(true);
    sessionStorage.setItem('token', user);
    navigate(from);
  }
  const signInWithGoogle = async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
       
        logued();
      })
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
  };
  const signInWithEmail = async (e) => {
    e.preventDefault();

    const email = inputEmailValue;
    const password = inputPassValue;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        logued();
      })
      .catch((error) => {
        // Handle sign-in error
        console.error(error);
      });
  };
 


  return (
    <div>
      <h1 className='text-5xl font-semibold text-[#0077B6]'>
        Bienvenidos
      </h1>
      <p className='font-medium text-lg text-sky-600  mt-4'>
        Ingresa tus datos
      </p>
      <div className='mt-8'>
        <div>
          <form onSubmit={signInWithEmail}>
            <div>
              <label htmlFor="" className='text-lg font-medium text-[#0077B6]'>
                Email
              </label>
              <input onChange={handleInputEmailChange} id='email' type="email" className='w-full border-2 border-sky-600 rounded-xl p-4 mt-1 bg-transparent text-[#0077B6]' placeholder='Ingresa tu correo' />
            </div>

            <div className='mt-4'>
              <label htmlFor="" className='text-lg font-medium text-[#0077B6]'>
                Contraseña
              </label>
              <input id='pass' onChange={handleInputPassChange} type="password" className='w-full border-2 border-sky-600 rounded-xl p-4 mt-1 bg-transparent text-[#0077B6]' placeholder='******' />
            </div>

            <div className='mt-8 flex flex-col gap-y-4'>
              <button className='active:scale-[.98] active:duration-75 hover:scale-[1.2] ease-in-out transition-all p-2 rounded-xl bg-sky-400 text-white  text-lg font-bold ' type="submit" onClick={signInWithEmail}>


                Ingresar

              </button>
              <button className='active:scale-[.98] active:duration-75 hover:scale-[1.2] ease-in-out transition-all p-2 rounded-xl bg-sky-400 text-white  text-lg font-bold ' onClick={signInWithGoogle}>


                Ingresar con Google

              </button>
            </div>
          </form>
          <div className='flex items-center justify-center'>
            <button className='font-medium text-base text-[#0077B6]  mt-5' >
              <Link to={'/register'}>
                Eres nuevo ?
              </Link>

            </button>
          </div>
        </div>

      </div>
    </div>

  )
}