export const APP_EVENTS = {
  NOTIFY_SHOW: 'notify:show',
  NAV_SET_ACTIVE_SECTION: 'nav:setActiveSection',
  NAV_SYNC_ACTIVE_SECTION: 'nav:syncActiveSection',
  PROFILE_OPEN: 'profile:open',
} as const

export type AppEventName = (typeof APP_EVENTS)[keyof typeof APP_EVENTS]

export function dispatchAppEvent(name: 'notify:show', detail: string): void
export function dispatchAppEvent(name: 'nav:setActiveSection', detail: string): void
export function dispatchAppEvent(name: 'nav:syncActiveSection'): void
export function dispatchAppEvent(name: 'profile:open'): void
export function dispatchAppEvent(name: AppEventName, detail?: string): void {
  if (detail !== undefined) {
    window.dispatchEvent(new CustomEvent(name, { detail }))
  } else {
    window.dispatchEvent(new Event(name))
  }
}
