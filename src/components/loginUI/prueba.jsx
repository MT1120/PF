import React from 'react'
import { BiChevronLeft } from "react-icons/bi"
import { useState } from "react"
import { SiCurseforge } from "react-icons/si";

export default function prueba() {
    return (
        <div>
            <div className='w-full h-screen'>
                <nav className="bg-nav h-[80px]">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <SiCurseforge className=" text-home w-16 h-16" />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap text-home">DATA FORGE</span>
                        </a>
                    </div>

                </nav>
            </div>
        </div>
    )
}
