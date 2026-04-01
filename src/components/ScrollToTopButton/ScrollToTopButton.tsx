import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed right-6 bottom-[6.5rem] z-40 flex h-12 w-12 transform items-center justify-center rounded-lg border border-white/20 bg-sky-800 text-white backdrop-blur-lg transition-all duration-200 hover:scale-110 hover:bg-sky-700 hover:shadow-xl sm:bottom-14 sm:h-14 sm:w-14 lg:bottom-14 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon className="h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  )
}
