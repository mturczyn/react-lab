import { DragDropProvider, useDraggable, useDroppable } from '@dnd-kit/react'
import { useState } from 'react'

const DROPPABLE_AREA_ID = 'droppable-area'

export function DndShowcase() {
    const [isDropped, setIsDropped] = useState(false)

    const onDragStart = (event: any) => {
        console.log('Drag started:', event)
    }

    const onDragEnd = (event: any) => {
        console.log('Drag ended:', event)
        setIsDropped(event.operation?.target?.id === DROPPABLE_AREA_ID)
    }

    return (
        <DragDropProvider onDragStart={onDragStart} onDragEnd={onDragEnd}>
            {!isDropped && <DraggableButton />}
            <DroppableArea>{isDropped && <DraggableButton />}</DroppableArea>
        </DragDropProvider>
    )
}

export function DraggableButton() {
    const { ref } = useDraggable({
        id: 'draggable-button',
    })
    return <button ref={ref}>Draggable button</button>
}

export function DroppableArea(props: { children?: React.ReactNode }) {
    const { ref, isDropTarget } = useDroppable({
        id: DROPPABLE_AREA_ID,
    })

    return (
        <div
            style={{
                width: 300,
                height: 200,
                border: '1px solid #ccc',
                backgroundColor: isDropTarget ? '#f904c46b' : '#fff',
            }}
            ref={ref}
        >
            Drop here {props.children}
        </div>
    )
}
