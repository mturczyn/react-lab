import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { DndShowcase } from './DndShowcase'

describe('DndShowcase', () => {
    it('renders successfully', () => {
        const { container } = render(<DndShowcase />)

        expect(container.firstElementChild).not.toBeNull()
    })
})
