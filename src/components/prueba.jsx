import SideBar from "./sideBar"

export default function Prueba(){
    return(
        <div className="w-full h-screen ">
            <div className="h-screen  object-cover flex items-center text-white">
                <SideBar></SideBar>
                <div className="hidden md:block bg-white w-64 h-64 rounded-full">

                </div>
            </div>
            
        </div>
    )
}