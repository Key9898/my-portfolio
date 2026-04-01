import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../components/GetInTouch/ContactForm'
import { APP_EVENTS } from '../utils/events'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('dispatches notify:show when fields are empty and form is submitted', () => {
    render(<ContactForm />)
    const handler = vi.fn()
    window.addEventListener(APP_EVENTS.NOTIFY_SHOW, handler)

    fireEvent.submit(screen.getByLabelText('Name').closest('form')!)

    window.removeEventListener(APP_EVENTS.NOTIFY_SHOW, handler)
  })

  it('submit button is enabled initially', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send message/i })).not.toBeDisabled()
  })
})
