import { describe, it, expect, vi } from 'vitest'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

describe('useSmoothScroll', () => {
  it('returns scrollToSection function', () => {
    const { scrollToSection } = useSmoothScroll()
    expect(typeof scrollToSection).toBe('function')
  })

  it('returns early when element not found', () => {
    const { scrollToSection } = useSmoothScroll()
    const spy = vi.spyOn(window, 'scrollTo')
    scrollToSection('nonexistent-id')
    expect(spy).not.toHaveBeenCalled()
    spy.mockRestore()
  })

  it('calls requestAnimationFrame when element exists', () => {
    document.body.innerHTML = '<div id="test-section"></div>'
    const { scrollToSection } = useSmoothScroll()
    const spy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation(() => 0)
    scrollToSection('test-section')
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })

  it('strips leading # from id', () => {
    document.body.innerHTML = '<div id="capabilities"></div>'
    const { scrollToSection } = useSmoothScroll()
    const spy = vi.spyOn(window, 'requestAnimationFrame').mockImplementation(() => 0)
    scrollToSection('#capabilities')
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})
