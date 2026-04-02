import { useState, useEffect, useCallback } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'
import { APP_EVENTS, dispatchAppEvent } from '../../utils/events'
import { useEvent } from '../../hooks/useEvent'
import { useTheme } from '../../hooks/useTheme'
const Logo = '/Logo/logo.svg'

const navigation = [
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Profile', href: '#profile' },
  { name: 'Get in Touch', href: '#getInTouch' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [inHero, setInHero] = useState(true)
  const [manualActive, setManualActive] = useState(false)

  // Header sticky toggle on scroll + detect if we are still in HeroSection
  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 10)
      const capEl = document.getElementById('capabilities')
      if (capEl) {
        const capTop = capEl.getBoundingClientRect().top + window.scrollY
        // While above Capabilities, keep "no active" state for menu
        setInHero(window.scrollY < capTop - 100)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Observe sections and update active menu item
  useEffect(() => {
    const ids = ['capabilities', 'showcase', 'profile', 'getInTouch']
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (manualActive) return
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '0px 0px -30% 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [manualActive])

  // Accept active section updates from other components
  const navSetActiveSectionHandler = useCallback((e: Event) => {
    const id = (e as CustomEvent<string>).detail
    if (id) {
      setActiveSection(id)
      setManualActive(true)
    }
  }, [])
  useEvent(APP_EVENTS.NAV_SET_ACTIVE_SECTION, navSetActiveSectionHandler)

  const { scrollToSection } = useSmoothScroll()
  const { theme, toggleTheme } = useTheme()

  const isActive = (href: string) => {
    const id = href.startsWith('#') ? href.slice(1) : href
    if (manualActive) return activeSection === id
    if (inHero) return false
    return activeSection === id
  }

  // Compute active section by viewport visibility (fallback when manual override clears)
  const computeActiveSectionFromViewport = () => {
    const ids = ['capabilities', 'showcase', 'profile', 'getInTouch']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (sections.length === 0) return ''

    const viewportH = window.innerHeight || document.documentElement.clientHeight
    let bestId = ''
    let bestScore = 0

    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect()
      const visible = Math.min(rect.bottom, viewportH) - Math.max(rect.top, 0)
      const ratio = Math.max(0, visible) / rect.height
      if (ratio > bestScore) {
        bestScore = ratio
        bestId = sec.id
      }
    })

    if (bestScore >= 0.6) return bestId

    let nearestId = ''
    let nearestDist = Infinity
    sections.forEach((sec) => {
      const rect = sec.getBoundingClientRect()
      const dist = Math.abs(rect.top)
      if (dist < nearestDist) {
        nearestDist = dist
        nearestId = sec.id
      }
    })
    return nearestId
  }

  // Listen for a sync event to re-align active menu with current viewport
  const syncHandler = useCallback(() => {
    setManualActive(false)
    if (inHero) {
      setActiveSection('')
      return
    }
    const id = computeActiveSectionFromViewport()
    if (id) setActiveSection(id)
  }, [inHero])
  useEvent(APP_EVENTS.NAV_SYNC_ACTIVE_SECTION, syncHandler)

  return (
    <header
      className={
        isSticky
          ? 'fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-gradient-to-t from-slate-100/80 to-sky-50/80 ring-1 ring-slate-200 backdrop-blur dark:border-sky-900/50 dark:from-slate-800/80 dark:to-sky-950/80 dark:ring-white/10'
          : 'absolute inset-x-0 top-0 z-50'
      }
    >
      <div className="mx-auto max-w-7xl">
        <div className={isSticky ? 'px-6 py-4 lg:px-8' : 'px-6 pt-6 lg:max-w-3xl lg:pr-0 lg:pl-8'}>
          <nav
            aria-label="Global"
            className={
              isSticky
                ? 'grid grid-cols-3 items-center'
                : 'flex items-center justify-between lg:justify-start'
            }
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={
                isSticky
                  ? 'col-start-1 -m-1.5 p-1.5 lg:justify-self-start'
                  : '-m-1.5 p-1.5 lg:justify-self-start'
              }
            >
              <span className="sr-only">My New Portfolio</span>
              <img
                alt="Logo"
                src={Logo}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="size-12 flex-shrink-0 object-contain sm:size-14 lg:size-14 lg:rounded-lg lg:bg-slate-900/10 lg:p-1.5 lg:shadow-xl lg:ring-1 lg:ring-slate-900/10 lg:hover:bg-slate-900/20 lg:hover:ring-slate-900/20 dark:lg:bg-white/10 dark:lg:ring-white/10 dark:lg:hover:bg-white/20 dark:lg:hover:ring-white/20"
              />
            </button>

            {/* desktop menus - Moved to middle column */}
            <div
              className={
                isSticky
                  ? 'col-start-2 hidden items-center justify-center lg:flex lg:gap-x-14'
                  : 'hidden items-center lg:ml-12 lg:flex lg:gap-x-14'
              }
            >
              {navigation.map((item) => (
                <button
                  type="button"
                  key={item.name}
                  onClick={(e) => {
                    e.preventDefault()
                    if (item.name === 'Profile') {
                      dispatchAppEvent(APP_EVENTS.PROFILE_OPEN)
                    } else {
                      scrollToSection(item.href)
                    }
                  }}
                  className={`text-base font-semibold ${isActive(item.href) ? 'text-sky-600' : 'text-slate-800 hover:text-sky-600 dark:text-white dark:hover:text-sky-700'} ${item.name === 'Get in Touch' ? 'whitespace-nowrap' : ''}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* theme toggle + mobile menu button - Moved to last column */}
            <div
              className={
                isSticky
                  ? 'col-start-3 flex items-center gap-1 justify-self-end'
                  : 'flex items-center gap-1 lg:ml-12'
              }
            >
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="rounded-lg p-2 text-slate-700 transition-colors duration-200 hover:bg-slate-100 dark:text-gray-200 dark:hover:bg-white/10"
              >
                {theme === 'dark' ? (
                  <SunIcon aria-hidden="true" className="size-5" />
                ) : (
                  <MoonIcon aria-hidden="true" className="size-5" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 rounded-lg p-2.5 text-slate-700 lg:hidden dark:text-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-8" />
              </button>
            </div>
          </nav>
        </div>
      </div>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-t from-white to-sky-50 p-6 sm:max-w-sm sm:ring-1 sm:ring-slate-200 dark:from-slate-800 dark:to-sky-950 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="-m-1.5 p-1.5"
            >
              <span className="sr-only">My New Portfolio</span>
              <img
                alt="Logo"
                src={Logo}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="size-12 object-contain"
              />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-lg p-2.5 text-slate-700 dark:text-gray-200"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-8" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-200 dark:divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    type="button"
                    key={item.name}
                    onClick={() => {
                      setMobileMenuOpen(false)
                      if (item.name === 'Profile') {
                        dispatchAppEvent(APP_EVENTS.PROFILE_OPEN)
                      } else {
                        scrollToSection(item.href)
                      }
                    }}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${isActive(item.href) ? 'text-sky-600' : 'text-slate-800 dark:text-white'} ${item.name === 'Get in Touch' ? 'whitespace-nowrap' : ''}`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
