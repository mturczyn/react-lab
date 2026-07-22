import { useState } from 'react'
import { DndContext, closestCenter, type DragEndEvent } from '@dnd-kit/core'
import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
} from '@dnd-kit/sortable'
import { SortableItem } from './SortableItem'

export function DndShowcase() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4'])

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event

        if (!over || active.id === over.id) return

        setItems((items) => {
            const oldIndex = items.indexOf(active.id as string)
            const newIndex = items.indexOf(over.id as string)

            return arrayMove(items, oldIndex, newIndex)
        })
    }

    return (
        <div style={{ maxWidth: 400, margin: '40px auto' }}>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={items}
                    strategy={verticalListSortingStrategy}
                >
                    {items.map((item) => (
                        <SortableItem key={item} id={item} />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    )
}
