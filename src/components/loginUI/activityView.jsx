import React from 'react'
import MobileFooter from '../sideBar/mobileFooter'
import { SiCurseforge } from "react-icons/si";
import SideBar from '../sideBar/sideBarNavigation';
import { useState, useEffect } from 'react';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function ActivityView() {
    

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
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <SiCurseforge className=" text-home w-16 h-16" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-home">DATA FORGE</span>
                    </a>
                </div>

            </nav>
            <div className='h-screen  object-cover flex items-center text-white'>
                {isMobile ? <div></div> : <SideBar />}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-auto">
                    {/*Description */}
                    <div className='mb-10 bg-white  max-w-full w-[800px] h-[15rem] rounded-3xl   overflow-y-auto '>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl   p-2'>
                                Actividad
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />
                        <p className='text-home text-lg w-full flex p-3 '>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Autem omnis ut impedit quam cumque numquam voluptas aliquam
                            mollitia laborum fuga tenetur eum reprehenderit laboriosam officiis,
                            beatae incidunt ratione optio esse!
                        </p>
                    </div>
                    {/*end Description */}

                    {/**/}
                    {/* <YoutubeEmbed embedId="yoeV4Ex8C8U" /> */}




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
