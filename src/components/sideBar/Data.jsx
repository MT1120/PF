import React from 'react'

import {RxDashboard} from "react-icons/rx"
import { MdInsights } from 'react-icons/md'
import { RiCoupon2Line } from 'react-icons/ri'
import { FiUser, FiLogOut } from 'react-icons/fi'
import { AiOutlineMessage } from 'react-icons/ai'
import { FaBell, FaCog, FaQuestionCircle  } from 'react-icons/fa'
// import { BsFolder, BsWallet2 } from 'react-icons/bs'


export const data = [
    {
        id:1,
        icon: <FaBell/>,
        text: "Notificaciones",
        link: "/LoginH"
    },
    {
        id:2,
        icon: <FaCog/>,
        text: "Configuración",
        link: "/LoginH"
    },
    {
        id:3,
        icon: <FaQuestionCircle />,
        text: "Ayuda",
        link: "/LoginH"
    },   
    {
        id:4,
        icon: <FiLogOut/>,
        text: "Cerrar Sesión",
        link: "/logout"
    }

]