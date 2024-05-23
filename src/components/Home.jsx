import NavBarHome from './navBarHome'

import React from 'react'
import img from "./assets/front.png"



export default function Home() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="overflow-y-hidden max-h-[1000px]">


      {/* <NavBarHome/> */}
      <NavBarHome />
      <div className="relative isolate px-6 pt-14 lg:px-8">

        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">

          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-600 to-cyan-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

      </div>

      <div className='py-20 mx-auto flex md:flex-row flex-col items-center justify-around'>

        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img src={img} alt="/" className='my-4 object-cover object-center rounded' />
        </div>



        <div className='flex flex-col'>
          <h1 className='text-5xl text-center text-sky-600  py-5'>
            DB Academy
          </h1>
          <p className='flex flex-col justify-center text-center  text-xl text-white max-w-lg'>
            Adéntrate en el mundo de las bases de
            datos desde una perspectiva introductoria pero
            sólidamente fundamentada. Esta herramienta te ayudara a comprender los elementos
            fundamentales  para comprender y  diseñar  bases de datos.
          </p>

          <div className='flex justify-center'>
            <a href="/login" className="p-2 mt-10 rounded-lg bg-blue-700 text-white text-lg font-semibold leading-6 hover:bg-gray-600 ">
              Empieza ya
            </a>
          </div>

        </div>



      </div>





    </div>
  )
}