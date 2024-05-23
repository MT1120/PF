import React from 'react'

import { FaCheckSquare, FaArrowsAlt, FaDatabase, FaHome, FaBook} from 'react-icons/fa';
import {  FiLogOut } from 'react-icons/fi'

// import { BsFolder, BsWallet2 } from 'react-icons/bs'


export const data = [
    {
        id:4,
        icon: <FaBook/>,
        text: "Content",
        link: "/contenido/1"
    },
    {
        id:1,
        icon: <FaCheckSquare/>,
        text: "Multiple Choice Question",
        link: "/mcq"
    },
    {
        id:2,
        icon: <FaArrowsAlt/>,
        text: "Drag and Drop",
        link: "/drag"
    },
    {
        id:3,
        icon: <FaDatabase/>,
        text: "Queries",
        link: "/queries"
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