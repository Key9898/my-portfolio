import { describe, it, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useEvent } from '../hooks/useEvent'
import { APP_EVENTS } from '../utils/events'

describe('useEvent', () => {
  it('adds event listener on mount', () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const handler = vi.fn()
    renderHook(() => useEvent(APP_EVENTS.NOTIFY_SHOW, handler))
    expect(addSpy).toHaveBeenCalledWith(APP_EVENTS.NOTIFY_SHOW, handler)
    addSpy.mockRestore()
  })

  it('removes event listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const handler = vi.fn()
    const { unmount } = renderHook(() => useEvent(APP_EVENTS.NOTIFY_SHOW, handler))
    unmount()
    expect(removeSpy).toHaveBeenCalledWith(APP_EVENTS.NOTIFY_SHOW, handler)
    removeSpy.mockRestore()
  })

  it('calls handler when event fires', () => {
    const handler = vi.fn()
    renderHook(() => useEvent(APP_EVENTS.NOTIFY_SHOW, handler))
    window.dispatchEvent(new CustomEvent(APP_EVENTS.NOTIFY_SHOW, { detail: 'test' }))
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
