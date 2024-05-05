import React from 'react'
import MobileFooter from '../sideBar/mobileFooter'
import { SiCurseforge } from "react-icons/si";
import SideBar from '../sideBar/sideBarNavigation';
import { useState, useEffect } from 'react';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function Queries() {





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
            <div className='h-screen  object-cover flex items-center text-white '>
                {isMobile ? <div></div> : <SideBar />}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-hidden ">
                    {/*Description */}
                    <div className='mb-3 mt-3 bg-white  max-w-full w-[800px] h-[95svh] rounded-3xl   overflow-y-auto overflow-x-hidden'>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center overflow-x-hidden">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl   p-2'>
                                Drag and Drop
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />

                        <div className=' flex flex-col flex-1 mt-8 mx-4'>

                            <form>
                                <div class="w-full mb-4    rounded-lg bg-[#00008E] ">
                                    <div class="px-4 py-2 bg-white rounded-t-lg ">
                                        <label for="comment" class="sr-only">Your comment</label>
                                        <textarea id="comment" rows="4" class="w-full h-[200px] px-0 text-sm text-home bg-white border-0  focus:ring-0 dark:text-home dark:placeholder-gray-400" placeholder="" required ></textarea>
                                    </div>
                                    <div class="flex items-center justify-center px-3 py-2 border-t dark:border-gray-600">
                                        <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                            Run
                                        </button>

                                    </div>
                                </div>
                            </form>


                        </div>

                        <div className=' mt-4  mx-4  '>
                            <div className='w-full mb-4 h-[200px]  rounded-lg bg-[#00008E] '>
                                <p className='text-center'>
                                    Resultados
                                </p>
                            </div>
                        </div>

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
