import '@testing-library/jest-dom'

Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: () => {},
})

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
} as unknown as typeof IntersectionObserver

global.requestAnimationFrame = (cb) => {
  cb(99999)
  return 0
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})
