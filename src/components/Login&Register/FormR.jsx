import React from 'react'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function FormR() {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    // 👇️ Navigate to /contacts
    navigate('/login');
  };

  return (
    <div className='z-10'>
      <p className='font-medium text-lg text-sky-600 mt-4'>
        Ingresa tus datos
      </p>
      <div className='mt-8'>
        <div>
          <form >

            <div className=' flex flex-row items-center justify-center  mt-2'>
              <label htmlFor="" className='text-lg font-medium pr-3 text-home'>
                Nombre
              </label>
              <input type="text" className='w-full border-2 border-sky-600 rounded-xl p-4 mt-1 bg-transparent text-home' placeholder='Ingresa tu Nombre'  />
            </div>

            <div className=' flex flex-row items-center justify-center  mt-2'>
              <label htmlFor="" className='text-lg font-medium pr-3 text-home'>
                Apellido
              </label>
              <input type="text" className='w-full border-2 border-sky-600 rounded-xl p-4 mt-1 bg-transparent text-home' placeholder='Ingresa tu Apellido'  />
            </div>

            <div className=' flex flex-row items-center justify-center  mt-2'>
              <label htmlFor="" className='text-lg font-medium pr-3 text-home'>
                Telefono
              </label>
              <input type="text" className='w-full border-2 border-sky-600 rounded-xl p-4 mt-1 bg-transparent text-home' placeholder='Ingresa tu telefono' />
            </div>

            <div className=' flex flex-row items-center justify-center  mt-2'>
              <label htmlFor="" className='text-lg font-medium pr-3 text-home'>
                Email
              </label>
              <input type="email" className='w-full border-2 border-sky-600 rounded-xl p-4 mt-1 bg-transparent text-home' placeholder='Ingresa tu correo' />
            </div>

            

            <div className=' flex flex-row items-center justify-center  mt-2'>
              <label htmlFor="" className='text-lg font-medium pr-3 text-home'>
                Contraseña
              </label>
              <input type="password" className='w-full border-2 border-sky-600 rounded-xl p-4 mt-1 bg-transparent text-home' placeholder='******' /> 
            </div>

            <div className='mt-8 flex flex-col gap-y-4'>
              <button className='active:scale-[.98] active:duration-75 hover:scale-[1.2] ease-in-out transition-all p-2 rounded-xl bg-sky-400 text-home  text-lg font-bold '  type="submit" onClick={navigateToLogin}>
                Registrar
              </button>
            </div>
          </form>

          
          
        </div>
      </div>
    </div>

  )
}
