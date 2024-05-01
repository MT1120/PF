import React from 'react'
import {data} from "./Data"


const SidebarData = ({toggle}) => {
  return (
    <div className=''>
      {
        data.map(data => {
          return(
            <div className={`${toggle ? "mt-1 last:w-[3rem] ":"ml-2 last:w-[17rem]"} sidebar last:absolute left-4 bottom-4`} key = {
              data.id
            }>
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