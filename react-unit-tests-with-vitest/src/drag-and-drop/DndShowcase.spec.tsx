import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { act, fireEvent, render } from '@testing-library/react'
import { DndShowcase } from './DndShowcase'

describe('DndShowcase', () => {
    it('when button is dropped, it should be rendered inside the droppable area', () => {
        render(<DndShowcase />)
        const button = screen.getByText(/draggable button/i)
        act(() => button.focus())

        fireEvent.keyDown(button, { key: ' ', code: 'Space' })
        for (let index = 0; index < 30; index++) {
            fireEvent.keyDown(button, {
                key: 'ArrowDown',
                code: 'ArrowDown',
            })
        }
        fireEvent.keyDown(button, { key: ' ', code: 'Space' })

        screen.debug()

        expect(screen.queryByText(/drop here/i)).toBeInTheDocument()
        expect(screen.queryByText(/draggable button/i)).toBeInTheDocument()
        // expect(screen.queryByText(/drop here/i)).toContainElement(
        //     screen.queryByText(/draggable button/i) as HTMLElement
        // )
    })
})
