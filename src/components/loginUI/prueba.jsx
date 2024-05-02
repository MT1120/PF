import React from 'react'

import { useState } from "react"
import { SiCurseforge } from "react-icons/si";
import SideBarNavigation from '../sideBar/sideBarNavigation';


export default function Prueba() {
    const [youtubeID] = useState('yoeV4Ex8C8U')

    return (

        <div className='w-full h-screen'>
            <nav className="bg-nav h-[80px]">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <SiCurseforge className=" text-home w-16 h-16" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-home">DATA FORGE</span>
                    </a>
                </div>

            </nav>
            <div className='h-screen  object-cover flex items-center text-white'>
                <SideBarNavigation />
                <div className="flex flex-col flex-1 ml-3 mr-3 my-5  w-[25rem] items-center relative ">

                    {/**/}
                    {/* <YoutubeEmbed embedId="yoeV4Ex8C8U" /> */}
                    <iframe className='video'
                        title='Youtube player'
                        width="800"
                        height="400"
                        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
                    </iframe>

                </div>

            </div>


        </div>

    )
}
