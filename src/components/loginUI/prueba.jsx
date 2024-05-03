import React from 'react'
import SideBarNavigation from '../sideBar/sideBarNavigation'
import { SiCurseforge } from "react-icons/si";
import SideBar from '../sideBar/sideBar';
import { useState, useEffect } from 'react';


export default function Prueba() {
    const [youtubeID] = useState('yoeV4Ex8C8U')

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='w-full h-screen relative overflow-x-hidden'>
            <nav className="bg-nav h-[80px] w-screen mb-2">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <SiCurseforge className=" text-home w-16 h-16" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-home">DATA FORGE</span>
                    </a>
                </div>

            </nav>
            <div className='h-screen  object-cover flex items-center text-white'>
                {isMobile ? <div></div> : <SideBar />}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-auto">
                    {/*Description */}
                    <div className='mb-10 bg-white  max-w-full w-[800px] h-[15rem] rounded-3xl   overflow-y-auto '>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <a href="/" className="p-2  rounded-lg bg-blue-700 text-white text-lg font-semibold leading-6  hover:bg-gray-600 ">
                                Anterior
                            </a>
                            <h1 className='text-home text-xl   p-2'>
                                MODULO X
                            </h1>
                            <a href="/" className="p-2  rounded-lg bg-blue-700 text-white text-lg font-semibold leading-6 hover:bg-gray-600 ">
                                Siguiente
                            </a>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />
                        <p className='text-home text-lg w-full flex p-3 '>
                            En este módulo, los participantes se sumergirán en el mundo de las
                            bases de datos, aprendiendo los conceptos esenciales que sustentan el
                            almacenamiento y la gestión de información. Desde la comprensión de
                            modelos de datos hasta la implementación de consultas SQL
                        </p>
                    </div>
                    {/*end Description */}

                    {/**/}
                    {/* <YoutubeEmbed embedId="yoeV4Ex8C8U" /> */}
                    <iframe className='sm:w-[200px] sm:h-[200px] md:w-[700px] md:h-[300px]'
                        title='Youtube player'
                        // width="800"
                        // height="400"
                        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
                    </iframe>



                </div>

            </div>
            <div className='container sm:hidden'>
                <footer className='flex object-cover   absolute  -bottom-15 '>

                    <SideBarNavigation />

                </footer>
            </div>
        </div>
    )
}
