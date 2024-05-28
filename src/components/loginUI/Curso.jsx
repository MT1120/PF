import React from 'react'
import MobileFooter from '../sideBar/mobileFooter'
import logo from '../assets/Logo DBAcademy.png'
import SideBar from '../sideBar/sideBarNavigation';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function Prueba() {
    const [youtubeID] = useState('yoeV4Ex8C8U')
    const { idmodule } = useParams();
    const [lessonData, setLessonData] = useState(null);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    useEffect(() => {
        fetch(`http://127.0.0.1:8002/api/lesson/${idmodule}`)
            .then(response => response.json())
            .then(data => {
                setLessonData(data);
            })
            .catch(error => console.error('Error al cargar la leccion:', error));
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='bg-slate-300 w-full h-screen relative overflow-x-hidden'>
            <nav className="bg-white h-[80px] w-screen mb-2 shadow-xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/LoginH" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} alt='/' className=" text-home w-16 h-16" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-home">DB Academy</span>
                    </a>
                </div>

            </nav>
            <div className='h-screen  object-cover flex items-center text-white'>
                {isMobile ? <div></div> : <SideBar moduleId={idmodule} />}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-auto">
                    <div className='mb-10 bg-white text-black  max-w-full w-[800px] h-[37rem] rounded-3xl   overflow-y-auto p-4'>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl   p-2'>
                                {lessonData ? lessonData.title : 'Cargando leccion...'}
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: lessonData ? lessonData.content:'Cargando' }} />
                    </div>


                </div>

            </div>
            <div className='container sm:hidden'>
                <footer className='flex object-cover   absolute  -bottom-15 '>

                    <MobileFooter />

                </footer>
            </div>
        </div>
    )
}
