import { useState } from "react"


export default function DragD({ listItems, draggedItems, onDrop }) {



    const [list, setList] = useState(listItems)

    const [isDragging, setIsDragging] = useState(false)



    const [draggedList, setDraggedList] = useState(draggedItems || []);

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    }

    const handleDragStart = (event) => {
        event.dataTransfer.setData("id", event.currentTarget.id)

    }

    // const handleDrop = (event) => {
    //     event.preventDefault();
    //     const id = event.dataTransfer.getData("id");
    //     const item = list.find(x => x.id === id);
    //     if (item){
    //         setDraggedList([...draggedList, item])
    //         setIsDragging(false)

    //         const filteredList = list.filter(x => x.id !== id);
    //         setList(filteredList)

    //         // onDrop && onDrop(item)
    //     }
    // }

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

            const filteredList = list.filter(x => x.id !== id);
            setList(filteredList);
        }
    }


    const targetClassName = `mt-4 p-4 bg-white rounded-lg shadow-lg border-dashed border-2 min-h-60 ${isDragging ? "border-black" : "border-indigo-300"}`

    return (
        <div className="grid grid-cols-2 gap-1">
            <div className="p-4 mt-5 bg-white rounded-lg shadow-lg">
                {/* Source */}
                <ul className="list-none p-0 m-0 bg-indigo-200 rounded-lg border border-indigo-300 min-h-40">
                    {
                        list.map(item => {
                            return (<li key={item.id}
                                id={item.id}
                                className="bg-white rounded-lg border border-indigo-300 p-4 mx-2 mb-2 first:mt-2 cursor-move"
                                draggable={true}
                                onDragStart={handleDragStart}
                            >

                                {item.label}

                            </li>);
                        })
                    }
                    {/* <li>

                    </li> */}
                </ul>
            </div>
            <div className={targetClassName} onDragOver={handleDragOver} onDrop={handleDrop} >
                {/* Target */}
                <div className=" text-center mb-2">
                    <p>Drag and drop</p>
                </div>

                <ul className="list-none p-0 m-0 bg-indigo-200 rounded-lg border border-indigo-300 "> {/*min-h-40*/}
                    {
                        draggedList.map(item => {
                            return (<li key={item.id}
                                id={item.id}
                                className="bg-white rounded-lg border border-indigo-300 p-4 mx-2 first:mt-2  mb-2   cursor-move"

                            >

                                {item.label}

                            </li>);
                        })
                    }

                </ul>
            </div>
            <div className={targetClassName} onDragOver={handleDragOver} onDrop={handleDrop} >
                {/* Target */}
                <div className=" text-center mb-2">
                    <p>Drag and drop</p>
                </div>

                <ul className="list-none p-0 m-0 bg-indigo-200 rounded-lg border border-indigo-300 "> {/*min-h-40*/}
                    {
                        draggedList.map(item => {
                            return (<li key={item.id}
                                id={item.id}
                                className="bg-white rounded-lg border border-indigo-300 p-4 mx-2 first:mt-2  mb-2   cursor-move"

                            >

                                {item.label}

                            </li>);
                        })
                    }

                </ul>
            </div>
        </div>
    )
}