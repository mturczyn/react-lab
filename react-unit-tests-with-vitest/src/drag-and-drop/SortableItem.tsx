import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'

type Props = {
    id: string
}

export function SortableItem({ id }: Props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: '16px',
        marginBottom: '8px',
        background: '#fff',
        border: '1px solid #ddd',
        borderRadius: '8px',
        cursor: 'grab',
        boxShadow: isDragging ? '0 4px 12px rgba(0,0,0,0.15)' : undefined,
    }

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {id}
        </div>
    )
}
