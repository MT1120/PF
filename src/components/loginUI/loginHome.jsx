import SideBar from "../sideBar/sideBar"
import { useState, useEffect } from 'react';
import { ImBooks } from "react-icons/im";
import logo from '../assets/Logo DBAcademy.png'
import MobileFooter from '../sideBar/mobileFooter'
import { useNavigate } from 'react-router-dom'


const content = [
    {
        id: 1,
        title: "Introducción a las Bases de Datos",
        status: "Completed",
        firstIcon: <ImBooks className="text-5xl  left-5" />,
        link: "/contenido/1",
    },
    {
        id: 2,
        title: "Fundamentos de SQL",
        status: "In progress",
        firstIcon: <ImBooks className="text-5xl  left-5" />,
        link: "/contenido/2",
    },
    {
        id: 3,
        title: "Diseño y Modelado de Bases de Datos",
        status: "Not started",
        firstIcon: <ImBooks className="text-5xl  left-5" />,
        link: "/contenido/3",
    }

]


export default function LoginH() {
    const navigate = useNavigate();
    const [lessons, setLessons] = useState([{}]);
    const navigateToLoginH = () => {
        // 👇️ Navigate to /contacts
        navigate('/contenido');
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    useEffect(() => {
        fetch(`https://db-learn-hub.onrender.com/api/lesson/`)
            .then(response => response.json())
            .then(data => {
                setLessons(data);
            })
            .catch(error => console.error('Error al cargar las lecciones:', error));

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="bg-slate-300 w-full h-screen overflow-x-hidden sticky">
            <nav className="bg-white h-[80px] w-screen mb-2 shadow-xl">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/LoginH" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} alt="/" className=" text-home w-16 h-auto" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-home">DB Academy</span>
                    </a>
                </div>

            </nav>
            <div className="h-screen  object-cover flex items-center text-white">
                {isMobile ? <div></div> : <SideBar />}
                {/*Content*/}

                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-auto ">


                    {
                        lessons.map(lesson => {
                            return (
                                <div className=" my-3 bg-white  max-w-full w-[1000px] h-[10rem] rounded-3xl ">
                                    <div className="flex flex-col ">
                                        <div className=" text-[#00008E]  ml-3 flex  items-center ">
                                            <ImBooks className="text-5xl  left-5" />
                                            <div className=" text-xl w-full flex justify-center ">
                                                {lesson.title}
                                            </div>
                                        </div>
                                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home ">
                                        </div>
                                        <div className="mt-2 max-w-full w-full h-full relative">
                                            <div className="pl-2">
                                                <p className="text-[#00008E]">Estado: En progreso</p>
                                            </div>
                                            <div className="flex   justify-center absolute right-3 top-1">
                                                <button onClick={() => navigate(`/contenido/${lesson.id}`)} className=" p-2 mt-10 rounded-lg bg-blue-700 text-white text-lg font-semibold leading-6 hover:bg-gray-600 ">
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