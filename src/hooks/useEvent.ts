import { useEffect } from 'react'
import type { AppEventName } from '../utils/events'

export function useEvent(name: AppEventName, handler: (e: Event) => void): void {
  useEffect(() => {
    window.addEventListener(name, handler)
    return () => window.removeEventListener(name, handler)
  }, [name, handler])
}
