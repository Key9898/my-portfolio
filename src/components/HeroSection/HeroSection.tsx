import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

const Resume = '/Resume/wunna-resume.pdf'
const HeroMobile = '/Hero/hero_mobile.jpg'
const HeroTablet = '/Hero/hero_tablet.jpg'
const HeroDesktop = '/Hero/hero_desktop.jpg'

export default function HeroSection() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <div className="h-[100dvh] overflow-hidden bg-gradient-to-t from-slate-100 to-sky-50 dark:from-slate-800 dark:to-sky-950">
      <div className="relative h-full">
        <div className="mx-auto h-full max-w-7xl">
          <div className="relative z-10 flex h-full items-center lg:w-full lg:max-w-2xl">
            {/* Divider stays */}
            <div className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform bg-gradient-to-t from-slate-100 to-sky-50 [clip-path:polygon(0_0,100%_0,55%_100%,0_100%)] lg:block dark:from-slate-800 dark:to-sky-950" />
            <div className="relative w-full px-4 sm:px-8 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-xl lg:mx-0 lg:max-w-xl">
                <h2 className="text-5xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-7xl dark:text-white">
                  Crafting Digital Experiences
                </h2>
                <p className="mt-8 ml-1 text-lg/8 font-medium text-pretty text-slate-700 sm:ml-1 sm:text-xl/8 dark:text-white/80">
                  I am a passionate Frontend Developer focused on building clean, efficient, and
                  responsive user interfaces. I specialize in turning complex problems into
                  beautiful and functional digital experiences.
                </p>

                <div className="mt-6 ml-2 flex sm:mt-10 sm:ml-2 lg:ml-1">
                  <div className="relative flex max-w-full flex-wrap items-center gap-2 rounded-lg bg-sky-100/50 px-3 py-2 shadow-xl ring-1 ring-sky-300/50 sm:bg-sky-100/50 sm:px-4 sm:py-2 sm:ring-1 sm:ring-sky-300/50 lg:bg-slate-900/10 lg:px-6 lg:py-2 lg:ring-1 lg:ring-slate-900/10 lg:hover:bg-slate-900/20 lg:hover:ring-slate-900/20 dark:bg-sky-900/50 dark:ring-white/20 dark:sm:bg-sky-900/50 dark:sm:ring-white/20 dark:lg:bg-white/10 dark:lg:ring-white/10 dark:lg:hover:bg-white/20 dark:lg:hover:ring-white/20">
                    <span className="flex-1 text-xs text-slate-600 sm:text-base lg:text-base dark:text-gray-400">
                      For a detailed look at my background.
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        // New tab
                        window.open(Resume, '_blank', 'noopener,noreferrer')
                        // Download
                        const link = document.createElement('a')
                        link.href = Resume
                        link.download = 'Wunna_Aung_CV.pdf'
                        document.body.appendChild(link)
                        link.click()
                        document.body.removeChild(link)
                      }}
                      className="flex-shrink-0 text-xs font-semibold text-sky-500 transition-transform duration-300 hover:scale-110 sm:text-base sm:whitespace-nowrap sm:text-sky-500 lg:text-base lg:text-sky-600"
                    >
                      Download Resume <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <button
          type="button"
          aria-label="Scroll to Capabilities"
          onClick={() => {
            scrollToSection('capabilities')
          }}
          className="absolute inset-x-0 bottom-0 z-20 mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900/10 text-slate-700 shadow-xl ring-1 ring-slate-900/20 transition-all duration-200 hover:scale-105 hover:bg-slate-900/20 dark:bg-white/10 dark:text-white dark:ring-white/20 dark:hover:bg-white/20"
        >
          <ChevronDoubleDownIcon aria-hidden="true" className="size-6 animate-bounce" />
        </button>
        {/* Background image: full cover on all sizes, right half on lg+ */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-sky-50 lg:inset-y-0 lg:right-0 lg:left-auto lg:w-1/2 dark:from-slate-800 dark:to-sky-950">
          <img
            alt="Developer workspace with modern setup"
            src={HeroDesktop}
            srcSet={`${HeroMobile} 768w, ${HeroTablet} 1280w, ${HeroDesktop} 1920w`}
            sizes="(min-width:1024px) 50vw, 100vw"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-slate-300/10 dark:bg-slate-700/30"></div>
        </div>
      </div>
    </div>
  )
}
