import SideBar from "../sideBar/sideBar"

import { ImBooks } from "react-icons/im";
import { SiCurseforge } from "react-icons/si";

const content = [
    {
        id: 1,
        title: "Modulo X",
        status: "Complete",
        firstIcon: <ImBooks className="text-5xl  left-5" />,
        link: "",
    },
    {
        id: 2,
        title: "Modulo X",
        status: "Complete",
        firstIcon: <ImBooks className="text-5xl  left-5" />,
        link: "",
    },
    {
        id: 3,
        title: "Modulo X",
        status: "Complete",
        firstIcon: <ImBooks className="text-5xl  left-5" />,
        link: "",
    }

]

export default function LoginH() {
    return (
        <div className="w-full h-screen ">
            <nav className="bg-nav h-[80px]">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <SiCurseforge className=" text-home w-16 h-16" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-home">DATA FORGE</span>
                    </a>
                </div>

            </nav>
            <div className="h-screen  object-cover flex items-center text-white">
                <SideBar></SideBar>
                {/* <div className="hidden md:block bg-white w-64 h-64 rounded-full">

                </div> */}

                {/*Content*/}

                <div className="flex flex-col flex-1 ml-3 mr-3 my-5  w-[25rem] items-center relative ">


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
                                                <a href={`/${content.link}`} className=" p-2 mt-10 rounded-lg bg-blue-700 text-white text-lg font-semibold leading-6 hover:bg-gray-600 "> View</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            )
                        })
                    }





                </div>
            </div>

        </div>
    )
}