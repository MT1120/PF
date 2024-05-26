import React from 'react'
import { FaCheckSquare, FaArrowsAlt, FaDatabase, FaHome, FaBook} from 'react-icons/fa';
import {  FiLogOut } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'


const SidebarData = ({toggle, moduleId}) => {
  const navigate = useNavigate();  
  const handleClick = (link) => {
    navigate(link);
  };
  

  const data = [
    {
        id:4,
        icon: <FaBook/>,
        text: "Content",
        link: `/contenido/${moduleId || 1}`
    },
    {
        id:1,
        icon: <FaCheckSquare/>,
        text: "Multiple Choice Question",
        link: `/mcq/${moduleId || 1}`
    },
    {
        id:2,
        icon: <FaArrowsAlt/>,
        text: "Drag and Drop",
        link: `/drag/${moduleId || 1}`
    },
    {
        id:3,
        icon: <FaDatabase/>,
        text: "Queries",
        link: `/queries/${moduleId || 1}`
    },
    {
        id:5,
        icon: <FaHome/>,
        text: "Home",
        link: "/LoginH"
    },
    
    
    {
        id:6,
        icon: <FiLogOut/>,
        text: "Cerrar Sesión",
        link: "/logout"
    }

]

  return (
    <div className=''>
      {
        data.map(data => {
          return(
            <div className={`${toggle ? "mt-1 last:w-[3rem] ":"ml-2 last:w-[17rem]"} sidebar last:absolute left-4 bottom-4`} key = {
              data.id
            } onClick={() => handleClick(data.link)}>
              <div className={`mr-9  text-[1.5rem] ${toggle ? "":"ml-1"}`}>
                {data.icon}
              </div>
              <div className= {`${toggle ? "opacity-0 " : ""} text-[1rem]`}>
                {data.text}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SidebarData