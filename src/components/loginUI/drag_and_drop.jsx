import React from 'react'
import MobileFooter from '../sideBar/mobileFooter'
import logo from '../assets/Logo DBAcademy.png'
import SideBar from '../sideBar/sideBarNavigation';
import { useState, useEffect } from 'react';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Drag_and_drop() {
    const handleDragStart = (event) => {
        event.dataTransfer.setData("id", event.currentTarget.id)

    }

    

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

    //1

    const [list, setList] = useState(listItems)

    const [isDragging, setIsDragging] = useState(false)

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    }

    const [draggedList, setDraggedList] = useState(draggedItems || []);

    const handleDrop = (event) => {
        event.preventDefault();
        // If there's already an item being dragged, do nothing
        if (draggedList.length > 0) {
            return;
        }
        const id = event.dataTransfer.getData("id");
        const item = list.find(x => x.id === id);
        if (item) {
            setDraggedList([item]);
            setIsDragging(false);

            // const filteredList = list.filter(x => x.id !== id);
            // setList(filteredList);
        }
    }

    // 2

    const [isDragging2, setIsDragging2] = useState(false)


    const [draggedList2, setDraggedList2] = useState(draggedItems || []);

    const handleDragOver2 = (event) => {
        event.preventDefault();
        setIsDragging2(true);
    }

    const handleDrop2 = (event) => {
        event.preventDefault();
        // If there's already an item being dragged, do nothing
        if (draggedList2.length > 0) {
            return;
        }
        const id = event.dataTransfer.getData("id");
        const item = list.find(x => x.id === id);
        if (item) {
            setDraggedList2([item]);
            setIsDragging2(false);

            // const filteredList = list.filter(x => x.id !== id);
            // setList(filteredList);
        }
    }

    //3



    const [isDragging3, setIsDragging3] = useState(false)


    const [draggedList3, setDraggedList3] = useState(draggedItems || []);

    const handleDragOver3 = (event) => {
        event.preventDefault();
        setIsDragging3(true);
    }

    const handleDrop3 = (event) => {
        event.preventDefault();
        // If there's already an item being dragged, do nothing
        if (draggedList3.length > 0) {
            return;
        }
        const id = event.dataTransfer.getData("id");
        const item = list.find(x => x.id === id);
        if (item) {
            setDraggedList3([item]);
            setIsDragging3(false);

            // const filteredList = list.filter(x => x.id !== id);
            // setList(filteredList);
        }
    }

    //4

    const [isDragging4, setIsDragging4] = useState(false);
    const [draggedList4, setDraggedList4] = useState(draggedItems || []);

    const handleDragOver4 = (event) => {
        event.preventDefault();
        setIsDragging4(true);
    }

    const handleDrop4 = (event) => {
        event.preventDefault();
        // If there's already an item being dragged, do nothing
        if (draggedList4.length > 0) {
            return;
        }
        const id = event.dataTransfer.getData("id");
        const item = list.find(x => x.id === id);
        if (item) {
            setDraggedList4([item]);
            setIsDragging4(false);

            // const filteredList = list.filter(x => x.id !== id);
            // setList(filteredList);
        }
    }



    //5
    const [isDragging5, setIsDragging5] = useState(false);
    const [draggedList5, setDraggedList5] = useState(draggedItems || []);

    const handleDragOver5 = (event) => {
        event.preventDefault();
        setIsDragging5(true);
    }

    const handleDrop5 = (event) => {
        event.preventDefault();
        // If there's already an item being dragged, do nothing
        if (draggedList5.length > 0) {
            return;
        }
        const id = event.dataTransfer.getData("id");
        const item = list.find(x => x.id === id);
        if (item) {
            setDraggedList5([item]);
            setIsDragging5(false);

            // const filteredList = list.filter(x => x.id !== id);
            // setList(filteredList);
        }
    }

    //6

    const [isDragging6, setIsDragging6] = useState(false);
    const [draggedList6, setDraggedList6] = useState(draggedItems || []);

    const handleDragOver6 = (event) => {
        event.preventDefault();
        setIsDragging6(true);
    }

    const handleDrop6 = (event) => {
        event.preventDefault();
        // If there's already an item being dragged, do nothing
        if (draggedList6.length > 0) {
            return;
        }
        const id = event.dataTransfer.getData("id");
        const item = list.find(x => x.id === id);
        if (item) {
            setDraggedList6([item]);
            setIsDragging6(false);

            // const filteredList = list.filter(x => x.id !== id);
            // setList(filteredList);
        }
    }

    //7

    const [isDragging7, setIsDragging7] = useState(false);
    const [draggedList7, setDraggedList7] = useState(draggedItems || []);

    const handleDragOver7 = (event) => {
        event.preventDefault();
        setIsDragging7(true);
    }

    const handleDrop7 = (event) => {
        event.preventDefault();
        // If there's already an item being dragged, do nothing
        if (draggedList7.length > 0) {
            return;
        }
        const id = event.dataTransfer.getData("id");
        const item = list.find(x => x.id === id);
        if (item) {
            setDraggedList7([item]);
            setIsDragging7(false);

            // const filteredList = list.filter(x => x.id !== id);
            // setList(filteredList);
        }
    }

    //8

    const [isDragging8, setIsDragging8] = useState(false);
    const [draggedList8, setDraggedList8] = useState(draggedItems || []);

    const handleDragOver8 = (event) => {
        event.preventDefault();
        setIsDragging8(true);
    }

    const handleDrop8 = (event) => {
        event.preventDefault();
        // If there's already an item being dragged, do nothing
        if (draggedList8.length > 0) {
            return;
        }
        const id = event.dataTransfer.getData("id");
        const item = list.find(x => x.id === id);
        if (item) {
            setDraggedList8([item]);
            setIsDragging8(false);

            // const filteredList = list.filter(x => x.id !== id);
            // setList(filteredList);
        }
    }

    //9

    const [isDragging9, setIsDragging9] = useState(false);
    const [draggedList9, setDraggedList9] = useState(draggedItems || []);

    const handleDragOver9 = (event) => {
        event.preventDefault();
        setIsDragging9(true);
    }

    const handleDrop9 = (event) => {
        event.preventDefault();
        // If there's already an item being dragged, do nothing
        if (draggedList9.length > 0) {
            return;
        }
        const id = event.dataTransfer.getData("id");
        const item = list.find(x => x.id === id);
        if (item) {
            setDraggedList9([item]);
            setIsDragging9(false);

            // const filteredList = list.filter(x => x.id !== id);
            // setList(filteredList);
        }
    }


    const targetClassName = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging ? "bg-white border-dashed border-2 border-indigo-300" : " bg-[#00008E]"}`;
    const targetClassName2 = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging2 ? "bg-white border-dashed border-2 border-indigo-300" : "bg-[#00008E]"}`;
    const targetClassName3 = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging3 ? "bg-white border-dashed border-2 border-indigo-300" : "bg-[#00008E]"}`;
    const targetClassName4 = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging4 ? "bg-white border-dashed border-2 border-indigo-300" : "bg-[#00008E]"}`;
    const targetClassName5 = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging5 ? "bg-white border-dashed border-2 border-indigo-300" : "bg-[#00008E]"}`;
    const targetClassName6 = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging6 ? "bg-white border-dashed border-2 border-indigo-300" : "bg-[#00008E]"}`;
    const targetClassName7 = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging7 ? "bg-white border-dashed border-2 border-indigo-300" : "bg-[#00008E]"}`;
    const targetClassName8 = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging8 ? "bg-white border-dashed border-2 border-indigo-300" : "bg-[#00008E]"}`;
    const targetClassName9 = `bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 ${isDragging9 ? "bg-white border-dashed border-2 border-indigo-300" : "bg-[#00008E]"}`;

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

    return (
        <div className='w-full h-screen relative overflow-x-hidden'>
            <nav className="bg-nav h-[80px] w-screen mb-2">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className=" text-home w-16 h-16" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-home">DB Academy</span>
                    </a>
                </div>

            </nav>
            <div className='h-screen  object-cover flex items-center text-white '>
                {isMobile ? <div></div> : <SideBar />}
                <div className="flex flex-col flex-1 ml-3 mr-3 mt-3  w-[25rem] items-center relative overflow-x-hidden ">
                    {/*Description */}
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
                        <div className='flex flex-row flex-1 text-home p-5 ml-5 text-lg w-full  justify-between'>
                            <p className='flex  items-center mr-4'>
                                SELECT
                            </p>
                            <div className={targetClassName} onDragOver={handleDragOver} onDrop={handleDrop} >
                                {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                                </div> */}
                                {
                                    draggedList.map(item => {
                                        return (<div key={item.id}
                                            id={item.id}
                                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"

                                        >

                                            {item.label}

                                        </div>);
                                    })
                                }
                            </div>

                            <div className={targetClassName2} onDragOver={handleDragOver2} onDrop={handleDrop2} >
                                {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                                </div> */}
                                {
                                    draggedList2.map(item => {
                                        return (<div key={item.id}
                                            id={item.id}
                                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"

                                        >

                                            {item.label}

                                        </div>);
                                    })
                                }
                            </div>
                            <p className='flex items-center mr-6'>
                                TEACHER
                            </p>
                            <div className={targetClassName3} onDragOver={handleDragOver3} onDrop={handleDrop3} >
                                {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                                </div> */}
                                {
                                    draggedList3.map(item => {
                                        return (<div key={item.id}
                                            id={item.id}
                                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"

                                        >

                                            {item.label}

                                        </div>);
                                    })
                                }
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />
                        <div className='flex flex-row flex-1 text-home p-5 ml-5 text-lg w-full  justify-between'>
                            <p className='flex  items-center mr-4'>
                                SELECT
                            </p>
                            <div className={targetClassName4}onDragOver={handleDragOver4} onDrop={handleDrop4} >
                                {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                                </div> */}
                                {
                                    draggedList4.map(item => {
                                        return (<div key={item.id}
                                            id={item.id}
                                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"

                                        >

                                            {item.label}

                                        </div>);
                                    })
                                }
                            </div>
                            <div className={targetClassName5} onDragOver={handleDragOver5} onDrop={handleDrop5} >
                                {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                                </div> */}
                                {
                                    draggedList5.map(item => {
                                        return (<div key={item.id}
                                            id={item.id}
                                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"

                                        >

                                            {item.label}

                                        </div>);
                                    })
                                }
                            </div>
                            <p className='flex items-center mr-6'>
                                TEACHER
                            </p>
                            <div className={targetClassName6} onDragOver={handleDragOver6} onDrop={handleDrop6} >
                                {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                                </div> */}
                                {
                                    draggedList6.map(item => {
                                        return (<div key={item.id}
                                            id={item.id}
                                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"

                                        >

                                            {item.label}

                                        </div>);
                                    })
                                }
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />
                        <div className='flex flex-row flex-1 text-home p-5 ml-5 text-lg w-full  justify-between'>
                            <p className='flex  items-center mr-4'>
                                SELECT
                            </p>
                            <div className={targetClassName7} onDragOver={handleDragOver7} onDrop={handleDrop7} >
                                {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                                </div> */}
                                {
                                    draggedList7.map(item => {
                                        return (<div key={item.id}
                                            id={item.id}
                                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"

                                        >

                                            {item.label}

                                        </div>);
                                    })
                                }
                            </div>
                            <div className={targetClassName8} onDragOver={handleDragOver8} onDrop={handleDrop8} >
                                {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                                </div> */}
                                {
                                    draggedList8.map(item => {
                                        return (<div key={item.id}
                                            id={item.id}
                                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"

                                        >

                                            {item.label}

                                        </div>);
                                    })
                                }
                            </div>
                            <p className='flex items-center mr-6'>
                                TEACHER
                            </p>
                            <div className={targetClassName9} onDragOver={handleDragOver9} onDrop={handleDrop9} >
                                {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                                </div> */}
                                {
                                    draggedList9.map(item => {
                                        return (<div key={item.id}
                                            id={item.id}
                                            className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] text-white items-center justify-center"

                                        >

                                            {item.label}

                                        </div>);
                                    })
                                }
                            </div>
                        </div>
                        <div className="mx-auto my-1 h-[0.2rem] max-w-full w-[100%] bg-home " />
                        <div className=' my-4 text-home text-xl text-center'>
                            <p>
                                Selecciona el item adecuado
                            </p>
                        </div>
                        <div className='flex flex-row flex-1 text-home p-5 ml-5 text-lg w-full  justify-evenly overflow-x-hidden'>

                            {/* <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                            </div>
                            <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                            </div>

                            <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                            </div>
                            <div className='bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4' >

                            </div> */}

                            {
                                list.map(item => {
                                    return (<div key={item.id}
                                        id={item.id}
                                        className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 cursor-move items-center justify-center text-white"
                                        draggable={true}
                                        onDragStart={handleDragStart}
                                    >

                                        {item.label}

                                    </div>);
                                })
                            }

                        </div>
                        <div className='flex flex-row flex-1 text-home p-5 ml-5 text-lg w-full  justify-evenly overflow-x-hidden'>

                            {
                                list.map(item => {
                                    return (<div key={item.id}
                                        id={item.id}
                                        className="flex bg-[#00008E] rounded-xl w-[6.8rem] h-[2.5rem] mr-4 cursor-move items-center justify-center text-white"
                                        draggable={true}
                                        onDragStart={handleDragStart}
                                    >

                                        {item.label}

                                    </div>);
                                })
                            }

                        </div>
                    </div>
                    {/*end Description */}

                    {/**/}
                    {/* <YoutubeEmbed embedId="yoeV4Ex8C8U" /> */}




                </div>

            </div>
            <div className='container sm:hidden'>
                <footer className='flex object-cover   absolute  -bottom-15 '>

                    <MobileFooter />

                </footer>
            </div>
        </div>
    )
}
