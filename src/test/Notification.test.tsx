import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { act } from 'react'
import Notification from '../components/Notification/Notification'
import { APP_EVENTS } from '../utils/events'

describe('Notification', () => {
  it('shows notification when notify:show event fires', async () => {
    render(<Notification />)
    act(() => {
      window.dispatchEvent(new CustomEvent(APP_EVENTS.NOTIFY_SHOW, { detail: 'Test message' }))
    })
    expect(await screen.findByText('Test message')).toBeInTheDocument()
  })

  it('hides notification after 2 seconds', () => {
    vi.useFakeTimers()
    render(<Notification />)
    act(() => {
      window.dispatchEvent(new CustomEvent(APP_EVENTS.NOTIFY_SHOW, { detail: 'Timed message' }))
    })
    expect(screen.getByText('Timed message')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(2100)
    })
    vi.useRealTimers()
  })
})
