import { describe, expect, it } from 'vitest'
import { DndShowcase } from './DndShowcase'
import { render } from 'vitest-browser-react'
import { act, waitFor } from '@testing-library/react'
import { userEvent } from 'vitest/browser'

describe('DndShowcase', () => {
    it('when button is dropped, it should be rendered inside the droppable area', async () => {
        const { getByText } = await render(<DndShowcase />)
        const button = getByText(/draggable button/i).element()
        act(() => button.focus())

        await userEvent.keyboard('[Space]')
        for (let index = 0; index < 10; index++) {
            await userEvent.keyboard('[ArrowDown]')
        }
        await userEvent.keyboard('[Space]')

        const dropArea = getByText(/drop here/i).element()

        await waitFor(() => {
            expect(dropArea).toContainAnyByText(/draggable button/i)
        })
    })
})
