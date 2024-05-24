import React from 'react'
import MobileFooter from '../sideBar/mobileFooter'
import { SiCurseforge } from "react-icons/si";
import SideBar from '../sideBar/sideBarNavigation';
import { useState, useEffect } from 'react';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function DragD() {

    const draggedItems = []
    const listItems = [
        {
            id: "item1",
            label: "SELECT"
        },
        {
            id: "item2",
            label: "FROM"
        },
        {
            id: "item3",
            label: "*"
        },
        {
            id: "item4",
            label: "WHERE"
        }
    ]

    const dragList = [
        {
            id: "text1",
            label: "SELECT"
        },
        {
            id: "item1",
            label: "" //Respuesta Correcta
        },
        {
            id: "item2",
            label: ""//Respuesta Correcta
        },
        {
            id: "text2",
            label: "teacher"
        },
        {
            id: "item3",
            label: ""//Respuesta Correcta
        },
    ]

    const [list, setList] = useState(listItems);
    const [draggedList, setDraggedList] = useState(draggedItems);
    const [draggedList1, setDraggedList1] = useState(draggedItems);
    const [draggedList2, setDraggedList2] = useState([]);
    const [draggedList3, setDraggedList3] = useState([]);
    const [draggedList4, setDraggedList4] = useState([]);
    const [draggedList5, setDraggedList5] = useState([]);
    const [draggedList6, setDraggedList6] = useState([]);
    const [draggedList7, setDraggedList7] = useState([]);
    const [draggedList8, setDraggedList8] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragStart = (event, source) => {
        event.dataTransfer.setData("source", source);
        event.dataTransfer.setData("id", event.currentTarget.id);
    };


    const handleDrop = (sourceList, setSourceList, destList, setDestList, source_t) => (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData("id");
        const source = event.dataTransfer.getData("source")


        if (!sourceList || !destList) {
            return;
        }

        if ( destList.length === 1  &  source === "sourceList") {
            destList.splice(0, draggedList.length);
            const item = sourceList.find(x => x.id === id);
            if (item) {
                setDestList([...destList, item]);;
                //setDraggedList1(setDraggedList1.filter(x => x.id !== id));
            }
        }
        if ( destList.length === 1  &  source === "targetList") {
            destList.splice(0, draggedList.length);
            const item = sourceList.find(x => x.id === id);
            if (item) {
                setDestList([...destList, item]);;
                //setDraggedList1(setDraggedList1.filter(x => x.id !== id));
            }
        }



        const item = sourceList.find(x => x.id === id);
        if (item) {
            setDestList([...destList, item]);
            //setSourceList(sourceList.filter(x => x.id !== id));
        }
    };

    //const targetClassName = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging ? "bg-white border-dashed border-2 border-indigo-300" : " bg-[#00008E]"}`;

    const renderList = (source, draggedList, setDraggedList, draggedList2, setDraggedList2, draggedList3, setDraggedList3) => (
        <div>
            <div className='flex flex-row flex-1 text-home p-5  text-lg w-full  justify-between'>
                {
                    dragList.map(dragList => {
                        return (
                            <div key={dragList.id} className=''>
                                {dragList.id.includes('text') ? (
                                    <p className='flex items-center mr-4'>{dragList.label}</p>
                                ) : dragList.id.includes('item1') ? (
                                    <div>
                                        {/* <p>Hola</p> */}
                                        <div onDragOver={handleDragOver} onDrop={handleDrop(list, setList, draggedList, setDraggedList)} className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center" >
                                            {
                                                draggedList.map(item => {
                                                    return (<div key={item.id}
                                                        id={item.id}
                                                        className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"
                                                        draggable={true}
                                                        onDragStart={(event) => handleDragStart(event, source)}
                                                    >

                                                        {item.label}

                                                    </div>);
                                                })
                                            }

                                        </div>

                                    </div>
                                ) : dragList.id.includes('item2') ? (
                                    <div>
                                        {/* <p>Hola</p> */}
                                        <div onDragOver={handleDragOver} onDrop={handleDrop(list, setList, draggedList2, setDraggedList2)} className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center" >
                                            {
                                                draggedList2.map(item => {
                                                    return (<div key={item.id}
                                                        id={item.id}
                                                        className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"
                                                        draggable={true}
                                                        onDragStart={(event) => handleDragStart(event, source)}
                                                    >

                                                        {item.label}

                                                    </div>);
                                                })
                                            }
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        {/* <p>Hola</p> */}
                                        <div onDragOver={handleDragOver} onDrop={handleDrop(list, setList, draggedList3, setDraggedList3)} className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center" >
                                            {
                                                draggedList3.map(item => {
                                                    return (<div key={item.id}
                                                        id={item.id}
                                                        className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"
                                                        draggable={true}
                                                        onDragStart={(event) => handleDragStart(event, source)}
                                                    >

                                                        {item.label}

                                                    </div>);
                                                })
                                            }

                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })

                }

            </div>
            <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />
        </div>

    );

    const renderList2 = (items, source) => (

        <div>
            <div className='flex flex-row flex-1 text-home p-5 ml-5 text-lg w-full  justify-evenly overflow-x-hidden' onDragOver={handleDragOver} onDrop={handleDrop(items, setList, draggedList, setDraggedList)}>
                {
                    items.map(item => {
                        return (<div key={item.id}
                            id={item.id}
                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 cursor-move items-center justify-center text-white"
                            draggable={true}
                            onDragStart={(event) => handleDragStart(event, source)}
                        >

                            {item.label}

                        </div>);
                    })
                }

            </div>
        </div>

    );

    return (
        <div className="w-full h-screen relative overflow-x-hidden">
            <nav className="bg-nav h-[80px] w-screen mb-2">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        <SiCurseforge className=" text-home w-16 h-16" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-home">DATA FORGE</span>
                    </a>
                </div>
            </nav>
            <div className='h-screen  object-cover flex items-center text-white '>
                {isMobile ? <div></div> : <SideBar />}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-hidden ">
                    <div className='mb-3 mt-3 bg-white  max-w-full w-[800px] h-[95svh] rounded-3xl   overflow-y-auto overflow-x-hidden'>
                        <div className='p-1 mt-1 flex flex-1 flex-row justify-around'>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center overflow-x-hidden">
                                <FaArrowAltCircleLeft />
                            </div>
                            <h1 className='text-home text-xl   p-2'>
                                Drag and Drop
                            </h1>
                            <div className="p-2 flex rounded-full bg-blue-700 text-white text-lg font-semibold cursor-pointer hover:bg-gray-600 items-center">
                                <FaArrowAltCircleRight />
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />
                        {renderList("targetList", draggedList, setDraggedList, draggedList1, setDraggedList1, draggedList2, setDraggedList2)}
                        {renderList("targetList", draggedList3, setDraggedList3, draggedList4, setDraggedList4, draggedList5, setDraggedList5)}
                        {renderList("targetList", draggedList6, setDraggedList6, draggedList7, setDraggedList7, draggedList8, setDraggedList8)}
                        {/* draggedList, "targetList", draggedList, setDraggedList, draggedList1, setDraggedList1, draggedList2, setDraggedList2 */}
                        <div className=' my-4 text-home text-xl text-center'>
                            <p>
                                Selecciona el item adecuado
                            </p>
                        </div>


                        {renderList2(list, "sourceList")}
                        {renderList2(list, "sourceList")}

                    </div>
                </div>
            </div>
            <div className='container sm:hidden'>
                <footer className='flex object-cover   absolute  -bottom-15 '>

                    <MobileFooter />

                </footer>
            </div>
        </div>
    );
}