import React from 'react'
import { BiChevronLeft } from "react-icons/bi"
import { useState, useParams } from "react"

import UserProfile from "./UserProfile"
import SidebarData from "./SidebarDataNavigation"

export default function SideBarNavigation({moduleId}) {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={`${toggle ? "w-[5rem]" : "w-[20rem]"} sidebar-container`}>
            <UserProfile toggle = {toggle}/>
            <SidebarData toggle = {toggle} moduleId={moduleId}/>
            <div className="absolute top-[7rem] flex justify-center items-center -left-5 w-9 h-9 bg-glass rounded-full cursor-pointer" 
            onClick={() => {
                setToggle(!toggle);
            }}>
                <BiChevronLeft className={`${toggle ? "rotate-180" : ""} text-3xl transition-all duration-300`} />
            </div>

        </div>
    )


}