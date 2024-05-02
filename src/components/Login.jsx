import React from 'react'
import Form from './Login&Register/Form'
import NavBarHome from './navBarHome'
import { SiCurseforge } from "react-icons/si";

export default function Login() {
  return (


    <div className=''>

        <NavBarHome/>
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

        <div className='flex w-full h-screen pt-5'>

            <div className='w-full flex  items-center justify-center lg:w-1/2'>
                <Form/>

            </div>
            <div className='hidden relative lg:flex h-full w-1/2 items-center justify-center bg-transparent'>

                <div className='flex w-60 h-60 bg-gradient-to-tr from-sky-600 to-cyan-900 rounded-full animate-bounce items-center justify-center'>
                    <SiCurseforge className=" text-home w-32 h-32" />
                </div>

                <div className='w-full h-1/2 absolute bottom-0 bg-[#282638] backdrop-blur-lg'>

                </div>
            </div>

        </div>

    </div>
  )
}
