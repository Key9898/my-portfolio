import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { useRef } from 'react'

const tabs = [
  { name: 'Showcase', href: 'showcase', current: false },
  { name: 'WordPress Projects', href: 'wordpress-projects', current: false },
  { name: 'React Projects', href: 'react-projects', current: false },
]

interface TabsProps {
  activeTab: string
  onTabChange: (tabName: string) => void
}

export default function ShowcaseTabs({ activeTab, onTabChange }: TabsProps) {
  const mobileScrollRef = useRef<HTMLElement>(null)
  const tabletScrollRef = useRef<HTMLElement>(null)

  const handleTabClick = (tabName: string) => {
    onTabChange(tabName)
  }

  const scrollByStep = (el: HTMLElement | null, direction: 'left' | 'right') => {
    if (!el) return
    const step = Math.max(120, Math.floor(el.clientWidth * 0.6))
    const delta = direction === 'left' ? -step : step
    if (
      typeof (el as HTMLElement & { scrollBy?: (options: ScrollToOptions) => void }).scrollBy ===
      'function'
    ) {
      el.scrollBy({ left: delta, behavior: 'smooth' })
    } else {
      el.scrollLeft += delta
    }
  }

  const scrollLeftMobile = () => scrollByStep(mobileScrollRef.current, 'left')
  const scrollRightMobile = () => scrollByStep(mobileScrollRef.current, 'right')
  const scrollLeftTablet = () => scrollByStep(tabletScrollRef.current, 'left')
  const scrollRightTablet = () => scrollByStep(tabletScrollRef.current, 'right')

  return (
    <div className="mt-0">
      {/* Make tabs take the exact column width */}
      <div className="w-full px-0">
        <div className="py-4 pt-0">
          {/* Mobile horizontal scrollable tabs with navigation arrows */}
          <div className="md:hidden">
            <div className="relative flex items-center">
              {/* Left arrow */}
              <button
                type="button"
                onClick={scrollLeftMobile}
                className="mr-2 mb-2 flex-shrink-0 rounded-lg border border-slate-200 bg-white p-1 shadow-lg transition-colors hover:bg-slate-50 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="h-4 w-4 text-slate-600 dark:text-gray-300" />
              </button>

              {/* Scrollable tabs container */}
              <nav
                ref={mobileScrollRef}
                className="scrollbar-hide flex flex-1 space-x-6 overflow-x-auto scroll-smooth pr-2 pb-2"
              >
                {tabs.map((tab) => (
                  <button
                    type="button"
                    key={tab.name}
                    onClick={() => handleTabClick(tab.name)}
                    className={`flex-shrink-0 text-base font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.name
                        ? 'border-sky-600 text-sky-600'
                        : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-600 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-200'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>

              {/* Right arrow */}
              <button
                type="button"
                onClick={scrollRightMobile}
                className="mb-2 ml-4 flex-shrink-0 rounded-lg border border-slate-200 bg-white p-1 shadow-lg transition-colors hover:bg-slate-50 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="h-4 w-4 text-slate-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Tablet horizontal scrollable tabs with navigation arrows */}
          <div className="hidden md:block lg:hidden">
            <div className="relative flex items-center">
              {/* Left arrow */}
              <button
                type="button"
                onClick={scrollLeftTablet}
                className="mr-2 mb-2 flex-shrink-0 rounded-lg border border-slate-200 bg-white p-1 shadow-lg transition-colors hover:bg-slate-50 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="h-6 w-6 text-slate-600 dark:text-gray-300" />
              </button>

              {/* Scrollable tabs container */}
              <nav
                ref={tabletScrollRef}
                className="scrollbar-hide flex flex-1 space-x-6 overflow-x-auto scroll-smooth pr-2 pb-2"
              >
                {tabs.map((tab) => (
                  <button
                    type="button"
                    key={tab.name}
                    onClick={() => handleTabClick(tab.name)}
                    className={`flex-shrink-0 text-base font-medium whitespace-nowrap transition-colors ${
                      activeTab === tab.name
                        ? 'border-sky-600 text-sky-600'
                        : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-600 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-200'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>

              {/* Right arrow */}
              <button
                type="button"
                onClick={scrollRightTablet}
                className="mb-2 ml-4 flex-shrink-0 rounded-lg border border-slate-200 bg-white p-1 shadow-lg transition-colors hover:bg-slate-50 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="h-6 w-6 text-slate-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Desktop tabs */}
          <div className="hidden lg:block">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  type="button"
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  className={`border-b-2 px-1 py-2 text-base font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.name
                      ? 'border-sky-600 text-sky-600'
                      : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-600 dark:text-gray-400 dark:hover:border-gray-500 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
