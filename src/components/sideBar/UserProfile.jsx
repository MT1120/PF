import React from 'react'
import { FaUserAstronaut } from "react-icons/fa";

const UserProfile = ({toggle}) => {
  return (
    <div className= {`flex gap-5  items-center ${toggle ? "justify-center ml-5 bg-none  transition-all duration-300 delay-200" : "bg-white rounded-xl p-2"}`}>
        <div className='min-w-[3.5rem] h-[3.5rem]'>
            <FaUserAstronaut className={`w-full h-full text-lg rounded-full object-cover  text-home  ${toggle ? "bg-white transition-all duration-300 delay-200":"bg-none"}`} />
        </div>
        <div className={toggle ? "opacity-0 delay-200":""}>
          <h3 className={`text-xl text-black items-center  ${ toggle ? "":"transition-all duration-300 delay-200 pl-6"}`}>
            {toggle ? "" : "Username"}
          </h3>
        
        </div>

    </div>
  )
}

export default UserProfile