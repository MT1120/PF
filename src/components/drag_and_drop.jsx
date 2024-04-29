import DragD from "./drag_and_dropP/index"

export default function Drag_and_drop() {
    const listItems = [
      {
        id: "item1",
        label: "item1"
      },
      {
        id: "item2",
        label: "item2"
      },
      {
        id: "item3",
        label: "item3"
      },
      {
        id: "item4",
        label: "item4"
      }
    ]
  
    const draggedItems = [ {id: "item10", label: "Item10"}]
    return (
      <>
        <h1 className="text-3xl font-bold underline text-center">
          Hello world!
        </h1>
        <DragD listItems={listItems} draggedItems={draggedItems} onDrop={(item) => {
          alert(item.label)
        }} />
      </>
    )
  }