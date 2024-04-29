import React from 'react'
import { Link } from 'react-router-dom'

// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function Form() {





  return (
    <div>
      <h1 className='text-5xl font-semibold text-white'>
        Bienvenidos
      </h1>
      <p className='font-medium text-lg text-sky-600  mt-4'>
        Ingresa tus datos
      </p>
      <div className='mt-8'>
        <div>
          <form>

            <div>
              <label htmlFor="" className='text-lg font-medium text-white'>
                Email
              </label>
              <input type="email" className='w-full border-2 border-sky-600 rounded-xl p-4 mt-1 bg-transparent text-white' placeholder='Ingresa tu correo' />
            </div>

            <div>
              <label htmlFor="" className='text-lg font-medium text-white'>
                Contraseña
              </label>
              <input type="password" className='w-full border-2 border-sky-600 rounded-xl p-4 mt-1 bg-transparent text-white' placeholder='******' />
            </div>

            <div className='mt-8 flex flex-col gap-y-4'>
              <button className='active:scale-[.98] active:duration-75 hover:scale-[1.2] ease-in-out transition-all p-2 rounded-xl bg-sky-400 text-white  text-lg font-bold ' type="submit">
                Ingresar
              </button>
            </div>
          </form>
          <div className='flex items-center justify-center'>
            <button className='font-medium text-base text-white  mt-5' >
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