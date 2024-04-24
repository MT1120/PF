import React from 'react'
import { FaUserAstronaut } from "react-icons/fa";

const UserProfile = ({toggle}) => {
  return (
    <div className= {`flex gap-5 items-center justify-center ${toggle ? "bg-none transition-all duration-200 delay-200" : "bg-white rounded-xl p2"}`}>
        <div className='min-w-[3.5rem] h-[3.5rem]'>
            <FaUserAstronaut className={`w-full h-full text-lg rounded-full object-cover  text-cyan-950  ${toggle ? "bg-nav transition-all duration-300 delay-200":"bg-none"}`} />
        </div>

    </div>
  )
}

export default UserProfile