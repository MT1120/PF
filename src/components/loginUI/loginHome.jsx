import SideBar from "../sideBar/sideBar"
import { useState, useEffect } from 'react';
import { ImBooks } from "react-icons/im";
import { SiCurseforge } from "react-icons/si";
import MobileFooter from '../sideBar/mobileFooter'
import { useNavigate } from 'react-router-dom'


const content = [
    {
        id: 1,
        title: "Modulo X",
        status: "Complete",
        firstIcon: <ImBooks className="text-5xl  left-5" />,
        link: "/contenido",
    },
    {
        id: 2,
        title: "Modulo X",
        status: "Complete",
        firstIcon: <ImBooks className="text-5xl  left-5" />,
        link: "/contenido",
    },
    {
        id: 3,
        title: "Modulo X",
        status: "Complete",
        firstIcon: <ImBooks className="text-5xl  left-5" />,
        link: "/contenido",
    }

]


export default function LoginH() {
    const navigate = useNavigate();
    const navigateToLoginH = () => {
        // 👇️ Navigate to /contacts
        navigate('/contenido');
    };

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
        <div className="w-full h-screen overflow-x-hidden">
            <nav className="bg-nav h-[80px] w-screen mb-2">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <SiCurseforge className=" text-home w-16 h-16" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-home">DATA FORGE</span>
                    </a>
                </div>

            </nav>
            <div className="h-screen  object-cover flex items-center text-white">
                {isMobile ? <div></div> : <SideBar />}
                {/* <div className="hidden md:block bg-white w-64 h-64 rounded-full">

                </div> */}

                {/*Content*/}

                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-auto ">


                    {
                        content.map(content => {
                            return (
                                <div className=" my-3 bg-white  max-w-full w-[1000px] h-[10rem] rounded-3xl ">
                                    <div className="flex flex-col ">
                                        <div className=" text-[#00008E]  ml-3 flex  items-center ">
                                            {content.firstIcon}
                                            <div className=" text-xl w-full flex justify-center ">
                                                {content.title}
                                            </div>


                                        </div>
                                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home ">

                                        </div>
                                        <div className="mt-2 max-w-full w-full h-full relative">
                                            <div className="pl-2">
                                                <p className="text-[#00008E]">Status: {content.status}</p>
                                            </div>
                                            <div className="flex   justify-center absolute right-3 top-1">
                                                <button onClick={navigateToLoginH} className=" p-2 mt-10 rounded-lg bg-blue-700 text-white text-lg font-semibold leading-6 hover:bg-gray-600 ">
                                                    View
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }





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