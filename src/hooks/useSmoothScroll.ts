export function useSmoothScroll() {
  const scrollToSection = (id: string, duration = 1200, offset = 24) => {
    const sectionId = id.startsWith('#') ? id.slice(1) : id
    const target = document.getElementById(sectionId)
    if (!target) return

    const start = window.scrollY
    const targetTop = target.getBoundingClientRect().top + window.scrollY
    const end = targetTop + offset
    const change = end - start
    const startTime = performance.now()

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeInOutQuad(progress)
      window.scrollTo(0, start + change * eased)
      if (elapsed < duration) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  return { scrollToSection }
}
