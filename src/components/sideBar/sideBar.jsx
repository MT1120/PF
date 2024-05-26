import { BiChevronLeft } from "react-icons/bi"
import { useState } from "react"
import React from "react"
import UserProfile from "./UserProfile"
import SidebarData from "./SidebarData"

export default function Sidebar() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={`${toggle ? "w-[5rem]" : "w-[20rem]"} sidebar-container`}>
            <UserProfile toggle = {toggle}/>
            <SidebarData toggle = {toggle}/>
            <div className="absolute top-[7rem] flex justify-center items-center -left-5 w-9 h-9 bg-[#0077B6] rounded-full cursor-pointer" 
            onClick={() => {
                setToggle(!toggle);
            }}>
                <BiChevronLeft className={`${toggle ? "rotate-180" : ""} text-3xl transition-all duration-300`} />
            </div>

        </div>
    )


}