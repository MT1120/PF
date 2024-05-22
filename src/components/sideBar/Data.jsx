import React from 'react'

import {RxDashboard} from "react-icons/rx"
import { MdInsights } from 'react-icons/md'
import { RiCoupon2Line } from 'react-icons/ri'
import { FiUser, FiLogOut } from 'react-icons/fi'
import { AiOutlineMessage } from 'react-icons/ai'
// import { BsFolder, BsWallet2 } from 'react-icons/bs'


export const data = [
    {
        id:1,
        icon: <RxDashboard/>,
        text: "XXX",
        link: "/LoginH"
    },
    {
        id:2,
        icon: <MdInsights/>,
        text: "XXX",
        link: "/LoginH"
    },
    {
        id:3,
        icon: <RiCoupon2Line/>,
        text: "XXX",
        link: "/LoginH"
    },
    {
        id:4,
        icon: <FiUser/>,
        text: "XXX",
        link: "/LoginH"
    },
    {
        id:5,
        icon: <AiOutlineMessage/>,
        text: "XXX",
        link: "/LoginH"
    },
    
    
    {
        id:6,
        icon: <FiLogOut/>,
        text: "Cerrar Sesión",
        link: "/logout"
    }

]