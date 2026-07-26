import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'
import * as jsDomMocks from 'jsdom-testing-mocks'

jsDomMocks.mockResizeObserver()
jsDomMocks.mockIntersectionObserver()
jsDomMocks.mockAnimationsApi()
jsDomMocks.mockCSSTypedOM()
jsDomMocks.mockViewport({})

afterEach(() => {
    cleanup()
})
