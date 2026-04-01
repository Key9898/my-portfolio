declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined

export function initAnalytics(): void {
  if (!GA_ID) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    ;(window.dataLayer as unknown[]).push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}

export function trackProjectClick(projectTitle: string): void {
  if (!GA_ID || typeof window.gtag !== 'function') return
  window.gtag('event', 'project_click', {
    event_category: 'Showcase',
    event_label: projectTitle,
  })
}

export function trackContactFormSubmit(): void {
  if (!GA_ID || typeof window.gtag !== 'function') return
  window.gtag('event', 'contact_form_submit', {
    event_category: 'Contact',
  })
}
